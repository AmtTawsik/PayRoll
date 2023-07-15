<template>
	<div class="px-3 py-4">
		<div class="text-black">{{ getDateFormat(content) }}</div>
	</div>
</template>

<script setup>
	function getDateFormat(tempDate) {
		const date = new Date(tempDate);
		const month =
			date.getMonth() < 10
				? `0${date.getMonth() + 1}`
				: `${date.getMonth() + 1}`;
		const format = `${date.getDate()}/${month}/${date.getFullYear()}`;
		return format;
	}
	const { content } = defineProps(["content"]);
</script>
