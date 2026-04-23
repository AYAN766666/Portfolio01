"use client";

import Image from "next/image";
import Link from "next/link";
import about from '../../../../public/gemini-profile.png';
import { motion } from "framer-motion";

export default function About() {
  return ( 
    <section id="about" className="relative bg-[#050810] py-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500 to-purple-600 rounded-[3rem] opacity-20 blur-xl group-hover:opacity-40 transition-opacity"></div>
            <div className="relative rounded-[2.5rem] overflow-hidden border-2 border-white/10 shadow-2xl aspect-[4/5]">
              <Image
                src={about}
                alt="About Me"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050810] via-transparent to-transparent opacity-60"></div>
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <h2 className="text-cyan-400 font-mono tracking-widest text-sm mb-4 uppercase">
              The Mind Behind the Machine
            </h2>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
              Crafting Intelligence with <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Precision Code</span>
            </h1>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                My name is <span className="text-white font-bold">Mohammad Ayan</span>, an <span className="text-white font-bold">AI Agent Specialist</span> and <span className="text-white font-bold">Full-Stack Web Developer</span>. I help businesses automate workflows, save time, and generate more leads by building high-performance websites and AI-powered systems.
              </p>
              
              <p>
                I work with <span className="text-cyan-400">Next.js</span>, <span className="text-purple-400">TypeScript</span>, and <span className="text-blue-400">Python</span> to develop scalable web applications and integrate custom AI agents powered by large language models.
              </p>

              <p>
                From e-commerce platforms to AI-driven tools, I focus on building fast, secure, and user-friendly solutions ready for real-world use.
              </p>

              <p className="italic text-cyan-400/80">
                Focused on building solutions that drive real business growth.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-6">
              <div className="flex flex-col">
                <span className="text-3xl font-black text-white">25+</span>
                <span className="text-gray-500 text-sm font-mono uppercase tracking-tighter">AI Agents Built</span>
              </div>
              <div className="w-[1px] h-12 bg-white/10 hidden sm:block"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-black text-white">100%</span>
                <span className="text-gray-500 text-sm font-mono uppercase tracking-tighter">Code Integrity</span>
              </div>
            </div>

            <div className="mt-12">
              <Link href="#contact">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-4 px-10 rounded-2xl shadow-xl transition-all"
                >
                  Start a Project
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}



