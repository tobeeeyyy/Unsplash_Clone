import '../App.css'

function UnsplashImage({url, key}){
  return (
    <div >
        <img className='Img' src={url} key={key} alt="" />
    </div>
  )
}

export default UnsplashImage
