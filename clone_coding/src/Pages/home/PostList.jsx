import React, { useEffect, useState,useRef} from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import styled_components from 'styled-components';
import Comment from './Comment';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DetailPage from './userPage/detailPage/DetailPage';
import MyModal from './modals/MyModal';
import axios from 'axios'
import { getCookieToken } from '../../shared/cookie';
import { useDispatch, useSelector } from "react-redux";
import { getPost } from '../../Redux/modules/postSlice';
import LikeButtonDetail from './modals/LikeButtonDetail'
import { useNavigate } from 'react-router-dom';

const PostList = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(data)
  // Card modal창
  const [othersMenuOpen, setOthersMenuOpen] = React.useState(false);
  const handleOpen = () => setOthersMenuOpen(true);
  //Detail modal창
  const [openDetail, setOpenDetail] = React.useState(false);
  const handleDetail = () => {
    setOpenDetail(!openDetail)
  };
  //좋아요 버튼
  const [likeButton, setLikeButton] = React.useState(false);
  const clickLikeButton = async () => {
    const response = await axios.post(`https://jdh3340.shop/api/user/posts/${data.id}/likes`,{likesCount: data.likesCount+1},
      {
        headers: {
          "Authorization": getCookieToken()
        }
      })
    console.log(response)
    setLikeButton(!likeButton)
    dispatch(getPost())
  }
  // 좋아요 개수 클릭시 모달창
  const [countModal, setCountModal] = React.useState(false);
  const clickLikeCount = () => {
    setCountModal(!countModal)
  }
  return (
    <Card sx={{ maxWidth: 600, borderRadius: '20px', border: '1px solid lightgray', marginTop: '50px', marginBottom: '50px' }}>
        <div style={{ display: 'flex', justifyContent:'space-between',padding:'1rem' }}>
            <div style={{ display: 'flex' }}>
              <IdPersonImg src='images/noImg.jpg' onClick={()=>{navigate(`/user/${data.username}`)}} type='button'></IdPersonImg>
              <h4 style={{ marginLeft: '10px', marginTop: '7px' }}>{data.nickname}</h4>
            </div>
            <div>
              <MoreHorizIcon sx={{ m: 1, cursor: 'pointer' }}  onClick={handleOpen}/>
            </div>
        </div>

      <DetailImageContainer>
        <DetailImage src={data.imageSource} alt="img"></DetailImage>
        </DetailImageContainer>
        <div>
        <CardInnerIcons>
          {/* 좋아요 버튼 */}
          <img style={{
            width: likeButton ? '38px' : '50px',
            height: likeButton ? '38px' : '50px',
            marginTop: likeButton ? '5px' : null,
            marginLeft: likeButton ? '5px' : null,
            marginRight: likeButton ? '16px' : '9px',
            cursor: 'pointer'
          }}
            alt="heart"
            onClick={clickLikeButton}
            src={likeButton && likeButton ? 'images/colorHeart.png' : 'images/heart.png'}>
          </img>
          
            <img style={{ width: '30px', height: '30px', marginRight: '20px',cursor: 'pointer' }} alt="heart" onClick={handleDetail} src='images/commentIcon.png'></img>
            <img style={{ width: '30px', height: '30px', marginRight: '15px',cursor: 'pointer' }} alt="heart" src='images/send.png'></img>
        </CardInnerIcons>
        {/* 좋아요개수 클릭시 모달창 */}
        <CardLike onClick={clickLikeCount}>좋아요 {data.likesCount}개</CardLike>
          <CardInnerContent >
            <p style={{ fontWeight: '900', fontSize: '18px' }}>{data.id}</p>
            <div style={{ marginTop: '2px', marginLeft: '10px', fontSize: '16px' }}>{data.description}</div >
            <div style={{ cursor: 'pointer' }} onClick={handleDetail}> ...더보기</div>
          </CardInnerContent>
          <CommentsCount>댓글 {data.commentsCount}개 모두보기</CommentsCount>
          <Comment />
        </div>
      {/* 게시글 디테일 페이지입니다 */}
      {openDetail ? <DetailPage openDetail={openDetail} setOpenDetail={setOpenDetail} data={data} /> : null}
       {/*본인 MUI modal창 구현부분입니다  */}
      { othersMenuOpen ? <MyModal othersMenuOpen={othersMenuOpen} setOthersMenuOpen={setOthersMenuOpen}  data={data}/>:null}  
      {/* 좋아요한 사람들을 모달창으로 보여줍니다 */}
      {countModal ? <LikeButtonDetail countModal={countModal} setCountModal={setCountModal} data={data} />: null}
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
const CommentsCount = styled_components.div`
  margin-top:-10px;
  margin-left: 20px;
  cursor: pointer;
  font-size: 18px;
  color: #7f7a7a;
  font-weight: 700;
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
  cursor:pointer;
`
const DetailImageContainer = styled_components.div`
  height: 500px;
  // background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`
const DetailImage = styled_components.img`
  width:100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

export default PostList