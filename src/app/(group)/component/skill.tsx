"use client";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiJavascript, SiPython, SiOpenai } from "react-icons/si";
import { useEffect, useState } from "react"; 
import { motion } from "framer-motion";

const skillsData = [
  { name: "Next.js", level: 95, icon: <SiNextdotjs />, color: "from-white to-gray-400" },
  { name: "Tailwind CSS", level: 100, icon: <SiTailwindcss />, color: "from-cyan-400 to-blue-500" },
  { name: "OpenAI", level: 96, icon: <SiOpenai />, color: "from-green-400 to-emerald-600" },
  { name: "TypeScript", level: 92, icon: <SiTypescript />, color: "from-blue-400 to-indigo-600" },
  { name: "JavaScript", level: 90, icon: <SiJavascript />, color: "from-yellow-300 to-orange-500" },
  { name: "Python", level: 90, icon: <SiPython />, color: "from-blue-500 to-yellow-400" },
];

export default function Skills() {
  return (
    <div id="skills" className="relative bg-[#050810] py-24 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]"></div>
      </div>

      <section className="container px-5 mx-auto relative z-10">
        <div className="flex flex-col text-center w-full mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-cyan-400 tracking-[0.3em] font-bold text-sm mb-4 uppercase"
          >
            Technical Arsenal
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="sm:text-5xl text-4xl font-black text-white mb-6"
          >
            My Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Skills</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-4 max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed"
          >
            Mastering the modern tech stack to build intelligent, scalable, and high-performance digital experiences.
          </motion.p>
        </div> 

        <div className="flex flex-wrap justify-center -m-4"> 
          {skillsData.map((skill, index) => (
            <motion.div 
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="p-4 w-full md:w-1/3"
            > 
              <div className="group relative bg-[#101624] border border-white/5 p-8 rounded-[2rem] overflow-hidden transition-all duration-500 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]">
                {/* Progress Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="flex items-center justify-between mb-8">
                  <div className={`w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br ${skill.color} text-white text-3xl shadow-lg transform transition-transform group-hover:rotate-12`}>
                    {skill.icon}
                  </div>
                  <span className="text-4xl font-black text-white/10 group-hover:text-cyan-400/20 transition-colors">
                    {skill.level}%
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-white mb-6 group-hover:text-cyan-400 transition-colors">
                  {skill.name}
                </h2>

                {/* Custom Progress Bar */}
                <div className="relative h-2.5 w-full bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
                    className={`absolute top-0 left-0 h-full rounded-full bg-gradient-to-r ${skill.color}`}
                  ></motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
