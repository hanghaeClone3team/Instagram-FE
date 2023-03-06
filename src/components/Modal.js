import React, { useState, useRef } from 'react'
import instafile from '../img/insta_file.PNG'
import styled from 'styled-components'

function Modal(props) {
    console.log(props)
    const closeModal = () => {
        props.setModal(false)
    }
    return (
        <ModalBackground onClick={closeModal}>
            <ModalPostOut onClick={closeModal}>X</ModalPostOut>
            <ModalPostMake onClick={(e) => e.stopPropagation()}>
                <ModalPostBoxContainer>
                    <ModalPostBoxOne>
                        <ModalPostBoxOneLabel>
                            <span>새 게시물 만들기</span>
                        </ModalPostBoxOneLabel>
                    </ModalPostBoxOne>
                </ModalPostBoxContainer>
            </ModalPostMake>
        </ModalBackground>
  )
}

export default Modal

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
    
    background-color: black;
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
  background-image: url(${instafile});
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