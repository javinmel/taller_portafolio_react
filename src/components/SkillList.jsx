import { skills } from '../data/skills'
import './SkillList.css'
import '../hooks/scrollReveal.css'
import { useScrollReveal } from '../hooks/useScrollReveal'

const coloresPorTipo = {
  Frontend: '#7c6af7',
  Backend: '#4ade80',
  Herramienta: '#fbbf24',
  Blanda: '#60a5fa'
}

function SkillList() {
  const [ref, visible] = useScrollReveal()

  return (
    <section
      id="habilidades"
      ref={ref}
      className={`skills reveal ${visible ? 'reveal-visible' : ''}`}
    >
      <h2 className="skills-title">Habilidades</h2>
      <div className="skills-grid">
        {skills.map(skill => (
          <div
            key={skill.id}
            className="skills-card"
            style={{ borderTop: `3px solid ${coloresPorTipo[skill.type] || '#7c6af7'}` }}
          >
            <span className="skills-name">{skill.name}</span>
            <span
              className="skills-type"
              style={{ color: coloresPorTipo[skill.type] || '#7c6af7' }}
            >
              {skill.type}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SkillList