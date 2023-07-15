<script setup>
	import {
		Squares2X2Icon,
		InboxArrowDownIcon,
		CalendarIcon,
		BriefcaseIcon,
		BuildingOfficeIcon,
		UsersIcon,
		ViewColumnsIcon,
		WindowIcon,
		UserIcon,
		ChartPieIcon,
		Cog6ToothIcon,
		RectangleStackIcon
	} from "@heroicons/vue/24/solid";

	import { Drawer } from "flowbite";

	onMounted(() => {
		// setup available elements
		const $buttonElement = document.querySelector("#button");
		const $drawerElement = document.querySelector("#sidebar");
		const $closeButtons = document.querySelectorAll("#closeButton");

		// set drawer options
		const drawerOptions = {
			backdropClasses:
				"bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40",
		};

		// create a new drawer instance
		if ($drawerElement) {
			const drawer = new Drawer($drawerElement, drawerOptions);

			// set event listeners for the button to show the drawer
			$buttonElement.addEventListener("click", () => drawer.toggle());
			$closeButtons.forEach((el) => {
				el.addEventListener("click", () => drawer.hide());
			});
		}
	});
	const rootFunction = () => {
		navigateTo("/");
	};
</script>

<template>
	<button
		id="button"
		type="button"
		class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
		<span class="sr-only">Open sidebar</span>
		<svg
			class="w-6 h-6"
			aria-hidden="true"
			fill="currentColor"
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg">
			<path
				clip-rule="evenodd"
				fill-rule="evenodd"
				d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
		</svg>
	</button>

	<aside
		id="sidebar"
		class="fixed top-0 left-0 z-50 w-64 h-screen transition-transform -translate-x-full md:translate-x-0"
		aria-label="Sidebar">
		<div class="h-full px-3 py-4 overflow-y-auto bg-[#282c38]">
			<h2
				class="p-2 mb-2 text-3xl font-medium text-white cursor-pointer"
				@click="rootFunction">
				Qualyval
			</h2>
			<ul class="space-y-2 font-medium">
				<li>
					<NuxtLink
						id="closeButton"
						to="/dashboard"
						class="flex items-center p-2 text-white rounded-lg hover:bg-gray-700">
						<Squares2X2Icon class="w-6 h-6 text-gray-500" />
						<span class="ml-3">Dashboard</span>
					</NuxtLink>
				</li>

				<li>
					<NuxtLink
						id="closeButton"
						to="/inbox"
						class="flex items-center p-2 text-white rounded-lg hover:bg-gray-700">
						<InboxArrowDownIcon
							class="w-6 h-6 text-gray-500 transition duration-75" />
						<span class="flex-1 ml-3 whitespace-nowrap">Inbox</span>
						<!-- <span
              class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300"
              >3</span
            > -->
					</NuxtLink>
				</li>
				<li>
					<NuxtLink
						id="closeButton"
						class="flex items-center p-2 text-white rounded-lg hover:bg-gray-700">
						<CalendarIcon
							class="w-6 h-6 text-gray-500 transition duration-75" />
						<span class="flex-1 ml-3 whitespace-nowrap">Calendar & Todos</span>
					</NuxtLink>
				</li>
				<div class="h-[1px] w-full bg-gray-600"></div>
				<li>
					<NuxtLink
						id="closeButton"
						class="flex items-center p-2 text-white rounded-lg hover:bg-gray-700"
						to="/candidates">
						<BriefcaseIcon
							class="w-6 h-6 text-gray-500 transition duration-75" />
						<span class="ml-3">Candidates</span>
					</NuxtLink>
				</li>
				<li>
					<NuxtLink
						id="closeButton"
						class="flex items-center p-2 text-white rounded-lg hover:bg-gray-700"
						to="/agencies">
						<BuildingOfficeIcon
							class="w-6 h-6 text-gray-500 transition duration-75" />
						<span class="ml-3">Agencies</span>
					</NuxtLink>
				</li>
				<li>
					<NuxtLink
						id="closeButton"
						class="flex items-center p-2 text-white rounded-lg hover:bg-gray-700"
						to="/timesheets">
						<RectangleStackIcon
							class="w-6 h-6 text-gray-500 transition duration-75" />
						<span class="ml-3">Timesheets</span>
					</NuxtLink>
				</li>

				<!-- <li
					@click="navigateTo('/employees')"
					id="closeButton"
					class="flex items-center p-2 text-white rounded-lg hover:bg-gray-700 cursor-pointer">
					<UsersIcon class="w-6 h-6 text-gray-500 transition duration-75" />
					<span class="ml-3">Employees</span>
				</li>
				<li
					@click="navigateTo('/projects')"
					id="closeButton"
					class="flex items-center p-2 text-white rounded-lg hover:bg-gray-700 cursor-pointer">
					<UsersIcon class="w-6 h-6 text-gray-500 transition duration-75" />
					<span class="ml-3">Projects</span>
				</li> -->

				<li>
					<NuxtLink
						id="closeButton"
						class="flex items-center p-2 text-white rounded-lg hover:bg-gray-700"
						to="/signUp">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-6 h-6 text-gray-500 transition duration-75">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
						</svg>

						<span class="ml-3">Sign Up</span>
					</NuxtLink>
				</li>
			</ul>
		</div>
	</aside>
</template>
