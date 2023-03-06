import React, { useState } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import styled from 'styled-components'
import { editPost, getPost } from '../api/crud'
import { token } from '../api/crud'
import jwtDecode from 'jwt-decode'
import { useParams } from 'react-router-dom'
import useInput from '../hooks/useInput'

function EditPostModal() {
    // const clostEditPostModal = () => {
    //     props.setEditPostModal(false)
    // }
    
    // const {isLoading, isError, data} = useQuery(['post'], getPost)
    // if (isLoading) {
    //     return <h1>로딩중...</h1>
    // }
    // if (isError) {
    //     return <h1>Error...</h1>
    // }
    const [contents, setContents] = useState();
    const queryClient = useQueryClient()
    const params = useParams()
    console.log(params)
    console.log(contents)
    const body = {
        content:contents
      }
      const newPostContent = new Blob([JSON.stringify(body)], {
        type: "application/json"
      })
      const editMutation = useMutation(editPost, {
        onSuccess : () => {
            queryClient.invalidateQueries()
        }
      })
      const EditPost = (e) => {
        e.preventDefault();
     
        editMutation.mutate({
            postId:params.id,
            changePost:newPostContent
        })
      }
  return (
    <EditPostContainer>
        <form onSubmit={EditPost}>
            <label>바꿀 텍스트 영역</label>
            <EditPostTextArea name='contents' value={contents} onChange={(e) => {setContents(e.target.value)}}></EditPostTextArea>
            <button>수정</button>
        </form>
    </EditPostContainer>
  )
}

export default EditPostModal

const EditPostContainer = styled.div`
    display: flex;
    align-items: center;
    width: 1200px;
    height: 1200px;
    background-color: lightgray;
    color: black;
    margin: 0 auto;
`
const EditPostTextArea = styled.textarea`
    width: 600px;
    height: 600px;
    margin-left: 50%;
    resize: none;
`