import React from 'react';
import Banner from '@/components/ui/Banner';
import Testimony from '@/components/sections/Testimony';
import News from '@/components/sections/News';
import Offer from './Offer';

const Hero = () => {
  
  return (
    <>
      {/* Banner */}
      <Banner />

      {/* Offer */}
      <Offer />

      {/* Testimony */}
      <Testimony />

      {/* News */}
      <News />
    </>
  )
}

export default Hero;