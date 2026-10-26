import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full h-[31.25rem] bg-[#252525] flex flex-col justify-center items-center font-pop">
      <div className="w-full h-[25rem] flex justify-center items-center gap-5">
        <div className="w-[25rem] h-[21.875rem]">
          <div className="w-[15.625rem] h-[3.125rem] flex gap-5 justify-center items-center">
            <div className="w-[3.125rem] h-[3.125rem] bg-[#303030] rounded-full flex justify-center items-center"><i className="fa-brands fa-x-twitter text-[#C1C1C1] hover:text-[#01D28E] transition-colors"></i></div>
            <div className="w-[3.125rem] h-[3.125rem] bg-[#303030] rounded-full flex justify-center items-center"><i className="fa-brands fa-facebook-f text-[#C1C1C1] hover:text-[#01D28E] transition-colors"></i></div>
            <div className="w-[3.125rem] h-[3.125rem] bg-[#303030] rounded-full flex justify-center items-center"><i className="fa-brands fa-instagram text-[#C1C1C1] hover:text-[#01D28E] transition-colors"></i></div>
          </div>
        </div>
        <div className="w-[25rem] h-[21.875rem] flex flex-col justify-center gap-5 p-5">
          <h2 className="text-2xl font-semibold text-white">Contact information</h2>
          <div className="w-[20rem] h-[15.625rem] flex flex-col justify-center items-center gap-3">
            <div className="w-[18.75rem] h-[4.375rem] flex justify-center items-center gap-1">
              <div className="w-[3.125rem] h-[3.125rem] flex justify-center items-center"><i className="text-white fa-solid fa-location-dot"></i></div>
              <div className="w-[14.375rem] h-[3.125rem]">
                <p className="text-[0.719rem] text-[#9D9D9D]">No 3, Taiwo Oladiran Street, Behind Brymor Hotel Off Ilobu Road, Agunbelewo</p>
              </div>
            </div>
            <div className="w-[18.75rem] h-[4.375rem] flex justify-center items-center gap-1">
              <div className="w-[3.125rem] h-[3.125rem] flex justify-center items-center"><i className="text-[#9D9D9D] fa-sharp fa-solid fa-phone"></i></div>
              <div className="w-[14.375rem] h-[3.125rem] flex flex-col justify-center">
                <p className="text-sm text-[#9D9D9D]">080-33-941875</p>
                <p className="text-sm text-[#9D9D9D]">070-870-13129</p>
              </div>
            </div>
            <div className="w-[18.75rem] h-[4.375rem] flex justify-center items-center gap-1">
              <div className="w-[3.125rem] h-[3.125rem] flex justify-center items-center"><i className="text-[#9D9D9D] fa-solid fa-at"></i></div>
              <div className="w-[14.375rem] h-[3.125rem] flex items-center">
                <p className="text-sm text-[#9D9D9D]">info@theplacesoteria.org</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[25rem] h-[21.875rem] bg-[#01D28E] flex flex-col gap-6 p-8">
          <h2 className="text-2xl font-semibold text-white">Business Hours</h2>
          <div className="flex flex-col gap-2">
            <h4 className="text-white text-xs">OPENING DAYS:</h4>
            <p className="text-white text-sm pl-5">Monday - Friday: 9am to 6pm</p>
            <p className="text-white text-sm pl-5">Saturday: 9am to 4pm</p>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-white text-xs">OFFICIAL HOLIDAY</h4>
            <p className="text-white text-sm pl-5">All Sunday Days</p>
            <p className="text-white text-sm pl-5">Operation are flexible</p>
          </div>
        </div>
      </div>
      <div>
        <p className="text-[#9D9D9D]">Copyright ©2026 by The Place Soteria <i className="fa-solid fa-heart"></i> All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer;