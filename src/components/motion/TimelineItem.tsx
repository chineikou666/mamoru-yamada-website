"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface TimelineItemProps {
  children: ReactNode;
  className?: string;
  index?: number;
}

export default function TimelineItem({
  children,
  className = "",
  index = 0,
}: TimelineItemProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

interface TimelineLineProps {
  className?: string;
}

export function TimelineLine({ className = "" }: TimelineLineProps) {
  return (
    <motion.div
      className={`w-px bg-[var(--color-border)] ${className}`}
      initial={{ scaleY: 0 }}
      whileInView={{ scaleY: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 1.2,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      style={{ transformOrigin: "top" }}
    />
  );
}

interface TimelineDotProps {
  className?: string;
  active?: boolean;
}

export function TimelineDot({ className = "", active = false }: TimelineDotProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: 0.2,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      <div
        className={`w-3 h-3 rounded-full border-2 ${
          active
            ? "bg-[var(--color-primary)] border-[var(--color-primary)]"
            : "bg-[var(--color-background)] border-[var(--color-border)]"
        }`}
      />
    </motion.div>
  );
}
