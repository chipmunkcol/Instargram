import React from 'react'
import styled from 'styled-components'

const GetWhoFollow = ({followData}) => {
  const followButton = () => {
    console.log('팔로우취소한다')
  }
  return (
    <div>
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
           <div style={{ display: 'flex' }}>
             <IdPersonImg src={followData.profileImage == null ? 'images/noImg.jpg' : followData.profileImage} />
             <div style={{ marginLeft: '10px' }}>
               <div style={{ fontWeight: '900' }}>{followData.username}</div>
               <div>{followData.nickname}</div>
             </div>
           </div>
           <FollowButton onClick={followButton}>팔로우 취소</FollowButton>
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
  background-color: white;
  color: #0095f6;
  width: 120px;
  font-size: 18px;
  font-weight: 800;
  border-radius:5px;
  border: 0.5px solid #0095f6;
  padding: 0.2rem;
  cursor: pointer;
`
export default GetWhoFollow