import React, { useEffect, useState,useRef} from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import styled_components from 'styled-components';
import Comment from './Comment';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const PostList = ({ openDetail, setOpenDetail,setOthersMenuOpen }) => {
  const handleOpen = () => setOthersMenuOpen(true);

  const handleDetail = () => {
    setOpenDetail(!openDetail)
  };
  return (
    <Card sx={{ maxWidth: 600, height: '800px', borderRadius: '20px', border: '1px solid lightgray', marginTop: '50px', marginBottom: '50px' }}>
        <div style={{ display: 'flex', justifyContent:'space-between',padding:'1rem' }}>
            <div style={{ display: 'flex' }}>
              <IdPersonImg src='images/noImg.jpg' ></IdPersonImg>
              <h4 style={{ marginLeft: '10px', marginTop: '7px' }}>id</h4>
            </div>
            <div>
              <MoreHorizIcon sx={{ m: 1, cursor: 'pointer' }}  onClick={handleOpen}/>
            </div>
        </div>

        <CardMedia
          component="img"
          height="500"
          image="images/camera.jpg"
          alt="img"
        />
        <div>
          <CardInnerIcons>
            <img style={{ width: '50px', height: '50px', marginRight: '10px' }} alt="heart" src='images/heart.png'></img>
            <img style={{ width: '30px', height: '30px', marginRight: '20px' }} alt="heart" src='images/commentIcon.png'></img>
            <img style={{ width: '30px', height: '30px', marginRight: '15px' }} alt="heart" src='images/send.png'></img>
          </CardInnerIcons>
          <CardLike>좋아요 10개</CardLike>
          <CardInnerContent >
            <p style={{ fontWeight: '900', fontSize: '18px' }}>작성자</p>
            <div style={{ marginTop: '2px', marginLeft: '10px', fontSize: '16px' }}>내용</div >
            <div style={{ cursor: 'pointer' }} onClick={handleDetail}> ...더보기</div>
          </CardInnerContent>
          <Comment />
        </div>
      </Card>
  )
}
const CardInnerIcons = styled_components.div`
  width: 100%;
  padding: 1rem;
  padding-bottom: 0;
`
const CardInnerContent = styled_components.div`
  float:left;
  display: flex;
  width: 100%;
  margin-left: 20px;
`
const IdPersonImg = styled_components.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`
const CardLike = styled_components.div`
  margin-left: 20px;
  font-size:18px;
  font-weight: 800;
`
export default PostList