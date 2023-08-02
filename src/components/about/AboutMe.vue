<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						'Hi My name is Tol Yimdara . I am a web developer and also UX/UI designer. I have experience of develop frontend website for nearly 2 years by using vue js and vuetify as CSS Library . I also have experience of develop mobile application by useing Android studio and also develop API by using node js ( express ) and typsecript. '
				},
				{
					id: 2,
					bio:
						'I have been a freelancer for 3 months by worked in korean company that build mobile application for korean big company by using ( Ionic Vue Js) . ',
				},
			],
		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img
				src="@/assets/images/profile.jpg"
				class="rounded-xl w-96"
				alt=""
			/>
		</div>

		<!-- About details -->
		<div class="w-full sm:w-3/4 text-left">
			<p
				v-for="bio in bios"
				:key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
			>
				{{ bio.bio }}
			</p>
		</div>
	</div>
</template>
