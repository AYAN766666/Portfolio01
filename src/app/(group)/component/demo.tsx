"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiCheck, FiCpu, FiMessageSquare, FiShoppingCart } from "react-icons/fi";
import TiltCard from "./tilt";
import Aurora from "./aurora";
import DecodeText from "./decode-text";

const features = [
  {
    icon: <FiMessageSquare />,
    title: "Understands natural language",
    text: "Customers order the way they talk — no rigid menus or forms.",
  },
  {
    icon: <FiShoppingCart />,
    title: "Manages the cart live",
    text: "The agent adds, removes and edits items in real time.",
  },
  {
    icon: <FiCheck />,
    title: "Confirms orders autonomously",
    text: "It closes the loop and confirms the order end-to-end, no human in the middle.",
  },
];

export default function Demo() {
  const [open, setOpen] = useState(false);

  return (
    <section id="demo" className="relative overflow-hidden bg-[#050810] px-5 py-32">
      <Aurora intensity="bold" />
      <div className="absolute inset-0 bg-grid bg-grid-fade pointer-events-none"></div>

      <div className="container relative z-10 mx-auto">
        <div className="mb-16 flex flex-col text-center">
          <span className="mb-4 inline-flex items-center justify-center gap-2 font-mono tracking-[0.3em] text-[#c6ff2e]">
            <FiCpu /> <DecodeText text="LIVE AGENT DEMO" />
          </span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-black tracking-tight text-white md:text-6xl"
          >
            See the AI Ordering Agent{" "}
            <span className="text-shine bg-gradient-to-r from-[#c6ff2e] via-[#19f0d0] to-[#ff2ea6]">
              in Action
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400"
          >
            Not a mock-up. A working agent taking real orders, in real time. Watch it understand a
            request, build the order and confirm it — all on its own.
          </motion.p>
        </div>

        <div className="grid items-center gap-14 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6 lg:col-span-2"
          >
            {features.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12 }}
                className="flex gap-5 rounded-2xl border border-white/5 bg-[#101624]/80 p-6 backdrop-blur"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#c6ff2e] to-[#ff2ea6] text-xl text-black shadow-lg">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="mb-1 font-bold text-white">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-400">{feature.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 perspective-2000"
          >
            <TiltCard intensity={8} scaleOnHover={1.01} className="rounded-3xl">
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0e1320] shadow-[0_30px_90px_-20px_rgba(198,255,46,0.35)]">
                <div className="flex items-center gap-2 border-b border-white/5 bg-white/[0.03] px-5 py-3.5">
                  <span className="h-3 w-3 rounded-full bg-[#ff2ea6]/80"></span>
                  <span className="h-3 w-3 rounded-full bg-[#c6ff2e]/80"></span>
                  <span className="h-3 w-3 rounded-full bg-[#19f0d0]/80"></span>
                  <div className="ml-4 flex-1 rounded-md bg-black/30 px-3 py-1 text-center font-mono text-[11px] text-gray-500">
                    ordering-agent.ai / live-session
                  </div>
                </div>

                <div className="group relative aspect-video w-full bg-black">
                  <video
                    src="/ordering-agent.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <button
                    onClick={() => setOpen(true)}
                    className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur-md transition-all hover:scale-105 hover:bg-white/20"
                  >
                    ▶ Watch with sound
                  </button>
                  <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-black/50 px-3 py-1.5 backdrop-blur">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ff2ea6] opacity-75"></span>
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#ff2ea6]"></span>
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-white">
                      Live
                    </span>
                  </div>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-5 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-black"
            >
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur hover:bg-white/20"
              >
                <FiX />
              </button>
              <video src="/ordering-agent.mp4" controls autoPlay className="h-full w-full" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
