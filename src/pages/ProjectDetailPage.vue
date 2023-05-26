<script>
import axios from 'axios';

export default {
    name: "ProjectDetailPage",
    data() {
        return {
            apiBaseUrl: 'http://127.0.0.1:8000/api/projects/',
            project: null,
            error: {
                status: false,
                message: ''
            }
        }
    },
    methods: {
        getProject() {
            axios.get(this.apiBaseUrl + this.$route.params.id)
                .then((response) => {
                    console.log(response);
                    this.project = response.data.results;
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
        <div class="container">
            <h1 class="mt-5 mb-3">{{ project.project_name }}</h1>
        </div>
    </section>
    <section v-if="error.status">
        <div class="container">
            <p>{{ error.message }}</p>
        </div>
    </section>
</template>


<style scoped></style>