import SearchField from './SearchField'
import './styles.css'

function Heading({children}){
  return (
    <div className='Header' >
        <div className='H1'>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="1.76em" 
            height="2em" 
            preserveAspectRatio="xMidYMid meet" 
            viewBox="0 0 448 512">
              <path 
                fill="currentColor" 
                d="M448 230.17V480H0V230.17h141.13v124.92h165.74V230.17ZM306.87 32H141.13v124.91h165.74Z"/>
          </svg>
        </div>

        {children}

        <button className='submit-button'>Submit Photo</button>

        <div className='items'>
            <div className="item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em" 
                height="1.5em" 
                preserveAspectRatio="xMidYMid meet" 
                viewBox="0 0 24 24">
                <path fill="currentColor" 
                d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"/>
              </svg>
            </div>
            <div className="item">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="1.5em" 
                height="1.5em" 
                preserveAspectRatio="xMidYMid meet" 
                viewBox="0 0 24 24">
                <path fill="currentColor" 
                d="M12 2a5 5 0 1 0 5 5a5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3a3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"/>
              </svg>
            </div>
            <div className="item">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="1.5em" 
                height="1.5em" 
                preserveAspectRatio="xMidYMid meet" 
                viewBox="0 0 16 16">
                <path fill="currentColor" 
                fillRule="evenodd" 
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
              </svg>
            </div>
        </div>



    </div>
  )
}

export default Heading