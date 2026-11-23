import { useState } from "react";
import { skillCategories } from "../data/skills";
import Reveal from "./Reveal";
export default function Skills() {
  const [selected, setSelected] = useState(skillCategories[0].id);
  const active = skillCategories.find((category) => category.id === selected)!;
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <Reveal className="section-heading">
          <div>
            <span className="eyebrow">The working toolkit</span>
            <h2>
              Knowledge into
              <br />
              <em>capability.</em>
            </h2>
          </div>
          <p>
            Built through coursework, self-directed study and hands-on
            development. A toolkit that keeps growing.
          </p>
        </Reveal>
        <div className="skills-layout">
          <div className="skill-categories" aria-label="Skill categories">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                aria-pressed={selected === category.id}
                onClick={() => setSelected(category.id)}
              >
                {category.label}
                <span aria-hidden="true">
                  {category.id === selected ? "−" : "+"}
                </span>
              </button>
            ))}
          </div>
          <div className="skill-panel" aria-live="polite">
            <h3>{active.label}</h3>
            {active.skills.map((skill) => (
              <div className="skill-row" key={skill.name}>
                <div>
                  <h4>{skill.name}</h4>
                  <p>{skill.description}</p>
                </div>
                <span className={`skill-level ${skill.level}`}>
                  {skill.level}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
