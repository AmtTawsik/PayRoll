<template>
    <section class="w-full bg-slate-100">
        <header class="w-full px-5 border-b border-b-gray-200">
            <ul class="flex items-center text-sm font-bold">
                <li class="p-4 text-green-900 border-b-2 border-b-yellow-300">ACTIVE JOBS</li>
                <li class="p-4 text-gray-500 hover:bg-white">INACTIVE JOBS</li>
            </ul>
        </header>
        <main class="px-4">
            <div class="flex flex-col py-5 sm:items-end gap-0.5 text-gray-500 sm:gap-10  sm:flex-row sm:pr-4 md:ml-6">
                <h2 class="text-2xl text-green-900">7 Active Jobs</h2>
                <p class="flex gap-2 text-sm font-bold">
                    Sort by:
                    <span class="flex items-center gap-0.5   text-black">Creation Date
                        <span>
                            <ChevronDownIcon class="w-4 h-4 text-black" />
                        </span>
                    </span>
                </p>
                <p class="flex items-center gap-2 text-sm font-bold">
                    Status:
                    <span class="flex items-center gap-0.5   text-black">All Status
                        <span>
                            <ChevronDownIcon class="w-4 h-4 text-black" />
                        </span>
                    </span>
                </p>
            </div>
            <div class="grid grid-cols-12 gap-5 mb-3 sm:gap-8 lg:gap-6 pb-2">
                <div v-for="(item, index) in data" :key="index"
                    class="w-full col-span-12 px-2 py-2 bg-white border-t-4 rounded-md sm:w-56 sm:col-span-6 lg:col-span-3 place-self-center"
                    :class="{ 'border-t-gray-300': item.status==='Draft' }, { 'border-t-green-500': item.status==='Published' }">
                    <h1 class="text-sm font-bold text-gray-400">{{ item.title.toUpperCase() }}</h1>
                    <p class=" font-bold text-green-900">{{ item.role }}</p>
                    <span class="text-sm text-gray-500">Candidates:</span>
                    <div class="flex items-center w-full p-2 mt-1 border-2 rounded-md border-slate-200 bg-slate-100">
                        <div class="flex flex-col justify-between w-1/2 px-1 border-l-2 border-l-gray-400">
                            <span class="text-sm font-bold text-gray-400">TOTAL</span>
                            <span class="text-lg font-semibold text-green-900 ">{{ item.total }}</span>
                        </div>
                        <div class="flex flex-col w-1/2 px-1 border-l-2 border-l-lime-600">
                            <span class="text-sm font-bold text-gray-600">NEW</span>
                            <span class="text-lg font-semibold text-green-900 ">{{ item.new }}</span>
                        </div>
                    </div>
                    <h2 class="py-3 font-bold text-center text-gray-400 border-b border-b-gray-300">Purwokerto .
                        Freelancer</h2>
                    <div class="flex items-center justify-between mt-2 pb-2 text-sm font-bold text-gray-600">
                        <span class="flex gap-2 itemc-center">
                            <DocumentTextIcon class="inline w-5 h-5" /> {{item.status}}
                        </span>
                        <span class="flex items-center">See Details
                            <ChevronRightIcon class="inline w-4 h-4 text-gray-500" />
                        </span>
                    </div>
                </div>
            </div>
        </main>
    </section>
</template>

<script setup>
import { DocumentTextIcon } from '@heroicons/vue/24/outline'
import { ChevronDownIcon } from '@heroicons/vue/24/outline'
import { ChevronRightIcon } from '@heroicons/vue/24/outline'
const data = [
    {
        title: 'Design',
        role: 'Senior Product Designer',
        total: 36,
        status:'Draft',
        new: 5,
    },
    {
        title: 'Design',
        role: 'UI/UX Designer',
        total: 23,
        status:'Published',
        new: 2,
    },
    {
        title: 'Design',
        role: 'Head of UX',
        total: 42,
        status:'Published',
        new: 2,
    },
    {
        title: 'Marketing',
        role: 'Copywriter',
        total: 27,
        status:'Draft',
        new: 9,
    },
    {
        title: 'Design',
        role: 'Head of UX',
        total: 16,
        status:'Published',
        new: 4,
    },
    {
        title: 'Design',
        role: 'Senior Product Designer',
        total: 36,
        status:'Published',
        new: 5,
    },
]

</script>

<style>
.no-scrollbar::-webkit-scrollbar {
  width: 0px;
}
</style>