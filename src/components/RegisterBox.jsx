import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom';
import useInput from '../hooks/useInput';
import { register } from '../api/auth';

const RegisterBox = () => {
    const [emailValue, emailValueHandler] = useInput();
    const [nameValue, NameValueHandler] = useInput();
    const [nicknameValue, nicknameValueHandler] = useInput();
    const [pwValue, pwValueHandler] = useInput();
    const [pwconfirmValue, pwconfirmValueHandler] = useInput();

    const navigate = useNavigate();

    //email 형식
    const checkEmail = (e) => {
        var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
        // 형식에 맞는 경우 true 리턴
        console.log('이메일 유효성 검사 :: ', regExp.test(e.target.value))
    }

    // username : 소문자, 숫자, ._만 입력 가능, 4~15 글자
    const checkUsername = (e) => {
        var regExp = /^[a-z0-9_.]{4,15}$/
        console.log('사용자 이름 유효성 검사 ::', regExp.test(e.target.value))
    }

    // pw : 대소문자, 특수문자, 숫자만 입력 가능, 8~15 글자
    const checkPw = (e) => {
        var regExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
        console.log('비밀번호 유효성 검사 ::', regExp.test(e.target.value))
    } 


    const onClickRegisterButton = () => {
        if(!emailValue || !nameValue || !nicknameValue || !pwValue || !pwconfirmValue) return 

        if(pwValue === pwconfirmValue){
            register({email:emailValue ,
                      username:nameValue,
                      nickname:nicknameValue,
                      password:pwValue,
                      password2:pwconfirmValue
                    }).then((res) => {
                    navigate("/");
                    return res;
                }).catch((error) => {
                    return error;
                })
            }else{
                console.log('비밀번호가 동일하지 않습니다.')
            }
    }
   
  return (
    <Wrap>
        <RegiBox>
            <H1>Instagram</H1>
            <P1>친구들의 사진과 동영상을 보려면 가입하세요.</P1>
            <KakaoBtn>카카오톡으로 로그인</KakaoBtn>
            <Or>
                <hr style={{ width:"100px", background:"gray",height:"1px",  border:"0" }}/>
                또는
                <hr style={{ width:"100px", background:"gray",height:"1px",  border:"0" }}/>
            </Or>
            <IdInput type="text" onBlur={checkEmail} value={emailValue || ""} onChange={(e)=>{emailValueHandler(e)}} placeholder='이메일 주소' /> <br />
            <NickNameInput type="text" value={nameValue || ""} onChange={(e)=>{NameValueHandler(e)}} placeholder='성명' /> <br />
            <UsernameInput type="text" onBlur={checkUsername} value={nicknameValue || ""} onChange={(e)=>{nicknameValueHandler(e)}} placeholder='사용자 이름'/> <br />
            <CheckBtn>중복 확인</CheckBtn>
            <PwInput type="password" onBlur={checkPw} value={pwValue || ""} onChange={(e)=>{pwValueHandler(e)}} placeholder='비밀번호'/> <br />
            <PwConfirmInput type="password" value={pwconfirmValue || ""} onChange={(e)=>{pwconfirmValueHandler(e)}} placeholder='비밀번호 확인'/> <br />
            <P2>저희 서비스를 이용하는 사람이 회원님의 연락처 정보를 <br />instagram에 업로드했을 수도 있습니다.</P2>
            <P3>더 알아보기</P3>
            <RegisterBtn onClick={()=>{onClickRegisterButton()}}>가입</RegisterBtn>
        </RegiBox>
        
        <LoginBox>
            계정이 없으신가요?
            <Link to="/" style={{ textDecoration: "none" }}>
                <LoginBtn>로그인</LoginBtn>
            </Link> 
        </LoginBox>
        
        <P2>앱을 다운로드하세요.</P2>
        <Bottom>  
            <AppBtn>App Store에서 <br />다운로드 하기</AppBtn>
            <GoogleBtn>다운로드하기 <br />Google Play</GoogleBtn>
        </Bottom>
    </Wrap>
  )
}

export default RegisterBox;



const Wrap = styled.div `
    width:100%; 
    height:1080px;
    display:flex;
    align-items: center;
    flex-direction: column;
`

const RegiBox = styled.div `
    display:flex;
    align-items: center;
    flex-direction: column;
    width:380px; height:100%;
    border:1px solid gray;
    margin-top:160px;
    font-size:0.9rem;
    background:white;
`

const H1 = styled.h1 `
    margin-top:50px;
`

const P1 = styled.p `
    margin-bottom:30px;
`

const KakaoBtn = styled.button `
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
    margin-bottom:20px;
`


const IdInput = styled.input `
    width:260px; height:35px;
    padding-left:1rem;
    border-radius:5px;
    border:1px solid gray;
    background:#fafafa;
`


const NickNameInput = styled.input `
    width:260px; height:35px;
    padding-left:1rem;
    border-radius:5px;
    border:1px solid gray;
    background:#fafafa;
`

const UsernameInput = styled.input `
    width:260px; height:35px;
    padding-left:1rem;
    border-radius:5px;
    border:1px solid gray;
    background:#fafafa;
`

const CheckBtn = styled.button `
    position:relative;
    top:-50px; left:95px;
    width:65px; height:25px;
    background:#67b6fa;
    border:none;
    border-radius:5px;
    color:white;
    font-size:0.8rem;
    line-height:25px;
    cursor:pointer;
`

const PwInput = styled.input `
    width:260px; height:35px;
    padding-left:1rem;
    border-radius:5px;
    border:1px solid gray;
    background:#fafafa;
`

const PwConfirmInput = styled.input `
    width:260px; height:35px;
    padding-left:1rem;
    border-radius:5px;
    border:1px solid gray;
    background:#fafafa;
`


const P2 = styled.p `
    
`


const RegisterBtn = styled.button `
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


const P3 = styled.p `
    
`




const LoginBox = styled.div `
    display:flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width:380px; height:70px;
    border:1px solid gray;
    margin-top:10px;
    font-size:0.9rem;
    background:white;
`

const LoginBtn = styled.button `
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


