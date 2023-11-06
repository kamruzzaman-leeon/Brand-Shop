import PropTypes from 'prop-types';
import { Navigation, Pagination, Scrollbar, Autoplay} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Slider = ({ slider }) => {
  return (
    <Swiper      
      spaceBetween={50}
     
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
      navigation={true}
    //   slidesPerView={3}
      onSlideChange={() =>{/* console.log('slide change')*/}}
      onSwiper={(swiper) =>{/* console.log(swiper)*/}}
      modules={[Navigation, Pagination, Scrollbar, Autoplay]}
    >
      {slider &&
        slider.length &&
        slider.map((slide) => (
          <SwiperSlide key={slide._id}>
            {/* <div className="card border shadow-xl min-h-max">
              <figure>
                <img
                  className="w-full h-48"
                  src={slide.brand_img}
                  alt={slide.brand}
                />
              </figure>
              <div className="card-body text-center">
                <h2 className="card-title text-auto ">{slide.brand}</h2>
              </div>
            </div> */}
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

Slider.propTypes = {
  slider: PropTypes.array,
};

export default Slider;
