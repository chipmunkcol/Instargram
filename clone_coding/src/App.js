import './App.css';
import { Route, Routes, useNavigate,Link, Switch } from 'react-router-dom';
import Login from './Pages/Login/Login'
import Register from './Pages/Login/Register'
import Home from './Pages/home/Home';
import UserPage from './Pages/home/userPage/UserPage';
import DetailPage from './Pages/home/userPage/detailPage/DetailPage';
import UpLoad from './Pages/upload/UpLoad';

import Header from './Pages/Header';

function App() {

  return (
    <div className="App">
      {/* <Header />   */}
      
      <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/user/detail' element={<DetailPage/>}></Route>
            <Route path='/user' element={<UserPage/>}></Route>
            <Route path='/upLoad' element={<UpLoad/>}></Route>

            <Route path='/login' element={<Login/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
        
        </Routes>

    </div>
  );
}

export default App;
