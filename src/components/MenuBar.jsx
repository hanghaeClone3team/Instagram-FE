import React, { useRef, useState } from 'react'
import styled from 'styled-components';

const Menubar = () => {
  const [isOpen2, setIsOpen2] = useState(false);

    const openModalHandler2 = () => {
      setIsOpen2(!isOpen2);
    };

    const outSection = useRef();

  return (
    <ModalContainer>
            <ModalBtn2 onClick={openModalHandler2}>
                {isOpen2 ? "" : "더보기"}
            </ModalBtn2>
            {
              isOpen2 === true
              ? (<ModalBackGround2 ref={outSection} onClick={(e)=>{
                if(outSection.current === e.target) {
                  setIsOpen2(false)
                }
              }}>
                <ModalOverlay2 onClick={!openModalHandler2}>
                  <ModalCon2 onClick={!openModalHandler2}>
                     <ModalDiv>닫기 버튼 1개가 있고, <br /> 외부 영역을 누르면 모달이 닫혀요.</ModalDiv>
                     <ModalOverlayCloseBtn2 onClick={openModalHandler2}></ModalOverlayCloseBtn2>
                  </ModalCon2>
                  </ModalOverlay2>
                </ModalBackGround2>) : null
            }      
          </ModalContainer>
  )
}

export default Menubar

const ModalContainer = styled.div`

`

const ModalBtn2 = styled.button`

`

const ModalBackGround2 = styled.div`

`

const ModalOverlay2 = styled.div`

`

const ModalCon2 = styled.div`

`

const ModalDiv = styled.div`
  width:200px;
  background:black;

`

const ModalOverlayCloseBtn2 = styled.button`

`