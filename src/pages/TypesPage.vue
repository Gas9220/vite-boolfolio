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
                <h2 class="text-white p-1 rounded">{{ type.name }}</h2>
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
h2 {
  background-color: #146C94;
    
}
</style>