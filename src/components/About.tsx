import React from 'react';
import { Brain, Code2, Rocket, Languages } from 'lucide-react';
import { timeline, languagesSpoken } from '../data/experience';
import Reveal from './Reveal';

const timelineColors: Record<string, string> = {
  education: '#22d3ee',
  work: '#60a5fa',
  achievement: '#fbbf24',
  leadership: '#f97316',
  learning: '#a78bfa',
  entrepreneurship: '#34d399',
};

const identityCards = [
  {
    icon: <Brain size={22} />,
    title: 'AI/ML Student',
    description: 'Studying intelligent systems, neural networks and machine learning at KPRIET.',
    color: '#22d3ee',
  },
  {
    icon: <Code2 size={22} />,
    title: 'Software Developer',
    description: 'Building digital products with React, TypeScript and modern web technologies.',
    color: '#60a5fa',
  },
  {
    icon: <Rocket size={22} />,
    title: 'Technology Innovator',
    description: 'Founding Afrim Technologies to build practical solutions for real-world challenges.',
    color: '#a78bfa',
  },
];

const About: React.FC = () => {
  return (
    <section id="about" className="section section-alt">
      <div className="container">
        {/* Header */}
        <Reveal className="section-head">
          <span className="section-label">// 01. About</span>
          <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1.25rem' }}>
            My Story
          </h2>
          <p>
            A Computer Science &amp; Engineering student specialising in Artificial Intelligence and
            Machine Learning — building the bridge between theory and real products.
          </p>
        </Reveal>

        <div style={{ display: 'grid', gap: '4rem', alignItems: 'start' }} className="about-grid">
          {/* Bio */}
          <div>
            <Reveal variant="left">
              <div
                style={{
                  background: 'rgba(255,255,255,0.025)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  padding: '2.5rem',
                  marginBottom: '2rem',
                }}
              >
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 600, color: 'white', marginBottom: '1.25rem' }}>
                  Who I Am
                </h3>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--color-text-secondary)', lineHeight: 1.9, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <p>
                    I am <strong style={{ color: 'white' }}>Presly Mpofu</strong>, a Computer Science and
                    Engineering student specialising in Artificial Intelligence and Machine Learning at
                    KPR Institute of Engineering and Technology (KPRIET) in Tamil Nadu, India. My academic
                    journey began with a strong foundation in mathematics and sciences, reflected in my
                    A-Level results, which positioned me naturally toward technology and analytical thinking.
                  </p>
                  <p>
                    My interest in <strong style={{ color: '#22d3ee' }}>intelligent systems</strong> grew
                    alongside my self-directed learning in AI and machine learning — completing
                    certifications across neural networks, encoder-decoder architectures, cloud AI
                    platforms and Python-based machine learning. I believe in learning by doing, which is
                    why I am actively building real digital products through{' '}
                    <strong style={{ color: '#22d3ee' }}>Afrim Technologies</strong>, my technology venture.
                  </p>
                  <p>
                    I am committed to bridging the gap between theoretical knowledge and practical
                    application — whether developing the Afrim Marketplace, exploring AI product
                    opportunities, or studying emerging technologies at university, I approach every
                    challenge with <strong style={{ color: 'white' }}>curiosity, persistence and a
                    commitment to quality</strong>.
                  </p>
                  <p>
                    Beyond technology, I value leadership and community contribution — having served as a
                    Volleyball Team Captain, Event Organizer and Volunteer Teaching Assistant, I
                    understand that the best solutions are built collaboratively.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Identity cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
              {identityCards.map((card, i) => (
                <Reveal key={card.title} delay={i * 120}>
                  <div
                    className="card-lift"
                    style={{
                      background: 'rgba(255,255,255,0.025)',
                      border: `1px solid ${card.color}20`,
                      borderRadius: 'var(--radius-sm)',
                      padding: '1.5rem',
                      textAlign: 'center',
                      height: '100%',
                    }}
                  >
                    <div
                      style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '12px',
                        margin: '0 auto 0.85rem',
                        background: `${card.color}14`,
                        border: `1px solid ${card.color}30`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: card.color,
                      }}
                    >
                      {card.icon}
                    </div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: card.color, fontSize: '1rem', marginBottom: '0.5rem' }}>
                      {card.title}
                    </div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                      {card.description}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Languages */}
            <Reveal delay={200}>
              <div
                style={{
                  marginTop: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  flexWrap: 'wrap',
                  padding: '1.1rem 1.4rem',
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-sm)',
                }}
              >
                <Languages size={18} color="#22d3ee" style={{ flexShrink: 0 }} />
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  Languages
                </span>
                {languagesSpoken.map((l, i) => (
                  <span key={l.language} style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'rgba(255,255,255,0.65)' }}>
                    {i > 0 && <span style={{ color: 'rgba(255,255,255,0.2)', marginRight: '0.75rem' }}>·</span>}
                    <strong style={{ color: 'white' }}>{l.language}</strong> — {l.proficiency}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Timeline */}
          <div>
            <Reveal variant="right">
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 600, color: 'white', marginBottom: '2rem' }}>
                My Journey
              </h3>
            </Reveal>
            <div style={{ position: 'relative' }}>
              {/* Line */}
              <div
                style={{
                  position: 'absolute',
                  left: '23px',
                  top: '8px',
                  bottom: '8px',
                  width: '1px',
                  background: 'linear-gradient(to bottom, rgba(34,211,238,0.6), rgba(34,211,238,0.05))',
                }}
                aria-hidden="true"
              />

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {timeline.map((item, i) => {
                  const color = timelineColors[item.type] || '#22d3ee';
                  return (
                    <Reveal key={i} delay={i * 90}>
                      <div style={{ display: 'flex', gap: '1.5rem', paddingBottom: '1.9rem' }}>
                        {/* Dot */}
                        <div style={{ position: 'relative', flexShrink: 0 }}>
                          <div
                            style={{
                              width: '47px',
                              height: '47px',
                              borderRadius: '50%',
                              background: `${color}12`,
                              border: `1.5px solid ${color}45`,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              position: 'relative',
                              zIndex: 1,
                            }}
                          >
                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: color, boxShadow: `0 0 10px ${color}` }} />
                          </div>
                        </div>
                        {/* Content */}
                        <div style={{ paddingTop: '11px', paddingBottom: '0.2rem' }}>
                          <span
                            style={{
                              fontFamily: "'JetBrains Mono', monospace",
                              fontSize: '0.7rem',
                              color,
                              letterSpacing: '0.12em',
                              marginBottom: '0.3rem',
                              display: 'block',
                            }}
                          >
                            {item.year}
                          </span>
                          <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.92rem', color: 'rgba(255,255,255,0.68)', lineHeight: 1.55 }}>
                            {item.event}
                          </span>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .about-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default About;
