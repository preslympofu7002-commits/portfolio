import React, { useState } from 'react';
import { Mail, Send, MapPin, AlertCircle, ExternalLink, Phone, Globe } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';
import Reveal from './Reveal';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitting, setSubmitting] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!form.subject.trim()) newErrors.subject = 'Subject is required';
    if (!form.message.trim() || form.message.trim().length < 15) {
      newErrors.message = 'Message must be at least 15 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);

    // Direct mailto fallback that seamlessly launches user email client
    const mailtoUri = `mailto:preslympofu7002@gmail.com?cc=preslympofu@outlook.com&subject=${encodeURIComponent(
      `[Portfolio Inquiry] ${form.subject}`
    )}&body=${encodeURIComponent(`From: ${form.name} (${form.email})\n\n${form.message}`)}`;

    window.open(mailtoUri, '_blank');
    setSubmitting(false);
    setSentSuccess(true);
  };

  const field = (name: keyof FormState, label: string, type = 'text', isTextarea = false) => (
    <div>
      <label style={{ display: 'block', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem', color: 'rgba(255,255,255,0.6)', marginBottom: '0.45rem', letterSpacing: '0.08em' }}>
        {label}
      </label>
      {isTextarea ? (
        <textarea
          name={name}
          value={form[name]}
          onChange={e => { setForm({ ...form, [name]: e.target.value }); if (errors[name]) setErrors({ ...errors, [name]: undefined }); }}
          rows={5}
          style={{
            width: '100%', background: 'rgba(255,255,255,0.03)', border: `1px solid ${errors[name] ? '#f87171' : 'rgba(255,255,255,0.12)'}`,
            borderRadius: '10px', padding: '0.875rem 1rem', color: 'white',
            fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', outline: 'none',
            resize: 'vertical', transition: 'border-color 0.2s ease',
          }}
          onFocus={e => (e.target as HTMLElement).style.borderColor = '#22d3ee'}
          onBlur={e => (e.target as HTMLElement).style.borderColor = errors[name] ? '#f87171' : 'rgba(255,255,255,0.12)'}
          placeholder={`Your ${label.toLowerCase()}...`}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={form[name]}
          onChange={e => { setForm({ ...form, [name]: e.target.value }); if (errors[name]) setErrors({ ...errors, [name]: undefined }); }}
          style={{
            width: '100%', background: 'rgba(255,255,255,0.03)', border: `1px solid ${errors[name] ? '#f87171' : 'rgba(255,255,255,0.12)'}`,
            borderRadius: '10px', padding: '0.875rem 1rem', color: 'white',
            fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', outline: 'none',
            transition: 'border-color 0.2s ease',
          }}
          onFocus={e => (e.target as HTMLElement).style.borderColor = '#22d3ee'}
          onBlur={e => (e.target as HTMLElement).style.borderColor = errors[name] ? '#f87171' : 'rgba(255,255,255,0.12)'}
          placeholder={`Your ${label.toLowerCase()}...`}
        />
      )}
      {errors[name] && (
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.78rem', color: '#f87171', marginTop: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
          <AlertCircle size={12} /> {errors[name]}
        </p>
      )}
    </div>
  );

  return (
    <section id="contact" className="section" style={{ paddingBottom: '5rem' }}>
      <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.3 }} aria-hidden="true" />
      <div style={{
        position: 'absolute', bottom: '-100px', left: '50%', transform: 'translateX(-50%)',
        width: '600px', height: '300px', borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(34,211,238,0.06) 0%, transparent 70%)',
      }} aria-hidden="true" />

      <div className="container" style={{ position: 'relative' }}>
        {/* Header */}
        <Reveal style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-label" style={{ display: 'block', textAlign: 'center' }}>// 08. Contact</span>
          <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem' }}>
            Have an idea worth building?{' '}
            <span style={{ background: 'linear-gradient(135deg, #22d3ee, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Let's connect.
            </span>
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', color: 'rgba(255,255,255,0.6)', maxWidth: '580px', margin: '0 auto', lineHeight: 1.7 }}>
            Open to software engineering collaborations, AI/ML research inquiries, venture discussions, and opportunities worldwide.
          </p>
        </Reveal>

        <div style={{ display: 'grid', gap: '3rem', alignItems: 'start' }} className="contact-grid">
          {/* Left: Info */}
          <div>
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '1.25rem', color: 'white', marginBottom: '1.5rem' }}>
              Direct Contact & Links
            </h3>

            {[
              {
                icon: <Mail size={18} />,
                label: 'Primary Email',
                value: 'preslympofu7002@gmail.com',
                href: 'mailto:preslympofu7002@gmail.com',
                color: '#22d3ee',
              },
              {
                icon: <Mail size={18} />,
                label: 'Secondary Email',
                value: 'preslympofu@outlook.com',
                href: 'mailto:preslympofu@outlook.com',
                color: '#60a5fa',
              },
              {
                icon: <Phone size={18} />,
                label: 'Phone (India)',
                value: '+91 8148152869',
                href: 'tel:+918148152869',
                color: '#34d399',
              },
              {
                icon: <Phone size={18} />,
                label: 'Phone (Zimbabwe)',
                value: '+263 716 610 169',
                href: 'tel:+263716610169',
                color: '#fbbf24',
              },
              {
                icon: <Globe size={18} />,
                label: 'Afrim Marketplace (Live)',
                value: 'afrim.co.zw',
                href: 'https://afrim.co.zw',
                color: '#22d3ee',
                highlight: true,
              },
              {
                icon: <LinkedinIcon size={18} />,
                label: 'LinkedIn Profile',
                value: 'linkedin.com/in/presly-mpofu-6864a2272',
                href: 'https://www.linkedin.com/in/presly-mpofu-6864a2272',
                color: '#0a66c2',
              },
              {
                icon: <GithubIcon size={18} />,
                label: 'GitHub Profile',
                value: 'github.com/preslympofu7002-commits',
                href: 'https://github.com/preslympofu7002-commits',
                color: '#a78bfa',
              },
              {
                icon: <MapPin size={18} />,
                label: 'Academic Base & Location',
                value: 'KPRIET, Tamil Nadu, India · Bulawayo, Zimbabwe',
                color: '#f97316',
              },
            ].map(item => (
              <div key={item.label} style={{
                display: 'flex', gap: '0.85rem', alignItems: 'flex-start',
                padding: '1rem 1.15rem',
                background: item.highlight ? 'rgba(34,211,238,0.06)' : 'rgba(255,255,255,0.025)',
                border: `1px solid ${item.highlight ? 'rgba(34,211,238,0.35)' : 'rgba(255,255,255,0.07)'}`,
                borderRadius: '12px',
                marginBottom: '0.65rem',
                transition: 'all 0.2s ease',
              }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = `${item.color}45`}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = item.highlight ? 'rgba(34,211,238,0.35)' : 'rgba(255,255,255,0.07)'}
              >
                <div style={{
                  width: '38px', height: '38px', borderRadius: '10px', flexShrink: 0,
                  background: `${item.color}14`, border: `1px solid ${item.color}25`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', color: item.color,
                }}>
                  {item.icon}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.08em', textTransform: 'uppercase', margin: '0 0 0.15rem' }}>
                    {item.label}
                  </p>
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.875rem', color: item.highlight ? '#22d3ee' : 'rgba(255,255,255,0.85)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.35rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
                    >
                      {item.value} <ExternalLink size={12} style={{ flexShrink: 0 }} />
                    </a>
                  ) : (
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.875rem', color: 'rgba(255,255,255,0.85)', margin: 0 }}>{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right: Form */}
          <div>
            <div style={{
              background: 'rgba(255,255,255,0.025)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '20px',
              padding: '2.5rem',
            }}>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '1.25rem', color: 'white', marginBottom: '0.5rem' }}>
                Send a Direct Message
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', marginBottom: '1.75rem', lineHeight: 1.6 }}>
                Messages are directly delivered to <strong>preslympofu7002@gmail.com</strong> and <strong>preslympofu@outlook.com</strong>.
              </p>

              {sentSuccess ? (
                <div style={{
                  background: 'rgba(52,211,153,0.1)',
                  border: '1px solid rgba(52,211,153,0.3)',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  textAlign: 'center',
                }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>✉️</div>
                  <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: '#34d399', marginBottom: '0.35rem' }}>
                    Email Client Launched
                  </h4>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: '1rem' }}>
                    Your default mail application has been prepared with your message addressed to Presly Mpofu.
                  </p>
                  <button
                    onClick={() => { setSentSuccess(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                    style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', color: '#22d3ee', background: 'none', border: 'none', cursor: 'pointer' }}
                  >
                    ← Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                    {field('name', 'Your Name')}
                    {field('email', 'Email Address', 'email')}
                  </div>
                  {field('subject', 'Subject')}
                  {field('message', 'Message', 'text', true)}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary"
                    style={{ alignSelf: 'flex-start', opacity: submitting ? 0.7 : 1, cursor: submitting ? 'not-allowed' : 'pointer' }}
                  >
                    {submitting ? 'Preparing...' : 'Send Message'}
                    {!submitting && <Send size={15} />}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (min-width: 900px) {
          .contact-grid { grid-template-columns: 1fr 1.3fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
