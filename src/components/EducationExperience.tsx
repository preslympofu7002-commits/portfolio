import { educationHistory, experiences } from "../data/experience";
import Reveal from "./Reveal";
export default function EducationExperience() {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        <Reveal className="section-heading">
          <div>
            <span className="eyebrow">The path so far</span>
            <h2>
              Learning, leading,
              <br />
              <em>showing up.</em>
            </h2>
          </div>
          <p>
            The classroom built the foundations. Teaching, teamwork and
            community put them into perspective.
          </p>
        </Reveal>
        <div className="education-layout">
          <div>
            <h3 className="column-title">Education</h3>
            {educationHistory.map((item) => (
              <article
                className={`education-entry ${item.status}`}
                key={item.id}
              >
                <span className="eyebrow">{item.period}</span>
                <h4>{item.degree}</h4>
                <p className="institution">{item.institution}</p>
                <p className="mono location">{item.location}</p>
                <ul>
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
                {item.highlights && (
                  <details>
                    <summary>
                      Academic distinctions{" "}
                      <span className="expand-mark" aria-hidden="true">
                        +
                      </span>
                    </summary>
                    <ul>
                      {item.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </details>
                )}
              </article>
            ))}
          </div>
          <div>
            <h3 className="column-title">Experience &amp; contribution</h3>
            {experiences.map((item) => (
              <details className="experience-entry" key={item.id}>
                <summary>
                  <span>
                    <span className="eyebrow">
                      {item.period} / {item.type}
                    </span>
                    <strong>{item.role}</strong>
                    <span className="experience-org">{item.organization}</span>
                  </span>
                  <span className="expand-mark" aria-hidden="true">
                    +
                  </span>
                </summary>
                <div>
                  <p>{item.description}</p>
                  <div className="tags">
                    {item.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
