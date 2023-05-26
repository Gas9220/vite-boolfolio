<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';

export default {
    name: 'ProjectsPage',
    components: {
        ProjectCard
    },
    data() {
        return {
            apiBaseUrl: 'http://127.0.0.1:8000/api',
            apiUrls: {
                projects: '/projects'
            },
            projects: []
        }
    },
    methods: {
        getProjects() {
            axios.get(this.apiBaseUrl + this.apiUrls.projects)
                .then((response) => {
                    //console.log(response.data);
                    this.projects = response.data.result;
                    console.log(this.projects);
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    },
    created() {
        this.getProjects();
    }
}
</script>

<template>
    <main>
        <div class="container">
            <div class="row gy-4 pt-4 pb-4">
                <div v-for="project in projects" class="col-3">
                    <ProjectCard :project="project"></ProjectCard>
                </div>
            </div>
        </div>
    </main>
</template>
 
<style scoped lang="scss">
main {
    background-color: #AFD3E2;

    .tag {
        background-color: #146C94;
    }
}
</style>