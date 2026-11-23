import React, { useState, useEffect } from 'react';
import { certificates, achievements } from '../data/certifications';
import type { Certificate } from '../data/certifications';
import { ExternalLink, Award, Trophy, Star, Cpu, Monitor, Users, FileText, X, Download } from 'lucide-react';
import Reveal from './Reveal';

const categoryColors: Record<string, { primary: string; bg: string }> = {
  AI: { primary: '#a78bfa', bg: 'rgba(167,139,250,0.12)' },
  ML: { primary: '#22d3ee', bg: 'rgba(34,211,238,0.12)' },
  Cloud: { primary: '#34d399', bg: 'rgba(52,211,153,0.12)' },
  General: { primary: '#fb923c', bg: 'rgba(251,146,60,0.12)' },
};

const achievementIcons: Record<string, React.ReactNode> = {
  Trophy: <Trophy size={22} />,
  Star: <Star size={22} />,
  Cpu: <Cpu size={22} />,
  Monitor: <Monitor size={22} />,
  Award: <Award size={22} />,
  Users: <Users size={22} />,
};

const achievementColors: Record<string, { primary: string; bg: string }> = {
  amber: { primary: '#fbbf24', bg: 'rgba(251,191,36,0.1)' },
  cyan: { primary: '#22d3ee', bg: 'rgba(34,211,238,0.1)' },
  violet: { primary: '#a78bfa', bg: 'rgba(167,139,250,0.1)' },
  blue: { primary: '#60a5fa', bg: 'rgba(96,165,250,0.1)' },
  emerald: { primary: '#34d399', bg: 'rgba(52,211,153,0.1)' },
  orange: { primary: '#fb923c', bg: 'rgba(251,146,60,0.1)' },
};

const categories = ['All', 'AI', 'ML', 'Cloud'];

const CertificateViewer: React.FC<{ cert: Certificate; onClose: () => void }> = ({ cert, onClose }) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return (
    <div
      className="pdf-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Certificate: ${cert.title}`}
    >
      <div className="pdf-modal" onClick={e => e.stopPropagation()}>
        <div className="pdf-modal-header">
          <div style={{ minWidth: 0 }}>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: '0.95rem', color: 'white', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {cert.title}
            </div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.68rem', color: 'rgba(255,255,255,0.4)', marginTop: '0.15rem' }}>
              {cert.issuer} · {cert.date}
            </div>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexShrink: 0 }}>
            {cert.file && (
              <a
                href={cert.file}
                download
                className="btn-secondary"
                style={{ padding: '0.45rem 0.9rem', fontSize: '0.75rem' }}
              >
                <Download size={13} />
                Download
              </a>
            )}
            <button
              onClick={onClose}
              aria-label="Close certificate viewer"
              style={{
                width: '36px', height: '36px', borderRadius: '10px',
                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                color: 'rgba(255,255,255,0.7)', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'all 0.2s ease',
              }}
            >
              <X size={17} />
            </button>
          </div>
        </div>
        <div className="pdf-modal-body">
          {cert.file ? (
            <iframe src={cert.file} title={cert.title} />
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'rgba(255,255,255,0.4)', fontFamily: "'Inter', sans-serif", fontSize: '0.9rem' }}>
              Certificate document not available for preview.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Certifications: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [viewer, setViewer] = useState<Certificate | null>(null);

  const filtered = filter === 'All' ? certificates : certificates.filter(c => c.category === filter);

  return (
    <section id="certifications" className="section section-alt">
      <div className="container">
        {/* Header */}
        <Reveal className="section-head">
          <span className="section-label">// 05. Credentials</span>
          <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem' }}>
            Certifications &amp; Achievements
          </h2>
          <p style={{ maxWidth: '580px' }}>
            Verified certifications from recognised learning platforms and academic achievements demonstrating consistent excellence. Select any certificate to view the document.
          </p>
        </Reveal>

        {/* Certificates */}
        <Reveal>
          <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '1.35rem', color: 'white', marginBottom: '1.5rem' }}>
            Professional Certifications
          </h3>
        </Reveal>

        {/* Filter tabs */}
        <Reveal delay={80}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2rem' }}>
            {categories.map(cat => {
              const c = cat === 'All' ? { primary: '#22d3ee', bg: 'rgba(34,211,238,0.07)' } : categoryColors[cat];
              const isActive = filter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`tab-btn${isActive ? ' active' : ''}`}
                  style={
                    isActive
                      ? ({ '--tab-color': c.primary, '--tab-bg': c.bg, '--tab-border': c.primary + '50' } as React.CSSProperties)
                      : undefined
                  }
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Certificate grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem', marginBottom: '4rem' }}>
          {filtered.map((cert, i) => {
            const c = categoryColors[cert.category];
            return (
              <Reveal key={cert.id} delay={(i % 3) * 100}>
                <div
                  className="card-lift"
                  style={{
                    background: 'rgba(255,255,255,0.025)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-md)',
                    overflow: 'hidden',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  {/* Colour top bar */}
                  <div style={{ height: '3px', background: `linear-gradient(90deg, ${c.primary}, transparent)` }} />

                  <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    {/* Category + date */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                      <span style={{
                        fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem',
                        padding: '0.2rem 0.5rem', borderRadius: '4px',
                        background: c.bg, color: c.primary,
                      }}>
                        {cert.category}
                      </span>
                      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)' }}>
                        {cert.date}
                      </span>
                    </div>

                    {/* Title */}
                    <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: '1rem', color: 'white', marginBottom: '0.4rem', lineHeight: 1.4 }}>
                      {cert.title}
                    </h4>

                    {/* Issuer */}
                    <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem', color: c.primary, marginBottom: '0.4rem' }}>
                      {cert.issuer}
                    </p>

                    {/* Certificate Code */}
                    {cert.code && (
                      <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.68rem', color: 'rgba(255,255,255,0.4)', marginBottom: '0.75rem' }}>
                        Code: <span style={{ color: '#22d3ee' }}>{cert.code}</span>
                      </p>
                    )}

                    {/* Description */}
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.825rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, marginBottom: '1.25rem', flex: 1 }}>
                      {cert.description}
                    </p>

                    {/* Action */}
                    {cert.file ? (
                      <button
                        onClick={() => setViewer(cert)}
                        style={{
                          display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                          fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem',
                          color: c.primary, background: 'none', border: 'none',
                          cursor: 'pointer', padding: 0,
                          alignSelf: 'flex-start',
                          transition: 'opacity 0.2s',
                        }}
                        onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
                        onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                      >
                        <FileText size={13} /> View Certificate
                      </button>
                    ) : cert.credentialUrl ? (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                          fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem',
                          color: c.primary, textDecoration: 'none',
                        }}
                      >
                        View Certificate <ExternalLink size={12} />
                      </a>
                    ) : null}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Achievements */}
        <Reveal>
          <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '1.35rem', color: 'white', marginBottom: '1.5rem' }}>
            Academic &amp; Personal Achievements
          </h3>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
          {achievements.map((ach, i) => {
            const c = achievementColors[ach.color] ?? achievementColors['amber'];
            return (
              <Reveal key={ach.id} delay={(i % 4) * 80}>
                <div style={{
                  background: c.bg,
                  border: `1px solid ${c.primary}25`,
                  borderRadius: 'var(--radius-md)',
                  padding: '1.5rem',
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'flex-start',
                  height: '100%',
                }}>
                  <div style={{
                    width: '44px', height: '44px', borderRadius: '10px',
                    background: `${c.primary}18`,
                    border: `1px solid ${c.primary}30`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: c.primary, flexShrink: 0,
                  }}>
                    {achievementIcons[ach.icon] ?? <Award size={22} />}
                  </div>
                  <div>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: c.primary, marginBottom: '0.3rem', display: 'block' }}>{ach.year}</span>
                    <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: '0.95rem', color: 'white', marginBottom: '0.4rem', lineHeight: 1.3 }}>
                      {ach.title}
                    </h4>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.825rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.55 }}>
                      {ach.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      {viewer && <CertificateViewer cert={viewer} onClose={() => setViewer(null)} />}
    </section>
  );
};

export default Certifications;
