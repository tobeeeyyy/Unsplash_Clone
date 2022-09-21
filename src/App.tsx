import React, {useEffect, useState} from 'react'
import Heading from "./components/Heading"
// import Loader from "./components/Loader"
import UnsplashImage from "./components/UnsplashImage"

import './App.css'
import axios from "axios"
import InfiniteScroll from 'react-infinite-scroll-component'


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
    .get(`${urlRoot}/photos/random?client_id=uCVztwhHCl6R2CaU9OxSedsnbFy0CUr-kc8OxofkWZw&count=20`)
    .then(response => setImages([...images, ...response.data]))
  }
  
  return (
    <div className="App">
      
      <Heading />
      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
        loader={null}
      >

        <div className='WrapperImage' >
          {images.map(image => (
            <UnsplashImage url={image.urls.thumb} key={image.id}/>
          ))}
        </div>


      </InfiniteScroll>
    </div>
  )
}

export default App
