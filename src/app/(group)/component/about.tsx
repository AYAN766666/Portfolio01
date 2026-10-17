"use client";

import Image from "next/image";
import Link from "next/link";
import about from "../../../../public/gemini-profile.png";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import TiltCard from "./tilt";
import Aurora from "./aurora";
import DecodeText from "./decode-text";
import Terminal from "./terminal";

const benefits = [
  "Look professional and earn trust the moment someone lands on your site",
  "Get found on Google and bring in new customers on autopilot",
  "Turn more visitors into paying clients with clear, fast pages",
  "Save hours of manual work every single week with automation",
  "Never miss an order or enquiry  even at 3 AM",
  "Cut costs by letting AI handle the repetitive, time-eating tasks",
];

const stack = ["Next.js", "TypeScript", "JavaScript", "Python", "OpenAI", "LLM", "Database", "PostgreSQL"];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#050810] py-24 md:py-32">
      <Aurora />
      <div className="absolute inset-0 bg-grid bg-grid-fade pointer-events-none"></div>

      <div className="container relative z-10 mx-auto px-5 md:px-6">
        <div className="flex flex-col items-center gap-14 md:flex-row md:items-start md:gap-16">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-2/5"
          >
            <div className="relative mx-auto w-full max-w-[20rem] perspective-2000 sm:max-w-sm">
              <div className="animate-aurora pointer-events-none absolute -inset-8 rounded-full bg-[radial-gradient(circle,rgba(198,255,46,0.16),transparent_60%)] blur-2xl"></div>

              <TiltCard intensity={8} className="rounded-[2.2rem]">
                <div className="relative overflow-hidden rounded-[2.2rem] p-[2px]">
                  <div className="absolute left-1/2 top-1/2 h-[220%] w-[220%] -translate-x-1/2 -translate-y-1/2 animate-spin-slower bg-[conic-gradient(from_0deg,#c6ff2e,#19f0d0,#ff2ea6,#6d5cff,#c6ff2e)] opacity-80"></div>

                  <div className="group relative overflow-hidden rounded-[2.1rem] bg-[#0e1320]">
                    <div className="relative aspect-[3/4] w-full overflow-hidden">
                      <Image
                        src={about}
                        alt="Mohammad Ayan"
                        fill
                        sizes="(max-width: 768px) 320px, 384px"
                        className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                        priority
                      />

                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#c6ff2e]/10 via-transparent to-[#ff2ea6]/10 mix-blend-soft-light"></div>
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050810] via-transparent to-transparent"></div>

                      <div className="pointer-events-none absolute left-4 top-4 h-7 w-7 rounded-tl-2xl border-l-2 border-t-2 border-[#c6ff2e]/60"></div>
                      <div className="pointer-events-none absolute right-4 top-4 h-7 w-7 rounded-tr-2xl border-r-2 border-t-2 border-[#19f0d0]/60"></div>
                      <div className="pointer-events-none absolute bottom-4 left-4 h-7 w-7 rounded-bl-2xl border-b-2 border-l-2 border-[#6d5cff]/60"></div>
                      <div className="pointer-events-none absolute bottom-4 right-4 h-7 w-7 rounded-br-2xl border-b-2 border-r-2 border-[#ff2ea6]/60"></div>

                      <div className="pointer-events-none absolute left-0 top-0 z-20 h-[2px] w-full animate-scan bg-[#c6ff2e] shadow-[0_0_18px_#c6ff2e]"></div>

                      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-[#c6ff2e]/30 bg-black/60 px-4 py-2 backdrop-blur">
                        <span className="relative flex h-2.5 w-2.5">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#c6ff2e] opacity-75"></span>
                          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#c6ff2e]"></span>
                        </span>
                        <span className="whitespace-nowrap font-mono text-[11px] uppercase tracking-wider text-[#c6ff2e]">
                          Available for work
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>

              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-2 top-10 rounded-2xl border border-white/10 bg-[#101624]/95 px-3 py-2.5 shadow-xl backdrop-blur sm:-right-6 sm:px-4 sm:py-3"
              >
                <p className="font-mono text-[9px] uppercase tracking-widest text-gray-500 sm:text-[10px]">
                  Focus
                </p>
                <p className="text-xs font-bold text-[#19f0d0] sm:text-sm">AI Automation</p>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-2 bottom-24 rounded-2xl border border-white/10 bg-[#101624]/95 px-3 py-2.5 shadow-xl backdrop-blur sm:-left-6 sm:px-4 sm:py-3"
              >
                <p className="font-mono text-[9px] uppercase tracking-widest text-gray-500 sm:text-[10px]">
                  Ships
                </p>
                <p className="text-xs font-bold text-[#c6ff2e] sm:text-sm">Production-Ready</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-3/5"
          >
            <h2 className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-[#c6ff2e] sm:text-sm">
              <DecodeText text="ABOUT ME" />
            </h2>
            <h1 className="mb-6 text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl">
              I Build{" "}
              <span className="text-shine bg-gradient-to-r from-[#c6ff2e] via-[#19f0d0] to-[#ff2ea6]">
                AI That Works
              </span>{" "}
              For Your Business
            </h1>

            <p className="mb-8 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
              I&apos;m <span className="font-bold text-white">Mohammad Ayan</span> — an AI Agent
              Specialist &amp; Full-Stack Developer. I help businesses turn slow, manual processes
              into intelligent systems that <span className="text-white">save time</span>,{" "}
              <span className="text-white">win more customers</span> and{" "}
              <span className="text-white">grow revenue</span>.
            </p>

            <Terminal />

            <div className="mt-12">
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-[#c6ff2e] sm:text-sm">
                How I help your business
              </p>

              <p className="mb-5 max-w-2xl text-base leading-relaxed text-gray-400">
                Your website is your hardest-working employee. It stays open 24/7, builds trust the
                moment a visitor lands, and turns strangers into paying customers — even while you
                sleep.
              </p>
              <p className="mb-8 max-w-2xl text-base leading-relaxed text-gray-400">
                Automation removes the repetitive work that eats your day. Orders get taken,
                questions get answered and follow-ups get sent by AI automatically — so you stop
                losing customers to slow replies and stop missing orders after hours.
              </p>

              <ul className="grid gap-3 sm:grid-cols-2">
                {benefits.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-gray-300">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-[#c6ff2e] to-[#19f0d0]"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 mb-4 font-mono text-xs uppercase tracking-[0.25em] text-gray-500">
              Tools I use
            </div>
            <div className="mb-10 flex flex-wrap gap-2">
              {stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-gray-300 transition-colors hover:border-[#c6ff2e]/40 hover:text-[#c6ff2e]"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link href="#contact" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#c6ff2e] to-[#19f0d0] px-8 py-4 font-bold text-black shadow-xl sm:w-auto"
                >
                  Start a Project <ArrowRight className="h-4 w-4" />
                </motion.button>
              </Link>
              <Link href="#projects" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.08)" }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full rounded-2xl border border-white/15 px-8 py-4 font-bold text-white backdrop-blur transition-all sm:w-auto"
                >
                  View Work
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
