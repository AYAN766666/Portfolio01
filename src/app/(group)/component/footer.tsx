
import Link from "next/link";
import Image from "next/image";
import coding from "../../../../public/lobo.jpg";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="relative bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white">
      <footer className="backdrop-blur-md border-t border-white/10">
        <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Logo + Name */}
          <div className="flex items-center gap-3 group">
            <div className="rounded-full overflow-hidden transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110 shadow-lg ring-2 ring-cyan-400">
              <Image
                src={coding}
                alt="Logo"
                width={50}
                height={50}
                className="object-cover"
              />
            </div>
            <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 tracking-wide drop-shadow">
              MY LOVE CODING
            </h1>
          </div>

          {/* Copyright */}
          <p className="text-sm text-white/70 text-center md:text-left">
            © 2024 MY LOVE CODING — Crafted with 💙 by Me
          </p>

          {/* LinkedIn */}
          <Link
            href="https://www.linkedin.com/in/aayan-rajput-4817a2292/"
            target="_blank"
            className="group"
          >
            <div className="p-2 bg-white/10 rounded-full shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 group-hover:scale-110 group-hover:rotate-2">
              <FaLinkedin className="text-3xl text-white group-hover:text-cyan-400 transition duration-300" />
            </div>
          </Link>
        </div>
      </footer>

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-full h-full z-[-1] overflow-hidden">
        <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-cyan-500 opacity-20 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-pink-500 opacity-20 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>
    </div>
  );
}
