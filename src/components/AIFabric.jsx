import './AIFabric.css'

const solutions = [
  {
    num: '01',
    name: 'Enterprise ICX',
    category: 'CX Intelligence',
    featured: true,
    color: '#91C46B',
    desc: 'AI-powered CX insight-to-ROI platform that unifies data to proactively eliminate experience friction — turning customer signals into measurable business outcomes.',
    tags: ['Enterprise', 'CX', 'Insight-to-ROI'],
  },
  {
    num: '02',
    name: 'CX Workbench',
    category: 'Journey Intelligence',
    color: '#2A7D7D',
    desc: 'AI-powered workflow tool that accelerates manual tagging of customer interactions on digital channels — enabling teams to visualize journeys and understand experience details.',
    tags: ['Workflow', 'Figma Analysis', 'Journey Mapping'],
  },
  {
    num: '03',
    name: 'AI Billing Workbench',
    category: 'Billing Intelligence',
    color: '#1385B0',
    desc: 'Detects billing anomalies, groups them into patterns, and guides teams to resolve issues before they impact customers — protecting revenue and trust at scale.',
    tags: ['Billing', 'Anomaly Detection', 'Resolution'],
  },
  {
    num: '04',
    name: 'Magic Globe',
    category: 'Launch Intelligence',
    color: '#6476D8',
    desc: 'Integrates sales, returns, quality, and customer data to predict device launch risk, identify root causes, and provide go/no-go recommendations.',
    tags: ['Launch Risk', 'Predictive', 'Go/No-Go'],
  },
  {
    num: '05',
    name: 'BI Fabric',
    category: 'Analytics Platform',
    color: '#E07A39',
    desc: 'Centralized analytics and reporting solution that connects data sources into a governed environment — enabling faster, data-driven decision-making.',
    tags: ['Analytics', 'BI', 'Data Governance'],
  },
  {
    num: '06',
    name: 'Automarc',
    category: 'Document Intelligence',
    color: '#D44B8A',
    desc: 'AI-powered document workflow automation that extracts, classifies, and processes content — purpose-built for technical writing at scale.',
    tags: ['Documents', 'Automation', 'Technical Writing'],
  },
]

const icons = {
  '01': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
    </svg>
  ),
  '02': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  ),
  '03': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" />
    </svg>
  ),
  '04': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  '05': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  ),
  '06': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><path d="M9 15l2 2 4-4" />
    </svg>
  ),
}

export default function AIFabric() {
  return (
    <section className="ai-fabric section-padding" id="ai-fabric">
      <div className="container">
        <div className="af-header">
          <p className="section-label af-label">AI FABRIC</p>
          <h2 className="af-heading">
            Six Solutions. <span className="af-accent">One Unified</span> Platform.
          </h2>
          <p className="af-subtitle">
            Enterprise-grade AI solutions built for scalability, compliance, and measurable impact — from day one.
          </p>
        </div>

        <div className="af-list">
          {solutions.map((s) => (
            <div className="af-card" key={s.num} style={{ '--card-color': s.color }}>
              {/* Gradient bar top */}
              <div className="af-card-bar" />

              <div className="af-card-content">
                {/* Top row: icon + number ... category */}
                <div className="af-card-meta">
                  <div className="af-card-meta-left">
                    <div className="af-card-icon">{icons[s.num]}</div>
                    <span className="af-card-num">{s.num}</span>
                  </div>
                  <div className="af-card-meta-right">
                    <span className="af-card-category">{s.category}</span>
                    {s.featured && <span className="af-card-badge">Featured</span>}
                  </div>
                </div>

                {/* Title */}
                <h3 className="af-card-name">{s.name}</h3>

                {/* Description */}
                <p className="af-card-desc">{s.desc}</p>

                {/* Bottom: tags + View Solution */}
                <div className="af-card-bottom">
                  <div className="af-card-tags">
                    {s.tags.map((t) => (
                      <span className="af-tag" key={t}>{t}</span>
                    ))}
                  </div>
                  <span className="af-card-link">
                    View Solution
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
