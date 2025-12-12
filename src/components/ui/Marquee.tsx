"use client";

import { motion, useAnimationFrame } from "framer-motion";
import { useRef, useState, ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  speed?: number;
  pauseOnHover?: boolean;
  direction?: "left" | "right";
  className?: string;
}

export function Marquee({
  children,
  speed = 30,
  pauseOnHover = true,
  direction = "left",
  className = "",
}: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useAnimationFrame((_, delta) => {
    if (isPaused || !contentRef.current) return;

    const contentWidth = contentRef.current.scrollWidth / 2;
    const movement = (speed * delta) / 1000;

    setPosition((prev) => {
      const newPos = direction === "left" ? prev - movement : prev + movement;

      // Smooth wrap-around using modulo for seamless infinite loop
      if (direction === "left") {
        return newPos <= -contentWidth ? newPos + contentWidth : newPos;
      } 
      else {
        return newPos >= contentWidth ? newPos - contentWidth : newPos;
      }
    });
  });

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden ${className}`}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <motion.div
        ref={contentRef}
        className="flex gap-8 w-max"
        style={{ x: position }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}

interface MarqueeItemProps {
  children: ReactNode;
  className?: string;
  grayscale?: boolean;
}

export function MarqueeItem({
  children,
  className = "",
  grayscale = true,
}: MarqueeItemProps) {
  return (
    <motion.div
      className={`flex-shrink-0 ${className}`}
      style={{
        filter: grayscale ? "grayscale(100%)" : "none",
        opacity: grayscale ? 0.6 : 1,
      }}
      whileHover={{
        filter: "grayscale(0%)",
        opacity: 1,
        scale: 1.05,
      }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
