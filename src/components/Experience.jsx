import { motion } from 'framer-motion'
import { HiBriefcase, HiCalendar } from 'react-icons/hi2'

const experiences = [
  {
    role: 'Full Stack Development Intern',
    company: 'Generative AI Techshila (GATS)',
    duration: 'May 2025 – Sep 2025',
    project: 'Full-Stack E-Commerce Application',
    type: 'Internship',
    accent: '#00f5ff',
    border: 'border-[#00f5ff]/30',
    stack: ['React.js', 'Spring Boot', 'REST APIs', 'MySQL', 'Relational Schemas'],
    bullets: [
      'Engineered interactive React.js front-end components and integrated REST APIs to fetch, display, and manage real-time e-commerce catalog and order records.',
      'Constructed backend services using Spring Boot coupled with MySQL for structured relational data storage, transactional integrity, and SQL-based querying.',
      'Maintained consistent backend data pipelines to guarantee data accuracy across shopping cart states, checkout processes, and operational troubleshooting.',
      'Diagnosed and resolved cross-layer integration bottlenecks between UI and database layers, strengthening core SQL and API architectural skills for data analytics.',
    ],
  },
  {
    role: 'Software Engineer Trainee',
    company: 'Alpha Finder',
    duration: 'May 2025 – Sep 2025',
    project: 'Backend Services & Database Engineering',
    type: 'Trainee',
    accent: '#8b5cf6',
    border: 'border-[#8b5cf6]/30',
    stack: ['Spring Boot', 'REST APIs', 'MySQL', 'Database Connectivity', 'Debugging'],
    bullets: [
      'Developed microservice endpoints using Spring Boot, implementing REST APIs and optimized SQL queries for high-throughput transactional record retrieval.',
      'Executed database connectivity testing, schema validation, and structured entity management across diverse application tables.',
      'Gained deep end-to-end understanding of how raw transactional business data is logged, validated, and transformed for downstream analytical BI reporting.',
      'Collaborated on application debugging, unit test verification, and structured data flow monitoring in team sprint cycles.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-[#070b14]/50 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#00f5ff] uppercase tracking-[0.25em] mb-2">
            <span>Section 04 // Work Experience</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight">
            practical industry experience<span className="text-[#00f5ff]">.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl mx-auto font-sans">
            Hands-on technical internships combining software engineering, backend databases, and structured data management.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Vertical glowing line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#00f5ff] via-[#8b5cf6] to-transparent -translate-x-1/2 opacity-30" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } gap-6 sm:gap-12`}
                >
                  {/* Timeline node icon */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#050816] border-2 border-[#00f5ff] flex items-center justify-center text-[#00f5ff] shadow-lg shadow-[#00f5ff]/20 z-10">
                    <HiBriefcase className="w-4 h-4" />
                  </div>

                  {/* Spacer for 50% width on desktop */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Content Card */}
                  <div className="w-full sm:w-1/2 pl-12 sm:pl-0">
                    <div className={`studio-card p-6 sm:p-7 border ${exp.border} relative group hover:-translate-y-1 transition duration-300`}>
                      {/* Top Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-[#00f5ff]/10 text-[#00f5ff] border border-[#00f5ff]/20 uppercase">
                          {exp.type}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                          <HiCalendar className="w-3.5 h-3.5 text-slate-500" />
                          {exp.duration}
                        </span>
                      </div>

                      <h3 className="font-heading font-black text-xl sm:text-2xl text-white mb-1 tracking-tight">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-semibold text-[#8b5cf6] font-mono mb-2">
                        {exp.company}
                      </p>
                      <p className="text-xs font-mono text-slate-400 mb-4 pb-3 border-b border-white/5">
                        Project: <span className="text-slate-300">{exp.project}</span>
                      </p>

                      {/* Bullet points */}
                      <ul className="space-y-2 mb-5">
                        {exp.bullets.map((b, bIdx) => (
                          <li key={bIdx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2 leading-relaxed">
                            <span className="text-[#00f5ff] mt-1 shrink-0">▹</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Stack Badges */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                        {exp.stack.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/5 text-slate-400 border border-white/5"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
