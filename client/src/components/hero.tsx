import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import AuthModals from "@/components/auth-modals";

export default function Hero() {
  const { isAuthenticated } = useAuth();
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative bg-white overflow-hidden">
      {/* Hero background image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&h=1380" 
          alt="Fresh mushrooms growing in natural environment" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Premium Fresh Mushrooms
        </h1>
        <p className="mt-6 max-w-3xl text-xl text-gray-300">
          From farm to table, we deliver the finest quality mushrooms grown with care and expertise. Discover our wide variety of fresh, organic mushrooms perfect for your culinary needs.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <button 
            onClick={() => scrollToSection("gallery")}
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-mushroom-brown hover:bg-opacity-90 transition-all"
          >
            View Our Products
          </button>
          <button 
            onClick={() => scrollToSection("contact")}
            className="inline-flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-gray-900 transition-all"
          >
            Contact Us
          </button>
          {!isAuthenticated && (
            <button 
              onClick={() => setRegisterModalOpen(true)}
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 transition-all"
            >
              Join FreshcoMushroom
            </button>
          )}
        </div>
      </div>

      {/* Auth Modals */}
      <AuthModals
        loginOpen={loginModalOpen}
        registerOpen={registerModalOpen}
        onLoginClose={() => setLoginModalOpen(false)}
        onRegisterClose={() => setRegisterModalOpen(false)}
        onSwitchToRegister={() => {
          setLoginModalOpen(false);
          setRegisterModalOpen(true);
        }}
        onSwitchToLogin={() => {
          setRegisterModalOpen(false);
          setLoginModalOpen(true);
        }}
      />
    </section>
  );
}
