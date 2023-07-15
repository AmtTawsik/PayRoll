<template>
    <h1 class="text-2xl font-semibold text-gray-700">Application form</h1>
    <span class="flex items-center gap-3 mt-5 text-sm font-bold text-green-500">
        <PencilIcon class="w-[18px] h-[18px]" /> Customize
    </span>
    <section class="grid w-full p-5 mt-5 border border-gray-200">
        <h1 class="block text-2xl font-bold text-green-900 sm:text-3xl">Submit Your Application</h1>
        <div class="flex items-center justify-between py-3 border-b border-b-gray-200">
            <span class="text-sm font-semibold sm:text-base text-green-950">Senior Product Manager</span>
            <div class="items-center hidden gap-3 text-sm text-gray-400 sm:flex">
                <span class="font-bold">DESIGN</span>
                <span class="block w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
                <span>Purwokerto</span>
                <span class="block w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
                <span>Full time</span>
            </div>
        </div>
        <form class="grid grid-cols-2 gap-6 py-3">
            <div class="col-span-2">
                <label for="Full Name" class="relative text-sm font-bold ">
                    Full Name
                    <span class="absolute top-0 block w-1 h-1 text-red-500 rounded-full -right-1">*</span>
                </label>
                <input type="text" id="Full Name"
                    class="bg-slate-100 border border-gray-300 mt-2 text-gray-900 text-sm rounded-md focus:ring-white focus:border-gray-300 block w-full p-2.5 placeholder:font-semibold"
                    placeholder="Your full name">
            </div>
            <div class="col-span-2 md:col-span-1">
                <label for="Phone" class="relative text-sm font-bold ">
                    Phone
                    <span class="absolute top-0 block w-1 h-1 text-red-500 rounded-full -right-1">*</span>
                </label>
                <div class="flex w-full mt-2">
                    <select id="conuntry"
                        class="bg-slate-100  border border-gray-300 text-gray-900 text-sm rounded-l-lg focus:ring-white focus:border-gray-300 block py-2.5 font-semibold ">
                        <option value="USA"> (+1)</option>
                        <option value="ENG">(+44)</option>
                        <option value="IND"> (+91)</option>
                    </select>
                    <input type="text" id="Phone"
                        class="bg-slate-100 border flex-grow border-gray-300 text-gray-900 text-sm rounded-r-lg focus:ring-white focus:border-gray-300 block w-full p-2.5"
                        placeholder="Your phone number" required>
                </div>
            </div>
            <div class="col-span-2 md:col-span-1">
                <label for="Email" class="relative text-sm font-bold ">
                    Email
                    <span class="absolute top-0 block w-1 h-1 text-red-500 rounded-full -right-1">*</span>
                </label>
                <input type="email" id="Email"
                    class="bg-slate-100 border border-gray-300 mt-2 text-gray-900 text-sm rounded-md focus:ring-white focus:border-gray-300 block w-full p-2.5 placeholder:font-semibold"
                    placeholder="Your email">
            </div>
            <div class="col-span-2">
                <span for="Email" class="relative text-sm font-bold ">
                    Portfolio
                </span>
                <div
                    class="flex flex-col items-center justify-center w-full h-32 gap-1.5 mt-2 text-sm text-gray-500 border border-gray-300 rounded-md bg-slate-100">
                    <DocumentTextIcon class="w-6 h-6" />
                    <span>Drag and drop file or <label for="portfolio" class="font-bold text-green-800">browse
                            file</label></span>
                    <span>Max size 10Mb</span>
                </div>
                <input type="file" id="portfolio" class="hidden" placeholder="Your email">
            </div>
            <div class="col-span-2 md:col-span-1">
                <p for="gender" class="relative inline text-sm font-bold">
                    Gender
                    <span class="absolute top-0 block w-1 h-1 text-red-500 rounded-full -right-1">*</span>
                </p>
                <div class="flex items-center gap-2">
                    <div class="flex items-center gap-1">

                        <input type="radio" class="hidden peer/male focus:ring-white" value="male" name="gender" id="male"
                            placeholder="Your email">
                        <span
                            class="inline-block w-4 h-4 duration-200 border border-gray-300 rounded-full peer-checked/male:border-4 peer-checked/male:border-green-400"></span>
                        <label class="text-sm font-semibold text-green-700 sm:text-base" for="male">
                            Male
                        </label>
                    </div>
                    <div class="flex items-center gap-1">
                        <input type="radio" id="female" class="hidden peer/female focus:ring-white" name="gender"
                            value="female" placeholder="Your email">
                        <span
                            class="inline-block w-4 h-4 duration-200 border border-gray-300 rounded-full peer-checked/female:border-4 peer-checked/female:border-green-400"></span>
                        <label class="text-sm font-semibold text-green-700 sm:text-sm" for="female">
                            Female
                        </label>
                    </div>
                </div>
            </div>
            <div class="col-span-2 border border-gray-200">
                <span class="relative flex items-center w-full gap-2 p-4 text-sm font-bold border-b border-b-gray-200">
                    <ChevronDownIcon class="w-4 h-4" />
                    Home Address
                </span>
                <div class="grid w-full grid-cols-2 gap-6 p-2 sm:p-4">
                    <div>
                        <label class="relative text-sm font-bold ">
                            Country
                            <span class="absolute top-0 block w-1 h-1 text-red-500 rounded-full -right-1">*</span>
                        </label>
                        <select id="conuntry"
                            class="bg-slate-100 w-full mt-1  border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-white focus:border-gray-300 block py-2.5 font-semibold"
                            placeholder="Select Country">
                            <option value="USA"> USA</option>
                            <option value="ENG">ENG</option>
                            <option value="IND"> IND</option>
                            <option value="RUS"> RUS</option>
                        </select>
                    </div>
                    <div>
                        <label class="relative text-sm font-bold ">
                            ZIP Code
                            <span class="absolute top-0 block w-1 h-1 text-red-500 rounded-full -right-1">*</span>
                        </label>
                        <input type="text"
                            class="bg-slate-100 border border-gray-300 mt-1 text-gray-900 text-sm rounded-md focus:ring-white focus:border-gray-300 block w-full p-2.5 placeholder:font-semibold"
                            placeholder="Your ZIP Code">
                    </div>
                </div>
            </div>
        </form>
    </section>
    <section>
        <button type="button"
            class="focus:outline-none text-green-800 border border-green-800 w-36 focus:ring-4 focus:ring-green-300 font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2">Previous</button>
        <button type="button"
            class="focus:outline-none text-white bg-green-800 w-36 focus:ring-4 focus:ring-green-300 font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2">Next</button>
    </section>
</template>

<script setup>
import { PencilIcon } from '@heroicons/vue/24/outline';
import { DocumentTextIcon } from '@heroicons/vue/24/outline';
import { ChevronDownIcon } from '@heroicons/vue/24/solid';
</script>

<style lang="scss" scoped></style>