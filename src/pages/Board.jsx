import React from 'react'


import Post from '../components/Post'
import Sidebar from '../components/Sidebar'
import styled from 'styled-components'
import { useState } from 'react'
import Modal from '../components/Modal'
import PostModal from '../components/PostModal'
import EditPostModal from '../components/EditPostModal'






// 전체 게시글 페이지
function Board() {
  const [modal, setModal] = useState(false)
  const [postModal, setPostModal] = useState(false);
  const [editPostModal, setEditPostModal] = useState(false)
  return (
    <>

      <Sidebar setModal={setModal} />
      


      {/* 중앙 post 영역 */}
      <InnerContainer>
        <InnerMainContainer>
          <PostContainer>
            <Post setPostModal={setPostModal} setEditPostModal={setEditPostModal}/>
            
          </PostContainer>
        </InnerMainContainer>
      </InnerContainer>


    <div>
      {
        modal && <Modal setModal={setModal}/>
        
      }
      {
        postModal && <PostModal setPostModal={setPostModal}/>
      }
      {
        editPostModal && <EditPostModal setEditPostModal={setEditPostModal}/>
      }
      </div>



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
