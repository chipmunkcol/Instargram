import logo from '../../../Image/사용자 기본로고.jpg'
import logo2 from '../../../Image/인스타 게시글 로고.png'
import logo3 from '../../../Image/인스타 팔로워 로고.png'
import logo4 from '../../../Image/인스타 팔로우 로고.png'
import './user.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faComment, faGear, faHeart } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"
import { Container, Row, Col } from 'react-bootstrap'
import { useState } from 'react'

function UserPage() {

    const [isHovering, setIsHovering] = useState(0)

    return(
        <div style={{padding:'20px', height:'1000px', maxWidth:'1000px', minWidth:'800px', margin:'0 auto'}}>
            <Header>
                <div style={{width:'300px', height:'200px', display:'flex', justifyContent:'center', margin:'0 -17px 0 0'}}>
                <HeaderImg><img src={logo} style={{borderRadius:'57%'}}/></HeaderImg>
                </div>
                <HeaderText>
                    <div > <span style={{fontSize:'23px', marginRight:'20px'}}>Id가 들어와요</span> 
                        <Button>프로필 편집</Button> <span style={{margin:'3px 0 0 3px'}}><FontAwesomeIcon icon={faGear} /></span>
                    </div>
                    <div style={{margin:'20px 0 0 0'}}><HeaderText2>게시물 n개</HeaderText2><HeaderText2>팔로워 n개</HeaderText2><HeaderText2>팔로우 n개</HeaderText2></div>
                    <div style={{margin:'20px 0 0 0', fontWeight:'bold'}}>nickname이 들어와요</div>
                </HeaderText>
            </Header>

            <Mid>
                <MidContent><img src={logo2} style={{width:'30px', margin:'5px 5px 0 0'}}/>게시물</MidContent>
                <MidContent><img src={logo3} style={{width:'30px', margin:'5px 5px 0 0'}}/>저장됨</MidContent>
                <MidContent><img src={logo4} style={{width:'30px', margin:'5px 5px 0 0'}}/>태그됨</MidContent>
            </Mid>

            <Container>
                <Row md={3}>
                    {/* { 
                        posts.map((val) => 
                            <Col>
                                {val.imageSource}
                                {val.likesCount}
                                {val.commentsCount}
                            </Col>
                        ) 
                    } */}
                    
                    <Col>
                        
                            <Img>
                                <OverLay>
                                    <div style={{color:'white', fontWeight:'bold'}}>
                                        <FontAwesomeIcon icon={faHeart} /><span style={{margin:'0 0 0 5px'}}>700</span>
                                        <FontAwesomeIcon icon={faComment} style={{marginLeft:'30px'}}/><span style={{margin:'0 0 0 5px'}}>700</span>
                                    </div>
                                    
                                </OverLay>
                            </Img>
                        
                    </Col>
                </Row>
            </Container>




        </div>
    );
}

const Button = styled.button`
    border: 2.5px solid #eaeaea;
    border-radius: 5px;
    background-color: #fafafa;
    font-size: 17px;
    padding: 5px 9px;
    font-weight: bold;
`


const Header = styled.div`
    display: flex;
    flex-direction: row;
    margin: 60px 0 0 0;
`

const HeaderImg = styled.div`
    display: flex;
    
    width: 150px;
    height: 150px;
`

const HeaderText = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 17px;
    padding: 20px;
`

const HeaderText2 = styled.span`
    margin: 10px 40px 0 0;
`

const Mid = styled.div`
    height: 60px;
    border-top: 1px solid #dbdbdb;
    text-align: center;
    display: flex;
    justify-content: center;
    margin: 0 0 10px 0;
`

const MidContent = styled.div`
    width: 150px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const OverLay = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 250px;
    opacity: 0;
    :hover {
        background-color:rgba(0, 0, 0, 0.5);
        opacity: 1;
  }
`

const Img = styled.div`
    width: 250px;
    height: 250px;
    background: url('https://devbeep.com/wp-content/uploads/2021/08/fff.png.webp');
    background-position: center;
    background-size: cover;
    background-color:rgba(0, 0, 0, 1)
`


export default UserPage;