import { defineStore } from "pinia";

export const useStore = defineStore("agencyCounter", {
	state: () => ({
		recordsData: null,
		recordsDataBackup: null,
		selectedRecords: [],
		dbName: "payroll",
		colName: "agencies",
	}),

	getters: {
		data: (state) => state.recordsData,
	},

	actions: {
		calculateNoOfPages() {
			this.totalPages = Math.ceil(this.recordsData.length / this.pageStep);
		},

		async initRecordsData() {
			const { getRecords } = useRealmApp();
			this.recordsData = await getRecords(this.dbName, this.colName);

			// if (this.recordsData.length > 10) this.recordsData.length = 10;
			// this.recordsDataBackup = this.recordsData;
			this.recordsDataBackup = this.recordsData;
			this.calculateNoOfPages();
			this.currentPage = 1;
		},

		selectRecord(id) {
			this.selectedRecords.push(id);
		},

		unselectRecord(id) {
			const index = this.selectedRecords.indexOf(id);
			this.selectedRecords.splice(index, 1);
		},

		findById(id) {
			let temp = this.recordsData.find(
				(item) => item._id.toString() === id.toString()
			);
			console.log(temp);
			return temp;
		},

		async addRecord(data) {
			const { addRecordToDB } = useRealmApp();

			// data.full_name = `${data.first_name} ${data.last_name}`;
			// data.start_date = new Date(data.start_date);
			// data.end_date = new Date(data.end_date);

			const { insertedId } = await addRecordToDB(
				this.dbName,
				this.colName,
				data
			);
			data._id = insertedId;
			this.recordsData.push(data);
			this.recordsDataBackup = this.recordsData;
			this.selectedRecords = [];
		},

		updateRecord(data) {
			const { updateRecordFromDB } = useRealmApp();
			const index = this.recordsData.findIndex(
				(element) => data._id.toString() === element._id.toString()
			);
			console.log(data, this.selectedRecords, index);
			this.recordsData[index] = data;
			this.recordsDataBackup = this.recordsData;
			updateRecordFromDB(this.dbName, this.colName, data);
			this.selectedRecords = [];
		},

		deleteRecord(_id) {
			const { deleteRecordFromDB } = useRealmApp();

			if (_id) {
				const index = this.recordsData.findIndex(
					(element) => _id === element._id
				);
				this.recordsData.splice(index, 1);
				this.recordsDataBackup = this.recordsData;
				deleteRecordFromDB(this.dbName, this.colName, _id);
			} else {
				this.selectedRecords.forEach((id) => {
					const index = this.recordsData.findIndex(
						(element) => id === element._id
					);
					this.recordsData.splice(index, 1);
					deleteRecordFromDB(this.dbName, this.colName, id);
				});
				this.recordsDataBackup = this.recordsData;
				this.selectedRecords = [];
			}
		},

		sortByStringAtoZ(header) {
			if (header.parent) {
				return this.recordsData.sort((a, b) =>
					a[header.parent][header.field].localeCompare(
						b[header.parent][header.field]
					)
				);
			} else {
				return this.recordsData.sort((a, b) =>
					a[header.field].localeCompare(b[header.field])
				);
			}
		},

		sortByStringZtoA(header) {
			if (header.parent) {
				return this.recordsData.sort((a, b) =>
					b[header.parent][header.field].localeCompare(
						a[header.parent][header.field]
					)
				);
			} else {
				return this.recordsData.sort((a, b) =>
					b[header.field].localeCompare(a[header.field])
				);
			}
		},

		sortByNumber1to9(header) {
			if (header.parent) {
				return this.recordsData.sort(
					(a, b) =>
						a[header.parent][header.field] - b[header.parent][header.field]
				);
			} else {
				return this.recordsData.sort(
					(a, b) => a[header.field] - b[header.field]
				);
			}
		},

		sortByNumber9to1(header) {
			if (header.parent) {
				return this.recordsData.sort(
					(a, b) =>
						b[header.parent][header.field] - a[header.parent][header.field]
				);
			} else {
				return this.recordsData.sort(
					(a, b) => b[header.field] - a[header.field]
				);
			}
		},

		sortByDate1to12(header) {
			if (header.parent) {
				return this.recordsData.sort(
					(a, b) =>
						a[header.parent][header.field] - b[header.parent][header.field]
				);
			} else {
				return this.recordsData.sort(
					(a, b) => a[header.field] - b[header.field]
				);
			}
		},

		sortByDate12to1(header) {
			if (header.parent) {
				return this.recordsData.sort(
					(a, b) =>
						b[header.parent][header.field] - a[header.parent][header.field]
				);
			} else {
				return this.recordsData.sort(
					(a, b) => b[header.field] - a[header.field]
				);
			}
		},

		filterDataByField(cb) {
			let temp = this.recordsData.filter(cb);
			this.recordsData = temp;
			console.log(this.recordsData, temp);
		},

		filterDataByText(keyword, operator, field) {
			const nestedKeys = field.split(".");

			this.filterDataByField((item) => {
				let fieldValue = item;
				// Traverse the nested keys to access the final value
				for (const key of nestedKeys) {
					if (fieldValue && fieldValue.hasOwnProperty(key)) {
						fieldValue = fieldValue[key];
					} else {
						fieldValue = undefined;
						break;
					}
				}

				// Perform the filtering based on the operator and keyword
				switch (operator) {
					case "is":
						return (
							fieldValue &&
							fieldValue.toLowerCase().includes(keyword.toLowerCase())
						);
					case "is-not":
						return (
							!fieldValue ||
							!fieldValue.toLowerCase().includes(keyword.toLowerCase())
						);
					default:
						return true; // No operator specified, return all data
				}
			});
		},

		filterDataByNum(inputNum, operator, field) {
			switch (operator) {
				case "eq":
					this.filterDataByField((item) => item[field] === inputNum);
					break;
				case "nt-eq":
					this.filterDataByField((item) => item[field] !== inputNum);
					break;
				case "lt":
					this.filterDataByField((item) => item[field] < inputNum);
					break;
				case "gt":
					this.filterDataByField((item) => item[field] > inputNum);
					break;
				case "le":
					this.filterDataByField((item) => item[field] <= inputNum);
					break;
				case "ge":
					this.filterDataByField((item) => item[field] >= inputNum);
					break;
			}
		},

		filterDataByDate(targetDate, operator, field) {
			switch (operator) {
				case "is":
					this.filterDataByField(
						(item) => item[field].getTime() === new Date(targetDate).getTime()
					);
					break;
				case "is-before":
					this.filterDataByField(
						(item) => item[field].getTime() < new Date(targetDate).getTime()
					);
					break;
				case "is-after":
					this.filterDataByField(
						(item) => item[field].getTime() > new Date(targetDate).getTime()
					);
					break;
				case "is-on-before":
					this.filterDataByField(
						(item) => item[field].getTime() <= new Date(targetDate).getTime()
					);
					break;
				case "is-on-after":
					this.filterDataByField(
						(item) => item[field].getTime() >= new Date(targetDate).getTime()
					);
					break;
			}
		},

		resetFilterFields() {
			this.recordsData = this.recordsDataBackup;
		},
	},
});
