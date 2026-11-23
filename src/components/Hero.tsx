import React, { useEffect, useRef, useState } from 'react';
import { MapPin, ChevronDown, ArrowRight, Download, Globe } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';

// Animated Neural Network Canvas
const NeuralCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let nodes: { x: number; y: number; vx: number; vy: number; r: number }[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const NUM_NODES = reduced ? 0 : 48;
    for (let i = 0; i < NUM_NODES; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        r: Math.random() * 2.2 + 1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
      }

      const MAX_DIST = 130;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const opacity = (1 - dist / MAX_DIST) * 0.22;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(34,211,238,${opacity})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      for (const node of nodes) {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(34,211,238,0.75)';
        ctx.fill();
      }

      animationId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        opacity: 0.55,
      }}
      aria-hidden="true"
    />
  );
};

const roles = [
  'AI & Machine Learning Student',
  'Software Developer',
  'Founder — Afrim Technologies',
];

const RoleRotator: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<'in' | 'out'>('in');

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const interval = setInterval(() => {
      setPhase('out');
      timeout = setTimeout(() => {
        setIndex(i => (i + 1) % roles.length);
        setPhase('in');
      }, 350);
    }, 3200);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <span
      key={index}
      style={{
        display: 'inline-block',
        color: '#22d3ee',
        opacity: phase === 'in' ? 1 : 0,
        transform: phase === 'in' ? 'translateY(0)' : 'translateY(8px)',
        transition: 'opacity 0.35s ease, transform 0.35s ease',
      }}
    >
      {roles[index]}
      <span className="role-caret" aria-hidden="true" />
    </span>
  );
};

const scrollTo = (selector: string) => {
  document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100svh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: '#020818',
      }}
    >
      {/* Background layers */}
      <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.5 }} aria-hidden="true" />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse at 15% 50%, rgba(34,211,238,0.08) 0%, transparent 55%), radial-gradient(ellipse at 85% 20%, rgba(139,92,246,0.08) 0%, transparent 55%)',
        }}
        aria-hidden="true"
      />
      <NeuralCanvas />

      {/* Content */}
      <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '7rem', paddingBottom: '5rem', width: '100%' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3.5rem',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left: Text */}
          <div>
            {/* Badge */}
            <div
              className="hero-enter"
              style={{
                '--enter-delay': '0ms',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.4rem 0.9rem',
                border: '1px solid rgba(34,211,238,0.3)',
                borderRadius: '9999px',
                background: 'rgba(34,211,238,0.06)',
                marginBottom: '1.75rem',
              } as React.CSSProperties}
            >
              <div
                style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  background: '#22d3ee',
                  animation: 'pulse 2s ease infinite',
                }}
              />
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.7rem',
                  color: '#22d3ee',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                }}
              >
                KPRIET · Tamil Nadu, India
              </span>
            </div>

            {/* Name */}
            <h1
              className="hero-enter"
              style={
                {
                  '--enter-delay': '120ms',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 'clamp(2.75rem, 7vw, 5.5rem)',
                  fontWeight: 800,
                  lineHeight: 1.02,
                  color: 'white',
                  marginBottom: '1.25rem',
                  letterSpacing: '-0.03em',
                } as React.CSSProperties
              }
            >
              PRESLY
              <br />
              <span
                style={{
                  background: 'linear-gradient(120deg, #22d3ee 0%, #60a5fa 45%, #a78bfa 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                MPOFU
              </span>
            </h1>

            {/* Rotating role */}
            <p
              className="hero-enter"
              style={
                {
                  '--enter-delay': '240ms',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 'clamp(1.05rem, 2.2vw, 1.4rem)',
                  fontWeight: 600,
                  marginBottom: '1.25rem',
                  minHeight: '1.6em',
                } as React.CSSProperties
              }
            >
              <RoleRotator />
            </p>

            {/* Bio */}
            <p
              className="hero-enter"
              style={
                {
                  '--enter-delay': '360ms',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '1.02rem',
                  color: 'rgba(255,255,255,0.6)',
                  lineHeight: 1.8,
                  maxWidth: '560px',
                  marginBottom: '2.25rem',
                } as React.CSSProperties
              }
            >
              I build intelligent software and digital products — exploring how AI, thoughtful
              engineering and entrepreneurship can solve real-world problems.
            </p>

            {/* CTAs */}
            <div
              className="hero-enter"
              style={
                {
                  '--enter-delay': '480ms',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.9rem',
                  marginBottom: '2.75rem',
                } as React.CSSProperties
              }
            >
              <button className="btn-primary" onClick={() => scrollTo('#projects')}>
                Explore My Work
                <ArrowRight size={16} />
              </button>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <Download size={15} />
                Resume
              </a>
              <button className="btn-secondary" onClick={() => scrollTo('#contact')}>
                Let's Connect
              </button>
            </div>

            {/* Social links */}
            <div className="hero-enter" style={{ '--enter-delay': '600ms', display: 'flex', gap: '0.9rem' } as React.CSSProperties}>
              <a
                href="https://www.linkedin.com/in/presly-mpofu-6864a2272"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: '44px', height: '44px', borderRadius: '12px',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: 'rgba(255,255,255,0.6)',
                  transition: 'all 0.25s ease',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget;
                  el.style.borderColor = '#0a66c2'; el.style.color = '#0a66c2'; el.style.background = 'rgba(10,102,194,0.1)';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget;
                  el.style.borderColor = 'rgba(255,255,255,0.12)'; el.style.color = 'rgba(255,255,255,0.6)'; el.style.background = 'transparent';
                }}
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href="https://github.com/preslympofu7002-commits"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: '44px', height: '44px', borderRadius: '12px',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: 'rgba(255,255,255,0.6)',
                  transition: 'all 0.25s ease',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget;
                  el.style.borderColor = '#8b949e'; el.style.color = 'white'; el.style.background = 'rgba(139,148,158,0.12)';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget;
                  el.style.borderColor = 'rgba(255,255,255,0.12)'; el.style.color = 'rgba(255,255,255,0.6)'; el.style.background = 'transparent';
                }}
              >
                <GithubIcon size={20} />
              </a>
            </div>
          </div>

          {/* Right: Identity card */}
          <div className="hero-enter" style={{ '--enter-delay': '400ms' } as React.CSSProperties}>
            <div
              style={{
                position: 'relative',
                background: 'linear-gradient(160deg, rgba(14,24,54,0.75) 0%, rgba(6,15,42,0.9) 100%)',
                border: '1px solid rgba(34,211,238,0.16)',
                borderRadius: '24px',
                padding: '2rem',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                boxShadow: '0 24px 60px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.05)',
                maxWidth: '400px',
                margin: '0 auto',
                width: '100%',
              }}
            >
              {/* Ambient glow */}
              <div
                style={{
                  position: 'absolute',
                  top: '-60px',
                  right: '-60px',
                  width: '200px',
                  height: '200px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(34,211,238,0.14) 0%, transparent 70%)',
                  pointerEvents: 'none',
                }}
                aria-hidden="true"
              />

              {/* Card header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.1rem', marginBottom: '1.75rem' }}>
                <div style={{ position: 'relative', flexShrink: 0 }}>
                  <div
                    style={{
                      position: 'absolute',
                      inset: '-5px',
                      borderRadius: '50%',
                      background: 'conic-gradient(from 0deg, #22d3ee, #8b5cf6, #22d3ee)',
                      animation: 'spin 10s linear infinite',
                      opacity: 0.7,
                    }}
                    aria-hidden="true"
                  />
                  <div
                    style={{
                      width: '76px',
                      height: '76px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, rgba(34,211,238,0.18), rgba(139,92,246,0.18))',
                      border: '1px solid rgba(34,211,238,0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 800,
                        fontSize: '1.6rem',
                        background: 'linear-gradient(135deg, #22d3ee, #a78bfa)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      PM
                    </span>
                  </div>
                </div>
                <div>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '1.15rem', color: 'white' }}>
                    Presly Mpofu
                  </div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem', color: '#22d3ee', marginTop: '0.2rem' }}>
                    B.E. CSE · AI &amp; ML
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginTop: '0.45rem' }}>
                    <MapPin size={11} color="rgba(255,255,255,0.4)" />
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', color: 'rgba(255,255,255,0.45)' }}>
                      Zimbabwe → India
                    </span>
                  </div>
                </div>
              </div>

              {/* Chips */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.75rem' }}>
                {['KPRIET', 'Afrim Technologies', 'React · TypeScript', 'Python · AI/ML'].map(chip => (
                  <span
                    key={chip}
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.68rem',
                      padding: '0.3rem 0.7rem',
                      borderRadius: '9999px',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.09)',
                      color: 'rgba(255,255,255,0.6)',
                    }}
                  >
                    {chip}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
                {[
                  { value: '10', label: 'Credentials' },
                  { value: '3', label: 'Ventures' },
                  { value: 'Live', label: 'afrim.co.zw' },
                ].map(stat => (
                  <div
                    key={stat.label}
                    style={{
                      textAlign: 'center',
                      padding: '0.9rem 0.4rem',
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.07)',
                      borderRadius: '14px',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 700,
                        fontSize: '1.35rem',
                        color: '#22d3ee',
                      }}
                    >
                      {stat.value}
                    </div>
                    <div
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '0.6rem',
                        color: 'rgba(255,255,255,0.4)',
                        letterSpacing: '0.06em',
                        marginTop: '0.25rem',
                      }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Live platform strip */}
              <a
                href="https://afrim.co.zw"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: '1.25rem',
                  padding: '0.85rem 1rem',
                  borderRadius: '14px',
                  background: 'rgba(34,211,238,0.07)',
                  border: '1px solid rgba(34,211,238,0.22)',
                  textDecoration: 'none',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(34,211,238,0.12)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(34,211,238,0.07)')}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <Globe size={15} color="#22d3ee" />
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.82rem', color: 'rgba(255,255,255,0.75)' }}>
                    Afrim Marketplace
                  </span>
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#34d399', animation: 'pulse 2s ease infinite' }} />
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.68rem', color: '#34d399' }}>LIVE</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo('#about')}
        style={{
          position: 'absolute',
          bottom: '1.75rem',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '9999px',
          padding: '0.5rem 1rem',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.3rem',
          color: 'rgba(255,255,255,0.35)',
          animation: 'float 3s ease-in-out infinite',
          transition: 'all 0.25s ease',
        }}
        onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(34,211,238,0.4)')}
        onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
        aria-label="Scroll down"
      >
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.6rem', letterSpacing: '0.2em' }}>SCROLL</span>
        <ChevronDown size={16} />
      </button>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes float { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(-8px)} }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        @media (min-width: 960px) {
          .hero-grid { grid-template-columns: 1.15fr 0.85fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
