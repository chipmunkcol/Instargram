import React from 'react'
import styled from 'styled-components'
import Modal from '@mui/material/Modal';


const UpdateDetailPage = ({data,clickUpdate, setClickUpdate, setOthersMenuOpen}) => {
  console.log(data)
  const backButton = () => {
    setClickUpdate(false)
    setOthersMenuOpen((prev)=> (!prev))
  }

  const updateDone = () => {
    console.log('보내주자')
  }

  return (
  <Modal
      open={clickUpdate}
      sx={{ border: 'none', top:'-50%'  }}
      >
    <DetailContainer>
    <DetailInner>
          <DetailHeader>
            <div onClick={backButton} style={{cursor:'pointer'}}>취소</div>
            <div style={{fontWeight:'800'}}>정보 수정</div>
            <div onClick={updateDone} style={{color:'#1877F2',fontWeight:'800', cursor:'pointer'}}>완료</div>
      </DetailHeader>
      <div style={{display:'flex', height:'100%'}}>
        <DetailImageContainer>
          <DetailImageInner>
            <DetailImage style={{ backgroundImage: `url(${data.imageSource})` }} />
          </DetailImageInner>
        </DetailImageContainer>
        <DetailContent>
          <ContentBody>
            <IdPersonImg src='images/noImg.jpg' ></IdPersonImg>
            <h4 style={{ marginLeft: '5px' }}>{data.id}</h4>
          </ContentBody>
              <textarea type='text' style={{ padding: '1.2rem', width: '100%', height: '78.2%' }} placeholder={data.description}></textarea>
          <input style={{ padding: '1rem',marginLeft:'5px', marginTop:'-5px', width:'97%', height:'10%', border:'none'}}>{data.tags}</input>

            </DetailContent>
            </div>
    </DetailInner>
    </DetailContainer>
  </Modal>
)
}
const DetailContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  min-width: 80%;
`
const DetailHeader = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  padding: 0.9rem;
`
const DetailInner = styled.div`
  background-color: white;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`
const DetailImageContainer = styled.div`
  width: 50%;
  height: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius :20px;
`

const DetailImageInner = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const DetailImage = styled.div`
 width: 100%;
 height:  500px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`
const DetailContent = styled.div`
  width: 50%;
`
const IdPersonImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  margin-top:-5px ;
`
const ContentBody = styled.div`
  border-top: 0.5px solid lightgray;
  padding-top: 1rem;
  padding-left: 0.6rem;
  display: flex;
`

export default UpdateDetailPage