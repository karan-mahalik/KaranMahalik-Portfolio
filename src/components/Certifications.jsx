import { motion } from 'framer-motion'
import { HiCheckBadge } from 'react-icons/hi2'
import { FaDatabase, FaPython } from 'react-icons/fa'
import { BsFillBarChartFill, BsFileEarmarkExcelFill } from 'react-icons/bs'

const certs = [
  {
    title: 'SQL for Data Analysis & Database Engineering',
    issuer: 'Self-Directed & Applied Project Practice',
    period: '2024 – 2025',
    accent: '#00f5ff',
    border: 'hover:border-[#00f5ff]/40',
    icon: <FaDatabase className="w-6 h-6 text-[#00f5ff]" />,
    topics: [
      'Multi-table INNER, LEFT, and FULL OUTER JOINs',
      'Common Table Expressions (CTEs) & Recursive Queries',
      'Window Functions: ROW_NUMBER, RANK, DENSE_RANK, LEAD, LAG',
      'Analytical Views & Reusable KPI Aggregation Queries',
    ],
    status: 'Verified Project Rigor',
  },
  {
    title: 'Business Intelligence & Executive Dashboarding',
    issuer: 'Power BI Desktop & Power Query Applied Track',
    period: '2024 – 2025',
    accent: '#f59e0b',
    border: 'hover:border-[#f59e0b]/40',
    icon: <BsFillBarChartFill className="w-6 h-6 text-[#f59e0b]" />,
    topics: [
      'Star Schema Modeling & Relationship Cardinality',
      'DAX Calculated Columns, Measures & Time Intelligence',
      'Interactive Slicers, Bookmarks & Page Navigation',
      'Visual Storytelling & Executive Summary Layouts',
    ],
    status: 'Applied in 3+ Reports',
  },
  {
    title: 'Advanced Excel & Analytical Spreadsheets',
    issuer: 'Practical Data Modeling & Automation',
    period: '2024 – 2025',
    accent: '#10b981',
    border: 'hover:border-[#10b981]/40',
    icon: <BsFileEarmarkExcelFill className="w-6 h-6 text-[#10b981]" />,
    topics: [
      'XLOOKUP, VLOOKUP, INDEX & Two-Way MATCH Formulas',
      'SUMIFS, COUNTIFS & Conditional Aggregations',
      'Dynamic PivotTables & Pivot Charts',
      'Data Cleansing with TRIM, CLEAN & Text Formulations',
    ],
    status: 'Applied in E-Commerce',
  },
  {
    title: 'Python for Data Handling & Exploratory Analysis',
    issuer: 'Hands-on Scripting & ETL Pipelines',
    period: '2024 – 2025',
    accent: '#8b5cf6',
    border: 'hover:border-[#8b5cf6]/40',
    icon: <FaPython className="w-6 h-6 text-[#8b5cf6]" />,
    topics: [
      'pandas Series, DataFrames & GroupBy Operations',
      'NumPy Array Computing & Vectorized Calculations',
      'Automated CSV Ingestion & Quality Cleansing Scripts',
      'Exploratory Data Analysis (EDA) & Summary Profiling',
    ],
    status: 'Project Ready',
  },
]

export default function Certifications() {
  return (
    <section id="certificates" className="py-24 relative bg-[#050816]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-[#00f5ff] uppercase tracking-[0.25em] mb-2">
            <span>Section 07 // Certifications & Continuous Practice</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight">
            practical credentials<span className="text-[#00f5ff]">.</span> continuous mastery
            <span className="text-[#8b5cf6]">.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl font-sans">
            Rigorous applied tracks focusing on measurable implementation rather than passive completion certificates.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certs.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`studio-card p-6 sm:p-7 border border-white/10 ${cert.border} transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between`}
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    {cert.icon}
                  </div>
                  <span
                    className="text-[11px] font-mono px-2.5 py-1 rounded-full font-bold uppercase tracking-wider"
                    style={{
                      backgroundColor: `${cert.accent}15`,
                      color: cert.accent,
                      border: `1px solid ${cert.accent}30`,
                    }}
                  >
                    {cert.status}
                  </span>
                </div>

                <h3 className="font-heading font-black text-xl text-white mb-1 tracking-tight">
                  {cert.title}
                </h3>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-5">
                  <span className="text-slate-300">{cert.issuer}</span>
                  <span>•</span>
                  <span>{cert.period}</span>
                </div>

                {/* Topics covered */}
                <div className="space-y-2 mb-6">
                  {cert.topics.map((top, tIdx) => (
                    <div key={tIdx} className="text-xs text-slate-300 flex items-start gap-2 leading-relaxed font-sans">
                      <HiCheckBadge className="w-4 h-4 text-[#00f5ff] shrink-0 mt-0.5" />
                      <span>{top}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Verified in Production Code</span>
                <span className="text-[#00f5ff]">● Hands-On</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
