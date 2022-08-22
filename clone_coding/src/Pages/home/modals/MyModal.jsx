import React, { useEffect, useState,useRef} from 'react'
import { styled } from '@mui/material/styles';
import styled_components from 'styled-components';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const MyModal = ({ myCardMenuOpen, setmyCardMenuOpen }) => {
  console.log(myCardMenuOpen)
  const checkDelete = () => {
    console.log('클릭하기')
    setmyCardMenuOpen(false)
  }
  const handleClose = () => {
    setmyCardMenuOpen(false)
  }
  return (
    <Modal
    open={setmyCardMenuOpen}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    
          >
    <Box sx={mystyle}>
      <BoxStyle style={{ color: '#CD0000', fontWeight: '800' }} onClick={checkDelete}>삭제</BoxStyle>
      <BoxStyle>수정</BoxStyle>
      <BoxStyle>좋아요 수 숨기기</BoxStyle>
      <BoxStyle>댓글 기능 해제</BoxStyle>
      <BoxStyle>게시물로 이동</BoxStyle>
      <BoxStyle>공유 대상..</BoxStyle>
      <BoxStyle>링크 복사</BoxStyle>
      <BoxStyle>퍼가기</BoxStyle>
      <BoxStyle style={{ borderBottom: 'none' }}>취소</BoxStyle>
    </Box>
          </Modal>
  )
}
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
export default MyModal