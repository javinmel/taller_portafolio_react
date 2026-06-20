import './AboutSection.css'
import '../hooks/scrollReveal.css'
import { useScrollReveal } from '../hooks/useScrollReveal'
import fotoJavi from '../assets/foto_javi.png'

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
        <img src={fotoJavi} alt="Javier Pineda" className="about-photo" />
        <div className="about-text">
          <p className="about-paragraph">
            Soy estudiante de desarrollo de software con experiencia profesional en automatización de procesos
            operativos para el sector de servicios públicos. En mi rol actual, diseño y mantengo
            herramientas en Python que optimizan la asignación de lectores de medidores a rutas
            de facturación, la generación de reportes de desempeño, y el cruce de datos entre
            múltiples archivos de programación y facturación.
          </p>
          <p className="about-paragraph">
            He construido más de 8 herramientas de automatización en producción, varias con
            interfaces gráficas (tkinter), integración con Excel vía macros y COM, y análisis
            geoespacial para validación de rutas. Fuera del entorno laboral, desarrollo proyectos
            personales como aplicaciones móviles con React Native y dashboards de análisis de
            datos con Python y PostgreSQL.
          </p>
          <div className="about-tags">
            <span className="about-tag">herramientas Python en producción</span>
            <span className="about-tag">Automatización de datos operativos</span>
            <span className="about-tag">Medellín, Colombia</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection