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
            results: Object,
            elementPerPage: 3,
            apiBaseUrl: 'http://127.0.0.1:8000/api',
            apiUrls: {
                projects: '/projects'
            },
            projects: []
        }
    },
    methods: {
        getProjects(elements = 3) {
            axios.get(this.apiBaseUrl + this.apiUrls.projects + "/" + elements)
                .then((response) => {
                    this.results = response.data.result;
                    this.projects = response.data.result.data;
                    //console.log(this.results);
                    // console.log(this.projects);

                })
                .catch((error) => {
                    console.log(error);
                })
        },
        async changePage(page = 1) {
            await axios.get(`http://127.0.0.1:8000/api/projects/${this.elementPerPage}?page=${page}`)
                .then((response) => {
                    this.results = response.data.result;
                    this.projects = response.data.result.data;
                    //console.log(this.results);
                    // console.log(this.projects);

                })
                .catch((error) => {
                    console.log(error);
                })
        }
    },
    created() {
        this.getProjects();
    },
    computed: {
        linkLists() {
            const links = this.results.links ?? [];
            links.pop();
            links.shift()
            return links;
        }
    }
}
</script>

<template>
    <main>
        <div class="container">
            <label for="page-elements" class="me-2">Elements per page</label>
            <select class="text-center" name="page-elements" id="page-elements" @change="getProjects(elementPerPage)" v-model="elementPerPage">
                <option value="3" >3</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="30">30</option>
            </select>
            <div class="row gy-4 pt-4 pb-4">
                <div v-for="project in projects" class="col-3">
                    <ProjectCard :project="project"></ProjectCard>
                </div>
            </div>
            <div class="text-center pb-3">
                <ul class="list-unstyled d-flex justify-content-center mb-0">
                    <li v-for="page in linkLists" class="me-2">
                        <button v-if="page.url" @click.prevent="changePage(page.label)" class="btn rounded-circle" :class="page.label == results.current_page ? 'bg-primary' : 'bg-secondary'">
                            <i :class="'bi bi-' + page.label + '-circle-fill'" class="text-white"></i>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </main>
</template>
 
<style scoped lang="scss">
main {
    background-color: #AFD3E2;
}
</style>