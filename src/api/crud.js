import axios from "axios";
import instance from './instance/instance';
import { Cookies } from "react-cookie";

const cookie = new Cookies();
const token = cookie.get('authorization');
console.log(token)
export const addPost = async (newPost) => {
    console.log(newPost)
    console.log(token)
    await instance.post(`/api/post`, newPost , {
        headers : {
            'Content-Type' : 'multipart/form-data',
            Authorization : token
        }
    })
}