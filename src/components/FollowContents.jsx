import React from 'react'
import styled from 'styled-components'

const FollowContents = () => {
  return (
    <>
    <FollowBtn>팔로우</FollowBtn>
    </>
  )
}

export default FollowContents


const FollowBtn = styled.button`
    font-size: 14px;
    line-height: 18px;
    font-weight: 600;
    margin-left: 30px;
    cursor: pointer;
    color: #18a4f8;
`