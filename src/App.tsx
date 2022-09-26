
import { createContext, useState } from "react"
import Heading from "./components/Heading"
import Category from "./components/Heading/Category"
import Images from "./components/Heading/Images"
import SearchField from "./components/Heading/SearchField"
import useAxios from "./components/hooks/useAxios"
// import Loader from "./components/CSSLoader"

import './global.css'
import HomePage from './Page/HomePage'

//Create Context
export const ImageContext = createContext();

function App() {

  const [searchImage, setSearchImage] = useState('');
  const {response, isLoading, error, fetchData} = useAxios(`search/photos?page=1&query=cats&client_id=uCVztwhHCl6R2CaU9OxSedsnbFy0CUr-kc8OxofkWZw`)
  
  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage
  }

  return (
    <div className="App">
      
      <ImageContext.Provider value={value}>
        <Heading>
          <SearchField />
        </Heading>
        <Category />
        <Images />
      </ImageContext.Provider>

      {/* <HomePage/> */}
    </div>
  )
}


export default App
