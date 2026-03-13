import './Hero.css'

const trustItems = [
  'Fortune 500 Trusted',
  '100+ AI Agents Deployed',
]

const floatingCards = [
  {
    value: '40%',
    label: 'Cost Reduction',
    color: '#2A7D7D',
    position: 'top-right',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
  {
    value: '6 Weeks',
    label: 'To Production',
    color: '#91C46B',
    position: 'bottom-left',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    value: '100+',
    label: 'AI Agents',
    color: '#6476D8',
    position: 'bottom-right',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
]

export default function Hero() {
  return (
    <section className="hero">
      {/* Light decorative background */}
      <div className="hero-decor" aria-hidden="true">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
      </div>
      <div className="hero-grid-overlay" aria-hidden="true" />

      <div className="container">
        <div className="hero-layout">
          {/* Left Column — Content */}
          <div className="hero-content">
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              <span className="hero-badge-text">Enterprise AI Platform</span>
            </div>

            <h1 className="hero-title">
              Deploy Enterprise AI Agents That Move from Pilot to Production
              in <span className="hero-highlight">6 Weeks</span>
            </h1>

            <p className="hero-sub">
              Radiant Digital designs and deploys enterprise-grade agentic AI
              systems that integrate directly with operational workflows —
              moving organizations from{' '}
              <strong>AI pilots to production</strong> in weeks, not months.
            </p>

            <div className="hero-ctas">
              <a href="#what-we-do" className="hero-btn-primary">
                Explore Our Capabilities
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a href="#contact" className="hero-btn-ghost">
                Book a Demo
              </a>
            </div>

            {/* Trust Line */}
            <div className="hero-trust">
              {trustItems.map((item) => (
                <div className="hero-trust-item" key={item}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column — Visual Anchor */}
          <div className="hero-visual">
            {/* Gradient glow behind composition */}
            <div className="hero-visual-glow" aria-hidden="true" />

            {/* Main screenshot container */}
            <div className="hero-product-frame">
              <img
                src="/hero-dashboard.png"
                alt="Radiant AI Platform Dashboard"
                className="hero-product-img"
                loading="eager"
              />
              {/* Gradient fade overlay at bottom */}
              <div className="hero-product-fade" aria-hidden="true" />
            </div>

            {/* Floating metric cards */}
            {floatingCards.map((card) => (
              <div
                className={`hero-float-card hero-float-${card.position}`}
                key={card.label}
                style={{ '--card-color': card.color }}
              >
                <div className="hero-float-icon">{card.icon}</div>
                <div className="hero-float-info">
                  <span className="hero-float-value">{card.value}</span>
                  <span className="hero-float-label">{card.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
