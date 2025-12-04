import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router';

const Discount_Section = () => {
  // কাউন্টডাউন টাইমার লজিক
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // এখানে ডেট সেট করুন (যেমন: আগামী ৩ দিন পর অফার শেষ হবে)
    const targetDate = new Date().getTime() + 3 * 24 * 60 * 60 * 1000; 

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className=" w-full md:py-24 bg-gradient-to-r rounded-[20px] from-purple-900 via-yellow-700 to-purple-800 relative overflow-hidden">
      
      {/* Background Decorative Shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-yellow-400 opacity-5 rounded-full blur-3xl"></div>

      <div className="max-w-[1600px] mx-auto  relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Left Content (Text & Timer) */}
          <div className="flex-1 text-center md:text-left text-white space-y-6">
            <h4 className="text-yellow-400 font-bold tracking-widest uppercase text-lg animate-pulse">
              Limited Time Offer
            </h4>
            <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Special Edition <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
                Super Toy Sale!
              </span>
            </h2>
            <p className="text-gray-300 text-lg max-w-lg mx-auto md:mx-0">
              Grab your favorite toys at an unbeatable price. Up to <span className="text-yellow-400 font-bold">50% OFF</span> on selected items. Don't miss out!
            </p>

            {/* Countdown Timer Boxes */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Min', value: timeLeft.minutes },
                { label: 'Sec', value: timeLeft.seconds }
              ].map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 w-20 md:w-24 text-center">
                  <span className="block text-3xl font-bold text-yellow-400">{item.value}</span>
                  <span className="text-xs uppercase text-gray-300">{item.label}</span>
                </div>
              ))}
            </div>

            {/* Button */}
            <div className="pt-6">
              <NavLink to="/alltoy">
                <button className="btn bg-yellow-400 text-purple-900 hover:bg-yellow-500 border-none px-10 py-3 rounded-full font-bold text-lg shadow-lg hover:shadow-yellow-400/50 transition-all transform hover:-translate-y-1">
                  Shop Now
                </button>
              </NavLink>
            </div>
          </div>

          {/* Right Content (Image) */}
          <div className="flex-1 flex justify-center md:justify-end relative">
             {/* Floating Animation Image */}
             <div className="relative w-full max-w-md animate-[bounce_3s_infinite]">
                {/* Yellow Circle Behind Image */}
                <div className="absolute inset-0 bg-yellow-400 rounded-full opacity-20 blur-2xl transform scale-90"></div>
                <img 
                  src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=2070&auto=format&fit=crop" 
                  alt="Exclusive Toy" 
                  className="relative z-10 w-full object-contain drop-shadow-2xl rounded-3xl rotate-6 hover:rotate-0 transition-all duration-500"
                />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Discount_Section;