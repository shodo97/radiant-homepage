import './Outcomes.css'

const RING_R = 34
const RING_C = 2 * Math.PI * RING_R

const outcomes = [
  {
    number: 45,
    suffix: '%',
    label: 'Reduction in Development Costs',
    desc: 'AI-accelerated workflows cut expenses and free up engineering budgets.',
    color: '#2A7D7D',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
  },
  {
    number: 50,
    suffix: '%',
    label: 'Reduction in Operational Effort',
    desc: 'Automate repetitive tasks and streamline operations end-to-end.',
    color: '#1385B0',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
      </svg>
    ),
  },
  {
    number: 70,
    suffix: '%',
    label: 'Faster Product Delivery',
    desc: 'Ship products at unprecedented speed with agentic AI pipelines.',
    color: '#6476D8',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
  },
  {
    number: 50,
    suffix: '%',
    label: 'Increase in Processing Capacity',
    desc: 'Scale throughput without proportional headcount growth.',
    color: '#E07A39',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
]

export default function Outcomes() {
  return (
    <section className="outcomes section-padding">
      {/* Decorative background */}
      <div className="outcomes-decor" aria-hidden="true" />

      <div className="container">
        <div className="outcomes-header">
          <p className="section-label" style={{ textAlign: 'center' }}>
            Proven Results
          </p>
          <h2 className="outcomes-headline">
            Accelerate Enterprise AI Adoption<br />
            with Proven Outcomes
          </h2>
        </div>

        <div className="outcomes-grid">
          {outcomes.map((item) => (
            <div
              className="outcome-card"
              key={item.label}
              style={{ '--accent': item.color }}
            >
              {/* Hover glow */}
              <div className="outcome-card-glow" aria-hidden="true" />

              {/* Progress Ring */}
              <div className="outcome-ring-wrap">
                <svg className="outcome-ring" viewBox="0 0 84 84">
                  <circle
                    className="outcome-ring-track"
                    cx="42" cy="42" r={RING_R}
                  />
                  <circle
                    className="outcome-ring-fill"
                    cx="42" cy="42" r={RING_R}
                    strokeDasharray={RING_C}
                    strokeDashoffset={RING_C * (1 - item.number / 100)}
                    transform="rotate(-90 42 42)"
                  />
                </svg>
                <div className="outcome-ring-icon">
                  {item.icon}
                </div>
              </div>

              {/* Number */}
              <div className="outcome-value">
                <span className="outcome-number">{item.number}</span>
                <span className="outcome-suffix">{item.suffix}</span>
              </div>

              {/* Label */}
              <p className="outcome-label">{item.label}</p>

              {/* Description */}
              <p className="outcome-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
