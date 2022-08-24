import React, { useEffect, useState,useRef} from 'react'
import styled_components from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import {getPost} from '../../Redux/modules/postSlice'
import PostList from './PostList';
import OthersModal from './modals/OthersModal';
import { getUserData } from '../../shared/cookie';


function Main() {
  const dispatch = useDispatch();

  // Card modal창
  // const [othersMenuOpen, setOthersMenuOpen] = React.useState(false);
  // const [myCardMenuOpen, setmyCardMenuOpen] = React.useState(false);

  const navigate = useNavigate();
  
  useEffect(() => { 
    dispatch(getPost())
  }, [dispatch])
  
    //redux
  const { posts } = useSelector((state) => state.post)
  // console.log(posts)

  
  if(posts.length ===  0){
    return (
      <div>
      <h1>로딩중!</h1>
    </div>
    )
  }

  return (
    
    <MainContainer >
      {/*타인 MUI modal창 구현부분입니다  */}
      {/* {othersMenuOpen ?
        <OthersModal othersMenuOpen={othersMenuOpen} setOthersMenuOpen={setOthersMenuOpen} /> :
        null} */}

     


      {/* 카드 컴포넌트입니다 */}
      {posts.data.content && posts.data.content.map((data, i) => { return <PostList data={data} key={i}  /> })
      }
     </MainContainer>
  );
}

const MainContainer = styled_components.div``
  

export default Main