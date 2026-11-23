import { useState } from "react";
import { labCategories } from "../data/ailab";
import Reveal from "./Reveal";
const statuses = {
  completed: "Completed",
  "in-progress": "In progress",
  planned: "Planned",
};
export default function AILab() {
  const [selected, setSelected] = useState(labCategories[0].id);
  const active = labCategories.find((category) => category.id === selected)!;
  return (
    <section id="ailab" className="section lab-section">
      <div className="container">
        <Reveal className="section-heading">
          <div>
            <span className="eyebrow">The learning lab</span>
            <h2>
              Stay curious.
              <br />
              <em>Keep connecting.</em>
            </h2>
          </div>
          <p>
            A living record of the ideas I’m studying, the foundations I’m
            building and the experiments I want to try next.
          </p>
        </Reveal>
        <div className="lab-layout">
          <div className="lab-index" aria-label="Learning domains">
            {labCategories.map((category) => (
              <button
                key={category.id}
                aria-pressed={category.id === selected}
                onClick={() => setSelected(category.id)}
              >
                {category.title}
                <span aria-hidden="true">
                  {category.id === selected ? "−" : "+"}
                </span>
              </button>
            ))}
            <p className="lab-note">
              Learning notes and research directions. Planned experiments are
              still to come.
            </p>
          </div>
          <div className="lab-content" aria-live="polite">
            <h3>{active.title}</h3>
            <p>{active.description}</p>
            <div className="lab-entries">
              {active.items.map((item) => (
                <article className="lab-entry" key={item.id}>
                  <div className="project-meta">
                    <span>{item.type}</span>
                    <span className={`lab-status ${item.status}`}>
                      {statuses[item.status]}
                    </span>
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                  <div className="tags">
                    {item.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  {item.link && (
                    <a
                      className="text-link"
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View learning resource
                    </a>
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
