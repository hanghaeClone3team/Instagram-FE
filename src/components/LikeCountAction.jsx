import React, { useState } from 'react'
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import styled from 'styled-components';

const LikeCount = () => {
    let [like, setLike] = useState(0);

  return (
    <Wrap>
      <span onClick={() => { setLike(like +1); }} > <AiFillHeart size="28" color="red"/> </span>
      <P>좋아요 &nbsp;<P2>{like}</P2></P>
    </Wrap>
  )
}

export default LikeCount

const Wrap = styled.div `
  position:relative;
  top:28px; left:20px;
  cursor:pointer;
`


const P = styled.p `
  width:80px;
  display:flex;
  margin-top:10px;
  margin-bottom:20px;
  font-weight:500;
  font-size:1rem;
`
const P2 = styled.p `
  display:flex;
`