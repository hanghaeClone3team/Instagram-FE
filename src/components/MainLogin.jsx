import React from 'react';
import { useCookies, Cookies } from 'react-cookie';
import { login } from '../api/auth';
import { Link, useNavigate } from 'react-router-dom';
import {useEffect} from 'react';
import styled from 'styled-components';
import useInput from '../hooks/useInput';
import KakaoLogin from './KakaoLogin';


const MainLogin = () => {
    const [emailValue , emailValueHandler] = useInput();
    const [pwValue, pwValueHandler] = useInput();
    const [cookies, setCookie] = useCookies(['authorization']);
    const myCookie = new Cookies();
    const isLogin = !!myCookie.get('authorization');

    const navigate = useNavigate();

    useEffect(()=>{
        if(isLogin) navigate('/board');
    },[])

    const wrongNotify = () => {
        
    }

    

    const onClickLoginButton = () => {
        if(!emailValue || !pwValue) return;
        login({ email:emailValue, password:pwValue }).then((res)=>{
            const authId = res.headers.authorization

            setCookie("authorization", 'Bearer ' + authId);

            navigate('/board');
        }).catch((error)=>{
            wrongNotify();
        })
    }

  return (
    <Wrap>
      <Left>
        <Phone>이미지</Phone>
      </Left>

      <Right>
        <LoginBox>
            <H1></H1>
            <IdInput type="text" value={emailValue || ""} onChange={(e)=>{emailValueHandler(e)}} placeholder='사용자 이름 또는 이메일' /> <br />
            <PwInput type="password" value={pwValue || ""} onChange={(e)=>{pwValueHandler(e)}} placeholder='비밀번호'/> <br />
            <LoginBtn onClick={()=>{onClickLoginButton()}}>로그인</LoginBtn>
git 
            <Or>
              <hr style={{ width:"100px", background:"gray",height:"1px",  border:"0" }}/>
              또는
              <hr style={{ width:"100px", background:"gray",height:"1px",  border:"0" }}/>
            </Or>

            <KakaoLogin />
            <P1>비밀번호를 잊으셨나요?</P1>
        </LoginBox>
        
        <RegisterBox>
            계정이 없으신가요?
            <Link to="/register" style={{ textDecoration: "none" }}>
                <RegisterBtn>가입하기</RegisterBtn>
            </Link> 
        </RegisterBox>
        
        <P2>앱을 다운로드하세요.</P2>
        <Bottom>  
            <AppBtn>App Store에서 <br />다운로드 하기</AppBtn>
            <GoogleBtn>다운로드하기 <br />Google Play</GoogleBtn>
        </Bottom>
      </Right>
    </Wrap>
  )
}

export default MainLogin

const Wrap = styled.div `
    width:80% ;
    height:1080px;
    display: flex;
    align-items: center;
    justify-content:space-between;
    box-sizing: border-box;
`

const Left = styled.div `
    width:50%; height:800px;
    display:flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    padding-left:33%;
    margin-top:180px;
`

const Phone = styled.div `
    width:300px; height:450px;
    background:gray;
`


const Right = styled.div `
    display:flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width:50%; height:800px;
    box-sizing: border-box;
    padding-right:33%;
    margin-top:180px;
`

const LoginBox = styled.div `
    display:flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width:360px; height:440px;
    border:1px solid gray;
    background:white;
`

const H1 = styled.h1 `
    margin-bottom:60px;
`

const IdInput = styled.input `
    width:260px; height:40px;
    padding-left:1rem;
    border-radius:5px;
    border:1px solid gray;
    background:#fafafa;
    margin-bottom:-10px;
`

const PwInput = styled.input `
    width:260px; height:40px;
    padding-left:1rem;
    border-radius:5px;
    border:1px solid gray;
    background:#fafafa;
`

const LoginBtn = styled.button `
    width:280px; height:35px;
    background:#67b6fa;
    border:none;
    border-radius:10px;
    color:white;
    font-weight:bold;
    font-size:0.9rem;
    line-height:35px;
    margin-bottom:20px;
    cursor:pointer;
`

const Or = styled.div `
    display:flex;
    width:280px;
`

const KakaoBtn = styled.button `
    margin-top:30px;
    cursor:pointer;
`

const P1 = styled.p `
    margin-top:20px;
    font-size:0.8rem;
    color:#385085;
`

const RegisterBox = styled.div `
    display:flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width:360px; height:70px;
    border:1px solid gray;
    margin-top:10px;
    font-size:0.9rem;
    background:white;
`

const P2 = styled.p `
    font-size:0.9rem;
`
const RegisterBtn = styled.button `
    cursor:pointer;
`

const Bottom = styled.div `

`

const AppBtn = styled.button `
    cursor:pointer;

`


const GoogleBtn = styled.button `
    cursor:pointer;
`

