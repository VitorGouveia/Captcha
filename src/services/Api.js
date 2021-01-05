//axios é um client http que faz as chamdas e os requests ao back-end
import axios from "axios"

const Api = axios.create({
    //url base usada em todos os requests do back-end
    baseURL: process.env.REACT_APP_API_URL
})

export default Api