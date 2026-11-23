import { languagesSpoken, timeline } from "../data/experience";
import Reveal from "./Reveal";
export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <Reveal className="about-layout">
          <div>
            <span className="eyebrow">A little context</span>
            <h2>
              Rooted in
              <br />
              Zimbabwe.
              <br />
              <em>Reaching further.</em>
            </h2>
            <div className="origin-mark" aria-hidden="true">
              <span>ZW</span>
              <span className="origin-line" />
              <span>IN</span>
            </div>
          </div>
          <div className="about-copy">
            <p className="lead">
              I’m interested in what happens when a strong technical foundation
              meets a problem worth solving.
            </p>
            <p>
              My journey began with mathematics and science at Lower Gwelo
              Adventist High School in Zimbabwe. Today, I study Computer Science
              and Engineering with a specialisation in AI and Machine Learning
              at KPR Institute of Engineering and Technology in Tamil Nadu,
              India.
            </p>
            <p>
              Alongside university, I’m building{" "}
              <strong>Afrim Technologies</strong>: a venture exploring digital
              commerce, applied AI and inclusive payments for African markets.
              It’s where theory becomes a product, and where each new question
              becomes a reason to learn.
            </p>
            <p>
              Neural networks, intelligent systems, emerging technologies — I
              follow my curiosity, then put it to work. My approach is grounded
              in persistence, practical experimentation and care for the people
              using what I build.
            </p>
            <div className="language-list">
              <span className="eyebrow">Ways we can connect</span>
              {languagesSpoken.map((item) => (
                <span key={item.language}>
                  {item.language}
                  <small>{item.proficiency}</small>
                </span>
              ))}
            </div>
          </div>
        </Reveal>
        <details className="journey-notes">
          <summary>
            Trace the journey{" "}
            <span className="expand-mark" aria-hidden="true">
              +
            </span>
          </summary>
          <div className="timeline-notes">
            {timeline.map((item, i) => (
              <div key={i}>
                <span className="mono">{item.year}</span>
                <p>{item.event}</p>
              </div>
            ))}
          </div>
        </details>
      </div>
    </section>
  );
}
