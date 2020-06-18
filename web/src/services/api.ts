import axios from 'axios';

const api = axios.create({
    baseURL: 'https://vps18297.publiccloud.com.br:3355'
});

export default api;