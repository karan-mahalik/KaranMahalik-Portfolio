import { Link } from 'react-scroll'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { HiEnvelope, HiHeart } from 'react-icons/hi2'

export default function Footer() {
  return (
    <footer className="py-12 bg-[#050816] border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Logo & Subtitle */}
          <div className="flex flex-col items-center md:items-start">
            <Link
              to="home"
              smooth
              duration={500}
              className="cursor-pointer flex items-center gap-2 mb-1"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#00f5ff] to-[#8b5cf6] p-[1.5px]">
                <div className="w-full h-full bg-[#050816] rounded-lg flex items-center justify-center font-heading font-black text-xs text-[#00f5ff]">
                  KM
                </div>
              </div>
              <span className="font-heading font-bold text-lg text-white">
                karan mahalik<span className="text-[#00f5ff]">.</span>
              </span>
            </Link>
            <p className="text-xs text-slate-400 font-mono">
              Data Analyst · SQL Developer · Power BI Developer
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400">
            <Link to="home" smooth duration={500} offset={-75} className="hover:text-[#00f5ff] transition cursor-pointer">
              Home
            </Link>
            <Link to="highlights" smooth duration={500} offset={-75} className="hover:text-[#00f5ff] transition cursor-pointer">
              Proof of Work
            </Link>
            <Link to="projects" smooth duration={500} offset={-75} className="hover:text-[#00f5ff] transition cursor-pointer">
              Projects
            </Link>
            <Link to="experience" smooth duration={500} offset={-75} className="hover:text-[#00f5ff] transition cursor-pointer">
              Experience
            </Link>
            <Link to="skills" smooth duration={500} offset={-75} className="hover:text-[#00f5ff] transition cursor-pointer">
              Skills
            </Link>
            <Link to="about" smooth duration={500} offset={-75} className="hover:text-[#00f5ff] transition cursor-pointer">
              About
            </Link>
            <Link to="contact" smooth duration={500} offset={-75} className="hover:text-[#00f5ff] transition cursor-pointer">
              Contact
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/karan-mahalik"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#00f5ff] hover:border-[#00f5ff]/40 transition"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/karan-mahalik-122438369"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#8b5cf6] hover:border-[#8b5cf6]/40 transition"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:karanmahalik88@gmail.com"
              aria-label="Email"
              className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#10b981] hover:border-[#10b981]/40 transition"
            >
              <HiEnvelope className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-500 gap-2">
          <div>
            © {new Date().getFullYear()} Karan Mahalik. All rights reserved. Built with React & Tailwind CSS.
          </div>
          <div className="flex items-center gap-2">
            <span>Designed for precision & analytical impact</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
          </div>
        </div>
      </div>
    </footer>
  )
}
