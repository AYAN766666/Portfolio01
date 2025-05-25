
"use client"; 



import Image from "next/image";
import Link from "next/link";
import { BiCloudDownload } from "react-icons/bi";
import { MenuIcon } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import image from "../../../../public/lobo.jpg"; 
import { motion } from "framer-motion";

export default function Navbar() {
  const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <div className="sticky top-0 z-50 bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] bg-opacity-90 backdrop-blur-xl shadow-xl border-b border-white/10">
        
<motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
      >


      <header className="text-white font-sans">
        <div className="container mx-auto flex flex-wrap p-4 items-center justify-between">

          {/* Logo */}
          <div className="flex items-center space-x-3 group">
            <div className="bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-xl rounded-full p-1 shadow-[inset_0_0_10px_rgba(255,255,255,0.2)] transition-transform group-hover:rotate-12 group-hover:scale-105 duration-300">
              <Image
                src={image}
                alt="Logo"
                width={50}
                height={50}
                className="rounded-full"
              />
            </div>
            <span className="text-3xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 drop-shadow-lg">
              LOVE CODING
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 text-lg font-medium">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
                className="relative group transition-all duration-300"
              >
                <span className="text-white/90 group-hover:text-cyan-300 transition">
                  {item}
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Resume Button */}
          <div className="hidden md:block">
            <a href="#" download>
              <button className="relative inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-500 text-white rounded-full shadow-lg hover:scale-105 transition-transform duration-300 hover:shadow-pink-500/50 animate-pulse">
                Coming Soon
                <BiCloudDownload className="text-xl" />
              </button>
            </a>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden"> 
<motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
>


  <Sheet>
    <SheetTrigger asChild> 
     
     

      <button className="text-white hover:text-cyan-400">
        <MenuIcon className="h-6 w-6" />
      </button>
    </SheetTrigger>

    <SheetContent
      side="right" 
     
      
      className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] backdrop-blur-md border-l border-white/10 text-white shadow-xl"
    >
      <div className="flex flex-col gap-6 mt-10">
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
            className="text-lg font-medium hover:text-cyan-300 transition"
          >
            {item}
          </Link>
        ))}
        <a href="#" download>
          <button className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-500 text-white rounded-full shadow-lg hover:scale-105 transition-transform duration-300 hover:shadow-pink-500/50">
            Coming Soon
            <BiCloudDownload className="text-xl" />
          </button>
        </a> 
        
      </div> 
      
    </SheetContent>
  </Sheet> 
  </motion.div>
</div>

          
        </div>
      </header> 
      </motion.div>
    </div>
  );
}

