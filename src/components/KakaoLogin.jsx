import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const  KakaoLogin = () => {
    const REST_API_KEY = "ddc603749d78abff3f309e771a37719f";
    const REDIRECT_URI = "http://3.34.133.26:8080";
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    const KakaoLoginHandler = () => {
        window.location.href = KAKAO_AUTH_URL;
    }
    const location = useLocation();
    const KAKAO_CODE= location.search.split('=')[1];
    const navigate = useNavigate();

    const getKakaoToken = () => {
      fetch(`https://kauth.kakao.com/oauth/token`,{
        method: 'POST',
        headers: { 'Content-type' : 'application/x-www-form-urlencoded;charset=utf-8'},
        body : `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_url=${REDIRECT_URI}&code=${KAKAO_CODE}`,
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.access_token){
          localStorage.setItem('token', data.access_token);
        } else{
            navigate('/');
          }
      });
    }

    useEffect(()=>{
      if(!location.search) return;
      getKakaoToken();
    },[]);

  return (
    <>
      <button onClick={KakaoLoginHandler}>카카오톡으로 로그인</button>
    </>
  )
}



export default KakaoLogin
