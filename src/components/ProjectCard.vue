<script>

export default {
    name: 'ProjectCard',
    props: {
        project: Object
    }
}
</script>

<template>
    <div class="card h-100 p-1">
        <img v-if="project.project_image" :src="project.project_image" class="card-img-top rounded-5 mb-2"
            :alt="project.project_name + '-img'">
        <span v-if="project.type" class="badge tag me-2">{{ project.type.name + ' Project' }}</span>
        <h5 class="card-title text-center mt-2">
            {{ project.project_name }}
        </h5>
        <div class="card-body d-flex flex-column">
            <p>{{ project.project_summary }}</p>
            <span class="d-block">{{ 'Start date: ' + project.start_date }}</span>
            <span>{{ 'End date: ' + project.end_date }}</span>
            <h6>{{ 'Revenues: ' + project.revenues }}€</h6>
            <div class="d-flex flex-wrap mb-2">
                <div v-for="technology in project.technologies">
                    <span class="badge tag me-2">{{ technology.name }}</span>
                </div>
            </div>
            <router-link :to="{ name: 'projectDetail', params: { id: project.id } }" class="btn mt-auto detail-link text-white">
                Project detail
            </router-link>
        </div>
    </div>
</template>

<style scoped>
.tag {
    background-color: #146C94;
}

.detail-link {
    background-color: #146C94;
}
</style>