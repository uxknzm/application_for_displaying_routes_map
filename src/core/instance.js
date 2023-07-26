import axios from 'axios'

// экземпляр axios
export const apiInstance = (params = {}) => {
    const { token } = params
    const config = {
        baseURL: 'http://router.project-osrm.org/route/v1/driving',
        headers: { 'Content-Type': 'application/json' },
        timeout: 1000,
    };

    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    };

    return axios.create(config)
}