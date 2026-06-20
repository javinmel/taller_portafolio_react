import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <h1 className="hero-title">Hola, soy <span className="hero-accent">Javier Pineda</span></h1>
      <p className="hero-role">Desarrollador Web & Analista de Datos</p>
      <p className="hero-description">
        Construyo soluciones web y herramientas de automatización que resuelven problemas reales.
      </p>
      <a href="#proyectos" className="hero-button">Ver proyectos</a>
    </section>
  )
}

export default Hero