import React, { useState } from 'react';
import { skillCategories } from '../data/skills';
import Reveal from './Reveal';

const colorMap: Record<string, { bg: string; border: string; text: string; badge: string }> = {
  cyan: { bg: 'rgba(34,211,238,0.07)', border: 'rgba(34,211,238,0.2)', text: '#22d3ee', badge: 'rgba(34,211,238,0.12)' },
  blue: { bg: 'rgba(96,165,250,0.07)', border: 'rgba(96,165,250,0.2)', text: '#60a5fa', badge: 'rgba(96,165,250,0.12)' },
  green: { bg: 'rgba(52,211,153,0.07)', border: 'rgba(52,211,153,0.2)', text: '#34d399', badge: 'rgba(52,211,153,0.12)' },
  violet: { bg: 'rgba(167,139,250,0.07)', border: 'rgba(167,139,250,0.2)', text: '#a78bfa', badge: 'rgba(167,139,250,0.12)' },
  orange: { bg: 'rgba(251,146,60,0.07)', border: 'rgba(251,146,60,0.2)', text: '#fb923c', badge: 'rgba(251,146,60,0.12)' },
};

const levelLabel: Record<string, string> = {
  proficient: 'Proficient',
  familiar: 'Familiar',
  learning: 'Learning',
};
const levelColor: Record<string, string> = {
  proficient: '#34d399',
  familiar: '#60a5fa',
  learning: '#fbbf24',
};

const Skills: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('programming');
  const active = skillCategories.find(c => c.id === activeId) ?? skillCategories[0];
  const colors = colorMap[active.color] ?? colorMap['cyan'];

  return (
    <section id="skills" className="section">
      <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.3 }} aria-hidden="true" />
      <div className="container" style={{ position: 'relative' }}>
        {/* Header */}
        <Reveal className="section-head">
          <span className="section-label">// 02. Skills</span>
          <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem' }}>
            Technical Skills
          </h2>
          <p style={{ maxWidth: '580px' }}>
            Technologies, tools and concepts developed through academic study, certified learning programmes and hands-on project development.
          </p>
        </Reveal>

        {/* Category tabs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2.5rem' }}>
          {skillCategories.map(cat => {
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
                  color: isActive ? c.text : 'rgba(255,255,255,0.5)',
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Skill cards */}
        <Reveal>
        <div style={{
          background: 'rgba(255,255,255,0.025)',
          border: `1px solid ${colors.border}`,
          borderRadius: '16px',
          padding: '2rem',
        }}>
          <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.25rem', fontWeight: 600, color: colors.text, marginBottom: '0.5rem' }}>
            {active.label}
          </h3>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.875rem', color: 'rgba(255,255,255,0.4)', marginBottom: '2rem' }}>
            {active.skills.length} {active.skills.length === 1 ? 'skill' : 'skills'} in this category
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem' }}>
            {active.skills.map(skill => (
              <div key={skill.name} style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '12px',
                padding: '1.25rem',
                transition: 'all 0.2s ease',
              }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = colors.border;
                  (e.currentTarget as HTMLElement).style.background = colors.bg;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)';
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.02)';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: '1rem', color: 'white' }}>
                    {skill.name}
                  </span>
                  {skill.level && (
                    <span style={{
                      fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem',
                      padding: '0.2rem 0.5rem', borderRadius: '9999px',
                      background: `${levelColor[skill.level]}18`,
                      color: levelColor[skill.level],
                      border: `1px solid ${levelColor[skill.level]}30`,
                    }}>
                      {levelLabel[skill.level]}
                    </span>
                  )}
                </div>
                {skill.description && (
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.825rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>
                    {skill.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
        </Reveal>

        {/* Legend */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginTop: '1.5rem', justifyContent: 'center' }}>
          {Object.entries(levelLabel).map(([key, label]) => (
            <div key={key} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: levelColor[key] }} />
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)' }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
