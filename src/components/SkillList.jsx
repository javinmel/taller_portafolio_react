import { skills } from "../data/skills";
import "./SkillList.css";

function SkillList() {
  return (
    <section id="habilidades" className="skills">
      <h2 className="skills-title">Habilidades</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.id} className="skills-card">
            <span className="skills-name">{skill.name}</span>
            <span className="skills-type">{skill.type}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillList;
