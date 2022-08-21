import React from 'react'
import styled from 'styled-components'
import Main from './Main'
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
          <HomeContainer>
              <HomeInner>
          <Main />
          <Outlet></Outlet>
              </HomeInner>
          </HomeContainer>
          
    </div>
  )
}

const HomeContainer = styled.div `
    position: relative;
    top:80px; 
    left: 50%;
    transform: translateX(-50%);

    width: 100%;
    height: 100%;
     background-color: #f1f1f1;
  `

const HomeInner = styled.div`

    min-width: 700px;
    height: 100%;
    display: flex;
    justify-content: center;
   
`
export default Home