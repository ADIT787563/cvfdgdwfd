import { useState, useEffect } from "react";
import { X, Leaf, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";

interface WelcomePopupProps {
  onGetStarted: () => void;
  onSignIn: () => void;
}

export default function WelcomePopup({ onGetStarted, onSignIn }: WelcomePopupProps) {
  const [showWelcome, setShowWelcome] = useState(false);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    // Show welcome popup after 2 seconds for non-authenticated users
    const timer = setTimeout(() => {
      if (!isAuthenticated) {
        setShowWelcome(true);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [isAuthenticated]);

  const handleCloseWelcome = () => {
    setShowWelcome(false);
  };

  const handleGetStarted = () => {
    setShowWelcome(false);
    onGetStarted();
  };

  const handleSignIn = () => {
    setShowWelcome(false);
    onSignIn();
  };

  if (!showWelcome || isAuthenticated) return null;

  return (
    <>
      {/* Welcome Popup */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
        <div className="fixed inset-0 bg-black bg-opacity-70" onClick={handleCloseWelcome}></div>
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-5xl w-full relative animate-fadeIn max-h-[95vh] sm:max-h-[90vh] overflow-y-auto mx-2 sm:mx-0">
          {/* Close Button */}
          <button
            onClick={handleCloseWelcome}
            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors z-10"
          >
            <X size={20} />
          </button>

          {/* Responsive Layout */}
          <div className="flex flex-col lg:flex-row">
            {/* Header Section - Top on mobile, Left on desktop */}
            <div className="bg-gradient-to-r from-emerald-500 to-green-600 text-white p-6 lg:p-8 rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none flex-shrink-0 lg:w-80 relative overflow-hidden">
              <div className="absolute inset-0 bg-pattern opacity-10"></div>
              <div className="relative z-10 h-full flex flex-col justify-center">
                <div className="flex justify-center mb-3 lg:mb-4">
                  <div className="bg-white bg-opacity-20 rounded-full p-2 lg:p-3">
                    <Leaf className="h-6 w-6 lg:h-8 lg:w-8 text-white" />
                  </div>
                </div>
                <h2 className="text-xl lg:text-2xl font-bold mb-2 text-center">Welcome to FreshcoMushroom!</h2>
                <p className="text-emerald-100 text-sm text-center mb-4 lg:mb-6">Uttar Pradesh's Premium Mushroom Farm</p>
                
                {/* Trust indicators - Responsive layout */}
                <div className="flex justify-center items-center space-x-2 lg:space-x-4">
                  <div className="flex items-center text-xs text-emerald-100">
                    <Star className="h-3 w-3 text-yellow-300 mr-1" />
                    <span className="hidden sm:inline">30k+ Happy Customers</span>
                    <span className="sm:hidden">30k+ Customers</span>
                  </div>
                  <div className="w-px h-3 bg-emerald-300"></div>
                  <div className="flex items-center text-xs text-emerald-100">
                    <Sparkles className="h-3 w-3 text-emerald-300 mr-1" />
                    <span className="hidden sm:inline">20+ Years Experience</span>
                    <span className="sm:hidden">20+ Years</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section - Bottom on mobile, Right on desktop */}
            <div className="flex-1 p-6 lg:p-8">
              <div className="h-full flex flex-col">
                <p className="text-gray-700 leading-relaxed mb-4 lg:mb-6 text-base lg:text-lg">
                  Join thousands of satisfied customers who trust us for premium quality fresh mushrooms, 
                  organic seeds, and natural compost delivered directly from our farm in Uttar Pradesh.
                </p>

                {/* Benefits */}
                <div className="bg-gray-50 rounded-lg p-4 lg:p-5 mb-4 lg:mb-6 flex-1">
                  <h3 className="font-semibold text-gray-900 mb-3 lg:mb-4 text-base lg:text-lg">🍄 What You Get:</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-3 text-sm text-gray-700">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                      <span>Farm-fresh mushrooms delivered</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                      <span>Exclusive seasonal varieties</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                      <span>Special member pricing</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                      <span>AI cooking assistant & timer</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2 sm:space-y-3">
                  <Button
                    onClick={handleGetStarted}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 sm:py-3 text-sm sm:text-base rounded-lg transition-all transform hover:scale-105"
                  >
                    🚀 Get Started - It's Free!
                  </Button>
                  <Button
                    variant="outline"
                    onClick={handleSignIn}
                    className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-50 py-2 sm:py-2.5 text-sm sm:text-base rounded-lg transition-all"
                  >
                    Already have an account? Sign In
                  </Button>
                </div>

                {/* Trust indicators */}
                <div className="text-center mt-4 text-xs text-gray-500">
                  <p>✓ No spam, unsubscribe anytime • ✓ Your data is safe with us</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}