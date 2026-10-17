'use client';

import Link from "next/link";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import pic from "../../../../public/gemini-profile.png";
import { motion } from "framer-motion";
import Aurora from "./aurora";
import GyroCore from "./gyro-core";
import DecodeText from "./decode-text";

const marqueeSkills = ["Next.js", "AI Agents", "Docker", "TypeScript", "Python", "Tailwind", "OpenAI"];

const stats = [
  { value: "5+", label: "Shipped Projects" },
  { value: "25+", label: "AI Agents Built" },
  { value: "100%", label: "Code Integrity" },
];

export default function Hero() {
  const description =
    "I help businesses automate workflows, reduce manual work, and generate more leads by building custom AI agents and high-performance websites.";

  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-[#050810] text-white">
      <Aurora intensity="bold" />
      <div className="absolute inset-0 bg-grid bg-grid-fade pointer-events-none"></div>

      <div className="container relative z-10 mx-auto flex flex-col items-center justify-between gap-14 px-5 py-20 md:flex-row">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex w-full flex-col items-center text-center md:w-3/5 md:items-start md:text-left"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-4 inline-flex items-center gap-3 rounded-full border border-[#c6ff2e]/30 bg-[#c6ff2e]/5 px-4 py-1.5 font-mono text-xs tracking-[0.25em] text-[#c6ff2e]"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#c6ff2e] opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#c6ff2e]"></span>
            </span>
            <DecodeText text="THE FUTURE OF AI IS HERE" />
          </motion.div>

          <h1 className="mb-6 text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
            I am <br />
            <span className="typewriter-shine">
              <Typewriter
                options={{
                  strings: ["an AI Agent Specialist", "a Full-Stack Developer"],
                  autoStart: true,
                  loop: true,
                  cursor: "|",
                  delay: 60,
                  deleteSpeed: 40,
                }}
              />
            </span>
          </h1>

          <div className="mb-8 h-2 w-32 rounded-full bg-gradient-to-r from-[#c6ff2e] via-[#19f0d0] to-[#ff2ea6]"></div>

          <p className="mb-10 max-w-xl text-lg font-medium leading-relaxed text-gray-400 md:text-xl">
            {description}
          </p>

          <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
            <Link href="#contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full rounded-xl bg-gradient-to-r from-[#c6ff2e] to-[#19f0d0] px-10 py-4 font-bold text-black shadow-[0_0_35px_rgba(198,255,46,0.4)] transition-all sm:w-auto"
              >
                Let&apos;s Build Together
              </motion.button>
            </Link>
            <Link href="#demo">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.08)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full rounded-xl border-2 border-[#19f0d0]/50 px-10 py-4 font-bold text-white backdrop-blur-sm transition-all sm:w-auto"
              >
                Watch AI Agent
              </motion.button>
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-3xl font-black text-white">{stat.value}</span>
                <span className="font-mono text-xs uppercase tracking-tighter text-gray-500">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring", stiffness: 90 }}
          className="flex w-full justify-center md:w-2/5 md:justify-end"
        >
          <GyroCore>
            <Image
              src={pic}
              alt="Mohammad Ayan - AI Agent Specialist"
              fill
              sizes="(max-width: 768px) 336px, 432px"
              style={{ objectFit: "cover" }}
              priority
              className="object-cover"
            />
          </GyroCore>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden border-t border-white/5 bg-black/20 py-4 backdrop-blur-sm">
        <div className="flex w-max animate-marquee gap-10">
          {[...marqueeSkills, ...marqueeSkills, ...marqueeSkills, ...marqueeSkills].map(
            (skill, i) => (
              <span key={i} className="font-mono text-sm uppercase tracking-widest text-gray-500/70">
                {skill} <span className="text-[#c6ff2e]/60">✦</span>
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
