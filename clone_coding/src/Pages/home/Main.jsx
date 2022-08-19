import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import styled_components from 'styled-components';
import Comment from './Comment';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { display } from '@mui/system';

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));


function Main() {
  const [expanded, setExpanded] = React.useState(false);
  // const [menuOpen, setMenuOpen] = React.useState(false);
  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // const moreViewMenu = () => {
  //   setMenuOpen(!menuOpen)
  // }

  return (
    <MainContainer>
  {/*MUI modal창 구현부분입니다  */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
       
      >
        <Box sx={style}>
          <BoxStyle style={{color:'red'}}>신고</BoxStyle>
          <BoxStyle style={{color:'red'}}>팔로우 취소</BoxStyle>
          <BoxStyle>즐겨찾기에 추가</BoxStyle>
          <BoxStyle>게시물로 이동</BoxStyle>
          <BoxStyle>공유 대상..</BoxStyle>
          <BoxStyle>링크 복사</BoxStyle>
          <BoxStyle>퍼가기</BoxStyle>
          <BoxStyle style={{borderBottom:'none'}}>취소</BoxStyle>
        </Box>
      </Modal>

  {/* 카드 컴포넌트입니다 */}
      <Card sx={{ maxWidth: 600, height: '800px', borderRadius:'20px', border:'1px solid lightgray' }}>
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
            <img  style={{width: '50px', height: '50px', marginRight:'10px'}} alt="heart"  src='images/heart.png'></img>
            <img  style={{width: '30px', height: '30px', marginRight:'20px'}} alt="heart"  src='images/commentIcon.png'></img>
            <img  style={{width: '30px', height: '30px',  marginRight:'15px'}} alt="heart"  src='images/send.png'></img>
          </CardInnerIcons>
          <CardInnerContent >
            <p style={{ fontWeight: '900', fontSize: '20px' }}>작성자</p>
            <div style={{marginTop: '2px',marginLeft: '10px', fontSize: '18px' }}>내용</div >
          </CardInnerContent>
          <Comment/>
        </div>
      </Card>
    </MainContainer>
  );
}

const MainContainer = styled_components.div`
  margin-top:100px;
`

const CardInnerIcons = styled_components.div`
  width: 100%;
  padding: 1rem;
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
  width: 400,
  height: '400px',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  // p: 4,
  borderRadius: '30px',
  textAlign: 'center'

};

const BoxStyle = styled_components.div`
  margin-top:2px;
  padding: 0.7rem;
  border-bottom: 1px solid lightgray;
`  

export default Main