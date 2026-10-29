import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { HiSparkles, HiChevronDown, HiChevronUp, HiOutlineChartBar } from 'react-icons/hi2'

const projects = [
  {
    id: 'pizza-sales',
    title: 'Pizza Sales Performance Analysis',
    category: 'SQL + Power BI',
    focus: 'Revenue, Demand Timing & Product Sales Performance',
    tag: 'SQL + Power BI',
    accent: '#f59e0b',
    border: 'hover:border-[#f59e0b]/50',
    tools: ['SQL Server', 'T-SQL', 'Power BI', 'DAX', 'Data Modeling'],
    featured: true,
    metrics: [
      { label: 'Total Rows', val: '48,620' },
      { label: 'Orders Tracked', val: '21,350' },
      { label: 'Pizzas Sold', val: '49,574' },
      { label: 'Key KPIs', val: 'AOV, Demand, Mix' },
    ],
    bullets: [
      'Built advanced T-SQL queries calculating total revenue, total orders, average order value (AOV), total pizzas sold, and pizzas per order.',
      'Analysed hourly, daily, and monthly demand trends to isolate peak sales windows and recurring consumer ordering cycles.',
      'Compared pizza category, size, and SKU-level contribution to identify top 5 revenue generators and bottom 5 underperforming items.',
      'Architected an executive Power BI dashboard with dynamic DAX measures, interactive KPI cards, category breakdown charts, and slicers.',
    ],
    github: 'https://github.com/karan-mahalik/Pizza-Sales-Performance-Analysis',
    previewText: 'T-SQL aggregations and Power BI interactive reports delivering actionable operational insights.',
  },
  {
    id: 'urbancart-analytics',
    title: 'UrbanCart Sales & Customer Analytics',
    category: 'E-Commerce',
    focus: 'Multi-table E-commerce Sales, Repeat Customers & Return Rates',
    tag: 'Excel + SQL + BI',
    accent: '#00f5ff',
    border: 'hover:border-[#00f5ff]/50',
    tools: ['Excel', 'SQL Server', 'T-SQL', 'Power BI', 'DAX', 'Power Query'],
    featured: true,
    metrics: [
      { label: 'Relational Tables', val: '5 Linked' },
      { label: 'Dashboard Size', val: '2-Page Report' },
      { label: 'DAX Measures', val: '15+ Created' },
      { label: 'Focus Areas', val: 'Sales & Returns' },
    ],
    bullets: [
      'Prepared and cleaned linked datasets: orders, order items, customers, products, and returns; audited missing values and inconsistent formats.',
      'Authored reusable SQL views for multi-dimensional revenue analysis across months, quarters, sales channels, and geographic zones.',
      'Leveraged SQL window functions (DENSE_RANK, SUM OVER, LAG) for product rankings, running revenue totals, and period-over-period growth.',
      'Evaluated customer purchase frequency, repeat buyer cohorts, return rates by category, payment method shares, and delivery lag.',
      'Developed a two-page Power BI dashboard featuring robust star-schema modeling, custom DAX metrics, KPI cards, and cross-filtering slicers.',
    ],
    github: 'https://github.com/karan-mahalik/UrbanCart-Sales-and-Customer-Analytics',
    previewText: 'End-to-end e-commerce pipeline from raw CSV cleaning to multi-table SQL views and interactive Power BI storytelling.',
  },
  {
    id: 'ecommerce-fullstack',
    title: 'Full-Stack E-Commerce Data System',
    category: 'Full-Stack',
    focus: 'Transactional Flow, Database Normalization & API Integration',
    tag: 'Full-Stack Data',
    accent: '#8b5cf6',
    border: 'hover:border-[#8b5cf6]/50',
    tools: ['React.js', 'Spring Boot', 'REST APIs', 'MySQL', 'Relational DB'],
    featured: false,
    metrics: [
      { label: 'Architecture', val: 'REST API' },
      { label: 'Frontend', val: 'React.js' },
      { label: 'Backend', val: 'Spring Boot' },
      { label: 'Database', val: 'MySQL' },
    ],
    bullets: [
      'Developed responsive React.js UI components and integrated REST APIs to retrieve, render, and manage dynamic product inventory.',
      'Implemented Spring Boot services and MySQL relational schema for reliable transaction storage and analytical query retrieval.',
      'Maintained consistent backend data flows and handled data validation to ensure zero record discrepancies.',
      'Debugged full-stack integration points while mastering how enterprise application logs map directly into analytics pipelines.',
    ],
    github: 'https://github.com/karan-mahalik',
    previewText: 'Enterprise transactional pipeline showcasing how live operational data is captured, structured, and queried.',
  },
]

const categories = ['All', 'SQL + Power BI', 'E-Commerce', 'Full-Stack']

export default function Projects() {
  const [activeTab, setActiveTab] = useState('All')
  const [expandedId, setExpandedId] = useState('pizza-sales')

  const filteredProjects =
    activeTab === 'All' ? projects : projects.filter((p) => p.category === activeTab)

  return (
    <section id="projects" className="py-24 relative bg-[#050816]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#00f5ff] uppercase tracking-[0.25em] mb-2">
              <span>Section 03 // Portfolio Projects</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight">
              featured data projects<span className="text-[#00f5ff]">.</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl font-sans">
              Production-grade data pipelines, SQL-driven analytics, and interactive Power BI reports with measurable outcomes.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0 glass p-1.5 rounded-xl border border-white/10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  activeTab === cat
                    ? 'bg-[#00f5ff] text-[#050816] font-bold shadow-md shadow-[#00f5ff]/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((proj, idx) => {
            const isExpanded = expandedId === proj.id

            return (
              <motion.div
                key={proj.id}
                layout
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`studio-card p-6 sm:p-8 flex flex-col justify-between border ${proj.border}`}
                style={{
                  background: 'linear-gradient(180deg, rgba(12, 16, 32, 0.85) 0%, rgba(7, 11, 20, 0.95) 100%)',
                }}
              >
                <div>
                  {/* Top Badges */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wide uppercase"
                      style={{
                        backgroundColor: `${proj.accent}15`,
                        color: proj.accent,
                        border: `1px solid ${proj.accent}40`,
                      }}
                    >
                      {proj.tag}
                    </span>

                    {proj.featured && (
                      <span className="flex items-center gap-1 text-[11px] font-mono text-[#00f5ff] bg-[#00f5ff]/10 px-2.5 py-0.5 rounded-md border border-[#00f5ff]/20">
                        <HiSparkles className="w-3 h-3" /> Featured Case
                      </span>
                    )}
                  </div>

                  {/* Title & Focus */}
                  <h3 className="font-heading font-black text-2xl sm:text-3xl text-white mb-2 tracking-tight group-hover:text-[#00f5ff] transition">
                    {proj.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 font-mono mb-6">
                    Focus: <span className="text-slate-300">{proj.focus}</span>
                  </p>

                  {/* Metrics Row */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6">
                    {proj.metrics.map((m, mIdx) => (
                      <div
                        key={mIdx}
                        className="p-2.5 rounded-xl bg-white/5 border border-white/5 font-mono text-center"
                      >
                        <span className="text-[10px] text-slate-400 uppercase block">{m.label}</span>
                        <span className="text-xs sm:text-sm font-bold text-white block mt-0.5" style={{ color: proj.accent }}>
                          {m.val}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Description preview */}
                  <p className="text-sm text-slate-300 leading-relaxed font-sans mb-4">
                    {proj.previewText}
                  </p>

                  {/* Expandable Technical Highlights */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden mb-6"
                      >
                        <div className="p-4 rounded-xl bg-[#070b14] border border-white/10 space-y-2.5">
                          <span className="text-xs font-mono font-bold text-[#00f5ff] uppercase tracking-wider block">
                            Key Analytical Contributions:
                          </span>
                          <ul className="space-y-2">
                            {proj.bullets.map((b, bIdx) => (
                              <li key={bIdx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2 leading-relaxed">
                                <span className="text-[#00f5ff] mt-1 shrink-0">▹</span>
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Footer Tools & Action Buttons */}
                <div>
                  {/* Tools List */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {proj.tools.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/5 text-slate-400 border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <button
                      onClick={() => setExpandedId(isExpanded ? null : proj.id)}
                      className="text-xs font-mono text-[#00f5ff] hover:underline flex items-center gap-1 font-semibold"
                    >
                      {isExpanded ? (
                        <>
                          Hide Details <HiChevronUp className="w-4 h-4" />
                        </>
                      ) : (
                        <>
                          View Full Breakdown <HiChevronDown className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white text-xs font-mono border border-white/10 flex items-center gap-1.5 transition"
                      >
                        <FaGithub className="w-3.5 h-3.5" />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
