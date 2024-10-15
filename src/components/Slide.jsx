import React, {useEffect} from "react";
//import images03 from "../assets/images";


function Slide() {
    useEffect(() => {
    var swiper = new Swiper(".default-carousel", {
          loop: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });
      }, []);
    return (
        <>
        <div className="w-full relative">
      <div className="swiper default-carousel swiper-container">
      <div className="swiper-wrapper">
       <div className="swiper-slide">
         <div className="bg-indigo-50 rounded-2xl h-auto flex justify-center items-center">
           <span className="text-3xl font-semibold text-indigo-600"><img src="https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/refs/heads/main/public/home-slide-1.jpeg"/></span>
         </div>
       </div>
       <div className="swiper-slide">
         <div className="bg-indigo-50 rounded-2xl h-auto flex justify-center items-center">
           <span className="text-3xl font-semibold text-indigo-600"><img src="https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/refs/heads/main/public/home-slide-2.jpeg"/></span>
         </div>
       </div>
       <div className="swiper-slide">
         <div className="bg-indigo-50 rounded-2xl h-auto flex justify-center items-center">
           <span className="text-3xl font-semibold text-indigo-600"><img src="https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/refs/heads/main/public/home-slide-3.jpeg"/></span>
         </div>
       </div>
      </div>
      <div className="flex items-center gap-8 lg:justify-start justify-center">
       <button id="slider-button-left" className="swiper-button-prev group !p-2 flex justify-center items-center border border-solid border-indigo-600 !w-12 !h-12 transition-all duration-500 rounded-full !top-2/4 !-translate-y-8 !left-5 hover:bg-indigo-600 " data-carousel-prev>

       </button>
       <button id="slider-button-right" className="swiper-button-next group !p-2 flex justify-center items-center border border-solid border-indigo-600 !w-12 !h-12 transition-all duration-500 rounded-full !top-2/4 !-translate-y-8  !right-5 hover:bg-indigo-600" data-carousel-next>
         
       </button>
      </div>
      <div className="swiper-pagination"></div>
      </div>
      </div>

        </>
    )
}

export default Slide