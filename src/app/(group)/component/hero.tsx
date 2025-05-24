'use client';

import Link from "next/link";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import pic from "../../../../public/ayan.jpg";

export default function Hero() {
  const description =
    "Delivering Fast, Secure & Scalable Websites | Next.js, Sanity & Tailwind CSS Expert | Modern Python & AI Solutions | Full Stack Developer Committed to Excellence | Free Consultation";

  return (
    <section className="relative bg-gradient-to-tr from-slate-900 via-indigo-900 to-purple-900 text-white overflow-hidden">
      {/* Background glows */}
      <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-gradient-to-br from-pink-600 via-purple-700 to-cyan-500 rounded-full opacity-30 blur-3xl animate-animateGlow"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-gradient-to-tr from-cyan-400 via-blue-600 to-indigo-800 rounded-full opacity-20 blur-2xl animate-animateGlow animation-delay-1000"></div>

      <div className="container mx-auto px-5 py-28 flex flex-col md:flex-row items-center md:items-start md:justify-between gap-12 md:gap-0">
        {/* Text Content */}
        <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide leading-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 drop-shadow-lg">
            I am a&nbsp;
            <Typewriter
              options={{
                strings: ["Full Stack Web Developer", "Python Developer"],
                autoStart: true,
                loop: true,
                cursor: "|",
                delay: 70,
                deleteSpeed: 50,
              }}
            />
          </h1>
          <div className="w-24 h-1 bg-cyan-400 rounded mb-6"></div>

          <p className="max-w-md text-gray-300 font-medium mb-8">
            {description}
          </p>

          <Link href="#contact">
            <button className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-full text-white font-semibold shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
              Contact Me
            </button>
          </Link>
        </div>

        {/* Image with effects */}
        <div className="md:w-1/2 flex justify-center md:justify-end z-10">
          <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-2xl ring-4 ring-cyan-500 hover:ring-pink-500 transition-all duration-500 transform hover:scale-105 hover:grayscale-0 grayscale cursor-pointer">
            <Image
              src={pic}
              alt="Profile Picture"
              fill
              style={{ objectFit: "cover" }}
              priority
              className="transition-all duration-500 ease-in-out"
            />
            {/* Overlay subtle gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-500/30 to-pink-500/30 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-full pointer-events-none"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes animateGlow {
          0%, 100% {
            opacity: 0.3;
            transform: translateY(0) scale(1);
          }
          50% {
            opacity: 0.5;
            transform: translateY(-10px) scale(1.05);
          }
        }
        .animate-animateGlow {
          animation: animateGlow 5s ease-in-out infinite;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}


