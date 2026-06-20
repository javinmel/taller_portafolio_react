import { skills } from '../data/skills'
import './SkillList.css'
import '../hooks/scrollReveal.css'
import { useScrollReveal } from '../hooks/useScrollReveal'

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
          <div key={skill.id} className="skills-card">
            <span className="skills-name">{skill.name}</span>
            <span className="skills-type">{skill.type}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SkillList