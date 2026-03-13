import { useRef, useState, useEffect } from 'react'
import './Industries.css'

const industries = [
  {
    title: 'Federal Government',
    color: '#6476D8',
    image: '/ind-federal.jpg',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3"/>
      </svg>
    ),
    desc: 'AI-powered modernization for civilian and defense agencies — accelerating mission outcomes with FedRAMP-ready, security-first platforms.',
    stats: [
      { value: '40%', label: 'Faster Delivery' },
      { value: '60%', label: 'Cost Reduction' },
      { value: '99.9%', label: 'Uptime SLA' },
    ],
    clients: 'DHS, VA, HHS, DOD',
  },
  {
    title: 'State & Local Government',
    color: '#6B8F3C',
    image: '/ind-statelocal.jpg',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01"/>
      </svg>
    ),
    desc: 'Citizen-centric digital transformation that delivers better outcomes on smaller budgets — agentic AI for permits, benefits, and case processing.',
    stats: [
      { value: '30%', label: 'Cost Savings' },
      { value: '70%', label: 'Faster Processing' },
      { value: '25%', label: 'Citizen CSAT Lift' },
    ],
    clients: 'FL DCF, FL DEO, FL DOT',
  },
  {
    title: 'Education',
    color: '#9B59B6',
    image: '/ind-education.jpg',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5"/>
      </svg>
    ),
    desc: 'Campus analytics, research data platforms, and AI-assisted learning systems that transform student outcomes at scale.',
    stats: [
      { value: '3x', label: 'Engagement Lift' },
      { value: '45%', label: 'Admin Savings' },
      { value: '92%', label: 'Satisfaction' },
    ],
    clients: 'Major State Universities',
  },
  {
    title: 'Oil & Gas',
    color: '#D48B3B',
    image: '/ind-energy.jpg',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 12c-2-2.67-4-4.33-4-6a4 4 0 0 1 8 0c0 1.67-2 3.33-4 6z"/><path d="M12 21a8 8 0 0 0 8-8c0-3.37-2-6.29-4-8"/><path d="M12 21a8 8 0 0 1-8-8c0-3.37 2-6.29 4-8"/>
      </svg>
    ),
    desc: 'Predictive maintenance, asset optimization, and smart grid analytics for oil, gas, and utility enterprises.',
    stats: [
      { value: '35%', label: 'Downtime Cut' },
      { value: '20%', label: 'Yield Increase' },
      { value: '50%', label: 'Faster Insights' },
    ],
    clients: 'Major Energy Providers',
  },
  {
    title: 'Defense & Intelligence',
    color: '#2A9D8F',
    image: '/ind-defense.jpg',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    desc: 'Mission-critical AI for intelligence analysis, threat detection, and secure operations at the tactical edge.',
    stats: [
      { value: '10x', label: 'Faster Analysis' },
      { value: '85%', label: 'Accuracy Gain' },
      { value: 'IL5', label: 'Certified' },
    ],
    clients: 'DoD, IC Agencies',
  },
  {
    title: 'Telecom, Media & Technology',
    color: '#E05A8D',
    image: '/ind-telecom.jpg',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><circle cx="12" cy="20" r="1"/>
      </svg>
    ),
    desc: 'Network optimization, content intelligence, and subscriber analytics powered by agentic AI — driving 5G readiness and digital media transformation.',
    stats: [
      { value: '45%', label: 'Churn Reduction' },
      { value: '3x', label: 'Content ROI' },
      { value: '99.99%', label: 'Network Uptime' },
    ],
    clients: 'Major Telcos & Media Cos',
  },
  {
    title: 'Healthcare & Life Sciences',
    color: '#E74C3C',
    image: '/ind-healthcare.jpg',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    desc: 'Clinical data analytics, drug discovery acceleration, and patient outcome optimization with HIPAA-compliant AI platforms.',
    stats: [
      { value: '50%', label: 'Faster Trials' },
      { value: '30%', label: 'Cost Savings' },
      { value: 'HIPAA', label: 'Compliant' },
    ],
    clients: 'Leading Health Systems',
  },
  {
    title: 'Financial Services & Insurance',
    color: '#2C82C9',
    image: '/ind-finance.jpg',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
    desc: 'Fraud detection, risk modeling, and intelligent claims processing — AI-driven automation for banking, insurance, and capital markets.',
    stats: [
      { value: '80%', label: 'Fraud Detected' },
      { value: '60%', label: 'Claims Automated' },
      { value: '5x', label: 'Faster Underwriting' },
    ],
    clients: 'Top Banks & Insurers',
  },
]

export default function Industries() {
  const trackRef = useRef(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)

  const updateArrows = () => {
    const el = trackRef.current
    if (!el) return
    setCanPrev(el.scrollLeft > 2)
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 2)
  }

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    updateArrows()
    el.addEventListener('scroll', updateArrows, { passive: true })
    window.addEventListener('resize', updateArrows)
    return () => {
      el.removeEventListener('scroll', updateArrows)
      window.removeEventListener('resize', updateArrows)
    }
  }, [])

  const scroll = (dir) => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector('.ind-card-wrapper')
    const amount = card ? card.offsetWidth + 20 : 380
    el.scrollBy({ left: dir * amount, behavior: 'smooth' })
  }

  return (
    <section className="industries section-padding" id="markets">
      <div className="container">
        <div className="ind-header">
          <p className="section-label ind-label">
            Markets We Serve
          </p>
          <h2 className="ind-headline">
            Industries We Work With
          </h2>
          <p className="ind-subtitle">
            From Fortune 500 enterprises to federal agencies, we deliver
            AI solutions tailored to your domain.
          </p>
        </div>

        <div className="ind-carousel">
          <button
            className={`ind-arrow ind-arrow-prev${canPrev ? '' : ' ind-arrow-hidden'}`}
            onClick={() => scroll(-1)}
            aria-label="Previous"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>

          <div className="ind-grid" ref={trackRef}>
            {industries.map((item) => (
              <div
                className="ind-card-wrapper"
                key={item.title}
                style={{ '--ind-color': item.color }}
              >
                <article className="ind-card">
                  {/* === FRONT FACE === */}
                  <div className="ind-face ind-front">
                    <div className="ind-card-bg" style={{ backgroundImage: `url(${item.image})` }} />
                    <div className="ind-card-overlay" />
                    <div className="ind-front-content">
                      <div className="ind-card-icon">{item.icon}</div>
                      <h3 className="ind-card-title">{item.title}</h3>
                    </div>
                  </div>

                  {/* === BACK FACE === */}
                  <div className="ind-face ind-back">
                    <div className="ind-back-content">
                      <div className="ind-card-icon">{item.icon}</div>
                      <h3 className="ind-card-title">{item.title}</h3>
                      <p className="ind-card-desc">{item.desc}</p>

                      <div className="ind-card-stats">
                        {item.stats.map((stat) => (
                          <div className="ind-stat" key={stat.label}>
                            <span className="ind-stat-value">{stat.value}</span>
                            <span className="ind-stat-label">{stat.label}</span>
                          </div>
                        ))}
                      </div>

                      <div className="ind-card-clients">
                        <span className="ind-clients-label">Key Clients</span>
                        <span className="ind-clients-list">{item.clients}</span>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>

          <button
            className={`ind-arrow ind-arrow-next${canNext ? '' : ' ind-arrow-hidden'}`}
            onClick={() => scroll(1)}
            aria-label="Next"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
