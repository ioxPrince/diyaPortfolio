import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    const unsub = scrollY.on('change', (v) => setScrolled(v > 50))
    return () => unsub()
  }, [scrollY])

  const links = ['Work', 'About', 'Contact']

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-24 py-5 flex items-center justify-between"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: scrolled ? 'rgba(253,251,247,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '2px solid var(--ink)' : '2px solid transparent',
        transition: 'background 0.4s, border-color 0.4s, backdrop-filter 0.4s',
      }}
    >
      {/* Logo */}
      <a
        href="#top"
        className="font-display text-2xl font-black"
        data-cursor="Home"
        style={{ textDecoration: 'none', color: 'var(--ink)' }}
      >
        chloé.
      </a>

      {/* Nav Links */}
      <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            data-cursor=""
            className="font-mono-accent"
            style={{
              fontSize: '11px',
              color: 'var(--ink)',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.target.style.color = 'var(--blush)')}
            onMouseLeave={(e) => (e.target.style.color = 'var(--ink)')}
          >
            {link}
          </a>
        ))}
        <a
          href="mailto:hello@chloe.design"
          data-cursor="Email"
          style={{
            fontFamily: "'Cabinet Grotesk', sans-serif",
            fontWeight: 800,
            fontSize: '13px',
            background: 'var(--ink)',
            color: 'var(--cream)',
            padding: '8px 20px',
            borderRadius: '999px',
            border: '2px solid var(--ink)',
            textDecoration: 'none',
            letterSpacing: '-0.01em',
            transition: 'background 0.2s, color 0.2s',
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'var(--butter)'
            e.target.style.color = 'var(--ink)'
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'var(--ink)'
            e.target.style.color = 'var(--cream)'
          }}
        >
          Hire me ↗
        </a>
      </nav>
    </motion.header>
  )
}
