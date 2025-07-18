
import React from 'react';

interface AnimatedMushroomProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animation?: 'float' | 'bounce' | 'rotate' | 'sparkle' | 'grow' | 'pop';
  className?: string;
  delay?: string;
}

export default function AnimatedMushroom({ 
  size = 'md', 
  animation = 'float', 
  className = '', 
  delay = '0s' 
}: AnimatedMushroomProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };

  const animationClasses = {
    float: 'animate-mushroom-float',
    bounce: 'animate-mushroom-bounce',
    rotate: 'animate-mushroom-sparkle',
    sparkle: 'animate-mushroom-sparkle',
    grow: 'animate-mushroom-grow',
    pop: 'animate-mushroom-pop'
  };

  return (
    <div 
      className={`${sizeClasses[size]} ${animationClasses[animation]} ${className} relative`}
      style={{ animationDelay: delay }}
    >
      {/* Using emoji for now - replace with your PNG when background is removed */}
      <div className="w-full h-full flex items-center justify-center text-4xl filter drop-shadow-lg">
        🍄
      </div>
      
      {/* Optional sparkle effects */}
      {animation === 'sparkle' && (
        <>
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-300 rounded-full animate-ping opacity-75"></div>
          <div className="absolute -bottom-1 -left-1 w-1 h-1 bg-emerald-400 rounded-full animate-ping opacity-50" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute top-1/2 -right-2 w-1 h-1 bg-white rounded-full animate-ping opacity-60" style={{animationDelay: '1s'}}></div>
        </>
      )}
    </div>
  );
}
