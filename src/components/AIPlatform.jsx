import './AIPlatform.css'

/* ── Practice Icons ── */
const practices = [
  {
    name: 'Digital Strategy',
    color: '#2A7D7D',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    name: 'Experience',
    color: '#1385B0',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    name: 'Product Dev',
    color: '#6476D8',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    name: 'Cloud',
    color: '#044862',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
  },
  {
    name: 'Analytics',
    color: '#E07A39',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    name: 'Data',
    color: '#3D8B37',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
  },
  {
    name: 'OT',
    color: '#8B5CF6',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /><line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" /><line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" /><line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" /><line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" />
      </svg>
    ),
  },
  {
    name: 'Skild',
    color: '#D44B8A',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c0 1.1 2.7 3 6 3s6-1.9 6-3v-5" />
      </svg>
    ),
  },
]

const fabricCaps = [
  'Microagent Framework',
  'Cognitive UX',
  'Semantic Context Engine',
  'Agentic Data Layer',
  'AgentOps',
  'Enterprise Governance',
]

const suites = [
  { name: 'AI-RAD™', metric: '40% Faster', color: '#2A7D7D' },
  { name: 'DocuFlow™', metric: '99.2% Accuracy', color: '#1385B0' },
  { name: 'Touchless IT Ops™', metric: '85% Less Ops', color: '#6476D8' },
  { name: 'DataPulse™', metric: '60% Reduction', color: '#3D8B37' },
  { name: 'Enterprise ICX™', metric: '3x Engagement', color: '#E07A39' },
]

export default function AIPlatform() {
  return (
    <section className="platform section-padding">
      <div className="container">
        {/* Header */}
        <div className="fabric-header">
          <p className="section-label fabric-label">Architecture</p>
          <h2 className="fabric-heading">Radiant AI Fabric</h2>
          <p className="fabric-subtitle">
            The connective AI layer that infuses intelligent automation, agents,
            and analytics into every practice and solution we deliver.
          </p>
        </div>

        {/* ── Architecture Diagram ── */}
        <div className="fd-diagram">
          {/* Dot grid background */}
          <div className="fd-grid-bg" aria-hidden="true" />

          {/* LAYER 1: Practices */}
          <div className="fd-section">
            <div className="fd-tag">8 AI-Infused Practices</div>
            <div className="fd-practices">
              {practices.map((p) => (
                <div
                  className="fd-practice"
                  key={p.name}
                  style={{ '--c': p.color }}
                >
                  <div className="fd-practice-icon">{p.icon}</div>
                  <span className="fd-practice-name">{p.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Flow: Practices → Fabric */}
          <div className="fd-flow">
            {practices.map((p, i) => (
              <div
                className="fd-flow-line"
                key={i}
                style={{ '--lc': p.color, '--d': `${i * 0.15}s` }}
              />
            ))}
          </div>

          {/* LAYER 2: AI Fabric Core */}
          <div className="fd-core">
            <div className="fd-core-label">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                <polyline points="2 17 12 22 22 17" />
                <polyline points="2 12 12 17 22 12" />
              </svg>
              <span>Radiant AI Platform</span>
            </div>
            <div className="fd-core-pills">
              {fabricCaps.map((c) => (
                <span className="fd-pill" key={c}>{c}</span>
              ))}
            </div>
          </div>

          {/* Flow: Fabric → Suites */}
          <div className="fd-flow fd-flow--down">
            {suites.map((s, i) => (
              <div
                className="fd-flow-line"
                key={i}
                style={{ '--lc': s.color, '--d': `${i * 0.2}s` }}
              />
            ))}
          </div>

          {/* LAYER 3: Deployed Agent Suites */}
          <div className="fd-section">
            <div className="fd-tag">Deployed Agent Suites</div>
            <div className="fd-suites">
              {suites.map((s) => (
                <div
                  className="fd-suite"
                  key={s.name}
                  style={{ '--c': s.color }}
                >
                  <span className="fd-suite-dot" />
                  <span className="fd-suite-name">{s.name}</span>
                  <span className="fd-suite-metric">{s.metric}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
