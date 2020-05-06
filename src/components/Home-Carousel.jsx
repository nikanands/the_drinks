import React from 'react';

import Slider from 'react-slick';
import item1 from '../assets/item1.jpg';
import item2 from '../assets/item2.jpg';
import item3 from '../assets/item3.jpg';
import item4 from '../assets/item4.jpg';
import item5 from '../assets/item5.jpg';
import item6 from '../assets/item6.jpg';
import item7 from '../assets/item7.jpg';
import item8 from '../assets/item8.jpg';

class Carousel extends React.Component{
    render(){
        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            autoplay: true,
            autoplaySpeed: 2000
          };
        return(
            <Slider {...settings} className='slider'>
                <img src={item1} alt='Item1' className='image' />
                <img src={item2} alt='Item2' className='image' />
                <img src={item3} alt='Item3' className='image' />
                <img src={item4} alt='Item4' className='image' />
                <img src={item5} alt='Item5' className='image' />
                <img src={item6} alt='Item6' className='image' />
                <img src={item7} alt='Item7' className='image' />
                <img src={item8} alt='Item8' className='image' />
            </Slider>
        )
    }
}

export default Carousel;