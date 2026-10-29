import { motion } from 'framer-motion'
import {
  HiAcademicCap,
  HiUser,
  HiMapPin,
  HiEnvelope,
  HiPhone,
  HiSparkles,
  HiCheckBadge,
} from 'react-icons/hi2'
import { FaGraduationCap } from 'react-icons/fa'

const educationList = [
  {
    degree: 'B.Tech – Computer Science & Engineering',
    institution: 'DRIEMS University, Cuttack, Odisha',
    duration: '2022 – 2026',
    score: 'CGPA: 8.28',
    status: 'Final Year / Class of 2026',
    accent: '#00f5ff',
    details:
      'Rigorous engineering foundation in Relational Database Management Systems (DBMS), Data Structures, Object-Oriented Software Design, Computer Networks, and Statistical Computing.',
  },
  {
    degree: 'Higher Secondary (+2) – Science',
    institution: 'Ravenshaw Higher Secondary School, Cuttack',
    duration: '2020 – 2022',
    score: 'Score: 64.8%',
    status: 'CHSE Board',
    accent: '#8b5cf6',
    details: 'Core subjects in Physics, Chemistry, Mathematics, and Computer Science fundamentals.',
  },
  {
    degree: 'High School Matriculation (10th)',
    institution: 'Guru Nanak Public School, Cuttack',
    duration: '2008 – 2020',
    score: 'Score: 88.6%',
    status: 'Distinction',
    accent: '#10b981',
    details: 'Strong academic performance with distinction in Mathematics and Science.',
  },
]

const coreCompetencies = [
  'Data Cleaning & Profiling',
  'SQL Query Optimization',
  'Power BI Dashboarding',
  'DAX Calculated Measures',
  'Star Schema Modeling',
  'Multi-Table Relational Views',
  'Cohort & Retention Analysis',
  'Revenue & Demand Forecasting',
  'Spring Boot Backend Integration',
  'REST API Data Workflows',
  'Attention to Detail & Accuracy',
  'Collaborative Problem Solving',
]

const interests = [
  'Business intelligence, sales performance, and customer lifetime value storytelling with Power BI.',
  'Advanced SQL problem-solving, analytical views, and practical relational database optimizations.',
  'Data-driven web applications, automation, and continuous exploration in modern analytics ecosystems.',
]

export default function About() {
  return (
    <section id="about" className="py-24 relative bg-[#070b14]/70 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-[#00f5ff] uppercase tracking-[0.25em] mb-2">
            <span>Section 06 // Education & Profile</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight">
            profile<span className="text-[#00f5ff]">.</span> academic foundation
            <span className="text-[#8b5cf6]">.</span> vision<span className="text-[#10b981]">.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl font-sans">
            A look into academic milestones, engineering rigor, and the analytical mindset driving every dashboard and SQL view.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Bio & Core Competencies (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="studio-card p-6 sm:p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#00f5ff] to-[#8b5cf6] p-[2px]">
                  <div className="w-full h-full bg-[#050816] rounded-2xl flex items-center justify-center font-heading font-black text-base text-[#00f5ff]">
                    KM
                  </div>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-white">Karan Mahalik</h3>
                  <p className="text-xs font-mono text-[#00f5ff]">Data Analyst & Power BI Developer</p>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed font-sans mb-4">
                I am a Data Analyst and Power BI Developer completing my B.Tech in Computer Science & Engineering at DRIEMS University.
                I combine strong computational fundamentals with hands-on practice in SQL-driven analytics and executive reporting.
              </p>

              <p className="text-sm text-slate-300 leading-relaxed font-sans mb-6">
                My passion lies in connecting the dots between complex database tables and business decision-makers—designing star-schema models,
                authoring resilient T-SQL views, and publishing intuitive Power BI dashboards that turn raw numbers into measurable strategic clarity.
              </p>

              {/* Personal Details List */}
              <div className="space-y-2.5 pt-4 border-t border-white/10 text-xs font-mono">
                <div className="flex items-center gap-2 text-slate-300">
                  <HiMapPin className="w-4 h-4 text-[#00f5ff] shrink-0" />
                  <span>Cuttack, Odisha, India</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <HiEnvelope className="w-4 h-4 text-[#8b5cf6] shrink-0" />
                  <span>karanmahalik88@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <HiPhone className="w-4 h-4 text-[#10b981] shrink-0" />
                  <span>+91 7205794556</span>
                </div>
              </div>
            </div>

            {/* Professional Interests */}
            <div className="studio-card p-6 border border-white/10">
              <h4 className="font-heading font-bold text-sm text-white mb-3 uppercase tracking-wider font-mono flex items-center gap-2">
                <HiSparkles className="w-4 h-4 text-[#f59e0b]" /> Focus & Interests
              </h4>
              <ul className="space-y-2.5">
                {interests.map((item, i) => (
                  <li key={i} className="text-xs text-slate-300 flex items-start gap-2 leading-relaxed font-sans">
                    <span className="text-[#00f5ff] mt-0.5">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Education Timeline & Competencies (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Education Cards */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#00f5ff] flex items-center gap-2">
                <HiAcademicCap className="w-4 h-4" /> Academic Qualifications
              </h3>

              {educationList.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="studio-card p-6 border border-white/10 hover:border-white/20 transition-all duration-300 relative overflow-hidden group"
                >
                  <div
                    className="absolute top-0 left-0 bottom-0 w-1"
                    style={{ backgroundColor: edu.accent }}
                  />

                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10">
                      {edu.duration}
                    </span>
                    <span
                      className="text-xs font-mono font-extrabold px-2.5 py-0.5 rounded-full"
                      style={{
                        backgroundColor: `${edu.accent}15`,
                        color: edu.accent,
                        border: `1px solid ${edu.accent}30`,
                      }}
                    >
                      {edu.score}
                    </span>
                  </div>

                  <h4 className="font-heading font-bold text-lg text-white group-hover:text-[#00f5ff] transition">
                    {edu.degree}
                  </h4>
                  <p className="text-xs font-mono text-slate-400 mb-3">{edu.institution}</p>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">{edu.details}</p>
                </motion.div>
              ))}
            </div>

            {/* Core Competencies Cloud */}
            <div className="studio-card p-6 border border-white/10">
              <h4 className="font-heading font-bold text-sm text-white mb-4 uppercase tracking-wider font-mono flex items-center gap-2">
                <HiCheckBadge className="w-4 h-4 text-[#10b981]" /> Core Analytical Competencies
              </h4>
              <div className="flex flex-wrap gap-2">
                {coreCompetencies.map((comp, cIdx) => (
                  <span
                    key={cIdx}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono bg-white/5 border border-white/5 text-slate-300 hover:border-[#00f5ff]/40 hover:text-[#00f5ff] transition cursor-default"
                  >
                    {comp}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
