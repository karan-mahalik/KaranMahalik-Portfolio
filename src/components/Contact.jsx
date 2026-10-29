import { useState } from 'react'
import {
  HiEnvelope,
  HiPhone,
  HiMapPin,
  HiPaperAirplane,
  HiClipboardDocument,
  HiCheck,
} from 'react-icons/hi2'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [copiedEmail, setCopiedEmail] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('karanmahalik88@gmail.com')
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Open user's default email client pre-filled
    const mailto = `mailto:karanmahalik88@gmail.com?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Inquiry from ' + formData.name
    )}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
    )}`
    window.location.href = mailto
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 relative bg-[#070b14]/70 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-[#00f5ff] uppercase tracking-[0.25em] mb-2">
            <span>Section 10 // Contact & Opportunities</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight">
            let&apos;s turn your data into <span className="text-gradient">verified decisions</span>
            <span className="text-[#00f5ff]">.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl font-sans">
            Currently interviewing for full-time Data Analyst, BI Developer, and SQL Developer opportunities (Class of 2026). Let&apos;s build impactful analytics together.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Contact Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <div className="studio-card p-6 border border-white/10 flex items-center justify-between group hover:border-[#00f5ff]/40 transition">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#00f5ff]/10 text-[#00f5ff] border border-[#00f5ff]/20 flex items-center justify-center shrink-0">
                  <HiEnvelope className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Email Directly</span>
                  <a
                    href="mailto:karanmahalik88@gmail.com"
                    className="text-sm font-mono text-white font-semibold hover:text-[#00f5ff] transition break-all"
                  >
                    karanmahalik2004@gmail.com
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition"
                title="Copy Email"
                aria-label="Copy email address to clipboard"
              >
                {copiedEmail ? <HiCheck className="w-4 h-4 text-[#10b981]" /> : <HiClipboardDocument className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="studio-card p-6 border border-white/10 flex items-center justify-between group hover:border-[#10b981]/40 transition">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/20 flex items-center justify-center shrink-0">
                  <HiPhone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Phone / Mobile</span>
                  <a
                    href="tel:+917205794556"
                    className="text-sm font-mono text-white font-semibold hover:text-[#10b981] transition"
                  >
                    +91 7205794556
                  </a>
                </div>
              </div>
              <a
                href="https://wa.me/917205794556"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#10b981]/10 text-[#10b981] hover:bg-[#10b981] hover:text-[#050816] transition"
                title="WhatsApp Message"
              >
                <FaWhatsapp className="w-4 h-4" />
              </a>
            </div>

            {/* Location Card */}
            <div className="studio-card p-6 border border-white/10 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#8b5cf6]/10 text-[#8b5cf6] border border-[#8b5cf6]/20 flex items-center justify-center shrink-0">
                <HiMapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Location</span>
                <span className="text-sm font-mono text-white font-semibold">Cuttack, Odisha, India</span>
                <span className="text-xs text-slate-400 block mt-0.5 font-sans">Open to Relocation (Bengaluru, Pan-India) & Remote</span>
              </div>
            </div>

            {/* Social Links Bar */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">Professional Profiles:</span>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/karan-mahalik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-[#00f5ff]/20 text-slate-300 hover:text-[#00f5ff] border border-white/10 hover:border-[#00f5ff]/30 transition"
                  aria-label="GitHub Profile"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/karan-mahalik-122438369"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-[#8b5cf6]/20 text-slate-300 hover:text-[#8b5cf6] border border-white/10 hover:border-[#8b5cf6]/30 transition"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/917205794556"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-[#10b981]/20 text-slate-300 hover:text-[#10b981] border border-white/10 hover:border-[#10b981]/30 transition"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="studio-card p-6 sm:p-8 border border-white/10">
              <h3 className="font-heading font-bold text-xl text-white mb-2">Send a Direct Message</h3>
              <p className="text-xs sm:text-sm text-slate-400 font-sans mb-6">
                Have a job opportunity, project inquiry, or just want to connect? Drop a note below and I will respond promptly.
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-[#10b981]/10 border border-[#10b981]/30 text-center">
                  <div className="w-12 h-12 rounded-full bg-[#10b981]/20 text-[#10b981] flex items-center justify-center mx-auto mb-3">
                    <HiCheck className="w-6 h-6" />
                  </div>
                  <h4 className="font-heading font-bold text-lg text-white mb-1">Message Prepared!</h4>
                  <p className="text-xs text-slate-300 font-sans mb-4">
                    Your email client should have opened with the drafted message. If not, feel free to write directly to{' '}
                    <span className="text-[#00f5ff] font-mono">karanmahalik88@gmail.com</span>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-mono text-[#00f5ff] underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono text-slate-400 block mb-1.5">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full bg-[#050816] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#00f5ff]/50 transition"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-mono text-slate-400 block mb-1.5">Your Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="rahul@company.com"
                        className="w-full bg-[#050816] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#00f5ff]/50 transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1.5">Subject / Opportunity</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Data Analyst Role / Project Inquiry"
                      className="w-full bg-[#050816] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#00f5ff]/50 transition"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1.5">Message *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your team, project requirements, or position..."
                      className="w-full bg-[#050816] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#00f5ff]/50 transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary py-3 rounded-xl text-sm font-mono font-bold flex items-center justify-center gap-2 shadow-lg shadow-[#00f5ff]/20"
                  >
                    <HiPaperAirplane className="w-4 h-4" />
                    Dispatch Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
