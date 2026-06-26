import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skills = [
  'Branding', 'Social Media', 'Visual Design',
  'Digital Art', 'Typography', 'Illustration',
  'Print Design', 'Photo Retouching',
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="about"
      ref={ref}
      style={{
        padding: 'clamp(5rem, 10vw, 10rem) clamp(1.5rem, 6vw, 6rem)',
        borderTop: '2px solid var(--ink)',
        background: 'var(--ink)',
        color: 'var(--cream)',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,380px), 1fr))',
          gap: '4rem',
          alignItems: 'start',
        }}
      >
        {/* Left column */}
        <div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={0}
            className="font-mono-accent"
            style={{ fontSize: '11px', marginBottom: '1.5rem', opacity: 0.5, color: 'var(--cream)' }}
          >
            About me
          </motion.div>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={1}
            className="font-display"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 5rem)',
              fontWeight: 900,
              lineHeight: 0.9,
              marginBottom: '2rem',
            }}
          >
            Designer who
            <br />
            <span style={{ color: 'var(--butter)' }}>loves</span>
            <br />
            the details.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={2}
            style={{ fontSize: '1rem', lineHeight: 1.8, opacity: 0.75, maxWidth: '440px' }}
          >
            I am Diya Khatri, a passionate graphic designer based in Jaipur, Rajasthan.
            I focus on delivering creative solutions that meet both aesthetic and business objectives.
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={3}
            style={{ fontSize: '1rem', lineHeight: 1.8, opacity: 0.75, maxWidth: '440px', marginTop: '1.2rem' }}
          >
            I love turning ideas into impactful visuals that connect brands with their audience,
            specializing in branding, digital art, and visual design.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={4}
            style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
          >
            {[
              { label: '1+', sub: 'Years experience' },
              { label: 'B.A.', sub: 'Final Year (SGVU)' },
              { label: '2+', sub: 'Certifications' },
            ].map(({ label, sub }) => (
              <div
                key={label}
                style={{
                  background: 'rgba(255,255,255,0.07)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: '1rem',
                  padding: '1.2rem 1.8rem',
                  minWidth: '120px',
                }}
              >
                <div
                  className="font-display"
                  style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--butter)' }}
                >
                  {label}
                </div>
                <div style={{ fontSize: '12px', opacity: 0.6, marginTop: '2px' }}>{sub}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right column - Skills */}
        <div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={2}
            className="font-mono-accent"
            style={{ fontSize: '11px', marginBottom: '1.5rem', opacity: 0.5, color: 'var(--cream)' }}
          >
            Skills & tools
          </motion.div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.6rem',
            }}
          >
            {skills.map((skill, i) => (
              <motion.span
                key={skill}
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                custom={i * 0.5 + 2}
                style={{
                  fontFamily: "'Cabinet Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: '13px',
                  padding: '8px 16px',
                  border: '2px solid rgba(255,255,255,0.2)',
                  borderRadius: '999px',
                  color: 'var(--cream)',
                  letterSpacing: '-0.01em',
                  transition: 'border-color 0.2s, background 0.2s',
                  cursor: 'default',
                }}
                whileHover={{
                  borderColor: 'var(--butter)',
                  backgroundColor: 'rgba(255,184,0,0.1)',
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>

          {/* Tools */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={6}
            style={{ marginTop: '3rem' }}
          >
            <div
              className="font-mono-accent"
              style={{ fontSize: '11px', marginBottom: '1rem', opacity: 0.5 }}
            >
              Tools
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
              {['Adobe Photoshop', 'Adobe Illustrator', 'Canva Pro'].map(
                (tool) => (
                  <span
                    key={tool}
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: '11px',
                      opacity: 0.6,
                      padding: '4px 10px',
                      background: 'rgba(255,255,255,0.05)',
                      borderRadius: '4px',
                    }}
                  >
                    {tool}
                  </span>
                )
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
