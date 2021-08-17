import {useState} from 'react';
import Link from 'next/link';

export default function Header() {

  const [hover, setHover] = useState(false)

  const toggleHover = () => {
    setHover(!hover)
  }
  let rightStyle, leftStyle;
  if (hover) {
    rightStyle = {width: '65%'}
    leftStyle = {width: '35%'}
  }

  return (

    <header className='header'>
      <div className='header__left' style={leftStyle}>
        <figure className='header__left-item'>
          <img src='/images/red_tws.jpg' className='header__left-item-photo'></img>
        </figure>
        <Link href='/shop/wireless'><a className='header__button'>SHOP NOW</a></Link>
      </div>
      <div className='header__right' onMouseEnter={toggleHover} onMouseLeave={toggleHover} style={rightStyle}>
        <figure className='header__right-item'>
          <img src='/images/women_headphones.jpg' className='header__right-item-photo'></img>
        </figure>
        <Link href='/shop/wired'><a className='header__button'>SHOP NOW</a></Link>
      </div>
    </header>
  )
}


