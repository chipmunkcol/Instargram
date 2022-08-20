import React from 'react'
import styled from 'styled-components'

const DetailPage = () => {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);
  return (
      <DetailContainer
         open={open}
        onClose={handleClose}>
          <DetailInner>DetailPage</DetailInner>
      </DetailContainer>
  )
}
const DetailContainer = styled.div`
    position: absolute;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
`
const DetailInner = styled.div`
    width: 700px;
    height: 500px;
    background-color: beige;
`
export default DetailPage
