import React, { useEffect, useRef, useState } from 'react';

type RevealVariant = 'up' | 'left' | 'right' | 'scale';

interface RevealProps {
  children: React.ReactNode;
  variant?: RevealVariant;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}

const variantClass: Record<RevealVariant, string> = {
  up: 'reveal',
  left: 'reveal reveal-left',
  right: 'reveal reveal-right',
  scale: 'reveal reveal-scale',
};

const Reveal: React.FC<RevealProps> = ({
  children,
  variant = 'up',
  delay = 0,
  className = '',
  style,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const combinedStyle: React.CSSProperties = {
    ...style,
    ...(delay ? ({ '--reveal-delay': `${delay}ms` } as React.CSSProperties) : {}),
  };

  return (
    <div
      ref={ref}
      className={`${variantClass[variant]} ${visible ? 'is-visible' : ''} ${className}`}
      style={combinedStyle}
    >
      {children}
    </div>
  );
};

export default Reveal;
