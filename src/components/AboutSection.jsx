import './AboutSection.css'
import '../hooks/scrollReveal.css'
import { useScrollReveal } from '../hooks/useScrollReveal'

function AboutSection() {
  const [ref, visible] = useScrollReveal()

  return (
    <section
      id="sobre-mi"
      ref={ref}
      className={`about reveal ${visible ? 'reveal-visible' : ''}`}
    >
      <h2 className="about-title">Sobre mí</h2>
      <div className="about-content">
        <div className="about-avatar">JP</div>
        <div className="about-text">
          <p className="about-paragraph">
            Soy estudiante de desarrollo de software con experiencia en automatización de procesos operativos
            y desarrollo de herramientas de análisis de datos. Trabajo en el sector de servicios
            públicos donde construyo soluciones que mejoran la eficiencia en lectura de medidores
            y facturación.
          </p>
          <p className="about-paragraph">
            Me apasiona convertir datos complejos en decisiones claras y construir software
            que resuelva problemas reales del día a día.
          </p>
          <div className="about-tags">
            <span className="about-tag">Medellín, Colombia</span>
            <span className="about-tag">Operaciones & Data</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection