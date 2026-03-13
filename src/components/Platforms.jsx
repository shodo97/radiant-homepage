import './Platforms.css'

const platforms = [
  {
    num: '01',
    name: 'Persona-Based Microagent Framework',
    color: '#6476D8',
    gradient: 'linear-gradient(135deg, #6476D8 0%, #8B9AE8 50%, #A78BFA 100%)',
    desc: 'Deploy task-specific agents in days, not months. Minimal training data, low maintenance, and seamless orchestration through AgentOps.',
    features: ['Deploy in Days', 'Minimal Training Data', 'AgentOps Orchestration', '70% Less Maintenance'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="3" /><path d="M5.5 21a6.5 6.5 0 0 1 13 0" /><circle cx="19" cy="5" r="2" /><circle cx="5" cy="5" r="2" />
      </svg>
    ),
  },
  {
    num: '02',
    name: 'Cognitive Experience',
    color: '#1385B0',
    gradient: 'linear-gradient(135deg, #1385B0 0%, #17A2C6 50%, #2DD4BF 100%)',
    desc: 'Consumer-grade AI interactions with enterprise-grade security. Role-aware, conversational, multi-modal — with governance built in.',
    features: ['Role-Aware UX', 'Conversational AI', 'Multi-Modal', 'Zero-Trust Governance'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z" /><line x1="9" y1="21" x2="15" y2="21" />
      </svg>
    ),
  },
  {
    num: '03',
    name: 'Semantic Context Engine',
    color: '#2A7D7D',
    gradient: 'linear-gradient(135deg, #2A7D7D 0%, #38A89D 50%, #6EE7B7 100%)',
    desc: 'Our semantic layer connects operational data to business outcomes through knowledge graphs — turning queries into actionable insights.',
    features: ['Knowledge Graphs', 'Context-Aware AI', 'Natural Language Queries', 'Revenue-Aligned Insights'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="6" r="3" /><circle cx="18" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="18" r="3" /><path d="M8.5 7.5L15.5 16.5" /><path d="M15.5 7.5L8.5 16.5" />
      </svg>
    ),
  },
  {
    num: '04',
    name: 'Agentic Data Framework',
    color: '#3D8B37',
    gradient: 'linear-gradient(135deg, #3D8B37 0%, #5BB450 50%, #91C46B 100%)',
    desc: 'AI Fabric unifies fragmented data — ontology mapping, automated cleansing, and governed migration that turns chaos into AI-ready assets.',
    features: ['Ontology Mapping', 'Auto Data Cleansing', 'Unified Data Layer', 'Governed Migration'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
  },
]

export default function Platforms() {
  return (
    <section className="platforms section-padding" id="platforms">
      <div className="container">
        <div className="pl-header">
          <p className="section-label pl-label">OUR PLATFORM</p>
          <h2 className="pl-heading">
            Four Platforms. <span className="pl-accent">One Secure</span> Foundation.
          </h2>
          <p className="pl-subtitle">
            Four battle-tested layers — agents, cognition, context, and data — built for speed without sacrificing governance.
          </p>
        </div>

        <div className="pl-grid">
          {platforms.map((p, i) => (
            <div
              className={`pl-card ${i < 2 ? 'pl-card--wide' : ''}`}
              key={p.num}
              style={{ '--card-color': p.color, '--card-gradient': p.gradient }}
            >
              <div className="pl-card-top">
                <div className="pl-card-icon">{p.icon}</div>
                <span className="pl-card-num">{p.num}</span>
              </div>
              <h3 className="pl-card-name">{p.name}</h3>
              <p className="pl-card-desc">{p.desc}</p>
              <div className="pl-card-features">
                {p.features.map((f) => (
                  <span className="pl-feature" key={f}>{f}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
