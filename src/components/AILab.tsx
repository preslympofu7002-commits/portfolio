import React, { useState } from 'react';
import { BookOpen, FlaskConical, NotebookPen, Wrench, Microscope, Telescope } from 'lucide-react';
import { labCategories } from '../data/ailab';
import Reveal from './Reveal';

const colorMap: Record<string, { primary: string; bg: string; border: string }> = {
  cyan: { primary: '#22d3ee', bg: 'rgba(34,211,238,0.07)', border: 'rgba(34,211,238,0.2)' },
  blue: { primary: '#60a5fa', bg: 'rgba(96,165,250,0.07)', border: 'rgba(96,165,250,0.2)' },
  violet: { primary: '#a78bfa', bg: 'rgba(167,139,250,0.07)', border: 'rgba(167,139,250,0.2)' },
  emerald: { primary: '#34d399', bg: 'rgba(52,211,153,0.07)', border: 'rgba(52,211,153,0.2)' },
  amber: { primary: '#fbbf24', bg: 'rgba(251,191,36,0.07)', border: 'rgba(251,191,36,0.2)' },
};

const statusConfig = {
  completed: { label: 'Completed', color: '#34d399', bg: 'rgba(52,211,153,0.12)' },
  'in-progress': { label: 'In Progress', color: '#fbbf24', bg: 'rgba(251,191,36,0.12)' },
  planned: { label: 'Planned', color: 'rgba(255,255,255,0.3)', bg: 'rgba(255,255,255,0.05)' },
};

const typeIcon: Record<string, React.ReactNode> = {
  course: <BookOpen size={16} />,
  experiment: <FlaskConical size={16} />,
  notebook: <NotebookPen size={16} />,
  project: <Wrench size={16} />,
  research: <Microscope size={16} />,
};

const AILab: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('artificial-intelligence');

  const active = labCategories.find(c => c.id === activeId) ?? labCategories[0];
  const colors = colorMap[active.color] ?? colorMap['cyan'];

  return (
    <section id="ailab" className="section">
      <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.3 }} aria-hidden="true" />

      <div className="container" style={{ position: 'relative' }}>
        {/* Header */}
        <Reveal className="section-head" style={{ marginBottom: '1.5rem' }}>
          <span className="section-label">// 04. Lab</span>
          <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem' }}>
            AI &amp; ML Learning Lab
          </h2>
          <p style={{ maxWidth: '620px' }}>
            A dedicated space documenting my journey into Artificial Intelligence and Machine Learning — from foundational certifications to future experiments and research explorations.
          </p>
        </Reveal>

        {/* Learning journey summary */}
        <Reveal>
        <div style={{
          background: 'linear-gradient(135deg, rgba(34,211,238,0.06), rgba(167,139,250,0.06))',
          border: '1px solid rgba(34,211,238,0.12)',
          borderRadius: '14px',
          padding: '1.5rem 2rem',
          marginBottom: '2.5rem',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '2rem',
          alignItems: 'center',
        }}>
          {[
            { value: '9', label: 'Certificates Earned', color: '#22d3ee' },
            { value: '4', label: 'Learning Domains', color: '#a78bfa' },
            { value: '3+', label: 'Planned Experiments', color: '#fbbf24' },
            { value: '∞', label: 'Curiosity', color: '#34d399' },
          ].map(stat => (
            <div key={stat.label} style={{ textAlign: 'center', minWidth: '100px' }}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: '2rem', color: stat.color }}>{stat.value}</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', marginTop: '0.2rem' }}>{stat.label}</div>
            </div>
          ))}
        </div>
        </Reveal>

        {/* Category tabs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2.5rem' }}>
          {labCategories.map(cat => {
            const c = colorMap[cat.color] ?? colorMap['cyan'];
            const isActive = cat.id === activeId;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveId(cat.id)}
                style={{
                  padding: '0.5rem 1.25rem',
                  borderRadius: '9999px',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  background: isActive ? c.bg : 'rgba(255,255,255,0.03)',
                  border: `1px solid ${isActive ? c.border : 'rgba(255,255,255,0.08)'}`,
                  color: isActive ? c.primary : 'rgba(255,255,255,0.5)',
                }}
              >
                {cat.title}
              </button>
            );
          })}
        </div>

        {/* Category description */}
        <div style={{
          background: colors.bg,
          border: `1px solid ${colors.border}`,
          borderRadius: '12px',
          padding: '1.25rem 1.75rem',
          marginBottom: '2rem',
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.9rem',
          color: 'rgba(255,255,255,0.65)',
        }}>
          {active.description}
        </div>

        {/* Lab items */}
        <Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem', marginBottom: '3rem' }}>
          {active.items.map(item => {
            const sc = statusConfig[item.status];
            return (
              <div key={item.id} style={{
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '14px',
                padding: '1.5rem',
                transition: 'all 0.25s ease',
                opacity: item.status === 'planned' ? 0.7 : 1,
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = colors.border; (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)'; (e.currentTarget as HTMLElement).style.transform = 'none'; }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '0.75rem', gap: '0.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: colors.primary, display: 'flex' }}>{typeIcon[item.type] ?? <BookOpen size={16} />}</span>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{item.type}</span>
                  </div>
                  <span style={{
                    fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem',
                    padding: '0.2rem 0.5rem', borderRadius: '9999px',
                    background: sc.bg, color: sc.color,
                    flexShrink: 0,
                  }}>
                    {sc.label}
                  </span>
                </div>
                <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: '1rem', color: 'white', marginBottom: '0.5rem' }}>
                  {item.title}
                </h4>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, marginBottom: '1rem' }}>
                  {item.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {item.tags.map(tag => (
                    <span key={tag} style={{
                      fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem',
                      padding: '0.2rem 0.45rem', borderRadius: '4px',
                      background: `${colors.primary}10`, color: colors.primary,
                      border: `1px solid ${colors.primary}20`,
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
                {item.date && (
                  <div style={{ marginTop: '0.75rem', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: 'rgba(255,255,255,0.25)' }}>
                    {item.date}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        </Reveal>

        {/* Future experiments note */}
        <div style={{
          background: 'rgba(251,191,36,0.05)',
          border: '1px solid rgba(251,191,36,0.15)',
          borderRadius: '14px',
          padding: '1.5rem 2rem',
          display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center',
        }}>
          <Telescope size={26} color="#fbbf24" style={{ flexShrink: 0 }} />
          <div>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, color: 'rgba(255,255,255,0.8)', fontSize: '1rem', margin: '0 0 0.3rem' }}>
              This lab grows with my learning
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.875rem', color: 'rgba(255,255,255,0.45)', margin: 0 }}>
              AI experiments, Python notebooks, ML demonstrations and research notes will be added here as my learning progresses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AILab;
