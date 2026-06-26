import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', message: '' })
  }

  const inputStyle = {
    width: '100%',
    padding: '1rem 1.2rem',
    background: 'var(--cream)',
    border: '2px solid var(--ink)',
    borderRadius: '0.75rem',
    fontSize: '15px',
    fontFamily: "'Satoshi', sans-serif",
    color: 'var(--ink)',
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    boxSizing: 'border-box',
    display: 'block',
  }

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        padding: 'clamp(5rem, 10vw, 10rem) clamp(1.5rem, 6vw, 6rem)',
        background: 'var(--cream)',
        borderTop: '2px solid var(--ink)',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,340px), 1fr))',
          gap: '5rem',
          alignItems: 'start',
        }}
      >
        {/* Left */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-mono-accent"
            style={{ fontSize: '11px', marginBottom: '1.5rem', opacity: 0.5 }}
          >
            Get in touch
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display"
            style={{
              fontSize: 'clamp(2.5rem, 4.5vw, 5rem)',
              fontWeight: 900,
              lineHeight: 0.9,
              marginBottom: '2rem',
            }}
          >
            Let's create
            <br />
            <span style={{ color: 'var(--blush)' }}>something</span>
            <br />
            great.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontSize: '1rem', lineHeight: 1.7, opacity: 0.6, maxWidth: '360px' }}
          >
            Have a project in mind? I'm always open to discussing new ideas,
            creative work, or collaboration opportunities.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ marginTop: '2.5rem' }}
          >
            {[
              { label: 'Email', value: 'diyakhatri1405@gmail.com' },
              { label: 'Phone', value: '+91 6367993341' },
              { label: 'Based in', value: 'Jaipur, Rajasthan' },
            ].map(({ label, value }) => (
              <div
                key={label}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid rgba(10,10,10,0.12)',
                  padding: '0.9rem 0',
                }}
              >
                <span
                  className="font-mono-accent"
                  style={{ fontSize: '10px', opacity: 0.5 }}
                >
                  {label}
                </span>
                <span style={{ fontSize: '14px', fontWeight: 500 }}>{value}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right - Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{
            background: 'var(--ink)',
            borderRadius: '1.5rem',
            padding: '2.5rem',
            border: '2px solid var(--ink)',
          }}
        >
          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{
                textAlign: 'center',
                padding: '3rem 1rem',
                color: 'var(--cream)',
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✉️</div>
              <h3
                className="font-display"
                style={{ fontSize: '2rem', color: 'var(--butter)', marginBottom: '0.5rem' }}
              >
                Message sent!
              </h3>
              <p style={{ opacity: 0.6, fontSize: '14px' }}>I'll get back to you within 24 hours.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <h3
                className="font-display"
                style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--cream)', marginBottom: '0.5rem' }}
              >
                Send a message
              </h3>

              {[
                { name: 'name', label: 'Your name', type: 'text' },
                { name: 'email', label: 'Email address', type: 'email' },
              ].map(({ name, label, type }) => (
                <div key={name}>
                  <label
                    style={{
                      display: 'block',
                      color: 'var(--cream)',
                      opacity: 0.6,
                      fontSize: '11px',
                      fontFamily: "'Space Mono', monospace",
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      marginBottom: '6px',
                    }}
                  >
                    {label}
                  </label>
                  <input
                    type={type}
                    required
                    value={form[name]}
                    onChange={(e) => setForm((f) => ({ ...f, [name]: e.target.value }))}
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--butter)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--ink)')}
                  />
                </div>
              ))}

              <div>
                <label
                  style={{
                    display: 'block',
                    color: 'var(--cream)',
                    opacity: 0.6,
                    fontSize: '11px',
                    fontFamily: "'Space Mono', monospace",
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    marginBottom: '6px',
                  }}
                >
                  Your message
                </label>
                <textarea
                  rows={5}
                  required
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  style={{ ...inputStyle, resize: 'vertical' }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--butter)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--ink)')}
                />
              </div>

              <motion.button
                type="submit"
                data-cursor="Send"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  fontFamily: "'Cabinet Grotesk', sans-serif",
                  fontWeight: 800,
                  fontSize: '15px',
                  background: 'var(--butter)',
                  color: 'var(--ink)',
                  padding: '1rem',
                  border: '2px solid var(--butter)',
                  borderRadius: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  letterSpacing: '-0.01em',
                  marginTop: '0.5rem',
                }}
              >
                Send Message
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/>
                  <path d="m21.854 2.147-10.94 10.939"/>
                </svg>
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
