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
  let slidesToShow = 3;

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
      // Adjust centerIndex based on slidesToShow
      if (settings.slidesToShow === 1) {
        setCenterIndex(next); // On mobile, the next slide becomes the center by default
      } else {
        const newIndex = (next + Math.floor(slidesToShow / 2)) % images.length;
        setCenterIndex(newIndex);
      }
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          // Additional responsive settings can be added here if necessary
        },
      },
    ],
  };

  return (
    <div className={styles.carousel}>
      <Slider {...settings}>
        {images.map((img, idx) => (
          // Apply the centerSlide class if it's the only slide shown or it's the center in a multi-slide view
          <div key={idx} className={idx === centerIndex ? styles.centerSlide : styles.slide}>
            <img src={img} alt={`Slide ${idx}`} className={styles.image} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
