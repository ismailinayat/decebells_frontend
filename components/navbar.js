import Link from 'next/link';
import {useContext, useState, useEffect} from 'react';
import Image from 'next/image';
import {FaUserAlt} from 'react-icons/fa';
import {RiLogoutBoxRLine} from 'react-icons/ri';
import {IoMdCart} from 'react-icons/io';
import {CartContext} from '../contexts/CartContext';
import {useQuery} from 'react-query';
import { toast, ToastContainer } from 'react-toastify';
import {useRouter} from 'next/router';
import axios from 'axios';



function Navbar () {

  const {cartItems} = useContext(CartContext);
  const cartLength = cartItems.length;
  const router = useRouter();

  const [dropdownOpen, setDropdownOpen] = useState(false)

  const logoutHandler = async() => {
    try {
      await axios.get('http://localhost:5000/api/v1/users/logout')
      router.reload();


    } catch(err) {toast.error('Something went wrong')}
  }

  const handleClick = (e) => {
    setDropdownOpen(!dropdownOpen)
  }

  const userLoggedIn = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/v1/users/isLoggedIn')
      return res.data.data.freshUser;

    } catch(err) {console.log(err.response)}

  
  }


  const {data, isLoading, status, isError} = useQuery('user', userLoggedIn)

  //console.log(status)
  //console.log(data)
  //console.log(isLoading)
  //console.log(isError)

  return(
    <div className='nav__container'>
      <>
      <ToastContainer></ToastContainer>
      </>
      <div className="navbar">

        <div className="navigation">

          <input type="checkbox" className="navigation__checkbox" id="navi-toggle"/>
          <label onClick={handleClick} htmlFor="navi-toggle" className="navigation__button"><span className="navigation__icon">&nbsp;</span></label>
          <div className="navigation__background">&nbsp;</div>

        </div>


        <div className="navbar__logo-container">
          <Link href='/'>
            <a className='navbar__logo'>
              <Image className='navbar__logo-image' width={80} height={70} src='/logo.png'/>
            </a>
          </Link>
        </div>
        
        <div className="navbar__linksbox">
          <Link href='/shop'><a className='navbar__linksbox__link'>SHOP</a></Link>
          <Link href='/about'><a className='navbar__linksbox__link'>About Us</a></Link>
        </div>


          <div className="navbar__icon-container">

            {data ? 
            
            <Link href='/profile'>
              <div className="navbar__icon-box">
                
                <FaUserAlt className='navbar__icon' size='2.5rem'/> 
              </div>
            </Link>

              :

              <Link href='/login'>
              <div className="navbar__icon-box">
                
                <h4 className='login'>Login</h4>
              </div>
            </Link>
            }
            
            <Link href='/cart'>
              <div className="navbar__icon-box">
                <IoMdCart className='navbar__icon' size='2.5rem'/>
                <span className='navbar__notification'>{cartLength}</span>
              </div>
            </Link>

            {data ? 
              <Link href='#'>
              <div className="navbar__icon-box" onClick={logoutHandler} >
                <RiLogoutBoxRLine className='navbar__icon' size='2.5rem'/>

              </div>
              </Link>
            : null
          }
          </div>
          
      </div>

          {
            dropdownOpen &&
            
            <div className="dropdown">
              <div className="dropdown__item"><Link href='/shop'><a className='navbar__linksbox__link'>1) SHOP</a></Link></div>
              <div className="dropdown__item"><Link href='/about'><a className='navbar__linksbox__link'>2) About Us</a></Link></div>
          </div>
          }
      

      
    </div>
  )
}

export default Navbar;