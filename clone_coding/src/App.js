import './App.css';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from './Pages/Login/Login'
import Register from './Pages/Login/Register'
import Home from './Pages/home/Home';
import UserPage from './Pages/home/userPage/UserPage';
import DetailPage from './Pages/home/userPage/detailPage/DetailPage';
import UpLoad from './Pages/upload/UpLoad';
import Header from './Pages/Header';

function App() {

const navigate = useNavigate()

  return (
    <div className="App">
      <Header />  
      

    {/* route -> componenet로 넘길 예정입니다! */}
    <Routes>  
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/register' element={<Register></Register>}></Route>
      <Route path='/user' element={<UserPage></UserPage>}></Route>
      <Route path='/user/detail' element={<DetailPage></DetailPage>}></Route>
      <Route path='/upLoad' element={<UpLoad></UpLoad>}></Route>
    </Routes>

    </div>
  );
}

export default App;
