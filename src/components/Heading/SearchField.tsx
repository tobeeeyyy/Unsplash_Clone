import './styles.css'
import {useState, useContext} from 'react'
import { ImageContext } from '../../App';

function SearchField() {

  const [searchValue, setSearchValue] = useState("");
  const {setShowResult, fetchData, setSearchImage } = useContext(ImageContext);

  const handleInputChange = (e) => {
    setSearchValue(e.target.value)
  }

  const handleButtonSearch = () => {
    fetchData(`search/photos?page=1&query=${searchValue}&client_id=uCVztwhHCl6R2CaU9OxSedsnbFy0CUr-kc8OxofkWZw`)
    setSearchValue('');
    setSearchImage(searchValue);

  }

  const handleEnterSearch = (e) => {
    if(e.key === 'Enter'){
      fetchData(`search/photos?page=1&query=${searchValue}&client_id=uCVztwhHCl6R2CaU9OxSedsnbFy0CUr-kc8OxofkWZw`)
      setSearchValue(e.target.value);
      setSearchImage(searchValue);
      setShowResult(true);
    }
  }


  const handleSubmit = event => {
    event.preventDefault();
  }

  return (
    <div>
      <form className='searchContainer'
        onSubmit={handleSubmit}
      >
        <button
            onClick={handleButtonSearch}
            className='button'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                preserveAspectRatio="xMidYMid meet" 
                viewBox="0 0 1024 1024">
                <path fill="currentColor" 
                d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1c-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"/>
              </svg>

        </button>
        <input 
              className="search"
              type="search"
              placeholder=" Search Anything..."
              value={searchValue}
              onChange = {handleInputChange}
              onKeyDown={handleEnterSearch}
          />
        
        <button>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="1.5em" 
            height="1.5em" 
            preserveAspectRatio="xMidYMid meet" 
            viewBox="0 0 16 16">
            <path 
            fill="currentColor" 
            d="M2 4.75A2.75 2.75 0 0 1 4.75 2h.5a.75.75 0 0 1 0 1.5h-.5c-.69 0-1.25.56-1.25 1.25v.5a.75.75 0 0 1-1.5 0v-.5Zm12 6.5A2.75 2.75 0 0 1 11.25 14h-.5a.75.75 0 0 1 0-1.5h.5c.69 0 1.25-.56 1.25-1.25v-.5a.75.75 0 0 1 1.5 0v.5Zm0-6.5A2.75 2.75 0 0 0 11.25 2h-.5a.75.75 0 0 0 0 1.5h.5c.69 0 1.25.56 1.25 1.25v.5a.75.75 0 0 0 1.5 0v-.5ZM4.75 14A2.75 2.75 0 0 1 2 11.25v-.5a.75.75 0 0 1 1.5 0v.5c0 .69.56 1.25 1.25 1.25h.5a.75.75 0 0 1 0 1.5h-.5ZM8 10a2 2 0 1 0 0-4a2 2 0 0 0 0 4ZM5.25 6a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5Z"/>
          </svg>
        </button>
      </form>
        
    </div>
  )
}

export default SearchField