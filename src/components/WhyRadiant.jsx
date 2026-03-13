import './WhyRadiant.css'

/* ── Three BCG expectation gaps Radiant closes ── */
const differentiators = [
  {
    gapStat: '70%',
    gapLabel: 'of enterprises want outcome-linked contracts',
    gapProblem: 'Yet 60% of providers still bill time-and-materials.',
    color: '#2A7D7D',
    title: 'Outcome-Guaranteed Engagements',
    description:
      'Every Radiant engagement is structured around measurable business outcomes — not hours logged. We tie our success to yours with contractual KPIs, shared-risk models, and performance milestones.',
    proof: 'Outcome-linked',
    proofLabel: 'Contract Model',
  },
  {
    gapStat: '30–40%',
    gapLabel: 'productivity gains expected by enterprise buyers',
    gapProblem: 'Most providers commit to only 6–15%.',
    color: '#6476D8',
    title: 'Productivity That Exceeds Expectations',
    description:
      'Our AI Fabric delivers 30–40% productivity gains across every practice — from AI-RAD accelerating development cycles to Touchless IT Ops eliminating manual workflows. We don\'t just meet the bar, we reset it.',
    proof: '40%+',
    proofLabel: 'Avg. Productivity Gain',
  },
  {
    gapStat: '60%',
    gapLabel: 'of enterprises report no measurable TCO improvement',
    gapProblem: 'Despite investing in agentic AI initiatives.',
    color: '#E07A39',
    title: 'Provable Total Cost of Ownership',
    description:
      'Every deployment ships with a TCO dashboard — real-time visibility into cost reduction, efficiency gains, and ROI. No black boxes. No theoretical projections. Validated impact you can present to your board.',
    proof: 'Provable',
    proofLabel: 'TCO Reduction',
  },
]

/* ── Additional strengths — compact row ── */
const strengths = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: '6-Week Deployment',
    desc: 'Pilot to production in weeks, not quarters. Engineered POCs that scale from day one.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Governance Built In',
    desc: 'Audit trails, drift detection, human-in-the-loop escalation, and compliance reporting — enterprise-grade from the start.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
      </svg>
    ),
    title: '8 AI-Infused Practices',
    desc: 'AI DNA across Strategy, Experience, Product, Cloud, Analytics, Data, OT, and Skild — not a bolt-on, a foundation.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'C-Suite Partnership',
    desc: 'We engage at the executive level — aligning AI initiatives to board-level outcomes and enterprise transformation roadmaps.',
  },
]

export default function WhyRadiant() {
  return (
    <section className="why-radiant section-padding">
      <div className="container">
        {/* ── Header ── */}
        <div className="wr-header">
          <p className="section-label">Why Radiant AI</p>
          <h2 className="wr-heading">
            The Market Has Gaps.<br />We Close Them.
          </h2>
          <p className="wr-subtitle">
            BCG research shows enterprise buyers have clear expectations for
            AI service providers — and most aren't meeting them. Radiant is
            built to deliver where others fall short.
          </p>
        </div>

        {/* ── Differentiator Cards — BCG Gap → Radiant Answer ── */}
        <div className="wr-diff-grid">
          {differentiators.map((d) => (
            <div
              className="wr-diff-card"
              key={d.title}
              style={{ '--diff-color': d.color }}
            >
              {/* Gap Section */}
              <div className="wr-gap">
                <span className="wr-gap-stat">{d.gapStat}</span>
                <p className="wr-gap-label">{d.gapLabel}</p>
                <p className="wr-gap-problem">{d.gapProblem}</p>
              </div>

              {/* Divider */}
              <div className="wr-diff-divider" />

              {/* Radiant Answer */}
              <div className="wr-answer">
                <div className="wr-answer-badge">Radiant's Answer</div>
                <h3 className="wr-answer-title">{d.title}</h3>
                <p className="wr-answer-desc">{d.description}</p>
                <div className="wr-answer-proof">
                  <span className="wr-proof-value">{d.proof}</span>
                  <span className="wr-proof-label">{d.proofLabel}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Strength Chips ── */}
        <div className="wr-strengths">
          {strengths.map((s) => (
            <div className="wr-strength" key={s.title}>
              <div className="wr-strength-icon">{s.icon}</div>
              <div className="wr-strength-text">
                <h4 className="wr-strength-title">{s.title}</h4>
                <p className="wr-strength-desc">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Source Attribution ── */}
        <div className="wr-source">
          Insights informed by BCG, "The $200 Billion Agentic AI Opportunity
          for Tech Service Providers" · February 2026
        </div>
      </div>
    </section>
  )
}
