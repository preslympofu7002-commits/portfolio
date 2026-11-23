import { useState } from "react";
function curve(index: number, perspective: number) {
  const u = (index / 64) * Math.PI * 2;
  const points = Array.from({ length: 100 }, (_, j) => {
    const v = (j / 99) * Math.PI * 2;
    const x = (132 + 57 * Math.cos(v)) * Math.cos(u);
    const y = (132 + 57 * Math.cos(v)) * Math.sin(u);
    const z = 57 * Math.sin(v);
    const tilt = perspective ? 0.8 : 0.48;
    const yy = y * tilt + z * 0.88;
    const angle = -0.46;
    return `${j ? "L" : "M"}${(230 + x * Math.cos(angle) - yy * Math.sin(angle)).toFixed(2)},${(235 + x * Math.sin(angle) + yy * Math.cos(angle)).toFixed(2)}`;
  });
  return points.join(" ") + "Z";
}
export default function Hero() {
  const [perspective, setPerspective] = useState(0);
  return (
    <section id="home" className="hero container" aria-labelledby="hero-title">
      <div className="hero-kicker">
        <span>Computer science. Human curiosity.</span>
        <span className="hero-location">Zimbabwe / India</span>
      </div>
      <div className="hero-grid">
        <div className="hero-identity">
          <p className="eyebrow">Student · Developer · Founder</p>
          <h1 id="hero-title">
            PRESLY
            <br />
            MPOFU<span className="name-dot">.</span>
          </h1>
          <p className="hero-statement">
            A curious mind.
            <br />
            <em>A purposeful builder.</em>
          </p>
        </div>
        <figure className="signature-art">
          <div className="art-topline">
            <span>THE SHAPE OF CURIOSITY</span>
            <span aria-hidden="true">[ PM ]</span>
          </div>
          <svg
            viewBox="0 0 460 460"
            role="img"
            aria-label="An original cobalt torus drawn from intersecting mathematical curves, with a vermilion sun"
          >
            <path
              d="M0 235H460M230 0V460"
              stroke="currentColor"
              strokeWidth=".5"
              opacity=".18"
            />
            <circle
              cx="230"
              cy="235"
              r="200"
              stroke="currentColor"
              strokeWidth=".5"
              fill="none"
              opacity=".18"
              strokeDasharray="3 6"
            />
            <circle
              className="art-sun"
              cx="368"
              cy="345"
              r="52"
              fill="var(--coral)"
            />
            <g fill="none" stroke="var(--cobalt)" strokeWidth="1.15">
              {Array.from({ length: 64 }, (_, i) => (
                <path key={i} d={curve(i, perspective)} />
              ))}
            </g>
            <path
              d="M18 26h16m-8-8v16M426 426h16m-8-8v16"
              stroke="currentColor"
              strokeWidth="1"
            />
          </svg>
          <figcaption>
            <span>Logic, with a little imagination.</span>
            <button
              onClick={() => setPerspective((p) => 1 - p)}
              aria-label="Change artwork perspective"
            >
              Shift perspective <span aria-hidden="true">↻</span>
            </button>
          </figcaption>
        </figure>
      </div>
      <div className="hero-bottom">
        <p>
          I’m a Computer Science &amp; Engineering student specialising in{" "}
          <strong>Artificial Intelligence &amp; Machine Learning</strong> at
          KPRIET. Turning what I learn into things that matter.
        </p>
        <div className="hero-actions">
          <a className="button button-dark" href="#projects">
            Explore my work
          </a>
          <a
            className="text-link"
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            View résumé
          </a>
        </div>
      </div>
      <div className="hero-footnote">
        <span>Currently building Afrim Technologies</span>
        <span>Always a student of what’s next.</span>
      </div>
    </section>
  );
}
