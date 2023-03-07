import React from 'react';
import styled from 'styled-components';
import profile from '../img/profile.jpeg';
import { IoMdSettings } from "react-icons/io";

const MyPageContents = () => {
  return (
     <Wrap>
        <Top>
            <ProfileImg src={profile}></ProfileImg>
            <My1>
                <ID>id</ID>
                <EditBtn>프로필 편집</EditBtn>
                <IoMdSettings size="30"/>
            </My1>

            <My2>
                <p style={{ marginRight:"30px" }}>게시물 &nbsp; 0</p>
                <p style={{ marginRight:"30px" }}>팔로워 &nbsp; 10</p>
                <p>게시물 &nbsp; 20</p>
            </My2>
            <hr style={{ width:"80%", background:"#c7c7c7",height:"1px",  border:"0" }}/>
        </Top>
        <Contents>
            <Btn1>게시물</Btn1>
            <Btn2>저장됨</Btn2>
            <Btn3>태그됨</Btn3>
        </Contents>
     </Wrap>
  )
}

export default MyPageContents


const Wrap = styled.div`
    width:100%;
`


const Top = styled.div`
    width:100%;
    position:relative;
    top:70px;
    display:flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`

const My1 = styled.div`
    width:300px;
    display:flex;
    position:absolue;
    top:0;
`

const ID = styled.p`
    font-size:1.6rem;
    margin-right:30px;
`

const EditBtn = styled.button`
    width:100px; height:40px;
    background:#ededed;
    border-radius:10px;
    font-weight:bold;
    margin-right:30px;
`

const My2 = styled.div`
    display:flex;
    position:absolue;
    top:100px;
`
const Contents = styled.div`
    position:relative;
    width:80%;
`

const ProfileImg = styled.img`
    position:absolute;
    left:400px;
    width:150px;
`

const Btn1 = styled.button`
    position:absolute;
    top:300px;
`

const Btn2 = styled.button`
    position:absolute;
    top:300px;  
`

const Btn3 = styled.button`
    position:absolute;
    top:300px;
`