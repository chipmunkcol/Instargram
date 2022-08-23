import React, { useEffect, useState,useRef} from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import styled_components from 'styled-components';
import Comment from './Comment';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DetailPage from './userPage/detailPage/DetailPage';
import MyModal from './modals/MyModal';

const PostList = ({ data }) => {
 
  // Card modal창
  const [othersMenuOpen, setOthersMenuOpen] = React.useState(false);
  const handleOpen = () => setOthersMenuOpen(true);
  //Detail modal창
  const [openDetail, setOpenDetail] = React.useState(false);
  const handleDetail = () => {
    setOpenDetail(!openDetail)
  };
  return (
    <Card sx={{ maxWidth: 600, borderRadius: '20px', border: '1px solid lightgray', marginTop: '50px', marginBottom: '50px' }}>
        <div style={{ display: 'flex', justifyContent:'space-between',padding:'1rem' }}>
            <div style={{ display: 'flex' }}>
              <IdPersonImg src='images/noImg.jpg' ></IdPersonImg>
          <h4 style={{ marginLeft: '10px', marginTop: '7px' }}>{data.id}</h4>
            </div>
            <div>
              <MoreHorizIcon sx={{ m: 1, cursor: 'pointer' }}  onClick={handleOpen}/>
            </div>
        </div>

        <DetailImageContainer>
          <CardMedia
            component="img"
            height="500"
            image={data.imageSource}
            alt="img"
            style={{height:'300px', backgroundSize:'cover', backgroundPosition:'center'}}
          />
        </DetailImageContainer>
        <div>
          <CardInnerIcons>
            <img style={{ width: '50px', height: '50px', marginRight: '10px' }} alt="heart" src='images/heart.png'></img>
            <img style={{ width: '30px', height: '30px', marginRight: '20px' }} alt="heart" src='images/commentIcon.png'></img>
            <img style={{ width: '30px', height: '30px', marginRight: '15px' }} alt="heart" src='images/send.png'></img>
          </CardInnerIcons>
        <CardLike>좋아요 {data.likesCount}개</CardLike>
          <CardInnerContent >
            <p style={{ fontWeight: '900', fontSize: '18px' }}>작성자</p>
            <div style={{ marginTop: '2px', marginLeft: '10px', fontSize: '16px' }}>내용</div >
            <div style={{ cursor: 'pointer' }} onClick={handleDetail}> ...더보기</div>
          </CardInnerContent>
          <Comment />
      </div>
      {/* 게시글 디테일 페이지입니다 */}
      {openDetail ? <DetailPage openDetail={openDetail} setOpenDetail={setOpenDetail} data={data} /> : null}
       {/*본인 MUI modal창 구현부분입니다  */}
      { othersMenuOpen ? <MyModal othersMenuOpen={othersMenuOpen} setOthersMenuOpen={setOthersMenuOpen}  data={data}/>:null}  
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
const DetailImageContainer = styled_components.div`
    // height: 500px;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
`
export default PostList