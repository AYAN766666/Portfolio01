"use client";

import Image from "next/image";
import about from '../../../../public/ayan.jpg';
import { useEffect, useState } from "react"; 
import { motion } from "framer-motion";

export default function About() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return ( 
    <>  
<motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
      >

    <section 
  
      id="about" 

      className="min-h-screen bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-700 flex items-center justify-center px-6 py-20"
    >
      <div
        className={`max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start gap-12
          transition-opacity duration-1000 ease-out
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        {/* Image with frame and shadow */}
        <div className="relative group rounded-3xl shadow-2xl overflow-hidden border-4 border-purple-600 w-72 h-96 md:w-80 md:h-[420px]">
          <Image
            src={about}
            alt="About Me"
            className="object-cover w-full h-full filter grayscale group-hover:grayscale-0 transition-all duration-700"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40 rounded-3xl pointer-events-none"></div>
        </div>

        {/* Text content with glassmorphism */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 max-w-xl text-white shadow-lg">
          <h2 className="text-5xl font-extrabold mb-6 tracking-wide drop-shadow-lg text-purple-300">
            About Me
          </h2>

          <p className="mb-6 leading-relaxed text-gray-300">
            I am a Full-Stack AI Developer with expertise in Next.js, TypeScript, Python, and OpenAI, specializing in building secure, scalable, and production-ready websites and AI systems.
          </p>

          <p className="mb-6 leading-relaxed text-gray-300">
            I help businesses and startups launch high-performance, modern websites tailored to their brand and goals. I also implement custom AI agents to automate processes and boost operational efficiency.
          </p>

          <p className="mb-6 leading-relaxed text-gray-300">
            My mission is to transform your business ideas into practical, revenue-generating websites and intelligent solutions.
          </p>

          <p className="mb-6 leading-relaxed text-gray-300">
            I offer FREE Web & AI consultations to understand your requirements, suggest improvements, and create a roadmap that perfectly aligns with your business objectives.
          </p>

          <p className="mb-6 leading-relaxed text-gray-300">
            Whether you need a professional business website or an intelligent AI agent, I deliver solutions that are efficient, reliable, and production-ready.
          </p>

          <p className="mb-6 leading-relaxed text-gray-300">
            Let&apos;s collaborate to grow your business with cutting-edge web technology and AI.
          </p>

          <a href="w-8ben.pdf" target="_blank" rel="noopener noreferrer">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-xl shadow-lg transition-colors duration-300">
              View My CV
            </button>
          </a>
        </div>
      </div>
    </section>  
    </motion.div>
    </>
  );
}

