import React from 'react'
import Post from '../components/Post'
import Sidebar from '../components/Sidebar'
import styled from 'styled-components'
import { useState } from 'react'
import Modal from '../components/Modal'



// 전체 게시글 페이지
function Board() {
  const [modal, setModal] = useState(false)
  return (
    <>
      <Sidebar setModal={setModal} />




      {/* 중앙 post 영역 */}
      <InnerContainer>
        <InnerMainContainer>
          <PostContainer>
            <Post />
            <Post />
            <Post />
          </PostContainer>
        </InnerMainContainer>
      </InnerContainer>


    <div>
      {
        modal && <Modal setModal={setModal}/>
      }</div>

    </>
  )
}

export default Board

const InnerContainer = styled.div`
  width: 100%;
  margin-top: 60px;
`
const InnerMainContainer = styled.div`
  max-width: 935px;
  margin: 20px auto;
  height: 680px;
  display: flex;
  justify-content: space-evenly;
`
const PostContainer = styled.div`
  max-width: 620px;
  width: 100%;
`