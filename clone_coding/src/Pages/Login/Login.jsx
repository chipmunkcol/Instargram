import { useEffect, useState } from 'react';
import styled from 'styled-components';
import './style.css';

function Login() {

const [end, setEnd] = useState('')

useEffect(()=>{
    setTimeout(() => {
        setEnd('end')
    }, 100);
},[])

//setIntervel 써서 몇초마다 다른이미지 넣게 -> styled 컴포넌트에 props로 다른이미지 넣기
// 위에보다는 ->> css keyframe 사용 https://webclub.tistory.com/621


    return(
        <div>
            <h1 >Login 페이지입니다.</h1>

        <Container>
            <Flex1>
                <FlexSlider className={'start '+end}></FlexSlider>
            </Flex1>
            <Flex2>
                <LoginBox>
                    <div style={{fontSize:'42px', margin:'22px 0 0 0'}}>Instagram</div>
                    <InputId type='text' placeholder='아이디'/>
                    <InputId placeholder='비밀번호'/>
                </LoginBox>
                <RegisterBox></RegisterBox>
            </Flex2>
        </Container>


        </div>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const Flex1 = styled.div`
    width: 460px;
    height: 630px;
    margin: 0px 40px 0 0;

    background-image: url('https://www.instagram.com/static/images/homepage/phones/home-phones.png/1dc085cdb87d.png');
    background-position: center;
    background-size: cover;
`

    const FlexSlider = styled.div`
        width: 250px;
        height: 542px;
        background-image: url('https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png');
        margin: 23px 0 0 153px;
        
    `

const Flex2 = styled.div`
    width: 350px;
    height: 550px;

    border: 1px solid gray;
`

    const LoginBox = styled.div`
        margin: 20px auto 0 auto;
        border: 1px solid gray;
        width: 87%;
        height: 60%;
    `

    const InputId = styled.input`
        border: 0.5px solid gray;
        border-radius: 3px;
        background-color: snow;
        width: 234px;
        height: 35px;
        margin: 25px 0 0 0;
        padding: 12px;
    `;

    const RegisterBox = styled.div`
        margin: 15px auto 0 auto;
        border: 1px solid gray;
        width: 87%;
        height: 10%;
    `


export default Login;