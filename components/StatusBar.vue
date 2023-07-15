<template>
  <header class="bg-white shadow-sm max-sm:mx-4 max-sm:rounded-md max-sm:mt-4">
    <div class="flex">
      <div
        class="border-r border-r-gray-300 py-5 px-7 max-xl:px-6 max-xl:py-4 max-lg:hidden"
      >
        <div class="bg-gray-400 w-7 h-7 rounded-md p-1">
          <div class="w-1/2 h-5 bg-white rounded-sm">&nbsp;</div>
        </div>
      </div>

      <div
        class="border-r border-r-gray-300 pl-5 pr-4 flex items-center justify-center gap-4 max-lg:py-2 max-lg:border-none max-lg:w-1/2 max-lg:justify-start max-md:gap-1 max-md:w-8/12 max-md:py-4 max-md:pr-1 max-sm:pl-3"
      >
        <div>
          <h4 class="capitalize text-sm text-gray-500 max-md:hidden">
            your organization
          </h4>
          <div class="flex items-center gap-2">
            <PhotoIcon class="w-6 h-6 text-cyan-600 max-sm:hidden" />
            <h3 class="text-black text-base max-xl:text-sm">Qualyval</h3>
          </div>
        </div>

        <ChevronUpDownIcon class="text-gray-500 w-6 h-6" />
      </div>

      <form class="pl-5 flex items-center w-1/2 max-md:pl-0">
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >Search</label
        >
        <div class="relative w-full">
          <div
            class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
          >
            <MagnifyingGlassIcon
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
            />
          </div>
          <input
            type="search"
            id="default-search"
            class="block w-full p-4 pl-10 text-sm text-gray-900 border border-white rounded-lg bg-white focus:ring-yellow-300 focus:border-yellow-300 max-xl:py-3"
            required
          />
        </div>
      </form>

      <div
        class="ml-auto flex items-center gap-4 pr-6 pl-4 max-xl:gap-3 max-xl:pr-3"
      >
        <NuxtLink to="/new-job"
          class="flex items-center justify-center bg-yellow-300 p-3 rounded-full max-xl:p-2.5"
        >
          <PlusIcon class="w-6 h-6 max-xl:w-5 max-xl:h-5" />
        </NuxtLink>

        <button
          class="flex items-center justify-center bg-slate-200 p-3 rounded-full max-xl:p-2.5 max-md:hidden"
        >
          <BellIcon class="w-6 h-6 max-xl:w-5 max-xl:h-5" />
        </button>

        <button class="w-12 h-12 rounded-full max-xl:w-10 max-xl:h-10">
          <img
            class="border-2 border-slate-400 rounded-full"
            :src="user"
            alt="user-avatar"
          />
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import {
  ChevronUpDownIcon,
  PhotoIcon,
  MagnifyingGlassIcon,
  PlusIcon,
} from '@heroicons/vue/24/solid';

import { BellIcon } from '@heroicons/vue/24/outline';

import user from '@/assets/images/user.jpg';
</script>
