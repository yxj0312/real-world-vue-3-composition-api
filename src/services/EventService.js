import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/yxj0312/real-world-vue-3-composition-api/events',
    withCredentials: false,
    headers: [
        Accept: 'application/json',
        'Content-Type': 'application/json'
    ]
})