// App.tsx

import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import Carousel from './components/Carousel/Carousel'; // Import Carousel component
import SurveyButton from './components/Button';

function App() {
  // Correctly set the relative paths to the images in the public folder
  const carouselImages1 = [
    'carousel-images/carousel1/image1.png',
    'carousel-images/carousel1/image2.png',
    'carousel-images/carousel1/image3.png',
    'carousel-images/carousel1/image4.png',
    'carousel-images/carousel1/image5.png',
    'carousel-images/carousel1/image6.png',
    'carousel-images/carousel1/image7.png',
  ];

  const carouselImages2 = [
    'carousel-images/carousel2/image1.png',
    'carousel-images/carousel2/image2.png',
    'carousel-images/carousel2/image3.png',
    'carousel-images/carousel2/image4.png',
    'carousel-images/carousel2/image5.png',
    'carousel-images/carousel2/image6.png',
    'carousel-images/carousel2/image7.png',
  ];

  return (
    <div className="App">
      <Header />
      <Section
        lines={[
          'Create Any Social Event',
          'In Seconds',
          'From Imagination to Reality'
        ]}
        gradientWords={{
          'imagination': 'imagination',
          'reality': 'reality'
        }}
      >
        <Carousel images={carouselImages1} />
      </Section>
      <Section
        lines={[
          'A Constant Flow of Social Events',
          'Built by your community',
          'For your community'
        ]}
        gradientWords={{
          'built': 'builtBy',
          'by': 'builtBy',
          'for': 'forYour',
          'your': 'forYour'
        }}
      >
        <Carousel images={carouselImages2} />
      </Section>
      <Section
        lines={[
          'Because socializing should be as effortless as doom-scrolling',
          'Take our survey to tell us what we should enable for you and your community'
        ]}
        gradientWords={{
        }}
      >
      </Section>
      <SurveyButton />
      
    </div>
  );
}

export default App;
