<template>
  <div class="bg-gray-50">
    <div class="flex items-center w-full max-h-screen gap-5 px-3 overflow-y-hidden text-sm font-bold border-b border-b-gray-200 no-scrollbar">
      <h4 class="px-2 py-3 border-b-2 border-b-yellow-300">
        RECRUITMENT INBOX
      </h4>
      <h4 class="px-2 py-3 text-gray-400">WORK INBOX</h4>
    </div>
    <main class="grid grid-cols-12 overflow-y-hidden">
      <section class="col-span-12 py-4 border-gray-200 sm:border-r lg:col-span-3">
        <form class="flex items-center gap-2 px-2">
          <label for="simple-search" class="sr-only">Search</label>
          <div class="relative w-full">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <input type="text" id="simple-search" v-model="searchText"
              class="bg-gray-100 outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
              placeholder="Search" required />
          </div>
          <button type="submit"
            class="p-2 ml-2 text-sm font-medium text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm">
            <FunnelIcon class="w-6 h-6 text-gray-500" />
            <span class="sr-only">Search</span>
          </button>
        </form>
        <div class="flex flex-col lg:h-[73vh]  py-2 gap-2 mt-4 lg:overflow-y-auto no-scrollbar">
          <div v-for="(item, index) in data" :key="index" class="px-2 border-b border-b-gray-200"
            :class="{ 'border-none': item.active || data[index + 1]?.active }">
            <div class="flex items-start gap-2 px-5 py-5 text-gray-500 bg-white rounded-md sm:px-2 sm:py-3 h-28" :class="{
              '!bg-green-100 text-green-800 rounded-xl': item.active,
            }">
              <div>
                <img :src="item.image" class="object-cover mr-3 rounded-full sm:mr-1.5 w-9 h-9" alt="dp" />
                <span v-if="item.rating !== undefined"
                  class="flex items-center px-1 py-0.5 rounded-full font-bold text-black -translate-y-1 text-xs bg-white shadow-sm-light gap-0.5">
                  <StarIcon class="w-3 h-3 text-yellow-300" />
                  {{ item.rating.toFixed(1) }}
                </span>
              </div>
              <div class="w-full">
                <div class="flex items-center justify-between">
                  <h4 class="font-semibold text-black" :class="{ 'text-green-800': item.active }">
                    {{ item.name }}
                  </h4>
                  <span class="text-sm">{{ item.time }} Days ago</span>
                </div>
                <div class="flex justify-between">
                  <span>
                    <div class="text-sm">Job: {{ item.job }}</div>
                    <div class="text-xs">{{ item.team }}</div>
                  </span>
                  <span :class="{
                    'w-7 sm:w-5  sm:h-5 sm:text-sm h-7  grid place-items-center mt-2 text-white bg-red-500 rounded-full text-center':
                      item.unread !== undefined,
                  }">{{ item.unread && item.unread }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="col-span-12 border-gray-200 sm:border-r " :class="
        { 'lg:col-span-6': profileActive },
        { 'lg:col-span-9': !profileActive }
      ">
        <div class="flex items-center justify-around py-4">
          <div class="px-2 text-sm">
            <h4 class="font-bold">
              Your Application for Senior Designer - Qualyval
            </h4>
            <p class="text-base text-gray-500 sm:text-sm">Job: Senior UIX Designer | Design Team</p>
          </div>
          <div class="px-5">
            <div class="box-border flex items-center px-0.5 py-0.5 bg-gray-300 rounded-md font-bold text-sm">
              <span class="px-3 text-gray-500 sm:px-9 ">Email</span>
              <span class="px-3 py-1 bg-white border-2 border-white rounded-md sm:px-9">Chat</span>
            </div>
          </div>
          <div class="hidden px-3 sm:grid place-items-center" @click="toggleProfileActive">
            <div class="w-4 h-4 border-2 border-gray-500 p-0.5 rounded-sm flex" :class="
              ({ 'justify-start': profileActive },
                { 'justify-end': !profileActive })
            ">
              <span class="block w-0.5 h-full bg-gray-500"></span>
            </div>
          </div>
        </div>
        <div class="w-full h-full bg-gray-100">
          <div class="overflow-y-auto no-scrollbar" :class="{ 'lg:h-[26rem]': !profileActive }, { 'lg:h-[25rem]': profileActive }">
            <div class="relative flex flex-col gap-5 px-4 py-10 mt-10 border-t sm:px-5 border-t-gray-200">
              <span
                class="absolute top-0 px-3 py-1 text-xs font-bold text-white -translate-x-1/2 -translate-y-1/2 bg-gray-800 rounded-full left-1/2">Fri,
                2 Jul</span>
              <div class="flex justify-start w-full">
                <p class="p-4 text-sm bg-white rounded-2xl w-80 sm:w-96">Hello, There is the file requested before pleace
                  checkout
                  this attachments, and let me know if you need something else</p>
              </div>
              <div class="flex justify-start w-full">
                <p class="flex items-center w-64 gap-3 p-4 text-sm bg-white rounded-2xl">
                  <DocumentIcon class="w-5 h-5 text-gray-500" />
                <div class="flex-grow">
                  <span class="block font-bold">CV New.doc</span>
                  <span class="block text-gray-500">1.2 Mb</span>
                </div>
                <button class="px-2 py-1 font-bold text-green-800 bg-green-100 rounded-full ">
                  Open
                </button>
                </p>
              </div>
            </div>
            <div class="relative flex flex-col gap-5 px-4 py-10 border-t sm:px-5 border-t-gray-200">
              <span
                class="absolute top-0 px-3 py-1 text-xs font-bold text-white -translate-x-1/2 bg-gray-800 rounded-full -translate-y-1/ 2 left-1/2">Today
              </span>
              <div class="flex justify-end w-full">
                <p class="p-4 text-sm text-white bg-green-700 rounded-2xl w-80 sm:w-96">Hello, There is the file requested
                  before
                  pleace checkout this attachments
                </p>
              </div>
            </div>

          </div>
          <div class="flex flex-col w-full  overflow-hidden bg-white rounded-lg  h-[7.5rem]">
            <input type="search" id="default-search"
              class="block w-full p-4 pl-10 text-sm text-gray-900 bg-white border border-white rounded-lg focus:ring-white focus:border-white max-xl:py-3"
              required />
            <div class="flex items-end justify-between mx-5 mt-1 mb-2.5">
              <div class="flex items-center gap-4">
                <LinkIcon class="w-5 h-5 text-gray-500" />
                <PhotoIcon class="w-5 h-5 text-gray-500" />
                <ClockIcon class="w-5 h-5 text-gray-500" />
                <MapPinIcon class="w-5 h-5 text-gray-500" />
                <CalendarIcon class="w-5 h-5 text-gray-500" />
                <MicrophoneIcon class="w-5 h-5 text-gray-500" />
              </div>
              <button type="button" class="grid w-10 h-10 bg-yellow-300 rounded-full place-items-center">
                <ArrowRightIcon class="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section class="col-span-12 lg:h-[33rem] lg:hidden lg:overflow-y-auto no-scrollbar"
        :class="{ 'lg:col-span-3 !block': profileActive }">
        <div class="flex flex-col items-center p-4 border-b border-b-gray-200">
          <img :src="data[2].image" alt="dp" class="w-16 h-16 rounded-full" />
          <h3 class="mt-2 font-bold">{{ data[2].name }}</h3>
          <div class="flex items-center gap-2">
            <span
              class="flex items-center mt-2 px-1 py-0.5 rounded-full font-bold text-black -translate-y-1 text-xs bg-white shadow-sm-light gap-0.5">
              <StarIcon class="w-3 h-3 text-yellow-300" />
              {{ data[2].rating.toFixed(1) }}
            </span>
            <span class="text-xs text-gray-500">Puworketo</span>
          </div>
          <p class="text-sm text-gray-500">View Profile</p>
        </div>
        <div class="p-2 border-b md:p-4 border-b-gray-200">
          <p class="text-xs font-bold">Applied For:</p>
          <h4 class="font-bold">Job: Senior UIX Designer</h4>
          <span class="text-sm text-gray-500">Design Team</span>
          <div class="flex gap-0.5 item-center mt-1.5">
            <span class="w-8 h-4 text-xs text-center text-white bg-yellow-400">1</span>
            <span class="w-8 h-4 text-xs text-center text-white bg-yellow-400">2</span>
            <span class="w-8 h-4 text-center bg-gray-200"></span>
            <span class="w-8 h-4 text-center bg-gray-200"></span>
            <span class="w-8 h-4 text-center bg-gray-200"></span>
          </div>
        </div>
        <div class="p-2 text-sm border-b md:p-4 border-b-gray-200">
          <span class="flex items-center gap-1 mb-2">
            <EnvelopeIcon class="w-5 h-5" /> codyfish@gmail.com
          </span>
          <span class="flex items-center gap-1">
            <PhoneIcon class="w-5 h-5" />+916482354685
          </span>
          <span class="flex items-center gap-1 mt-10 font-bold text-green-600">
            <PlusCircleIcon class="w-6 h-6 text-green-600" />Add Owner
          </span>
        </div>
        <div class="p-2 mb-3 md:p-4">
          <span class="text-sm font-bold">Schedule:</span>
          <div class="flex flex-col gap-2 px-2 py-3 mt-2 border border-l-4 border-gray-200 rounded-md border-l-teal-400">
            <p class="font-bold text-gray-700">
              Allignment for onboarding welcoming new menber on Product Teams
            </p>
            <span class="w-32 py-0.5 text-xs font-semibold text-center text-gray-900 bg-gray-100 rounded-md">Waiting
              Approval</span>
            <span class="text-xs">9 Mar, 2021 7:00-7:45pm</span>
            <span class="mt-5 text-xs font-bold">View Summery</span>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { FunnelIcon } from "@heroicons/vue/24/outline";
import { StarIcon } from "@heroicons/vue/24/solid";
import { EnvelopeIcon } from "@heroicons/vue/24/outline";
import { LinkIcon } from "@heroicons/vue/24/outline";
import { PhotoIcon } from "@heroicons/vue/24/outline";
import { ClockIcon } from "@heroicons/vue/24/outline";
import { MapPinIcon } from "@heroicons/vue/24/outline";
import { MicrophoneIcon } from "@heroicons/vue/24/outline";
import { CalendarIcon } from "@heroicons/vue/24/outline";
import { PhoneIcon } from "@heroicons/vue/24/outline";
import { PlusCircleIcon } from "@heroicons/vue/24/outline";
import { DocumentIcon } from "@heroicons/vue/24/outline";
import { ArrowRightIcon } from "@heroicons/vue/24/outline";

const profileActive = ref(false);

function toggleProfileActive() {
  profileActive.value = !profileActive.value;
}
const data = [
  {
    name: "Brooklyn",
    image: "https://flowbite.com/docs/images/people/profile-picture-1.jpg",
    job: "Senior UIX Designer",
    team: "Design Team",
    active: false,
    time: 1,
  },
  {
    name: "Ronald ",
    image: "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
    job: "UI/UX Designer",
    team: "Design Team",
    active: false,
    rating: 4.0,
    time: 1,
  },
  {
    name: "Cody Fisher",
    image: "https://flowbite.com/docs/images/people/profile-picture-3.jpg",
    job: "Front-End Developer",
    team: "Developer Team",
    active: true,
    rating: 4.0,
    time: 1,
  },
  {
    name: "Ariene ",
    image: "https://flowbite.com/docs/images/people/profile-picture-3.jpg",
    job: "Front-End Developer",
    team: "Developer Team",
    active: false,
    unread: 1,
    rating: 4.0,
    time: 1,
  },
  {
    name: "Dodriene",
    image: "https://flowbite.com/docs/images/people/profile-picture-4.jpg",
    job: "Web Designer",
    active: false,
    team: "Design Team",
    time: 1,
  },
  {
    name: "Guy Hawkins",
    image: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
    job: "Web Designer",
    team: "Design Team",
    rating: 4.0,
    active: false,
    time: 1,
  },
  {
    name: "Jone Cooper",
    image: "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
    job: "Web Developer",
    team: "Developer Team",
    active: false,
    unread: 2,
    time: 1,
  },
];

</script>

<style>
.no-scrollbar::-webkit-scrollbar {
  width: 0px;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  border-radius: 999px;
  @apply bg-gray-50;
}

::-webkit-scrollbar-thumb {
  @apply bg-gray-400 rounded-full
}
</style>
