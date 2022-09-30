import { createContext, useState } from "react";
import useAxios from "./components/hooks/useAxios";


import "./global.css";
import Router from "./Routes";

//Create Context
export const ImageContext = createContext();

function App() {
  const [searchImage, setSearchImage] = useState("");
  const [showResult, setShowResult] = useState(false);
  const { response, isLoading, error, fetchData } = useAxios(
    `search/photos?page=1&query=cats&client_id=uCVztwhHCl6R2CaU9OxSedsnbFy0CUr-kc8OxofkWZw`
  );

  const value = {
    showResult,
    setShowResult,
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage,
  };

  return <Router />;
}

export default App;
