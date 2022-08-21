import React, { useState } from 'react'
import styled from 'styled-components'
import './detail.css';


const DetailPage = ({modal, setModal}) => {



  return (
    <div className='detailModal'>

        

        <Container>
            <Flex1></Flex1>

            <Flex2><button onClick={()=>{setModal(!modal)}}>닫기</button></Flex2>
        </Container>
    </div>
  )
}

const Container = styled.div`
    background-color: #61dafb;
    position: relative;
    width: 1000px;
    height: 400px;
    margin: 0 0 0 0;
    display: flex;
    flex-direction: row;
`

const Flex1 = styled.div`
    width: 550px;
    height: 400px;
    background-color: yellow;
`
const Flex2 = styled.div`
    width: 450px;
    height: 400px;
    background-color: orange;
`

export default DetailPage
