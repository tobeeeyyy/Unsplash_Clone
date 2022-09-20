import React from 'react'
import styled from 'styled-components'

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

function UnsplashImage({url, key}){
  return (
    <div>
        <Img src={url} key={key} alt="" />
    </div>
  )
}

export default UnsplashImage
