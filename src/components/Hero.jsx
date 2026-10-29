import { useState } from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Link } from 'react-scroll'
import { FaGithub, FaLinkedin, FaWhatsapp, FaDatabase, FaPython } from 'react-icons/fa'
import { HiChatBubbleLeftRight, HiArrowTrendingUp, HiSparkles } from 'react-icons/hi2'
import { BsFillBarChartFill, BsFileEarmarkExcelFill } from 'react-icons/bs'

export default function Hero({ onOpenMessenger }) {
  const [activeView, setActiveView] = useState('data') // 'data' | 'bi'

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center items-center overflow-hidden bg-[#050816] bg-cyber-mesh"
    >
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      {/* Floating Badges (Desktop) */}
      <motion.div
        animate={{ y: [0, -12, 0], x: [0, 6, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden lg:flex absolute top-32 left-10 xl:left-24 items-center gap-2.5 px-3.5 py-2 rounded-xl glass border border-[#00f5ff]/20 shadow-lg shadow-[#00f5ff]/5 z-20 pointer-events-none"
      >
        <div className="w-2.5 h-2.5 rounded-full bg-[#00f5ff] animate-ping" />
        <div className="flex flex-col">
          <span className="text-xs font-bold text-white font-mono">Karan Mahalik</span>
          <span className="text-[10px] text-[#00f5ff] font-mono">Data Analyst & SQL Dev</span>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 14, 0], x: [0, -8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="hidden lg:flex absolute top-36 right-10 xl:right-24 items-center gap-2.5 px-3.5 py-2 rounded-xl glass border border-[#f59e0b]/20 shadow-lg shadow-[#f59e0b]/5 z-20 pointer-events-none"
      >
        <BsFillBarChartFill className="w-5 h-5 text-[#f59e0b]" />
        <div className="flex flex-col">
          <span className="text-xs font-bold text-white font-mono">DAX & Modeling</span>
          <span className="text-[10px] text-[#f59e0b] font-mono">Power BI Reports</span>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -10, 0], x: [0, -6, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="hidden lg:flex absolute bottom-28 left-8 xl:left-28 items-center gap-2.5 px-3.5 py-2 rounded-xl glass border border-[#10b981]/20 shadow-lg shadow-[#10b981]/5 z-20 pointer-events-none"
      >
        <FaDatabase className="w-5 h-5 text-[#10b981]" />
        <div className="flex flex-col">
          <span className="text-xs font-bold text-white font-mono">T-SQL & Views</span>
          <span className="text-[10px] text-[#10b981] font-mono">48K+ Records Analyzed</span>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 12, 0], x: [0, 8, 0] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        className="hidden lg:flex absolute bottom-32 right-8 xl:right-28 items-center gap-2.5 px-3.5 py-2 rounded-xl glass border border-[#8b5cf6]/20 shadow-lg shadow-[#8b5cf6]/5 z-20 pointer-events-none"
      >
        <HiArrowTrendingUp className="w-5 h-5 text-[#8b5cf6]" />
        <div className="flex flex-col">
          <span className="text-xs font-bold text-white font-mono">Academic CGPA</span>
          <span className="text-[10px] text-[#8b5cf6] font-mono">8.28 · DRIEMS Univ</span>
        </div>
      </motion.div>

      {/* Main Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        {/* Pre-Heading Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-[#00f5ff]/20 text-xs font-mono text-slate-300 mb-6"
        >
          <span className="text-[#00f5ff]">●</span>
          <span>Portfolio · Data & Business Intelligence</span>
          <span className="text-slate-500">|</span>
          <span className="text-[#10b981] font-semibold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-ping" />
            Open for Roles
          </span>
        </motion.div>

        {/* Big Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading font-black text-4xl sm:text-6xl md:text-7xl lg:text-7xl tracking-tight text-white mb-4 leading-[1.1]"
        >
          turning raw <span className="text-gradient">data.</span>
          <br />
          into verified <span className="text-gradient-purple">decisions.</span>
        </motion.h1>

        {/* Dynamic Typing Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="h-9 mb-5 text-sm sm:text-base md:text-lg font-mono text-[#00f5ff] flex items-center justify-center font-semibold"
        >
          <TypeAnimation
            sequence={[
              'Data Analyst – SQL & Python Pipelines',
              2200,
              'Power BI Developer – DAX & Interactive Dashboards',
              2200,
              'SQL Developer – Stored Procedures & Analytical Views',
              2200,
              'BI & Insights Specialist – E-Commerce & Retail KPIs',
              2200,
            ]}
            wrapper="span"
            speed={45}
            repeat={Infinity}
          />
        </motion.div>

        {/* Bio Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-sm sm:text-base md:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8"
        >
          Hi, I&apos;m <span className="text-white font-semibold">Karan Mahalik</span>. B.Tech Computer Science graduate
          (<span className="text-[#00f5ff] font-mono">CGPA 8.28</span>, Class of 2026, DRIEMS University) with hands-on
          internship experience in SQL-driven analysis, dashboard development, and database-backed applications.
          Skilled in <span className="text-white">SQL Server, Power BI, DAX, and Excel</span> for data cleaning, KPI reporting, and interactive business insights.
        </motion.p>

        {/* Segmented View Switcher: Data View vs BI View */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="glass p-1 rounded-full mb-8 flex items-center border border-white/10"
        >
          <button
            onClick={() => setActiveView('data')}
            className={`px-4 py-1.5 rounded-full text-xs font-mono font-semibold transition-all ${
              activeView === 'data'
                ? 'bg-gradient-to-r from-[#00f5ff] to-[#3b82f6] text-[#050816] shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            📊 Data View
          </button>
          <button
            onClick={() => setActiveView('bi')}
            className={`px-4 py-1.5 rounded-full text-xs font-mono font-semibold transition-all ${
              activeView === 'bi'
                ? 'bg-gradient-to-r from-[#8b5cf6] to-[#ec4899] text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            📈 BI View
          </button>
        </motion.div>

        {/* Dynamic Metric Preview based on Toggle */}
        <motion.div
          key={activeView}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl w-full mb-8 font-mono text-left"
        >
          {activeView === 'data' ? (
            <>
              <div className="p-3 rounded-xl bg-[#0c1020]/90 border border-[#00f5ff]/20">
                <span className="text-[11px] text-slate-400 block">Dataset Scale</span>
                <span className="text-base font-bold text-[#00f5ff]">48,620 Rows</span>
              </div>
              <div className="p-3 rounded-xl bg-[#0c1020]/90 border border-[#00f5ff]/20">
                <span className="text-[11px] text-slate-400 block">SQL Queries</span>
                <span className="text-base font-bold text-white">40+ Authored</span>
              </div>
              <div className="p-3 rounded-xl bg-[#0c1020]/90 border border-[#00f5ff]/20">
                <span className="text-[11px] text-slate-400 block">Database</span>
                <span className="text-base font-bold text-[#10b981]">SQL Server</span>
              </div>
              <div className="p-3 rounded-xl bg-[#0c1020]/90 border border-[#00f5ff]/20">
                <span className="text-[11px] text-slate-400 block">Tech Workflows</span>
                <span className="text-base font-bold text-[#8b5cf6]">CTEs & Views</span>
              </div>
            </>
          ) : (
            <>
              <div className="p-3 rounded-xl bg-[#0c1020]/90 border border-[#8b5cf6]/20">
                <span className="text-[11px] text-slate-400 block">BI Tool</span>
                <span className="text-base font-bold text-[#f59e0b]">Power BI</span>
              </div>
              <div className="p-3 rounded-xl bg-[#0c1020]/90 border border-[#8b5cf6]/20">
                <span className="text-[11px] text-slate-400 block">Formulas</span>
                <span className="text-base font-bold text-[#8b5cf6]">DAX Measures</span>
              </div>
              <div className="p-3 rounded-xl bg-[#0c1020]/90 border border-[#8b5cf6]/20">
                <span className="text-[11px] text-slate-400 block">Reports</span>
                <span className="text-base font-bold text-[#00f5ff]">Interactive</span>
              </div>
              <div className="p-3 rounded-xl bg-[#0c1020]/90 border border-[#8b5cf6]/20">
                <span className="text-[11px] text-slate-400 block">Focus</span>
                <span className="text-base font-bold text-[#ec4899]">Sales & Cohorts</span>
              </div>
            </>
          )}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-3.5 mb-10"
        >
          <Link to="projects" smooth duration={500} offset={-75}>
            <button className="btn-primary px-7 py-3 rounded-full text-sm font-heading font-bold shadow-lg shadow-[#00f5ff]/20 flex items-center gap-2">
              <HiSparkles className="w-4 h-4" />
              Explore Projects
            </button>
          </Link>

          <button
            onClick={onOpenMessenger}
            className="btn-outline px-6 py-3 rounded-full text-sm font-heading font-bold flex items-center gap-2"
          >
            <HiChatBubbleLeftRight className="w-4 h-4 text-[#00f5ff]" />
            Chat with Karan
          </button>

          <a
            href="https://wa.me/917205794556?text=Hi%20Karan,%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20connect!"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-full text-sm font-heading font-bold bg-[#10b981]/15 text-[#10b981] border border-[#10b981]/30 hover:bg-[#10b981] hover:text-[#050816] transition flex items-center gap-2 shadow-sm"
          >
            <FaWhatsapp className="w-4 h-4" />
            WhatsApp
          </a>
        </motion.div>

        {/* Tech Stack Pills Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center items-center gap-2 text-xs font-mono text-slate-400"
        >
          <span className="text-slate-500 uppercase tracking-wider text-[11px] mr-2">Core Stack:</span>
          <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 flex items-center gap-1.5">
            <FaDatabase className="w-3.5 h-3.5 text-[#00f5ff]" /> SQL Server / T-SQL
          </span>
          <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 flex items-center gap-1.5">
            <BsFillBarChartFill className="w-3.5 h-3.5 text-[#f59e0b]" /> Power BI & DAX
          </span>
          <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 flex items-center gap-1.5">
            <BsFileEarmarkExcelFill className="w-3.5 h-3.5 text-[#10b981]" /> Advanced Excel
          </span>
          <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 flex items-center gap-1.5">
            <FaPython className="w-3.5 h-3.5 text-[#8b5cf6]" /> Python (pandas)
          </span>
        </motion.div>
      </div>
    </section>
  )
}
