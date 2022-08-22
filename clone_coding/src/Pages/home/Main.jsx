import React, { useEffect, useState,useRef} from 'react'
import { styled } from '@mui/material/styles';
import styled_components from 'styled-components';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router-dom';
import DetailPage from './userPage/detailPage/DetailPage';
import { useDispatch, useSelector } from 'react-redux'
import {getPost} from '../../Redux/modules/postSlice'
import PostList from './PostList';
import OthersModal from './modals/OthersModal';
import MyModal from './modals/MyModal';


function Main() {
  const dispatch = useDispatch();

  // Card modal창
  const [othersMenuOpen, setOthersMenuOpen] = React.useState(false);
  const [myCardMenuOpen, setmyCardMenuOpen] = React.useState(false);


  //Detail modal창
  const [openDetail, setOpenDetail] = React.useState(false);


  const navigate = useNavigate();
    //redux
  const {posts} = useSelector((state) => (state.post))
  // console.log(posts)

  useEffect(() => { 
    dispatch(getPost())
  }, [dispatch])


  return (
    <MainContainer >
      {/*타인 MUI modal창 구현부분입니다  */}
      {/* {othersMenuOpen ?
        <OthersModal othersMenuOpen={othersMenuOpen} setOthersMenuOpen={setOthersMenuOpen} /> :
        null} */}

      {/*본인 MUI modal창 구현부분입니다  */}
      {myCardMenuOpen ? <MyModal myCardMenuOpen={myCardMenuOpen} setmyCardMenuOpen={setmyCardMenuOpen} />:null}


      {/* 카드 컴포넌트입니다 */}
      <PostList  setOpenDetail={setOpenDetail} openDetail={openDetail} setOthersMenuOpen={setOthersMenuOpen} />
      {/* 게시글 디테일 페이지입니다 */}
      {openDetail ? <DetailPage openDetail={openDetail} setOpenDetail={setOpenDetail} /> : null}
    </MainContainer>
  );
}

const MainContainer = styled_components.div`
  
`

// 타인모달창 스타일입니다
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height: '470px',
  bgcolor: 'background.paper',
  boxShadow: 24,
  // p: 4,
  borderRadius: '30px',
  textAlign: 'center'
};
// 본인모달창 스타일입니다
const mystyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height: '530px',
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: '30px',
  textAlign: 'center'
};

const BoxStyle = styled_components.div`
  font-size:16px;
  margin-top:2px;
  padding: 1rem;
  border-bottom: 1px solid lightgray;
`

export default Main