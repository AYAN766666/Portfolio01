import Link from "next/link";
import Image from "next/image";
import coding from "../../../../public/lobo.jpg";
import { FaLinkedin, FaGithub, FaTwitter, FaArrowUp } from "react-icons/fa";
import { FiMail, FiPhone, FiMapPin, FiArrowRight } from "react-icons/fi";

const serviceLinks = [
  { name: "AI Agents", href: "#about" },
  { name: "Workflow Automation", href: "#about" },
  { name: "Web Development", href: "#about" },
  { name: "AI Integrations", href: "#about" },
];

const exploreLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Demo", href: "#demo" },
  { name: "Contact", href: "#contact" },
];

const socials = [
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/mohammad-ayan-4817a2292/",
    label: "LinkedIn",
    hover: "hover:text-[#19f0d0]",
  },
  { icon: <FaGithub />, href: "https://github.com/AYAN766666/", label: "GitHub", hover: "hover:text-white" },
  { icon: <FaTwitter />, href: "#", label: "Twitter", hover: "hover:text-[#c6ff2e]" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-[#050810]">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[42rem] -translate-x-1/2 rounded-full bg-[#c6ff2e]/10 blur-[120px]"></div>

      {/* CTA band */}
      <div className="container relative z-10 mx-auto px-6 pt-20">
        <div className="flex flex-col items-center justify-between gap-8 rounded-[2.5rem] border border-white/10 bg-gradient-to-r from-[#0e1320] to-[#101624] p-10 md:flex-row md:p-12">
          <div className="text-center md:text-left">
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-[#c6ff2e]">
              Have a project in mind?
            </p>
            <h2 className="text-3xl font-black leading-tight text-white md:text-4xl">
              Let&apos;s build something{" "}
              <span className="text-shine bg-gradient-to-r from-[#c6ff2e] via-[#19f0d0] to-[#ff2ea6]">
                great
              </span>{" "}
              together
            </h2>
          </div>
          <Link href="#contact" className="shrink-0">
            <button className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-[#c6ff2e] to-[#19f0d0] px-8 py-4 font-bold text-black shadow-[0_0_30px_rgba(198,255,46,0.25)] transition-transform hover:scale-105">
              Start a Project <FiArrowRight />
            </button>
          </Link>
        </div>
      </div>

      {/* Main columns */}
      <div className="container relative z-10 mx-auto px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5 flex items-center gap-3">
              <div className="h-11 w-11 overflow-hidden rounded-2xl border border-white/10">
                <Image src={coding} alt="Logo" width={44} height={44} className="h-full w-full object-cover" />
              </div>
              <span className="text-lg font-black tracking-tighter text-white">
                MOHAMMAD AYAN <span className="text-[#c6ff2e]">DEV</span>
              </span>
            </div>
            <p className="mb-6 max-w-xs text-sm leading-relaxed text-gray-400">
              I turn slow, manual processes into intelligent AI systems  helping businesses save
              time, win customers and scale with confidence.
            </p>
            <div className="flex items-center gap-4">
              {socials.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  aria-label={s.label}
                  className={`flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-lg text-gray-400 transition-all hover:border-[#c6ff2e]/40 ${s.hover}`}
                >
                  {s.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 font-mono text-xs uppercase tracking-[0.25em] text-white">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-[#c6ff2e]"
                  >
                    <span className="h-px w-0 bg-[#c6ff2e] transition-all duration-300 group-hover:w-4"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="mb-5 font-mono text-xs uppercase tracking-[0.25em] text-white">Explore</h3>
            <ul className="space-y-3">
              {exploreLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-[#c6ff2e]"
                  >
                    <span className="h-px w-0 bg-[#c6ff2e] transition-all duration-300 group-hover:w-4"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 font-mono text-xs uppercase tracking-[0.25em] text-white">
              Get in touch
            </h3>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href="mailto:aayanu52@gmail.com"
                  className="flex items-center gap-3 text-gray-400 transition-colors hover:text-[#c6ff2e]"
                >
                  <FiMail className="text-[#19f0d0]" /> aayanu52@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:03198130598"
                  className="flex items-center gap-3 text-gray-400 transition-colors hover:text-[#c6ff2e]"
                >
                  <FiPhone className="text-[#19f0d0]" /> 03711309805
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <FiMapPin className="text-[#19f0d0]" /> Karachi, Pakistan
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-white/5">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 py-6 md:flex-row">
          <p className="text-center font-mono text-xs uppercase tracking-widest text-gray-500 md:text-left">
            © {new Date().getFullYear()} Mohammad Ayan — Crafted with care
          </p>
          <p className="font-mono text-xs text-gray-600">
            Built with <span className="text-gray-400">Next.js</span> &{" "}
            <span className="text-gray-400">Tailwind</span>
          </p>
          <Link
            href="/"
            aria-label="Back to top"
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold text-gray-300 transition-all hover:border-[#c6ff2e]/40 hover:text-[#c6ff2e]"
          >
            Back to top <FaArrowUp />
          </Link>
        </div>
      </div>
    </footer>
  );
}
