<template>
    <div>
        <h4 class="text-2xl font-semibold mb-2">Score Card</h4>
        <p class="flex items-center text-green-500 cursor-pointer mb-5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 mr-1">
                <path fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
                    clip-rule="evenodd" />
            </svg>
            Add Stage
        </p>
        <section class="grid grid-cols-12">
            <div class="md:col-span-7 col-span-12 mr-5">
                <div class="border-2 p-2 rounded-lg border-t-4 border-t-orange-500 mb-3">
                    <h3 class="font-bold">New Applied</h3>
                </div>
                <div class="border-2 p-2 rounded-lg border-t-4 border-t-green-500 mb-3">
                    <div class="flex">
                        <h3 class="font-bold mr-5">Screening</h3>
                        <p class="px-2 mt-1 font-semibold text-sm bg-gray-200 rounded-md w-fit">Analytical</p>
                    </div>
                </div>
                <div class="border-2 p-2 rounded-lg border-t-4 border-t-teal-500 mb-3">
                    <h3 class="font-bold">Design Challenge</h3>
                </div>
                <div class="border-2 p-2 rounded-lg border-t-4 border-t-fuchsia-500 mb-3">
                    <div class="flex">
                        <h3 class="font-bold mr-5">Interview</h3>
                        <p class="px-2 mt-1 font-semibold text-sm bg-gray-200 rounded-md w-fit mr-2">Communication</p>
                        <p class="px-2 mt-1 font-semibold text-sm bg-gray-200 rounded-md w-fit">Motivated</p>
                    </div>
                </div>
                <div class="border-2 p-2 rounded-lg border-t-4 border-t-red-500 mb-3">
                    <h3 class="font-bold">Tests</h3>
                </div>
                <div class="border-2 p-2 rounded-lg border-t-4 border-t-yellow-400 mb-3">
                    <h3 class="font-bold">Hired</h3>
                </div>
            </div>
            <div class="md:col-span-5 col-span-12 border rounded-md p-2">
                <h4 class="font-bold mb-3">Drag & Drop Score Card</h4>
                <p class="p-1 border text-center rounded-md mb-2 font-semibold text-gray-600">Interpersonal Skill</p>
                <p class="p-1 border text-center rounded-md mb-2 font-semibold text-gray-600">Team Collabaration</p>
                <p class="p-1 border text-center rounded-md mb-2 font-semibold text-gray-600">Attention to Details</p>
                <p class="p-1 border text-center rounded-md mb-2 font-semibold text-gray-600">Rejection Handling</p>
            </div>
        </section>
        <section class="md:mt-28 mt-5">
            <button type="button"
                class="focus:outline-none text-green-800 border border-green-800 w-36 focus:ring-4 focus:ring-green-300 font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2">Previous</button>
            <button type="button"
                class="focus:outline-none text-white bg-green-800 w-36 focus:ring-4 focus:ring-green-300 font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2">Next</button>
        </section>
    </div>
</template>

<script setup>

</script>