import { SiFacebook, SiInstagram } from "react-icons/si";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t-2 border-primary-green">
      <div className="max-w-7xl mx-auto py-8 sm:py-10 md:py-12 px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="col-span-1 sm:col-span-2 animate-fadeInLeft">
            <div className="flex flex-col sm:flex-row items-center sm:items-start mb-4">
              <img 
                src="/images/freshco_logo-removebg-preview-1_1750517234057.png" 
                alt="Freshco Mushroom Logo" 
                className="h-10 sm:h-12 w-auto mb-2 sm:mb-0 sm:mr-3 hover:drop-shadow-[0_0_12px_rgba(16,185,129,0.5)] transition-all duration-300 drop-shadow-[0_0_6px_rgba(16,185,129,0.2)]"
              />
              <h3 className="text-xl sm:text-2xl font-bold text-white text-center sm:text-left">FreshcoMushroom</h3>
            </div>
            <p className="text-gray-300 mb-4 sm:mb-6 max-w-md text-sm sm:text-base text-center sm:text-left">
              Your trusted source for premium button mushrooms, seeds, and organic compost. From our sustainable farm to your table, we ensure quality and freshness in every product.
            </p>
            <div className="flex flex-col items-center sm:items-start">
              <span className="text-gray-300 text-sm mb-2">Follow us:</span>
              <div className="flex justify-center sm:justify-start space-x-4 sm:space-x-6">
                <a 
                  href="https://www.facebook.com/share/1AcqXkFC7g/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Follow us on Facebook"
                  className="group relative p-2.5 sm:p-3 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 hover:from-blue-500 hover:to-blue-600"
                >
                  <SiFacebook className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </a>
                <a 
                  href="https://www.instagram.com/freshcomushroom?igsh=MWU3bW56aTc3NHBrOQ==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Follow us on Instagram"
                  className="group relative p-2.5 sm:p-3 bg-gradient-to-br from-pink-600 to-purple-600 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 hover:from-pink-500 hover:to-purple-500"
                >
                  <SiInstagram className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </a>
              </div>
            </div>
          </div>

          <div className="animate-fadeInUp stagger-2">
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li className="animate-slideInUp stagger-1">
                <Link href="/" className="text-gray-300 hover:text-white transition-colors hover-lift">
                  Home
                </Link>
              </li>
              <li className="animate-slideInUp stagger-2">
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors hover-lift">
                  About Us
                </Link>
              </li>
              <li className="animate-slideInUp stagger-3">
                <Link href="/products" className="text-gray-300 hover:text-white transition-colors hover-lift">
                  Products
                </Link>
              </li>
              <li className="animate-slideInUp stagger-5">
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors hover-lift">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="animate-fadeInRight stagger-3">
            <h4 className="text-lg font-semibold mb-4 text-white">Our Products</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="animate-scaleIn stagger-1">Fresh White Button Mushrooms</li>
              <li className="animate-scaleIn stagger-2">Button Mushroom Seeds</li>
              <li className="animate-scaleIn stagger-3">Organic Compost</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-400/30 mt-8 pt-8 text-center">
          <p className="text-white font-semibold text-lg">&copy; 2020 Freshco Mushroom. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}