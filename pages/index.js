import Header from '../components/header.js';
import Category from '../components/category.js';
import { toast, ToastContainer } from 'react-toastify';
import { useRouter } from 'next/router'
import Slider from '../components/slider.js';
import SwiperHome from '../components/swiperHome.js';


export default function Home() {


  return (
    <>
      <Header></Header>
      <Category></Category>
      <SwiperHome></SwiperHome>
    </>
  )
}

//<SwiperHome></SwiperHome>