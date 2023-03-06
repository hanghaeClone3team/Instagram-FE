import axios from "axios";
import { Cookies } from "react-cookie";

const cookies = new Cookies();


const instance = axios.create({
    baseURL : 'http://52.79.210.171:8080',
    headers : {Authorization : cookies.get('authorization')},
    withCredentials:true
});

instance.interceptors.request.use((config) => {
    const token = cookies.get('authorization');
    config.headers.Authorization = token;
    return config;
}, (error) => {
    
    return Promise.reject(error);
})

export default instance;