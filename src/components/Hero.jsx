import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
}

const wordVariants = {
  hidden: { y: '110%', opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section
      id="top"
      ref={ref}
      className="grain"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        paddingBottom: '5rem',
        paddingLeft: 'clamp(1.5rem, 6vw, 6rem)',
        paddingRight: 'clamp(1.5rem, 6vw, 6rem)',
        paddingTop: '10rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background subtle pattern */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '40%',
          height: '100%',
          background: 'radial-gradient(ellipse at 80% 20%, rgba(255,184,0,0.12) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      <motion.div style={{ y, opacity }}>
        {/* Tag line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-mono-accent"
          style={{
            fontSize: '11px',
            marginBottom: '2rem',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            color: 'var(--ink)',
          }}
        >
          <span
            style={{
              display: 'inline-block',
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: 'var(--blush)',
              animation: 'pulse 2s infinite',
            }}
          />
          Available for freelance work
        </motion.div>

        {/* Hero headline */}
        <motion.h1
          className="font-display"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            fontSize: 'clamp(3.5rem, 11vw, 13rem)',
            fontWeight: 900,
            lineHeight: 0.88,
            overflow: 'hidden',
          }}
        >
          {['Creative', 'Designer &', 'Dreamer.'].map((line) => (
            <div
              key={line}
              style={{ overflow: 'hidden', display: 'block' }}
            >
              <motion.span
                variants={wordVariants}
                style={{
                  display: 'block',
                  willChange: 'transform',
                  color: line === 'Dreamer.' ? 'transparent' : 'var(--ink)',
                  WebkitTextStroke: line === 'Dreamer.' ? '2px var(--ink)' : 'none',
                }}
              >
                {line}
              </motion.span>
            </div>
          ))}
        </motion.h1>

        {/* Sub info row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{
            marginTop: '3rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '2rem',
          }}
        >
          <p
            style={{
              maxWidth: '380px',
              fontSize: '1rem',
              lineHeight: 1.7,
              color: 'rgba(10,10,10,0.65)',
            }}
          >
            I craft digital experiences that feel alive — from bold brand identities
            to motion-rich interfaces.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href="#work"
              data-cursor="View"
              style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontWeight: 800,
                fontSize: '14px',
                background: 'var(--ink)',
                color: 'var(--cream)',
                padding: '14px 32px',
                borderRadius: '999px',
                border: '2px solid var(--ink)',
                textDecoration: 'none',
                letterSpacing: '-0.01em',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'transform 0.2s, box-shadow 0.2s',
                boxShadow: '4px 4px 0 var(--ink)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translate(2px,2px)'
                e.currentTarget.style.boxShadow = '2px 2px 0 var(--ink)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translate(0,0)'
                e.currentTarget.style.boxShadow = '4px 4px 0 var(--ink)'
              }}
            >
              See my work ↓
            </a>
            <a
              href="#contact"
              data-cursor="Talk"
              style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontWeight: 800,
                fontSize: '14px',
                background: 'transparent',
                color: 'var(--ink)',
                padding: '14px 32px',
                borderRadius: '999px',
                border: '2px solid var(--ink)',
                textDecoration: 'none',
                letterSpacing: '-0.01em',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'background 0.2s, color 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--butter)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent'
              }}
            >
              Let's talk
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          right: 'clamp(1.5rem, 6vw, 6rem)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <span
          className="font-mono-accent"
          style={{ fontSize: '9px', opacity: 0.5 }}
        >
          Scroll
        </span>
        <div
          style={{
            width: 1,
            height: 60,
            background: 'var(--ink)',
            opacity: 0.3,
            animation: 'scrollLine 2s ease-in-out infinite',
          }}
        />
      </motion.div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        @keyframes scrollLine {
          0% { transform: scaleY(0); transform-origin: top; opacity: 0; }
          50% { transform: scaleY(1); transform-origin: top; opacity: 0.3; }
          100% { transform: scaleY(0); transform-origin: bottom; opacity: 0; }
        }
      `}</style>
    </section>
  )
}
