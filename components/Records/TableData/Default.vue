<template>
	<div class="px-3 py-4">
		<p class="text-black truncate">{{ content }}</p>
	</div>
</template>

<script setup>
	const { content } = defineProps(["content"]);
</script>
