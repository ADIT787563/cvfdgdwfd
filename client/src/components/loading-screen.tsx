import { useEffect, useState } from "react";

interface LoadingScreenProps {
  isLoading: boolean;
  message?: string;
  variant?: "mushroom-growth" | "farm-cycle" | "seed-germination";
}

export default function LoadingScreen({ 
  isLoading, 
  message = "Loading...", 
  variant = "mushroom-growth" 
}: LoadingScreenProps) {
  const [currentStage, setCurrentStage] = useState(0);

  useEffect(() => {
    if (!isLoading) return;

    const interval = setInterval(() => {
      setCurrentStage(prev => (prev + 1) % 4);
    }, 800);

    return () => clearInterval(interval);
  }, [isLoading]);

  if (!isLoading) return null;

  const renderMushroomGrowth = () => (
    <div className="relative w-32 h-32 mx-auto mb-8">
      {/* Soil base */}
      <div className="absolute bottom-0 w-full h-8 bg-gradient-to-t from-amber-800 to-amber-600 rounded-full"></div>
      
      {/* Mushroom stem */}
      <div 
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-t from-gray-100 to-white rounded-full transition-all duration-800 ${
          currentStage >= 1 ? 'w-3 h-8' : 'w-0 h-0'
        }`}
      ></div>
      
      {/* Mushroom cap */}
      <div 
        className={`absolute bottom-14 left-1/2 transform -translate-x-1/2 bg-gradient-to-br from-gray-200 to-gray-100 rounded-full transition-all duration-800 ${
          currentStage >= 2 ? 'w-8 h-6' : 'w-0 h-0'
        }`}
      ></div>
      
      {/* Full grown mushroom cap */}
      <div 
        className={`absolute bottom-13 left-1/2 transform -translate-x-1/2 bg-gradient-to-br from-white to-gray-100 rounded-full shadow-lg transition-all duration-800 ${
          currentStage >= 3 ? 'w-16 h-12' : 'w-8 h-6'
        }`}
      ></div>
      
      {/* Sparkle effects */}
      {currentStage >= 3 && (
        <>
          <div className="absolute top-4 left-4 w-2 h-2 bg-primary-green rounded-full animate-ping"></div>
          <div className="absolute top-8 right-6 w-1 h-1 bg-yellow-400 rounded-full animate-ping animation-delay-200"></div>
          <div className="absolute top-12 left-8 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping animation-delay-400"></div>
        </>
      )}
      
      {/* Growth rings */}
      {currentStage >= 2 && (
        <div className="absolute inset-0 border-2 border-primary-green/20 rounded-full animate-pulse"></div>
      )}
    </div>
  );

  const renderFarmCycle = () => (
    <div className="relative w-32 h-32 mx-auto mb-8">
      {/* Farm bed */}
      <div className="absolute bottom-0 w-full h-12 bg-gradient-to-t from-amber-900 to-amber-700 rounded-lg"></div>
      
      {/* Growing beds */}
      <div className="absolute bottom-8 w-full h-2 bg-gray-600 rounded"></div>
      <div className="absolute bottom-12 w-full h-2 bg-gray-600 rounded"></div>
      <div className="absolute bottom-16 w-full h-2 bg-gray-600 rounded"></div>
      
      {/* Mushroom clusters */}
      {[0, 1, 2, 3].map((tier) => (
        <div key={tier} className={`absolute bottom-${14 + (tier * 4)} flex justify-between px-2 transition-all duration-800`}>
          {[...Array(5)].map((_, index) => (
            <div 
              key={index}
              className={`w-2 h-3 bg-white rounded-full transition-all duration-500 ${
                currentStage > tier ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            ></div>
          ))}
        </div>
      ))}
      
      {/* Farm facility outline */}
      <div className="absolute inset-0 border-2 border-gray-400 rounded-lg"></div>
      
      {/* Ventilation lines */}
      <div className="absolute top-2 left-2 right-2 h-0.5 bg-gray-300 rounded opacity-60"></div>
      <div className="absolute top-4 left-2 right-2 h-0.5 bg-gray-300 rounded opacity-60"></div>
    </div>
  );

  const renderSeedGermination = () => (
    <div className="relative w-32 h-32 mx-auto mb-8">
      {/* Soil container */}
      <div className="absolute bottom-0 w-full h-16 bg-gradient-to-t from-amber-800 to-amber-600 rounded-lg"></div>
      
      {/* Seeds */}
      {currentStage >= 0 && (
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-amber-900 rounded-full"></div>
      )}
      
      {/* Sprouting */}
      {currentStage >= 1 && (
        <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 w-1 h-4 bg-green-400 rounded-full animate-grow"></div>
      )}
      
      {/* Small mushroom */}
      {currentStage >= 2 && (
        <div className="absolute bottom-17 left-1/2 transform -translate-x-1/2 w-4 h-3 bg-gray-200 rounded-full"></div>
      )}
      
      {/* Mature mushroom */}
      {currentStage >= 3 && (
        <div className="absolute bottom-18 left-1/2 transform -translate-x-1/2 w-8 h-6 bg-white rounded-full shadow-md animate-pulse"></div>
      )}
      
      {/* Water droplets */}
      {currentStage >= 1 && (
        <>
          <div className="absolute top-8 left-6 w-1 h-2 bg-blue-400 rounded-full animate-bounce"></div>
          <div className="absolute top-12 right-8 w-1 h-2 bg-blue-400 rounded-full animate-bounce animation-delay-300"></div>
        </>
      )}
    </div>
  );

  const renderContent = () => {
    switch (variant) {
      case "farm-cycle":
        return renderFarmCycle();
      case "seed-germination":
        return renderSeedGermination();
      default:
        return renderMushroomGrowth();
    }
  };

  return (
    <div className="fixed inset-0 bg-white/95 backdrop-blur-sm z-50 flex flex-col items-center justify-center">
      <div className="text-center">
        {renderContent()}
        
        {/* Loading text */}
        <h3 className="text-xl font-semibold text-gray-900 mb-2 animate-pulse">
          {message}
        </h3>
        
        {/* Progress dots */}
        <div className="flex space-x-2 justify-center">
          {[0, 1, 2, 3].map((stage) => (
            <div 
              key={stage}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentStage >= stage ? 'bg-primary-green scale-125' : 'bg-gray-300'
              }`}
            ></div>
          ))}
        </div>
        
        {/* Growth status text */}
        <p className="mt-4 text-sm text-gray-600 animate-fadeInUp">
          {variant === "mushroom-growth" && (
            <>
              {currentStage === 0 && "Preparing soil..."}
              {currentStage === 1 && "Growing stem..."}
              {currentStage === 2 && "Developing cap..."}
              {currentStage === 3 && "Mushroom ready!"}
            </>
          )}
          {variant === "farm-cycle" && (
            <>
              {currentStage === 0 && "Setting up growing beds..."}
              {currentStage === 1 && "First tier sprouting..."}
              {currentStage === 2 && "Multiple tiers growing..."}
              {currentStage === 3 && "Farm production ready!"}
            </>
          )}
          {variant === "seed-germination" && (
            <>
              {currentStage === 0 && "Planting seeds..."}
              {currentStage === 1 && "Seeds sprouting..."}
              {currentStage === 2 && "Young mushrooms growing..."}
              {currentStage === 3 && "Harvest ready!"}
            </>
          )}
        </p>
      </div>
    </div>
  );
}