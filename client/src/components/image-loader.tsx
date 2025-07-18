import { useState } from "react";

interface ImageLoaderProps {
  src: string;
  alt: string;
  className?: string;
  onClick?: () => void;
}

export default function ImageLoader({ src, alt, className = "", onClick }: ImageLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
          <div className="text-center">
            {/* Mushroom growing animation */}
            <div className="relative w-16 h-16 mx-auto mb-3">
              {/* Soil base */}
              <div className="absolute bottom-0 w-full h-4 bg-gradient-to-t from-amber-800 to-amber-600 rounded-full"></div>
              
              {/* Growing mushroom */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <div className="w-2 h-4 bg-white rounded-full animate-grow"></div>
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-3 bg-gray-100 rounded-full animate-pulse"></div>
              </div>
              
              {/* Sparkle effect */}
              <div className="absolute top-2 right-2 w-1 h-1 bg-primary-green rounded-full animate-ping"></div>
            </div>
            <p className="text-xs text-gray-500">Loading image...</p>
          </div>
        </div>
      )}
      
      {hasError ? (
        <div className="flex items-center justify-center h-64 bg-gray-100 rounded-lg">
          <div className="text-center text-gray-500">
            <div className="w-12 h-12 mx-auto mb-2 opacity-50">
              🍄
            </div>
            <p className="text-sm">Image not available</p>
          </div>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
          onLoad={handleLoad}
          onError={handleError}
          onClick={onClick}
        />
      )}
    </div>
  );
}