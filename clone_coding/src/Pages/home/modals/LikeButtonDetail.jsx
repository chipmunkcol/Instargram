import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import axios from 'axios'
import ClearIcon from '@mui/icons-material/Clear';


const LikeButtonDetail = ({ countModal, setCountModal, data }) => {
  const [getLikeData, setGetLikeData ] = React.useState(null)
  const handleClose = () => {
    setCountModal(false)
  }
  const getLike = async () => {
    const response =  await axios.get(`https://jdh3340.shop/api/user/posts/${data.id}/likes`)
    setGetLikeData(response.data.data)
  }

  const followButton = () => {
    console.log('팔로우한다')
  }
  
  useEffect(() => {
    getLike()
  }, [])

  
   
  return (
    <div>
      {getLikeData && getLikeData.map((data, i) => {
        return  <Modal
          key={i}
          open={countModal}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description">
          <Box sx={mystyle}>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', fontSize: '20px', borderBottom: '1px solid lightgray' }}>
              <div></div>
              <div style={{ fontWeight: '800' }}>좋아요</div>
              <ClearIcon sx={{ cursor: 'pointer' }} onClick={() => { setCountModal(false) }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
              <div style={{ display: 'flex' }}>
                <IdPersonImg src={data.profileImage == null ? 'images/noImg.jpg' : data.profileImage} />
                <div style={{ marginLeft: '10px' }}>
                  <div style={{ fontWeight: '900' }}>{data.username}</div>
                  <div>{data.nickname}</div>
                </div>
              </div>
              <FollowButton onClick={followButton}>팔로우</FollowButton>
            </div>
          </Box>
        </Modal>  
      }
      )}</div>)
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
const IdPersonImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`
const FollowButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: #0095f6;
  color: white;
  border:none;
  border-radius:5px;
  font-size: 20px;
  font-weight: 800;
`
export default LikeButtonDetail