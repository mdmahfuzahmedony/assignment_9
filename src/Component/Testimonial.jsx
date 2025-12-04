import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const Testimonials = () => {

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Happy Mom",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      review: "Absolutely love the quality of toys here! My son is obsessed with the Lego set we bought. Fast delivery and great packaging. Highly recommended!",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Brown",
      role: "Toy Collector",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      review: "The action figures are authentic and reasonably priced. I've been looking for this specific Iron Man figure for months. Thank you ToyLand!",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Davis",
      role: "Mother of two",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      review: "Great customer service! I had a query about a product and they responded instantly. The educational toys are really helpful for my kids.",
      rating: 4
    },
    {
      id: 4,
      name: "David Wilson",
      role: "Regular Customer",
      image: "https://randomuser.me/api/portraits/men/85.jpg",
      review: "Best toy store online. The website is easy to navigate and the checkout process is smooth. Will definitely buy again.",
      rating: 5
    }
  ];

  return (
    <section className="my-20 py-3 rounded-[20px] bg-gray-200">
      <div className="max-w-[1600px] mx-auto ">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h4 className="text-yellow-500 font-bold uppercase tracking-wider text-sm mb-2">Testimonials</h4>
          <h2 className="text-4xl font-extrabold text-purple-900">
            What Our Customers <span className="text-yellow-500">Say</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true} // কার্ডগুলো মাঝখানে থাকবে
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="pb-12"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id} className="pb-10">
              <div className="bg-gray-900 p-8 rounded-2xl shadow-lg border-b-4 border-transparent hover:border-yellow-400 transition-all duration-300 relative group h-full">
                
                {/* Quote Icon */}
                <FaQuoteLeft className="text-purple-100 text-6xl absolute top-4 left-4 -z-0 group-hover:text-purple-200 transition-colors" />

                <div className="relative z-10 flex flex-col items-center text-center">
                  
                  {/* User Image */}
                  <div className="w-20 h-20 rounded-full border-4 border-purple-100 overflow-hidden mb-4 p-1">
                     <img src={review.image} alt={review.name} className="w-full h-full rounded-full object-cover" />
                  </div>

                  {/* Rating Stars */}
                  <div className="flex gap-1 text-yellow-400 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-600 italic mb-6 leading-relaxed">
                    "{review.review}"
                  </p>

                  {/* Name & Role */}
                  <div>
                    <h3 className="text-xl font-bold text-purple-900">{review.name}</h3>
                    <p className="text-sm text-gray-400 font-medium">{review.role}</p>
                  </div>

                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default Testimonials;