<script>
export default {
    name: 'AppMain',
    props: {
        projects: Object
    },
    created() {
        console.log('Sono main' + this.projects)
    }
}
</script>

<template>
    <main>
        <div class="container">
            <div class="row gy-4 pt-4 pb-4">
                <div v-for="project in projects" class="col-3">
                    <div class="card h-100 p-1">
                        <img v-if="project.project_image" :src="project.project_image" class="card-img-top rounded-5 mb-2"
                            :alt="project.project_name + '-img'">
                        <span v-if="project.type" class="badge tag me-2">{{ project.type.name + ' Project'}}</span>
                        <h5 class="card-title text-center">
                            {{ project.project_name }}
                        </h5>
                        <div class="card-body">
                            <p>{{ project.project_summary }}</p>
                            <span class="d-block">{{ 'Start date: ' + project.start_date }}</span>
                            <span>{{ 'End date: ' + project.end_date }}</span>
                            <h6>{{ 'Revenues: ' + project.revenues }}€</h6>
                            <div class="d-flex">
                                <div v-for="technology in project.technologies">
                                    <span class="badge tag me-2">{{ technology.name }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
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