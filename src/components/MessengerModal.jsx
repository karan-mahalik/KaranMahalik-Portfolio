import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiXMark, HiPaperAirplane, HiSparkles } from 'react-icons/hi2'
import { FaRobot, FaUser } from 'react-icons/fa'

const QUICK_PROMPTS = [
  'What are your top projects?',
  'What is your Power BI & SQL expertise?',
  'Are you available for full-time or intern roles?',
  'What is your educational background?',
  'How can I get in touch directly?',
]

const RESPONSES = {
  projects: `Karan has delivered two flagship analytics projects:
1. **Pizza Sales Performance Analysis**: Analyzed 48,600+ records using SQL Server (T-SQL) and built an interactive Power BI dashboard tracking revenue, demand trends, and best/worst sellers.
2. **UrbanCart E-Commerce Analytics**: Cleaned multi-table relational data in Excel and SQL Server, built reusable views with window functions, and designed a two-page Power BI executive report.`,
  
  skills: `Karan specializes in:
• **BI & Visualization**: Power BI Desktop, DAX measures, Power Query, Data Modeling, KPI cards & slicers.
• **Database & SQL**: SQL Server (T-SQL), MySQL, complex JOINs, CTEs, Window Functions, Views & Stored Procedures.
• **Spreadsheets**: Advanced Excel (XLOOKUP, INDEX-MATCH, SUMIFS, PivotTables).
• **Programming**: Python (pandas, NumPy), JavaScript, React.js, Spring Boot, REST APIs.`,

  availability: `Yes! Karan is a final-year B.Tech CSE student (Class of 2026, CGPA 8.28) actively looking for **Data Analyst, BI Developer, and SQL Developer** roles (Full-time, Internship, or Trainee). Open to onsite (Bengaluru, Cuttack, Bhubaneswar, Pan-India) and remote opportunities!`,

  education: `Karan is pursuing **B.Tech in Computer Science & Engineering** at **DRIEMS University** (2022–2026) with an outstanding **8.28 CGPA**. He completed Intermediate Science at Ravenshaw Higher Secondary School (64.8%) and Matriculation at Guru Nanak Public School (88.6%).`,

  contact: `You can reach Karan directly via:
• **Email**: karanmahalik2004@gmail.com
• **Phone**: +91 7205794556
• **LinkedIn**: linkedin.com/in/karan-mahalik-122438369
• **GitHub**: github.com/karan-mahalik
• **Location**: Cuttack, Odisha, India`,
}

let messageIdCounter = 2

export default function MessengerModal({ isOpen, onClose }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: "Hi there! 👋 I'm Karan's AI portfolio assistant. How can I help you explore his data analytics projects, technical skills, or availability?",
    },
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const chatEndRef = useRef(null)

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  const handleSend = (textToSend) => {
    const query = (textToSend || input).trim()
    if (!query) return

    const userMsg = { id: ++messageIdCounter, sender: 'user', text: query }
    setMessages((prev) => [...prev, userMsg])
    setInput('')
    setIsTyping(true)

    setTimeout(() => {
      let replyText = ''
      const lower = query.toLowerCase()

      if (lower.includes('project') || lower.includes('pizza') || lower.includes('urbancart')) {
        replyText = RESPONSES.projects
      } else if (lower.includes('skill') || lower.includes('power bi') || lower.includes('sql') || lower.includes('stack')) {
        replyText = RESPONSES.skills
      } else if (lower.includes('available') || lower.includes('hire') || lower.includes('role') || lower.includes('job') || lower.includes('work')) {
        replyText = RESPONSES.availability
      } else if (lower.includes('education') || lower.includes('college') || lower.includes('cgpa') || lower.includes('degree')) {
        replyText = RESPONSES.education
      } else if (lower.includes('contact') || lower.includes('email') || lower.includes('phone') || lower.includes('reach') || lower.includes('touch')) {
        replyText = RESPONSES.contact
      } else {
        replyText = `Thanks for asking! Karan is a passionate Data Analyst & Power BI Developer with strong SQL and business reporting skills. You can ask me about his **projects**, **skills**, **education**, or **availability**, or drop an email directly at **karanmahalik88@gmail.com**!`
      }

      setMessages((prev) => [...prev, { id: ++messageIdCounter, sender: 'bot', text: replyText }])
      setIsTyping(false)
    }, 600)
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="w-full max-w-lg bg-[#070b14] border border-[#00f5ff]/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden max-h-[85vh]"
          style={{ boxShadow: '0 0 50px rgba(0, 245, 255, 0.15)' }}
        >
          {/* Header */}
          <div className="p-4 border-b border-white/10 bg-[#0c1020] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#00f5ff] to-[#8b5cf6] p-[2px] flex items-center justify-center">
                <div className="w-full h-full bg-[#050816] rounded-full flex items-center justify-center text-[#00f5ff]">
                  <HiSparkles className="w-5 h-5 text-[#00f5ff]" />
                </div>
              </div>
              <div>
                <h3 className="font-heading font-bold text-white text-base flex items-center gap-2">
                  Karan Assistant
                  <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
                </h3>
                <p className="text-xs text-slate-400 font-mono">Data & BI Virtual Companion</p>
              </div>
            </div>
            <button
              onClick={onClose}
              aria-label="Close Assistant"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition"
            >
              <HiXMark className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 font-sans text-sm">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex gap-3 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {m.sender === 'bot' && (
                  <div className="w-7 h-7 rounded-full bg-[#00f5ff]/20 text-[#00f5ff] flex items-center justify-center shrink-0 mt-1 border border-[#00f5ff]/30">
                    <FaRobot className="w-3.5 h-3.5" />
                  </div>
                )}
                <div
                  className={`max-w-[85%] p-3.5 rounded-2xl whitespace-pre-line leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-gradient-to-r from-[#00f5ff] to-[#8b5cf6] text-[#050816] font-medium rounded-tr-none'
                      : 'bg-[#111827] text-slate-200 border border-white/10 rounded-tl-none'
                  }`}
                >
                  {m.text}
                </div>
                {m.sender === 'user' && (
                  <div className="w-7 h-7 rounded-full bg-[#8b5cf6]/30 text-[#8b5cf6] flex items-center justify-center shrink-0 mt-1 border border-[#8b5cf6]/40">
                    <FaUser className="w-3 h-3 text-white" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-3 justify-start items-center text-slate-400 text-xs">
                <div className="w-7 h-7 rounded-full bg-[#00f5ff]/20 text-[#00f5ff] flex items-center justify-center shrink-0 border border-[#00f5ff]/30">
                  <FaRobot className="w-3.5 h-3.5" />
                </div>
                <div className="bg-[#111827] px-4 py-2.5 rounded-2xl border border-white/10 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00f5ff] animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00f5ff] animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00f5ff] animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Quick prompts */}
          <div className="p-3 border-t border-white/5 bg-[#090d1a] overflow-x-auto flex gap-2 no-scrollbar">
            {QUICK_PROMPTS.map((prompt) => (
              <button
                key={prompt}
                onClick={() => handleSend(prompt)}
                className="shrink-0 text-xs px-3 py-1.5 rounded-full bg-white/5 hover:bg-[#00f5ff]/15 text-slate-300 hover:text-[#00f5ff] border border-white/10 hover:border-[#00f5ff]/40 transition font-mono whitespace-nowrap"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Area */}
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleSend()
            }}
            className="p-3 bg-[#0c1020] border-t border-white/10 flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything about Karan's portfolio..."
              className="flex-1 bg-[#111827] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00f5ff]/60 transition"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              aria-label="Send message"
              className="p-2.5 rounded-xl btn-primary disabled:opacity-40 disabled:cursor-not-allowed text-[#050816]"
            >
              <HiPaperAirplane className="w-5 h-5" />
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
