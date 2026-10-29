import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { HiBars3, HiXMark, HiChatBubbleLeftRight, HiArrowDownTray } from 'react-icons/hi2'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const navLinks = [
  { label: 'Home', to: 'home' },
  { label: 'Highlights', to: 'highlights' },
  { label: 'Projects', to: 'projects' },
  { label: 'Experience', to: 'experience' },
  { label: 'Skills', to: 'skills' },
  { label: 'About', to: 'about' },
  { label: 'Certificates', to: 'certificates' },
  { label: 'Services', to: 'services' },
  { label: 'Skill Lab', to: 'skilllab' },
  { label: 'Contact', to: 'contact' },
]

export default function Navbar({ onOpenMessenger }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 25)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050816]/90 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/50 py-3'
          : 'bg-[#050816]/50 backdrop-blur-md border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Status */}
          <Link
            to="home"
            smooth
            duration={500}
            className="cursor-pointer flex items-center gap-3 group"
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#00f5ff] to-[#8b5cf6] p-[2px] transition-transform duration-300 group-hover:scale-105">
                <div className="w-full h-full bg-[#050816] rounded-full flex items-center justify-center font-heading font-black text-sm text-[#00f5ff]">
                  KM
                </div>
              </div>
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#10b981] border-2 border-[#050816] animate-pulse" />
            </div>

            <div className="flex flex-col">
              <span className="font-heading font-bold text-base sm:text-lg text-white tracking-tight flex items-center">
                karan mahalik<span className="text-[#00f5ff]">.</span>
              </span>
              <span className="text-[10px] text-slate-400 font-mono tracking-wider flex items-center gap-1.5 uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
                open to work · data & bi
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth
                duration={500}
                offset={-75}
                spy
                activeClass="!text-[#00f5ff] !bg-[#00f5ff]/10 font-semibold"
                className="px-3 py-1.5 rounded-lg text-xs font-mono text-slate-300 hover:text-white hover:bg-white/5 transition-all cursor-pointer whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Socials & Messenger Button */}
          <div className="hidden md:flex items-center gap-2.5">
            <a
              href="https://github.com/karan-mahalik"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#00f5ff] hover:border-[#00f5ff]/40 transition"
            >
              <FaGithub className="w-4 h-4" />
            </a>

            <a
              href="https://linkedin.com/in/karan-mahalik-122438369"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#00f5ff] hover:border-[#00f5ff]/40 transition"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenMessenger}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-semibold bg-[#00f5ff]/10 text-[#00f5ff] border border-[#00f5ff]/30 hover:bg-[#00f5ff] hover:text-[#050816] transition shadow-sm hover:shadow-[#00f5ff]/20"
            >
              <HiChatBubbleLeftRight className="w-3.5 h-3.5" />
              <span>Messenger</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenMessenger}
              className="p-2 rounded-lg bg-[#00f5ff]/10 text-[#00f5ff] border border-[#00f5ff]/30"
              aria-label="Chat"
            >
              <HiChatBubbleLeftRight className="w-5 h-5" />
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white bg-white/5 border border-white/10"
              aria-label="Toggle Navigation"
            >
              {mobileOpen ? <HiXMark className="w-6 h-6" /> : <HiBars3 className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="xl:hidden bg-[#070b14]/98 backdrop-blur-2xl border-b border-white/10 px-4 py-6 mt-3 max-h-[80vh] overflow-y-auto">
          <div className="grid grid-cols-2 gap-2 mb-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth
                duration={500}
                offset={-75}
                spy
                activeClass="!text-[#00f5ff] !bg-[#00f5ff]/15 font-bold"
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2 rounded-lg text-xs font-mono text-slate-300 hover:text-white hover:bg-white/5 transition block"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <div className="flex gap-2">
              <a
                href="https://github.com/karan-mahalik"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/5 text-slate-300 hover:text-[#00f5ff]"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/karan-mahalik-122438369"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/5 text-slate-300 hover:text-[#00f5ff]"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={() => {
                setMobileOpen(false)
                onOpenMessenger()
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-bold btn-primary"
            >
              <HiChatBubbleLeftRight className="w-4 h-4" />
              Open Messenger
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
