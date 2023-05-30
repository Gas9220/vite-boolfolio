import { reactive } from "vue";

const store = reactive({
    apiBaseUrl: import.meta.env.VITE_API_BASE_URL,
    urlProjectsList: import.meta.env.VITE_API_PROJECTS_LIST_URL,
    projectDetailUrl: import.meta.env.VITE_API_PROJECT_DETAIL_URL,
    typesListUrl: import.meta.env.VITE_API_TYPES_LIST_URL,
    technologiesListUrl: import.meta.env.VITE_API_TECHNOLOGIES_LIST_URL,
    messagesUrl: import.meta.env.VITE_API_MESSAGES_URL
});

export default store;