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
import FeaturedMovies from '../Featured Movies/FeaturedMovies';
import AboutePage from '../Aboute Page/AboutePage';
import PopularActors from '../PopularActors/PopularActors';
import { useEffect } from 'react';

const Bannar = () => {

    useEffect(() => {
        document.title = "Home | CENE HUB"
    }, [])


    return (
        <>
            <div className='pt-28' >
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
                    <SwiperSlide><img className='h-[80vh] w-full max-sm:object-cover' src={image1} alt="Slide 1" /></SwiperSlide>
                    <SwiperSlide><img className='h-[80vh] w-full max-sm:object-cover' src={image2} alt="Slide 2" /></SwiperSlide>
                    <SwiperSlide><img className='h-[80vh] w-full max-sm:object-cover' src={image3} alt="Slide 3" /></SwiperSlide>
                    <SwiperSlide><img className='h-[80vh] w-full max-sm:object-cover' src={image4} alt="Slide 4" /></SwiperSlide>
                </Swiper>
            </div>
            <div>
                <FeaturedMovies></FeaturedMovies>
            </div>
            <div>
                <AboutePage></AboutePage>
            </div>
            <div>
                <PopularActors></PopularActors>
            </div>
        </>

    ); object - cover
};

export default Bannar;