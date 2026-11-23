import { useState } from "react";
import type { FormEvent } from "react";
export default function Contact() {
  const [prepared, setPrepared] = useState(false);
  const [copied, setCopied] = useState("");
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText("preslympofu7002@gmail.com");
      setCopied("Email copied");
    } catch {
      setCopied("Copy: preslympofu7002@gmail.com");
    }
  }
  function prepareEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = `From: ${data.get("name")} (${data.get("email")})\n\n${data.get("message")}`;
    window.location.href = `mailto:preslympofu7002@gmail.com?cc=preslympofu@outlook.com&subject=${encodeURIComponent(`[Portfolio Inquiry] ${data.get("subject")}`)}&body=${encodeURIComponent(body)}`;
    setPrepared(true);
  }
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="contact-heading">
          <span className="eyebrow">New ideas start with a conversation</span>
          <h2>
            Let’s make
            <br />
            <em>something matter.</em>
            <span className="contact-star" aria-hidden="true">
              ✳
            </span>
          </h2>
        </div>
        <div className="contact-layout">
          <div>
            <p className="contact-intro">
              Have a project, a research question or a possibility in mind? I’m
              open to collaborations and opportunities worldwide.
            </p>
            <a
              className="contact-email"
              href="mailto:preslympofu7002@gmail.com"
            >
              preslympofu7002@gmail.com
            </a>
            <button className="copy-email" onClick={copyEmail}>
              Copy email
            </button>
            <span className="copy-feedback" role="status">
              {copied}
            </span>
            <div className="contact-links">
              <a href="mailto:preslympofu@outlook.com">
                preslympofu@outlook.com
              </a>
              <a href="tel:+918148152869">India · +91 8148152869</a>
              <a href="tel:+263716610169">Zimbabwe · +263 716610169</a>
              <a href="https://afrim.co.zw" target="_blank" rel="noreferrer">
                afrim.co.zw
              </a>
            </div>
            <div className="contact-socials">
              <a
                href="https://www.linkedin.com/in/presly-mpofu-6864a2272"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/preslympofu7002-commits"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a href="/resume.pdf" target="_blank" rel="noreferrer">
                Résumé
              </a>
            </div>
            <p className="contact-location mono">
              KPRIET, Tamil Nadu, India
              <br />
              Bulawayo, Zimbabwe
            </p>
          </div>
          <form className="contact-form" onSubmit={prepareEmail}>
            <h3>A note to Presly</h3>
            <p>
              This prepares a draft in your email app. You review and send it
              there.
            </p>
            <div className="form-pair">
              <label>
                Your name
                <input
                  required
                  name="name"
                  autoComplete="name"
                  placeholder="Alex Morgan"
                  maxLength={100}
                />
              </label>
              <label>
                Email address
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="alex@example.com"
                  maxLength={200}
                />
              </label>
            </div>
            <label>
              Subject
              <input
                required
                name="subject"
                placeholder="An idea worth exploring"
                maxLength={200}
              />
            </label>
            <label>
              Your message
              <textarea
                required
                minLength={15}
                maxLength={4000}
                name="message"
                rows={4}
                placeholder="Tell me a little about what you have in mind…"
              />
            </label>
            <button className="button button-ivory" type="submit">
              Prepare email
            </button>
            {prepared && (
              <p className="form-feedback" role="status">
                Your email app has been requested. If no draft opens, use the
                email links alongside this form. Your message stays here until
                you’re ready.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
