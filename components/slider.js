import axios from 'axios';
import {useQuery} from 'react-query';
import SliderCard from '../components/sliderCard';
import Spinner from '../components/spinner';



const fetchProducts = async () => {
    const {data} = await axios.get('http://localhost:3000/api/v1/products');
    return data;
}

const Slider = function () {

    let {data, error, isLoading, isError} = useQuery('allProducts', fetchProducts);

    const slides = [];

    if (data) {

        for (let i = 0; i < data.data.products.length; i +=1) {
            console.log(data.data.products[i])
            slides.push(
                <div className='slide'>
    
                    <SliderCard data={data.data.products[i]}/>
                </div>
            )
        }
    }
    return (



        <div className="swiper-home-container">
            <div className="swiper-heading">
                Featured Prducts
            </div>

            <div className="swiper-select-category">
                <button className="category--button">All</button>
                <button className="category--button">Wireless</button>
                <button className="category--button">Wired</button>
            </div>

            <div className="slider--container">
                {isLoading ? (

                    <Spinner/>

                ):

                
                        [slides]


                    }
            </div>
           
        </div>
    )
}

export default Slider;

/*

*/