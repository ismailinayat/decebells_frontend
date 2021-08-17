import axios from 'axios';
import {QueryCache, useQuery} from 'react-query';
import {Swiper, SwiperSlide} from 'swiper/react';
import SliderCard from '../components/sliderCard';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Spinner from '../components/spinner';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

let query = 'Wireless';

const fetchProducts = async () => {
    if (query === 'Wired' || query === 'Wireless') {
        const {data} = await axios.get(`http://localhost:5000/api/v1/products?mainCategory=${query}`);
        return data;
    } else {
        const {data} = await axios.get(`http://localhost:5000/api/v1/products`);
        return data;
    }
}

const SwiperHome = function () {

    let {data, error, isLoading, isError} = useQuery('allProducts', fetchProducts);

    const slides = [];

    if (data) {

        for (let i = 0; i < data.data.products.length; i +=1) {
            console.log(data.data.products[i])
            slides.push(
                <SwiperSlide key={`slide-${i}`}>
    
                    <SliderCard data={data.data.products[i]}/>
                </SwiperSlide>
            )
        }
    }

    const handleClick = (e) => {
        e.preventDefault();
        const allButtons = Array.from(e.target.parentElement.children);
        allButtons.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        query = e.target.innerHTML;

        //console.log(...e.target.classList, 'active')
    }
    return (



        <div className="swiper-home-container">
            <div className="swiper-heading">
                Featured Prducts
            </div>
{/* 
            <div className="swiper-select-category">
                <button onClick={handleClick} className="category--button active">All</button>
                <button onClick={handleClick} className="category--button">Wireless</button>
                <button onClick={handleClick} className="category--button">Wired</button>
            </div> */}

            <div className="swiper--slider">
                {isLoading ? (

                    <Spinner/>

                ):

                    <Swiper
                        // spaceBetween={30}
                        slidesPerView={4}
                        navigation
                        //loop={true}
                        //pagination={{ clickable: true }}
                        //scrollbar={{ draggable: true }}
                        //onSwiper={(swiper) => console.log(swiper)}
                        //onSlideChange={() => console.log('slide change')}

                    >
                        {slides}

                    </Swiper>}

            </div>
           
           
        </div>
    )
}

export default SwiperHome;

/*

*/