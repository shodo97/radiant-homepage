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
      </div>
    </section>
  )
}
