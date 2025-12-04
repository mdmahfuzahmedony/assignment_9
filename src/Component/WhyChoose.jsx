import React from 'react';
import { FaShippingFast, FaHeadset, FaUndoAlt, FaShieldAlt } from 'react-icons/fa';

const WhyChoose = () => {

  const features = [
    {
      id: 1,
      icon: <FaShippingFast />,
      title: "Free Shipping",
      desc: "Free shipping on all orders over $99. We deliver happiness to your doorstep quickly and safely."
    },
    {
      id: 2,
      icon: <FaUndoAlt />,
      title: "Easy Returns",
      desc: "Not satisfied? No worries! Return any item within 30 days for a full refund or exchange."
    },
    {
      id: 3,
      icon: <FaShieldAlt />,
      title: "Secure Payment",
      desc: "We ensure 100% secure payment with advanced encryption. Your data is safe with us."
    },
    {
      id: 4,
      icon: <FaHeadset />,
      title: "24/7 Support",
      desc: "Our support team is available round the clock to assist you with any queries or issues."
    }
  ];

  return (
    <section className="my-20 rounded-[20px] py-10 bg-gray-900 relative overflow-hidden">
      
      {/* Decorative Circle (Background) */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-800 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-500 rounded-full blur-3xl opacity-10 translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-[1600px] mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            Why Choose <span className="text-yellow-400">ToyLand?</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We are dedicated to providing the best shopping experience for you and your little ones.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="bg-purple-800/50 backdrop-blur-sm p-8 rounded-2xl border border-purple-700 hover:border-yellow-400 hover:bg-purple-800 transition-all duration-300 group text-center"
            >
              {/* Icon Circle */}
              <div className="w-16 h-16 mx-auto bg-white text-purple-900 rounded-full flex items-center justify-center text-3xl mb-6 shadow-lg group-hover:scale-110 group-hover:bg-yellow-400 group-hover:text-purple-900 transition-all duration-300">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-400 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChoose;