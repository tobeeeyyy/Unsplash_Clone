import {useContext} from 'react'
import { ImageContext } from '../../App'
import Image from './Image'
import Skeleton from './Skeleton';
import './styles.css'

function Images() {
    const {response, isLoading, searchImage} = useContext(ImageContext);

  return (
    <div className='images'>
        <h1>
            Results for {searchImage || 'Cats'}
        </h1>
        <div className='image'>
            {isLoading ? <Skeleton item={10}/> : response.map((data, key) => <Image key={key} data={data} />)}
        </div>
    </div>
  )
}

export default Images