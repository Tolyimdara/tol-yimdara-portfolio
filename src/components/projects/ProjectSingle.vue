<script>
export default {
  props: ["project"],
  data() {
		return {
			baseUrl: "http://localhost:8081/"
		};
	},
};
</script>

<template>
  <router-link
    :to="{ name: 'Single Project', params: { projectId: project.id }}"
    class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
    aria-label="Single Project"
  >
    <img class="rounded-t-lg h-80 w-full" :src="project.images[0].path" :alt="project.title"/>
    <div class="text-center px-4 py-6">
      <p
        class="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2"
      >
        {{ project.title }}
      </p>
      <span
        class="font-general-medium text-lg text-ternary-dark dark:text-ternary-light"
        >{{ project.category }}</span
      >
    </div>
  </router-link>
</template>

<style lang="scss" scoped></style>
