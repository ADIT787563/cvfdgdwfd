import { useState } from "react";
import { Menu, X, ShoppingCart, User, Search, Heart } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Link, useLocation } from "wouter";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  // Check if user is logged in
  const { data: user } = useQuery({
    queryKey: ["/api/auth/user"],
    retry: false,
  });

  return (
    <header className="bg-premium-black shadow-lg sticky top-0 z-50 border-b-2 border-primary-green">
      <nav className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-18 md:h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <img 
                src="/images/freshco_logo-removebg-preview-1_1750517234057.png" 
                alt="Freshco Mushroom Logo" 
                className="h-12 sm:h-14 md:h-16 w-auto cursor-pointer transition-all duration-300 drop-shadow-[0_0_8px_rgba(16,185,129,0.3)]"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-6 lg:ml-10 flex items-baseline space-x-4 lg:space-x-8">
              <Link 
                href="/"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  location === "/" ? "text-primary-green border-b-2 border-primary-green" : "text-white hover:text-primary-green"
                }`}
              >
                Home
              </Link>
              <Link 
                href="/products"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  location.startsWith("/products") ? "text-primary-green border-b-2 border-primary-green" : "text-white hover:text-primary-green"
                }`}
              >
                Products
              </Link>
              <Link 
                href="/about"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  location === "/about" ? "text-primary-green border-b-2 border-primary-green" : "text-white hover:text-primary-green"
                }`}
              >
                About
              </Link>

              <Link 
                href="/contact"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  location === "/contact" ? "text-primary-green border-b-2 border-primary-green" : "text-white hover:text-primary-green"
                }`}
              >
                Contact
              </Link>

            </div>
          </div>

          {/* Header Icons */}
          <div className="hidden sm:flex items-center space-x-1 sm:space-x-2">
            {/* Search Icon */}
            <Link href="/search">
              <div className="p-1.5 sm:p-2 text-white hover:text-emerald-400 transition-colors">
                <Search size={18} className="sm:w-5 sm:h-5" />
              </div>
            </Link>

            {/* Wishlist Icon */}
            <Link href="/wishlist">
              <div className="p-1.5 sm:p-2 text-white hover:text-emerald-400 transition-colors">
                <Heart size={18} className="sm:w-5 sm:h-5" />
              </div>
            </Link>

            {/* Cart Icon */}
            <Link href="/cart">
              <div className="relative p-1.5 sm:p-2 text-white hover:text-emerald-400 transition-colors">
                <ShoppingCart size={18} className="sm:w-5 sm:h-5" />
                <span className="absolute -top-0.5 sm:-top-1 -right-0.5 sm:-right-1 bg-emerald-600 text-white text-xs rounded-full h-3.5 w-3.5 sm:h-4 sm:w-4 flex items-center justify-center text-[9px] sm:text-[10px]">
                  0
                </span>
              </div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden">
            <button 
              type="button" 
              className="bg-charcoal inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-primary-green hover:bg-dark-gray"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden">
            <div className="px-3 pt-2 pb-3 space-y-1 bg-charcoal border-t border-primary-green">
              <Link 
                href="/"
                className={`block px-3 py-2.5 text-sm xs:text-base font-medium w-full text-left rounded-md transition-colors ${
                  location === "/" ? "text-primary-green bg-dark-gray" : "text-white hover:text-primary-green hover:bg-dark-gray"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/products"
                className={`block px-3 py-2 text-base font-medium w-full text-left ${
                  location.startsWith("/products") ? "text-primary-green bg-dark-gray" : "text-white hover:text-primary-green hover:bg-dark-gray"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Products
              </Link>
              <Link 
                href="/about"
                className={`block px-3 py-2 text-base font-medium w-full text-left ${
                  location === "/about" ? "text-primary-green bg-dark-gray" : "text-white hover:text-primary-green hover:bg-dark-gray"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/gallery"
                className={`block px-3 py-2 text-base font-medium w-full text-left ${
                  location === "/gallery" ? "text-primary-green bg-dark-gray" : "text-white hover:text-primary-green hover:bg-dark-gray"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link 
                href="/blog"
                className={`block px-3 py-2 text-base font-medium w-full text-left ${
                  location.startsWith("/blog") ? "text-primary-green bg-dark-gray" : "text-white hover:text-primary-green hover:bg-dark-gray"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                href="/recipes"
                className={`block px-3 py-2 text-base font-medium w-full text-left ${
                  location.startsWith("/recipes") ? "text-primary-green bg-dark-gray" : "text-white hover:text-primary-green hover:bg-dark-gray"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Recipes
              </Link>
              <Link 
                href="/cart"
                className={`block px-3 py-2 text-base font-medium w-full text-left ${
                  location === "/cart" ? "text-primary-green bg-dark-gray" : "text-white hover:text-primary-green hover:bg-dark-gray"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Cart
              </Link>
              {user && (
                <>
                  <Link 
                    href="/profile"
                    className={`block px-3 py-2 text-base font-medium w-full text-left ${
                      location === "/profile" ? "text-primary-green bg-dark-gray" : "text-white hover:text-primary-green hover:bg-dark-gray"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Profile
                  </Link>

                  <Link 
                    href="/admin/dashboard"
                    className={`block px-3 py-2 text-base font-medium w-full text-left ${
                      location.startsWith("/admin") ? "text-primary-green bg-dark-gray" : "text-white hover:text-primary-green hover:bg-dark-gray"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Admin
                  </Link>
                </>
              )}

              <Link 
                href="/contact"
                className={`block px-3 py-2 text-base font-medium w-full text-left ${
                  location === "/contact" ? "text-primary-green bg-dark-gray" : "text-white hover:text-primary-green hover:bg-dark-gray"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>

            </div>
          </div>
        )}
      </nav>
    </header>
  );
}