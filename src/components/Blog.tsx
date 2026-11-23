import React from 'react';
import { blogPosts, blogCategories } from '../data/blog';
import { Clock, ArrowRight, PenLine } from 'lucide-react';

const Blog: React.FC = () => {
  const published = blogPosts.filter(p => p.published);

  return (
    <section id="blog" style={{ padding: '6rem 1.5rem', background: '#060f2a', position: 'relative' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '3rem' }}>
          <span className="section-label">// 09. Thoughts</span>
          <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem' }}>
            Knowledge Sharing
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', color: 'rgba(255,255,255,0.5)', maxWidth: '580px', lineHeight: 1.7 }}>
            Short articles and reflections on AI, machine learning, software engineering, technology entrepreneurship and lessons from building Afrim Technologies.
          </p>
        </div>

        {published.length === 0 ? (
          <div style={{
            background: 'rgba(255,255,255,0.025)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '20px',
            padding: '4rem',
            textAlign: 'center',
          }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <PenLine size={48} color="rgba(34,211,238,0.3)" style={{ margin: '0 auto' }} />
            </div>
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '1.35rem', color: 'rgba(255,255,255,0.7)', marginBottom: '0.75rem' }}>
              Articles coming soon
            </h3>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', color: 'rgba(255,255,255,0.4)', maxWidth: '480px', margin: '0 auto 2rem', lineHeight: 1.7 }}>
              I am preparing technical articles and reflections about my AI/ML learning journey, software development experiences and insights from building Afrim Technologies.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
              {blogCategories.slice(1).map(cat => (
                <span key={cat} style={{
                  fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem',
                  padding: '0.3rem 0.75rem', borderRadius: '9999px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'rgba(255,255,255,0.4)',
                }}>
                  {cat}
                </span>
              ))}
            </div>
            <p style={{ marginTop: '2rem', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem', color: 'rgba(255,255,255,0.25)' }}>
              Add articles to <code style={{ color: '#22d3ee' }}>src/data/blog.ts</code> to publish them here.
            </p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {published.map(post => (
              <article key={post.id} style={{
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '16px',
                padding: '2rem',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(34,211,238,0.2)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)'; (e.currentTarget as HTMLElement).style.transform = 'none'; }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{
                    fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem',
                    padding: '0.2rem 0.5rem', borderRadius: '4px',
                    background: 'rgba(34,211,238,0.1)', color: '#22d3ee',
                  }}>
                    {post.category}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: 'rgba(255,255,255,0.3)', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem' }}>
                    <Clock size={11} />
                    {post.readTime}
                  </div>
                </div>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: '1.1rem', color: 'white', marginBottom: '0.75rem', lineHeight: 1.4 }}>
                  {post.title}
                </h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                  {post.excerpt}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                  {post.tags.map(tag => (
                    <span key={tag} className="tech-tag" style={{ fontSize: '0.65rem' }}>{tag}</span>
                  ))}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#22d3ee', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.78rem' }}>
                  Read more <ArrowRight size={13} />
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
