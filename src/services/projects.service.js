export async function getProjects() {
    const respuesta = await fetch('/data/projects.json')
  
    const tipoContenido = respuesta.headers.get('content-type') || ''
  
    if (!respuesta.ok || !tipoContenido.includes('application/json')) {
      throw new Error('No se pudieron cargar los proyectos')
    }
  
    const datos = await respuesta.json()
    return datos
  }