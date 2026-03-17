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

/* ── Dashboard SVG illustration for hero ── */
function HeroDashboard() {
  return (
    <svg viewBox="0 0 480 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="cs-hero-dashboard">
      {/* Background */}
      <rect width="480" height="260" rx="16" fill="#0D1B2A" />
      <rect x="1" y="1" width="478" height="258" rx="15" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />

      {/* Top bar */}
      <rect x="16" y="12" width="448" height="28" rx="6" fill="rgba(255,255,255,0.04)" />
      <circle cx="30" cy="26" r="4" fill="#FF5F57" />
      <circle cx="44" cy="26" r="4" fill="#FEBC2E" />
      <circle cx="58" cy="26" r="4" fill="#28C840" />
      <text x="240" y="30" fill="rgba(255,255,255,0.3)" fontSize="10" fontFamily="Inter" textAnchor="middle">Radiant AI — Operations Dashboard</text>

      {/* Sidebar indicators */}
      <rect x="16" y="50" width="100" height="196" rx="8" fill="rgba(255,255,255,0.02)" />
      <rect x="28" y="62" width="76" height="8" rx="4" fill="rgba(42,125,125,0.5)" />
      <rect x="28" y="78" width="56" height="6" rx="3" fill="rgba(255,255,255,0.08)" />
      <rect x="28" y="96" width="76" height="8" rx="4" fill="rgba(255,255,255,0.06)" />
      <rect x="28" y="112" width="60" height="6" rx="3" fill="rgba(255,255,255,0.08)" />
      <rect x="28" y="130" width="76" height="8" rx="4" fill="rgba(255,255,255,0.06)" />
      <rect x="28" y="146" width="48" height="6" rx="3" fill="rgba(255,255,255,0.08)" />

      {/* KPI Cards */}
      <rect x="126" y="50" width="106" height="60" rx="10" fill="rgba(42,125,125,0.12)" />
      <text x="138" y="72" fill="#2A7D7D" fontSize="18" fontWeight="800" fontFamily="Inter">$2.1M</text>
      <text x="138" y="96" fill="rgba(255,255,255,0.35)" fontSize="9" fontFamily="Inter">Annual Savings</text>

      <rect x="240" y="50" width="106" height="60" rx="10" fill="rgba(100,118,216,0.12)" />
      <text x="252" y="72" fill="#6476D8" fontSize="18" fontWeight="800" fontFamily="Inter">43%</text>
      <text x="252" y="96" fill="rgba(255,255,255,0.35)" fontSize="9" fontFamily="Inter">Efficiency Gain</text>

      <rect x="354" y="50" width="106" height="60" rx="10" fill="rgba(61,139,55,0.12)" />
      <text x="366" y="72" fill="#3D8B37" fontSize="18" fontWeight="800" fontFamily="Inter">10K+</text>
      <text x="366" y="96" fill="rgba(255,255,255,0.35)" fontSize="9" fontFamily="Inter">Hours Saved</text>

      {/* Chart area */}
      <rect x="126" y="120" width="220" height="126" rx="10" fill="rgba(255,255,255,0.02)" />
      {/* Chart grid lines */}
      <line x1="146" y1="148" x2="330" y2="148" stroke="rgba(255,255,255,0.04)" />
      <line x1="146" y1="172" x2="330" y2="172" stroke="rgba(255,255,255,0.04)" />
      <line x1="146" y1="196" x2="330" y2="196" stroke="rgba(255,255,255,0.04)" />
      <line x1="146" y1="220" x2="330" y2="220" stroke="rgba(255,255,255,0.04)" />
      {/* Chart area fill */}
      <path d="M160 210 L190 192 L220 198 L250 172 L280 160 L310 148" stroke="#2A7D7D" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M160 210 L190 192 L220 198 L250 172 L280 160 L310 148 L310 220 L160 220 Z" fill="url(#chartGrad)" opacity="0.3" />
      {/* Chart dots */}
      <circle cx="160" cy="210" r="3" fill="#2A7D7D" />
      <circle cx="190" cy="192" r="3" fill="#2A7D7D" />
      <circle cx="220" cy="198" r="3" fill="#2A7D7D" />
      <circle cx="250" cy="172" r="3" fill="#2A7D7D" />
      <circle cx="280" cy="160" r="3" fill="#2A7D7D" />
      <circle cx="310" cy="148" r="4" fill="#2A7D7D" stroke="rgba(42,125,125,0.3)" strokeWidth="4" />
      {/* Chart labels */}
      <text x="136" y="238" fill="rgba(255,255,255,0.2)" fontSize="8" fontFamily="Inter">Week 1</text>
      <text x="226" y="238" fill="rgba(255,255,255,0.2)" fontSize="8" fontFamily="Inter">Week 3</text>
      <text x="300" y="238" fill="rgba(255,255,255,0.2)" fontSize="8" fontFamily="Inter">Week 6</text>
      <text x="136" y="136" fill="rgba(255,255,255,0.25)" fontSize="9" fontFamily="Inter" fontWeight="600">Efficiency Trend</text>

      {/* Right panel — progress bars */}
      <rect x="354" y="120" width="106" height="126" rx="10" fill="rgba(255,255,255,0.02)" />
      <text x="366" y="138" fill="rgba(255,255,255,0.25)" fontSize="9" fontFamily="Inter" fontWeight="600">Agents Active</text>
      {/* Bar 1 */}
      <rect x="366" y="148" width="82" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
      <rect x="366" y="148" width="72" height="6" rx="3" fill="#2A7D7D" />
      <text x="366" y="166" fill="rgba(255,255,255,0.3)" fontSize="8" fontFamily="Inter">DocuFlow — 88%</text>
      {/* Bar 2 */}
      <rect x="366" y="176" width="82" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
      <rect x="366" y="176" width="62" height="6" rx="3" fill="#6476D8" />
      <text x="366" y="194" fill="rgba(255,255,255,0.3)" fontSize="8" fontFamily="Inter">AI-RAD — 76%</text>
      {/* Bar 3 */}
      <rect x="366" y="204" width="82" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
      <rect x="366" y="204" width="78" height="6" rx="3" fill="#3D8B37" />
      <text x="366" y="222" fill="rgba(255,255,255,0.3)" fontSize="8" fontFamily="Inter">IT Ops — 95%</text>

      <defs>
        <linearGradient id="chartGrad" x1="235" y1="148" x2="235" y2="220" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#2A7D7D" />
          <stop offset="1" stopColor="#2A7D7D" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  )
}

/* ── Card illustration icons ── */
const cardIllustrations = {
  Federal: (
    <svg viewBox="0 0 400 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="cs-card-illus">
      <rect width="400" height="140" fill="url(#fedGrad)" />
      {/* Modernization flow */}
      <rect x="40" y="40" width="70" height="60" rx="8" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.15)" />
      <text x="75" y="66" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="Inter" textAnchor="middle">LEGACY</text>
      <text x="75" y="82" fill="rgba(255,255,255,0.25)" fontSize="7" fontFamily="Inter" textAnchor="middle">COBOL / .NET</text>
      {/* Arrow */}
      <path d="M120 70 L160 70" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeDasharray="4 3" />
      <polygon points="158,66 166,70 158,74" fill="rgba(255,255,255,0.3)" />
      {/* AI Agent */}
      <circle cx="200" cy="70" r="24" fill="rgba(19,133,176,0.25)" stroke="rgba(19,133,176,0.5)" />
      <text x="200" y="67" fill="#1385B0" fontSize="9" fontFamily="Inter" fontWeight="700" textAnchor="middle">AI</text>
      <text x="200" y="78" fill="rgba(255,255,255,0.4)" fontSize="7" fontFamily="Inter" textAnchor="middle">Agent</text>
      {/* Arrow */}
      <path d="M230 70 L270 70" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeDasharray="4 3" />
      <polygon points="268,66 276,70 268,74" fill="rgba(255,255,255,0.3)" />
      {/* Modern */}
      <rect x="285" y="40" width="70" height="60" rx="8" fill="rgba(19,133,176,0.15)" stroke="rgba(19,133,176,0.35)" />
      <text x="320" y="66" fill="#1385B0" fontSize="8" fontFamily="Inter" fontWeight="600" textAnchor="middle">MODERN</text>
      <text x="320" y="82" fill="rgba(255,255,255,0.3)" fontSize="7" fontFamily="Inter" textAnchor="middle">Cloud-Native</text>
      {/* 70% badge */}
      <rect x="315" y="105" width="50" height="20" rx="10" fill="rgba(19,133,176,0.2)" />
      <text x="340" y="119" fill="#1385B0" fontSize="10" fontWeight="700" fontFamily="Inter" textAnchor="middle">70%↑</text>
      <defs>
        <linearGradient id="fedGrad" x1="0" y1="0" x2="400" y2="140">
          <stop offset="0" stopColor="#0A1628" />
          <stop offset="1" stopColor="#0D2440" />
        </linearGradient>
      </defs>
    </svg>
  ),
  'Enterprise CX': (
    <svg viewBox="0 0 400 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="cs-card-illus">
      <rect width="400" height="140" fill="url(#cxGrad)" />
      {/* Multi-channel icons */}
      <circle cx="80" cy="55" r="18" fill="rgba(100,118,216,0.15)" stroke="rgba(100,118,216,0.35)" />
      <text x="80" y="59" fill="#6476D8" fontSize="16" fontFamily="Inter" textAnchor="middle">💬</text>
      <circle cx="140" cy="55" r="18" fill="rgba(100,118,216,0.15)" stroke="rgba(100,118,216,0.35)" />
      <text x="140" y="59" fill="#6476D8" fontSize="16" fontFamily="Inter" textAnchor="middle">📞</text>
      <circle cx="200" cy="55" r="18" fill="rgba(100,118,216,0.15)" stroke="rgba(100,118,216,0.35)" />
      <text x="200" y="59" fill="#6476D8" fontSize="16" fontFamily="Inter" textAnchor="middle">📧</text>
      {/* Converge arrows */}
      <path d="M80 75 L200 105" stroke="rgba(100,118,216,0.25)" strokeWidth="1" />
      <path d="M140 75 L200 105" stroke="rgba(100,118,216,0.25)" strokeWidth="1" />
      <path d="M200 75 L200 105" stroke="rgba(100,118,216,0.25)" strokeWidth="1" />
      {/* Unified platform */}
      <rect x="160" y="100" width="80" height="28" rx="14" fill="rgba(100,118,216,0.2)" stroke="rgba(100,118,216,0.4)" />
      <text x="200" y="118" fill="#6476D8" fontSize="9" fontFamily="Inter" fontWeight="600" textAnchor="middle">Unified CX</text>
      {/* NPS gauge */}
      <rect x="280" y="35" width="80" height="80" rx="12" fill="rgba(100,118,216,0.08)" />
      <text x="320" y="66" fill="#6476D8" fontSize="22" fontWeight="800" fontFamily="Inter" textAnchor="middle">+22</text>
      <text x="320" y="82" fill="rgba(255,255,255,0.35)" fontSize="9" fontFamily="Inter" textAnchor="middle">NPS Lift</text>
      <text x="320" y="104" fill="rgba(100,118,216,0.6)" fontSize="8" fontFamily="Inter" textAnchor="middle">50% less friction</text>
      <defs>
        <linearGradient id="cxGrad" x1="0" y1="0" x2="400" y2="140">
          <stop offset="0" stopColor="#0A1228" />
          <stop offset="1" stopColor="#141840" />
        </linearGradient>
      </defs>
    </svg>
  ),
  'Financial Services': (
    <svg viewBox="0 0 400 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="cs-card-illus">
      <rect width="400" height="140" fill="url(#finGrad)" />
      {/* Transaction stream */}
      <rect x="30" y="30" width="340" height="80" rx="10" fill="rgba(255,255,255,0.02)" />
      {/* Flowing lines representing transactions */}
      <path d="M50 70 Q100 50 150 68 Q200 86 250 60 Q300 34 340 55" stroke="rgba(224,122,57,0.3)" strokeWidth="1.5" fill="none" />
      <path d="M50 80 Q110 65 160 78 Q210 91 260 72 Q310 53 340 65" stroke="rgba(224,122,57,0.2)" strokeWidth="1" fill="none" />
      {/* Anomaly detected markers */}
      <circle cx="172" cy="72" r="8" fill="none" stroke="#E07A39" strokeWidth="1.5" />
      <circle cx="172" cy="72" r="3" fill="#E07A39" />
      <circle cx="290" cy="58" r="8" fill="none" stroke="#E07A39" strokeWidth="1.5" />
      <circle cx="290" cy="58" r="3" fill="#E07A39" />
      {/* Alert badge */}
      <rect x="168" y="44" width="56" height="18" rx="9" fill="rgba(224,122,57,0.2)" />
      <text x="196" y="56" fill="#E07A39" fontSize="8" fontWeight="600" fontFamily="Inter" textAnchor="middle">FLAGGED</text>
      {/* Stats */}
      <text x="50" y="45" fill="rgba(255,255,255,0.2)" fontSize="8" fontFamily="Inter">12M+ daily transactions</text>
      <rect x="260" y="94" width="100" height="24" rx="6" fill="rgba(224,122,57,0.12)" />
      <text x="310" y="110" fill="#E07A39" fontSize="10" fontWeight="700" fontFamily="Inter" textAnchor="middle">$4.3M saved</text>
      <defs>
        <linearGradient id="finGrad" x1="0" y1="0" x2="400" y2="140">
          <stop offset="0" stopColor="#1A1008" />
          <stop offset="1" stopColor="#2A1A0A" />
        </linearGradient>
      </defs>
    </svg>
  ),
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

          {/* Right: Dashboard + Metrics */}
          <div className="cs-hero-right">
            {/* Dashboard Illustration */}
            <div className="cs-hero-visual">
              <HeroDashboard />
            </div>

            {/* Metrics Row */}
            <div className="cs-hero-metrics-row">
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
        </div>

        {/* ── SECONDARY CARDS ── */}
        <div className="cs-grid">
          {cases.map((item) => (
            <article
              className="cs-card"
              key={item.title}
              style={{ '--cs-color': item.color }}
            >
              {/* Illustration */}
              {cardIllustrations[item.tag] && (
                <div className="cs-card-visual">
                  {cardIllustrations[item.tag]}
                </div>
              )}

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
