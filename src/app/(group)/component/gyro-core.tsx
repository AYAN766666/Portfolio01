"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

type Ring = {
  rx: number;
  ry: number;
  color: string;
  anim: string;
  dashed?: boolean;
};

const RINGS: Ring[] = [
  { rx: 74, ry: 0, color: "#c6ff2e", anim: "animate-gyro" },
  { rx: 74, ry: 62, color: "#ff2ea6", anim: "animate-gyro-rev", dashed: true },
  { rx: 0, ry: 74, color: "#6d5cff", anim: "animate-gyro-fast" },
  { rx: 74, ry: -62, color: "#19f0d0", anim: "animate-gyro-rev" },
  { rx: 90, ry: 0, color: "#ffffff", anim: "animate-gyro-fast", dashed: true },
];

export default function GyroCore({ children }: { children?: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const spring = { stiffness: 160, damping: 18, mass: 0.7 };
  const rotateX = useSpring(useTransform(y, [0, 1], [16, -16]), spring);
  const rotateY = useSpring(useTransform(x, [0, 1], [-16, 16]), spring);

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
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex items-center justify-center perspective-1000"
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative h-[21rem] w-[21rem] md:h-[27rem] md:w-[27rem]"
      >
        <div className="absolute inset-[-12%] rounded-full bg-[radial-gradient(circle,rgba(198,255,46,0.18),rgba(255,46,166,0.10)_45%,transparent_70%)] blur-3xl"></div>

        {RINGS.map((ring, i) => (
          <div
            key={i}
            className="absolute inset-0"
            style={{ transform: `rotateX(${ring.rx}deg) rotateY(${ring.ry}deg)` }}
          >
            <div
              className={`relative h-full w-full rounded-full ${ring.dashed ? "border border-dashed" : "border"}`}
              style={{ borderColor: `${ring.color}55` }}
            >
              <div className={`absolute inset-0 ${ring.anim}`}>
                <span
                  className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full"
                  style={{ background: ring.color, boxShadow: `0 0 18px ${ring.color}` }}
                ></span>
                <span
                  className="absolute bottom-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 translate-y-1/2 rounded-full opacity-70"
                  style={{ background: ring.color }}
                ></span>
              </div>
            </div>
          </div>
        ))}

        <div className="absolute inset-[21%] rounded-full border border-white/10 bg-[#050810] shadow-[0_0_60px_-10px_rgba(198,255,46,0.5)]">
          <div className="relative h-full w-full overflow-hidden rounded-full ring-1 ring-white/10">
            {children}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            <div className="pointer-events-none absolute left-0 top-0 z-20 h-[2px] w-full animate-scan bg-lime-300 shadow-[0_0_15px_#c6ff2e]"></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
