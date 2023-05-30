<script>
import axios from 'axios';
import store from '../store';
import ProjectCard from '../components/ProjectCard.vue';

export default {
    name: 'TypesPage',
    components: {
        ProjectCard
    },
    data() {
        return {
            store,
            types: []
        }
    },
    methods: {
        getTypes() {
            axios.get(this.store.typesListUrl)
                .then((response) => {
                    this.types = response.data.results;
                    console.log(this.types);

                })
                .catch((error) => {
                    console.log(error);
                })
        }
    },
    created() {
        this.getTypes();
    },
}
</script>

<template>
    <main>
        <div class="container-fluid">
            <div class="pt-2" v-for="type in types">
                <div class="accordion rounded" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header text-white">
                            <button class="accordion-button custom-bg rounded text-white" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                {{ type.name }}
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show custom-bg rounded" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <span class="d-block">Slug: {{ type.slug }}</span>
                                <span class="d-block">ID: {{ type.id }}</span>
                                <span class="d-block">Created: {{ type.created_at }}</span>
                                <span class="d-block">Updated: {{ type.updated_at }}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row gy-4 pt-4 pb-4">
                    <div v-for="project in type.projects" class="col-4">
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

.accordion-active-color {
  background: blue
}
</style>