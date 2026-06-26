import MarqueeModule from 'react-fast-marquee'
const Marquee = MarqueeModule.default || MarqueeModule

export default function Footer() {
  return (
    <footer className="bg-ink text-cream border-t-2 border-ink" style={{ background: 'var(--ink)', color: 'var(--cream)' }}>
      {/* Marquee Section */}
      <div
        className="py-8 overflow-hidden"
        style={{ borderBottom: '2px solid rgba(253,251,247,0.2)' }}
      >
        <Marquee speed={80} autoFill={true}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span
              className="font-display"
              style={{
                fontSize: 'clamp(3.75rem, 8vw, 6rem)',
                fontWeight: 900,
                textTransform: 'uppercase',
                letterSpacing: '-0.05em',
                paddingRight: '2.5rem',
              }}
            >
              Let's create{' '}
              <span style={{ color: 'var(--butter)' }}>together</span> —&nbsp;
            </span>
          </div>
        </Marquee>
      </div>

      {/* Bottom Footer Info */}
      <div
        style={{
          padding: '2.5rem clamp(1.5rem, 6vw, 6rem)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.5rem',
        }}
      >
        {/* Branding */}
        <div>
          <div className="font-display" style={{ fontSize: '1.5rem', fontWeight: 900 }}>
            chloé.
          </div>
          <div
            className="font-mono-accent"
            style={{ fontSize: '10px', opacity: 0.6, marginTop: '0.25rem' }}
          >
            © {new Date().getFullYear()} · Designed with intent
          </div>
        </div>

        {/* Social Links */}
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
          {['Instagram', 'LinkedIn', 'Behance', 'Dribbble'].map((social) => (
            <a
              key={social}
              href="#"
              className="font-mono-accent"
              style={{
                fontSize: '11px',
                textDecoration: 'none',
                color: 'var(--cream)',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.target.style.color = 'var(--butter)')}
              onMouseLeave={(e) => (e.target.style.color = 'var(--cream)')}
            >
              {social}
            </a>
          ))}
        </div>

        {/* Back to top */}
        <a
          href="#top"
          data-cursor="Up"
          style={{
            fontFamily: "'Cabinet Grotesk', sans-serif",
            fontWeight: 800,
            fontSize: '14px',
            background: 'var(--cream)',
            color: 'var(--ink)',
            padding: '10px 20px',
            borderRadius: '999px',
            border: '2px solid var(--cream)',
            textDecoration: 'none',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            transition: 'background 0.2s, border-color 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--butter)'
            e.currentTarget.style.borderColor = 'var(--butter)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'var(--cream)'
            e.currentTarget.style.borderColor = 'var(--cream)'
          }}
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
