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
            <div class="row gy-4">
                <div v-for="project in projects" class="col-3">
                    <div class="card h-100 p-1">
                        <h5 class="card-title text-center">
                            {{ project.project_name }}
                        </h5>
                        <div class="card-body">
                            <p>{{ project.project_summary }}</p>
                            <span>{{ project.start_date }}</span>
                            <span>{{ project.end_date }}</span>
                            <h6>{{ project.revenues }}€</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
 
<style scoped></style>