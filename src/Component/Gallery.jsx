import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NavLink } from 'react-router';

const Gallery = () => {
    
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    // মাত্র ৪টি ইমেজের ডাটা
    const galleryImages = [
        { id: 1, src: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?q=80&w=2070&auto=format&fit=crop", title: "Creative Play" },
        { id: 2, src: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=2070&auto=format&fit=crop", title: "Wooden Classics" },
        { id: 3, src: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=2070&auto=format&fit=crop", title: "Action Figures" },
        { id: 4, src: "https://images.unsplash.com/photo-1555445054-01bf80a489cc?q=80&w=2071&auto=format&fit=crop", title: "Soft Buddies" }
    ];

    return (
        <section className="my-20  py-10  shadow-base-200  max-w-[1600px] mx-auto rounded-[20px] bg-p overflow-hidden relative">
            
             {/* Decorative Circle (Background) */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-800 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div> 
      
      <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-800 rounded-full blur-3xl opacity-10 translate-x-1/2 translate-y-1/2"></div> 
      
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-500 rounded-full blur-3xl opacity-10 translate-x-1/2 translate-y-1/2"></div>

            <div className="max-w-[1400px] mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row gap-12 xl:gap-24 items-center lg:items-start">
                    
                    {/* LEFT SIDE: Text Content (Sticky) */}
                    <div className="lg:w-2/5 lg:sticky lg:top-32 space-y-8 text-center lg:text-left" data-aos="fade-right">
                        <div>
                            <h4 className="text-yellow-500 font-bold tracking-widest uppercase mb-3 text-sm">ToyLand Gallery</h4>
                            <h2 className="text-4xl md:text-6xl font-extrabold text-purple-900 leading-tight">
                                Moments of <br/>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-yellow-500">
                                    Pure Happiness
                                </span>
                            </h2>
                            <div className="w-24 h-1.5 bg-yellow-400 rounded-full mt-6 mx-auto lg:mx-0"></div>
                        </div>

                        <p className="text-gray-600 text-lg leading-relaxed">
                            Discover our curated collection of premium toys. From educational kits to cuddly companions, we have everything to spark your child's imagination.
                        </p>

                        <div className="flex justify-center lg:justify-start gap-8 py-4">
                            <div className="text-center lg:text-left">
                                <h3 className="text-4xl font-black text-purple-900">100%</h3>
                                <p className="text-sm text-gray-500 uppercase tracking-wide">Safe Materials</p>
                            </div>
                            <div className="w-px h-12 bg-gray-300"></div>
                            <div className="text-center lg:text-left">
                                <h3 className="text-4xl font-black text-purple-900">4.9</h3>
                                <p className="text-sm text-gray-500 uppercase tracking-wide">User Rating</p>
                            </div>
                        </div>

                        <div>
                            <NavLink to="/alltoy">
                                <button className="btn bg-purple-900 text-white hover:bg-yellow-400 hover:text-purple-900 border-none px-10 py-3 rounded-full text-lg font-bold shadow-xl transition-all transform hover:-translate-y-1">
                                    Browse All Toys
                                </button>
                            </NavLink>
                        </div>
                    </div>

                    {/* RIGHT SIDE: 4 Images Grid (Masonry Style) */}
                    <div className="lg:w-3/5 w-full">
                        <div className="grid grid-cols-2 gap-6">
                            
                            {/* Column 1: Images 1 & 2 */}
                            <div className="flex flex-col gap-6">
                                {galleryImages.slice(0, 2).map((item, index) => (
                                    <div 
                                        key={item.id} 
                                        className="group relative rounded-3xl overflow-hidden shadow-2xl h-[280px] md:h-[350px] cursor-pointer"
                                        data-aos="fade-up"
                                        data-aos-delay={index * 150}
                                    >
                                        <img 
                                            src={item.src} 
                                            alt={item.title} 
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        {/* Yellow Border Effect */}
                                        <div className="absolute inset-0 border-[6px] border-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl z-20 pointer-events-none"></div>
                                        
                                        {/* Text Overlay */}
                                        <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-10">
                                            <h3 className="text-white font-bold text-xl">{item.title}</h3>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Column 2: Images 3 & 4 (Offset Layout - একটু নিচে নামানো) */}
                            <div className="flex flex-col gap-6 pt-12 md:pt-20">
                                {galleryImages.slice(2, 4).map((item, index) => (
                                    <div 
                                        key={item.id} 
                                        className="group relative rounded-3xl overflow-hidden shadow-2xl h-[280px] md:h-[350px] cursor-pointer"
                                        data-aos="fade-up"
                                        data-aos-delay={(index * 150) + 200}
                                    >
                                        <img 
                                            src={item.src} 
                                            alt={item.title} 
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        {/* Yellow Border Effect */}
                                        <div className="absolute inset-0 border-[6px] border-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl z-20 pointer-events-none"></div>
                                        
                                        {/* Text Overlay */}
                                        <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-10">
                                            <h3 className="text-white font-bold text-xl">{item.title}</h3>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Gallery;