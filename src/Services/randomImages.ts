import axios from "axios";
import { RandomImagesType } from "../Models/randomImages";

// const urlRoot = "https://api.unsplash.com"
// const accessKey = process.env.REACT_APP_ACCESSKEY;

const generateRandomImagesService = () => axios
.get<Array<RandomImagesType>>(`https://api.unsplash.com/photos/random?client_id=uCVztwhHCl6R2CaU9OxSedsnbFy0CUr-kc8OxofkWZw&count=20`)

export default generateRandomImagesService;