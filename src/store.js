import { reactive } from "vue";

const store = reactive({
    apiBaseUrl: 'http://127.0.0.1:8000/api',
    urlProjectsList: 'http://127.0.0.1:8000/api/projects/paginate/',
    projectDetailUrl: 'http://127.0.0.1:8000/api/projects/'
})

export default store;