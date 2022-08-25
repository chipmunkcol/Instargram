import React from 'react'
import styled from 'styled-components'
import 사용자기본로고 from '../../../Image/사용자 기본로고.jpg'

const GetWhoFollower = ({ followerData }) => {
  const followButton = () => {
    console.log('팔로우한다')
  }
  // 팔로우 버튼 다시 연결해야
  // const followButton = async () => {
  //   console.log(likeData.username)
  //   const response = await axios.post(`https://jdh3340.shop/api/user/${likeData.username}/follow`,likeData.username,
  //     {headers: {
  //       "Authorization": getCookieToken()
  //     }}
  //   )
  //   setGetFollowData(response.data.data)
  //   console.log(response.data.data)
  // }
  return (
    <div>
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
           <div style={{ display: 'flex' }}>
             <IdPersonImg src={followerData.profileImage == null ? 사용자기본로고 : followerData.profileImage} />
             <div style={{ marginLeft: '10px' }}>
               <div style={{ fontWeight: '900' }}>{followerData.username}</div>
               <div>{followerData.nickname}</div>
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
export default GetWhoFollower