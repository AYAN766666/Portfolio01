"use client";

import Link from "next/link";
import Image from "next/image"; 
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const projects = [
  {
    title: "E-Commerce Digital Store",
    description: "A high-performance e-commerce platform built with Next.js and Tailwind CSS, featuring seamless product navigation and a modern shopping experience.",
    image: "/ecommerce.png",
    tag: "Full Stack Web",
    link: "https://e-commerce-website-kaw7.vercel.app/",
    color: "from-blue-600 to-cyan-500"
  },
  {
    title: "Physical AI & Humanoid Robotics",
    description: "An interactive AI-powered book platform where an integrated AI Agent holds all the book's knowledge. Users can ask the agent anything about robotics for instant answers.",
    image: "/robotics-book.png",
    tag: "Agent AI / Next.js",
    link: "https://physical-ai-humanoid-robotics-six-kappa.vercel.app/",
    color: "from-purple-600 to-pink-500"
  },
  {
    title: "AI-Integrated Todo Tasker",
    description: "A next-generation Todo app with AI integration. The AI doesn't just manage tasks; it can autonomously create and organize them based on user intent.",
    image: "/todo-app.png",
    tag: "AI Automation / SaaS",
    link: "https://full-stack-todo-web-two.vercel.app/",
    color: "from-green-600 to-emerald-500"
  },
];

export default function Project() {
  return (  
    <div id="projects" className="bg-[#0b0f1a] py-32 px-5 md:px-20 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px]"></div>

      <section className="container mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-cyan-400 font-mono tracking-widest mb-4"
          >
            SELECTED WORKS
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-6 text-white tracking-tight"
          >
            Innovative <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Solutions</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="max-w-3xl mx-auto leading-relaxed text-gray-400 text-lg md:text-xl"
          >
            Explore my latest projects where AI meets cutting-edge web development to solve real-world problems.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -15 }}
              className="group relative bg-[#161b2a] rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#161b2a] via-transparent to-transparent"></div>
                
                {/* Tag */}
                <div className="absolute top-6 left-6">
                  <span className={`px-4 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r ${project.color} shadow-lg`}>
                    {project.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 pt-2">
                <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <Link
                    href={project.link}
                    target="_blank"
                    className="flex items-center gap-2 text-white font-bold hover:text-cyan-400 transition-colors group/link"
                  >
                    <span>Live Demo</span>
                    <FiExternalLink className="transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
                  </Link>
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer">
                    <FiGithub />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div> 
  );
}

