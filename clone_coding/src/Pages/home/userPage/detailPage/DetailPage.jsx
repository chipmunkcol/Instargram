import React from 'react'
import styled from 'styled-components'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DetailPageComment from './DetailPageComment';

const DetailPage = () => {
  return (
    <DetailContainer>
      <DetailInner>
        <DetailImage>사진</DetailImage>
        <DetailContent>
          <ContentTitle>

            <div style={{ display: 'flex' }}>
              <IdPersonImg src='images/noImg.jpg' ></IdPersonImg>
              <h4 style={{ marginLeft: '5px', marginTop: '5px' }}>id</h4>
            </div>
            <MoreHorizIcon sx={{ m: 1, cursor: 'pointer' }} />
          </ContentTitle>
          <ContentBody>
            <IdPersonImg src='images/noImg.jpg' ></IdPersonImg>
            <h4 style={{ marginLeft: '5px', marginTop: '5px' }}>id</h4>

            <ContentText style={{ marginTop: '8px' }}>
              <span style={{ padding: '1.2rem' }}>내용</span>
            </ContentText>
          </ContentBody>
          <ContentComments>
            <DetailPageComment />

          </ContentComments>
          <InputComment>댓글달기</InputComment>
        </DetailContent>
      </DetailInner>
    </DetailContainer>
  )
}
const DetailContainer = styled.div`
    position: absolute;
    top: 100px;
    left: 50%;
    transform: translateX(-40%);
    min-width: 80%;
`
const DetailInner = styled.div`
    width: 80%;
    height: 700px;
    background-color: white;
    border-radius: 20px;
    display: flex;
`
const DetailImage = styled.div`
    width: 50%;
    height: 100%;
    background-color: lightblue;
`
const DetailContent = styled.div`
    width: 50%;
`
const ContentTitle = styled.div`
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
`
const IdPersonImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50px;
`
const ContentBody = styled.div`
    border-top: 0.5px solid lightgray;
    padding-top: 1rem;
    padding-left: 0.6rem;
    display: flex;
`
const ContentText = styled.div`
   min-height: 300px;
`
const ContentComments = styled.div`
    height: 150px;
`
const InputComment = styled.div`
    background-color: lightcoral ;
`
export default DetailPage