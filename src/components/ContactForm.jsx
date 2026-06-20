import { useState } from 'react'
import './ContactForm.css'
import '../hooks/scrollReveal.css'
import { useScrollReveal } from '../hooks/useScrollReveal'

function ContactForm() {
  const [form, setForm] = useState({
    nombre: '',
    correo: '',
    asunto: '',
    mensaje: ''
  })

  const [errores, setErrores] = useState({})
  const [enviado, setEnviado] = useState(false)
  const [ref, visible] = useScrollReveal()

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
    setErrores({ ...errores, [e.target.name]: '' })
  }

  function validar() {
    const nuevosErrores = {}
    if (!form.nombre.trim()) nuevosErrores.nombre = 'El nombre es obligatorio'
    if (!form.correo.trim()) {
      nuevosErrores.correo = 'El correo es obligatorio'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.correo)) {
      nuevosErrores.correo = 'El correo no tiene un formato válido'
    }
    if (!form.asunto.trim()) nuevosErrores.asunto = 'El asunto es obligatorio'
    if (!form.mensaje.trim()) nuevosErrores.mensaje = 'El mensaje es obligatorio'
    return nuevosErrores
  }

  function handleSubmit(e) {
    e.preventDefault()
    const erroresEncontrados = validar()
    if (Object.keys(erroresEncontrados).length > 0) {
      setErrores(erroresEncontrados)
      return
    }
    setEnviado(true)
    setForm({ nombre: '', correo: '', asunto: '', mensaje: '' })
    setErrores({})
  }

  return (
    <section
      id="contacto"
      ref={ref}
      className={`contact reveal ${visible ? 'reveal-visible' : ''}`}
    >
      <h2 className="contact-title">Contacto</h2>
      <p className="contact-subtitle">¿Prefieres un contacto directo? Aquí me encuentras:</p>

      <div className="contact-links">
        <a href="mailto:javierinmel2025@gmail.com" className="contact-link">
          Correo
        </a>
        <a href="https://github.com/javinmel" target="_blank" rel="noopener noreferrer" className="contact-link">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/luis-javier-pineda-lezcano" target="_blank" rel="noopener noreferrer" className="contact-link">
          LinkedIn
        </a>
      </div>

      {enviado && (
        <div className="contact-success">
          Mensaje enviado correctamente.
        </div>
      )}

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-field">
          <input
            className="contact-input"
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={form.nombre}
            onChange={handleChange}
          />
          {errores.nombre && <p className="contact-error">{errores.nombre}</p>}
        </div>

        <div className="contact-field">
          <input
            className="contact-input"
            type="email"
            name="correo"
            placeholder="Correo electrónico"
            value={form.correo}
            onChange={handleChange}
          />
          {errores.correo && <p className="contact-error">{errores.correo}</p>}
        </div>

        <div className="contact-field">
          <input
            className="contact-input"
            type="text"
            name="asunto"
            placeholder="Asunto"
            value={form.asunto}
            onChange={handleChange}
          />
          {errores.asunto && <p className="contact-error">{errores.asunto}</p>}
        </div>

        <div className="contact-field">
          <textarea
            className="contact-input contact-textarea"
            name="mensaje"
            placeholder="Mensaje"
            value={form.mensaje}
            onChange={handleChange}
          />
          {errores.mensaje && <p className="contact-error">{errores.mensaje}</p>}
        </div>

        <button type="submit" className="contact-button">
          Enviar mensaje
        </button>
      </form>
    </section>
  )
}

export default ContactForm