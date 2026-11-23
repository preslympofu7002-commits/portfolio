import React from 'react';
import { educationHistory, experiences } from '../data/experience';
import { GraduationCap, Briefcase, Heart, Users } from 'lucide-react';
import Reveal from './Reveal';

const expTypeIcon: Record<string, React.ReactNode> = {
  work: <Briefcase size={18} />,
  volunteer: <Heart size={18} />,
  leadership: <Users size={18} />,
};
const expTypeColor: Record<string, string> = {
  work: '#22d3ee',
  volunteer: '#f97316',
  leadership: '#a78bfa',
};

const EducationExperience: React.FC = () => {
  return (
    <section id="education" className="section">
      <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.3 }} aria-hidden="true" />
      <div className="container" style={{ position: 'relative' }}>
        <div style={{ display: 'grid', gap: '5rem', alignItems: 'start' }} className="edu-exp-grid">

          {/* Education */}
          <div>
            <Reveal className="section-head" style={{ marginBottom: '2.5rem' }}>
              <span className="section-label">// 06. Education</span>
              <h2 className="section-title" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}>
                Academic Background
              </h2>
            </Reveal>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {educationHistory.map(edu => (
                <div key={edu.id} style={{
                  background: 'rgba(255,255,255,0.025)',
                  border: `1px solid ${edu.status === 'current' ? 'rgba(34,211,238,0.2)' : 'rgba(255,255,255,0.07)'}`,
                  borderRadius: '16px',
                  padding: '2rem',
                  position: 'relative',
                  overflow: 'hidden',
                }}>
                  {edu.status === 'current' && (
                    <div style={{
                      position: 'absolute', top: '1.25rem', right: '1.25rem',
                      display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                      padding: '0.25rem 0.75rem', borderRadius: '9999px',
                      background: 'rgba(34,211,238,0.12)', color: '#22d3ee',
                      fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem',
                      border: '1px solid rgba(34,211,238,0.3)',
                    }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22d3ee', animation: 'pulse 2s ease infinite' }} />
                      Current
                    </div>
                  )}
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{
                      width: '48px', height: '48px', borderRadius: '12px', flexShrink: 0,
                      background: edu.status === 'current' ? 'rgba(34,211,238,0.12)' : 'rgba(255,255,255,0.05)',
                      border: `1px solid ${edu.status === 'current' ? 'rgba(34,211,238,0.3)' : 'rgba(255,255,255,0.1)'}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: edu.status === 'current' ? '#22d3ee' : 'rgba(255,255,255,0.4)',
                    }}>
                      <GraduationCap size={22} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: edu.status === 'current' ? '#22d3ee' : 'rgba(255,255,255,0.4)', letterSpacing: '0.1em' }}>
                        {edu.period}
                      </span>
                      <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '1.1rem', color: 'white', margin: '0.4rem 0 0.25rem' }}>
                        {edu.degree}
                      </h3>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', color: edu.status === 'current' ? '#22d3ee' : 'rgba(255,255,255,0.6)', marginBottom: '0.25rem' }}>
                        {edu.institution}
                      </p>
                      <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem', color: 'rgba(255,255,255,0.3)', marginBottom: '1rem' }}>
                        {edu.location}
                      </p>
                      <ul style={{ padding: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                        {edu.details.map((d, i) => (
                          <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontFamily: "'Inter', sans-serif", fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)' }}>
                            <span style={{ color: edu.status === 'current' ? '#22d3ee' : 'rgba(255,255,255,0.3)', flexShrink: 0 }}>→</span>
                            {d}
                          </li>
                        ))}
                      </ul>
                      {edu.highlights && edu.highlights.length > 0 && (
                        <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: '#fbbf24', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                            Notable Achievements
                          </p>
                          <ul style={{ padding: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                            {edu.highlights.map((h, i) => (
                              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontFamily: "'Inter', sans-serif", fontSize: '0.825rem', color: '#fbbf24' }}>
                                <span>⭐</span>
                                {h}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <Reveal className="section-head" style={{ marginBottom: '2.5rem' }}>
              <span className="section-label">// 07. Experience</span>
              <h2 className="section-title" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}>
                Experience &amp; Leadership
              </h2>
            </Reveal>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {experiences.map(exp => {
                const color = expTypeColor[exp.type];
                return (
                  <div key={exp.id} style={{
                    background: 'rgba(255,255,255,0.025)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: '14px',
                    padding: '1.75rem',
                    transition: 'all 0.25s ease',
                  }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = `${color}30`; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)'; }}
                  >
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <div style={{
                        width: '42px', height: '42px', borderRadius: '10px', flexShrink: 0,
                        background: `${color}12`,
                        border: `1px solid ${color}25`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: color,
                      }}>
                        {expTypeIcon[exp.type]}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center', marginBottom: '0.3rem' }}>
                          <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: '1rem', color: 'white', margin: 0 }}>
                            {exp.role}
                          </h3>
                          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)' }}>
                            {exp.period}
                          </span>
                        </div>
                        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', color: color, marginBottom: '0.5rem' }}>
                          {exp.organization}
                        </p>
                        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.875rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.65, marginBottom: '1rem' }}>
                          {exp.description}
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                          {exp.skills.map(skill => (
                            <span key={skill} style={{
                              fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem',
                              padding: '0.2rem 0.5rem', borderRadius: '4px',
                              background: `${color}0D`, color: color,
                              border: `1px solid ${color}20`,
                            }}>
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        @media (min-width: 1024px) {
          .edu-exp-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default EducationExperience;
