import './WhoWeAre.css'

export default function WhoWeAre() {
  return (
    <section className="who-we-are section-padding" id="who-we-are">
      <div className="wwa-grid-pattern" aria-hidden="true" />

      <div className="container">
        <div className="wwa-layout">
          {/* Left — statement */}
          <div className="wwa-statement">
            <p className="wwa-eyebrow">Who We Are</p>
            <h2 className="wwa-headline">
              An AI-first digital transformation partner building enterprise
              agentic systems that help enterprises move AI from{' '}
              <span className="wwa-highlight">pilot to production</span> in 6 weeks.
            </h2>
          </div>

          {/* Right — KPI strip */}
          <div className="wwa-kpis">
            <div className="wwa-kpi">
              <span className="wwa-kpi-number">6</span>
              <div className="wwa-kpi-text">
                <span className="wwa-kpi-unit">Weeks</span>
                <span className="wwa-kpi-desc">Pilot to Production</span>
              </div>
            </div>

            <div className="wwa-kpi-divider" />

            <div className="wwa-kpi">
              <span className="wwa-kpi-number">40<span className="wwa-kpi-pct">%</span></span>
              <div className="wwa-kpi-text">
                <span className="wwa-kpi-unit">Faster</span>
                <span className="wwa-kpi-desc">Time-to-Market</span>
              </div>
            </div>

            <div className="wwa-kpi-divider" />

            <div className="wwa-kpi">
              <span className="wwa-kpi-number">30<span className="wwa-kpi-pct">%</span></span>
              <div className="wwa-kpi-text">
                <span className="wwa-kpi-unit">Lower</span>
                <span className="wwa-kpi-desc">Development Costs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
