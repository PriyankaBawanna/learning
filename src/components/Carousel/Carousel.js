// Carousel.js
import styles from "./Carousel.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useEffect, useState } from "react";
import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";
import Card from "../Card/Card";

const Carousel = ({ data, component, type }) => {
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    if (swiper) {
      swiper.slideTo(0, 1);
    }
  }, [swiper, data]);

  return (
    <div className={styles.wrapper}>
      <Swiper
        style={{ padding: "0px 20px" }}
        initialSlide={0}
        slidesPerView={"auto"}
        spaceBetween={40}
        allowTouchMove
        onSwiper={setSwiper}
      >
        <CarouselLeftNavigation swiper={swiper} />
        <CarouselRightNavigation swiper={swiper} />
        {data.map((item) => (
          <SwiperSlide style={{ width: "auto" }} key={item.id}>
            {component(item)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
