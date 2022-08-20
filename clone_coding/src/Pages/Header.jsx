import React from 'react'
import styled,{ createGlobalStyle } from 'styled-components'
import '../App.css';

const Header = () => {
  return (
    <>
      <GlobalStyle/>
      <HeaderContainer>
        <HeaderInner>
          <HeaderContentSize>
            Instargram
          </HeaderContentSize>
          <div>
            <img  style={{width: '30px', height: '30px', marginTop:'5px', marginRight:'20px'}} alt="heart"  src='images/home.png'></img>
            <img  style={{width: '30px', height: '30px', marginTop:'5px', marginRight:'15px'}} alt="heart"  src='images/send.png'></img>
            <img  style={{width: '50px', height: '50px', marginTop:'5px', marginRight:'15px'}} alt="heart"  src='images/heart.png'></img>
            <img  style={{width: '40px', height: '40px', marginTop:'5px'}} alt="heart"  src='images/who.png'></img>
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
  height: 80px; 
  background-color: white;
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

export default Header