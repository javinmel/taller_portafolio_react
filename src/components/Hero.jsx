import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-frame"></div>
      <div className="hero-dot hero-dot-1"></div>
      <div className="hero-dot hero-dot-2"></div>
      <div className="hero-dot hero-dot-3"></div>
      <div className="hero-dot hero-dot-4"></div>
      <h1 className="hero-title">Hola, soy <span className="hero-accent">Javier Pineda</span></h1>
      <p className="hero-role">Desarrollador Web & Analista de Datos</p>
      <p className="hero-description">
        Construyo soluciones web y herramientas de automatización que resuelven problemas reales:
        desde dashboards que convierten datos en decisiones, hasta sistemas que eliminan trabajo
        repetitivo. Actualmente en INMEL automatizando procesos operativos para servicios públicos,
        y construyendo este portafolio para dar el salto a desarrollo web.
      </p>
      <a href="#proyectos" className="hero-button">Ver proyectos</a>
    </section>
  )
}

export default Hero