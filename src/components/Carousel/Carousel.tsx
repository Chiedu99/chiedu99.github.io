import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Carousel.module.css';

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [centerIndex, setCenterIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 768; // This is a simple way to determine if it's mobile view

  const settings = {
    dots: false,
    infinite: true,
    speed: 1300,
    slidesToShow: isMobile ? 1 : 3, // Shows 1 slide on mobile and 3 slides on desktop
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500, // This should match the CSS animation timing
    cssEase: "linear",
    beforeChange: (current: number, next: number) => {
      if (isMobile) {
        // On mobile, the next slide becomes the center by default
        setCenterIndex(next);
      } else {
        // On desktop, calculate the middle slide
        // next + 1 considering slidesToShow starts from 1 but array index starts from 0
        const newIndex = next + Math.floor((settings.slidesToShow - 1) / 2);
        setCenterIndex(newIndex);
      }
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Only show one slide on screens smaller than 768px
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
