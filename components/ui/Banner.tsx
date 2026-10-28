'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Slide {
  image: string;
  title: string;
  subtitle: string;
}

const slides: Slide[] = [
  {
    image: "/images/item9.jpeg",
    title: "Welcome to The Place Soteria Radiodiagnostics Center",
    subtitle: "Where we see beyond the surface",
  },
  {
    image: "/images/item7.jpeg",
    title: "Soteria Radiodiagnostics Center",
    subtitle: "Clear Images, Confident Care.",
  },
];

const Banner = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const slide: Slide = slides[activeSlide];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  
  return (
    <div className="relative w-full h-[34.375rem] bg-cover bg-center flex flex-col justify-center items-center gap-9 font-pop overflow-hidden">
      <Image
        key={activeSlide}
        src={slide.image}
        alt={slide.title}
        fill
        priority={activeSlide === 0}
        className="object-cover object-center -z-10"
      />
      
      <div className="absolute inset-0 bg-black/40 -z-10" />
      
      <h1 className="text-[2.813rem] text-gray-300 font-bold">{slide.title}</h1>
      <p className="text-[1.25rem] text-gray-300">{slide.subtitle}</p>
      <Link className="w-[15.625rem] h-[3.125rem] bg-[#01D28E] text-white flex justify-center items-center
        hover:bg-transparent
        hover:border
        hover:border-[#01D28E]
        hover:text-[#01D28E] cursor-pointer font-semibold transition-colors" href="/appointment">BOOK AN APPOINTMENT</Link>
      <div className="w-[6.25rem] h-[2.5rem] flex justify-center items-center gap-3">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setActiveSlide(index)}
            className={`w-[1.25rem] h-[1.25rem] bg-white rounded-full 
              ${index === activeSlide
                ? "bg-white"
                : "bg-white/40"}`} />
        ))}
      </div>
    </div>
  );
}

export default Banner;