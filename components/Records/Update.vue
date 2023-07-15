<template>
	<div
		v-if="recordData"
		:id="`updateRecord-${recordData._id}`"
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
						Edit Record
					</h3>
					<button
						type="button"
						class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
						:data-modal-toggle="`updateRecord-${recordData._id}`">
						<svg
							aria-hidden="true"
							class="w-5 h-5"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg">
							<path
								fill-rule="evenodd"
								d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
								clip-rule="evenodd"></path>
						</svg>
						<span class="sr-only">Close modal</span>
					</button>
				</div>
				<!-- Modal body -->
				<form
					id="update-record-form"
					action="#"
					@submit.prevent="updateRecordHandler()">
					<div class="grid gap-4 mb-8 sm:grid-cols-2">
						<template v-for="(header, i) in headers" :key="i">
							<div v-if="header.is_update">
								<label
									:for="`add-${header.name}`"
									class="block mb-2 text-base font-medium text-gray-900 dark:text-white"
									>{{ header.name }}</label
								>
								<input
									v-if="header.parent === null && header.dropdown === false"
									v-model="recordData[header.field]"
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
									v-model="recordData[header.parent][header.field]"
									:type="header.type"
									:name="`add-${header.name}`"
									:id="`add-${header.name}`"
									class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
									:placeholder="header.name"
									required />

								<select
									v-else-if="header.parent === null && header.dropdown === true"
									v-model="recordData[header.field]"
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
									v-model="recordData[header.parent][header.field]"
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
						@click="updateRecordHandler()"
						type="submit"
						:data-modal-toggle="`updateRecord-${recordData._id}`"
						class="primary-button">
						Update record
					</button>
				</form>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { initModals } from "flowbite";
	import { BSON } from "realm-web";

	const { data, headers } = defineProps(["data", "headers"]);
	const recordData = ref(null);

	const emit = defineEmits(["updateRecord"]);

	onBeforeMount(() => {
		recordData.value = JSON.parse(JSON.stringify(data));
		recordData.value._id = BSON.ObjectID(recordData.value._id);
		let tempDate = new Date(recordData.value.start_date);

		let date = tempDate.getDate();
		if (date < 10) {
			date = date.toString().padStart(2, "0");
		}

		let month = tempDate.getMonth() + 1;
		if (month < 10) {
			month = month.toString().padStart(2, "0");
		}

		let year = tempDate.getFullYear();

		recordData.value.start_date = [year, month, date].join("-");
		tempDate = new Date(recordData.value.end_date);

		date = tempDate.getDate();
		if (date < 10) {
			date = date.toString().padStart(2, "0");
		}

		month = tempDate.getMonth() + 1;
		if (month < 10) {
			month = month.toString().padStart(2, "0");
		}

		year = tempDate.getFullYear();
		recordData.value.end_date = [year, month, date].join("-");

		initModals();
	});

	onMounted(() => {});

	const updateRecordHandler = () => {
		// @TODO: Check if data is empty
		recordData.value.start_date = new Date(recordData.value.start_date);
		recordData.value.end_date = new Date(recordData.value.end_date);
		recordData.value.updated_at = new Date();

		console.log("test", recordData.value);
		emit("updateRecord", recordData.value);
	};
</script>

<style lang="scss" scoped></style>
