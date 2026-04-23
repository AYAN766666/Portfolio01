import Link from "next/link";
import Image from "next/image";
import coding from "../../../../public/lobo.jpg";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#050810] border-t border-white/5 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-white/10">
              <Image
                src={coding}
                alt="Logo"
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
            <span className="text-xl font-black text-white tracking-tighter">
             MOHAMMAD AYAN <span className="text-cyan-400">DEV</span>
            </span>
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-sm font-mono uppercase tracking-widest">
            © 2026 Crafted with ❤️ by Mohammad Ayan
          </p>

          {/* Socials */}
          <div className="flex items-center gap-6">
            <Link
              href="https://www.linkedin.com/in/mohammad-ayan-4817a2292/"
              target="_blank"
              className="text-gray-400 hover:text-cyan-400 transition-colors text-2xl"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="#"
              target="_blank"
              className="text-gray-400 hover:text-white transition-colors text-2xl"
            >
              <FaGithub />
            </Link>
            <Link
              href="#"
              target="_blank"
              className="text-gray-400 hover:text-blue-400 transition-colors text-2xl"
            >
              <FaTwitter />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

