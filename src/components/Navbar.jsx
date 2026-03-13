import { useState, useEffect } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'What We Do', href: '#what-we-do' },
    { label: 'Who We Are', href: '#who-we-are' },
    { label: 'Markets', href: '#markets' },
    { label: 'Insights', href: '#insights' },
    { label: 'Events', href: '#events' },
    { label: 'Careers', href: '#careers' },
  ]

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container">
        <a href="#" className="nav-logo">
          <span>~</span>RADIANT
        </a>

        <div className={`nav-links${menuOpen ? ' open' : ''}`}>
          {navItems.map(item => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <a href="#contact" className="btn-nav">BOOK A DEMO</a>
          <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <button
            className="hamburger"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(prev => !prev)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </nav>
  )
}
