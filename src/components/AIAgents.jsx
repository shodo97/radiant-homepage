import './AIAgents.css'

const suites = [
  {
    name: 'AI-RAD™',
    domain: 'Rapid Application Development',
    color: '#2A7D7D',
    metric: '40%',
    metricLabel: 'Faster Delivery',
    description:
      'Multi-agent system that reverse-engineers legacy codebases, architects modern solutions, and generates production-ready code — cutting delivery timelines nearly in half.',
    agents: ['Architect', 'Developer', 'Validator', 'Rev. Engineer', 'Chunking'],
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="10 20 5 16 10 12" />
        <polyline points="22 12 27 16 22 20" />
        <path d="M18 8L14 24" />
        <path d="M16 4L20 8L16 12" opacity="0.4" />
      </svg>
    ),
  },
  {
    name: 'DocuFlow™',
    domain: 'Document Intelligence',
    color: '#1385B0',
    metric: '99.2%',
    metricLabel: 'Extraction Accuracy',
    description:
      'End-to-end document processing pipeline that inspects, extracts, classifies, and validates — achieving near-perfect accuracy across complex document types.',
    agents: ['Inspector', 'Extractor', 'Classifier', 'Router', 'Validator'],
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 4H20L24 8V26H8V4Z" />
        <path d="M20 4V8H24" />
        <path d="M12 14H20" opacity="0.4" />
        <path d="M12 18H17" opacity="0.4" />
        <path d="M15 22L18 22" /><polyline points="17 20 19 22 17 24" />
      </svg>
    ),
  },
  {
    name: 'Touchless IT Ops™',
    domain: 'Zero-Touch Operations',
    color: '#6476D8',
    metric: '85%',
    metricLabel: 'Less Manual Ops',
    description:
      'Autonomous IT operations platform that triages tickets, monitors infrastructure, and resolves incidents — without human intervention.',
    agents: ['Ticketing', 'Audit', 'Communication', 'Monitor', 'Resolver'],
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="16" cy="16" r="9" />
        <path d="M16 10V16L20 18" />
        <polyline points="23 9 26 6" /><polyline points="9 23 6 26" />
        <path d="M12 23L14 21" opacity="0.4" />
      </svg>
    ),
  },
  {
    name: 'DataPulse™',
    domain: 'Intelligent Data Management',
    color: '#91C46B',
    metric: '60%',
    metricLabel: 'Processing Reduction',
    description:
      'Intelligent data pipeline that cleans, enriches, and maps relationships across domains — cutting manual data processing by more than half.',
    agents: ['Cleaning', 'Enrichment', 'Ontology', 'Cypher', 'Quality'],
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="16" cy="9" rx="9" ry="4" />
        <path d="M7 9V23C7 25.2 11 27 16 27C21 27 25 25.2 25 23V9" />
        <path d="M7 16C7 18.2 11 20 16 20C21 20 25 18.2 25 16" opacity="0.4" />
        <path d="M16 13V17" opacity="0.3" /><path d="M12 14L16 17L20 14" opacity="0.3" />
      </svg>
    ),
  },
  {
    name: 'Enterprise ICX™',
    domain: 'Intelligent Customer Experience',
    color: '#E07A39',
    metric: '3x',
    metricLabel: 'Engagement Lift',
    description:
      'Omnichannel customer experience engine powered by voice, chat, and sentiment agents — tripling customer engagement across every touchpoint.',
    agents: ['Voice', 'Chat', 'Analytics', 'Routing', 'Sentiment'],
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 5H10C8.3 5 7 6.3 7 8V18C7 19.7 8.3 21 10 21H13L16 25L19 21H22C23.7 21 25 19.7 25 18V8C25 6.3 23.7 5 22 5Z" />
        <path d="M12 12H20" opacity="0.4" /><path d="M12 15.5H17" opacity="0.4" />
        <circle cx="22" cy="8" r="3" fill="currentColor" stroke="none" opacity="0.3" />
      </svg>
    ),
  },
]

export default function AIAgents() {
  return (
    <section className="ai-agents section-padding" id="what-we-do">
      <div className="container">
        {/* Header */}
        <div className="ag-header">
          <p className="section-label ag-label">RADIANT AGENT SUITE&trade;</p>
          <h2 className="ag-heading">
            Production-Deployed <span className="ag-accent">AI Agent</span> Systems
          </h2>
          <p className="ag-subtitle">
            Purpose-built multi-agent platforms delivering measurable outcomes
            across government and enterprise.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="ag-grid">
          {suites.map((suite, i) => (
            <div
              className={`ag-card ${i < 2 ? 'ag-card--featured' : ''}`}
              key={suite.name}
              style={{ '--suite-color': suite.color }}
            >
              {/* Top accent */}
              <div className="ag-card-accent" />

              {/* Card header */}
              <div className="ag-card-top">
                <div className="ag-card-icon">{suite.icon}</div>
                <span className="ag-card-badge">
                  <span className="ag-card-badge-dot" />
                  IN PRODUCTION
                </span>
              </div>

              {/* Content */}
              <h3 className="ag-card-name">{suite.name}</h3>
              <p className="ag-card-domain">{suite.domain}</p>
              <p className="ag-card-desc">{suite.description}</p>

              {/* Metric */}
              <div className="ag-card-metric">
                <span className="ag-card-metric-value">{suite.metric}</span>
                <span className="ag-card-metric-label">{suite.metricLabel}</span>
              </div>

              {/* Agent pills */}
              <div className="ag-card-agents">
                {suite.agents.map((agent) => (
                  <span className="ag-agent-pill" key={agent}>{agent}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
