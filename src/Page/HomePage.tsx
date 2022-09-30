import {useEffect, useState} from 'react'
// import Loader from "./components/CSSLoader"
import './homepage.css'

import InfiniteScroll from 'react-infinite-scroll-component'
import UnsplashImage from '../components/UnsplashImages/UnsplashImage'
import { RandomImagesType } from '../Models/randomImages'
import generateRandomImagesService from '../Services/randomImages'
import MainLayout from '../components/Layouts/MainLayout'
import Index from '../components/Title'
import Category from '../components/Heading/Category'

function HomePage() {

    const [images, setImages] = useState<Array<RandomImagesType>>([])

    useEffect( ()=> {
        fetchImages();
    }, [])

    const fetchImages = () => {
        // const urlRoot = "https://api.unsplash.com"
        // const accessKey = process.env.REACT_APP_ACCESSKEY;
        //${accessKey}

        generateRandomImagesService()
        .then(

            response => {setImages([...images, ...response.data]); console.log(response); }
            
            )
        
    }


    return (
        <div>
            <MainLayout />
            <Category />
            <Index />
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
    );
}

export default HomePage