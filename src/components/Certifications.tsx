import { useEffect, useRef, useState } from "react";
import { certificates, achievements } from "../data/certifications";
import type { Certificate } from "../data/certifications";
import Reveal from "./Reveal";
function CertificateViewer({
  cert,
  onClose,
  returnFocus,
}: {
  cert: Certificate;
  onClose: () => void;
  returnFocus: HTMLButtonElement | null;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const overflow = document.body.style.overflow;
    dialog.current?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
      dialog.current?.close();
      returnFocus?.focus();
    };
  }, []);
  return (
    <dialog
      className="certificate-dialog"
      ref={dialog}
      aria-labelledby="certificate-title"
      onCancel={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="certificate-dialog-header">
        <div>
          <h3 id="certificate-title">{cert.title}</h3>
          <p>
            {cert.issuer} · {cert.date}
          </p>
        </div>
        <button
          className="close-button"
          onClick={onClose}
          aria-label="Close certificate viewer"
        >
          ×
        </button>
      </div>
      <div className="certificate-actions">
        {cert.file && (
          <>
            <a href={`/${cert.file}`} target="_blank" rel="noreferrer">
              Open PDF in new tab
            </a>
            <a href={`/${cert.file}`} download>
              Download certificate
            </a>
          </>
        )}
        <span>
          {cert.code
            ? `Credential ${cert.code}`
            : "Course completion certificate"}
        </span>
      </div>
      {cert.file && (
        <iframe src={`/${cert.file}`} title={`${cert.title} certificate`} />
      )}
    </dialog>
  );
}
export default function Certifications() {
  const [filter, setFilter] = useState("All");
  const [viewer, setViewer] = useState<Certificate | null>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const filtered =
    filter === "All"
      ? certificates
      : certificates.filter((cert) => cert.category === filter);
  return (
    <section id="certifications" className="section credentials-section">
      <div className="container">
        <Reveal className="section-heading">
          <div>
            <span className="eyebrow">Evidence of the effort</span>
            <h2>
              Curiosity,
              <br />
              <em>with credentials.</em>
            </h2>
          </div>
          <p>
            Continuous learning, backed by completed courses. Explore the
            original documents behind each credential.
          </p>
        </Reveal>
        <div className="credential-filters" aria-label="Filter certificates">
          {["All", "AI", "ML", "Cloud", "General"].map((category) => (
            <button
              key={category}
              aria-pressed={filter === category}
              onClick={() => setFilter(category)}
            >
              {category === "All"
                ? `All credentials (${certificates.length})`
                : category}
            </button>
          ))}
        </div>
        <div className="certificate-list" aria-live="polite">
          {filtered.map((cert) => (
            <button
              className="certificate-row"
              key={cert.id}
              onClick={(event) => {
                trigger.current = event.currentTarget;
                setViewer(cert);
              }}
              aria-label={`View certificate: ${cert.title}`}
            >
              <span className="certificate-category">{cert.category}</span>
              <span className="certificate-name">
                <strong>{cert.title}</strong>
                <span>{cert.issuer}</span>
              </span>
              <span className="certificate-date">{cert.date}</span>
              <span className="certificate-view">
                View PDF <span aria-hidden="true">+</span>
              </span>
            </button>
          ))}
        </div>
        <div className="recognition">
          <div>
            <span className="eyebrow">Academic &amp; personal milestones</span>
            <h3>
              A foundation
              <br />
              to build on.
            </h3>
            <p>
              Recognition from my years at Lower Gwelo Adventist High School and
              beyond.
            </p>
          </div>
          <div className="achievement-list">
            {achievements.map((item) => (
              <details key={item.id}>
                <summary>
                  <span className="mono">{item.year}</span>
                  <span>{item.title}</span>
                  <span className="expand-mark" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p>{item.description}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
      {viewer && (
        <CertificateViewer
          cert={viewer}
          returnFocus={trigger.current}
          onClose={() => setViewer(null)}
        />
      )}
    </section>
  );
}
