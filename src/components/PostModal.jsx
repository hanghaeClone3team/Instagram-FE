import React, { useState } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { addComment, getSinglePost } from '../api/crud'
import '../css/postmodal.css'
import profile from '../img/profile.png'
import dot from '../img/dots.png'
import Comment from './Comment'
import LikeCountAcction from '../components/LikeCountAction';
import cmt from '../img/comment.png'
import post from '../img/post.png'
import save from '../img/save.png'
import like from '../img/like.png'

// 게시글 상세 페이지 모달로 띄우기
function PostModal(props) {
    
    console.log(props)
    
    const closePostModal = () => {
        props.setPostModal(false)
    }
    const [newComment, setNewComment] = useState("");
    
    const onCommentHandler = (e) => {
        setNewComment(e.target.value)
    }
    const queryClient = useQueryClient()

    

    const addCommentMutation = useMutation(addComment, {
        onSuccess : () => {
            queryClient.invalidateQueries('post')
        }
    })
    const onAddCommentHandler = (e) => {
        e.preventDefault();
        addCommentMutation.mutate({
            postId:props.id,
            newComment:newComment
        })
    }

  //   if (isLoading) {
  //     return <h1>로딩중...</h1>
  // }
  // if (isError) {
  //     return <h1>Error...</h1>
  // }


    return (
    //     <ModalBackground onClick={closePostModal}>
    //   <ModalPostOut onClick={closePostModal}>X</ModalPostOut>
    //   <ModalPostMake onClick={(e) => e.stopPropagation()}>
    //     <ModalPostBoxContainer>
    //       <ModalPostBoxOne>
    //         <ModalPostBoxOneLabel>
    //           <ModalPostBoxOneLabelName>
    //             {/* 게시물  */}
    //           </ModalPostBoxOneLabelName>
    //         </ModalPostBoxOneLabel>

    //         {/* 이미지 집어넣기 영역 */}
    //          <ModalPostImg src={props.imgUrl}></ModalPostImg> 
            

            
              


              

             

    //       </ModalPostBoxOne>
        
    //     <ModalPostBoxTwo>
          
    //       <PostUpload>

    //         <PostButton onClick={closePostModal}>닫기</PostButton>

    //       </PostUpload>

         
          
    //       {/* 댓글 영역 */}
    //       <PostTextArea>
    //       <PostContentArea>
    //       {props.contents}
    //       </PostContentArea>
    //       {
    //             props.comment.map((item) =>(
    //                 <p key={item.comment_id}>
    //                     {item.comments}
    //                 </p>
    //             ))
    //         }
    //       </PostTextArea>
            
    //         {/* 댓글 달기 영역 */}
    //         <AddpostTextArea>
    //             <AddInputContainer>
    //               <AddInput placeholder = "댓글" value={newComment} onChange={onCommentHandler}/>
    //               <AddButton onClick={onAddCommentHandler}>게시</AddButton>
    //             </AddInputContainer>
    //         </AddpostTextArea>
    //     </ModalPostBoxTwo>
    //   </ModalPostBoxContainer>
    // </ModalPostMake>
    // </ModalBackground >
      <div className='modal-container' >
        <div className='close-modal' onClick={closePostModal}>X</div>
        <div className='modal'>
          <img className='modal-image' src ={props.imgUrl}  alt='이미지'/>
          <div className='modal-content-section' >
            <div className='modal-top-section modal-section'>
              <img  className='profile-image' src={profile} alt='이미지'/>
              <div className='username'>{props.useName}</div>
              <div className='spacer'></div>
              <div className='dot'><img className='dot-image' src={dot} alt="dot"/></div>
            </div>
            <div className='modal-comment-section modal-section'>
              <div className='comment-container'>
                <img className='profile-image' src={profile} alt="프로필" />
                <div>
                  <div>
                    <span className='username'>{props.useName}</span>
                    <span>{props.contents}</span>
                  </div>
                </div>
               </div>
              {
                props.comment.map((item) => (
                 <Comment key={item.comment_id} comment={item}/>
                ))
              }
            </div>
            <div className='modal-detail-section modal-section'>
              <div className='detail-actions'>
                <LikeCountAcction/>
                <img src={cmt} alt="댓글 보기"  />
                <img src={post} alt="공유" />           
                <div className='spacer'></div>
                <img src={save} alt="저장" />
              </div>
            </div>
            <div className='write-section modal-section'>
             <textarea type="text" placeholder='댓글을 입력하세요' value={newComment} onChange={onCommentHandler}></textarea>
             <button onClick={onAddCommentHandler}>댓글 달기</button>
            </div>
          </div>
        </div>
      </div>
      
    )
}

export default PostModal

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
  width: 1000px;
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
  
`

const PostUpload = styled.div`
  width: 100%;
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

const PostTextArea = styled.div`
  width: 90%;
  border: none;
  height: 80%;
  margin-top: 10px;
  font-size: 15px;
  padding: 10px;
  margin-left: 20px;
  border-bottom: solid 1px #bababa;
  &:focus {
    outline: none;
  }
  
  font-weight: 600;
`
const PostContentArea = styled.div`
    width: 200px;
    height: 200px;
    border: 1px solid black;

`
const AddpostTextArea = styled.div`
    border-top: 1px solid rgb(var(--post-separator));
    color: rgb(var(--ig-secondary-text));
    flex-shrink: 0;
    font-size: var(--system-14-font-size);
    justify-content: center;
    line-height: var(--system-14-line-height);
    position: relative;
  
`

const AddInputContainer = styled.div`
  display: block;

`
const AddInput =  styled.input`

    border: 1px solid black;

`

const AddButton = styled.button`
  font-weight: 600;
  font-size: 18px;
  color: #0095f6;
  margin-left: 20%;

`
// const PostModalBackground = styled.div`
//     position: fixed;
//     top: 0;
//     left: 0;
//     bottom: 0;
//     right: 0;
    
//     z-index: 1;
// `


// const PostModalPadding = styled.div`
//     position: absolute;
//     left: 1000px;
//     top: 60px;
//     background-color: lightgray;
//     color: white;
//     font-size: 50px;
//     border: transparent;
// `
// const PostModalContainer = styled.div`
//     width: 1200px;
//     height: 1000px;
    
//     // 모달창 최상단 위치 지정
//     z-index: 9999;
//     position: absolute;
//     top: 10%;
//     left: 30%;
//     display: flex;
//     flex-direction: row;
    
    
//     border: 1 solid black;
//     border-radius: 15%;
// `

// const PostModalImage = styled.div`
//     width: 600px;
//     height: 500px;
//     position: absolute;
// `
// const PostModalMain = styled.div`
//     width: 600px;
//     height: 600px;
//     background-color: blue;
// `