<script setup>
	import {
		FunnelIcon,
		PlusIcon,
		AdjustmentsHorizontalIcon,
	} from "@heroicons/vue/24/outline";
	import { XMarkIcon, TrashIcon } from "@heroicons/vue/24/solid";
	import { Dropdown, initDropdowns } from "flowbite";

	const { data, tableConfig } = defineProps(["data", "tableConfig"]);

	const emit = defineEmits(["filterData"]);

	// PINIA store

	const store = tableConfig.store();

	const filterDropdown = ref(null);
	const filters = ref([
		{
			selectField: null,
			selectHeader: null,
			text: { text: "", op: "is" },
			num: { num: "", op: "is" },
			date: { date: "", op: "is" },
		},
	]);

	onBeforeMount(() => {
		if (data) {
			filters.value = data;
			filterHandler();
		}
	});

	onMounted(() => {
		createFilterDropdown();
	});

	const resetHandler = () => {
		// filterDropdown.value.hide();
		store.resetFilterFields();
		filters.value = [];
		addEmptyFilter();

		emit("filterData");
	};

	const createFilterDropdown = () => {
		const targetEl = document.querySelector("#filterDropDownMenu");
		const triggerEl = document.querySelector("#filterDropDownBtn");

		const options = {
			placement: "bottom",
			triggerType: "click",
			offsetSkidding: 10,
			offsetDistance: 20,
			delay: 300,
		};

		filterDropdown.value = new Dropdown(targetEl, triggerEl, options);
	};

	const filterHandler = (closeDropdown) => {
		store.resetFilterFields();

		filters.value.forEach((filter) => {
			if (
				filter.selectHeader?.type === "text" ||
				filter.selectHeader?.type === "email"
			) {
				store.filterDataByText(
					filter.text.text,
					filter.text.op,
					filter.selectHeader.field
				);
			} else if (
				filter.selectHeader?.type === "tel" ||
				filter.selectHeader?.type === "number"
			) {
				store.filterDataByNum(
					filter.num.num,
					filter.num.op,
					filter.selectHeader.field
				);
			} else if (filter.selectHeader?.type === "date") {
				store.filterDataByDate(
					filter.date.date,
					filter.date.op,
					filter.selectHeader.field
				);
			}
		});
		// if (closeDropdown === true) filterDropdown.value.hide();

		emit("filterData", filters.value);
		// createFilterDropdown();
	};

	const addEmptyFilter = () => {
		filters.value.push({
			selectField: null,
			selectHeader: null,
			text: { text: "", op: "is" },
			num: { num: "", op: "is" },
			date: { date: "", op: "is" },
		});
	};

	const deleteFilter = (index) => {
		filters.value.splice(index, 1);
		filterHandler();
	};
</script>

<template>
	<!-- FILTER Dropdown -->
	<button
		id="filterDropDownBtn"
		data-dropdown-toggle="filterDropDownMenu"
		class="focus:outline-none text-gray-500 font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center border border-gray-400 hover:bg-gray-400 hover:text-white">
		<FunnelIcon class="w-5 h-5" />
	</button>

	<!--FILTER Dropdown menu -->
	<div
		id="filterDropDownMenu"
		class="z-10 flex flex-col gap-2 p-3 hidden bg-white divide-y divide-gray-100 max-lg:w-28 rounded-md shadow">
		<ul
			v-for="(filter, index) in filters"
			:key="index"
			class="flex items-center gap-1 text-sm text-gray-700 max-lg:flex-col max-lg:items-start"
			aria-labelledby="filterDropDownBtn">
			<li class="mr-1 max-lg:hidden">
				<p>Where</p>
			</li>
			<li>
				<select
					v-model="filter.selectField"
					class="bg-gray-50 border border-gray-300 text-gray-800 text-sm focus:ring-green-400 focus:border-transparent rounded-md block w-full px-2 py-1 max-lg:w-full">
					<option
						v-for="header in tableConfig.headers"
						@click="filters[index].selectHeader = header"
						:value="header.name">
						{{ header.name }}
					</option>
				</select>
			</li>
			<li>
				<select
					v-if="
						filter.selectHeader?.type === 'text' ||
						filter.selectHeader?.type === 'email'
					"
					v-model="filter.text.op"
					class="bg-gray-50 border border-gray-300 text-gray-800 text-sm focus:ring-green-400 focus:border-transparent rounded-md block w-full py-1 max-lg:w-full">
					<option selected value="is">is...</option>
					<option value="is-not">is not...</option>
				</select>

				<select
					v-if="
						filter.selectHeader?.type === 'tel' ||
						filter.selectHeader?.type === 'num'
					"
					v-model="filter.num.op"
					class="bg-gray-50 border border-gray-300 text-gray-800 text-sm focus:ring-green-400 focus:border-transparent rounded-md block w-full py-1 max-lg:w-full">
					<option selected value="eq">&#x208C;</option>
					<option value="nt-eq">&#x2260;</option>
					<option value="lt">&lt;</option>
					<option value="gt">&gt;</option>
					<option value="le">&le;</option>
					<option value="ge">&ge;</option>
				</select>

				<select
					v-if="filter.selectHeader?.type === 'date'"
					v-model="filter.date.op"
					class="bg-gray-50 border border-gray-300 text-gray-800 text-sm focus:ring-green-400 focus:border-transparent rounded-md block w-full py-1 max-lg:w-full">
					<option selected value="is">is...</option>
					<option value="is-before">is before...</option>
					<option value="is-after">is after...</option>
					<option value="is-on-before">is on or before...</option>
					<option value="is-on-after">is on or after...</option>
				</select>
			</li>
			<li>
				<input
					v-if="
						filter.selectHeader?.type === 'text' ||
						filter.selectHeader?.type === 'email'
					"
					:type="filter.selectHeader?.type"
					v-model="filter.text.text"
					class="bg-gray-50 border border-gray-300 text-gray-800 text-sm focus:ring-green-400 focus:border-transparent rounded-md block px-2 py-1 w-24 max-lg:w-full"
					required />

				<input
					v-if="
						filter.selectHeader?.type === 'tel' ||
						filter.selectHeader?.type === 'num'
					"
					:type="filter.selectHeader?.type"
					v-model="filter.num.num"
					class="bg-gray-50 border border-gray-300 text-gray-800 text-sm focus:ring-green-400 focus:border-transparent rounded-md block px-2 py-1 w-24 max-lg:w-full"
					required
					max="5"
					min="1" />

				<input
					v-if="filter.selectHeader?.type === 'date'"
					:type="filter.selectHeader?.type"
					v-model="filter.date.date"
					class="bg-gray-50 border border-gray-300 text-gray-800 text-sm focus:ring-green-400 focus:border-transparent rounded-md block px-2 py-1 w-24 max-lg:w-full"
					required />
			</li>
			<li v-if="filters.length > 1">
				<button
					@click="deleteFilter(index)"
					class="p-2 text-red-600 bg-white border border-red-300 rounded-full hover:bg-red-600 hover:text-white">
					<TrashIcon class="w-4 h-4 font-semibold" />
				</button>
			</li>
		</ul>
		<button
			@click="addEmptyFilter()"
			class="p-1 bg-green-400 hover:bg-green-500 border-gray-300 rounded-full text-base text-white font-semibold w-fit self-center">
			<PlusIcon class="w-5 h-5" />
		</button>
		<div class="flex gap-2 w-full">
			<button @click="filterHandler(true)" class="primary-button-sm flex-1">
				<AdjustmentsHorizontalIcon class="w-4 h-4" />
				Filter
			</button>
			<button @click="resetHandler()" class="secondary-button-sm flex-1">
				<XMarkIcon class="w-4 h-4" />
				Reset
			</button>
		</div>
	</div>
</template>
