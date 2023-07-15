<script setup>
	import {
		ChevronDownIcon,
		ChevronLeftIcon,
		ChevronRightIcon,
	} from "@heroicons/vue/24/solid";

	const { totalPages, currentPage, pageStep } = defineProps([
		"totalPages",
		"currentPage",
		"pageStep",
	]);

	const emit = defineEmits(["change", "changeStep"]);

	const changeStepHandler = (value) => {
		if (pageStep !== value) {
			emit("changeStep", value);
		}
	};
</script>

<template>
	<div class="flex items-center gap-4">
		<span class="text-base text-gray-500 max-xl:text-sm max-md:hidden"
			>View</span
		>

		<button
			id="page-view-dropdown-button"
			data-dropdown-toggle="page-view-dropdown"
			class="text-gray-600 bg-white hover:bg-green-200 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-md text-sm px-4 py-2.5 text-center inline-flex items-center max-xl:px-3 max-xl:py-2"
			type="button">
			{{ pageStep }}
			<ChevronDownIcon class="w-4 h-4 ml-2" />
		</button>
		<!-- Dropdown menu -->
		<div
			id="page-view-dropdown"
			class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
			<ul
				class="py-2 text-sm text-gray-700 dark:text-gray-200"
				aria-labelledby="page-view-dropdown-button">
				<li @click="changeStepHandler(5)">
					<a
						class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
						>5</a
					>
				</li>
				<li @click="changeStepHandler(10)">
					<a
						href="#"
						class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
						>10</a
					>
				</li>
				<li @click="changeStepHandler(15)">
					<a
						href="#"
						class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
						>15</a
					>
				</li>
			</ul>
		</div>

		<span class="text-base text-gray-500 max-xl:text-sm max-lg:hidden"
			>Records per page</span
		>
	</div>

	<nav v-if="totalPages > 1" aria-label="Page navigation example">
		<ul class="inline-flex items-center gap-4 -space-x-px">
			<li v-if="currentPage > 1">
				<button
					@click="emit('change', currentPage - 1)"
					class="flex items-center text-gray-500">
					<ChevronLeftIcon class="w-5 h-5 max-xl:w-4 max-xl:h-4" />
					<p
						class="py-2 pl-1 pr-2 ml-0 text-base leading-tight rounded-l-lg hover:text-gray-700 max-xl:text-sm">
						Prev
					</p>
				</button>
			</li>
			<template v-for="page in totalPages">
				<li v-if="page <= 1">
					<button
						@click="if (page !== currentPage) emit('change', page);"
						class="px-2 py-1 font-medium leading-tight rounded-full hover:bg-yellow-400 max-xl:text-sm"
						:class="{ 'bg-yellow-300': page === currentPage }">
						{{ page }}
					</button>
				</li>
                <li v-else-if="page === currentPage - 1">
					<button
						@click="if (page !== currentPage) emit('change', page);"
						class="px-2 py-1 font-medium leading-tight rounded-full hover:bg-yellow-400 max-xl:text-sm"
						:class="{ 'bg-yellow-300': page === currentPage }">
						{{ page }}
					</button>
				</li>
                <li  v-else-if="page === currentPage">
					<button
						@click="if (page !== currentPage) emit('change', page);"
						class="px-2 py-1 font-medium leading-tight rounded-full hover:bg-yellow-400 max-xl:text-sm"
						:class="{ 'bg-yellow-300': page === currentPage }">
						{{ currentPage }}
					</button>
				</li>
                <li  v-else-if="page === currentPage + 1">
					<button
						@click="if (page !== currentPage) emit('change', page);"
						class="px-2 py-1 font-medium leading-tight rounded-full hover:bg-yellow-400 max-xl:text-sm"
						:class="{ 'bg-yellow-300': page === currentPage }">
						{{ page }}
					</button>
				</li>
				<li v-else-if="page === totalPages">
					<button
						@click="if (page !== currentPage) emit('change', page);"
						class="px-2 py-1 font-medium leading-tight rounded-full hover:bg-yellow-400 max-xl:text-sm"
						:class="{ 'bg-yellow-300': page === currentPage }">
						{{ page }}
					</button>
				</li>
				<!-- <li v-else>
					<a
						class="px-2 py-1 font-medium leading-tight rounded-full hover:bg-yellow-400 max-xl:text-sm"
						>...</a
					>
				</li> -->
			</template>

			<li v-if="currentPage < totalPages">
				<button
					@click="emit('change', currentPage + 1)"
					class="flex items-center text-gray-500">
					<p
						class="py-2 pl-1 pr-2 ml-0 text-base leading-tight rounded-l-lg hover:text-gray-700 max-xl:text-sm">
						Next
					</p>
					<ChevronRightIcon class="w-5 h-5 max-xl:w-4 max-xl:h-4" />
				</button>
			</li>
		</ul>
	</nav>
</template>