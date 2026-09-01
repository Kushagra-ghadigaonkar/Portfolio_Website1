import type { ReactNode } from 'react';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <div className={align === 'center' ? 'text-center max-w-2xl mx-auto' : 'max-w-2xl'}>
      <div className={`flex items-center gap-3 mb-4 ${align === 'center' ? 'justify-center' : ''}`}>
        <span className="font-mono text-sm text-accent-400">{eyebrow}</span>
        <span className="h-px w-12 bg-gradient-to-r from-accent-400 to-transparent" />
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-ink-50 tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-ink-300 text-base md:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

export function RevealWrapper({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <div
      className="reveal"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
