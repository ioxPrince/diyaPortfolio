import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const projects = [
  {
    id: 1,
    title: 'Maison Léa',
    category: 'Brand Identity',
    year: '2024',
    tags: ['Branding', 'Typography', 'Print'],
    color: '#fef3c7',
    accent: '#d97706',
    image: '/pexels-photo-57690.jpg',
    desc: 'A luxury fragrance brand identity rooted in Parisian elegance and minimal sophistication.',
  },
  {
    id: 2,
    title: 'Orbit Finance',
    category: 'UI/UX Design',
    year: '2024',
    tags: ['Dashboard', 'Design System', 'Web'],
    color: '#ede9fe',
    accent: '#7c3aed',
    image: '/pexels-photo-5706015.jpg',
    desc: 'Redesigning financial data visualization for clarity, trust, and delight.',
  },
  {
    id: 3,
    title: 'Nord Bakery',
    category: 'Brand + Web',
    year: '2023',
    tags: ['Branding', 'Illustration', 'Web'],
    color: '#fce7f3',
    accent: '#db2777',
    image: '/pexels-photo-8099506.jpg',
    desc: 'Warm, artisanal brand identity for a Scandinavian-inspired bakery in Lyon.',
  },
  {
    id: 4,
    title: 'Vertix Motion',
    category: 'Motion Design',
    year: '2023',
    tags: ['Animation', 'After Effects', '3D'],
    color: '#d1fae5',
    accent: '#059669',
    image: '/pexels-photo-7318941.jpg',
    desc: 'A series of kinetic brand animations for a tech startup launching globally.',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="work"
      ref={ref}
      style={{
        padding: 'clamp(5rem, 10vw, 10rem) clamp(1.5rem, 6vw, 6rem)',
        background: 'var(--cream)',
        borderTop: '2px solid var(--ink)',
      }}
    >
      {/* Section header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          marginBottom: '4rem',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-mono-accent"
            style={{ fontSize: '11px', marginBottom: '1rem', opacity: 0.5 }}
          >
            Selected work
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', fontWeight: 900, lineHeight: 0.9 }}
          >
            Things I've
            <br />
            made with love.
          </motion.h2>
        </div>

        <motion.a
          href="#contact"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="font-mono-accent"
          style={{
            fontSize: '11px',
            textDecoration: 'none',
            color: 'var(--ink)',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            opacity: 0.6,
          }}
        >
          Start a project →
        </motion.a>
      </div>

      {/* Projects grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 480px), 1fr))',
          gap: '1.5rem',
        }}
      >
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} isInView={isInView} />
        ))}
      </div>
    </section>
  )
}

function ProjectCard({ project, index, isInView }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      data-cursor="View"
      style={{
        background: project.color,
        border: '2px solid var(--ink)',
        borderRadius: '1.5rem',
        overflow: 'hidden',
        cursor: 'none',
        position: 'relative',
      }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
    >
      {/* Image */}
      <div
        style={{
          height: '260px',
          overflow: 'hidden',
          position: 'relative',
          borderBottom: '2px solid var(--ink)',
        }}
      >
        <motion.img
          src={`/${project.image?.split('/').pop()}`}
          alt={project.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          onError={(e) => {
            e.target.style.display = 'none'
            e.target.parentNode.style.background = project.color
          }}
        />
        {/* Year badge */}
        <span
          className="font-mono-accent"
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            fontSize: '10px',
            background: 'var(--ink)',
            color: 'var(--cream)',
            padding: '4px 10px',
            borderRadius: '999px',
          }}
        >
          {project.year}
        </span>
      </div>

      {/* Content */}
      <div style={{ padding: '1.5rem 2rem 2rem' }}>
        <div
          className="font-mono-accent"
          style={{ fontSize: '10px', opacity: 0.55, marginBottom: '0.5rem' }}
        >
          {project.category}
        </div>
        <h3
          className="font-display"
          style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '0.6rem', lineHeight: 1 }}
        >
          {project.title}
        </h3>
        <p style={{ fontSize: '14px', lineHeight: 1.7, opacity: 0.65, marginBottom: '1.2rem' }}>
          {project.desc}
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: '11px',
                fontFamily: "'Space Mono', monospace",
                padding: '4px 10px',
                border: `1.5px solid ${project.accent}`,
                borderRadius: '999px',
                color: project.accent,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}
