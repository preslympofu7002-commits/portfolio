import Reveal from "./Reveal";
export default function Beyond() {
  return (
    <section id="beyond" className="section beyond-section">
      <div className="container">
        <Reveal className="beyond-layout">
          <div>
            <span className="eyebrow">Beyond the screen</span>
            <h2>
              Good technology.
              <br />
              <em>Better together.</em>
            </h2>
            <p>
              Some of the most useful lessons I’ve learned haven’t come from
              code.
            </p>
          </div>
          <div className="human-notes">
            <article>
              <span className="human-symbol" aria-hidden="true">
                ◎
              </span>
              <div>
                <h3>On the court</h3>
                <p>
                  As a volleyball team captain, I learned to listen, trust a
                  team and keep going when the next point matters.
                </p>
              </div>
            </article>
            <article>
              <span className="human-symbol" aria-hidden="true">
                ✳
              </span>
              <div>
                <h3>In the community</h3>
                <p>
                  Computer tutoring and volunteering as a teaching assistant
                  taught me that knowledge becomes more valuable when it’s
                  shared.
                </p>
              </div>
            </article>
            <article>
              <span className="human-symbol" aria-hidden="true">
                ⌘
              </span>
              <div>
                <h3>Looking ahead</h3>
                <p>
                  I want to turn my education and curiosity into practical
                  technology that opens up opportunity, especially in African
                  communities.
                </p>
              </div>
            </article>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
