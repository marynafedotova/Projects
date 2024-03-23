import React from 'react';
import jsonData from '../assets/data/slider1.json';
import Slider from "react-slick";
import '../assets/style/index.scss'

export default function PropertiesSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true
  };
  const slides = Object.values(jsonData.slider1);

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index} className='slide'>
          <div className="slide-top">
            <img src={slide['slide-top'].img.src} alt={slide['slide-top'].img.alt} />
          </div>
          <div className="slide-mid">
            <h3>{slide['slide-mid'].h3}</h3>
            <p>{slide['slide-mid'].p}<a href={slide['slide-mid'].a.href}>{slide['slide-mid'].a.text}</a></p>
            
            <ul>
              <li><img src={slide['slide-mid'].ul.li1.img.src} alt={slide['slide-mid'].ul.li1.img.alt} />{slide['slide-mid'].ul.li1.text}</li>
              <li><img src={slide['slide-mid'].ul.li2.img.src} alt={slide['slide-mid'].ul.li2.img.alt} />{slide['slide-mid'].ul.li2.text}</li>
              <li><img src={slide['slide-mid'].ul.li3.img.src} alt={slide['slide-mid'].ul.li3.img.alt} />{slide['slide-mid'].ul.li3.text}</li>
            </ul>
          </div>
          <div className="slide-bottom">
            <div className='price-title'>Price
            <div className="price">{slide['slide-bottom'].Price.div.text}</div>
            </div>
            <a className="btn-property" href={slide['slide-bottom'].a.href}>{slide['slide-bottom'].a.text}</a>
          </div>
        </div>
      ))}
    </Slider>
  );
}
