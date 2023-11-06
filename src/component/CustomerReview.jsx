import { useLoaderData } from "react-router-dom";
import PropTypes from 'prop-types';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const CustomerReview = () => {
  const data = useLoaderData()
  // console.log(data)
  const { testimonialData: slider, ...res } = data;
  console.log(slider)
  // const {_id:id , name ,testimonial, image}=slider
  return (
   <div>
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
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      navigation={true}
      //   slidesPerView={3}
      onSlideChange={() => {/* console.log('slide change')*/ }}
      onSwiper={(swiper) => {/* console.log(swiper)*/ }}
      modules={[Navigation, Pagination, Scrollbar, Autoplay]}
     
    >
      {slider &&
        slider.length &&
        slider.map((slide) => (
          <SwiperSlide key={slide._id}>
            <div className="min-w-screen  h-fit flex items-center justify-center px-5 py-24">
      <div className="flex flex-col h-96 justify-between w-full h- rounded-lg bg-slate-50 shadow-lg px-5 pt-5 pb-10 text-gray-800">
        {/* image */}
        
          <div className="overflow-hidden rounded-full w-32 h-32 -mt-16 mx-auto">
            <img src={slide.image} alt={slide.name} className="content-cover"/>
          </div>
       
        <div className="w-full mb-10 ">
          <div className="text-3xl gradient-text text-left leading-tight h-3">“</div>
          <p className="text-sm text-gray-600 text-center px-5">{slide.testimonial}</p>
          <div className="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">”</div>
        </div>
        <div className="w-full p-5">
          <p className="text-md text-indigo-500 font-bold text-center">{slide.name}</p>
          <p className="text-xs text-gray-500 text-center">@{slide.name.replace(' ', '.').toLowerCase()}</p>
        </div>
      </div>
    </div>
          </SwiperSlide>
        ))}
    </Swiper>
   </div>
  );
};
CustomerReview.propTypes = {
  slider: PropTypes.array,
};

export default CustomerReview;