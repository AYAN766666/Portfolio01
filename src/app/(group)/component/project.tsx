"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink, FiGithub, FiPlay, FiX } from "react-icons/fi";
import TiltCard from "./tilt";
import Aurora from "./aurora";
import DecodeText from "./decode-text";

// Replace the "#" value below with your real link.
const LINKS = {
  repoScanner: "#",
};

type Project = {
  title: string;
  tagline: string;
  description: string;
  media: { type: "image" | "video"; src: string };
  badge: string;
  badgeColor: string;
  accent: string;
  tags: string[];
  link?: string;
};

const featured: Project = {
  title: "AI Ordering Agent",
  tagline: "Autonomous order-taking agent",
  description:
    "An autonomous AI agent that takes real customer orders end-to-end. It understands natural language, manages the cart, applies changes and confirms orders with zero human input — wired into a live storefront through tool calling. This is the real agent running a live session, not a mock-up.",
  media: { type: "video", src: "/ordering-agent.mp4" },
  badge: "Flagship · Agent AI",
  badgeColor: "from-[#ff2ea6] to-[#6d5cff]",
  accent: "from-[#ff2ea6] to-[#6d5cff]",
  tags: ["Next.js", "OpenAI", "Function Calling", "Live Agent"],
};

const projects: Project[] = [
  {
    title: "Repo Scanner + Dockerize",
    tagline: "Repo security, health & containerization",
    description:
      "One tool that scans any Git repository and runs a deep health check: flags leaked secrets and API keys, detects exposed sensitive IDs, and surfaces code-quality issues. Everything ships fully Dockerized — spin it up with a single command.",
    media: { type: "image", src: "/repo-scanner.png" },
    badge: "Security · Dockerized",
    badgeColor: "from-[#c6ff2e] to-[#ff2ea6]",
    accent: "from-[#c6ff2e] to-[#ff2ea6]",
    tags: ["Node.js", "Security", "Static Analysis", "Docker"],
    link: "https://infradoctor-frontend.vercel.app/",
  },
  {
    title: "Physical AI & Humanoid Robotics",
    tagline: "An AI book that answers back",
    description:
      "An interactive AI-powered book platform where an embedded AI Agent holds the entire book's knowledge. Readers ask the agent anything about Physical AI & humanoid robotics and get grounded, instant answers. Built during a hackathon.",
    media: { type: "image", src: "/robotics-book.png" },
    badge: "Hackathon · RAG Agent",
    badgeColor: "from-[#6d5cff] to-[#19f0d0]",
    accent: "from-[#6d5cff] to-[#19f0d0]",
    tags: ["Next.js", "RAG", "OpenAI", "Tailwind"],
    link: "https://physical-ai-humanoid-robotics-six-kappa.vercel.app/",
  },
  {
    title: "AI-Integrated Todo Tasker",
    tagline: "A task manager that thinks",
    description:
      "A next-generation task manager with a built-in AI agent. Instead of adding tasks manually, users describe their goals and the agent creates, prioritizes and organises the work autonomously. Built during a hackathon.",
    media: { type: "image", src: "/todo-app.png" },
    badge: "Hackathon · AI SaaS",
    badgeColor: "from-[#19f0d0] to-[#c6ff2e]",
    accent: "from-[#19f0d0] to-[#c6ff2e]",
    tags: ["Next.js", "TypeScript", "OpenAI", "MongoDB"],
    link: "https://full-stack-todo-web-two.vercel.app/",
  },
  {
    title: "E-Commerce Digital Store",
    tagline: "High-conversion storefront",
    description:
      "A high-performance e-commerce storefront with seamless product discovery, a smooth cart flow and a polished checkout experience — engineered for speed, clarity and conversion.",
    media: { type: "image", src: "/ecommerce.png" },
    badge: "Full-Stack Web",
    badgeColor: "from-[#c6ff2e] to-[#19f0d0]",
    accent: "from-[#c6ff2e] to-[#19f0d0]",
    tags: ["Next.js", "Tailwind", "Stripe", "Responsive"],
    link: "https://e-commerce-website-kaw7.vercel.app/",
  },
];

export default function Project() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <div id="projects" className="relative overflow-hidden bg-[#050810] px-5 py-32 md:px-20">
      <Aurora />
      <div className="absolute inset-0 bg-grid bg-grid-fade pointer-events-none"></div>

      <section className="container relative z-10 mx-auto">
        <div className="mb-20 flex w-full flex-col text-center">
          <span className="mb-4 font-mono tracking-[0.3em] text-[#c6ff2e]">
            <DecodeText text="SELECTED WORKS" />
          </span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 text-4xl font-black tracking-tight text-white md:text-6xl"
          >
            Innovative{" "}
            <span className="text-shine bg-gradient-to-r from-[#c6ff2e] via-[#19f0d0] to-[#ff2ea6]">
              Solutions
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-400 md:text-xl"
          >
            Real products where AI meets cutting-edge engineering — from autonomous agents and
            security tooling to containerised infrastructure.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="relative overflow-hidden rounded-[2.25rem] p-[2px]">
            <div className="absolute left-1/2 top-1/2 h-[220%] w-[220%] -translate-x-1/2 -translate-y-1/2 animate-spin-slower bg-[conic-gradient(from_0deg,#c6ff2e,#ff2ea6,#6d5cff,#19f0d0,#c6ff2e)] opacity-70"></div>

            <div className="relative grid overflow-hidden rounded-[2.1rem] bg-[#0b1120]/95 backdrop-blur-xl lg:grid-cols-5">
              <div className="group relative lg:col-span-3">
                <div className="relative aspect-video w-full overflow-hidden">
                  <video
                    src={featured.media.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b1120] via-transparent to-transparent"></div>

                  <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-black/50 px-3 py-1.5 backdrop-blur">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#c6ff2e] opacity-75"></span>
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#c6ff2e]"></span>
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-white">
                      Live Demo
                    </span>
                  </div>

                  <button
                    onClick={() => setActiveVideo(featured.media.src)}
                    aria-label="Play demo"
                    className="absolute inset-0 z-10 flex items-center justify-center"
                  >
                    <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
                      <FiPlay className="ml-1 text-xl" />
                    </span>
                  </button>
                </div>
              </div>

              <div className="flex flex-col justify-center p-8 lg:col-span-2 lg:p-10">
                <span
                  className={`mb-5 w-fit rounded-full bg-gradient-to-r ${featured.badgeColor} px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white shadow-lg`}
                >
                  {featured.badge}
                </span>
                <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[#19f0d0]">
                  {featured.tagline}
                </p>
                <h2 className="mb-4 text-3xl font-black text-white md:text-4xl">
                  {featured.title}
                </h2>
                <p className="mb-6 text-sm leading-relaxed text-gray-400">
                  {featured.description}
                </p>
                <div className="mb-6 flex flex-wrap gap-6">
                  {[
                    { k: "0", v: "Human input" },
                    { k: "<1s", v: "Response" },
                    { k: "24/7", v: "Availability" },
                  ].map((metric) => (
                    <div key={metric.v} className="flex flex-col">
                      <span className="text-xl font-black text-white">{metric.k}</span>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-gray-500">
                        {metric.v}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mb-8 flex flex-wrap gap-2">
                  {featured.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <span className="flex items-center gap-2 rounded-xl border border-[#c6ff2e]/30 bg-[#c6ff2e]/5 px-5 py-3 text-sm font-bold text-[#c6ff2e]">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#c6ff2e] opacity-75"></span>
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-[#c6ff2e]"></span>
                    </span>
                    Agent Online
                  </span>
                  <button
                    onClick={() => setActiveVideo(featured.media.src)}
                    className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
                  >
                    <FiPlay /> Watch Full Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-8 perspective-2000 md:grid-cols-2">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 2) * 0.1, duration: 0.6 }}
              className="h-full"
            >
              <TiltCard className="h-full rounded-[2rem]" intensity={9}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/5 bg-[#0e1320]/90 backdrop-blur-xl transition-colors duration-500 hover:border-white/15">
                  <div
                    className={`pointer-events-none absolute -inset-px rounded-[2rem] bg-gradient-to-br ${project.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-20`}
                  ></div>

                  <div className="relative h-60 w-full overflow-hidden">
                    <Image
                      src={project.media.src}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e1320] via-[#0e1320]/20 to-transparent"></div>
                    <div className="absolute top-5 left-5">
                      <span
                        className={`rounded-full bg-gradient-to-r ${project.badgeColor} px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white shadow-lg`}
                      >
                        {project.badge}
                      </span>
                    </div>
                  </div>

                  <div className="relative flex flex-1 flex-col p-7">
                    <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[#19f0d0]/80">
                      {project.tagline}
                    </p>
                    <h2 className="mb-3 text-2xl font-bold text-white transition-colors group-hover:text-[#c6ff2e]">
                      {project.title}
                    </h2>
                    <p className="mb-6 text-sm leading-relaxed text-gray-400">
                      {project.description}
                    </p>

                    <div className="mb-8 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto flex items-center justify-between">
                      <Link
                        href={project.link ?? "#"}
                        target="_blank"
                        className="group/link flex items-center gap-2 text-sm font-bold text-white transition-colors hover:text-[#c6ff2e]"
                      >
                        <span>Live Demo</span>
                        <FiExternalLink className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                      </Link>
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-gray-400 transition-colors hover:text-white">
                        <FiGithub />
                      </span>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideo(null)}
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
                onClick={() => setActiveVideo(null)}
                aria-label="Close"
                className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur hover:bg-white/20"
              >
                <FiX />
              </button>
              <video src={activeVideo} controls autoPlay className="h-full w-full" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
