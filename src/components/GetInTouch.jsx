import './GetInTouch.css'

const stages = [
  {
    level: 1,
    name: 'Reactive',
    desc: 'Manual processes, siloed data',
    color: '#E05A5A',
    gradient: 'linear-gradient(135deg, #E05A5A 0%, #C44B4B 100%)',
  },
  {
    level: 2,
    name: 'Emerging',
    desc: 'Basic automation, isolated pilots',
    color: '#E07A39',
    gradient: 'linear-gradient(135deg, #E07A39 0%, #D06A2A 100%)',
  },
  {
    level: 3,
    name: 'Defined',
    desc: 'Unified data, structured AI workflows',
    color: '#6476D8',
    gradient: 'linear-gradient(135deg, #6476D8 0%, #5060C0 100%)',
  },
  {
    level: 4,
    name: 'Optimized',
    desc: 'AI-driven, proactive operations',
    color: '#91C46B',
    gradient: 'linear-gradient(135deg, #91C46B 0%, #7DB85E 100%)',
  },
  {
    level: 5,
    name: 'Leading',
    desc: 'Agentic AI, outcome-linked',
    color: '#2A9D6A',
    gradient: 'linear-gradient(135deg, #2A9D6A 0%, #1A8B5A 100%)',
  },
]

const benefits = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    text: 'Benchmark against industry leaders',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
      </svg>
    ),
    text: 'Identify your biggest AI gaps',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    text: 'Get a prioritized AI roadmap',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    text: 'Receive your score in minutes',
  },
]

export default function GetInTouch() {
  return (
    <section className="maturity-section section-padding" id="contact">
      {/* Decorative background */}
      <div className="mat-decor" aria-hidden="true" />

      <div className="container">
        <div className="mat-inner">
          {/* Label */}
          <div className="mat-label">
            <span className="mat-label-line" />
            AI Maturity Assessment
          </div>

          {/* Headline */}
          <h2 className="mat-heading">
            Where Does Your{' '}
            <span className="mat-heading-gradient">AI Maturity</span>
            <br />
            Stand?
          </h2>

          {/* Subtitle */}
          <p className="mat-subtitle">
            Take our 5-minute assessment to uncover where you are on the
            AI maturity curve — and get a custom roadmap to close the gap.
          </p>

          {/* ── Maturity Stages Visual ── */}
          <div className="mat-stages">
            {stages.map((s) => (
              <div className="mat-stage" key={s.name}>
                <div
                  className="mat-bar"
                  style={{
                    '--bar-gradient': s.gradient,
                    '--bar-height': `${28 + s.level * 14}px`,
                  }}
                />
                <span className="mat-stage-name" style={{ color: s.color }}>
                  {s.name}
                </span>
                <span className="mat-stage-desc">{s.desc}</span>
              </div>
            ))}
          </div>

          {/* ── Benefits Row ── */}
          <div className="mat-benefits">
            {benefits.map((b) => (
              <div className="mat-benefit" key={b.text}>
                <div className="mat-benefit-icon">{b.icon}</div>
                <span className="mat-benefit-text">{b.text}</span>
              </div>
            ))}
          </div>

          {/* ── CTA Button ── */}
          <a href="#" className="mat-cta">
            Take the Assessment
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>

          {/* Trust line */}
          <p className="mat-trust">
            Free • No signup required • Results in under 5 minutes
          </p>
        </div>
      </div>
    </section>
  )
}
