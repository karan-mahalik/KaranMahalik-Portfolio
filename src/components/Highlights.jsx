import { motion } from 'framer-motion'
import { HiCircleStack, HiChartBar, HiCodeBracket, HiAcademicCap } from 'react-icons/hi2'

const stats = [
  {
    icon: <HiCircleStack className="w-6 h-6 text-[#00f5ff]" />,
    value: '48,600+',
    label: 'Records Profiled & Analyzed',
    subtext: 'Pizza sales & retail demand logs analyzed for hourly and monthly trends',
    border: 'border-[#00f5ff]/20 hover:border-[#00f5ff]/50',
    color: 'text-[#00f5ff]',
  },
  {
    icon: <HiChartBar className="w-6 h-6 text-[#f59e0b]" />,
    value: '3+',
    label: 'Power BI Reports Published',
    subtext: 'Multi-page interactive dashboards with DAX measures and custom slicers',
    border: 'border-[#f59e0b]/20 hover:border-[#f59e0b]/50',
    color: 'text-[#f59e0b]',
  },
  {
    icon: <HiCodeBracket className="w-6 h-6 text-[#8b5cf6]" />,
    value: '40+',
    label: 'T-SQL Queries & Views Authored',
    subtext: 'CTEs, window functions, revenue rankings, aggregations, and data checks',
    border: 'border-[#8b5cf6]/20 hover:border-[#8b5cf6]/50',
    color: 'text-[#8b5cf6]',
  },
  {
    icon: <HiAcademicCap className="w-6 h-6 text-[#10b981]" />,
    value: '8.28',
    label: 'Academic CGPA (B.Tech CSE)',
    subtext: 'DRIEMS University, Class of 2026 · Strong foundation in DBMS & Data Engineering',
    border: 'border-[#10b981]/20 hover:border-[#10b981]/50',
    color: 'text-[#10b981]',
  },
]

const subPills = [
  '⚡ Window Functions & CTEs',
  '🎯 DAX Calculated Measures',
  '🔄 Power Query M Modeling',
  '📈 Cohort & Retention Analysis',
  '🧩 Multi-Table Relational Schemas',
  '🛠️ REST API Data Ingestion',
]

export default function Highlights() {
  return (
    <section id="highlights" className="py-20 relative bg-[#070b14]/70 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-[#00f5ff] uppercase tracking-[0.25em] mb-2">
            <span>Section 02 // Proof of Work</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight">
            measurable scale<span className="text-[#00f5ff]">.</span> verified impact
            <span className="text-[#8b5cf6]">.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl font-sans">
            Concrete evidence of data handling, analytical query construction, and executive dashboard design across real-world datasets.
          </p>
        </div>

        {/* 4 Major Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`p-6 rounded-2xl bg-[#0c1020]/80 backdrop-blur-xl border ${stat.border} transition-all duration-300 group hover:-translate-y-1 shadow-lg`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <span className="text-xs font-mono text-slate-500">#{idx + 1}</span>
              </div>
              <div className={`font-heading font-black text-3xl sm:text-4xl ${stat.color} mb-1 tracking-tight`}>
                {stat.value}
              </div>
              <div className="text-sm font-bold text-white mb-2 font-heading">
                {stat.label}
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                {stat.subtext}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Sub-pills Ticker */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {subPills.map((pill, i) => (
            <span
              key={i}
              className="px-3.5 py-1.5 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-slate-300 hover:border-[#00f5ff]/40 hover:text-[#00f5ff] transition cursor-default"
            >
              {pill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
