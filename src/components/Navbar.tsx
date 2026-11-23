import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'AI Lab', href: '#ailab' },
  { label: 'Credentials', href: '#certifications' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

const scrollTo = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll-spy: highlight the section currently in view
  useEffect(() => {
    const sections = navItems
      .map(item => document.querySelector(item.href))
      .filter((el): el is Element => el !== null);
    if (sections.length === 0 || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
    );
    sections.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Close mobile menu on Escape
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    setActive(href);
    scrollTo(href);
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.35s ease',
        background: scrolled ? 'rgba(2,8,24,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(18px) saturate(1.4)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(18px) saturate(1.4)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
      }}
    >
      <nav
        aria-label="Primary"
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '72px',
        }}
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={e => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}
          aria-label="Presly Mpofu — back to top"
        >
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #22d3ee, #8b5cf6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 20px rgba(34,211,238,0.25)',
            }}
          >
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '14px', color: 'white' }}>
              PM
            </span>
          </div>
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: '1rem', color: 'white' }}>
            Presly<span style={{ color: '#22d3ee' }}>.</span>Mpofu
          </span>
        </a>

        {/* Desktop nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }} className="hidden-mobile">
          {navItems.map(item => (
            <button
              key={item.href}
              onClick={() => handleNav(item.href)}
              className={`nav-link${active === item.href ? ' active' : ''}`}
              aria-current={active === item.href ? 'true' : undefined}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.25rem 0', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.85rem' }}
            >
              {item.label}
            </button>
          ))}
          <a href="https://www.linkedin.com/in/presly-mpofu-6864a2272" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="nav-social">
            <LinkedinIcon size={16} />
          </a>
          <a href="https://github.com/preslympofu7002-commits" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="nav-social">
            <GithubIcon size={16} />
          </a>
          <a href="resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '0.55rem 1.1rem', fontSize: '0.8rem' }}>
            <Download size={14} />
            Resume
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '10px',
            color: 'white',
            cursor: 'pointer',
            padding: '0.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          className="show-mobile"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="mobile-drawer" style={{
          position: 'absolute',
          top: '72px',
          left: 0,
          right: 0,
          background: 'rgba(2,8,24,0.97)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          padding: '0.5rem 1.5rem 1.5rem',
          maxHeight: 'calc(100vh - 72px)',
          overflowY: 'auto',
        }}>
          {navItems.map((item, i) => (
            <button
              key={item.href}
              onClick={() => handleNav(item.href)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                textAlign: 'left',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0.9rem 0.25rem',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.9rem',
                color: active === item.href ? '#22d3ee' : 'rgba(255,255,255,0.7)',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
              }}
            >
              <span>{item.label}</span>
              <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.25)' }}>0{i + 1}</span>
            </button>
          ))}
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.25rem' }}>
            <a href="https://www.linkedin.com/in/presly-mpofu-6864a2272" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="nav-social" style={{ width: '44px', height: '44px' }}>
              <LinkedinIcon size={18} />
            </a>
            <a href="https://github.com/preslympofu7002-commits" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="nav-social" style={{ width: '44px', height: '44px' }}>
              <GithubIcon size={18} />
            </a>
            <a href="resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ flex: 1, justifyContent: 'center' }}>
              <Download size={15} />
              Download Resume
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 900px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
        @media (max-width: 899px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        .nav-social {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.12);
          color: rgba(255,255,255,0.55);
          transition: all 0.2s ease;
          text-decoration: none;
        }
        .nav-social:hover {
          border-color: rgba(34,211,238,0.5);
          color: #22d3ee;
          background: rgba(34,211,238,0.08);
        }
      `}</style>
    </header>
  );
};

export default Navbar;
