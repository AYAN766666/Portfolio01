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
            I am a passionate <strong>Full Stack Developer</strong> skilled in crafting
            high-performance, scalable web applications using <strong>Next.js</strong>,
            <strong> Tailwind CSS</strong>, and <strong>Sanity CMS</strong>. With a focus on
            clean, intuitive design and seamless user experiences, I build websites that
            not only look stunning but also perform flawlessly across devices.
          </p>

          <p className="mb-6 leading-relaxed text-gray-300">
            In addition to front-end and back-end development, I am exploring the dynamic
            realm of <strong>Artificial Intelligence</strong>, integrating smart features and
            automation to make applications more intelligent and user-centric.
          </p>

          <p className="mb-6 leading-relaxed text-gray-300">
            I also create innovative Python scripts for automation and productivity,
            demonstrating my problem-solving mindset and passion for leveraging technology
            to simplify complex tasks.
          </p>

          <h3 className="text-purple-400 font-semibold mb-3 text-xl">Core Skills:</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-300 mb-8">
            <li>Full Stack Development with Next.js, Tailwind CSS & Node.js</li>
            <li>CMS Integration via Sanity for dynamic content management</li>
            <li>Python scripting for automation and AI-powered tools</li>
            <li>Mobile-first, fast-loading, and responsive designs</li>
            <li>Clear communication & reliable project delivery</li>
          </ul>

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

