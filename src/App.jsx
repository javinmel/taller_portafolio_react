import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import SkillList from './components/SkillList'
import ProjectsSection from './components/ProjectsSection'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import { getProjects } from './services/projects.service'

function App() {
  const [projects, setProjects] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getProjects()
      .then(datos => {
        setProjects(datos)
        setCargando(false)
      })
      .catch(err => {
        setError(err.message)
        setCargando(false)
      })
  }, [])

  return (
    <div>
      <Header />
      <Hero />
      <AboutSection />
      <SkillList />

      {cargando && <p style={{ textAlign: 'center', color: '#fff', padding: '2rem' }}>Cargando proyectos...</p>}
      {error && <p style={{ textAlign: 'center', color: '#f87171', padding: '2rem' }}>Error: {error}</p>}
      {!cargando && !error && <ProjectsSection projects={projects} />}

      <ContactForm />
      <Footer />
    </div>
  )
}

export default App