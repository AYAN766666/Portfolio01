"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  intensity?: number;
  glare?: boolean;
  scaleOnHover?: number;
};

export default function TiltCard({
  children,
  className = "",
  intensity = 12,
  glare = true,
  scaleOnHover = 1.02,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const spring = { stiffness: 220, damping: 22, mass: 0.6 };
  const rotateX = useSpring(useTransform(y, [0, 1], [intensity, -intensity]), spring);
  const rotateY = useSpring(useTransform(x, [0, 1], [-intensity, intensity]), spring);

  const glareLeft = useTransform(x, [0, 1], ["-30%", "70%"]);
  const glareTop = useTransform(y, [0, 1], ["-30%", "70%"]);

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((event.clientX - rect.left) / rect.width);
    y.set((event.clientY - rect.top) / rect.height);
  }

  function handleMouseLeave() {
    x.set(0.5);
    y.set(0.5);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: scaleOnHover }}
      transition={{ type: "spring", stiffness: 260, damping: 26 }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`group relative ${className}`}
    >
      {children}

      {glare && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute z-20 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
          style={{
            left: glareLeft,
            top: glareTop,
            background:
              "radial-gradient(circle, rgba(34,211,238,0.35) 0%, rgba(139,92,246,0.22) 45%, transparent 70%)",
          }}
        />
      )}
    </motion.div>
  );
}
