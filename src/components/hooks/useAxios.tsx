import axios, { responseEncoding } from "axios"
import {useState, useEffect} from 'react'

function useAxios(param) {
    const [response, setResponse] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    axios.defaults.baseURL = 'https://api.unsplash.com';

    const fetchData = async (url) => {
        try{
            setIsLoading(true);
            const res = await axios(url);
            setResponse(res.data.results);
        }
        catch(err){
            setError(err)
        }
        finally{
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData(param);
    }, [param])

  return {
    response: response, 
    isLoading: isLoading,
    error: error,
    fetchData: url => fetchData(url)
  }
}

export default useAxios