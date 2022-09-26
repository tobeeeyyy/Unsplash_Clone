import './styles.css'

function Skeleton({item}) {
  return [...Array(item).keys()].map(() => (
    <div className='temp1'>
        <div className='temp2'>
        </div>
    </div>
  ))
}

export default Skeleton