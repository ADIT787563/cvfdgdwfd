import { useState, useEffect } from "react";

interface LoadingState {
  isLoading: boolean;
  message: string;
  variant: "mushroom-growth" | "farm-cycle" | "seed-germination";
}

export function usePageTransition() {
  const [isLoading, setIsLoading] = useState(false);

  const startTransition = (message = "Loading page...", variant: LoadingState["variant"] = "mushroom-growth") => {
    setIsLoading(true);
    // Simulate minimum loading time for smooth UX
    setTimeout(() => setIsLoading(false), 1000);
  };

  return { isLoading, startTransition };
}

export function useImageLoading() {
  const [loadingImages, setLoadingImages] = useState<string[]>([]);

  const startImageLoad = (src: string) => {
    setLoadingImages(prev => [...prev, src]);
  };

  const finishImageLoad = (src: string) => {
    setLoadingImages(prev => prev.filter(img => img !== src));
  };

  const isImageLoading = (src: string) => loadingImages.includes(src);

  return { startImageLoad, finishImageLoad, isImageLoading };
}

export function useAsyncOperation() {
  const [operations, setOperations] = useState<Map<string, LoadingState>>(new Map());

  const startOperation = (
    key: string, 
    message: string, 
    variant: LoadingState["variant"] = "mushroom-growth"
  ) => {
    setOperations(prev => new Map(prev).set(key, {
      isLoading: true,
      message,
      variant
    }));
  };

  const finishOperation = (key: string) => {
    setOperations(prev => {
      const newMap = new Map(prev);
      newMap.delete(key);
      return newMap;
    });
  };

  const getOperation = (key: string) => operations.get(key);
  const hasActiveOperations = operations.size > 0;

  return { startOperation, finishOperation, getOperation, hasActiveOperations, operations };
}