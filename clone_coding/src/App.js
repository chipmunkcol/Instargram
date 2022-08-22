import './App.css';
import * as React from 'react';
import { Route, Routes, useNavigate,Link, Switch } from 'react-router-dom';
import Login from './Pages/Login/Login'
import Register from './Pages/Login/Register'
import Home from './Pages/home/Home';
import UserPage from './Pages/home/userPage/UserPage';
import DetailPage from './Pages/home/userPage/detailPage/DetailPage';
import UpLoad from './Pages/upload/UpLoad';
import Header from './Pages/Header';
import styled from 'styled-components'

function App() {
  const [openImg, setOpenImg] = React.useState(false);
  const [dropmenu, setDropmenu] = React.useState(false);

  return (
    <div className="App">

      <Header setOpenImg={setOpenImg} setDropmenu={setDropmenu} dropmenu={dropmenu} />
      
      <Routes>
           <Route path='/login' element={<Login/>}></Route>
           <Route path='/register' element={<Register/>}></Route>
      </Routes>
      
      <Routes>
        <Route path='/' element={<Home openImg={openImg} setOpenImg={setOpenImg} setDropmenu={setDropmenu}/>}></Route>
          <Route path='/user/detail' element={<DetailPage/>}></Route>
      
          <Route path='/user' element={<UserPage/>}></Route>
          <Route path='/upLoad' element={<UpLoad/>}></Route>
      </Routes>
      

    </div>
  );
}

export default App;