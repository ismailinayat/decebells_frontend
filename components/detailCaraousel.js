/*import React, { Component } from "react";
import Slider from "react-slick";

export default class DetailCaraousel extends Component {
  render() {

    const {mainImage, images} = this.props;
    const img01 = mainImage;
    const [img02, img03, img04, img05] = images;
    console.log(img01, img02, img03, img04, img05)
    const settings = {
      customPaging: function(i) {
        return (
          <a>
            <img src={`/images/img0${i + 1}.jpg`} />
          </a>
        );
      },
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src={`/images/${img01}`} />
          </div>
          <div>
            <img src={`/images/${img02}`} />
          </div>
          <div>
            <img src={`/images/${img03}`} />
          </div>
          <div>
            <img src={`/images/${img04}`} />
          </div>
          <div>
            <img src={`/images/${img05}`} />
          </div>
        </Slider>
      </div>
    );
  }
}*/

import Slider from "react-slick";

const DetailCaraousel = ({images, sku}) => {

    const settings = {
        customPaging: function(i) {
        return (
            <a>
            <img src={`/images/${sku}-image 0${i + 1}.jpg`} />
            </a>
        );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div>
        <Slider {...settings}>

          {images.map(img => (<div key={img}>
            <img src={`/images/${img}`} />
            </div>))}
            
        </Slider>
        </div>
    );
    }

    export default DetailCaraousel;

  
/*

<div>
            <img src={`/images/AMT-5873-image 1.jpg`} />
            </div>
            <div>
            <img src={`/images/AMT-5873-image 2.jpg`} />
            </div>
            <div>
            <img src={`/images/AMT-5873-image 3.jpg`} />
            </div>
            <div>
            <img src={`/images/AMT-5873-image 4.jpg`} />
            </div>
            <div>
            <img src={`/images/AMT-5873-image 5.jpg`} />
            </div>
*/