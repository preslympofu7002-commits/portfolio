import React, { useState } from 'react';
import { afrimProjects, softwareProjects } from '../data/projects';
import { ArrowRight, ShoppingBag, Brain, CreditCard, Layers, ShieldCheck, ExternalLink, Globe, Sprout } from 'lucide-react';
import { GithubIcon } from './Icons';
import Reveal from './Reveal';

const afrimIcons: Record<string, React.ReactNode> = {
  'afrim-marketplace': <ShoppingBag size={26} />,
  'afrim-ai': <Brain size={26} />,
  'afrim-pay': <CreditCard size={26} />,
  khetvani: <Sprout size={26} />,
};

const afrimColors: Record<string, { primary: string; secondary: string; bg: string }> = {
  'afrim-marketplace': { primary: '#22d3ee', secondary: '#0e7490', bg: 'rgba(34,211,238,0.06)' },
  'afrim-ai': { primary: '#a78bfa', secondary: '#6d28d9', bg: 'rgba(167,139,250,0.06)' },
  'afrim-pay': { primary: '#34d399', secondary: '#059669', bg: 'rgba(52,211,153,0.06)' },
  khetvani: { primary: '#fbbf24', secondary: '#b45309', bg: 'rgba(251,191,36,0.05)' },
};

const statusConfig = {
  'in-development': { label: 'In Active Development', cls: 'status-dev' },
  'exploration': { label: 'Exploration / R&D', cls: 'status-exploration' },
  'live': { label: 'Live Platform', cls: 'status-active' },
};

const AfrimTechnologies: React.FC = () => {
  const [expanded, setExpanded] = useState<string | null>('afrim-marketplace');

  return (
    <section id="projects" className="section section-alt">
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <Reveal className="section-head" style={{ marginBottom: '2rem' }}>
          <span className="section-label">// 03. Projects & Ventures</span>
          <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)', marginBottom: '1rem' }}>
            Work & Ventures
          </h2>
          <p>
            Software products and technology initiatives I am building — anchored by{' '}
            <strong style={{ color: 'white' }}>Afrim Technologies</strong>, my venture exploring the
            intersection of digital commerce, applied AI and inclusive fintech.
          </p>
        </Reveal>

        {/* Live Marketplace Highlight Callout Banner */}
        <div style={{
          background: 'linear-gradient(90deg, rgba(34,211,238,0.12), rgba(6,182,212,0.05))',
          border: '1px solid rgba(34,211,238,0.4)',
          borderRadius: '16px',
          padding: '1.25rem 1.75rem',
          marginBottom: '2.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          boxShadow: '0 0 30px rgba(34,211,238,0.1)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div style={{
              width: '42px', height: '42px', borderRadius: '10px',
              background: 'rgba(34,211,238,0.2)', border: '1px solid rgba(34,211,238,0.4)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#22d3ee',
            }}>
              <Globe size={22} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: 'white', fontSize: '1.05rem' }}>
                  Afrim Marketplace is Online
                </span>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', padding: '0.15rem 0.5rem', borderRadius: '9999px', background: 'rgba(52,211,153,0.15)', color: '#34d399', border: '1px solid rgba(52,211,153,0.3)' }}>
                  Active Platform
                </span>
              </div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', color: 'rgba(255,255,255,0.65)', margin: '0.2rem 0 0' }}>
                Explore the live digital marketplace for African merchants and consumers at <strong style={{ color: '#22d3ee' }}>afrim.co.zw</strong>
              </p>
            </div>
          </div>

          <a
            href="https://afrim.co.zw"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ textDecoration: 'none' }}
          >
            <span>Visit afrim.co.zw</span>
            <ExternalLink size={15} />
          </a>
        </div>

        {/* Featured Ecosystem Architecture Hero Card */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(14,24,54,0.85) 0%, rgba(6,15,42,0.95) 100%)',
          border: '1px solid rgba(34,211,238,0.18)',
          borderRadius: '24px',
          padding: '2.5rem',
          marginBottom: '4rem',
          boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem', alignItems: 'center' }} className="ecosystem-grid">
            {/* Left: Ecosystem Story */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.35rem 0.85rem', borderRadius: '9999px', background: 'rgba(34,211,238,0.1)', border: '1px solid rgba(34,211,238,0.25)', marginBottom: '1.25rem' }}>
                <Layers size={14} color="#22d3ee" />
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem', color: '#22d3ee', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  The Triple-Pillar Architecture
                </span>
              </div>

              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: 'white', lineHeight: 1.2, marginBottom: '1rem' }}>
                Connecting Commerce, AI & Payments into a Synergy Engine
              </h3>

              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                Rather than treating software projects as isolated experiments, <strong>Afrim Technologies</strong> is conceived as an interconnected ecosystem. By architecting commerce infrastructure alongside intelligent AI reasoning and digital transaction protocols, each initiative strengthens and feeds the other.
              </p>

              {/* Three Pillars Overview */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2rem' }}>
                {[
                  {
                    pillar: 'Afrim Marketplace',
                    domain: 'E-Commerce Infrastructure · afrim.co.zw',
                    color: '#22d3ee',
                    icon: <ShoppingBag size={18} />,
                    desc: 'A robust multi-vendor marketplace connecting African buyers and sellers with modern UI and Supabase database.',
                  },
                  {
                    pillar: 'Afrim AI',
                    domain: 'Applied Intelligence',
                    color: '#a78bfa',
                    icon: <Brain size={18} />,
                    desc: 'Intelligent recommendation, inventory forecasting, and conversational discovery tailored for regional consumer patterns.',
                  },
                  {
                    pillar: 'Afrim Pay',
                    domain: 'Financial Technology',
                    color: '#34d399',
                    icon: <CreditCard size={18} />,
                    desc: 'Research and design of friction-free digital payment settlement protocols for emerging markets.',
                  },
                ].map((item, idx) => (
                  <div key={idx} style={{
                    display: 'flex', gap: '1rem', alignItems: 'flex-start',
                    padding: '0.85rem 1.15rem',
                    borderRadius: '12px',
                    background: `${item.color}08`,
                    border: `1px solid ${item.color}20`,
                  }}>
                    <div style={{ color: item.color, marginTop: '2px' }}>{item.icon}</div>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
                        <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: '0.95rem', color: 'white' }}>{item.pillar}</span>
                        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.68rem', color: item.color }}>• {item.domain}</span>
                      </div>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.825rem', color: 'rgba(255,255,255,0.55)', margin: '0.2rem 0 0', lineHeight: 1.5 }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: 3D Ecosystem Visualization Image */}
            <div style={{ position: 'relative', textAlign: 'center' }}>
              <div style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1px solid rgba(34,211,238,0.3)',
                boxShadow: '0 0 40px rgba(34,211,238,0.15)',
              }}>
                <img
                  src="/afrim-ecosystem.jpg"
                  alt="Afrim Technologies Connected Ecosystem - Payments, E-commerce, Finance"
                  loading="lazy"
                  style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  background: 'linear-gradient(to top, rgba(6,15,42,0.95) 0%, transparent 100%)',
                  padding: '1.5rem 1rem 1rem',
                }}>
                  <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', color: '#22d3ee', margin: 0, letterSpacing: '0.08em' }}>
                    CONCEPTUAL ECOSYSTEM LATTICE • AFRIM TECHNOLOGIES
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Individual Initiative Deep Dives */}
        <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '1.6rem', color: 'white', marginBottom: '1.75rem' }}>
          Explore the Three Initiatives
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          {afrimProjects.map(project => {
            const colors = afrimColors[project.id];
            const status = statusConfig[project.status];
            const isExpanded = expanded === project.id;

            return (
              <div key={project.id} style={{
                background: colors.bg,
                border: `1px solid ${colors.primary}25`,
                borderRadius: '20px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.35s ease',
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = `${colors.primary}50`; (e.currentTarget as HTMLElement).style.transform = 'translateY(-5px)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = `${colors.primary}25`; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
              >
                <div>
                  {/* Card top banner */}
                  <div style={{ height: '4px', background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})` }} />

                  <div style={{ padding: '2rem 2rem 1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                      <div style={{
                        width: '52px', height: '52px', borderRadius: '14px',
                        background: `${colors.primary}18`,
                        border: `1px solid ${colors.primary}35`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: colors.primary,
                      }}>
                        {afrimIcons[project.id]}
                      </div>
                      <span className={status.cls} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'currentColor' }} />
                        {status.label}
                      </span>
                    </div>

                    <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '1.4rem', color: 'white', marginBottom: '0.35rem' }}>
                      {project.title}
                    </h4>
                    <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.78rem', color: colors.primary, marginBottom: '1rem', letterSpacing: '0.04em' }}>
                      {project.tagline}
                    </p>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                      {project.description}
                    </p>

                    {/* Problem Solved Callout */}
                    <div style={{
                      background: 'rgba(0,0,0,0.25)',
                      borderLeft: `3px solid ${colors.primary}`,
                      borderRadius: '0 8px 8px 0',
                      padding: '0.75rem 1rem',
                      marginBottom: '1.25rem',
                    }}>
                      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.68rem', color: colors.primary, textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '0.2rem' }}>
                        Problem Being Addressed
                      </span>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.825rem', color: 'rgba(255,255,255,0.7)', margin: 0, lineHeight: 1.5 }}>
                        {project.problem}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '1.25rem' }}>
                      {project.technologies.map(tech => (
                        <span key={tech} className="tech-tag" style={{ borderColor: `${colors.primary}30`, color: colors.primary, background: `${colors.primary}0E` }}>
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Implemented Features List */}
                    {isExpanded && (
                      <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: `1px solid ${colors.primary}15` }}>
                        <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.65rem' }}>
                          Core Implemented / Planned Workflows:
                        </p>
                        <ul style={{ padding: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                          {project.features.map((f, i) => (
                            <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', color: 'rgba(255,255,255,0.65)' }}>
                              <span style={{ color: colors.primary, flexShrink: 0, marginTop: '2px' }}>✓</span>
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer action bar */}
                <div style={{
                  padding: '1.25rem 2rem',
                  borderTop: `1px solid ${colors.primary}15`,
                  background: 'rgba(0,0,0,0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '0.75rem',
                }}>
                  <button
                    onClick={() => setExpanded(isExpanded ? null : project.id)}
                    style={{
                      background: 'none', border: 'none', cursor: 'pointer',
                      fontFamily: "'JetBrains Mono', monospace", fontSize: '0.78rem', color: colors.primary,
                      display: 'flex', alignItems: 'center', gap: '0.4rem', padding: 0,
                    }}
                  >
                    {isExpanded ? 'Less info' : 'View functionality'}
                    <ArrowRight size={14} style={{ transform: isExpanded ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s' }} />
                  </button>

                  <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'center' }}>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
                          padding: '0.4rem 0.75rem', borderRadius: '6px',
                          background: '#06b6d4', color: '#020818',
                          fontWeight: 700,
                          fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.75rem',
                          textDecoration: 'none', transition: 'all 0.2s',
                        }}
                        onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = '#22d3ee'}
                        onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = '#06b6d4'}
                      >
                        <ExternalLink size={13} /> Visit afrim.co.zw
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
                          padding: '0.4rem 0.75rem', borderRadius: '6px',
                          background: 'rgba(255,255,255,0.06)', color: 'white',
                          fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem',
                          textDecoration: 'none', transition: 'all 0.2s',
                        }}
                        onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.15)'}
                        onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)'}
                      >
                        <GithubIcon size={14} /> Repository
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Other Projects */}
        {softwareProjects.length > 0 && (
          <>
            <Reveal>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '1.6rem', color: 'white', marginBottom: '0.5rem' }}>
                Other Projects
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', marginBottom: '1.75rem', maxWidth: '640px', lineHeight: 1.7 }}>
                Independent initiatives and early-stage concepts outside the Afrim ecosystem.
              </p>
            </Reveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
              {softwareProjects.map(project => {
                const colors = afrimColors[project.id] ?? { primary: '#22d3ee', secondary: '#0e7490', bg: 'rgba(34,211,238,0.05)' };
                const status = statusConfig[project.status];
                return (
                  <div key={project.id} style={{
                    background: colors.bg,
                    border: `1px solid ${colors.primary}25`,
                    borderRadius: '20px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.35s ease',
                  }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = `${colors.primary}50`; (e.currentTarget as HTMLElement).style.transform = 'translateY(-5px)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = `${colors.primary}25`; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
                  >
                    <div style={{ height: '4px', background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})` }} />
                    <div style={{ padding: '2rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                        <div style={{
                          width: '52px', height: '52px', borderRadius: '14px',
                          background: `${colors.primary}18`,
                          border: `1px solid ${colors.primary}35`,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          color: colors.primary,
                        }}>
                          {afrimIcons[project.id] ?? <Sprout size={26} />}
                        </div>
                        <span className={status.cls} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'currentColor' }} />
                          {status.label}
                        </span>
                      </div>
                      <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '1.4rem', color: 'white', marginBottom: '0.35rem' }}>
                        {project.title}
                      </h4>
                      <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.78rem', color: colors.primary, marginBottom: '1rem', letterSpacing: '0.04em' }}>
                        {project.tagline}
                      </p>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                        {project.description}
                      </p>
                      <div style={{
                        background: 'rgba(0,0,0,0.25)',
                        borderLeft: `3px solid ${colors.primary}`,
                        borderRadius: '0 8px 8px 0',
                        padding: '0.75rem 1rem',
                        marginBottom: '1.25rem',
                      }}>
                        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.68rem', color: colors.primary, textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '0.2rem' }}>
                          Problem Being Addressed
                        </span>
                        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.825rem', color: 'rgba(255,255,255,0.7)', margin: 0, lineHeight: 1.5 }}>
                          {project.problem}
                        </p>
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '1.25rem' }}>
                        {project.technologies.map(tech => (
                          <span key={tech} className="tech-tag" style={{ borderColor: `${colors.primary}30`, color: colors.primary, background: `${colors.primary}0E` }}>
                            {tech}
                          </span>
                        ))}
                      </div>
                      <ul style={{ padding: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                        {project.features.map((f, i) => (
                          <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', color: 'rgba(255,255,255,0.65)' }}>
                            <span style={{ color: colors.primary, flexShrink: 0, marginTop: '2px' }}>✓</span>
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {/* Honest Disclosure / Status Banner */}
        <div style={{
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '16px',
          padding: '1.5rem 2rem',
          display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap',
        }}>
          <ShieldCheck size={28} color="#34d399" style={{ flexShrink: 0 }} />
          <div style={{ flex: 1, minWidth: '240px' }}>
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, color: 'white', fontSize: '0.95rem' }}>
              Academic Integrity & Transparency Disclosure
            </span>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.825rem', color: 'rgba(255,255,255,0.5)', margin: '0.2rem 0 0', lineHeight: 1.6 }}>
              Afrim Technologies represents student and founder-led initiatives currently under active engineering and research. Functionalities are presented honestly as active prototypes and conceptual architectural models without simulated live commercial statistics.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .ecosystem-grid { grid-template-columns: 1.2fr 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default AfrimTechnologies;
