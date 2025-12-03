import React from 'react';
// Swiper React components এবং styles ইম্পোর্ট
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css/effect-fade';
import { NavLink } from 'react-router';

const HomeBanner = () => {

  // স্লাইডারের ডাটা (আপনি পরে ইমেজ লিংক পরিবর্তন করে নিতে পারবেন)
  const sliderData = [
    {
      id: 1,
      title: "Best Toys for Kids",
      subtitle: "Unleash creativity with our latest collection of educational and fun toys.",
      image: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?q=80&w=2070&auto=format&fit=crop",
      color: "from-purple-900 to-indigo-900"
    },
    {
      id: 2,
      title: "Action Figures & Heroes",
      subtitle: "Get your favorite superheroes and action figures at the best prices.",
      image: "https://images.unsplash.com/photo-1608889175123-8ee362201f81?q=80&w=2080&auto=format&fit=crop",
      color: "from-violet-900 to-purple-800"
    },
    {
      id: 3,
      title: "Soft & Cuddly Plushies",
      subtitle: "Perfect gifts for your loved ones. Soft, durable, and adorable.",
      image: "https://images.unsplash.com/photo-1555445054-01bf80a489cc?q=80&w=2071&auto=format&fit=crop",
      color: "from-fuchsia-900 to-purple-900"
    }
  ];

  return (
    <div className="w-full">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        effect={'fade'}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="mySwiper h-[500px] md:h-[600px]"
      >
        {sliderData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div 
              className={`w-full h-full bg-gradient-to-r ${slide.color} flex items-center relative overflow-hidden`}
            >
              {/* Decorative Circles (Optional Background Effect) */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-yellow-400 opacity-10 rounded-full -ml-20 -mb-20 blur-3xl"></div>

              <div className="max-w-[1400px] mx-auto px-4 w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center z-10">
                
                {/* Left Side: Text Content */}
                <div className="text-white space-y-6 text-center md:text-left order-2 md:order-1">
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    {slide.title} <br />
                    <span className="text-yellow-400">Summer Sale</span>
                  </h1>
                  <p className="text-gray-200 text-lg md:text-xl max-w-lg mx-auto md:mx-0">
                    {slide.subtitle}
                  </p>
                  <div>
                    <NavLink to="/alltoy">
                      <button className="btn bg-yellow-400 text-purple-900 hover:bg-yellow-500 border-none px-8 py-3 text-lg font-bold rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300">
                        Shop Now
                      </button>
                    </NavLink>
                  </div>
                </div>

                {/* Right Side: Image */}
                <div className="order-1 md:order-2 flex justify-center md:justify-end">
                  <div className="relative w-full max-w-[400px] md:max-w-[500px] h-[300px] md:h-[400px]">
                    {/* Image Border/Frame Effect */}
                    <div className="absolute inset-0 border-4 border-yellow-400 rounded-2xl transform translate-x-4 translate-y-4 hidden md:block"></div>
                    <img 
                      src={slide.image} 
                      alt={slide.title} 
                      className="w-full h-full object-cover rounded-2xl shadow-2xl relative z-10 border-4 border-white/20"
                    />
                  </div>
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