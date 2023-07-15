import { config } from "@/agency.json";

export const useAgency = () => {
	const currRecord = useState("agency", () => {});

	const getCurrentRecordInfo = (info) => {
		currRecord.value = info;
	};

	return { currRecord, getCurrentRecordInfo };
};

export const useAgencyHideDropDown = () => {
	const tableTdVisible = useState("tableTdVisible", () => {
		let isVisible = {};

		config.forEach((item, index) => {
			if (index >= 8 && item.is_visible) isVisible[item.visibility] = false;
			else if (item.is_visible) isVisible[item.visibility] = true;
		});

		return isVisible;
	});

	const tdInit = () => {
		config.forEach((item, index) => {
			if (index >= 10 && item.is_visible)
				tableTdVisible.value[item.visibility] = false;
			else if (item.is_visible) tableTdVisible.value[item.visibility] = true;
		});
	};

	const tdToggle = (state) => {
		config.forEach((item) => {
			if (item.is_visible) tableTdVisible.value[item.visibility] = state;
		});
	};

	const showAllTableTd = () => {
		tdToggle(true);
	};

	const hideAllTableTd = () => {
		tdToggle(false);
	};

	return { tableTdVisible, tdInit, showAllTableTd, hideAllTableTd };
};

export const useAgencyGroup = () => {
	const grouped = useState("agencyGroup", () => ({
		active: false,
		groupedBy: null,
		header: null,
	}));

	const setGroup = (item) => {
		grouped.value = item;
	};

	const unsetGroup = () => {
		grouped.value = {
			active: false,
			groupedBy: null,
			header: null,
		};
	};

	return { grouped, setGroup, unsetGroup };
};
