<script setup>
definePageMeta({
	middleware: 'auth'
});

import {
	HandThumbDownIcon,
	EllipsisVerticalIcon,
	ArrowDownTrayIcon,
	PrinterIcon,
	ChevronDownIcon,
	XMarkIcon,
} from "@heroicons/vue/24/outline";

import {
	ChevronLeftIcon,
	ChevronRightIcon,
	PlusIcon,
	TrashIcon,
	PencilIcon,
} from "@heroicons/vue/24/solid";

import { initModals, initDropdowns, Dropdown } from "flowbite";

import { config } from "@/candidate.json";

const composable = await import("~/composables/candidate");
const piniaStore = await import("~/stores/candidate");

const store = piniaStore.useStore();
const tableKey = ref(0);
const saveView = ref({
	name: "Save view",
	filter: null,
	sort: null,
	hide: null,
	group: null,
});

const saveViewList = ref(null);
const saveViewDropdown = ref(null);
const isClearButtonShow = ref(false);

let tableConfig = {};

tableConfig.tableName = "candidate";
tableConfig.headers = config;

tableConfig.rowMap = new Map();
tableConfig.groupMap = new Map();

tableConfig.hideComposable = composable.useCandidateHideDropDown;
tableConfig.groupComposable = composable.useCandidateGroup;
tableConfig.changeGroup = changeGroup;
tableConfig.currentRecord = composable.useCandidate;

tableConfig.store = piniaStore.useStore;
tableConfig.drawerComponent = resolveComponent("CandidateDrawer");

tableConfig.headers.forEach((item) => {
	if (item.parent) {
		tableConfig.rowMap.set(item.name, {
			property: item.parent,
			visilibility: item.visibility,
			component: resolveComponent(item.component),
		});
	} else {
		tableConfig.rowMap.set(item.name, {
			property: item.field,
			visilibility: item.visibility,
			component: resolveComponent(item.component),
		});
	}

	if (item.is_group) tableConfig.groupMap.set(item.name, arrangeByGroup);
});

const createSaveViewDropdown = () => {
	const targetEl = document.querySelector("#records-save-view-dropdown");
	const triggerEl = document.querySelector(
		"#records-save-view-dropdown-button"
	);

	const options = {
		placement: "bottom",
		triggerType: "click",
		offsetSkidding: 0,
		offsetDistance: 10,
		delay: 300,
	};

	saveViewDropdown.value = new Dropdown(targetEl, triggerEl, options);
};

onBeforeMount(async () => {
	const { getRecords } = useRealmApp();
	store.initRecordsData();
	// saveViewList.value = await getRecords("payrol", "candidates");
	// if (store.recordsData?.length > 0) createSaveViewDropdown();
});

onMounted(() => {
	initModals();
	initDropdowns();

	const { tdInit } = tableConfig.hideComposable();
	tdInit();
});

const changePage = (changeTo) => {
	store.currentPage = changeTo;
	tableKey.value++;
};

const changePageStep = (changeTo) => {
	store.pageStep = changeTo;
	store.calculateNoOfPages();
	tableKey.value++;
};

const dataWrapper = () => {
	return store?.recordsData?.slice(
		(store.currentPage - 1) * store.pageStep,
		store.currentPage * store.pageStep
	);
};

async function addSaveView() {
	const { tableTdVisible } = tableConfig.hideComposable();
	const { grouped } = tableConfig.groupComposable();
	const { addRecordToDB } = useRealmApp();

	saveView.value.hide = tableTdVisible.value;
	saveView.value.group = grouped.value;
	console.log(saveView.value);

	const { insertedId } = await addRecordToDB(
		"db1",
		"saveView",
		saveView.value
	);
	saveView.value._id = insertedId;

	saveViewList.value.push(saveView.value);
	console.log(insertedId);
	saveViewDropdown.value.hide();
}

const clearSaveView = () => {
	const { unsetGroup } = tableConfig.groupComposable();

	isClearButtonShow.value = false;
	store.resetFilterFields();

	saveView.value = {
		name: "Save view",
		filter: null,
		sort: null,
		hide: null,
		group: null,
	};

	unsetGroup();

	tableKey.value++;
};

function applySaveView(item) {
	isClearButtonShow.value = true;
	if (saveView.value.name === item.name) return;

	const { tableTdVisible } = tableConfig.groupComposable();
	const { setGroup, unsetGroup } = tableConfig.groupComposable();

	store.resetFilterFields();
	filterHandler();

	saveView.value = item;

	if (item.hide) tableTdVisible.value = item.hide;
	if (item.group) setGroup(item.group);
	else unsetGroup();

	saveViewDropdown.value.hide();
	console.log("OK");
}

function filterHandler(filter) {
	if (filter) {
		console.log(filter);
		saveView.value.filter = filter;
	} else {
		saveView.value = {
			name: "Save view",
			filter: null,
			sort: null,
			hide: null,
			group: null,
		};
	}
	tableKey.value++;
}

function sortHandler(sort) {
	tableKey.value++;
	if (sort) {
		console.log(sort);
		saveView.value.sort = sort;
	}
}

function arrangeByGroup(data, header) {
	console.log(header);
	if (header.parent) {
		return data.reduce((acc, user) => {
			(acc[user[header.parent][header.field]] ||= []).push(user);
			return acc;
		}, {});
	} else {
		return data.reduce((acc, user) => {
			(acc[user[header.field]] ||= []).push(user);
			return acc;
		}, {});
	}
}

function changeGroup(list, evt, header) {
	if (evt.added !== undefined) {
		if (header.parent) {
			list[evt.added.newIndex][header.parent][header.field] =
				list[(evt.added.newIndex + 1) % list.length][header.parent][
				header.field
				];
		} else {
			list[evt.added.newIndex][header.field] =
				list[(evt.added.newIndex + 1) % list.length][header.field];
		}
	}
}
</script>

<template>
	<div v-if="store.recordsData?.length > 0" class="flex flex-col h-full px-5 pt-5">
		<header class="mb-4">
			<div class="flex items-center justify-between max-xl:flex-col max-xl:items-start max-xl:gap-4">
				<div class="flex max-lg:justify-between lg:w-fit w-full items-center gap-4">
					<h2 class="text-2xl sm:inline hidden font-bold">
						{{ store.recordsData.length }} Records
					</h2>
					<div class="flex gap-4">
						<!-- HIDE Dropdown -->
						<RecordsHideDropDown :headers="tableConfig.headers" :hideComposable="tableConfig.hideComposable" />

						<!-- SORT Dropdown -->
						<RecordsSortDropDown v-if="saveView.sort === null" :tableConfig="tableConfig"
							@sort-data="sortHandler($event)" />
						<RecordsSortDropDown v-else :data="saveView.sort" :tableConfig="tableConfig"
							@sort-data="sortHandler($event)" />

						<!-- FILTER Dropdown -->
						<RecordsFilterDropDown v-if="saveView.filter === null" :tableConfig="tableConfig"
							@filter-data="filterHandler($event)" />

						<RecordsFilterDropDown v-else :tableConfig="tableConfig" :data="saveView.filter"
							@filter-data="filterHandler($event)" />

						<RecordsGroupDropDown :headers="tableConfig.headers"
							:groupComposable="tableConfig.groupComposable" />
					</div>
				</div>

				<div class="flex items-center gap-4">
					<button v-if="isClearButtonShow" @click="clearSaveView" class="secondary-button gap-2">
						<XMarkIcon class="w-4 h-4" />
						Clear
					</button>
					<button id="records-save-view-dropdown-button" data-dropdown-toggle="records-save-view-dropdown"
						class="primary-button gap-2" type="button">
						{{ saveView?.name }}
						<ChevronDownIcon class="w-4 h-4" />
					</button>
					<!-- Dropdown menu -->
					<div id="records-save-view-dropdown"
						class="z-10 hidden bg-white divide-y divide-gray-100 rounded-md shadow w-fit dark:bg-gray-700 dark:divide-gray-600 text-sm">
						<div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
							<h2 class="font-medium">Save view</h2>
						</div>
						<ul class="py-2 text-gray-700 dark:text-gray-200"
							aria-labelledby="records-save-view-dropdown-button">
							<li @click="applySaveView(item)" v-for="item in saveViewList" :key="item._id">
								<a href="#"
									class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{{
										item.name }}</a>
							</li>
						</ul>
						<div class="p-2">
							<button id="save-view-button" data-modal-target="save-view-modal"
								data-modal-toggle="save-view-modal" class="primary-button-sm">
								<PlusIcon class="w-5 h-5 font-bold max-md:w-5 max-md:h-5" />
								Add new
							</button>
						</div>
					</div>
					<div id="save-view-modal" tabindex="-1" aria-hidden="true"
						class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
						<div class="relative w-full max-w-md max-h-full">
							<!-- Modal content -->
							<div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
								<button type="button"
									class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
									data-modal-hide="save-view-modal">
									<XMarkIcon class="w-5 h-5" />
									<span class="sr-only">Close modal</span>
								</button>
								<div class="px-6 py-6 lg:px-8">
									<h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
										Save view
									</h3>
									<div class="space-y-6" action="#">
										<div>
											<label for="save-view-name"
												class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Template
												name</label>
											<input type="text" name="save-view-name" id="save-view-name"
												v-model="saveView.name"
												class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
												placeholder="Name" required />
										</div>

										<button @click="addSaveView()" data-modal-hide="save-view-modal" type="submit"
											class="w-full text-gray-800 bg-yellow-300 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-yellow-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">
											Save
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- This is multi-select delete -->
					<button v-if="store.selectedRecords.length > 0" id="deleteSelectedRecordButton"
						data-modal-toggle="deleteSelectedRecord"
						class="p-2 mr-5 text-red-600 bg-white border border-red-300 rounded-md hover:bg-red-600 hover:text-white">
						<TrashIcon class="w-6 h-6 font-semibold" />
					</button>
					<RecordsDeleteSelected v-if="store.selectedRecords.length > 0" @delete-record="
						store.deleteRecord();
					tableKey++;
					" :length="store.selectedRecords.length" />

					<button id="addRecordButton" data-modal-toggle="addRecord"
						class="flex items-center gap-1 border-2 rounded-md border-black px-5 py-[.54rem] max-md:p-2">
						<PlusIcon class="w-4 h-4 font-semibold max-md:w-5 max-md:h-5" />
						<span class="text-sm font-medium max-md:hidden">Add Record</span>
					</button>
					<RecordsAdd :headers="tableConfig.headers" @add-record="
						store.addRecord($event);
					tableKey++;
					" />
				</div>
			</div>
		</header>

		<RecordsTable :key="tableKey" :TABLE_DATA="dataWrapper()" :tableConfig="tableConfig"
			@refresh-records="tableKey++" />

		<footer class="flex items-center justify-between py-3 mt-auto mb-2">
			<Pagination :key="tableKey" :totalPages="store.totalPages" :currentPage="store.currentPage"
				:pageStep="store.pageStep" @change="changePage($event)" @change-step="changePageStep($event)" />
		</footer>
	</div>
</template>
