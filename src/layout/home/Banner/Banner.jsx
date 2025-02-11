import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../../assets/slider1.jpg";
import img2 from "../../../assets/slider2.jpg";
import img3 from "../../../assets/slider3.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./banner..css";

// import required modules
import { Parallax, Pagination, Navigation, Autoplay } from "swiper/modules";
const Banner = () => {
  return (
    <div className="h-screen">
      <>
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          speed={600}
          parallax={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Parallax, Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div
              slot="container-start"
              className="parallax-bg inset-0 bg-black opacity-50"
              style={{
                "background-image": `url(${img1})`,
              }}
              data-swiper-parallax="-23%"
            ></div>
            <div className="flex h-full flex-col justify-center items-center">
              <div className="title text-white" data-swiper-parallax="-300">
                <p className="font-bold max-sm:text-6xl"> Book Reading</p>
              </div>
              <div className="text text-white" data-swiper-parallax="-100">
                <p className="font-semibold max-sm:text-3xl">Immerse Yourself in the Joy of Reading</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              slot="container-start"
              className="parallax-bg inset-0 bg-black opacity-50"
              style={{
                "background-image": `url(${img2})`,
              }}
              data-swiper-parallax="-23%"
            ></div>
             <div className="flex h-full flex-col justify-center items-center">
              <div className="title text-white" data-swiper-parallax="-300">
                <p className="font-bold max-sm:text-6xl">Book Store</p>
              </div>
              <div className="text text-white" data-swiper-parallax="-100">
                <p className="font-semibold max-sm:text-3xl">Your Gateway to Endless Stories.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              slot="container-start"
              className="parallax-bg inset-0 bg-black opacity-50"
              style={{
                "background-image": `url(${img3})`,
              }}
              data-swiper-parallax="-23%"
            ></div>
            <div className="flex h-full flex-col justify-center items-center">
              <div className="title text-white" data-swiper-parallax="-300">
                <p className="font-bold max-sm:text-6xl">Book Guide</p>
              </div>
              <div className="text text-white" data-swiper-parallax="-100">
                <p className="font-semibold max-sm:text-3xl">Navigate Your Journey Through Books.</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default Banner;
