<template >
    <div class="bg-gray-50">
        <header class="flex items-center justify-between mx-10 mb-3">
            <div class="flex items-center gap-5">
                <h1 class="px-3 text-4xl font-bold text-yellow-300 ">Ti</h1>
                <span class="block w-[2px] h-6 bg-gray-200"></span>
                <span class="font-bold text-green-900"> New Job Posting</span>
            </div>
            <button @click="() => {
                navigateTo('/jobs')
            }">
                <XMarkIcon class="text-gray-500 w-7 h-7" />
            </button>
        </header>
        <div class="grid grid-cols-10">
            <div class="w-64 col-span-10 mt-16 sm:col-span-2">
                <ul class="flex gap-4 px-4 text-sm font-bold text-gray-400 sm:px-0 sm:gap-10 sm:flex-col" id="myTab"
                    data-tabs-toggle="#myTabContent" role="tablist">
                    <li class="flex items-center gap-3 text-green-900" role="presentation">
                        <span class="hidden sm:block w-8 h-[2px] bg-green-600"></span>
                        <button id="Details-tab" data-tabs-target="#Details" type="button" role="tab"
                            aria-controls="Details" aria-selected="false">Details</button>
                    </li>
                    <li class="flex items-center gap-3 px-4 text-green-900" role="presentation">
                        <span class="hidden sm:block  w-4 h-[2px] bg-gray-400"></span>
                        <button id="Application-tab" data-tabs-target="#Application" type="button" role="tab"
                            aria-controls="Application" aria-selected="false">Application</button>
                    </li>
                    <li class="flex items-center gap-3 px-4 text-green-900" role="presentation">
                        <span class="hidden sm:block  w-4 h-[2px] bg-gray-400"></span>
                        <button id="Score-tab" data-tabs-target="#Score" type="button" role="tab" aria-controls="Score"
                            aria-selected="false">Score</button>
                    </li>
                    <li class="flex items-center gap-3 px-4 text-green-900" role="presentation">
                        <span class="hidden sm:block  w-4 h-[2px] bg-gray-400"></span>
                        <button id="Hiring-tab" data-tabs-target="#Hiring" type="button" role="tab" aria-controls="Hiring"
                            aria-selected="false">Hiring</button>
                    </li>
                </ul>
            </div>

            <div class="col-span-10 mx-3 mt-5 sm:col-span-5 sm:mx-0" id="myTabContent">
                <div id="Details" role="tabpanel" aria-labelledby="Details-tab">
                    <JobDetails />
                </div>
                <div id="Application" role="tabpanel" aria-labelledby="Application-tab">
                    <JobApplication />
                </div>
                <div id="Score" role="tabpanel" aria-labelledby="Score-tab">
                    <JobScore />
                </div>
                <div id="Hiring" role="tabpanel" aria-labelledby="Hiring-tab">
                    <JobHiring />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { initTabs, Tabs } from 'flowbite'
import { XMarkIcon } from '@heroicons/vue/24/outline'
definePageMeta({
    layout: 'newjob'
})


onMounted(() => {
    initTabs()
})
</script>