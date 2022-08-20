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
      <Header />
      {/* <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/user') }}>MyPage</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/upLoad') }}>UpLoad</Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}

    <Routes>
        <Route path='/' element={<Home />}>
        <Route path='/user/detail' element={<DetailPage/>}></Route>
        </Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/user' element={<UserPage/>}></Route>
        <Route path='/upLoad' element={<UpLoad/>}></Route>
    </Routes>

    </div>
  );
}

export default App;
