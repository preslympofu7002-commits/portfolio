import { afrimProjects, softwareProjects } from "../data/projects";
import type { Project } from "../data/projects";
import Reveal from "./Reveal";
function ProjectDetails({ project }: { project: Project }) {
  return (
    <details className="project-details">
      <summary>
        Explore the project{" "}
        <span className="expand-mark" aria-hidden="true">
          +
        </span>
      </summary>
      <div className="project-detail-body">
        <div>
          <span className="eyebrow">The challenge</span>
          <p>{project.problem}</p>
        </div>
        <div>
          <span className="eyebrow">My focus</span>
          <p>
            {project.id === "afrim-marketplace"
              ? "Founder and developer — shaping the product and building the marketplace with React, TypeScript and Supabase."
              : "Early product research and concept exploration. The areas below describe the direction of the initiative."}
          </p>
          <ul>
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className="tags">
          {project.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        {project.liveUrl && (
          <div className="project-links">
            <a
              className="text-link"
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
            >
              Visit {new URL(project.liveUrl).hostname}
            </a>
            {project.githubUrl && (
              <a
                className="text-link"
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                GitHub profile
              </a>
            )}
          </div>
        )}
      </div>
    </details>
  );
}
export default function AfrimTechnologies() {
  const marketplace = afrimProjects[0];
  return (
    <section id="projects" className="section work-section">
      <div className="container">
        <Reveal className="section-heading">
          <div>
            <span className="eyebrow">Selected work &amp; ventures</span>
            <h2>
              Ideas, taking
              <br />
              <em>shape.</em>
            </h2>
          </div>
          <p>
            A growing body of work at the intersection of useful technology and
            real-world opportunity.
          </p>
        </Reveal>
        <Reveal>
          <article className="featured-project">
            <div
              className="project-visual marketplace-visual"
              role="img"
              aria-label="Afrim concept diagram connecting commerce, intelligence and payments"
            >
              <div className="visual-label">
                <span>AFRIM TECHNOLOGIES</span>
                <span>ECOSYSTEM CONCEPT</span>
              </div>
              <div className="afrim-wordmark">
                afrim<span>·</span>
              </div>
              <p className="afrim-tagline">Built for the way Africa moves.</p>
              <div className="ecosystem-map">
                <span>Commerce</span>
                <span>Intelligence</span>
                <span>Payments</span>
              </div>
              <div className="visual-caption">
                Local ambition. Connected possibilities.
              </div>
            </div>
            <div className="featured-content">
              <div className="project-meta">
                <span>Web platform / Digital commerce</span>
                <span className="status-label">In development</span>
              </div>
              <h3>{marketplace.title}</h3>
              <p className="project-intro">
                Bringing regional commerce
                <br />
                into a connected future.
              </p>
              <p>{marketplace.description}</p>
              <a
                className="text-link featured-visit"
                href={marketplace.liveUrl}
                target="_blank"
                rel="noreferrer"
              >
                Visit afrim.co.zw
              </a>
              <ProjectDetails project={marketplace} />
            </div>
          </article>
        </Reveal>
        <div className="project-pair">
          {afrimProjects.slice(1).map((project) => (
            <Reveal key={project.id}>
              <article className={`concept-project ${project.id}`}>
                <div
                  className="concept-visual"
                  role="img"
                  aria-label={`${project.title} research concept graphic`}
                >
                  <span className="mono">
                    {project.id === "afrim-ai"
                      ? "Intelligence, in context."
                      : "Opportunity, in circulation."}
                  </span>
                  {project.id === "afrim-ai" ? (
                    <div className="ai-glyph" aria-hidden="true">
                      {Array.from({ length: 13 }, (_, i) => (
                        <span
                          key={i}
                          style={{
                            height: `${20 + Math.sin((i / 12) * Math.PI) * 80}%`,
                          }}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="pay-glyph" aria-hidden="true">
                      <span />
                      <span />
                      <span />
                    </div>
                  )}
                  <span className="concept-wordmark">
                    {project.title.replace("Afrim ", "afrim / ")}
                  </span>
                </div>
                <div className="project-meta">
                  <span>
                    {project.id === "afrim-ai"
                      ? "Applied AI"
                      : "Inclusive fintech"}
                  </span>
                  <span>Exploration / R&amp;D</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ProjectDetails project={project} />
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <article className="khetvani-project">
            <div
              className="khetvani-art"
              role="img"
              aria-label="Khetvani concept graphic of a seedling and cultivated field"
            >
              <svg viewBox="0 0 340 190" aria-hidden="true">
                <g fill="none" stroke="currentColor" strokeWidth="1.3">
                  {Array.from({ length: 12 }, (_, i) => (
                    <path
                      key={i}
                      d={`M${-100 + i * 40} 190Q170 -90 ${440 - i * 20} 190`}
                    />
                  ))}
                </g>
                <path
                  d="M170 135V50C125 30 127 80 170 85M170 70C220 15 245 80 170 100"
                  fill="var(--sage)"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
              <span>khetvani</span>
            </div>
            <div>
              <div className="project-meta">
                <span>Agricultural technology</span>
                <span>Early concept</span>
              </div>
              <h3>Khetvani</h3>
              <p className="project-intro">
                Better tools.
                <br />
                Stronger roots.
              </p>
              <p>{softwareProjects[0].description}</p>
              <ProjectDetails project={softwareProjects[0]} />
            </div>
          </article>
        </Reveal>
        <details className="ecosystem-note">
          <summary>
            The bigger picture: Afrim Technologies{" "}
            <span className="expand-mark" aria-hidden="true">
              +
            </span>
          </summary>
          <div className="ecosystem-note-body">
            <div>
              <p>
                Afrim Technologies brings these initiatives together around one
                ambition: an interconnected ecosystem of digital commerce,
                applied intelligence and inclusive payments.
              </p>
              <p>
                Marketplace development is the practical starting point. Afrim
                AI and Afrim Pay remain research and exploration initiatives.
              </p>
            </div>
            <figure>
              <img
                src="/afrim-ecosystem.jpg"
                alt="Original Afrim ecosystem concept connecting e-commerce, payments and finance"
                width="756"
                height="756"
                loading="lazy"
              />
              <figcaption>Original ecosystem concept illustration</figcaption>
            </figure>
          </div>
        </details>
      </div>
    </section>
  );
}
