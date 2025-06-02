import { Link } from 'react-router-dom';

export default function error404() {
  return (
    <div className='error404'>
      <Link to='/'><img src=".\src\assets\eror404.png" alt="eror" /></Link>
    </div>
  )
}