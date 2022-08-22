import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import styled_components from 'styled-components';
import Comment from './Comment';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router-dom';
import DetailPage from './userPage/detailPage/DetailPage';

function Main() {
  // Card modal창
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //Detail modal창
  const [openDetail, setOpenDetail] = React.useState(false);
  const handleDetail = () => {
    setOpenDetail(!openDetail)
  };

  const navigate = useNavigate();

  return (
    <MainContainer >
      {/*MUI modal창 구현부분입니다  */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"

      >
        <Box sx={style}>
          <BoxStyle style={{ color: '#CD0000', fontWeight: '800' }}>신고</BoxStyle>
          <BoxStyle style={{ color: '#CD0000', fontWeight: '800' }}>팔로우 취소</BoxStyle>
          <BoxStyle>즐겨찾기에 추가</BoxStyle>
          <BoxStyle>게시물로 이동</BoxStyle>
          <BoxStyle>공유 대상..</BoxStyle>
          <BoxStyle>링크 복사</BoxStyle>
          <BoxStyle>퍼가기</BoxStyle>
          <BoxStyle style={{ borderBottom: 'none' }}>취소</BoxStyle>
        </Box>
      </Modal>

      {/* 카드 컴포넌트입니다 */}
      <Card sx={{ maxWidth: 600, height: '800px', borderRadius: '20px', border: '1px solid lightgray', marginTop: '50px', marginBottom: '50px' }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <MoreHorizIcon sx={{ m: 1, cursor: 'pointer' }} onClick={handleOpen} />
          }
          title="Shrimp and Chorizo Paella"
        />

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
      {/* 게시글 디테일 페이지입니다 */}
      {openDetail ? <DetailPage></DetailPage> : null}
    </MainContainer>
  );
}

const MainContainer = styled_components.div`
  
`

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
// 모달창 스타일입니다
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height: '500px',
  bgcolor: 'background.paper',
  boxShadow: 24,
  // p: 4,
  borderRadius: '30px',
  textAlign: 'center'

};

const BoxStyle = styled_components.div`
  font-size:16px;
  margin-top:2px;
  padding: 1rem;
  border-bottom: 1px solid lightgray;
`
const CardLike = styled_components.div`
  margin-left: 20px;
  font-size:18px;
  font-weight: 800;
`

export default Main