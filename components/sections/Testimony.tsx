import React, { useState } from 'react';
import { Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

const slides: Testimonial[][] = [
  [  
    {
      quote: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
      name: "Roger Scott",
      role: "Marketing Manager",
      avatar: "",
    },
    {
      quote: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
      name: "Roger Scott",
      role: "Marketing Manager",
      avatar: "",
    },
    {
      quote: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
      name: "Roger Scott",
      role: "Marketing Manager",
      avatar: "",
    },
  ],
  [
    {
      quote: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
      name: "Roger Scott",
      role: "Marketing Manager",
      avatar: "",
    },
    {
      quote: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
      name: "Roger Scott",
      role: "Marketing Manager",
      avatar: "",
    },
    {
      quote: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
      name: "Roger Scott",
      role: "Marketing Manager",
      avatar: "",
    },
  ],
]

const Testimony = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const currentTestimonials = slides[activeSlide];
  
  return (
    <div className="w-full h-[33.375rem] flex flex-col justify-center items-center gap-4 bg-[#343A40] font-pop">
      <h3 className="text-[0.875rem] mt-5 text-[#01D28E] font-bold">TESTIMONIES</h3>
      <h3 className="text-[2.188rem] text-white">Happy Clients & Feedbacks</h3>
      <div className="w-full h-[31.25rem] flex justify-center items-center gap-3">
        {currentTestimonials.map((testimonial, index) => (
          <div key={index} className="w-[25rem] h-[15.625rem] border border-white/20 p-8 relative">
            <div className="w-12 h-12 flex justify-center items-center bg-[#01D28E] absolute -top-4 left-8">
              <Quote className="w-5 h-5 text-white" fill="white" />
            </div>
            <p className="mt-8 mb-6 text-[#A5A8AB]">{testimonial.quote}</p>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-yellow-600 rounded-full"></div>
              <div>
                <h4 className="text-white text-[1.25rem]">{testimonial.name}</h4>
                <p className="text-[#A5A8AB] text-[0.938rem]">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-[6.25rem] h-[2.5rem] flex flex justify-center items-center gap-3 pb-8">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setActiveSlide(index)}
            className={`w-[1.25rem] h-[1.25rem] bg-purple-800 rounded-full transition-colors 
              ${index === activeSlide
                ? "bg-purple-800"
                : "bg-white/40"}`} />
        ))}
      </div>
    </div>
  )
}

export default Testimony;