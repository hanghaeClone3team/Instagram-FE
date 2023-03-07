import React from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'



// 게시글 상세 페이지 모달로 띄우기
function PostModal(props) {
    const postModal = props.post
    console.log(postModal)

    const location = useLocation();
    console.log(location)
    const closePostModal = () => {
        props.setPostModal(false)
    }
    return (
        <PostModalBackground onClick={closePostModal}>
            <PostModalPadding>
                <PostModalContainer>
                   
                </PostModalContainer>
            </PostModalPadding>
        </PostModalBackground>
    )
}

export default PostModal

const PostModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.185);
    z-index: 1;
`


const PostModalPadding = styled.div`
    position: absolute;
    left: 1000px;
    top: 60px;
    background-color: transparent;
    color: white;
    font-size: 50px;
    border: transparent;
`
const PostModalContainer = styled.div`
    width: 1200px;
    height: 1000px;
    background-color: black;
    // 모달창 최상단 위치 지정
    z-index: 9999;
    position: absolute;
    top: 10%;
    left: 30%;
    
    
    border: 0 solid transparent;
    border-radius: 15%;
`