<script setup>
import { PhotoIcon } from '@heroicons/vue/24/outline'
import { Bars3BottomLeftIcon } from '@heroicons/vue/24/outline'
import { ListBulletIcon } from '@heroicons/vue/24/outline'
import { ChevronDownIcon } from '@heroicons/vue/24/outline'
import { LinkIcon } from '@heroicons/vue/24/outline'
import { PlusCircleIcon, XMarkIcon } from '@heroicons/vue/24/solid'

import { initTabs } from 'flowbite'
onMounted(() => {
    initTabs()
})
const skills = ref(['UIX Designer', 'Communication'])
const addingSkills = ref(false)

function addSkillMode() {
    addingSkills.value = !addingSkills.value
}

</script>

<template>
    <div>
        <h1 class="text-2xl font-semibold text-green-900">Job Details</h1>
        <span class="flex items-center gap-3 mt-5 text-sm font-bold text-gray-400">
            <PhotoIcon class="w-5 h-5" /> Add Header Image
        </span>

        <form class="w-full">
            <div>
                <label for="first_name" class="block mb-2 text-sm font-bold ">
                    Job Title</label>
                <input type="text" id="first_name"
                    class="bg-slate-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-white focus:border-gray-300 block w-full p-2.5 placeholder:font-semibold"
                    placeholder="Enter title">
            </div>
            <div class="grid gap-6 my-6 mb-12 grid-cols-2">

                <div class="md:col-span-1 col-span-2">
                    <label for="last_name" class="block mb-2 text-sm font-bold">Depertment</label>
                    <select type="text" id="last_name"
                        class="bg-slate-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-white focus:border-gray-300 block w-full p-2.5 font-semibold "
                        placeholder="Design">
                        <option value="Design">Design</option>
                        <option value="Development">Development</option>
                        <option value="Marketing">Marketing</option>
                    </select>
                </div>
                <div class="md:col-span-1 col-span-2">
                    <label for="Job_Type" class="block mb-2 text-sm font-bold">Job Type</label>
                    <select type="text" id="Job-Type"
                        class="bg-slate-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-white focus:border-gray-300 block w-full p-2.5 font-semibold ">
                        <option value="FullTime">FullTime</option>
                        <option value="PartTime">PartTime</option>
                    </select>
                </div>
                <div class="md:col-span-1 col-span-2">
                    <label for="company" class="block mb-2 text-sm font-bold ">Requritment Quota</label>
                    <input type="text" id="company"
                        class="bg-slate-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-white focus:border-gray-300 block w-full p-2.5 placeholder:font-semibold font-semibold"
                        placeholder="100" required>
                </div>
                <div class="md:col-span-1 col-span-2">
                    <label for="company" class="block mb-2 text-sm font-bold ">Requritment Period</label>
                    <input type="date" id="company"
                        class="bg-slate-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-white focus:border-gray-300 block w-full p-2.5 placeholder:font-semibold font-semibold"
                        placeholder="dd-mm-yyyy" required>
                </div>
                <div class="md:col-span-1 col-span-2">
                    <label for="website" class="block mb-2 text-sm font-bold ">Expected Salary</label>
                    <div class="flex w-full">
                        <select id="conuntry"
                            class="bg-slate-100  border border-gray-300 text-gray-900 text-sm rounded-l-lg focus:ring-white focus:border-gray-300 block p-2.5 font-semibold ">
                            <option value="EUR">EUR</option>
                            <option value="INR">INR</option>
                            <option value="USD">USD</option>
                        </select>
                        <input type="text" id="website"
                            class="bg-slate-100 border flex-grow border-gray-300 text-gray-900 text-sm rounded-r-lg focus:ring-white focus:border-gray-300 block w-full p-2.5"
                            placeholder="Enter amount" required>
                    </div>
                </div>
                <div class="md:col-span-1 col-span-2">
                    <label for="visitors" class="block mb-2 text-sm font-bold ">Experience in Years</label>
                    <input type="text" id="visitors"
                        class="bg-slate-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-white focus:border-gray-300 block w-full p-2.5  placeholder:font-semibold"
                        placeholder="Enter experience" required>
                </div>
                <div class="md:col-span-1 col-span-2">
                    <label for="Job_Type" class="block mb-2 text-sm font-bold">Location</label>
                    <select type="text" id="Job-Type"
                        class="bg-slate-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-white focus:border-gray-300 block w-full p-2.5 font-semibold ">
                        <option value="Delhi">Delhi</option>
                        <option value="Kolkata">Kolkata</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Mumbai">Mumbai</option>
                    </select>
                </div>
                <div class="md:col-span-1 col-span-2">
                    <label for="Job_Type" class="block mb-2 text-sm font-bold">Hiring Manager (Optional)</label>
                    <select id="Job-Type"
                        class="bg-slate-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-white focus:border-gray-300 block w-full p-2.5 font-semibold "
                        value="Delhi">
                        <option value="Delhi">Delhi</option>
                        <option value="Kolkata">Kolkata</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Mumbai">Mumbai</option>
                    </select>
                </div>
                <div class="md:col-span-1 col-span-2">
                    <h4 class="text-sm font-bold">Skill Sets</h4>
                    <button v-if="!addingSkills" type="button"
                        class="flex items-center gap-3 mt-2 text-sm font-bold text-green-400" @click="addSkillMode">
                        <PlusCircleIcon class="w-5 h-5 " />
                        Add New Skill
                    </button>
                    <div v-else>
                        <input type="text" id="website"
                            class="bg-slate-100 border flex-grow border-gray-300 text-gray-900 text-sm rounded-r-lg focus:ring-white focus:border-gray-300 block w-full p-2.5"
                            placeholder="UIX Desinger, Communication" required>
                        <div class="mt-2">
                            <button
                                class="w-24 px-4 py-2 mb-2 mr-2 text-sm font-medium text-white bg-green-800 rounded-md focus:outline-none focus:ring-4 focus:ring-green-300">Save</button>
                            <button class="px-4 py-2 ml-2 font-semibold text-gray-500" @click="addSkillMode">Cancel</button>
                        </div>
                    </div>
                    <div class="md:flex items-center gap-2 mt-3">
                        <span v-for="item in skills"
                            class="flex items-center gap-2 px-3 py-1 mb-2 w-fit text-white bg-gray-700 rounded-full" :key="item">
                            {{ item }}
                            <button type="button">
                                <XMarkIcon class="w-5 h-5" />
                            </button>
                        </span>
                    </div>
                </div>
                <div class="col-span-2">
                    <label for="Job_description" class="block mb-2 text-sm font-bold">Job Description</label>
                    <div class="w-full border border-gray-200">
                        <div class="w-full px-4 py-1.5 text-gray-500 bg-white flex items-center gap-10">
                            <div class="flex items-center gap-3">
                                <span class="font-bold ">B</span>
                                <span class="underline">U</span>
                                <i class="font-serif font-semibold">I</i>
                            </div>
                            <div class="flex items-center gap-3">
                                <span class="flex items-center gap-1">
                                    <Bars3BottomLeftIcon class="w-5 b-5" />
                                    <ChevronDownIcon class="w-3 h-3" />
                                </span>
                                <span class="flex items-center gap-1">
                                    <ListBulletIcon class="w-5 h-5" />
                                    <ChevronDownIcon class="w-3 h-3" />
                                </span>
                                <span class="flex items-center gap-1">
                                    <ListBulletIcon class="w-5 h-5" />
                                    <ChevronDownIcon class="w-3 h-3" />
                                </span>
                            </div>
                            <div class="flex items-center gap-3">
                                <span class="flex items-center gap-1 font-mono">H1
                                    <ChevronDownIcon class="w-3 h-3" />
                                </span>
                                <span class="flex items-center gap-1">
                                    <LinkIcon class="w-4 h-4" />
                                </span>
                            </div>
                        </div>
                        <textarea type="text" id="first_name"
                            class="bg-slate-100 border border-gray-300 duration-200 transition-[height,background-color] h-auto text-gray-900 text-sm focus:ring-white focus:border-gray-300 focus:bg-white focus:h-24 block w-full p-2.5 placeholder:font-semibold"
                            placeholder="Write Something"></textarea>
                    </div>
                </div>
            </div>
            <button type="button" data-tabs-target="#Application" role="tab" aria-controls="Application"
                aria-selected="false"
                class="focus:outline-none text-white bg-green-800 w-36 focus:ring-4 focus:ring-green-300 font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2">Next</button>
        </form>
    </div>
</template>
