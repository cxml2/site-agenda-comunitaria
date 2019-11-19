import axios from 'axios'

export default api = axios.create(
    {
        baseURL: "https://localhost:9999/"
    }
)