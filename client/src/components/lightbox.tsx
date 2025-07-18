import { useEffect } from "react";
import { X } from "lucide-react";

interface LightboxProps {
  image: {
    src: string;
    alt: string;
  };
  onClose: () => void;
}

export default function Lightbox({ image, onClose }: LightboxProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    // Prevent body scroll when lightbox is open
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="max-w-4xl max-h-full relative">
        <img 
          src={image.src} 
          alt={image.alt} 
          className="max-w-full max-h-full object-contain" 
          onClick={(e) => e.stopPropagation()}
        />
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors"
        >
          <X className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
}
