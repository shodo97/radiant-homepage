import { useState } from 'react'
import './Framework.css'

const layers = [
  {
    number: '01',
    title: 'AI Solutions',
    color: '#91C46B',
    description:
      'Enterprises need AI that works on day one — not proof-of-concepts that stall. Our pre-built solutions deploy in weeks and deliver 40% avg cost reduction from the start.',
    tags: ['Enterprise ICX', 'CX Workbench', 'AI Fabric', 'Anomaly Detection', 'Rapid AI', 'DocuFlow'],
  },
  {
    number: '02',
    title: 'AI Platforms',
    color: '#6476D8',
    description:
      "Most AI platforms force trade-offs between speed and security. Ours doesn't — battle-tested infrastructure that scales to millions of interactions with governance built in.",
    tags: ['Secure Agent Framework', 'Cognitive Experience', 'Semantic Content Engine', 'Dynamic Knowledge Graph'],
  },
  {
    number: '03',
    title: 'AI Agents',
    color: '#2A7D7D',
    description:
      'Agentic AI creates 3 net-new value pools. Our agents unlock all three — building, deploying, and running AI across your enterprise with autonomous orchestration.',
    tags: ['Platform Builders', 'Solution Drivers', 'Delivery Accelerators', 'AgentOps', 'Task-Specific Agents'],
  },
  {
    number: '04',
    title: 'AI Capabilities',
    color: '#1385B0',
    description:
      'Leaders expect 30-40% efficiency gains, but most realize only 6-15%. Our full-spectrum AI capabilities close that gap — NLP, generative AI, and multi-agent systems delivering real results.',
    tags: ['NLP Pipelines', 'Predictive Systems', 'Generative AI', 'Multi-Agent Systems', 'Cloud Native AI'],
  },
  {
    number: '05',
    title: 'Enablers',
    color: '#E07A39',
    description:
      'AI transformation requires more than technology — it demands strategy, talent, and change management. Six service pillars ensure your AI initiative succeeds end-to-end.',
    tags: [
      'Digital Strategy & Experience',
      'Analytics, Data Science & AI',
      'Cloud Transformation',
      'Product Dev & Integration',
      'Organizational Transformation',
      'Skilled Workforce Solutions',
    ],
  },
]

export default function Framework() {
  const [active, setActive] = useState(0)
  const current = layers[active]

  return (
    <section className="framework section-padding" id="framework">
      <div className="container">
        {/* Header */}
        <div className="fw-header">
          <p className="section-label">Our Framework</p>
          <h2 className="fw-heading">
            One Framework. <span className="fw-heading-accent">Five Layers.</span> Proven ROI.
          </h2>
          <p className="fw-subtitle">
            Disconnected tools create disconnected results. Radiant AI is a
            5-layer architecture — engineered so every layer compounds value,
            turning fragmented AI efforts into a single outcome-driven engine.
          </p>
        </div>

        {/* Main Layout: Stack + Detail */}
        <div className="fw-layout">
          {/* Left: Visual Layer Stack */}
          <div className="fw-stack">
            {layers.map((layer, i) => (
              <button
                key={layer.number}
                className={`fw-stack-layer ${i === active ? 'fw-stack-layer--active' : ''}`}
                style={{ '--layer-color': layer.color }}
                onClick={() => setActive(i)}
              >
                <span className="fw-stack-indicator" />
                <span className="fw-stack-num">{layer.number}</span>
                <span className="fw-stack-title">{layer.title}</span>
                <svg
                  className="fw-stack-arrow"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            ))}
            {/* Connector line */}
            <div className="fw-stack-line" />
          </div>

          {/* Right: Active Layer Detail */}
          <div
            className="fw-detail"
            key={current.number}
            style={{ '--layer-color': current.color }}
          >
            <div className="fw-detail-badge">
              Layer {current.number}
            </div>
            <h3 className="fw-detail-title">{current.title}</h3>
            <p className="fw-detail-desc">{current.description}</p>

            <div className="fw-detail-tags">
              {current.tags.map((tag) => (
                <span className="fw-tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>

            <a href="#" className="fw-detail-explore">
              Explore {current.title}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>

        {/* Powered by world-class infrastructure */}
        <div className="fw-infra">
          <div className="fw-infra-label">
            <span className="fw-infra-line" />
            <span>Powered by world-class infrastructure</span>
            <span className="fw-infra-line" />
          </div>
          <div className="fw-infra-grid">
            {[
              { name: 'AWS', sub: 'Cloud Infrastructure', icon: (
                <svg viewBox="0 0 40 40" fill="none"><path d="M13.2 21.8c0 .4.1.7.2.9.1.2.3.5.5.7l-.6.5c-.2-.2-.4-.5-.5-.7-.2-.3-.3-.6-.3-.9 0-.6.2-1.1.6-1.5.4-.4 1-.6 1.6-.6.7 0 1.3.2 1.7.6.4.4.7.9.7 1.6h-1c0-.4-.2-.7-.4-1-.3-.2-.6-.4-1-.4s-.8.1-1 .4c-.3.2-.5.5-.5.9zm7.5 2.5h-1v-6.6h1v6.6zm5.3 0h-1l-2.4-5.1v5.1h-1v-6.6h1.3l2.1 4.6 2.1-4.6h1.3v6.6h-1v-5.1l-1.4 5.1zm-12.6 2.2c2.7 1.7 5.8 2.5 8.5 2.5 3.6 0 7-1.3 9.6-3.4.3-.2.1-.5-.2-.4-2.8 1.5-5.9 2.3-9 2.3-3.4 0-6.6-.9-9.4-2.5-.4-.2-.7.3-.3.5h.8z" fill="currentColor"/><path d="M30.2 24.4c-.4-.5-2.4-.2-3.3-.1-.3 0-.3-.2-.1-.4 1.6-1.1 4.3-.8 4.6-.4.3.4-.1 3-1.6 4.3-.2.2-.4.1-.3-.2.3-.8 1.1-2.6.7-3.2z" fill="currentColor"/></svg>
              )},
              { name: 'Google Cloud', sub: 'AI & ML Platform', icon: (
                <svg viewBox="0 0 40 40" fill="none"><path d="M25.6 14.4l1.7-1.7.1-.7A10.8 10.8 0 0012 17.4l.6-.1 3.4-.6s.2-.3.3-.3a7.4 7.4 0 019.3-2z" fill="currentColor" opacity=".7"/><path d="M29.2 17.4a10.8 10.8 0 00-3.6-5.4l-2.4 2.4a7.4 7.4 0 012.7 5.9v.7a3.7 3.7 0 010 7.4H20l-.7.8v4.4l.7.7h5.9a7.1 7.1 0 003.3-13.9z" fill="currentColor" opacity=".85"/><path d="M14.1 34.3H20v-3.4h-5.9a3.6 3.6 0 01-1.5-.3l-1 .3-1.8 1.7-.3 1a7 7 0 004.6 1.7z" fill="currentColor" opacity=".6"/><path d="M14.1 20a7.1 7.1 0 00-4.6 12.6l3-3a3.7 3.7 0 115-5l3-3A7.1 7.1 0 0014 20z" fill="currentColor"/></svg>
              )},
              { name: 'Microsoft Azure', sub: 'Enterprise Cloud', icon: (
                <svg viewBox="0 0 40 40" fill="none"><path d="M16.4 10h7l-7.8 19.6h-5.2L16.4 10zm12.2 13.4l-3.8-10.8h-4.5l5.2 13.7H14l-.6 1.5-.8 2.1h16.2l-2.2-6.5z" fill="currentColor"/></svg>
              )},
              { name: 'NVIDIA', sub: 'GPU Acceleration', icon: (
                <svg viewBox="0 0 40 40" fill="none"><path d="M16.4 17.6v-2c.2 0 .4 0 .6-.1 3-.3 5 2.4 5 2.4s-2.2 3-4.5 3c-.4 0-.7-.1-1-.2v-2.4c1.3.2 1.6-.5 2.8-2 0 0-1.3-1.7-2.9-.9v2.2zm0-5v1.7l.6-.1c4-.5 6.7 3 6.7 3s-3.1 3.9-6 3.9c-.5 0-.9-.1-1.3-.2V19c.3.1.7.2 1 .2 2.3 0 3.8-2.3 3.8-2.3s-1.7-2-3.5-2c-.4 0-.8.1-1.2.2v-.6c-.1 0-.1 0 0 0v-1.8zm0 9.6v.8c-4.2-.6-5.3-5-5.3-5s1.8-2 5.3-2.4v.8c-2.3-.3-4.1 1.8-4.1 1.8s.8 3.2 4.1 4z" fill="currentColor"/></svg>
              )},
              { name: 'OpenAI', sub: 'Foundation Models', icon: (
                <svg viewBox="0 0 40 40" fill="none"><path d="M29.4 17.8a5.4 5.4 0 00-.5-4.4 5.5 5.5 0 00-5.9-2.6A5.5 5.5 0 0018.8 9a5.4 5.4 0 00-5.2 3.7 5.4 5.4 0 00-3.6 2.6 5.5 5.5 0 00.7 6.4 5.4 5.4 0 00.4 4.4 5.5 5.5 0 006 2.6A5.5 5.5 0 0021.2 31a5.5 5.5 0 005.2-3.7 5.4 5.4 0 003.6-2.6 5.5 5.5 0 00-.6-6.4v-.5zm-8.2 11.7a4 4 0 01-2.6-.9l.1-.1 4.4-2.5a.7.7 0 00.4-.6v-6.2l1.8 1.1v5a4.1 4.1 0 01-4.1 4.2zm-8.8-3.9a4 4 0 01-.5-2.8v-.2l4.4 2.5a.7.7 0 00.7 0l5.3-3.1v2.1l-4.5 2.6a4.1 4.1 0 01-5.4-1.1zm-1.1-9.4a4 4 0 012.1-1.8v5.2c0 .3.1.5.3.6l5.3 3.1-1.9 1.1-4.4-2.5a4.1 4.1 0 01-1.4-5.7zm15.1 3.5l-5.3-3.1 1.9-1.1 4.4 2.5a4.1 4.1 0 01-.6 7.4V21c0-.3-.1-.5-.4-.6v.3zm1.9-2.8l-.2.1-4.3-2.5a.7.7 0 00-.7 0L18 18v-2.2l4.5-2.6a4.1 4.1 0 015.8 4.2v.5zM17 19.8l-1.9-1v-5a4.1 4.1 0 016.7-3.2l-.2.1-4.3 2.5a.7.7 0 00-.3.6v6zm1-2.2l2.4-1.4 2.4 1.4v2.7l-2.4 1.4-2.4-1.4v-2.7z" fill="currentColor"/></svg>
              )},
              { name: 'Anthropic', sub: 'Safety-First AI', icon: (
                <svg viewBox="0 0 40 40" fill="none"><path d="M22.7 12h3.1L31 28h-3.1l-5.2-16zm-5.4 0h3.1l5.2 16h-3.1l-1.2-3.8h-5.5L14.6 28h-3l5.7-16zm-.3 9.7h3.9l-2-6-1.9 6z" fill="currentColor"/></svg>
              )},
            ].map((p) => (
              <div className="fw-infra-card" key={p.name}>
                <div className="fw-infra-icon">{p.icon}</div>
                <span className="fw-infra-name">{p.name}</span>
                <span className="fw-infra-sub">{p.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
