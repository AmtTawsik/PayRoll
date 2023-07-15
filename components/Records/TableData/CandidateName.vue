<template>
	<div class="px-3 py-4">
		<p class="text-black truncate">{{ content[0].name }}</p>
	</div>
</template>

<script setup>
	const { content } = defineProps(["content"]);
    console.log(content[0]);
</script>
