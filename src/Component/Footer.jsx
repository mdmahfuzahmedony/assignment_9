import React, { useEffect } from "react";
// import "../Component/Custom.css"; // যদি প্রয়োজন না হয় বাদ দিতে পারেন
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import { SiAmericanexpress, SiApplepay, SiGooglepay, SiMastercard, SiPaypal, SiVisa } from "react-icons/si";

const Footer = () => {
  useEffect(() => {
    // Footer সাধারণত টাইটেল চেঞ্জ করে না, তবে আপনি চাইলে রাখতে পারেন
    // document.title = "ToyStore"; 
  }, []);

  return (
    // Main Footer Background (Darker Purple to match Header)
    <footer className="bg-purple-900 text-white pt-16 pb-8 border-t border-purple-800">
      
      {/* Container aligned with Header (1400px) */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          
          {/* Brand & Social Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <span className="text-3xl font-black text-white">
                Toy <span className="text-yellow-400">Land</span>
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Toy Verse System A/S, DK-7190 Billund, Denmark. Must be 18 years or older to purchase online.
            </p>
            
            {/* Social Icons (White to Yellow Hover) */}
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/" className="bg-purple-800 p-2 rounded-full text-white hover:text-yellow-400 hover:bg-purple-700 transition duration-300">
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a href="https://x.com/" className="bg-purple-800 p-2 rounded-full text-white hover:text-yellow-400 hover:bg-purple-700 transition duration-300">
                <FaTwitter className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/" className="bg-purple-800 p-2 rounded-full text-white hover:text-yellow-400 hover:bg-purple-700 transition duration-300">
                <FaInstagram className="w-4 h-4" />
              </a>
              <a href="#" className="bg-purple-800 p-2 rounded-full text-white hover:text-yellow-400 hover:bg-purple-700 transition duration-300">
                <FaLinkedinIn className="w-4 h-4" />
              </a>
              <a href="https://www.youtube.com/" className="bg-purple-800 p-2 rounded-full text-white hover:text-yellow-400 hover:bg-purple-700 transition duration-300">
                <FaYoutube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* About Us */}
          <div>
            <h4 className="font-bold text-lg text-yellow-400 mb-4">About Us</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 hover:translate-x-1 transition-all inline-block text-sm">Privacy policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 hover:translate-x-1 transition-all inline-block text-sm">Terms and conditions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 hover:translate-x-1 transition-all inline-block text-sm">Toy Land News</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 hover:translate-x-1 transition-all inline-block text-sm">Sustainability</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 hover:translate-x-1 transition-all inline-block text-sm">Supply Chain</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-lg text-yellow-400 mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 hover:translate-x-1 transition-all inline-block text-sm">Replacement parts</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 hover:translate-x-1 transition-all inline-block text-sm">Shipping & Returns</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 hover:translate-x-1 transition-all inline-block text-sm">Payment Methods</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 hover:translate-x-1 transition-all inline-block text-sm">Product Recalls</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 hover:translate-x-1 transition-all inline-block text-sm">Gift Card</a></li>
            </ul>
          </div>

          {/* Attractions */}
          <div>
            <h4 className="font-bold text-lg text-yellow-400 mb-4">Attractions</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 hover:translate-x-1 transition-all inline-block text-sm">Toy Land House</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 hover:translate-x-1 transition-all inline-block text-sm">Toy Land Parks</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 hover:translate-x-1 transition-all inline-block text-sm">Discovery Centers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 hover:translate-x-1 transition-all inline-block text-sm">Toy Land Catalogs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 hover:translate-x-1 transition-all inline-block text-sm">Find a Toy Land Store</a></li>
            </ul>
          </div>

          {/* More from us */}
          <div>
            <h4 className="font-bold text-lg text-yellow-400 mb-4">More from us</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 hover:translate-x-1 transition-all inline-block text-sm">Toy Land Education</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 hover:translate-x-1 transition-all inline-block text-sm">Toy Land Foundation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 hover:translate-x-1 transition-all inline-block text-sm">Affiliate Program</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 hover:translate-x-1 transition-all inline-block text-sm">Braille Bricks</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 hover:translate-x-1 transition-all inline-block text-sm">Toy Land Life</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section - Payments & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-purple-800">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Toy Land. All rights reserved.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <span className="text-gray-400 text-sm">Accepted Payments:</span>
            <div className="flex gap-3">
              <SiApplepay className="w-8 h-8 text-white opacity-80 hover:opacity-100 transition" title="Apple Pay" />
              <SiGooglepay className="w-8 h-8 text-white opacity-80 hover:opacity-100 transition" title="Google Pay" />
              <SiVisa className="w-8 h-8 text-white opacity-80 hover:opacity-100 transition" title="Visa" />
              <SiMastercard className="w-8 h-8 text-white opacity-80 hover:opacity-100 transition" title="Mastercard" />
              <SiAmericanexpress className="w-8 h-8 text-white opacity-80 hover:opacity-100 transition" title="American Express" />
              <SiPaypal className="w-8 h-8 text-white opacity-80 hover:opacity-100 transition" title="PayPal" />
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;