import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components'
import '../App.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Header = ({ setOpenImg, dropmenu, setDropmenu }) => {
  const navigate = useNavigate();
  const openAddImage = () => {
    setOpenImg((prev) => (!prev))
  }
  const dropToggle = () => {
    return setDropmenu(!dropmenu);
  };


  return (
    <>
      <GlobalStyle />
      <HeaderContainer>
        <HeaderInner>
          <HeaderContentSize style={{ cursor: 'pointer' }} onClick={() => { navigate('/') }}>
            Instargram
          </HeaderContentSize>
          <div>
            <img style={{ width: '30px', height: '30px', marginTop: '5px', marginRight: '20px', cursor: 'pointer' }} alt="heart" src='images/home.png'></img>
            <img style={{ width: '30px', height: '30px', marginTop: '5px', marginRight: '15px', cursor: 'pointer' }} alt="heart" src='images/send.png'></img>
            <img style={{ width: '35px', height: '35px', marginTop: '5px', marginRight: '10px', cursor: 'pointer' }} onClick={openAddImage} alt="heart" src='images/add.png'></img>
            <img style={{ width: '50px', height: '50px', marginTop: '5px', marginRight: '10px', cursor: 'pointer' }} alt="heart" src='images/heart.png'></img>
            <img style={{ width: '40px', height: '40px', marginTop: '5px', cursor: 'pointer' }} onClick={dropToggle} alt="heart" src='images/who.png' ></img>
            {dropmenu ? (
              <DropContent>
                <p style={{ cursor: "pointer", marginTop: '13px', marginLeft: '15px' }}                  // onClick={() => {
                //   goMypage(user.user?.userId);
                // }}
                >
                  <AccountCircleIcon sx={{ mr: 1 }}></AccountCircleIcon>프로필
                </p>
                <hr />
                <p
                  style={{ cursor: "pointer", marginLeft: '15px' }}
                >
                  로그아웃
                </p>
              </DropContent>
            ) : (
              ""
            )}
          </div>
        </HeaderInner>
      </HeaderContainer>
    </>
  )
}

const GlobalStyle = createGlobalStyle`
	body {
		padding: 0;
		margin: 0;
	}`;

const HeaderContainer = styled.div`
  padding: 1rem;
  width: 100%;
  height: 60px; 
  position: fixed;
  z-index: 1;
  display: flex;
  justify-content: center;
 
`
const HeaderInner = styled.div`
  min-width: 700px;
  height: 100%;
  display: flex;
  justify-content: space-between;
`

const HeaderContentSize = styled.div`
  font-family: 'Lobster';
  font-size: 30px;
  justify-content:space-between ;
`
const DropContent = styled.div`
  position: absolute;
  top: 80px;
  margin-left:10%;
  background-color: white;
  min-width: 160px;
  z-index: 1;
  /* text-align: center; */
  border-radius: 0px 0px 5px 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

`;

export default Header