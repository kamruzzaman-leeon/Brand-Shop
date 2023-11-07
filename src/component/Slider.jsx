import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCube, Autoplay, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cube';

import { useEffect, useState } from 'react';
import Button from './Button';

const Slider = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://brandshop-server-seven.vercel.app/advertisement')
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className='w-full flex justify-center items-center'>
                <span className="loading loading-bars loading-lg text-primary"></span>
            </div>
        ); // Display a loading indicator while data is being fetched.
    }

    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCube]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={true}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            effect={"cube"}
            cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 30,
                shadowScale: 0.7,
            }}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
        >
            {data &&
                data.length &&
                data.map((slide) => (
                    <SwiperSlide key={slide._id}>
                        <div className="bg-cover bg-center bg-no-repeat  h-96" style={{ backgroundImage: `url(${slide.image})` }}>
                            <div className="text-center lg:text-left text-indigo-600 h-full flex items-center">
                                <div className="max-w-md mx-auto">
                                    <h1 className="mb-5 text-5xl hover:text-6xl font-extrabold">{slide.title}</h1>
                                    <p className="mb-5">Upto <span className='text-4xl font-bold'>{slide.discount}%</span> Off</p>
                                    <Button>Shop Now</Button>
                                </div>
                            </div> 
                        </div>
                    </SwiperSlide>
                ))}
        </Swiper>
    );
};

export default Slider;
