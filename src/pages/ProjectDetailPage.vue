<script>
import axios from 'axios';
import store from '../store';

export default {
    name: "ProjectDetailPage",
    data() {
        return {
            store,
            project: null,
            error: {
                status: false,
                message: ''
            }
        }
    },
    methods: {
        getProject() {
            axios.get(`${this.store.projectDetailUrl}${this.$route.params.id}`)
                .then((response) => {
                    console.log(response);
                    this.project = response.data.result;
                })
                .catch((error) => {
                    console.log(error);
                    this.error.status = true;
                    this.error.message = error.message;
                })
        }
    },
    created() {
        this.getProject();
    }

}
</script>


<template>
    <section v-if="project">
        <div class="container mb-3">
            <h1 class="mt-5 mb-3"><span class="badge bg-warning">{{ project.type.name }}</span> {{ project.project_name }} </h1>
            <hr>
            <h4>Summary</h4>
            <span>Revenues: {{ project.revenues }}€</span>
            <p>{{ project.project_summary }}</p>
            <hr>
            <h4>Dates</h4>
            <span class="d-block">Start date: {{ project.start_date }}</span>
            <span>End date: {{ project.end_date }}</span>
            <hr>
            <h4>Used technologies</h4>
            <span class="me-2 badge bg-warning" v-for="technology in project.technologies">{{ technology.name }}</span>
        </div>
    </section>
    <section v-if="error.status">
        <div class="container">
            <p>{{ error.message }}</p>
        </div>
    </section>
</template>


<style scoped></style>