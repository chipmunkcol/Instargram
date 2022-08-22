import React, { useEffect, useState,useRef} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components';

const AddButton = () => {
  const imgRef = useRef();
  const [imageUrl, setImageUrl] = useState(false);
  const [imgFile, setImgFile] = useState("")
  const [newContent, setNewContent] = useState('');

  const dispatch = useDispatch();

  const onChangeImage = (e) => {
    e.preventDefault();
    // form-data 시도중
    // const files = e.target.files;
    // const formData = new FormData()
    // console.log(files[0].name)
    // formData.append("file", files[0]) //files[0] === upload file
  
    // const value = [{
    //   title: "hello",
    //   content: "wolrd"
    // }]
    
    // const blob = new Blob([JSON.stringify(value)], {type: "application/json"}) 
    
    // formData.append("data", blob)
    // setImgFile(files)
    // setImageUrl(e.target.files[0])
    
    // base64버전
    // const reader = new FileReader();
    // const file = imgRef.current.files[0];
    // console.log(imgRef.current.files[0])
    // reader.readAsDataURL(file);
    // reader.onloadend = () => {
    //   setImageUrl(reader.result);
    //   setImgFile(file)
      // console.log(reader.result)
    
  }
  const addNewContent = (e) => {
    setNewContent(e.target.value)
  }


  const sendButton = () => {
    // if (title === '' || content === '' || price === '') return alert('빈칸을 채워주세요!')
    const obj = {
      id:2,
      newContent,
      // price,
      // file: imageUrl
    }
    // addpost(obj)
    console.log(obj)
    alert('등록완료!')
    // navigate('/');
  };

  return (
    <div style={{ backgroundColor: 'white' }}>
      {console.log('이미지url',imageUrl )}
      <AddButtonContainer>
        <AddButtonTitle>
          <div>새 게시물 만들기</div>
          <ShareButton onClick={sendButton}>공유하기</ShareButton>
        </AddButtonTitle>

        <div style={{ display: 'flex' }}>
          <AddButtonImage>
            {/* {console.log(imageUrl)} */}
            <ImageBox src={imageUrl ? imageUrl : 'images/addImg.png'} />
            <div style={{ fontSize: '18px' }}>사진과 동영상을 여기에 끌어다 놓으세요</div>


            <label htmlFor="upload-photo">
              <input
                encType="multipart/form-data"
                accept="image/*,audio/*,video/mp4,video/x-m4v,application/pdf,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation,.csv"
                type="file"
                onChange={onChangeImage}
                id="upload-photo"
                name="upload-photo"
                ref={imgRef}
                style={{ display: 'none' }}
              />
              <SelectComputer>
                컴퓨터에서 가져오기
              </SelectComputer>
            </label>
          </AddButtonImage>
          <AddButtonContent>
            <div style={{ display: 'flex', margin: '10px' }}>
              <img style={{ width: '50px', height: '50px', borderRadius: '50px', marginTop: '5px', marginRight: '20px' }} alt="heart" src='images/noImg.jpg'></img>
              <div style={{ marginTop: '10px' }} > 아이디</div>
            </div>

            <ContentBody onChange={addNewContent}/>
            <ContentWhere>위치추가</ContentWhere>
            <ContentWhere>접근성</ContentWhere>
            <ContentWhere>고급설정</ContentWhere>
          </AddButtonContent>

        </div>
      </AddButtonContainer>
    </div>
  )
}

const AddButtonContainer = styled.div`
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  min-width: 700px;
  height: 500px;
  border-radius: 20px;
  z-index: 2;
  background-color: white;
  text-align: center;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`
const AddButtonTitle = styled.div`
  margin-top: 15px;
  padding-bottom: 10px;
  font-size: 18px;
  font-weight: 600;
  border-bottom: 1px solid lightgray;
  display: flex;
  justify-content: center;
`
const ShareButton = styled.button`
  position: absolute;
  right: 0;
  margin-right:10px;
  border: none;
  background-color: white;
  font-weight: 800;
  color :#0095F6;
`
const AddButtonImage = styled.div`
  align-items: center;
  margin-top: 100px;
  width: 60%;
`
const ImageBox = styled.img`
  width: 150px;
  height: 150px;
  margin-top: 5px;
  margin-right: 20px;
`

const SelectComputer = styled.div`
  background-color: #0095F6;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 0.2rem 0.7rem;
  margin-top: 10px;
  `

const AddButtonContent = styled.div`
  border-left: 1px solid lightgray;
  width: 50%;
  height: 448px;
  /* background-color: beige; */
  text-align: left;
`

const ContentBody = styled.input`
  border: none;
  width: 100%;
  height: 55%;
  padding: 0.5rem;
  vertical-align: top;
  text-align: left;
`
const ContentWhere = styled.div`
  padding: 0.5rem;
  border-top: 1px solid lightgray;
`
export default AddButton