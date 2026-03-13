import './Pillars.css'

const pillars = [
  {
    num: '01',
    name: 'Digital Strategy & Experience',
    desc: 'Discover improved customer experience, productivity, and ROI through research-driven design and enterprise UX.',
    tags: ['Enterprise UX', 'CX/UX Research', 'Service Design', 'Digital Strategy'],
    stat: '50%',
    statLabel: 'engagement lift',
    color: '#91C46B',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83M16.62 12l-5.74 9.94" />
      </svg>
    ),
  },
  {
    num: '02',
    name: 'Analytics, Data Science & AI',
    desc: 'A steady stream of insights through transparent, accessible data and intelligent ML pipelines.',
    tags: ['Data Engineering', 'Business Intelligence', 'AI Adoption', 'ML Pipelines'],
    stat: '70%',
    statLabel: 'efficiency gain',
    color: '#E07A39',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    num: '03',
    name: 'Cloud Transformation',
    desc: 'Scalable, secure, and agile cloud infrastructure built for enterprise-grade performance.',
    tags: ['Cloud Migration', 'Hybrid Cloud', 'Infra Automation', 'Cloud Computing'],
    stat: '99.9%',
    statLabel: 'uptime SLA',
    color: '#1385B0',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
  },
  {
    num: '04',
    name: 'Product Development & Integration',
    desc: 'Deliver products at the speed of change with modern architecture and rapid deployment.',
    tags: ['System Modernization', 'Dev & Integration', 'RPA', 'Platform Dev'],
    stat: '40%',
    statLabel: 'faster deploys',
    color: '#6476D8',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    num: '05',
    name: 'Organizational Transformation',
    desc: 'Upskill, motivate, and align your workforce for lasting operational change.',
    tags: ['Change Management', 'Workforce Upskilling', 'Process Optimization', 'Culture Alignment'],
    stat: '3x',
    statLabel: 'adoption rate',
    color: '#2A7D7D',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2" />
      </svg>
    ),
  },
  {
    num: '06',
    name: 'Skilled Workforce Solutions',
    desc: 'A skilled, scalable workforce with global delivery centers for present and future growth.',
    tags: ['Onshore/Offshore', 'Full-Stack Engineers', 'Cloud Architects', 'AI/ML Specialists'],
    stat: '5+',
    statLabel: 'delivery centers',
    color: '#D44B8A',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
]

export default function Pillars() {
  return (
    <section className="pillars section-padding" id="pillars">
      <div className="container">
        {/* Header — split layout */}
        <div className="pl-header">
          <div className="pl-header-left">
            <div className="pl-label-row">
              <span className="pl-label-line" />
              <p className="section-label pl-label">BI FABRIC</p>
            </div>
            <h2 className="pl-heading">
              Six Pillars That{' '}
              <span className="pl-accent">Power Every</span>{' '}
              Initiative.
            </h2>
          </div>
          <div className="pl-header-right">
            <p className="pl-subtitle">
              From digital strategy to skilled workforce delivery —
              the foundation behind every AI transformation.
            </p>
          </div>
        </div>

        {/* 3×2 Grid */}
        <div className="pl-grid">
          {pillars.map((p) => (
            <div className="pl-card" key={p.num} style={{ '--pl-color': p.color }}>
              {/* Top row: number ... icon */}
              <div className="pl-card-top">
                <span className="pl-card-num">{p.num}</span>
                <div className="pl-card-icon">{p.icon}</div>
              </div>

              {/* Title */}
              <h3 className="pl-card-name">{p.name}</h3>

              {/* Description */}
              <p className="pl-card-desc">{p.desc}</p>

              {/* Tags */}
              <div className="pl-card-tags">
                {p.tags.map((t) => (
                  <span className="pl-tag" key={t}>{t}</span>
                ))}
              </div>

              {/* Stat */}
              <div className="pl-card-stat">
                <span className="pl-stat-value">{p.stat}</span>
                <span className="pl-stat-label">{p.statLabel}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
