import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import logo from '../img/logo.svg'
import home from '../img/home.png'
import '../css/style.css'





function Sidebar(props) {
  console.log(props)
  useEffect(() => {
    const css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = "https://unicons.iconscout.com/release/v4.0.0/css/line.css";

    document.head.appendChild(css)

    return () => {
      document.head.removeChild(css);
    }
  })

  const showModal = () => {
    props.setModal(true)
  }
  return (
    <>
      <aside className="sidebar">
        <header className="sidebar-header">
          <img className="logo-img" src={logo} alt="instagram"/>
          <i className="logo-icon uil uil-instagram"></i>
        </header>
        <nav>

          <button>
            <span>
              <i className="uil uil-estate"></i>
              <span>홈</span>
            </span>
          </button>

          <button>
            <span>
              <i className="uil uil-search"></i>
              <span>검색</span>
            </span>
          </button>

          <button>
            <span>
              <i className="uil uil-compass"></i>
              <span>탐색 탭</span>
            </span>
          </button>
          <button>
            <span>
              <i className="uil uil-plus-circle"> </i>
              <span>릴스</span>
            </span>
          </button>
          <button>
            <span>
              <i className="uil uil-location-arrow"></i>
              <span>메시지</span>
            </span>
          </button>

          <button>
            <span>
              <i className="uil uil-heart"></i>
              <span>알림</span>
            </span>
          </button>

          <button>
            <span onClick={showModal}>
              <i className="uil uil-plus-circle"> </i>
              <span>만들기</span>
            </span>
          </button>

          <button>
            <span>

              <span>프로필</span>
            </span>
          </button>

          <button>
            <span>
              <i className="uil uil-bars"> </i>
              <span>더보기</span>
            </span>
          </button>
        </nav>
      </aside>
      
    </>
  )
}

export default Sidebar

