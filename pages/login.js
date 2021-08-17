import useInputState from '../hooks/useInputState.js';
import Link from 'next/link'
import {HiOutlineUser} from 'react-icons/hi';
import {AiTwotoneUnlock} from 'react-icons/Ai';
import { toast, ToastContainer } from 'react-toastify';

import axios from 'axios';
import {useRouter} from 'next/router';


function LoginForm () {
  
  
  const [email, updateEmail] = useInputState('');
  const [password, updatePassword] = useInputState('');


  const router = useRouter();

  const login = async (e) => {
    try {
      const res = await axios.post('http://localhost:5000/api/v1/users/login/', 
      {email: e.target.email.value, password: e.target.password.value}, {withCredentials: true})
      window.location.replace("http://localhost:5000");


      console.log(res.data.data)
    } catch(err) {toast.error(err.response.data.message)};

  }



  const handleSubmit = (e) => {
    e.preventDefault();
    login(e)
  }

  return(
    <div className='form__screen'>
      <>
      <ToastContainer>

      </ToastContainer>
      </>
      <div className='form__container'>
        <h2 className='form__title'>Login</h2>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form__input-container'>
            <HiOutlineUser className='form__icon' size='1.5rem'/>
            <input className='form__input' name='email' type="email" value={email} placeholder='Enter your email' onChange={updateEmail}/>
            <label className='form__label' htmlFor="email">email</label>
          </div>
          <div className='form__input-container'>
            <AiTwotoneUnlock className='form__icon' size='1.5rem'/>
            <input className='form__input' name='password' type="password" value={password} placeholder='Enter your password' onChange={updatePassword}/>
            <label className='form__label' htmlFor="password">password</label>
          </div>
          <button type='Submit' className='form__button'> Login </button>
        </form>

        <h5 className='text'>Don't have an account? <Link href='/register'><a>Signup now</a></Link></h5>
      </div>

    </div>
  )
}

export default LoginForm;
