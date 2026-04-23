'use client';

import Link from "next/link";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import pic from "../../../../public/gemini-profile.png";
import { motion } from "framer-motion";

export default function Hero() { 

  const description =
    "I help businesses automate workflows, reduce manual work, and generate more leads by building custom AI solutions and high-performance websites.";

  return ( 
    <>
<motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
    <section className="relative bg-[#0b0f1a] text-white overflow-hidden min-h-[90vh] flex items-center">
      {/* Dynamic Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] animate-pulse delay-700"></div>
        <div className="absolute -bottom-40 left-1/4 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-[80px] animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-5 py-20 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        {/* Text Content */}
        <div className="md:w-3/5 flex flex-col items-center md:items-start text-center md:text-left">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="text-cyan-400 font-mono tracking-widest text-lg mb-4"
          >
            THE FUTURE OF AI IS HERE
          </motion.h2>
          
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight mb-6 text-white">
            I am <br />
            <span className="text-cyan-400">
              <Typewriter
                options={{
                  strings: [
                    "A Web Developer",
                    "An AI Automation Expert",
                  ],
                  autoStart: true,
                  loop: true,
                  cursor: "|",
                  delay: 60,
                  deleteSpeed: 40,
                }}
              />
            </span>
          </h1>
          
          <div className="w-32 h-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mb-8"></div>

          <p className="max-w-xl text-gray-400 text-lg md:text-xl font-medium mb-10 leading-relaxed">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link href="#contact">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-white font-bold shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all"
              >
                Let&apos;s Build Together
              </motion.button>
            </Link>
            <Link href="#projects">
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 border-2 border-cyan-500/50 rounded-xl text-white font-bold backdrop-blur-sm transition-all"
              >
                View Works
              </motion.button>
            </Link>
          </div>
        </div>

        {/* Image with Advanced Effects */}
        <div className="md:w-2/5 flex justify-center md:justify-end">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
            className="relative"
          >
            {/* Outer Glow Circles */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500 to-purple-600 rounded-full opacity-30 blur-2xl animate-spin-slow"></div>
            
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-[40px] overflow-hidden shadow-2xl ring-8 ring-white/5 group">
              <Image
                src={pic}
                alt="Mohammad Ayan - AI Developer"
                fill
                style={{ objectFit: "cover" }}
                priority
                className="transition-all duration-700 ease-in-out group-hover:scale-110"
              />
              {/* Futuristic Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Scanner Line Animation */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-cyan-400 shadow-[0_0_15px_#22d3ee] animate-scan z-20"></div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% { top: 0; }
          100% { top: 100%; }
        }
        .animate-scan {
          animation: scan 4s linear infinite;
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section> 
    </motion.div>
    </>
  );
}




