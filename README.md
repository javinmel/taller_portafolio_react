Portafolio Profesional — Javier Pineda

Demo

https://taller-portafolio-react.vercel.app

Aplicación web construida con React + Vite que presenta mi perfil profesional, habilidades, proyectos y un formulario de contacto. Desarrollada como taller integrador del curso de Programación Web con React.

Tecnologías utilizadas

React 19
Vite
JavaScript (ES6+)
CSS3 (Flexbox + Media Queries)
Fetch API

Instalación y ejecución

Clona el repositorio y entra a la carpeta del proyecto:

bashgit clone https://github.com/javinmel/taller_portafolio_react.git
cd portfolio-react

Instala las dependencias:

bashnpm install

Ejecuta el proyecto en modo desarrollo:

bashnpm run dev

Abre la URL que indique la terminal (por defecto http://localhost:5173).

Estructura del proyecto

portfolio-react/
├── public/
│ └── data/
│ └── projects.json # Datos de proyectos consumidos vía fetch
├── src/
│ ├── components/
│ │ ├── Header.jsx / .css
│ │ ├── Hero.jsx / .css
│ │ ├── AboutSection.jsx / .css
│ │ ├── SkillList.jsx / .css
│ │ ├── ProjectsSection.jsx / .css
│ │ ├── ProjectCard.jsx / .css
│ │ ├── ProjectFilters.jsx / .css
│ │ ├── ContactForm.jsx / .css
│ │ └── Footer.jsx / .css
│ ├── data/
│ │ └── skills.js # Datos de habilidades (arreglo estático)
│ ├── services/
│ │ └── projects.service.js # Lógica de fetch separada de los componentes
│ ├── App.jsx
│ ├── index.css
│ └── main.jsx
├── package.json
└── README.md

Funcionalidades

Header con navegación interna a cada sección del portafolio.
Hero con presentación, rol profesional y llamada a la acción.
Sobre mí con perfil, intereses y datos de contexto.
Habilidades renderizadas dinámicamente desde un arreglo de datos (skills.js), sin escribir cada habilidad manualmente en JSX.
Proyectos renderizados con un componente reutilizable ProjectCard, recibiendo datos por props.
Filtro de proyectos por categoría usando useState, sin mutar el arreglo original.
Formulario de contacto controlado (nombre, correo, asunto, mensaje) con:

Validación de campos obligatorios.
Validación de formato básico de correo.
Mensajes de error por campo.
Mensaje de éxito y limpieza del formulario tras el envío.

Consumo de datos remoto/simulado: los proyectos se cargan con fetch + useEffect desde public/data/projects.json, a través de un servicio separado en services/projects.service.js.
Estados de petición: loading, error y contenido cargado, todos visibles para el usuario.
Diseño responsive: cada componente tiene su propio archivo CSS con media queries, adaptado a móvil y escritorio.

Decisiones técnicas

Los datos de habilidades y proyectos están separados del JSX (data/ y public/data/) para evitar contenido "quemado" manualmente y permitir renderizado dinámico con map().
Cada lista usa el id del dato como key, no el índice del arreglo.
La lógica de fetch vive en services/, separada de los componentes visuales, para mantener responsabilidades claras.
El servicio valida tanto el código de respuesta como el content-type de la petición, para detectar errores reales (no solo respuestas HTTP fallidas, sino también respuestas que no son JSON válido).
Los estilos usan clases CSS con media queries en lugar de estilos en línea fijos, lo que permite que el diseño se adapte correctamente a distintos tamaños de pantalla.
