import axios from "axios";

const loginService = axios.create({
    baseURL: "http://localhost:8081/",
})
loginService.defaults.withCredentials = true;
export default loginService;