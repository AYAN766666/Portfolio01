"use client";

import Image from "next/image";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import image from "../../../../public/lobo.jpg";
import { motion, useScroll, useSpring } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Demo", href: "#demo" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <div className="sticky top-0 z-50 border-b border-white/5 bg-[#050810]/80 backdrop-blur-xl">
      <motion.div
        style={{ scaleX }}
        className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-gradient-to-r from-[#c6ff2e] via-[#19f0d0] to-[#ff2ea6]"
      ></motion.div>

      <header className="container mx-auto px-4 py-3.5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="group flex cursor-pointer items-center gap-3"
          >
            <div className="relative h-11 w-11 overflow-hidden rounded-2xl p-[2px]">
              <div className="absolute left-1/2 top-1/2 h-[180%] w-[180%] -translate-x-1/2 -translate-y-1/2 animate-spin-slower bg-[conic-gradient(from_0deg,#c6ff2e,#19f0d0,#ff2ea6,#6d5cff,#c6ff2e)]"></div>
              <div className="relative h-full w-full overflow-hidden rounded-[0.9rem]">
                <Image
                  src={image}
                  alt="Logo"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black leading-none tracking-tighter text-white">
                MOHAMMAD AYAN <span className="text-[#c6ff2e]">DEV</span>
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-500">
                Agent AI Specialist
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="group relative text-sm font-bold text-gray-400 transition-colors hover:text-white"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#c6ff2e] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="https://www.linkedin.com/in/mohammad-ayan-4817a2292/"
              target="_blank"
              className="text-lg text-gray-400 transition-colors hover:text-[#c6ff2e]"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="#"
              target="_blank"
              className="text-lg text-gray-400 transition-colors hover:text-white"
            >
              <FaGithub />
            </Link>
            <Link href="#contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#c6ff2e] to-[#19f0d0] px-5 py-2.5 text-sm font-bold text-black shadow-[0_0_20px_rgba(198,255,46,0.25)]"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-black/60"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-black"></span>
                </span>
                Let&apos;s Talk
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button className="p-2 text-gray-400 transition-colors hover:text-white">
                  <MenuIcon className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="border-white/5 bg-[#0b0f1a] text-white">
                <div className="mt-16 flex flex-col gap-7">
                  {navItems.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="text-2xl font-black transition-colors hover:text-[#c6ff2e]"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link href="#contact">
                    <button className="w-full rounded-2xl bg-gradient-to-r from-[#c6ff2e] to-[#19f0d0] py-4 font-bold text-black">
                      Let&apos;s Talk
                    </button>
                  </Link>
                  <div className="flex items-center gap-6 pt-4">
                    <Link
                      href="https://www.linkedin.com/in/mohammad-ayan-4817a2292/"
                      target="_blank"
                      className="text-2xl text-gray-400 hover:text-[#c6ff2e]"
                    >
                      <FaLinkedin />
                    </Link>
                    <Link href="https://github.com/AYAN766666/" target="_blank" className="text-2xl text-gray-400 hover:text-white">
                      <FaGithub />
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </div>
  );
}
