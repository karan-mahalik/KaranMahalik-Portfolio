import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  HiSparkles,
  HiCheckCircle,
  HiXCircle,
  HiArrowPath,
  HiBookOpen,
  HiPlay,
} from 'react-icons/hi2'
import { FaDatabase, FaPython } from 'react-icons/fa'
import { BsFillBarChartFill, BsFileEarmarkExcelFill } from 'react-icons/bs'

const subjects = [
  { id: 'sql', name: 'SQL & Databases', icon: <FaDatabase />, accent: '#00f5ff' },
  { id: 'powerbi', name: 'Power BI & DAX', icon: <BsFillBarChartFill />, accent: '#f59e0b' },
  { id: 'excel', name: 'Advanced Excel', icon: <BsFileEarmarkExcelFill />, accent: '#10b981' },
  { id: 'python', name: 'Python Analytics', icon: <FaPython />, accent: '#8b5cf6' },
]

const quizData = {
  sql: [
    {
      q: 'Which SQL clause is used to filter groups created by the GROUP BY statement?',
      options: ['WHERE', 'HAVING', 'ORDER BY', 'FILTER'],
      correct: 1,
      explanation:
        'HAVING is applied after grouping occurs, allowing aggregate filtering like HAVING SUM(sales) > 10000. WHERE filters rows before grouping.',
    },
    {
      q: 'What is the key difference between RANK() and DENSE_RANK() in window functions?',
      options: [
        'RANK() skips ranks on ties; DENSE_RANK() does not skip rank numbers.',
        'DENSE_RANK() skips ranks; RANK() produces consecutive integers.',
        'RANK() only works on numerical columns.',
        'There is no difference between them.',
      ],
      correct: 0,
      explanation:
        'If two rows tie for 1st place, RANK() gives both 1 and the next row 3. DENSE_RANK() gives both 1 and the next row 2.',
    },
    {
      q: 'Which clause defines a Common Table Expression (CTE) in SQL?',
      options: ['CREATE CTE', 'DEFINE AS', 'WITH', 'BEGIN CTE'],
      correct: 2,
      explanation:
        'CTEs are declared using WITH cte_name AS (SELECT ...). They improve query readability and can be recursive.',
    },
    {
      q: 'What is the purpose of the COALESCE() function in SQL?',
      options: [
        'Returns the first non-null expression in its argument list',
        'Combines two tables without joins',
        'Sorts rows in descending order',
        'Converts string to uppercase',
      ],
      correct: 0,
      explanation:
        'COALESCE(val1, val2, ...) evaluates arguments in order and returns the current value of the first expression that initially does not evaluate to NULL.',
    },
  ],
  powerbi: [
    {
      q: 'What is the primary difference between a Calculated Column and a Measure in DAX?',
      options: [
        'Calculated columns evaluate in row context and consume RAM; Measures evaluate dynamically in filter context at query time.',
        'Measures consume hard drive space; Calculated columns do not.',
        'Calculated columns can only use SUM function.',
        'There is no performance difference.',
      ],
      correct: 0,
      explanation:
        'Calculated columns store values in memory for every row. Measures are calculated on the fly depending on user slicers and filter context.',
    },
    {
      q: 'Which DAX function overrides or modifies existing filter context in a calculation?',
      options: ['LOOKUPVALUE', 'CALCULATE', 'RELATED', 'FILTER'],
      correct: 1,
      explanation:
        'CALCULATE() evaluates an expression in a modified filter context. It is the most powerful and central function in DAX.',
    },
    {
      q: 'In data modeling for Power BI, what is the best practice schema architecture?',
      options: ['Flat Single Table', 'Star Schema (Fact & Dimension tables)', 'Snowflake Schema with 10+ levels', 'Circular Hierarchy'],
      correct: 1,
      explanation:
        'Star Schema provides the fastest VertiPaq engine compression, clearest DAX logic, and most intuitive relationship pathways.',
    },
  ],
  excel: [
    {
      q: 'Why is XLOOKUP preferred over traditional VLOOKUP in modern Excel?',
      options: [
        'XLOOKUP searches both left and right, defaults to exact match, and does not break when columns are inserted.',
        'VLOOKUP is faster for million-row tables.',
        'XLOOKUP requires sorting the table in ascending order.',
        'XLOOKUP only works with numbers.',
      ],
      correct: 0,
      explanation:
        'XLOOKUP eliminates column index counts, searches backwards without INDEX/MATCH, and handles missing values gracefully with its built-in if_not_found argument.',
    },
    {
      q: 'Which formula accurately cleans excess spaces from user-entered text in Excel?',
      options: ['UPPER()', 'TRIM()', 'CLEAN()', 'STRIP()'],
      correct: 1,
      explanation:
        'TRIM() removes all spaces from text strings except for single spaces between words. Combined with CLEAN(), it handles non-printable characters.',
    },
  ],
  python: [
    {
      q: 'Which pandas function is used to aggregate data by one or more column categories?',
      options: ['df.aggregate_by()', 'df.groupby()', 'df.categorize()', 'df.pivot_table() only'],
      correct: 1,
      explanation:
        'df.groupby("category") allows split-apply-combine workflows, calculating sum, mean, or custom aggregations across grouped segments.',
    },
    {
      q: 'What is the fastest way to replace null values in a pandas DataFrame?',
      options: ['df.fillna()', 'for loop through rows', 'df.drop()', 'df.replace_nulls()'],
      correct: 0,
      explanation:
        'df.fillna(value) provides vectorized, C-optimized null replacement across Series or entire DataFrames.',
    },
  ],
}

const studyNotes = {
  sql: [
    { title: 'Window Functions Hierarchy', content: 'ROW_NUMBER() always assigns unique incrementing integers. RANK() creates tied ranks and leaves gaps. DENSE_RANK() creates tied ranks without skipping subsequent integers.' },
    { title: 'Query Execution Order', content: 'FROM → WHERE → GROUP BY → HAVING → SELECT → DISTINCT → ORDER BY → LIMIT/OFFSET. Knowing this prevents alias reference bugs in WHERE clauses.' },
    { title: 'Indexing Best Practice', content: 'Create non-clustered indexes on high-cardinality foreign keys and frequently filtered timestamp columns to prevent table scans.' },
  ],
  powerbi: [
    { title: 'Star Schema Cardinality', content: 'Always aim for 1-to-Many single-direction relationships between Dimension tables (1) and Fact tables (*). Avoid bidirectional filtering unless strictly necessary.' },
    { title: 'DAX Time Intelligence', content: 'Always construct a dedicated Date Dimension table with contiguous dates for functions like SAMEPERIODLASTYEAR, DATESYTD, and DATEADD to function reliably.' },
  ],
  excel: [
    { title: 'INDEX-MATCH Mastery', content: '=INDEX(return_range, MATCH(lookup_val, lookup_range, 0)) provides lightning-fast bidirectional lookups without hardcoding column numbers.' },
    { title: 'Power Query M Transformations', content: 'Perform data type casting, null imputation, and column unpivoting inside Power Query prior to loading into the Excel data model for optimal memory usage.' },
  ],
  python: [
    { title: 'Vectorization vs Loops', content: 'Never iterate with for index, row in df.iterrows() for large computations. Leverage vectorized NumPy/pandas array operations for 100x speedups.' },
    { title: 'Memory Optimization', content: 'Convert high-cardinality string columns to category dtype to reduce memory consumption by up to 80%.' },
  ],
}

export default function SkillLab() {
  const [activeSub, setActiveSub] = useState('sql')
  const [mode, setMode] = useState('quiz') // 'quiz' | 'notes'
  const [currentIdx, setCurrentIdx] = useState(0)
  const [selectedOpt, setSelectedOpt] = useState(null)
  const [showAnswer, setShowAnswer] = useState(false)
  const [score, setScore] = useState(0)
  const [isFinished, setIsFinished] = useState(false)

  const activeQuestions = quizData[activeSub] || []
  const currentQ = activeQuestions[currentIdx]

  const switchSubject = (subId) => {
    setActiveSub(subId)
    setCurrentIdx(0)
    setSelectedOpt(null)
    setShowAnswer(false)
    setScore(0)
    setIsFinished(false)
  }

  const switchMode = (newMode) => {
    setMode(newMode)
    setCurrentIdx(0)
    setSelectedOpt(null)
    setShowAnswer(false)
    setScore(0)
    setIsFinished(false)
  }

  const handleSelect = (idx) => {
    if (showAnswer) return
    setSelectedOpt(idx)
    setShowAnswer(true)
    if (idx === currentQ.correct) {
      setScore((prev) => prev + 1)
    }
  }

  const handleNext = () => {
    if (currentIdx + 1 < activeQuestions.length) {
      setCurrentIdx((prev) => prev + 1)
      setSelectedOpt(null)
      setShowAnswer(false)
    } else {
      setIsFinished(true)
    }
  }

  const handleReset = () => {
    setCurrentIdx(0)
    setSelectedOpt(null)
    setShowAnswer(false)
    setScore(0)
    setIsFinished(false)
  }

  return (
    <section id="skilllab" className="py-24 relative bg-[#050816]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#00f5ff] uppercase tracking-[0.25em] mb-2">
            <span>Section 09 // Skill Lab</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight">
            interactive skill lab<span className="text-[#00f5ff]">.</span> test & learn
            <span className="text-[#8b5cf6]">.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl mx-auto font-sans">
            Demonstrating deep conceptual mastery through interactive real-time technical challenges and curated study notes.
          </p>

          {/* Mode Switcher */}
          <div className="inline-flex items-center glass p-1.5 rounded-full border border-white/10 mt-6">
            <button
              onClick={() => switchMode('quiz')}
              className={`px-5 py-2 rounded-full text-xs font-mono font-bold flex items-center gap-2 transition-all ${
                mode === 'quiz'
                  ? 'bg-gradient-to-r from-[#00f5ff] to-[#8b5cf6] text-[#050816] shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <HiPlay className="w-4 h-4" />
              Interactive Quiz
            </button>
            <button
              onClick={() => switchMode('notes')}
              className={`px-5 py-2 rounded-full text-xs font-mono font-bold flex items-center gap-2 transition-all ${
                mode === 'notes'
                  ? 'bg-gradient-to-r from-[#8b5cf6] to-[#ec4899] text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <HiBookOpen className="w-4 h-4" />
              Curated Study Notes
            </button>
          </div>
        </div>

        {/* Subject Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8">
          {subjects.map((sub) => (
            <button
              key={sub.id}
              onClick={() => switchSubject(sub.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-mono font-bold flex items-center gap-2 transition-all border ${
                activeSub === sub.id
                  ? 'bg-[#0c1020] text-white shadow-lg'
                  : 'bg-white/5 text-slate-400 border-white/5 hover:border-white/20 hover:text-white'
              }`}
              style={{
                borderColor: activeSub === sub.id ? sub.accent : undefined,
                boxShadow: activeSub === sub.id ? `0 0 20px ${sub.accent}20` : undefined,
              }}
            >
              <span style={{ color: sub.accent }}>{sub.icon}</span>
              <span>{sub.name}</span>
            </button>
          ))}
        </div>

        {/* Content Box */}
        <div className="studio-card p-6 sm:p-10 border border-white/10 relative overflow-hidden">
          {mode === 'quiz' ? (
            !isFinished && currentQ ? (
              <div>
                {/* Quiz Header Bar */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10 text-xs font-mono">
                  <div className="flex items-center gap-2 text-slate-400">
                    <span className="text-[#00f5ff] font-bold">
                      Question {currentIdx + 1} of {activeQuestions.length}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-slate-400">Score:</span>
                    <span className="px-2.5 py-0.5 rounded-md bg-[#10b981]/20 text-[#10b981] font-bold">
                      {score} Correct
                    </span>
                  </div>
                </div>

                {/* Question */}
                <h3 className="font-heading font-bold text-lg sm:text-2xl text-white mb-6 leading-relaxed">
                  {currentQ.q}
                </h3>

                {/* Options */}
                <div className="space-y-3 mb-6">
                  {currentQ.options.map((opt, optIdx) => {
                    let btnStyle = 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'

                    if (showAnswer) {
                      if (optIdx === currentQ.correct) {
                        btnStyle = 'bg-[#10b981]/20 border-[#10b981] text-white shadow-lg shadow-[#10b981]/10'
                      } else if (optIdx === selectedOpt) {
                        btnStyle = 'bg-[#ef4444]/20 border-[#ef4444] text-white'
                      } else {
                        btnStyle = 'bg-white/5 border-white/5 text-slate-500 opacity-50'
                      }
                    }

                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleSelect(optIdx)}
                        disabled={showAnswer}
                        className={`w-full p-4 rounded-xl border text-left font-sans text-sm flex items-center justify-between transition-all ${btnStyle}`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-6 h-6 rounded-lg bg-black/40 border border-white/10 flex items-center justify-center font-mono text-xs text-slate-400 shrink-0">
                            {String.fromCharCode(65 + optIdx)}
                          </span>
                          <span>{opt}</span>
                        </div>

                        {showAnswer && optIdx === currentQ.correct && (
                          <HiCheckCircle className="w-5 h-5 text-[#10b981] shrink-0" />
                        )}
                        {showAnswer && optIdx === selectedOpt && optIdx !== currentQ.correct && (
                          <HiXCircle className="w-5 h-5 text-[#ef4444] shrink-0" />
                        )}
                      </button>
                    )
                  })}
                </div>

                {/* Explanation */}
                <AnimatePresence>
                  {showAnswer && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-xl bg-[#0c1020] border border-[#00f5ff]/30 mb-6 font-mono text-xs text-slate-300 leading-relaxed"
                    >
                      <span className="text-[#00f5ff] font-bold block mb-1">💡 Detailed Explanation:</span>
                      {currentQ.explanation}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Next Button */}
                {showAnswer && (
                  <div className="flex justify-end">
                    <button
                      onClick={handleNext}
                      className="btn-primary px-6 py-2.5 rounded-xl text-xs font-mono font-bold"
                    >
                      {currentIdx + 1 === activeQuestions.length ? 'View Results' : 'Next Question ▹'}
                    </button>
                  </div>
                )}
              </div>
            ) : (
              /* Quiz Finished View */
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#00f5ff] to-[#8b5cf6] p-[2px] mx-auto mb-4">
                  <div className="w-full h-full bg-[#050816] rounded-full flex items-center justify-center text-[#00f5ff]">
                    <HiSparkles className="w-8 h-8" />
                  </div>
                </div>

                <h3 className="font-heading font-black text-3xl text-white mb-2">Quiz Completed!</h3>
                <p className="text-slate-400 text-sm font-sans mb-6">
                  You scored <span className="text-[#00f5ff] font-mono font-bold">{score}</span> out of{' '}
                  <span className="text-white font-mono font-bold">{activeQuestions.length}</span> questions.
                </p>

                <div className="inline-block p-4 rounded-2xl bg-[#0c1020] border border-white/10 mb-6 font-mono text-xs">
                  <span className="text-slate-400">Proficiency Grade: </span>
                  <span className="text-[#10b981] font-extrabold text-base ml-1">
                    {score === activeQuestions.length
                      ? 'Grade S+ (Mastery)'
                      : score / activeQuestions.length >= 0.75
                      ? 'Grade A (Strong)'
                      : score / activeQuestions.length >= 0.5
                      ? 'Grade B (Proficient)'
                      : 'Grade C (Needs Practice)'}
                  </span>
                </div>

                <div>
                  <button
                    onClick={handleReset}
                    className="btn-primary px-6 py-2.5 rounded-xl text-xs font-mono font-bold inline-flex items-center gap-2"
                  >
                    <HiArrowPath className="w-4 h-4" />
                    Retry Quiz
                  </button>
                </div>
              </div>
            )
          ) : (
            /* Study Notes Mode */
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                <h4 className="font-heading font-bold text-lg text-white">
                  Curated Technical Notes: {subjects.find((s) => s.id === activeSub)?.name}
                </h4>
                <span className="text-xs font-mono text-[#00f5ff]">Key Concepts</span>
              </div>

              {(studyNotes[activeSub] || []).map((note, nIdx) => (
                <div key={nIdx} className="p-4 rounded-xl bg-white/5 border border-white/5 font-sans">
                  <h5 className="font-heading font-bold text-sm text-[#00f5ff] mb-1 font-mono">
                    {note.title}
                  </h5>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">{note.content}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
