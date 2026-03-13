import { useState } from 'react'
import './AIAgents.css'

/* ── Per-agent SVG icons ── */
const icons = {
  Architect: (
    <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 3L3 9V19L14 25L25 19V9L14 3Z" />
      <path d="M14 13L3 9" opacity="0.4" /><path d="M14 13L25 9" opacity="0.4" /><path d="M14 13V25" opacity="0.4" />
    </svg>
  ),
  Developer: (
    <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="8 18 3 14 8 10" /><polyline points="20 10 25 14 20 18" /><path d="M16 5L12 23" strokeWidth="1.4" />
    </svg>
  ),
  Validator: (
    <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 3L4 8V14C4 20 14 25 14 25C14 25 24 20 24 14V8L14 3Z" /><polyline points="10 14 13 17 18 11" />
    </svg>
  ),
  'Rev. Engineer': (
    <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 14H10L12.5 8L15.5 20L18 14H24" /><circle cx="14" cy="14" r="10" opacity="0.25" />
    </svg>
  ),
  Chunking: (
    <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="9" height="9" rx="2" /><rect x="16" y="3" width="9" height="9" rx="2" />
      <rect x="3" y="16" width="9" height="9" rx="2" /><rect x="16" y="16" width="9" height="9" rx="2" />
    </svg>
  ),
  Inspector: (
    <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="7" /><path d="M17 17L24 24" /><path d="M9 10H15" opacity="0.4" /><path d="M9 13H13" opacity="0.4" />
    </svg>
  ),
  Extractor: (
    <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="3" width="14" height="18" rx="2" /><path d="M8 8H14" opacity="0.4" /><path d="M8 11H12" opacity="0.4" />
      <path d="M18 14L24 14" /><polyline points="22 11 24 14 22 17" />
    </svg>
  ),
  Classifier: (
    <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 4V12" /><path d="M14 12L6 18" /><path d="M14 12L22 18" />
      <circle cx="14" cy="4" r="2.5" /><circle cx="6" cy="20" r="2.5" /><circle cx="22" cy="20" r="2.5" />
    </svg>
  ),
  Router: (
    <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="14" cy="14" r="3" /><path d="M14 4V11" /><path d="M14 17V24" /><path d="M4 14H11" /><path d="M17 14H24" />
    </svg>
  ),
  'Doc Validator': (
    <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 3H17L21 7V23H7V3Z" /><path d="M17 3V7H21" /><polyline points="11 14 13 16 17 12" />
    </svg>
  ),
  Ticketing: (
    <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="5" width="20" height="18" rx="3" /><path d="M4 11H24" opacity="0.4" /><path d="M9 16H15" /><path d="M9 19H12" opacity="0.4" />
    </svg>
  ),
  Audit: (
    <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 3H20V25H8V3Z" /><polyline points="11 9 12.5 10.5 15 8" /><polyline points="11 14 12.5 15.5 15 13" /><polyline points="11 19 12.5 20.5 15 18" />
    </svg>
  ),
  Communication: (
    <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 6H24V18H12L7 22V18H4V6Z" /><path d="M9 10H19" opacity="0.4" /><path d="M9 13H15" opacity="0.4" />
    </svg>
  ),
  Monitor: (
    <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="22" height="16" rx="2" /><path d="M10 24H18" /><path d="M14 20V24" /><path d="M7 13H10L12 9L15 15L17 12H21" />
    </svg>
  ),
  Resolver: (
    <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="14" cy="14" r="10" /><path d="M10 12C10.5 9.5 12 8 14 8C16.5 8 18 10 18 12C18 13.5 16 14.5 16 16H12C12 14.5 10 13.5 10 12Z" /><path d="M12 20H16" />
    </svg>
  ),
  Cleaning: (
    <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 4L8 16L6 22L12 20L24 8Z" /><path d="M17 7L21 11" opacity="0.4" />
    </svg>
  ),
  Enrichment: (
    <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="14" cy="14" r="6" /><path d="M14 4V8" /><path d="M14 20V24" /><path d="M4 14H8" /><path d="M20 14H24" />
      <path d="M7 7L10 10" opacity="0.4" /><path d="M18 18L21 21" opacity="0.4" />
    </svg>
  ),
  Ontology: (
    <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="14" cy="6" r="3" /><circle cx="6" cy="22" r="3" /><circle cx="22" cy="22" r="3" />
      <path d="M12 8.5L8 19.5" /><path d="M16 8.5L20 19.5" /><path d="M9 22H19" />
    </svg>
  ),
  Cypher: (
    <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="14" cy="8" rx="10" ry="4" /><path d="M4 8V20C4 22.2 8.5 24 14 24C19.5 24 24 22.2 24 20V8" />
      <path d="M4 14C4 16.2 8.5 18 14 18C19.5 18 24 16.2 24 14" opacity="0.4" />
    </svg>
  ),
  Quality: (
    <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 3L17 9L24 10L19 15L20 22L14 19L8 22L9 15L4 10L11 9L14 3Z" />
    </svg>
  ),
  Voice: (
    <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="10" y="3" width="8" height="13" rx="4" /><path d="M6 13C6 17.4 9.6 21 14 21C18.4 21 22 17.4 22 13" />
      <path d="M14 21V25" /><path d="M10 25H18" />
    </svg>
  ),
  Chat: (
    <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 4H7C5.3 4 4 5.3 4 7V17C4 18.7 5.3 20 7 20H10L14 24L18 20H21C22.7 20 24 18.7 24 17V7C24 5.3 22.7 4 21 4Z" />
      <circle cx="10" cy="12" r="1" fill="currentColor" stroke="none" /><circle cx="14" cy="12" r="1" fill="currentColor" stroke="none" /><circle cx="18" cy="12" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  Analytics: (
    <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 24V10" /><path d="M10 24V6" /><path d="M16 24V14" /><path d="M22 24V4" />
    </svg>
  ),
  Routing: (
    <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="5" cy="14" r="2.5" /><circle cx="23" cy="6" r="2.5" /><circle cx="23" cy="14" r="2.5" /><circle cx="23" cy="22" r="2.5" />
      <path d="M7.5 13L20.5 6.5" /><path d="M7.5 14H20.5" /><path d="M7.5 15L20.5 21.5" />
    </svg>
  ),
  Sentiment: (
    <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="14" cy="14" r="10" /><path d="M9 10V11" /><path d="M19 10V11" /><path d="M10 17C11 19 12.5 20 14 20C15.5 20 17 19 18 17" />
    </svg>
  ),
}

const families = [
  {
    name: 'Code & Engineering',
    color: '#6476D8',
    gradient: 'linear-gradient(135deg, #6476D8, #8494E8)',
    agents: [
      { id: 'Architect', desc: 'Designs system architecture and technical blueprints' },
      { id: 'Developer', desc: 'Generates production-ready application code' },
      { id: 'Validator', desc: 'Tests and validates code quality and compliance' },
      { id: 'Rev. Engineer', desc: 'Reverse-engineers legacy codebases' },
      { id: 'Chunking', desc: 'Decomposes large codebases into processable units' },
    ],
  },
  {
    name: 'Document Processing',
    color: '#1385B0',
    gradient: 'linear-gradient(135deg, #1385B0, #17A5D9)',
    agents: [
      { id: 'Inspector', desc: 'Analyzes document structure and data quality' },
      { id: 'Extractor', desc: 'Pulls structured data from unstructured documents' },
      { id: 'Classifier', desc: 'Categorizes documents by type and intent' },
      { id: 'Router', desc: 'Directs documents to appropriate workflows' },
      { id: 'Doc Validator', desc: 'Validates extracted data for accuracy' },
    ],
  },
  {
    name: 'IT Operations',
    color: '#2A7D7D',
    gradient: 'linear-gradient(135deg, #2A7D7D, #35A0A0)',
    agents: [
      { id: 'Ticketing', desc: 'Auto-triages and routes support tickets' },
      { id: 'Audit', desc: 'Performs compliance and security audits' },
      { id: 'Communication', desc: 'Manages stakeholder notifications' },
      { id: 'Monitor', desc: 'Tracks infrastructure health in real-time' },
      { id: 'Resolver', desc: 'Auto-resolves common incident patterns' },
    ],
  },
  {
    name: 'Data Management',
    color: '#3D8B37',
    gradient: 'linear-gradient(135deg, #3D8B37, #5AAF52)',
    agents: [
      { id: 'Cleaning', desc: 'Detects and corrects data quality issues' },
      { id: 'Enrichment', desc: 'Augments datasets with external sources' },
      { id: 'Ontology', desc: 'Maps relationships across data domains' },
      { id: 'Cypher', desc: 'Generates graph database queries' },
      { id: 'Quality', desc: 'Monitors data pipeline health metrics' },
    ],
  },
  {
    name: 'Customer Experience',
    color: '#D47A2B',
    gradient: 'linear-gradient(135deg, #D47A2B, #E89A4F)',
    agents: [
      { id: 'Voice', desc: 'Powers natural voice interactions' },
      { id: 'Chat', desc: 'Manages conversational AI experiences' },
      { id: 'Analytics', desc: 'Tracks engagement and satisfaction metrics' },
      { id: 'Routing', desc: 'Directs customers to optimal channels' },
      { id: 'Sentiment', desc: 'Analyzes customer emotion in real-time' },
    ],
  },
]

export default function AIAgents() {
  const [active, setActive] = useState(0)
  const family = families[active]

  return (
    <section className="ai-agents section-padding" id="what-we-do">
      <div className="container">
        {/* Header */}
        <div className="ag-header">
          <p className="section-label">Radiant Agent Suite</p>
          <h2 className="ag-heading">
            25 Agents. <span className="ag-accent">5 Domains.</span> Production Ready.
          </h2>
          <p className="ag-subtitle">
            Purpose-built AI agents organized by operational domain —
            each with a dedicated function and production-grade reliability.
          </p>
        </div>

        {/* Family Tabs */}
        <div className="ag-tabs">
          {families.map((f, i) => (
            <button
              key={f.name}
              className={`ag-tab ${i === active ? 'ag-tab--active' : ''}`}
              style={{ '--tab-color': f.color, '--tab-gradient': f.gradient }}
              onClick={() => setActive(i)}
            >
              <span className="ag-tab-dot" />
              {f.name}
            </button>
          ))}
        </div>

        {/* Agent Cards — animated on switch */}
        <div
          className="ag-cards"
          key={family.name}
          style={{ '--family-color': family.color, '--family-gradient': family.gradient }}
        >
          {family.agents.map((agent, i) => (
            <div
              className="ag-card"
              key={agent.id}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="ag-card-icon">
                {icons[agent.id]}
              </div>
              <h4 className="ag-card-name">{agent.id}</h4>
              <p className="ag-card-desc">{agent.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
