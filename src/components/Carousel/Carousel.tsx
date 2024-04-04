import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Carousel.module.css';

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [centerIndex, setCenterIndex] = useState(0);
  const slidesToShow = 3;

  const settings = {
    dots: false,
    infinite: true,
    speed: 1300,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500, // Ensure this matches the CSS animation timing
    cssEase: "linear",
    beforeChange: (current: number, next: number) => {
      const newIndex = (next + Math.floor(slidesToShow / 2)) % images.length;
      setCenterIndex(newIndex);
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.carousel}>
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div key={idx} className={idx === centerIndex ? styles.centerSlide : styles.slide}>
            <img src={img} alt={`Slide ${idx}`} className={styles.image} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
