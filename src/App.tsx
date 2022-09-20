import React, {useEffect, useState} from 'react'
import Heading from "./components/Heading"
import Loader from "./components/Loader"
import UnsplashImage from "./components/UnsplashImage"

import axios from "axios"
import styled from 'styled-components'
import {createGlobalStyle} from 'styled-components'
import InfiniteScroll from 'react-infinite-scroll-component'

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
  }
`;

const WrapperImage = styled.section`
    max-width: 70rem;
    margin: 4rem auto;
    display: grid;
    grid-gap: 1em;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1 fr));
    grid-auto-rows: 300px;
`;


function App() {

  const [images, setImages] = useState<Array<any>>([])

  useEffect( ()=> {
    fetchImages();
  }, [])

  const fetchImages = () => {
    const urlRoot = "https://api.unsplash.com"
    // const accessKey = process.env.REACT_APP_ACCESSKEY;
    //${accessKey}

    axios
    .get(`${urlRoot}/photos/random?client_id=uCVztwhHCl6R2CaU9OxSedsnbFy0CUr-kc8OxofkWZw&count=10`)
    .then(response => setImages([...images, ...response.data]))
  }
  
  return (
    <div className="App">
      
      <Heading />
      <GlobalStyle />

      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
        loader={<Loader />}
      >

        <WrapperImage>
          {images.map(image => (
            <UnsplashImage url={image.urls.thumb} key={image.id}/>
          ))}
        </WrapperImage>


      </InfiniteScroll>

      
      

    </div>
  )
}

export default App
