"use client";

import { motion } from "framer-motion";
import { useState, useCallback, type ImgHTMLAttributes } from "react";

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
  duration?: number;
  width?: number;
  height?: number;
}

export default function AnimatedImage({
  src,
  alt,
  className = "",
  wrapperClassName = "",
  duration = 1.0,
  width,
  height,
}: AnimatedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const handleError = useCallback(() => {
    setHasError(true);
    setIsLoaded(true);
  }, []);

  return (
    <div className={`relative overflow-hidden ${wrapperClassName}`}>
      {/* Placeholder / skeleton */}
      <div
        className={`absolute inset-0 bg-[var(--color-muted)] transition-opacity duration-700 ${
          isLoaded ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Actual image */}
      <motion.img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        initial={{ opacity: 0, scale: 1.02 }}
        animate={
          isLoaded
            ? { opacity: 1, scale: 1 }
            : { opacity: 0, scale: 1.02 }
        }
        transition={{
          duration,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        onLoad={handleLoad}
        onError={handleError}
        loading="lazy"
      />

      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-[var(--color-muted)]">
          <svg
            className="w-8 h-8 text-[var(--color-muted-foreground)]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
      )}
    </div>
  );
}
