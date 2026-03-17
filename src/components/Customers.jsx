import './Customers.css'

const stats = [
  { value: '18+', label: 'Years Delivering AI' },
  { value: '50+', label: 'Enterprise Clients' },
  { value: '$2B+', label: 'Programs Powered' },
  { value: '40%', label: 'Avg Cost Reduction' },
]

/* Only logos with cropped viewBoxes that render well on light backgrounds */
const logos = [
  '21', '22', '25', '28', '35', '36', '23',
]

export default function Customers() {
  return (
    <section className="customers section-padding" id="customers">
      <div className="container">
        {/* Header */}
        <div className="cu-header">
          <p className="section-label cu-label">PROVEN TRUST</p>
          <h2 className="cu-heading">
            50+ Enterprises. <span className="cu-accent">$2B+</span> in Programs.{' '}
            <span className="cu-accent">Real Results.</span>
          </h2>
          <p className="cu-subtitle">
            The proof is in who keeps coming back. Fortune 500s and federal agencies choose
            Radiant because we tie every engagement to measurable business impact — not billable hours.
          </p>
        </div>

        {/* Stats row */}
        <div className="cu-stats">
          {stats.map((s) => (
            <div className="cu-stat" key={s.label}>
              <span className="cu-stat-value">{s.value}</span>
              <span className="cu-stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Logo marquee */}
        <div className="cu-logos-wrapper">
          <div className="cu-logos-track">
            {[...logos, ...logos].map((id, i) => (
              <div className="cu-logo" key={i}>
                <img src={`/logos/${id}.svg`} alt="Client logo" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
