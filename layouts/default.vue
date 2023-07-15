<!-- <template>
  <div>
    <SideBar />

    <div class="p-0 sm:ml-64">
      <header class="flex border-b border-b-gray-200">
        <div
          class="grid px-5 py-3 border-r border-r-gray-200 place-items-center"
        >
          <div class="flex justify-end p-[3px] bg-green-400 rounded-md w-7 h-7">
            <span class="block w-1/2 h-full bg-white rounded-sm"></span>
          </div>
        </div>
        <div
          class="flex items-center gap-10 px-5 py-2 border-r border-r-gray-200"
        >
          <div class="text-xs text-gray-500">
            Your Organication
            <div
              class="flex items-center gap-1 mt-1 text-base font-bold text-black"
            >
              <span
                class="block w-6 h-6 bg-gray-900 rounded-b-md rounded-l-md"
              ></span>
              Qualyval
            </div>
          </div>
          <div><ChevronUpDownIcon class="w-6 h-6 text-gray-500" /></div>
        </div>
        <div class="flex items-center flex-grow border-r border-r-gray-200">
          <div class="relative w-full">
            <div
              class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              class="block w-full p-4 pl-10 text-sm text-gray-900 border-0 rounded-lg"
              placeholder=""
            />
          </div>
        </div>
        <div class="flex items-center gap-4 px-5">
          <button type="button" @click="()=>{
            navigateTo('/new-job')
          }"
            class="hidden w-10 h-10 bg-yellow-300 rounded-full sm:grid place-items-center"
          >
            <PlusIcon class="w-5 h-5" />
          </button>
          <div
            class="hidden w-10 h-10 bg-gray-100 rounded-full sm:grid place-items-center"
          >
            <BellIcon class="w-5 h-5" />
          </div>
          <div class="w-10 h-10 rounded-full">
            <img
              src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
              class="object-cover w-full h-full rounded-full"
              alt="user-image"
            />
          </div>
        </div>
      </header>
      <div class="flex w-full h-full">
        <div class="flex-grow">
          <slot />
        </div>
        <aside
          class="flex-col items-center hidden border-l sm:flex sm:w-16 border-l-gray-200"
        >
          <div class="flex flex-col items-center py-6 mx-1 border-b border-b-gray-200">
            <div class="relative mb-2">
              <span
                class="absolute z-0 block bg-blue-100 rounded-full h-11 w-11 -top-1.5 -left-1.5"
              ></span>
              <div
                class="relative z-20 grid w-8 h-8 bg-blue-500 rounded-full place-items-center"
              >
                <DocumentCheckIcon class="w-5 h-5 text-white" />
              </div>
            </div>
            <span class="text-sm">Task</span>
          </div>
          <div class="flex flex-col items-center py-6 mx-1 border-b border-b-gray-200">
            <div class="relative mb-2">
              <span
                class="absolute z-0 block bg-yellow-100 rounded-full h-11 w-11 -top-1.5 -left-1.5"
              ></span>
              <div
                class="relative z-20 grid w-8 h-8 bg-yellow-400 rounded-full place-items-center"
              >
                <DocumentTextIcon class="w-5 h-5 text-white" />
              </div>
            </div>
            <span class="text-sm">Notes</span>
          </div>
          <div class="flex flex-col items-center py-6 mx-1 border-b border-b-gray-200">
            <div class="relative mb-2">
              <span
                class="absolute z-0 block bg-lime-100 rounded-full h-11 w-11 -top-1.5 -left-1.5"
              ></span>
              <div
                class="relative z-20 grid w-8 h-8 rounded-full bg-lime-500 place-items-center"
              >
              <FolderIcon class="w-5 h-5 text-white" />
              </div>
            </div>
            <span class="text-sm">Folder</span>
          </div>
          <div class="flex flex-col items-center py-6 mx-1 ">
              <div
                class="relative z-20 grid w-8 h-8 bg-gray-100 rounded-full place-items-center"
              >
              <PlusIcon class="w-5 h-5 text-gray-500" />
              </div>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ChevronUpDownIcon } from "@heroicons/vue/24/solid";
import { PlusIcon } from "@heroicons/vue/24/solid";
import { BellIcon } from "@heroicons/vue/24/outline";
import { FolderIcon } from "@heroicons/vue/24/outline";
import { DocumentCheckIcon } from "@heroicons/vue/24/outline";
import { DocumentTextIcon } from "@heroicons/vue/24/outline";
</script>

<style scoped></style> -->

<template>
	<div>
		<SideBar />
		<div class="p-0 md:ml-64">
			<!-- <div class="p-0"> -->
			<StatusBar />

			<div class="relative">
				<main class="main-container">
					<slot />
				</main>
				<!-- <div class="taskmenu absolute right-0 top-0 h-screen max-lg:hidden"> -->
					<!-- <TaskMenu /> -->
				<!-- </div> -->
			</div>
		</div>
	</div>
</template>
