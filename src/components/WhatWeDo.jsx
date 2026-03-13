import './WhatWeDo.css'

const solutions = [
  { name: 'Enterprise ICX', color: '#2A7D7D' },
  { name: 'Experience AI', color: '#1385B0' },
  { name: 'AI-RAD', color: '#6476D8' },
  { name: 'DocuFlow', color: '#E07A39' },
  { name: 'Touchless IT Ops', color: '#044862' },
]

const agentGroups = [
  {
    label: 'Rapid App Dev',
    color: '#2A7D7D',
    agents: ['Developer', 'Architect', 'Validator', 'Reverse Eng.', 'Chunking'],
  },
  {
    label: 'Data Management',
    color: '#1385B0',
    agents: ['Inspector', 'Cleaning', 'Cypher', 'Enrichment', 'Ontology'],
  },
  {
    label: 'AI-Ops',
    color: '#6476D8',
    agents: ['User', 'Communication', 'Audit', 'Ticketing', 'Speech-to-Text'],
  },
]

export default function WhatWeDo() {
  return (
    <section className="what-we-do section-padding">
      <div className="container">
        {/* Header */}
        <div className="wwd-header">
          <p className="section-label" style={{ textAlign: 'center' }}>
            What We Do
          </p>
          <h2 className="wwd-headline">Radiant AI Fabric</h2>
          <p className="wwd-subline">
            A full-stack AI architecture that connects platform infrastructure,
            enterprise solutions, and specialized agents into one composable system.
          </p>
        </div>

        {/* Architecture Canvas */}
        <div className="wwd-canvas">
          {/* Tier 1: Platform core */}
          <div className="wwd-tier wwd-tier--platform">
            <div className="wwd-tier-label">Platform Layer</div>
            <div className="wwd-platform-core">
              <div className="wwd-platform-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"/>
                  <polyline points="2 17 12 22 22 17"/>
                  <polyline points="2 12 12 17 22 12"/>
                </svg>
              </div>
              <div className="wwd-platform-text">
                <span className="wwd-platform-name">Radiant AI Platform</span>
                <span className="wwd-platform-desc">
                  Microagent Framework · Cognitive UX · Semantic Context · Agentic Data
                </span>
              </div>
            </div>
          </div>

          {/* Connector line */}
          <div className="wwd-connector">
            <div className="wwd-connector-line" />
            <svg className="wwd-connector-arrow" width="12" height="8" viewBox="0 0 12 8" fill="none">
              <path d="M6 8L0 0h12L6 8z" fill="rgba(255,255,255,0.2)"/>
            </svg>
          </div>

          {/* Tier 2: Solutions */}
          <div className="wwd-tier wwd-tier--solutions">
            <div className="wwd-tier-label">Enterprise Solutions</div>
            <div className="wwd-solutions-row">
              {solutions.map((sol) => (
                <div
                  className="wwd-solution-chip"
                  key={sol.name}
                  style={{ '--sol-c': sol.color }}
                >
                  <span className="wwd-sol-dot" />
                  <span>{sol.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Connector line */}
          <div className="wwd-connector">
            <div className="wwd-connector-line" />
            <svg className="wwd-connector-arrow" width="12" height="8" viewBox="0 0 12 8" fill="none">
              <path d="M6 8L0 0h12L6 8z" fill="rgba(255,255,255,0.2)"/>
            </svg>
          </div>

          {/* Tier 3: Agents */}
          <div className="wwd-tier wwd-tier--agents">
            <div className="wwd-tier-label">Specialized Agents</div>
            <div className="wwd-agents-grid">
              {agentGroups.map((group) => (
                <div
                  className="wwd-agent-group"
                  key={group.label}
                  style={{ '--ag-c': group.color }}
                >
                  <span className="wwd-ag-label">{group.label}</span>
                  <div className="wwd-ag-tags">
                    {group.agents.map((a) => (
                      <span className="wwd-ag-tag" key={a}>{a}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
