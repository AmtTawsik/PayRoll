<script setup>
	import { initTabs } from "flowbite";

	import {
		ChevronDownIcon,
		ChevronRightIcon,
		ChevronLeftIcon,
		StarIcon as SolidStartIcon,
		ArrowDownTrayIcon,
		PlusCircleIcon,
		StarIcon,
	} from "@heroicons/vue/24/solid";
	import {
		ChatBubbleBottomCenterTextIcon,
		EnvelopeIcon,
		PencilSquareIcon,
		LinkIcon,
		PrinterIcon,
		ChevronDoubleRightIcon,
		TrashIcon,
		HandThumbUpIcon,
	} from "@heroicons/vue/24/outline";

	const { data } = defineProps(["data"]);
	const { currRecord } = useCandidate();

	onMounted(() => {
		initTabs();
	});

	function getDateFormat(tempDate) {
		const date = new Date(tempDate);
		const month =
			date.getMonth() < 10
				? `0${date.getMonth() + 1}`
				: `${date.getMonth() + 1}`;
		const format = `${date.getDate()}/${month}/${date.getFullYear()}`;
		return format;
	}
</script>

<template>
	<div
		id="drawer-right"
		class="fixed top-0 right-0 z-50 h-screen overflow-y-auto transition-transform translate-x-full bg-white w-[45%] max-2xl:w-1/2 max-xl:w-2/3 max-lg:w-1/2 max-md:w-[55%] max-sm:w-[80%]"
		tabindex="-1"
		aria-labelledby="drawer-right-label">
		<header class="bg-slate-200 px-5 py-6 max-xl:p-4">
			<div class="flex justify-between max-sm:flex-col max-sm:gap-5">
				<div class="flex items-center gap-4">
					<!-- <div class="relative">
						<img
							class="w-14 h-14 rounded-full object-cover"
							:src="currRecord?.image_url"
							alt="" />
					</div> -->

					<div>
						<div class="flex items-center gap-2">
							<h3 class="font-medium text-lg max-xl:text-base">
								{{ currRecord?.name }}
							</h3>
							<!-- <span
								class="bg-green-100 border rounded-md border-green-400 text-green-600 text-sm px-2 max-xl:text-xs"
								>{{ currRecord?.status }}</span
							> -->
						</div>

						<!-- <p class="text-sm text-slate-500 mb-2 max-lg:text-xs">
							{{ currRecord?.workstream.team }} -
							{{ currRecord?.job_title }}
						</p> -->
					</div>
				</div>

				<!-- <div class="flex gap-6 items-start max-lg:gap-3 max-lg:flex-col">
					<div class="flex items-center gap-3">
						<button class="bg-white p-1.5 shadow-sm rounded-sm">
							<ChevronLeftIcon class="text-slate-500 w-4 h-4" />
						</button>
						<button class="bg-white p-1.5 shadow-sm rounded-sm">
							<ChevronRightIcon class="text-slate-500 w-4 h-4" />
						</button>
					</div>

					<div class="flex gap-3">
						<button
							class="flex gap-1 items-center shadow-sm bg-white p-1.5 rounded-sm">
							<ChatBubbleBottomCenterTextIcon class="text-slate-500 w-4 h-4" />
							<span class="text-xs text-gray-600 font-medium max-xl:hidden"
								>Send Message</span
							>
						</button>
						<button
							class="flex gap-1 items-center shadow-sm bg-white p-1.5 rounded-sm">
							<EnvelopeIcon class="text-slate-500 w-4 h-4" />
							<span class="text-xs text-gray-600 font-medium max-xl:hidden"
								>Send Email</span
							>
						</button>
					</div>
				</div> -->
			</div>
		</header>

		<div class="mb-4 border-b border-gray-200 mt-3">
			<ul
				class="flex flex-wrap -mb-px text-sm font-medium text-center"
				id="myTab"
				data-tabs-toggle="#myTabContent"
				role="tablist">
				<!-- <li class="mr-2 ml-6" role="presentation">
					<button
						class="inline-block p-4 border-b-2 rounded-t-lg uppercase max-lg:pl-0"
						id="profile-tab"
						data-tabs-target="#profile"
						type="button"
						role="tab"
						aria-controls="profile"
						aria-selected="false">
						Profile
					</button>
				</li>
				<li class="mr-2" role="presentation">
					<button
						class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 uppercase"
						id="hr-tab"
						data-tabs-target="#hr"
						type="button"
						role="tab"
						aria-controls="hr"
						aria-selected="false">
						HR
					</button>
				</li> -->
				<li class="mr-2" role="presentation">
					<button
						class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 uppercase"
						id="employees-tab"
						data-tabs-target="#employees"
						type="button"
						role="tab"
						aria-controls="employees"
						aria-selected="false">
						Details
					</button>
				</li>
				<!-- <li role="presentation">
					<button
						class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 uppercase max-lg:ml-2"
						id="operations-tab"
						data-tabs-target="#operations"
						type="button"
						role="tab"
						aria-controls="operations"
						aria-selected="false">
						Operations
					</button>
				</li> -->
			</ul>
		</div>

		<div id="myTabContent">
			<!-- <div
				class="hidden p-4 rounded-lg dark:bg-gray-800"
				id="profile"
				role="tabpanel"
				aria-labelledby="profile-tab">
				<div class="flex flex-col gap-4">
					<div class="rounded border border-slate-300">
						<div
							class="flex justify-between items-center px-4 py-2 border-b border-b-slate-300">
							<h3 class="text-sm font-semibold">Basic Information</h3>
							<div class="flex gap-1 items-center">
								<PencilSquareIcon class="w-6 h-6 text-slate-700" />
								<span class="text-sm text-slate-700 font-normal max-lg:hidden"
									>Edit Info</span
								>
							</div>
						</div>

						<div
							class="p-4 grid grid-cols-[40fr_60fr] gap-y-4 max-lg:grid-cols-1">
							<div>
								<span class="text-slate-500 text-sm font-medium">Name</span>
								<p class="text-sm font-semibold text-gray-700">
									{{ currRecord?.full_name }}
								</p>
							</div>
							<div>
								<span class="text-slate-500 text-sm font-medium">Email</span>
								<p class="text-sm font-semibold text-gray-700">
									{{ currRecord?.primary_email }}
								</p>
							</div>
							<div>
								<span class="text-slate-500 text-sm font-medium">Region</span>
								<p class="text-sm font-semibold text-gray-700">
									{{ currRecord?.region }}
								</p>
							</div>
							<div>
								<span class="text-slate-500 text-sm font-medium">Phone</span>
								<p class="text-sm font-semibold text-gray-700">
									{{ currRecord?.primary_phone }}
								</p>
							</div>

							<div>
								<span class="text-slate-500 text-sm font-medium">Website</span>
								<p class="text-sm font-semibold text-gray-700">
									www.example.com
								</p>
							</div>
							<div>
								<span class="text-slate-500 text-sm font-medium">Address</span>
								<p class="text-sm font-semibold text-gray-700">
									abc Street, 12347
								</p>
							</div>
						</div>
					</div>

					<div class="rounded border border-slate-300">
						<div
							class="flex justify-between items-center px-4 py-2 border-b border-b-slate-300">
							<h3 class="text-sm font-semibold">Professional Details</h3>
							<div class="flex gap-1 items-center">
								<PencilSquareIcon class="w-6 h-6 text-slate-700" />
								<span class="text-sm text-slate-700 font-normal max-lg:hidden"
									>Edit Info</span
								>
							</div>
						</div>

						<div
							class="p-4 grid grid-cols-[40fr_60fr] gap-y-4 max-lg:grid-cols-1">
							<div>
								<span class="text-slate-500 text-sm font-medium"
									>Current Job Title</span
								>
								<p class="text-sm font-semibold text-gray-700">
									{{ currRecord?.job_title }}
								</p>
							</div>
							<div>
								<span class="text-slate-500 text-sm font-medium"
									>Highest Qualification Held</span
								>
								<p class="text-sm font-semibold text-gray-700">
									Bachelors in Engineering
								</p>
							</div>
							<div>
								<span class="text-slate-500 text-sm font-medium"
									>Expected Sallery</span
								>
								<p class="text-sm font-semibold text-gray-700">-</p>
							</div>
							<div>
								<span class="text-slate-500 text-sm font-medium"
									>Current Sallery</span
								>
								<p class="text-sm font-semibold text-gray-700">-</p>
							</div>
							<div>
								<span class="text-slate-500 text-sm font-medium"
									>Experience in Years</span
								>
								<p class="text-sm font-semibold text-gray-700">3 Year</p>
							</div>
							<div>
								<span class="text-slate-500 text-sm font-medium"
									>LinkedIn URL</span
								>
								<p class="text-sm font-semibold text-gray-700">cody_fisher</p>
							</div>
							<div>
								<span class="text-slate-500 text-sm font-medium">Skype ID</span>
								<p class="text-sm font-semibold text-gray-700">cody_fisher</p>
							</div>
							<div class="flex flex-col gap-2">
								<span class="text-slate-500 text-sm font-medium"
									>General expertise</span
								>

								<div class="flex items-center gap-2">
									<div class="bg-blue-300 rounded-full">
										<p
											class="text-xs font-medium py-[.15rem] px-2 text-gray-800">
											Html
										</p>
									</div>
									<div class="bg-blue-300 rounded-full">
										<p
											class="text-xs font-medium py-[.15rem] px-2 text-gray-800">
											Css
										</p>
									</div>
									<div class="bg-blue-300 rounded-full">
										<p
											class="text-xs font-medium py-[.15rem] px-2 text-gray-800">
											Sketching
										</p>
									</div>
								</div>
							</div>
							<div class="flex flex-col gap-2">
								<span class="text-slate-500 text-sm font-medium"
									>Tech expertise</span
								>

								<div class="flex items-center gap-2">
									<div class="bg-blue-300 rounded-full">
										<p
											class="text-xs font-medium py-[.15rem] px-2 text-gray-800">
											Html
										</p>
									</div>
									<div class="bg-blue-300 rounded-full">
										<p
											class="text-xs font-medium py-[.15rem] px-2 text-gray-800">
											Css
										</p>
									</div>
									<div class="bg-blue-300 rounded-full">
										<p
											class="text-xs font-medium py-[.15rem] px-2 text-gray-800">
											Sketching
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				class="hidden p-4 rounded-lg dark:bg-gray-800"
				id="hr"
				role="tabpanel"
				aria-labelledby="hr-tab">
				<div class="flex flex-col gap-4">
					<div class="rounded border border-slate-300">
						<div
							class="flex justify-between items-center px-4 py-2 border-b border-b-slate-300">
							<h3 class="text-sm font-semibold">Basic Information</h3>
							<div class="flex gap-1 items-center">
								<PencilSquareIcon class="w-6 h-6 text-slate-700" />
								<span class="text-sm text-slate-700 font-normal max-lg:hidden"
									>Edit Info</span
								>
							</div>
						</div>

						<div
							class="p-4 grid grid-cols-[40fr_60fr] gap-y-4 max-lg:grid-cols-1">
							<div>
								<span class="text-slate-500 text-sm font-medium"
									>Start date</span
								>
								<p class="text-sm font-semibold text-gray-700">
									{{ getDateFormat(currRecord?.start_date) }}
								</p>
							</div>
							<div>
								<span class="text-slate-500 text-sm font-medium">End date</span>
								<p class="text-sm font-semibold text-gray-700">
									{{ getDateFormat(currRecord?.end_date) }}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div> -->
			<div
				class="hidden p-4 rounded-lg dark:bg-gray-800"
				id="employees"
				role="tabpanel"
				aria-labelledby="employees-tab">
				<div class="flex flex-col gap-4">

					<div class="rounded border border-slate-300">
						<!-- <div
							class="flex justify-between items-center px-4 py-2 border-b border-b-slate-300">
							<h3 class="text-sm font-semibold">Details</h3>
							<div class="flex gap-1 items-center">
								<PencilSquareIcon class="w-6 h-6 text-slate-700" />
								<span class="text-sm text-slate-700 font-normal max-lg:hidden"
									>Edit Info</span
								>
							</div>
						</div> -->

						<div
							class="p-4 grid grid-cols-[40fr_60fr] gap-y-4 max-lg:grid-cols-1">
							<div>
								<span class="text-slate-500 text-sm font-medium"
									>Name in bank account</span
								>
								<p class="text-sm font-semibold text-gray-700">
									{{ currRecord?.nameInBankAccount }}
								</p>
							</div>
							<div>
								<span class="text-slate-500 text-sm font-medium"
									>Email</span
								>
								<p class="text-sm font-semibold text-gray-700">
									{{ currRecord?.email }}
								</p>
							</div>
							<div>
								<span class="text-slate-500 text-sm font-medium"
									>Phone</span
								>
								<p class="text-sm font-semibold text-gray-700">{{ currRecord?.phone }}</p>
							</div>

							<div>
								<span class="text-slate-500 text-sm font-medium"
									>Date of birth</span
								>
								<p class="text-sm font-semibold text-gray-700">
									{{ currRecord?.dateOfBirth }}
								</p>
							</div>
							<div>
								<span class="text-slate-500 text-sm font-medium"
									>Address</span
								>
								<p class="text-sm font-semibold text-gray-700">
									{{ currRecord?.address }}
								</p>
							</div>
							<div>
								<span class="text-slate-500 text-sm font-medium"
									>National insurance number</span
								>
								<p class="text-sm font-semibold text-gray-700">
									{{ currRecord?.nationalInsuranceNumber }}
								</p>
							</div>
							<div>
								<span class="text-slate-500 text-sm font-medium"
									>Account name</span
								>
								<p class="text-sm font-semibold text-gray-700">
									{{ currRecord?.accountName }}
								</p>
							</div>
							<div>
								<span class="text-slate-500 text-sm font-medium"
									>Commission percentage</span
								>
								<p class="text-sm font-semibold text-gray-700">
									{{ currRecord?.fee1 *  100 }}%
								</p>
							</div>
							<div>
								<span class="text-slate-500 text-sm font-medium"
									>Max commission per week</span
								>
								<p class="text-sm font-semibold text-gray-700">
									{{ currRecord?.fee2 }}
								</p>
							</div>
							<div>
								<span class="text-slate-500 text-sm font-medium"
									>Pay frequency</span
								>
								<p class="text-sm font-semibold text-gray-700">
									{{ currRecord?.payFrequency }}
								</p>
							</div>
							<div>
								<span class="text-slate-500 text-sm font-medium"
									>Product</span
								>
								<p class="text-sm font-semibold text-gray-700">
									{{ currRecord?.product }}
								</p>
							</div>
							<div>
								<span class="text-slate-500 text-sm font-medium"
									>Limited company name</span
								>
								<p class="text-sm font-semibold text-gray-700">
									{{ currRecord?.limitedCompanyName }}
								</p>
							</div>
							<div>
								<span class="text-slate-500 text-sm font-medium"
									>Limited company number</span
								>
								<p class="text-sm font-semibold text-gray-700">
									{{ currRecord?.limitedCompanyNumber }}
								</p>
							</div>
							<div>
								<span class="text-slate-500 text-sm font-medium"
									>Zoho Id</span
								>
								<p class="text-sm font-semibold text-gray-700">
									{{ currRecord?.zohoId }}
								</p>
							</div>
							<div>
								<span class="text-slate-500 text-sm font-medium"
									>Process payment</span
								>
								<p class="text-sm font-semibold text-gray-700">
									{{ currRecord?.processPayment }}
								</p>
							</div>
						</div>
					</div>

					<!-- <div class="flex flex-col gap-4">
						<h1 class="text-xl font-semibold">Details</h1>
						<div class="flex flex-wrap gap-2">
							<div class="flex flex-col gap-2 p-4 bg-gray-100 rounded-lg w-fit">
								<h2 class="font-semibold text-gray-700">{{ currRecord?.name }}</h2>
								<div class="flex gap-4">
									<div>
										<span class="text-slate-500 text-sm font-medium"
											>Name in bank account</span
										>
										<p class="text-sm font-semibold text-gray-700">
											{{ currRecord?.nameInBankAccount }}
										</p>
									</div>
									<div>
										<span class="text-slate-500 text-sm font-medium"
											>Email</span
										>
										<p class="text-sm font-semibold text-green-700">{{ currRecord?.email }}</p>
									</div>
									<div>
										<span class="text-slate-500 text-sm font-medium"
											>Phone</span
										>
										<p class="text-sm font-semibold text-gray-700">
											{{ currRecord?.phone }}
										</p>
									</div>
									<div>
										<span class="text-slate-500 text-sm font-medium"
											>Date of birth</span
										>
										<p class="text-sm font-semibold text-gray-700">
											{{ currRecord?.dateOfBirth }}
										</p>
									</div>
									<div>
										<span class="text-slate-500 text-sm font-medium"
											>Address</span
										>
										<p class="text-sm font-semibold text-gray-700">
											{{ currRecord?.address }}
										</p>
									</div>
									<div>
										<span class="text-slate-500 text-sm font-medium"
											>National insurance number</span
										>
										<p class="text-sm font-semibold text-gray-700">
											{{ currRecord?.nationalInsuranceNumber }}
										</p>
									</div>
									<div>
										<span class="text-slate-500 text-sm font-medium"
											>Account name</span
										>
										<p class="text-sm font-semibold text-gray-700">
											{{ currRecord?.accountName }}
										</p>
									</div>
								</div>
							</div>
							<div class="flex flex-col gap-2 p-4 bg-gray-100 rounded-lg w-fit">
								<h2 class="font-semibold text-gray-700">Employee 2</h2>
								<div class="flex gap-4">
									<div>
										<span class="text-slate-500 text-sm font-medium"
											>Start date</span
										>
										<p class="text-sm font-semibold text-gray-700">
											02/02/2023
										</p>
									</div>
									<div>
										<span class="text-slate-500 text-sm font-medium"
											>Status</span
										>
										<p class="text-sm font-semibold text-green-700">Active</p>
									</div>
									<div>
										<span class="text-slate-500 text-sm font-medium"
											>End date</span
										>
										<p class="text-sm font-semibold text-gray-700">
											02/08/2023
										</p>
									</div>
								</div>
							</div>
						</div>
					</div> -->
					<!-- <div class="flex flex-col gap-4">
						<h1 class="text-xl font-semibold">Other employees</h1>
						<div class="flex flex-wrap gap-2">
							<div class="flex flex-col gap-2 p-4 bg-gray-100 rounded-lg w-fit">
								<h2 class="font-semibold text-gray-700">Employee 3</h2>
								<div class="flex gap-4">
									<div>
										<span class="text-slate-500 text-sm font-medium"
											>Start date</span
										>
										<p class="text-sm font-semibold text-gray-700">
											02/02/2023
										</p>
									</div>
									<div>
										<span class="text-slate-500 text-sm font-medium"
											>Status</span
										>
										<p class="text-sm font-semibold text-green-700">Active</p>
									</div>
									<div>
										<span class="text-slate-500 text-sm font-medium"
											>End date</span
										>
										<p class="text-sm font-semibold text-gray-700">
											02/08/2023
										</p>
									</div>
								</div>
							</div>
							<div class="flex flex-col gap-2 p-4 bg-gray-100 rounded-lg w-fit">
								<h2 class="font-semibold text-gray-700">Employee 4</h2>
								<div class="flex gap-4">
									<div>
										<span class="text-slate-500 text-sm font-medium"
											>Start date</span
										>
										<p class="text-sm font-semibold text-gray-700">
											02/02/2023
										</p>
									</div>
									<div>
										<span class="text-slate-500 text-sm font-medium"
											>Status</span
										>
										<p class="text-sm font-semibold text-green-700">Active</p>
									</div>
									<div>
										<span class="text-slate-500 text-sm font-medium"
											>End date</span
										>
										<p class="text-sm font-semibold text-gray-700">
											02/08/2023
										</p>
									</div>
								</div>
							</div>
						</div>
					</div> -->
				</div>
			</div>
			<!-- <div
				class="hidden p-4 rounded-lg dark:bg-gray-800"
				id="operations"
				role="tabpanel"
				aria-labelledby="operations-tab">
				<div class="flex flex-col gap-4">
					<div class="rounded border border-slate-300">
						<div
							class="flex justify-between items-center px-4 py-2 border-b border-b-slate-300">
							<h3 class="text-sm font-semibold">Basic Information</h3>
							<div class="flex gap-1 items-center">
								<PencilSquareIcon class="w-6 h-6 text-slate-700" />
								<span class="text-sm text-slate-700 font-normal max-lg:hidden"
									>Edit Info</span
								>
							</div>
						</div>

						<div
							class="p-4 grid grid-cols-[40fr_60fr] gap-y-4 max-lg:grid-cols-1">
							<div>
								<span class="text-slate-500 text-sm font-medium"
									>Laptop serial number</span
								>
								<p class="text-sm font-semibold text-gray-700">
									{{ currRecord?.full_name }}
								</p>
							</div>
							<div>
								<span class="text-slate-500 text-sm font-medium"
									>Directory access</span
								>
								<p class="text-sm font-semibold text-gray-700">
									{{ currRecord?.primary_email }}
								</p>
							</div>
							<div>
								<span class="text-slate-500 text-sm font-medium"
									>Guru access</span
								>
								<p class="text-sm font-semibold text-gray-700">True</p>
							</div>

							<div>
								<span class="text-slate-500 text-sm font-medium"
									>Company2 Alias</span
								>
								<p class="text-sm font-semibold text-gray-700">
									Company2 alias
								</p>
							</div>
							<div>
								<span class="text-slate-500 text-sm font-medium"
									>Company2 Email</span
								>
								<p class="text-sm font-semibold text-gray-700">
									company2@gmail.com
								</p>
							</div>
							<div>
								<span class="text-slate-500 text-sm font-medium"
									>Company1 Slack</span
								>
								<p class="text-sm font-semibold text-gray-700">
									company1_slack
								</p>
							</div>
							<div>
								<span class="text-slate-500 text-sm font-medium"
									>Company2 Slack</span
								>
								<p class="text-sm font-semibold text-gray-700">
									company2_slack
								</p>
							</div>
						</div>
					</div>
				</div>
			</div> -->
		</div>
	</div>
</template>
