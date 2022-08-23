import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ClearIcon from '@mui/icons-material/Clear';
import DetailPageComment from './DetailPageComment';
import { useDispatch, useSelector } from 'react-redux'
import { __postComment } from '../../../../Redux/modules/comment';

const DetailPage = ({openDetail,setOpenDetail}) => {

const dispatch = useDispatch()
const [reload, setReload] = useState(false)

const [comment, setComment] = useState('') 

const postComment = () => {
  const postcomment = {"content": comment}
  dispatch(__postComment(postcomment))
}

useEffect(()=>{

},[reload])

  return (
    <DetailContainer>
      <DetailInner>
        <DetailImageContainer>
          <DetailImageInner>
            <DetailImage />
          </DetailImageInner>
        </DetailImageContainer>
        <DetailContent>
          <ContentTitle>

            <div style={{ display: 'flex' }}>
              <IdPersonImg src='images/noImg.jpg' ></IdPersonImg>
              <h4 style={{ marginLeft: '5px', marginTop: '5px' }}>id</h4>
            </div>
            <div>
              <MoreHorizIcon sx={{ m: 1, cursor: 'pointer' }} />
              <ClearIcon sx={{ m: 1, cursor: 'pointer' }} onClick={()=>{setOpenDetail(!openDetail)}} />
            </div>
          </ContentTitle>
          <ContentBody>
            <IdPersonImg src='images/noImg.jpg' ></IdPersonImg>
            <h4 style={{ marginLeft: '5px', marginTop: '5px' }}>id</h4>

            <ContentText style={{ marginTop: '8px' }}>
              <span style={{ padding: '1.2rem' }}>post한 내용이 들어와요</span>
            </ContentText>
          </ContentBody>
          <ContentComments>

             <DetailPageComment reload={reload} setReload={setReload}/>

          </ContentComments>
          <InputComment>
            <CardInnerIcons>
              <img style={{ width: '50px', height: '50px', marginRight: '10px' }} alt="heart" src='images/heart.png'></img>
              <img style={{ width: '30px', height: '30px', marginRight: '20px' }} alt="heart" src='images/commentIcon.png'></img>
              <img style={{ width: '30px', height: '30px', marginRight: '15px' }} alt="heart" src='images/send.png'></img>
            </CardInnerIcons>
            <CardLike>좋아요 10개</CardLike>
            <CommentContainer>
            <CommentInner>
                <div>🙂</div>
                <CommentInput placeholder='댓글달기..' onChange={(e)=>{setComment(e.target.value)}}></CommentInput>
              </CommentInner>
              <SubmitButton onClick={()=>{ 
                postComment() 
                setTimeout(() => {
                  setReload(!reload)
                }, 500);
                }}>게시</SubmitButton>
            </CommentContainer>
          </InputComment>
        </DetailContent>
      </DetailInner>
    </DetailContainer>
  )
}
const DetailContainer = styled.div`
    position: absolute;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
    min-width: 80%;
`
const DetailInner = styled.div`
    /* width: 80%; */
    height: 700px;
    background-color: white;
    border-radius: 20px;
    display: flex;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`
const DetailImageContainer = styled.div`
    width: 50%;
    height: 100%;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-left-radius:20px;
    border-bottom-left-radius :20px;
`

const DetailImageInner = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const DetailImage = styled.div`
   width: 100%;
   height:  500px;
  background-image: url('images/who.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: lightcoral;

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
    min-height: 50px;
`
const ContentComments = styled.div`
    height: 374px;
    overflow: auto;
`
const InputComment = styled.div`
`

const CardInnerIcons = styled.div`
  width: 100%;
  padding: 1rem;
  padding-bottom: 0;
`
const CardLike = styled.div`
  margin-left: 20px;
  margin-bottom: 25px;
  font-size:18px;
  font-weight: 800;
  
`
const CommentContainer = styled.div`
  border-top: 1px solid gray;
  display: flex;
  justify-content: space-between;
  `
const CommentInner = styled.div`
  display: flex;
  font-size: 18px;
  padding: 1rem;
`
const SubmitButton = styled.button`
  border: none;
  background-color: white;
  color: lightblue;
  font-size: 18px;  
  height:40px ;
  margin-top:10px;
  margin-right:20px ;
`
const CommentInput = styled.input`
  border: none;
  outline: none;
  margin-left: 20px;

`
export default DetailPage