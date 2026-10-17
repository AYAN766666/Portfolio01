"use client";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiOpenai,
  SiPostgresql,
} from "react-icons/si";
import { TbBrain, TbDatabase } from "react-icons/tb";
import { motion } from "framer-motion";
import TiltCard from "./tilt";
import Aurora from "./aurora";
import DecodeText from "./decode-text";

const skillsData = [
  { name: "Next.js", level: 95, icon: <SiNextdotjs />, color: "from-white to-gray-400" },
  { name: "TypeScript", level: 92, icon: <SiTypescript />, color: "from-blue-400 to-indigo-600" },
  { name: "JavaScript", level: 90, icon: <SiJavascript />, color: "from-yellow-300 to-orange-500" },
  { name: "Python", level: 90, icon: <SiPython />, color: "from-blue-500 to-yellow-400" },
  { name: "OpenAI", level: 96, icon: <SiOpenai />, color: "from-green-400 to-emerald-600" },
  { name: "LLM", level: 94, icon: <TbBrain />, color: "from-[#ff2ea6] to-[#6d5cff]" },
  { name: "Database", level: 86, icon: <TbDatabase />, color: "from-[#19f0d0] to-[#c6ff2e]" },
  { name: "PostgreSQL", level: 85, icon: <SiPostgresql />, color: "from-blue-400 to-indigo-500" },
];

export default function Skills() {
  return (
    <div id="skills" className="relative overflow-hidden bg-[#050810] py-24">
      <Aurora />
      <div className="absolute inset-0 bg-grid bg-grid-fade pointer-events-none"></div>

      <section className="container mx-auto px-5 relative z-10">
        <div className="mb-20 flex w-full flex-col text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 font-bold tracking-[0.3em] text-[#c6ff2e]"
          >
            <DecodeText text="TECHNICAL ARSENAL" />
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-6 text-4xl font-black text-white sm:text-5xl"
          >
            My Expert{" "}
            <span className="text-shine bg-gradient-to-r from-[#c6ff2e] via-[#19f0d0] to-[#ff2ea6]">
              Skills
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-gray-400"
          >
            A modern stack for building intelligent, scalable and high-performance digital
            experiences — from AI agents to containerised infrastructure.
          </motion.p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 perspective-2000">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 3) * 0.08, duration: 0.5 }}
            >
              <TiltCard className="h-full rounded-[1.75rem]" intensity={10}>
                <div className="group relative h-full overflow-hidden rounded-[1.75rem] border border-white/5 bg-[#101624] p-7 transition-all duration-500 hover:border-[#c6ff2e]/40 hover:shadow-[0_0_40px_rgba(198,255,46,0.14)]">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>

                  <div className="relative mb-7 flex items-center justify-between">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${skill.color} text-3xl text-white shadow-lg transition-transform duration-500 group-hover:rotate-12`}
                    >
                      {skill.icon}
                    </div>
                    <span className="text-4xl font-black text-white/10 transition-colors group-hover:text-[#c6ff2e]/25">
                      {skill.level}%
                    </span>
                  </div>

                  <h2 className="relative mb-6 text-xl font-bold text-white transition-colors group-hover:text-[#c6ff2e]">
                    {skill.name}
                  </h2>

                  <div className="relative h-2.5 w-full overflow-hidden rounded-full bg-gray-800">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.3, ease: "circOut" }}
                      className={`absolute left-0 top-0 h-full rounded-full bg-gradient-to-r ${skill.color}`}
                    ></motion.div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
