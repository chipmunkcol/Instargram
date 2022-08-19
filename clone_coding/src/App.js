import './App.css';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from './Pages/Login/Login'
import Register from './Pages/Login/Register'
import Home from './Pages/home/Home';
import UserPage from './Pages/home/userPage/UserPage';
import DetailPage from './Pages/home/userPage/detailPage/DetailPage';
import UpLoad from './Pages/upload/UpLoad';

function App() {

const navigate = useNavigate()

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/user') }}>MyPage</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/upLoad') }}>UpLoad</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/login') }}>Login</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/register') }}>Register</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
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
