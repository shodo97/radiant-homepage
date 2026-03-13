import './EnterpriseSolutions.css'

const solutions = [
  {
    title: 'Intelligent Customer Experience (Enterprise ICX)',
    color: '#2A7D7D',
    gradient: 'linear-gradient(135deg, #0D3B3B 0%, #1A6060 100%)',
    description:
      'AI-powered ICX platform that unifies fragmented CX tools and channels to orchestrate seamless customer experiences.',
    image: 'https://radiant-ai-landing.vercel.app/screenshots/enterprise-icx.png',
    tag: 'Customer Intelligence',
    metrics: [
      { value: '3x', label: 'Engagement Lift' },
      { value: '40%', label: 'Cost Reduction' },
      { value: '92%', label: 'CSAT Score' },
    ],
  },
  {
    title: 'CX Workbench',
    color: '#1385B0',
    gradient: 'linear-gradient(135deg, #0A3D54 0%, #1678A0 100%)',
    description:
      'AI-driven framework that analyzes fragmented experience data to quickly identify friction and prioritize action.',
    image: 'https://radiant-ai-landing.vercel.app/screenshots/cx-workbench.png',
    tag: 'Experience Analytics',
    metrics: [
      { value: '60%', label: 'Faster Insights' },
      { value: '35%', label: 'Churn Reduction' },
    ],
  },
  {
    title: 'AI Rapid Application Development (AI-RAD)',
    color: '#6476D8',
    gradient: 'linear-gradient(135deg, #2E3A7A 0%, #5568C8 100%)',
    description:
      'AI-enabled development platform that streamlines design-to-code workflows and simplifies legacy modernization.',
    image: 'https://radiant-ai-landing.vercel.app/screenshots/ai-fabric.png',
    tag: 'Development Platform',
    metrics: [
      { value: '40%', label: 'Faster Delivery' },
      { value: '70%', label: 'Less Rework' },
    ],
  },
  {
    title: 'Anomaly Detection',
    color: '#E07A39',
    gradient: 'linear-gradient(135deg, #7A3A10 0%, #D06A2A 100%)',
    description:
      'AI-enabled monitoring platform that detects anomalies in real-time across infrastructure and application layers.',
    image: 'https://radiant-ai-landing.vercel.app/screenshots/anomaly-detection.png',
    tag: 'Intelligent Monitoring',
    metrics: [
      { value: '99.7%', label: 'Detection Rate' },
      { value: '85%', label: 'Fewer False Positives' },
    ],
  },
  {
    title: 'Touchless IT Operations',
    color: '#044862',
    gradient: 'linear-gradient(135deg, #022A3A 0%, #055A7A 100%)',
    description:
      'AI-enabled IT operations platform that unifies observability and automation to detect, diagnose, and resolve issues proactively.',
    image: 'https://radiant-ai-landing.vercel.app/screenshots/anomaly-detection.png',
    tag: 'AIOps Platform',
    metrics: [
      { value: '85%', label: 'Less Manual Ops' },
      { value: '67%', label: 'Faster Resolution' },
    ],
  },
]

export default function EnterpriseSolutions() {
  const hero = solutions[0]
  const grid = solutions.slice(1)

  return (
    <section className="solutions section-padding">
      <div className="container">
        <p className="section-label" style={{ textAlign: 'center' }}>
          Radiant Digital Enterprise Solutions
        </p>
        <h2 className="solutions-headline">
          Industry-leading, enterprise-ready solutions built on the Radiant AI
          Platform to move enterprise AI agents from <mark>pilot to production</mark>{' '}
          in weeks.
        </h2>

        {/* Hero card — first solution */}
        <div
          className="sol-hero"
          style={{
            '--sol-color': hero.color,
            '--sol-gradient': hero.gradient,
          }}
        >
          <div className="sol-hero-text">
            <span className="sol-tag">{hero.tag}</span>
            <h3 className="sol-hero-title">{hero.title}</h3>
            <p className="sol-hero-desc">{hero.description}</p>

            {/* Hero Metrics */}
            <div className="sol-hero-metrics">
              {hero.metrics.map((m) => (
                <div className="sol-hero-metric" key={m.label}>
                  <span className="sol-hero-metric-value">{m.value}</span>
                  <span className="sol-hero-metric-label">{m.label}</span>
                </div>
              ))}
            </div>

            <a href="#" className="sol-cta">
              Learn More
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>
          <div className="sol-hero-visual">
            <div className="sol-screen">
              <img src={hero.image} alt={hero.title} loading="lazy" />
            </div>
          </div>
        </div>

        {/* Grid — remaining solutions */}
        <div className="sol-grid">
          {grid.map((sol, i) => (
            <div
              className="sol-card"
              key={sol.title}
              style={{
                '--sol-color': sol.color,
                '--sol-gradient': sol.gradient,
                animationDelay: `${i * 80}ms`,
              }}
            >
              <div className="sol-card-visual">
                <div className="sol-card-screen">
                  <img src={sol.image} alt={sol.title} loading="lazy" />
                </div>
              </div>
              <div className="sol-card-body">
                <span className="sol-tag">{sol.tag}</span>
                <h3 className="sol-card-title">{sol.title}</h3>
                <p className="sol-card-desc">{sol.description}</p>

                {/* Card Metrics */}
                <div className="sol-card-metrics">
                  {sol.metrics.map((m) => (
                    <div className="sol-card-metric" key={m.label}>
                      <span className="sol-card-metric-value">{m.value}</span>
                      <span className="sol-card-metric-label">{m.label}</span>
                    </div>
                  ))}
                </div>

                <a href="#" className="sol-cta">
                  Learn More
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
