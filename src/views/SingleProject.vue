<script>
import feather from "feather-icons";
import ProjectHeader from "../components/projects/ProjectHeader.vue";
import ProjectGallery from "../components/projects/ProjectGallery.vue";
import ProjectInfo from "../components/projects/ProjectInfo.vue";
import projects from '../data/projects.json';
// import ProjectRelatedProjects from "../components/projects/ProjectRelatedProjects.vue";
// import { getSingleProject } from "../services/apiBase";  

export default {
  name: "Projects",
  components: {
    ProjectHeader,
    ProjectGallery,
    ProjectInfo,
    // ProjectRelatedProjects,
  },
  data: () => {
    return {
      baseUrl: "http://localhost:8081/",
      projectId: "",
      projects: projects,
      singleProjectHeader: {
        singleProjectTitle: "",
        singleProjectDate: "",
        singleProjectTag: "",
      },
      projectImages: [],
      projectInfo: {
        clientHeading: "About Client",
        companyInfos: [
          {
            id: 1,
            title: "Name",
            details: "Company Ltd",
          },
          {
            id: 2,
            title: "Services",
            details: "UI Design & Frontend Development",
          },
          {
            id: 3,
            title: "Website",
            details: "https://company.com",
          },
          {
            id: 4,
            title: "Phone",
            details: "555 8888 888",
          },
        ],
        objectivesHeading: "Objective",
        objectivesDetails:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
        technologies: [
          {
            title: "Tools & Technologies",
            techs: [
              "HTML",
              "CSS",
              "JavaScript",
              "Vue.js",
              "TailwindCSS",
              "AdobeXD",
            ],
          },
        ],
        projectDetailsHeading: "Challenge",
        projectDetails: [
          {
            id: 1,
            details:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
          },
          {
            id: 2,
            details:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
          },
          {
            id: 3,
            details:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
          },
          {
            id: 4,
            details:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
          },
        ],
        socialSharingsHeading: "Share This",
        socialSharings: [
          {
            id: 1,
            name: "Twitter",
            icon: "twitter",
            url: "https://twitter.com/realstoman",
          },
          {
            id: 2,
            name: "Instagram",
            icon: "instagram",
            url: "https://instagram.com/realstoman",
          },
          {
            id: 3,
            name: "Facebook",
            icon: "facebook",
            url: "https://facebook.com/",
          },
          {
            id: 4,
            name: "LinkedIn",
            icon: "linkedin",
            url: "https://linkedin.com/",
          },
          {
            id: 5,
            name: "Youtube",
            icon: "youtube",
            url: "https://www.youtube.com/c/StomanStudio",
          },
        ],
      },
      relatedProject: {
        relatedProjectsHeading: "Related Projects",
        relatedProjects: [
          {
            id: 1,
            title: "Mobile UI",
            img: require("@/assets/images/mobile-project-1.jpg"),
          },
          {
            id: 2,
            title: "Web Application",
            img: require("@/assets/images/web-project-1.jpg"),
          },
          {
            id: 3,
            title: "UI Design",
            img: require("@/assets/images/ui-project-2.jpg"),
          },
          {
            id: 4,
            title: "Kabul Mobile App UI",
            img: require("@/assets/images/mobile-project-2.jpg"),
          },
        ],
      },
    };
  },
  mounted() {
    (this.projectId = this.$route.params.projectId); 
    this.getSingleProject();
    // console.log(this.projects)
    feather.replace();
  },
  updated() {
    feather.replace();
  },
  methods: {
    async getSingleProject() {
    
      const response = this.projects.data.find(item => item?.id === this.projectId);
      this.singleProjectHeader = {
        singleProjectTitle: response.title,
        singleProjectDate: response.projectDate,
        singleProjectTag: response.category,
      };
      const images = response.images;
      for (let i = 0; i < images.length; i++) {
    
        this.projectImages.push({
          id: images[i].id,
          title: images[i].name,
          img: images[i].path,
        });
        console.log(this.projectImages);
      }
      this.projectInfo = {
        clientHeading: "About Client",
        companyInfos: [
          {
            id: 1,
            title: "Name",
            details: response.clientName,
          },
          {
            id: 2,
            title: "Services",
            details: response.clientService,
          },
          {
            id: 3,
            title: "Website",
            details: response.clientWebsite,
          },
          {
            id: 4,
            title: "Phone",
            details: response.clientPhoneNumber,
          },
        ],
        objectivesHeading: "Objective",
        objectivesDetails: response.description,
        technologies: [
          {
            title: "Tools & Technologies",
            techs: [response.technology],
          },
        ],
        projectDetailsHeading: "Challenge",
        projectDetails: [
          {
            id: 1,
            details: response.projectObjective,
          },
        ],
        socialSharingsHeading: "Share This",
        socialSharings: [
          {
            id: 4,
            name: "LinkedIn",
            icon: "linkedin",
            url: "https://www.linkedin.com/in/yimdara-tol-414362250",
          },
          {
            id: 5,
            name: "Facebook",
            icon: "facebook",
            url: "https://t.me/tolyimdara",
          },
        ],
      };
    },
  },
};
</script>

<template>
  <div class="container mx-auto mt-10 sm:mt-20">
    <!-- Project header -->
    <ProjectHeader :singleProjectHeader="singleProjectHeader" />

    <!-- Project gallery -->
    <ProjectGallery :projectImages="projectImages" />

    <!-- Project information -->
    <ProjectInfo :projectInfo="projectInfo" />

    <!-- Project related projects -->
    <ProjectRelatedProjects :relatedProject="relatedProject" />
  </div>
</template>

<style scoped></style>
