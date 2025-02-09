import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import styles from "./Photos.module.css";

const Photos = ({ images }) => {
  return (
    <>
      <h1> Velkommen til Fusion Feast</h1>
      <div className={styles.photoContainer}>
        <Swiper
          modules={[EffectFade, Navigation, Pagination, Autoplay]}
          spaceBetween={8}
          slidesPerView={1}
          effect={"fade"}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop
          className={styles.swiperContainer}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index} className={styles.swiperSlide}>
              <div className={styles.imageContainer}>
                <img
                  src={img}
                  alt={`Slide ${index}`}
                  className={styles.image}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Photos;
