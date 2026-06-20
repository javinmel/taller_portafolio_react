import "./ProjectCard.css";

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-top">
        <span className="project-category">{project.category}</span>
        <span className="project-level">{project.level}</span>
      </div>
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>
      <div className="project-techs">
        {project.technologies.map((tech) => (
          <span key={tech} className="project-tech">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
