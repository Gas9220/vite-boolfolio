import { reactive } from "vue";

const store = reactive({
    apiBaseUrl: import.meta.env.VITE_API_BASE_URL,
    urlProjectsList: import.meta.env.VITE_API_PROJECTS_LIST_URL,
    projectDetailUrl: import.meta.env.VITE_API_PROJECT_DETAIL_URL
});

export default store;