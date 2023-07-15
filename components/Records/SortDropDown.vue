<script setup>
	import { ArrowsUpDownIcon } from "@heroicons/vue/24/outline";

	const { data, tableConfig } = defineProps(["data", "tableConfig"]);

	const store = tableConfig.store();
	const emit = defineEmits(["sortData"]);

	const sortObject = ref({});

	onMounted(() => {
		// set the dropdown menu element
		const $targetElHide = document.getElementById("sortDropDownMenu");

		// set the element that trigger the dropdown menu on click
		const $triggerElHide = document.getElementById("sortDropDownBtn");

		// options with default values
		const options = {
			placement: "bottom",
			triggerType: "click",
			offsetSkidding: 0,
			offsetDistance: 10,
			delay: 300,
		};

		const sortDropDown = new Dropdown($targetElHide, $triggerElHide, options);
	});

	onBeforeMount(() => {
		tableConfig.headers.forEach((item) => {
			if (item.type === "text" || item.type === "email")
				sortObject.value[item.field] = "stringAsc";
			else if (item.type === "tel" || item.type === "number")
				sortObject.value[item.field] = "numberAsc";
			else if (item.type === "date") sortObject.value[item.field] = "dateAsc";
		});

		if (data) {
			console.log(data);
			sortObject.value[data.header.field] = data.operator;

			if (data.header.type === "text" || data.header.type === "email") {
				sortString(data.header);
				emit("sortData");
			} else if (data.header.type === "tel" || data.header.type === "number") {
				sortNumber(data.header);
				emit("sortData");
			} else if (data.header.type === "date") {
				sortDate(data.header);
				emit("sortData");
			}
		}
	});

	const emitEventHandler = (header, operator) => {
		let sort = {};
		if (header && operator) {
			sort.header = header;
			sort.operator = operator;

			emit("sortData", sort);
		} else emit("sortData");
	};

	const sortString = (header) => {
		if (sortObject.value[header.field] === "stringAsc") {
			store.sortByStringAtoZ(header);
			emitEventHandler(header, sortObject.value[header.field]);
		} else if (sortObject.value[header.field] === "stringDesc") {
			store.sortByStringZtoA(header);
			emitEventHandler(header, sortObject.value[header.field]);
		}
	};

	const sortNumber = (header) => {
		if (sortObject.value[header.field] === "numberAsc") {
			store.sortByNumber1to9(header);
			emitEventHandler(header, sortObject.value[header.field]);
		} else if (sortObject.value[header.field] === "numberDesc") {
			store.sortByNumber9to1(header);
			emitEventHandler(header, sortObject.value[header.field]);
		}
	};

	const sortDate = (header) => {
		if (sortObject.value[header.field] === "dateAsc") {
			store.sortByDate1to12(header);
			emitEventHandler(header, sortObject.value[header.field]);
		} else if (sortObject.value[header.field] === "dateDesc") {
			store.sortByDate12to1(header);
			emitEventHandler(header, sortObject.value[header.field]);
		}
	};
</script>

<template>
	<button
		id="sortDropDownBtn"
		data-dropdown-toggle="sortDropDownMenu"
		class="focus:outline-none text-gray-500 font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center border border-gray-400 hover:bg-gray-400 hover:text-white"
		type="button">
		<ArrowsUpDownIcon class="w-5 h-5" />
	</button>
	<!-- Dropdown menu -->
	<div
		id="sortDropDownMenu"
		class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 w-60">
		<ul
			class="px-3 py-2 text-sm text-gray-700 dark:text-gray-200"
			aria-labelledby="sortDropDownBtn">
			<template v-for="(header, i) in tableConfig.headers" :key="i">
				<li v-if="header.is_visible" class="flex items-center gap-2">
					<span class="w-full py-2 text-start"> {{ header.name }} </span>
					<select
						@change="sortString(header)"
						v-if="header.type === 'text' || header.type === 'email'"
						v-model="sortObject[header.field]"
						class="block w-full px-2 py-1 text-xs text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-gray-500 focus:border-gray-400">
						<option value="stringAsc" selected>A &rarr; Z</option>
						<option value="stringDesc">Z &rarr; A</option>
					</select>
					<select
						@change="sortNumber(header)"
						v-if="header.type === 'tel' || header.type === 'number'"
						v-model="sortObject[header.field]"
						class="block w-full px-2 py-1 text-xs text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-gray-500 focus:border-gray-400">
						<option value="numberAsc" selected>1 &rarr; 9</option>
						<option value="numberDesc">9 &rarr; 1</option>
					</select>
					<select
						@change="sortDate(header)"
						v-if="header.type === 'date'"
						v-model="sortObject[header.field]"
						class="block w-full px-2 py-1 text-xs text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-gray-500 focus:border-gray-400">
						<option value="dateAsc" selected>1 &rarr; 9</option>
						<option value="dateDesc">9 &rarr; 1</option>
					</select>
				</li>
			</template>
		</ul>
	</div>
</template>
