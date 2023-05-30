<script>
import axios from 'axios';
import store from '../store';
import ProjectCard from '../components/ProjectCard.vue';

export default {
    name: 'TechnologiesPage',
    components: {
        ProjectCard
    },
    data() {
        return {
            store,
            technologies: []
        }
    },
    methods: {
        getTechnologies() {
            axios.get(this.store.technologiesListUrl)
                .then((response) => {
                    this.technologies = response.data.results;
                    console.log(this.technologies);

                })
                .catch((error) => {
                    console.log(error);
                })
        }
    },
    created() {
        this.getTechnologies();
    }
}
</script>

<template>
    <main>
        <div class="container-fluid">
            <div class="pt-2" v-for="technology in technologies">
                <div class="accordion rounded" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header text-white">
                            <button class="accordion-button custom-bg rounded text-white" type="button"
                                data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                                aria-controls="collapseOne">
                                {{ technology.name }}
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show custom-bg rounded"
                            data-bs-parent="#accordionExample">
                            <div class="accordion-body text-white">
                                <span class="d-block">Slug: {{ technology.slug }}</span>
                                <span class="d-block">Category: {{ technology.category }}</span>
                                <span class="d-block">ID: {{ technology.id }}</span>
                                <span class="d-block">Created: {{ technology.created_at }}</span>
                                <span class="d-block">Updated: {{ technology.updated_at }}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row gy-4 pt-4 pb-4">
                    <div v-for="project in technology.projects" class="col-4">
                        <ProjectCard :project="project" />
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
 
<style scoped lang="scss">
.custom-bg {
    background-color: #146C94;
}
</style>