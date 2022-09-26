import './unsplashImage.css'

type UnSplashImagePorpsType = {url: string, key: string}

function UnsplashImage({url, key}:UnSplashImagePorpsType){
  return (
    <div >
        <img className='Img' src={url} key={key} alt="" />
    </div>
  )
}

export default UnsplashImage
