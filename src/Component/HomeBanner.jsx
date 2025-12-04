import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css/effect-fade';
import { NavLink } from 'react-router';

const HomeBanner = () => {

  const sliderData = [
    {
      id: 1,
      title: "Best Toys for Kids",
      subtitle: "Unleash creativity with our latest collection of educational and fun toys.",
      image: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Action Figures & Heroes",
      subtitle: "Get your favorite superheroes and action figures at the best prices.",
      image: "https://images.unsplash.com/photo-1608889175123-8ee362201f81?q=80&w=2080&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Soft & Cuddly Plushies",
      subtitle: "Perfect gifts for your loved ones. Soft, durable, and adorable.",
      image: "https://images.unsplash.com/photo-1555445054-01bf80a489cc?q=80&w=2071&auto=format&fit=crop",
    }
  ];

  return (
    <div className="my-10 bg-gray-900  rounded-[20px]">
      <Swiper
        spaceBetween={0} // Full width, no space
        centeredSlides={true}
        effect={'fade'}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="mySwiper h-[550px] rounded-[20px] md:h-[550px]" // Height সেট করা হয়েছে
      >
        {sliderData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
              
              {/* Background Image with Blur */}
              <div 
                className="absolute inset-0 w-full h-full bg-cover bg-center blur-[3px] scale-110 transition-transform duration-1000"
                style={{ backgroundImage: `url(${slide.image})` }}
              ></div>

              {/* Dark Overlay (Purple Tint) for Readability */}
              <div className="absolute inset-0 bg-purple-900/60 bg-blend-multiply z-10"></div>

              {/* Content Box */}
              <div className="relative z-20 text-center px-4 max-w-4xl mx-auto space-y-6">
                
                {/* Title */}
                <h1 className="text-4xl md:text-7xl font-extrabold text-white drop-shadow-lg tracking-wide animate-fade-in-up">
                  {slide.title}
                </h1>
                
                {/* Subtitle */}
                <p className="text-gray-200 text-lg md:text-2xl font-medium drop-shadow-md">
                  {slide.subtitle}
                </p>

                {/* Buttons */}
                <div className="flex justify-center gap-4 mt-8">
                  <NavLink to="/alltoy">
                    <button className="btn bg-yellow-400 text-purple-900 border-none hover:bg-yellow-500 px-8 py-3 rounded-full text-lg font-bold shadow-xl transition transform hover:-translate-y-1">
                      Shop Now
                    </button>
                  </NavLink>
                  <NavLink to="/about">
                    <button className="btn btn-outline text-white border-2 border-white hover:bg-white hover:text-purple-900 px-8 py-3 rounded-full text-lg font-bold shadow-xl transition transform hover:-translate-y-1">
                      Learn More
                    </button>
                  </NavLink>
                </div>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeBanner;