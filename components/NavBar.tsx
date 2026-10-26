"use state";
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const NavBar = () => {
  
  return (
    <nav>
      <div className="flex justify-between px-[15.625rem] py-2 bg-[#FAFAFA]">
        <span className="font-pop text-[0.938rem]"><a>info@theplacesoteria.org</a> | <a>Help Desk</a> |</span>
        <div className='flex gap-[0.938rem] text-[0.938rem]'>
          <i className="fa-brands fa-facebook-f text-[#01D28E]"></i>
          <i className="fa-brands fa-x-twitter text-[#01D28E]"></i>
          <i className="fa-brands fa-instagram text-[#01D28E]"></i>
          <i className="fa-solid fa-user text-[#01D28E]"></i>
        </div>
      </div>
      <div className="h-[18.75rem] flex justify-center items-center gap-5 font-pop">
        <Image loading="eager" src="/images/logo2.jpeg" width={250} height={250} alt="logo" />
        <div className="w-[31.25rem] h-[15.625rem] flex gap-2">
          <div className="bg-[#EDFFF9] w-[3.125rem] h-[3.125rem] flex justify-center items-center rounded-[6.25rem]"><i className="fa-solid fa-location-dot text-[#01D28E] text-[1.25rem]"></i></div>
          <div className="w-[25rem] h-[6.25rem] flex flex-col gap-2">
            <h3 className="text-gray-400">ADDRESS</h3>
            <p className="">No 3, Taiwo Oladiran Street, Behind Brymor Hotel Off Ilobu Road, Agunbelewo</p>
          </div>
        </div>
        <div className="w-[21.875rem] h-[15.625rem] flex gap-2">
          <div className="bg-[#EDFFF9] w-[3.125rem] h-[3.125rem] flex justify-center items-center rounded-[6.25rem]"><i className="fa-sharp fa-solid fa-phone text-[#01D28E] text-[1.25rem]"></i></div>
          <div className="w-[15.625rem] h-[6.25rem] flex flex-col gap-2">
            <h3 className="text-gray-400">CALL US</h3>
            <p>080-339-41875</p>
            <p>070-870-13129</p>
          </div>
        </div>
      </div>
      <div className="bg-[#2D3E50] h-[3.125rem] flex justify-center items-center gap-2.5 font-pop">
        <Link className="w-[9.375rem] h-[3.125rem] flex justify-center items-center text-white text-[0.938rem] hover:bg-[#01D28E] transition-colors" href="/">HOME</Link>
        <Link className="w-[9.375rem] h-[3.125rem] flex justify-center items-center text-white text-[0.938rem] hover:bg-[#01D28E] transition-colors" href="/appointment">APPOINTMENT</Link>
        <Link className="w-[9.375rem] h-[3.125rem] flex justify-center items-center text-white text-[0.938rem] hover:bg-[#01D28E] transition-colors" href="/services">SERVICES</Link>
        <Link className="w-[9.375rem] h-[3.125rem] flex justify-center items-center text-white text-[0.938rem] hover:bg-[#01D28E] transition-colors" href="/blog">BLOG</Link>
        <Link className="w-[9.375rem] h-[3.125rem] flex justify-center items-center text-white text-[0.938rem] hover:bg-[#01D28E] transition-colors" href="/contact">CONTACT</Link>
      </div>
    </nav>
  );
};

export default NavBar;