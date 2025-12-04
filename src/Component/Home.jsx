import React, { useEffect } from "react";
import "swiper/css";
import { NavLink } from "react-router";
import HomeProduct from "./HomeProduct";
import "../Component/Custom.css";
import HomeBanner from "./HomeBanner";
import Gallery from "./Gallery";
import Discount_Section from "./Discount_Section";
import Testimonials from "./Testimonial";
import WhyChoose from "./WhyChoose";

const Home = () => {


  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {/* Featured Toys Slider */}
      {/* <div className="my-10 bg-gray-100 rounded-2xl mt-20 shadow-md">
        {toyP && toyP.length > 0 ? (
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000 }}
            loop
            spaceBetween={30}
            slidesPerView={1}
          >
            {toyP.map((toy) => (
              <SwiperSlide key={toy.toyId}>
                <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-xl shadow-lg p-4 md:p-6 lg:p-8">
     
                  <div className="w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-800">
                      {toy.toyName}
                    </h2>
                    <p className="text-gray-600 mt-2 text-Sm sm:text-base md:text-lg">
                      {toy.description}
                    </p>
                    <p className="text-lg sm:text-xl md:text-2xl text-blue-600 font-semibold mt-3 mb-5">
                      ${toy.price}
                    </p>
                    <NavLink
                      to={`/toys/${toy.toyId}`}
                      className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all text-sm sm:text-base md:text-lg"
                    >
                      View More
                    </NavLink>
                  </div>

   
                  <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
                    <img
                      src={toy.pictureURL}
                      alt={toy.toyName}
                      className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] object-cover rounded-xl"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="text-center text-gray-500 py-10">
            <p>No featured toys to display right now.</p>
          </div>
        )}
      </div> */}
      <HomeBanner></HomeBanner>
      <Gallery></Gallery>

      <div className="my-20 max-w-[1600px] mx-auto">
        <div className="flex justify-between items-center my-3"><p className="text-2xl sm:text-3xl font-bold ">New Arrivals </p>
          <div className="flex justify-center items-center mt-6">
          <NavLink
            to="/alltoy"
            className="px-8 sm:px-10 py-2 rounded-lg bg-yellow-400 text-black text-center hover:bg-blue-800 transition-all"
          >
            All Toy
          </NavLink>
        </div></div>
        
        <HomeProduct />
      
      </div>
      <Discount_Section></Discount_Section>
      <Testimonials></Testimonials>
      <WhyChoose></WhyChoose>
    </div>
  );
};

export default Home;
