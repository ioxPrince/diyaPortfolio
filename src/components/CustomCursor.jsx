import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [dot, setDot] = useState({ x: -100, y: -100 })
  const [label, setLabel] = useState('')
  const [isHover, setIsHover] = useState(false)

  useEffect(() => {
    const moveCursor = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
    }
    const moveDot = (e) => {
      setDot({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mousemove', moveDot)

    const handleEnter = (e) => {
      const el = e.target.closest('[data-cursor]')
      if (el) {
        setLabel(el.dataset.cursor || '')
        setIsHover(true)
      }
    }
    const handleLeave = (e) => {
      const el = e.target.closest('[data-cursor]')
      if (el) {
        setLabel('')
        setIsHover(false)
      }
    }

    document.addEventListener('mouseover', handleEnter)
    document.addEventListener('mouseout', handleLeave)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mousemove', moveDot)
      document.removeEventListener('mouseover', handleEnter)
      document.removeEventListener('mouseout', handleLeave)
    }
  }, [])

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none flex items-center justify-center"
        animate={{
          x: pos.x - (isHover ? 28 : 20),
          y: pos.y - (isHover ? 28 : 20),
          scale: isHover ? 1.5 : 1,
          width: isHover ? 56 : 40,
          height: isHover ? 56 : 40,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 25, mass: 0.5 }}
        style={{
          borderRadius: '50%',
          border: '2px solid var(--ink)',
          mixBlendMode: isHover ? 'normal' : 'normal',
          background: isHover ? 'var(--butter)' : 'transparent',
        }}
      >
        {label && (
          <span
            className="font-mono-accent text-[8px] font-bold text-ink whitespace-nowrap"
          >
            {label}
          </span>
        )}
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        animate={{
          x: dot.x - 4,
          y: dot.y - 4,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 30, mass: 0.1 }}
        style={{
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: 'var(--ink)',
        }}
      />
    </>
  )
}
