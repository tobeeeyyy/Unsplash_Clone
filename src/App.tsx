import { createContext, useState } from "react"
import Heading from "./components/Heading"
import Category from "./components/Heading/Category"
import Images from "./components/Heading/Images"
import SearchField from "./components/Heading/SearchField"
import useAxios from "./components/hooks/useAxios"
// import Loader from "./components/CSSLoader"

import './global.css'
import HomePage from './Page/HomePage'
import Index from "./components/Title"
import Router from "./Routes"

//Create Context
export const ImageContext = createContext();

function App() {

  const [searchImage, setSearchImage] = useState('');
  const [showResult, setShowResult] = useState(false);
  const {response, isLoading, error, fetchData} = useAxios(`search/photos?page=1&query=cats&client_id=uCVztwhHCl6R2CaU9OxSedsnbFy0CUr-kc8OxofkWZw`)
  
  const value = {
    showResult,
    setShowResult,
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage
  }

  return (
    <div className="App">
      
      {/* <Router /> */}
      
      <ImageContext.Provider value={value}>
        <Heading>
          <SearchField />
        </Heading>
        <Category />
        <Index />
        {/* {showResult === true ? <Images /> : <HomePage />} */}
        {/* <HomePage />
        <Images /> */}
        {/* <HomePage/> */}
      </ImageContext.Provider>
      <HomePage />
      
      
    </div>
  )
}


export default App
