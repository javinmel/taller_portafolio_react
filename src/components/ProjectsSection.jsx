import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectFilters from "./ProjectFilters";
import "./ProjectsSection.css";

function ProjectsSection({ projects }) {
  const [categoriaActiva, setCategoriaActiva] = useState("Todas");

  const categorias = [...new Set(projects.map((p) => p.category))];

  const proyectosFiltrados =
    categoriaActiva === "Todas"
      ? projects
      : projects.filter((p) => p.category === categoriaActiva);

  return (
    <section id="proyectos" className="projects">
      <h2 className="projects-title">Proyectos</h2>

      {projects.length > 0 && (
        <ProjectFilters
          categorias={categorias}
          categoriaActiva={categoriaActiva}
          onFiltrar={setCategoriaActiva}
        />
      )}

      <div className="projects-grid">
        {proyectosFiltrados.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
