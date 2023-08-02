<template>
	<nav id="nav" class="sm:container sm:mx-auto">
		<!-- Header start -->
		<div id="particles-js"></div>
		<div class="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center my-6">
			<!-- Header menu links and small screen hamburger menu -->
			<div class="flex justify-between items-center px-4 sm:px-0">
				<!-- Header logos -->
				<div>
					<router-link to="/">
						<img v-if="theme === 'light'" src="@/assets/images/logo-dark.png" class="w-72 mt-2"
							alt="Dark Logo" />
						<img v-else src="@/assets/images/logo-light.png" class="w-72 mt-1" alt="Light Logo" />
					</router-link>
				</div>

				<!-- Theme switcher small screen -->
				<theme-switcher :theme="theme" @themeChanged="updateTheme"
					class="block sm:hidden bg-ternary-light dark:bg-ternary-dark hover:bg-hover-light dark:hover:bg-hover-dark hover:shadow-sm px-2.5 py-2 rounded-lg" />

				<!-- Small screen hamburger menu -->
				<div class="sm:hidden">
					<button @click="isOpen = !isOpen" type="button" class="focus:outline-none" aria-label="Hamburger Menu">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
							class="h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light">
							<path v-if="isOpen" fill-rule="evenodd"
								d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
								clip-rule="evenodd"></path>
							<path v-if="!isOpen" fill-rule="evenodd"
								d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
							</path>
						</svg>
					</button>
				</div>
			</div>

			<!-- Header links -->
			<AppHeaderLinks :showModal="showModal" :isOpen="isOpen" />

			<!-- Header right section buttons -->
			<div class="hidden sm:flex justify-between items-center flex-col md:flex-row">
				<!-- Hire me button -->
				<div class="hidden md:block">
					<!-- <Button title="Download CV" 
						class="text-md font-general-medium bg-emerald-900 hover:bg-emerald-800 text-white shadow-sm rounded-md px-5 py-2.5 duration-300"
						aria-label="Download CV" ><a download="TOL_YIMDARA_CV.pdf" href="/files/TOL_YIMDARA_CV.pdf"></a></Button> -->
					<!-- <a download="TOL_YIMDARA_CV.pdf" href="/files/TOL_YIMDARA_CV.pdf"></a> -->

					<a download="TOL_YIMDARA_CV.pdf" href="/files/TOL_YIMDARA_CV.pdf"
						class="flex justify-center items-center w-36 sm:w-48 sm:mb-0 text-lg border py-2.5 sm:py-3  shadow-sm  rounded-xl bg-emerald-900 focus:ring-1 dark:bg-ternary-dark hover:bg-emerald-700 text-gray-500 hover:text-white duration-500"
						aria-label="Download Resume">
						<i data-feather="arrow-down-circle"
							class="ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100 text-white"></i>
						<span class="text-sm text-white sm:text-lg font-general-medium duration-100">Download CV</span></a>

				</div>

				<!-- Theme switcher large screen -->
				<theme-switcher :theme="theme" @themeChanged="updateTheme"
					class="ml-8  bg-emerald-900 dark:bg-ternary-dark py-2.5 sm:py-3  text-white px-3 shadow-sm rounded-xl cursor-pointer" />
			</div>
		</div>

		<!-- Hire me modal -->
		<!-- <HireMeModal :showModal="showModal" :modal="modal" :categories="categories" aria-modal="Hire Me Modal" /> -->
	</nav>
</template>
<script>
import ThemeSwitcher from '../ThemeSwitcher';
// import HireMeModal from '../HireMeModal.vue';
import feather from 'feather-icons';
import AppHeaderLinks from './AppHeaderLinks.vue';
// import Button from '../reusable/Button.vue';

export default {
	components: {
		ThemeSwitcher,
		// HireMeModal,
		AppHeaderLinks,
		// Button,
	},
	data() {
		return {
			isOpen: false,
			theme: '',
			modal: false,
			categories: [
				{
					id: 1,
					value: 'web',
					name: 'Web Application',
				},
				{
					id: 2,
					value: 'mobile',
					name: 'Mobile Application',
				},
				{
					id: 3,
					value: 'ui-ux',
					name: 'UI/UX Design',
				},
				{
					id: 4,
					value: 'branding',
					name: 'Branding & Anim',
				},
			],
		};
	},

	created() {
		this.theme = localStorage.getItem('theme') || 'light';
	},
	mounted() {
		feather.replace();
		this.theme = localStorage.getItem('theme') || 'light';			

	},
	methods: {
		updateTheme(theme) {
			this.theme = theme;
		},
		showModal() {
			if (this.modal) {
				// Stop screen scrolling
				document
					.getElementsByTagName('html')[0]
					.classList.remove('overflow-y-hidden');
				this.modal = false;
			} else {
				document
					.getElementsByTagName('html')[0]
					.classList.add('overflow-y-hidden');
				this.modal = true;
			}
		},


	},
	updated() {
		feather.replace();
	},
};
</script>



<style scoped>
#nav a.router-link-exact-active {
	@apply text-emerald-700;
	@apply dark:text-emerald-400;
	@apply font-medium;
}

</style>
