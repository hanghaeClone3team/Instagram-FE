import React, { useState } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import styled from 'styled-components'
import { editPost, getPost } from '../api/crud'
import { token } from '../api/crud'
import jwtDecode from 'jwt-decode'
import { useNavigate, useParams } from 'react-router-dom'
import useInput from '../hooks/useInput'
import '../css/postmodal.css'
import dot from '../img/dots.png'
import profile from '../img/profile.png'

function EditPostModal() {
    
    const { isLoading, isError, data } = useQuery(['post'], getPost)
    const [contents, setContents] = useState("");
    const queryClient = useQueryClient()
    const params = useParams()
    const navigate = useNavigate()

    




   
      const editMutation = useMutation(editPost, {
        onSuccess : () => {
            queryClient.invalidateQueries('post');
            navigate("/board");
        }
      })
    if (isLoading) {
        return <h1>로딩중...</h1>
    }
    if (isError) {
        return <h1>Error...</h1>
    }

    // 특정 id값을 가진 post 가져옴
    const forEditData = data.data.find((element) => String(element.id) === params.id)
    console.log(forEditData)
    
    const body = {
      content:contents
    }
    const newPostContent = new Blob([JSON.stringify(body)], {
      type: "application/json"
    })
      const EditPost = (e) => {
        e.preventDefault();
        const data = new FormData()
        data.append("postRequestDto", newPostContent)
        editMutation.mutate({
          postId:params.id,
          postRequestDto:body
        })


      }
      
  return (
  //   <ModalBackground onClick={() => {navigate("/board")}}>
  //   <ModalPostOut onClick={() => {navigate("/board")}}>X</ModalPostOut>
  //   <ModalPostMake onClick={(e) => e.stopPropagation()}>
  //     <ModalPostBoxContainer>
  //       <ModalPostBoxOne>
  //         <ModalPostBoxOneLabel>
  //           <ModalPostBoxOneLabelName>
  //             {/* 게시물  */}
  //             <span>게시물 수정하기</span>
  //           </ModalPostBoxOneLabelName>
  //         </ModalPostBoxOneLabel>

  //         {/* 이미지 집어넣기 영역 */}
  //          <ModalPostImg src={forEditData.imageUrl} alt="사진"></ModalPostImg>
          

          
         

           

  //       </ModalPostBoxOne>
      
  //     <ModalPostBoxTwo>
        
  //       <PostUpload>

  //         <PostButton onClick={EditPost}>수정하기</PostButton>

  //       </PostUpload>

        
  //       <PostTextArea
  //         name='content'
  //         value={contents}
  //         onChange={(e) => {setContents(e.target.value)}}
  //         placeholder="내용을 입력하세요..."
  //       >{forEditData.contents}</PostTextArea>
      
  //     </ModalPostBoxTwo>
  //   </ModalPostBoxContainer>
  // </ModalPostMake>
  // </ModalBackground >
  <div className='modal-container' >
        <div className='close-modal' >X</div>
        <div className='modal'>
          <img className='modal-image' src ={forEditData.imageUrl}  alt='이미지'/>
          <div className='modal-content-section' >
            <div className='modal-top-section modal-section'>
              <img  className='profile-image' src={profile} alt='이미지'/>
              <div className='username'>{forEditData.username}</div>
              <div className='spacer'></div>
              <div className='dot'><img className='dot-image' src={dot} alt="dot"/></div>
            </div>
            <div className='modal-comment-section modal-section'>
              <div className='comment-container'>
                <img className='profile-image' src={profile} alt="프로필" />
                <div>
                  <div>
                    <span className='username'>{forEditData.username}</span>
                    <span>{forEditData.contents}</span>
                  </div>
                </div>
               </div>
          
            <div className='write-section modal-section'>
             <textarea type="text" placeholder='수정할 내용을 입력하세요' value={contents} onChange={(e) => {setContents(e.target.value)}}></textarea>
             <button onClick={EditPost}>수정하기</button>
            </div>
          </div>
        </div>
      </div>
    </div>
)
}

export default EditPostModal

const ModalBackground = styled.div`
    position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.185);
  z-index: 0;
`
const ModalPostOut = styled.div`
    position: absolute;
  right: 50px;
  top: 30px;
  background-color: transparent;
  color: white;
  font-size: 50px;
  border: transparent;
`
// 모달 화면
// 스타일 조절하려면 이 컴포넌트 조절
const ModalPostMake = styled.div`
    width: 1200px;
    height: 1000px;

    // 모달창 최상단 위치 지정
    z-index: 999;
    position: absolute;
    top: 10%;
    left: 30%;
    
    
    border: 0 solid transparent;
    border-radius: 15%;
`
const ModalPostBoxContainer = styled.div`
    width: 1200px;
  height: 1000px;
  display: flex;
  justify-content: center;
`
const ModalPostBoxOne = styled.div`
    background-color: white;
  border: 1px solid #bababa;
  border-radius: 15px;
  width: 600px;
  height: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  
  background-repeat: no-repeat;
  background-position: center;
`
const ModalPostBoxOneLabel = styled.div`
     margin-top: 10px;
  width: 90%;
  height: 30px;
  border-bottom: solid 1px #bababa;
  position: absolute;
  top: 0;
`
const ModalPostBoxOneLabelName = styled.div`
    width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const ModalPostImg = styled.img`
  width: 100%;
  height: 90%;
  position: absolute;
  bottom: 0;
  &:hover {
    transform: scale(1.05, 1.05); /* 가로2배 새로 1.5배 로 커짐 */
    transition: transform 0.5s; /* 커지는 시간 */
  }

`

const ModalPostImgBox = styled.input`
  display: none;
`

const ModalPostBoxTwoLabel = styled.div`
    margin-top: 180px;
  margin-bottom: 20px;
`
const SelectImgButton = styled.button`
    background: #0095f6;
  border: none;
  color: white;
  font-size: 13px;
  width: 120px;
  height: 30px;
  border-radius: 5px;
  cursor: pointer;
`

const ModalPostBoxTwo = styled.div`
  width: 400px;
  height: 1000px;
  border: 1px solid #bababa;
  background-color: #ffffff;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const PostUpload = styled.div`
  width: 80%;
  margin-top: 10px;
  height: 30px;
  display: flex;
  
  justify-content: right;
  border-bottom: 1px solid #bababa;
`

const PostButton = styled.button`
  width: 50%;
  height: 30px;
  border: none;
  font-weight: 600;
  font-size: 18px;
  background: white;
  border: none;
  color: #0095f6;
  cursor: pointer;
`

const PostTextArea = styled.textarea`
  width: 90%;
  border: none;
  height: 400px;
  margin-top: 10px;
  font-size: 15px;
  padding: 10px;
  &:focus {
    outline: none;
  }
  resize: none;
  font-weight: 600;
`