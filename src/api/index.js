import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
});

const getProjectLists = async () => {
    return instance.get('/project-list');
};

export { getProjectLists };
