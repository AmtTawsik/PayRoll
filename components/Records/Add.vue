<template>
	<div
		id="addRecord"
		tabindex="-1"
		aria-hidden="true"
		class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full">
		<div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
			<!-- Modal content -->
			<div
				class="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
				<!-- Modal header -->
				<div
					class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
					<h3 class="text-xl font-semibold text-gray-900 dark:text-white">
						Add Record
					</h3>
					<button
						type="button"
						class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
						data-modal-toggle="addRecord">
						<XMarkIcon class="w-5 h-5" />
						<span class="sr-only">Close modal</span>
					</button>
				</div>
				<!-- Modal body -->
				<form id="add-record-form" action="#" @submit.prevent="addNewRecord()">
					<div class="grid gap-4 mb-8 sm:grid-cols-2">
						<template v-for="(header, i) in headers" :key="i">
							<div v-if="header.is_add">
								<label
									:for="`add-${header.name}`"
									class="block mb-2 text-base font-medium text-gray-900 dark:text-white"
									>{{ header.name }}</label
								>
								<input
									v-if="header.parent === null && header.dropdown === false"
									v-model="newRecord[header.field]"
									:type="header.type"
									:name="`add-${header.name}`"
									:id="`add-${header.name}`"
									class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
									:placeholder="header.name"
									required />
								<input
									v-else-if="
										header.parent !== null && header.dropdown === false
									"
									v-model="newRecord[header.parent][header.field]"
									:type="header.type"
									:name="`add-${header.name}`"
									:id="`add-${header.name}`"
									class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
									:placeholder="header.name"
									required />

								<select
									v-else-if="header.parent === null && header.dropdown === true"
									v-model="newRecord[header.field]"
									:id="`add-${header.name}`"
									class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
									required>
									<option value="" disabled>Select {{ header.name }}</option>
									<option
										v-for="(opt, index) in header.options"
										:key="index"
										:value="opt">
										{{ opt }}
									</option>
								</select>
								<select
									v-else-if="header.parent !== null && header.dropdown === true"
									v-model="newRecord[header.parent][header.field]"
									:id="`add-${header.name}`"
									class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
									required>
									<option value="" disabled>Select {{ header.name }}</option>
									<option
										v-for="(opt, index) in header.options"
										:key="index"
										:value="opt">
										{{ opt }}
									</option>
								</select>
							</div>
						</template>
					</div>
					<button
						data-modal-toggle="addRecord"
						type="submit"
						class="primary-button">
						Add record
					</button>
				</form>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { initModals } from "flowbite";
	import { XMarkIcon } from "@heroicons/vue/24/outline";

	const newRecord = ref(null);

	const emit = defineEmits(["addRecord"]);
	const { headers } = defineProps(["headers"]);

	onMounted(() => {
		initModals();
	});

	const initNewRecord = () => {
		newRecord.value = {};
		headers.forEach((element) => {
			if (element.is_add && element.parent) {
				newRecord.value[element.parent] = {};
				newRecord.value[element.parent][element.field] = "";
			} else if (element.is_add && !element.parent) {
				newRecord.value[element.field] = "";
			}
		});
	};

	initNewRecord();

	const addNewRecord = () => {
		emit("addRecord", newRecord.value);
		initNewRecord();
	};
</script>

<style scoped></style>
