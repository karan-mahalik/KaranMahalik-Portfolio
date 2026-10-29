import { motion } from 'framer-motion'
import {
  HiChartBar,
  HiCircleStack,
  HiTableCells,
  HiCommandLine,
  HiWrenchScrewdriver,
  HiMagnifyingGlass,
} from 'react-icons/hi2'

const skillCategories = [
  {
    title: 'Business Intelligence & Visualisation',
    icon: <HiChartBar className="w-5 h-5 text-[#f59e0b]" />,
    accent: '#f59e0b',
    border: 'hover:border-[#f59e0b]/40',
    description: 'Transforming multi-table dimensional data into interactive executive reporting stories.',
    skills: [
      'Power BI Desktop',
      'Power Query & M',
      'DAX Calculated Measures',
      'Data Modelling (Star Schema)',
      'KPI Cards & Metric Gauges',
      'Interactive Slicers & Filters',
      'Visual Storytelling',
      'Executive Dashboards',
    ],
  },
  {
    title: 'Database & SQL Engineering',
    icon: <HiCircleStack className="w-5 h-5 text-[#00f5ff]" />,
    accent: '#00f5ff',
    border: 'hover:border-[#00f5ff]/40',
    description: 'Deep mastery of relational databases, analytical window functions, and query optimisation.',
    skills: [
      'SQL Server (T-SQL)',
      'MySQL',
      'Complex JOINs (Inner/Outer/Cross)',
      'CTEs & Recursive Queries',
      'Window Functions (Rank, Dense_Rank)',
      'Stored Procedures & Functions',
      'Reusable Views Creation',
      'Aggregations & Grouping Sets',
    ],
  },
  {
    title: 'Data Analysis & Preparation',
    icon: <HiMagnifyingGlass className="w-5 h-5 text-[#10b981]" />,
    accent: '#10b981',
    border: 'hover:border-[#10b981]/40',
    description: 'Rigorous data auditing, exploratory analysis, and KPI computation workflows.',
    skills: [
      'Data Preparation & Cleansing',
      'Data Validation & Integrity Checks',
      'Exploratory Data Analysis (EDA)',
      'Sales & Demand Trends',
      'Customer Cohort Analysis',
      'AOV & Basket Size Metrics',
      'Repeat Buyer Retention',
      'Missing Value Imputation',
    ],
  },
  {
    title: 'Spreadsheets & Advanced Excel',
    icon: <HiTableCells className="w-5 h-5 text-[#10b981]" />,
    accent: '#10b981',
    border: 'hover:border-[#10b981]/40',
    description: 'Advanced tabular modeling, cross-functional lookups, and reporting automations.',
    skills: [
      'XLOOKUP / VLOOKUP',
      'INDEX & MATCH',
      'SUMIFS & COUNTIFS',
      'Dynamic PivotTables & Charts',
      'Conditional Formatting',
      'TRIM & CLEAN Functions',
      'Data Validation Rules',
      'Quick Scenario Modeling',
    ],
  },
  {
    title: 'Programming & Data Processing',
    icon: <HiCommandLine className="w-5 h-5 text-[#8b5cf6]" />,
    accent: '#8b5cf6',
    border: 'hover:border-[#8b5cf6]/40',
    description: 'Scripting for automated dataset manipulation and full-stack software data ingestion.',
    skills: [
      'Python Fundamentals',
      'pandas DataFrames',
      'NumPy Numerical Computing',
      'CSV / JSON Data Pipelines',
      'JavaScript & React.js',
      'Spring Boot & REST APIs',
      'Node.js & Express.js',
      'API Data Deserialization',
    ],
  },
  {
    title: 'Tools & Development Platforms',
    icon: <HiWrenchScrewdriver className="w-5 h-5 text-[#ec4899]" />,
    accent: '#ec4899',
    border: 'hover:border-[#ec4899]/40',
    description: 'Development environments, version control, and database administration tools.',
    skills: [
      'SQL Server Management Studio (SSMS)',
      'Power BI Desktop',
      'VS Code',
      'MySQL Workbench',
      'MongoDB Compass',
      'Git & GitHub',
      'Postman API Testing',
      'Vercel Deployment',
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-[#050816]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-[#00f5ff] uppercase tracking-[0.25em] mb-2">
            <span>Section 05 // Technical Proficiency Grid</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight">
            tools<span className="text-[#00f5ff]">.</span> Languages<span className="text-[#8b5cf6]">.</span> Architectures
            <span className="text-[#10b981]">.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl font-sans">
            A comprehensive overview of core competencies across business intelligence, SQL engineering, statistical spreadsheets, and software workflows.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className={`studio-card p-6 flex flex-col justify-between border ${cat.border} transition-all duration-300 hover:-translate-y-1`}
              style={{
                background: 'linear-gradient(180deg, rgba(12, 16, 32, 0.75) 0%, rgba(7, 11, 20, 0.9) 100%)',
              }}
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="p-2.5 rounded-xl border flex items-center justify-center"
                    style={{
                      backgroundColor: `${cat.accent}15`,
                      borderColor: `${cat.accent}30`,
                    }}
                  >
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-white leading-snug">
                      {cat.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-400 mb-5 leading-relaxed font-sans">
                  {cat.description}
                </p>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {cat.skills.map((s, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/5 text-slate-300 border border-white/5 hover:border-white/20 hover:text-white transition cursor-default"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Accent line */}
              <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>{cat.skills.length} Competencies</span>
                <span style={{ color: cat.accent }}>● Verified Practice</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
