import axios from "axios";

export const addPost = async (newPost) => {
    console.log(newPost)
    await axios.post(`/api/post`, newPost , {
        headers : {
            'Content-Type' : 'multipart/form-data'
        }
    })
}