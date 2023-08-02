<script>
import AboutClientSingle from './AboutClientSingle.vue';

export default {
	components: {
		AboutClientSingle,
	},
	data: () => {
		return {
			clientsHeading: 'Technology And Framework That I am Friendly With',
			clients: [
				{
					id: 1,
					title: 'Node Js',
					img: require('@/assets/images/brands/node-js-logo.png'),
				},
				{
					id: 2,
					title: 'Typescript',
					img: require('@/assets/images/brands/typescript-logo.png'),
				},
				{
					id: 3,
					title: 'Vue Js',
					img: require('@/assets/images/brands/vue-logo.png'),
				},
				{
					id: 4,
					title: 'Laravel',
					img: require('@/assets/images/brands/laravel-logo.png'),
				},
				{
					id: 5,
					title: 'Ionic Vue Js',
					img: require('@/assets/images/brands/ionic-logo.png'),
				},
				{
					id: 6,
					title: 'Vuetify CSS',
					img: require('@/assets/images/brands/vuetify.png'),
				}
			],
		};
	},
};
</script>

<template>
	<div class="mt-10 sm:mt-20">
		<p
			class="font-general-medium text-2xl sm:text-3xl text-emerald-900 dark:text-white"
		>
			{{ clientsHeading }}
		</p>
		<div class="grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-2">
			<AboutClientSingle
				v-for="client in clients"
				:key="client.id"
				:client="client"
			/>
		</div>
	</div>
</template>
