<script setup>
definePageMeta({
    layout: 'signup'
})
</script>

<template>
    <NuxtLayout name="signup">
        <div class="grid grid-cols-12">
            <section class="col-span-12 md:col-span-6 text-center bg-[#F2E6DD] md:h-screen hidden md:block">
                <h2 class="text-4xl font-bold text-gray-900 pt-10">Try Qualyval free for 15 Days</h2>
                <p class="text-lg text-gray-600 w-8/12 mx-auto mt-3 mb-6">Get a chance to explore the product to its fullest
                    before choosing your ideal plan.</p>
                <div class="flex justify-center">
                    <img class="h-[500px]" src="https://i.ibb.co/gWjdkYb/1ecb6705993dc024056b9d3b9a206f1a.webp" alt="">
                </div>
            </section>
            <section class="col-span-12 md:col-span-6 text-center bg-gray-50">
                <h2 class="text-4xl font-bold text-gray-900 pt-10">Sign Up to your account</h2>
                <p class="text-lg text-gray-600 w-8/12 mx-auto mt-3 mb-3">Get a chance to explore the product to its fullest
                    before choosing your ideal plan.</p>
                <p class="text-lg text-gray-600 mb-3">Almady have an account? <span
                        class="text-blue-600 cursor-pointer">Sign
                        In</span></p>
                <form action="" class="w-11/12 md:w-8/12 mx-auto text-left">
                    <div class="mb-3">
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full
                            Name</label>
                        <input type="text" name="name" id="name"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="input your full name" required="">
                    </div>
                    <div class="mb-3">
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Business
                            Email</label>
                        <input type="text" name="email" id="email"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="input your business email" required="">
                    </div>
                    <div class="mb-3">
                        <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company
                            Name</label>
                        <input type="text" name="company" id="company"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="input your company name" required="">
                    </div>
                    <div class="mb-5">
                        <label for="password"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" name="password" id="password"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="password" required="">
                    </div>
                    <div class="">
                        <button class="w-full py-2 bg-yellow-400 rounded-lg font-bold text-white hover:bg-yellow-500">SIGN
                            UP</button>
                    </div>
                </form>
                <div class="inline-flex items-center justify-center w-full relative">
                    <hr class="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
                    <span
                        class="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">Or
                        Sign Up With</span>
                </div>
                <div>
                    <button type="button"
                        class="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-8 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
                        <svg class="w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f"
                            role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                            <path fill="currentColor"
                                d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z">
                            </path>
                        </svg>
                    </button>
                    <button type="button"
                        class="text-white bg-[#EB4436] hover:bg-[#EB4436]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-8 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                        <svg class="w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google"
                            role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                            <path fill="currentColor"
                                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z">
                            </path>
                        </svg>
                    </button>
                    <button type="button"
                        class="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-8 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2">
                        <svg class="w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple"
                            role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                            <path fill="currentColor"
                                d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z">
                            </path>
                        </svg>
                    </button>
                </div>
            </section>
        </div>
    </NuxtLayout></template>