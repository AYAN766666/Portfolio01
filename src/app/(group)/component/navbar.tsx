"use client"; 

import Image from "next/image";
import Link from "next/link";
import { BiCloudDownload } from "react-icons/bi";
import { MenuIcon } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import image from "../../../../public/lobo.jpg"; 
import { motion } from "framer-motion";

export default function Navbar() {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="sticky top-0 z-50 bg-[#050810]/80 backdrop-blur-xl border-b border-white/5">
      <header className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-4 group cursor-pointer"
          >
            <div className="relative w-12 h-12 rounded-2xl overflow-hidden border border-white/10 group-hover:border-cyan-500/50 transition-colors">
              <Image
                src={image}
                alt="Logo"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter text-white leading-none">
              MOHAMMAD  AYAN <span className="text-cyan-400">DEV</span>
              </span>
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em]">
                Agent AI Specialist
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-sm font-bold text-gray-400 hover:text-white transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden md:block">
            <Link href="#contact">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 bg-white text-black font-bold rounded-xl text-sm hover:bg-cyan-400 hover:text-black transition-colors"
              >
                Let&apos;s Talk
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button className="p-2 text-gray-400 hover:text-white transition-colors">
                  <MenuIcon className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#0b0f1a] border-white/5 text-white">
                <div className="flex flex-col gap-8 mt-16">
                  {navItems.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="text-2xl font-black hover:text-cyan-400 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link href="#contact">
                    <button className="w-full py-4 bg-cyan-500 text-black font-bold rounded-2xl">
                      Let&apos;s Talk
                    </button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </div>
  );
}

