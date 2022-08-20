import React from 'react'
import styled from 'styled-components'
import Main from './Main'

const Home = () => {
  return (
    <div>
          <HomeContainer>
              <HomeInner>
                  <Main />
              </HomeInner>
          </HomeContainer>
          
    </div>
  )
}

const HomeContainer = styled.div `
    position: absolute;
    top:60px; 
    left: 50%;
    transform: translateX(-50%);
    min-width: 700px;
    height: 100%;
    display: flex;
    justify-content: center;
`

const HomeInner = styled.div`
    
`
export default Home