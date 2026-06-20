import './Header.css'

function Header() {
  return (
    <header className="header">
      <span className="header-logo">Javier Pineda</span>
      <nav className="header-nav">
        <a href="#sobre-mi" className="header-link">Sobre mí</a>
        <a href="#habilidades" className="header-link">Habilidades</a>
        <a href="#proyectos" className="header-link">Proyectos</a>
        <a href="#contacto" className="header-cta">Contáctame</a>
      </nav>
    </header>
  )
}

export default Header