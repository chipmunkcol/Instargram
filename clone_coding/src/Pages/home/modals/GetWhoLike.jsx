import React from 'react'
import styled from 'styled-components'

const GetWhoLike = ({ likeData }) => {
  const followButton = () => {
    console.log('팔로우한다')
  }
  return (
    <div>
       <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
              <div style={{ display: 'flex' }}>
                <IdPersonImg src={likeData.profileImage == null ? 'images/noImg.jpg' : likeData.profileImage} />
                <div style={{ marginLeft: '10px' }}>
                  <div style={{ fontWeight: '900' }}>{likeData.username}</div>
                  <div>{likeData.nickname}</div>
                </div>
              </div>
              <FollowButton onClick={followButton}>팔로우</FollowButton>
            </div>
    </div>
  )
}
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
export default GetWhoLike