import React from 'react'
import styled from 'styled-components'

const DetailPageComment = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '15px', marginTop: '5px' }}>
            <IdPersonImg src='images/noImg.jpg' ></IdPersonImg>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex' }}>
                    <span style={{ marginLeft: '5px', fontWeight: '700' }}>댓글id</span>
                    <span style={{ marginLeft: '5px' }}>오오</span>
                    <img src='images/heart.png' style={{ width: '30px', height: '30px' }}></img>
                </div>
                <div >
                    <span style={{ marginLeft: '5px', marginTop: '-2px', marginRight: '10px' }}> 25분</span>
                    <span>답글달기</span>
                </div>
            </div>
            
        </div>
    )
}

const IdPersonImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50px;
`
export default DetailPageComment