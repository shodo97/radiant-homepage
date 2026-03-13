import './CaseStudies.css'

/* ── Hero / Featured case study ── */
const hero = {
  label: 'Proof, Not Promises',
  headlineParts: [
    { text: '$2.1M Saved.', color: '#1d1d1f' },
    { text: '43% More Efficient.', color: '#1d1d1f' },
    { text: 'In 6 Weeks.', color: '#2A7D7D' },
  ],
  company: 'Leading Telecom Enterprise',
  companyMeta: 'Fortune 500 · Telecommunications',
  companyInitial: 'T',
  companyColor: '#2A7D7D',
  narrative:
    'Leading Telecom Enterprise needed AI that delivered measurable ROI, not another pilot. Radiant deployed agentic workflows that automated 10,000+ manual hours — a 43% efficiency gain and $2.1M in annual savings, live in production within 6 weeks.',
  quote:
    '"We expected efficiency gains. What we got was a fundamental shift — our operations team now focuses on strategy, not firefighting."',
  quoteAuthor: 'Operations Director, Fortune 500 Telecom',
  metrics: [
    { value: '10K+', label: 'Hours Automated Annually', color: '#2A7D7D' },
    { value: '43%', label: 'Operational Efficiency Gain', color: '#6476D8' },
    { value: '$2.1M', label: 'Annual Cost Savings', color: '#3D8B37' },
    { value: '6 wks', label: 'From Kickoff to Production', color: '#E07A39' },
  ],
}

/* ── Secondary case studies ── */
const cases = [
  {
    tag: 'Federal',
    title: 'AI-Accelerated Application Modernization for Federal Agency',
    desc: 'Modernized legacy systems 70% faster using AI-powered reverse engineering and rapid development agents — delivering a FedRAMP-ready platform in record time.',
    color: '#1385B0',
    metric: '70%',
    metricLabel: 'Faster Delivery',
    outcome: '3 legacy systems modernized',
  },
  {
    tag: 'Enterprise CX',
    title: 'Reducing ICX Friction 50% with Enterprise AI Platform',
    desc: 'Unified fragmented customer touchpoints into a seamless AI-orchestrated experience, cutting resolution time in half and lifting NPS by 22 points.',
    color: '#6476D8',
    metric: '50%',
    metricLabel: 'Less Friction',
    outcome: '+22 NPS improvement',
  },
  {
    tag: 'Financial Services',
    title: 'Anomaly Detection Across 12M+ Daily Transactions',
    desc: 'Deployed real-time anomaly detection agents that identified fraud patterns 85% faster with 60% fewer false positives, saving $4.3M in potential losses annually.',
    color: '#E07A39',
    metric: '85%',
    metricLabel: 'Faster Detection',
    outcome: '$4.3M in losses prevented',
  },
]

export default function CaseStudies() {
  return (
    <section className="case-studies section-padding" id="insights">
      <div className="container">
        {/* ── Header ── */}
        <div className="cs-header">
          <p className="section-label">Case Studies</p>
          <h2 className="cs-headline">
            Enterprise AI outcomes you can measure — not just imagine.
          </h2>
        </div>

        {/* ── HERO CASE STUDY ── */}
        <div className="cs-hero">
          {/* Left: Narrative */}
          <div className="cs-hero-left">
            {/* Label */}
            <div className="cs-hero-label">
              <span className="cs-hero-label-line" />
              {hero.label}
            </div>

            {/* Big stats headline */}
            <h3 className="cs-hero-heading">
              {hero.headlineParts.map((p) => (
                <span key={p.text} style={{ color: p.color }}>
                  {p.text}
                  <br />
                </span>
              ))}
            </h3>

            {/* Company Card */}
            <div className="cs-company-card">
              <div
                className="cs-company-avatar"
                style={{ background: hero.companyColor }}
              >
                {hero.companyInitial}
              </div>
              <div className="cs-company-info">
                <span className="cs-company-name">{hero.company}</span>
                <span className="cs-company-meta">{hero.companyMeta}</span>
              </div>
              <span className="cs-case-badge">
                <span className="cs-badge-dot" />
                Case Study
              </span>
            </div>

            {/* Narrative */}
            <p className="cs-hero-narrative">{hero.narrative}</p>

            {/* Quote */}
            <blockquote className="cs-hero-quote">
              <span className="cs-quote-mark" aria-hidden="true">❝</span>
              <div>
                <p className="cs-quote-text">{hero.quote}</p>
                <cite className="cs-quote-author">— {hero.quoteAuthor}</cite>
              </div>
            </blockquote>
          </div>

          {/* Right: 2×2 Metrics Grid */}
          <div className="cs-hero-right">
            {hero.metrics.map((m) => (
              <div
                className="cs-hero-metric"
                key={m.label}
                style={{ '--hm-color': m.color }}
              >
                <span className="cs-hm-value">{m.value}</span>
                <span className="cs-hm-label">{m.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── SECONDARY CARDS ── */}
        <div className="cs-grid">
          {cases.map((item) => (
            <article
              className="cs-card"
              key={item.title}
              style={{ '--cs-color': item.color }}
            >
              {/* Tag */}
              <div className="cs-card-top">
                <span className="cs-card-tag">{item.tag}</span>
              </div>

              {/* Title */}
              <h3 className="cs-card-title">{item.title}</h3>

              {/* Description */}
              <p className="cs-card-desc">{item.desc}</p>

              {/* Bottom: Metric + Outcome */}
              <div className="cs-card-bottom">
                <div className="cs-card-metric">
                  <span className="cs-card-metric-val">{item.metric}</span>
                  <span className="cs-card-metric-label">{item.metricLabel}</span>
                </div>
                <div className="cs-card-outcome">{item.outcome}</div>
              </div>

              {/* CTA */}
              <a href="#" className="cs-card-link">
                Read Case Study
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
