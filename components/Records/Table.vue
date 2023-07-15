<script setup>
	import { ChevronUpDownIcon } from "@heroicons/vue/24/solid";
	import draggable from "vuedraggable";
	import { Drawer } from "flowbite";

	const { TABLE_DATA, tableConfig } = defineProps([
		"TABLE_DATA",
		"tableConfig",
	]);

	// const composable = await import(tableConfig.composablePath);

	const emit = defineEmits(["refreshRecords"]);

	const local_headers = ref([...tableConfig.headers]);
	const drawer = ref(null);

	const { grouped } = tableConfig.groupComposable();
	const { tableTdVisible } = tableConfig.hideComposable();

	let byGrouped;

	byGrouped = computed(() => {
		if (!grouped?.value.active) {
			return [];
		}
		return tableConfig.groupMap.get(grouped.value.groupedBy)(
			TABLE_DATA,
			grouped.value.header
		);
	});

	onMounted(() => {
		// setup available elements
		const $drawerElement = document.querySelector("#drawer-right");

		const drawerOptions = {
			placement: "right",
			backdrop: true,
			bodyScrolling: false,
			edge: false,
			edgeOffset: "",
			backdropClasses:
				"bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30",
		};

		// console.log($drawerElement);

		// create a new modal instance
		if ($drawerElement) {
			drawer.value = new Drawer($drawerElement, drawerOptions);
		}
	});

	const toggleDrawer = () => {
		drawer.value.toggle();
	};
</script>
<template>
	<component :is="tableConfig.drawerComponent" />

	<div class="relative overflow-x-auto rounded-md">
		<table
			class="w-full text-sm text-left text-gray-500 border-collapse dark:text-gray-400">
			<thead class="text-sm text-gray-800 bg-white shadow-sm">
				<draggable v-model="local_headers" item-key="id" tag="tr">
					<template #header>
						<th scope="col" class="p-4 rounded-l-md">
							<div class="flex items-center">
								<input
									id="checkbox-all-search"
									type="checkbox"
									class="w-5 h-5 text-green-400 bg-gray-100 border-gray-300 focus:ring-white focus:ring-0" />
								<label for="checkbox-all-search" class="sr-only"
									>checkbox</label
								>
							</div>
						</th>
					</template>
					<template #item="{ element: header }">
						<th
							v-if="
								header.is_visible &&
								tableTdVisible[tableConfig.rowMap.get(header.name).visilibility]
							"
							scope="col"
							class="px-3 py-3 cursor-pointer">
							<div class="flex items-center gap-1">
								<span>{{ header.name }}</span>
								<ChevronUpDownIcon class="w-4 h-4" />
							</div>
						</th>
					</template>
					<template #footer>
						<th scope="col" class="px-3 py-3 rounded-r-md">
							<div class="flex items-center gap-1">&nbsp;</div>
						</th>
					</template>
				</draggable>
			</thead>

			<tbody v-if="!grouped.active" class="record-tbody">
				<tr
					class="text-base border-b cursor-pointer bg-gray-50 max-xl:text-sm"
					v-for="(data, index) in TABLE_DATA">
					<RecordsTableRow
						:key="data.id"
						:data="data"
						:tableConfig="tableConfig"
						@refresh-records="emit('refreshRecords')"
						@drawer-open="toggleDrawer()" />
				</tr>
			</tbody>
			<tbody v-if="grouped.active" class="record-tbody">
				<tr class="px-4 py-3 col-span-full">
					<td class="text-xl font-semibold text-black">
						{{ grouped.groupedBy }}
					</td>
				</tr>
			</tbody>
			<template v-for="(records, group) in byGrouped" :key="group">
				<tbody v-if="grouped.active" class="record-tbody">
					<tr class="px-4 py-3 col-span-full">
						<td class="text-lg">{{ group }}</td>
					</tr>
				</tbody>
				<draggable
					:list="records"
					:group="{ name: 'records', pull: true, put: true }"
					itemKey="grouped"
					tag="tbody"
					class="record-tbody"
					@change="
						tableConfig.changeGroup(records, $event, grouped.header);
						emit('refreshRecords');
					">
					<template #item="{ element: data, index }">
						<tr
							class="text-base border-b cursor-pointer bg-gray-50 max-xl:text-sm">
							<RecordsTableRow
								:key="data.id"
								:data="data"
								:tableConfig="tableConfig"
								@refresh-records="emit('refreshRecords')"
								@drawer-open="toggleDrawer()" />
						</tr>
					</template>
				</draggable>
			</template>
		</table>
	</div>
</template>
