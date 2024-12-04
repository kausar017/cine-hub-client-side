import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './swiper.css'
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import image1 from '../../../assets/carasol-1.jpg'
import image2 from '../../../assets/carasol-2.jpg'
import image3 from '../../../assets/carasol-3.webp'
import image4 from '../../../assets/carasol-4.jpg'

const Bannar = () => {
    return (
        <div className='' >
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img className='h-[100vh] w-full max-sm:object-cover' src={image1} alt="Slide 1" /></SwiperSlide>
                <SwiperSlide><img className='h-[100vh] w-full max-sm:object-cover' src={image2} alt="Slide 2" /></SwiperSlide>
                <SwiperSlide><img className='h-[100vh] w-full max-sm:object-cover' src={image3} alt="Slide 3" /></SwiperSlide>
                <SwiperSlide><img className='h-[100vh] w-full max-sm:object-cover' src={image4} alt="Slide 4" /></SwiperSlide>
            </Swiper>
        </div>
    ); object-cover
};

export default Bannar;