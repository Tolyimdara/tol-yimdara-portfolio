<script>
export default {
	props: ['client'],
};
</script>

<template>
	<div class="grid grid-cols-1 justify-items-center">
		<img :src="client.img" :alt="client.title"
			class="w-64 h-52 py-5 px-10 border border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg mb-8 cursor-pointer dark:ternary-dark" />
		<p class="text-center text-lg text-emerald-800 dark:text-white font-bold">{{ client.title }}</p>
	</div>
	<!-- <div class="grid grid-cols-1 justify-items-center">
		<div><img src="http://placeimg.com/128/128" class="h-12" /></div>
		<div class="text-xs text-gray-800">Long Caption</div>
		<div class="text-xs text-gray-800">Short</div>
	</div> -->
</template>

<style lang="scss" scoped></style>
