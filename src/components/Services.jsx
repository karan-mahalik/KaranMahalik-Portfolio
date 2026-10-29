import { motion } from 'framer-motion'
import {
  HiChartPie,
  HiCircleStack,
  HiPresentationChartLine,
  HiArrowTrendingUp,
  HiTableCells,
  HiCpuChip,
} from 'react-icons/hi2'

const services = [
  {
    icon: <HiPresentationChartLine className="w-6 h-6 text-[#f59e0b]" />,
    title: 'Power BI Executive Dashboard Development',
    accent: '#f59e0b',
    border: 'hover:border-[#f59e0b]/40',
    description:
      'Designing end-to-end interactive Power BI dashboards with robust star-schema data modeling, dynamic DAX KPIs, drill-through paths, and visual storytelling tailored for executives.',
    deliverables: ['Custom DAX Measures', 'Executive KPI Cards', 'Automated Refresh Modeling', 'Interactive Slicers & Filters'],
  },
  {
    icon: <HiCircleStack className="w-6 h-6 text-[#00f5ff]" />,
    title: 'SQL Development & Query Optimisation',
    accent: '#00f5ff',
    border: 'hover:border-[#00f5ff]/40',
    description:
      'Authoring production-grade T-SQL queries, stored procedures, CTEs, and reusable database views for rapid reporting, eliminating repetitive ad-hoc query overhead.',
    deliverables: ['Analytical Views & CTEs', 'Window Functions & Ranking', 'Index-Friendly Query Design', 'Data Validation Scripts'],
  },
  {
    icon: <HiChartPie className="w-6 h-6 text-[#10b981]" />,
    title: 'Exploratory Analysis & Data Cleaning',
    accent: '#10b981',
    border: 'hover:border-[#10b981]/40',
    description:
      'Auditing messy multi-source datasets, identifying outliers and inconsistent formats, imputing null values, and ensuring 100% data integrity before reporting.',
    deliverables: ['Data Profiling Reports', 'Anomaly & Null Audits', 'Standardized Data Pipelines', 'Data Dictionary Documentation'],
  },
  {
    icon: <HiArrowTrendingUp className="w-6 h-6 text-[#8b5cf6]" />,
    title: 'Sales & Customer Retention Modeling',
    accent: '#8b5cf6',
    border: 'hover:border-[#8b5cf6]/40',
    description:
      'Calculating Average Order Value (AOV), customer repeat rates, product SKU contribution, and seasonal demand cycles to guide inventory and pricing decisions.',
    deliverables: ['AOV & Basket Size Metrics', 'Repeat Buyer Cohorts', 'Peak Demand Timing Analysis', 'SKU Performance Matrices'],
  },
  {
    icon: <HiTableCells className="w-6 h-6 text-[#ec4899]" />,
    title: 'Spreadsheet & Excel Automation',
    accent: '#ec4899',
    border: 'hover:border-[#ec4899]/40',
    description:
      'Building automated Excel models leveraging dynamic array formulas, XLOOKUP, INDEX-MATCH, Power Query transformations, and interactive PivotTables.',
    deliverables: ['Dynamic Financial Models', 'Automated Power Query Ingestion', 'Interactive Pivot Dashboards', 'Formula Error-Proofing'],
  },
  {
    icon: <HiCpuChip className="w-6 h-6 text-[#6366f1]" />,
    title: 'Full-Stack Data Integration & APIs',
    accent: '#6366f1',
    border: 'hover:border-[#6366f1]/40',
    description:
      'Bridging front-end React applications with Spring Boot backend services and MySQL databases, ensuring smooth transactional data capture and reliable API feeds.',
    deliverables: ['REST API Ingestion', 'Relational Schema Design', 'Real-Time Data Retrieval', 'Full-Stack Integration QA'],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 relative bg-[#070b14]/70 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-[#00f5ff] uppercase tracking-[0.25em] mb-2">
            <span>Section 08 // Services & Solutions</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight">
            what i deliver<span className="text-[#00f5ff]">.</span> business value
            <span className="text-[#8b5cf6]">.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl font-sans">
            Specialized data consulting, analytics engineering, and business intelligence capabilities ready for deployment.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((srv, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className={`studio-card p-7 border border-white/10 ${srv.border} transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between`}
            >
              <div>
                <div
                  className="w-12 h-12 rounded-xl border flex items-center justify-center mb-5"
                  style={{
                    backgroundColor: `${srv.accent}15`,
                    borderColor: `${srv.accent}30`,
                  }}
                >
                  {srv.icon}
                </div>

                <h3 className="font-heading font-bold text-xl text-white mb-2 leading-snug">
                  {srv.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans mb-6">
                  {srv.description}
                </p>

                {/* Deliverables */}
                <div className="space-y-1.5 mb-6">
                  <span className="text-[11px] font-mono uppercase text-[#00f5ff] tracking-wider block font-bold">
                    Key Deliverables:
                  </span>
                  {srv.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="text-xs text-slate-300 flex items-center gap-2 font-mono">
                      <span className="w-1 h-1 rounded-full bg-[#00f5ff]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>Production Ready</span>
                <span style={{ color: srv.accent }}>● High Impact</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
