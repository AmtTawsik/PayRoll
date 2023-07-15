<template>
  <aside class="bg-white h-full shadow-sm px-3 max-xl:px-2">
    <div class="py-6 border-b flex items-center justify-center max-xl:py-4">
      <button
        class="flex justify-center items-center bg-blue-500 p-2 rounded-full border-8 border-blue-100 max-xl:p-1 max-xl:border-4"
      >
        <DocumentCheckIcon class="w-6 h-6 text-white max-xl:w-5 max-xl:h-5" />
      </button>
    </div>

    <div class="py-6 border-b flex items-center justify-center max-xl:py-4">
      <button
        class="flex justify-center items-center bg-orange-400 p-2 rounded-full border-8 border-orange-100 max-xl:p-1 max-xl:border-4"
      >
        <DocumentTextIcon class="w-6 h-6 text-white max-xl:w-5 max-xl:h-5" />
      </button>
    </div>

    <div class="py-6 flex items-center justify-center max-xl:py-4">
      <button
        class="flex justify-center items-center bg-teal-400 p-2 rounded-full border-8 border-teal-100 max-xl:p-1 max-xl:border-4"
      >
        <FolderIcon class="w-6 h-6 text-white max-xl:w-5 max-xl:h-5" />
      </button>
    </div>

    <div class="py-6 flex items-center justify-center max-xl:py-4">
      <button
        class="flex justify-center items-center p-2 rounded-full hover:bg-gray-300 max-xl:p-1"
      >
        <PlusIcon class="w-7 h-7 text-gray-600 max-xl:w-6 max-xl:h-6" />
      </button>
    </div>
  </aside>
</template>

<script setup>
import {
  DocumentCheckIcon,
  DocumentTextIcon,
  FolderIcon,
  PlusIcon,
} from '@heroicons/vue/24/outline';
</script>
