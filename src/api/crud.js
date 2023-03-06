import axios from "axios";
import instance from './instance/instance';
import { Cookies } from "react-cookie";


const cookie = new Cookies();
export const token = cookie.get('authorization');
console.log(token)


export const getPost = async () => {
    const response = await instance.get(`http://52.79.210.171:8080/api/post`)
    return response
}


// 인스타 post 추가
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

// 인스타 post 삭제

export const deletePost = async (postId) => {
    await instance.delete(`/api/post/${postId}`)
}

// 인스타 post 내용 수정

export const editPost = async ({postId, changePost}) => {
    console.log("수정내용 ", changePost)
    await instance.patch(`api/post/${postId}`, 
    {
        content:changePost,
        headers:{
            Authorization : token
        }
    }

    // {
    //     headers : {
    //         'Content-Type' : 'multipart/form-data',
    //         
    //     }
    // }
    
    )
}