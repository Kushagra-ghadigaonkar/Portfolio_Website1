import { experiences } from '@/data/portfolio';
import SectionHeading from './SectionHeading';
import { useReveal } from '@/hooks/useScroll';
import { Briefcase, MapPin, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  const { ref, visible } = useReveal();

  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="section-container" ref={ref}>
        <div className={visible ? 'reveal visible' : 'reveal'}>
          <SectionHeading
            eyebrow="// experience"
            title="Career Timeline"
            description="A track record of building and scaling infrastructure at high-growth companies."
          />
        </div>

        <div className="mt-16 relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-500/40 via-ink-700 to-transparent md:-translate-x-px" />

          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`relative mb-12 last:mb-0 ${visible ? 'reveal visible' : 'reveal'}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className={`md:flex md:items-start ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-1/2 md:px-8">
                  <div className="glass-card p-6 hover:border-accent-500/30 transition-all">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="font-display text-lg font-semibold text-ink-50">{exp.role}</h3>
                        <p className="text-accent-400 text-sm font-mono">{exp.company}</p>
                      </div>
                      <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-ink-800 border border-ink-700/50 shrink-0">
                        <Briefcase className="w-5 h-5 text-ink-300" />
                      </span>
                    </div>

                    <div className="flex items-center gap-4 text-xs font-mono text-ink-400 mb-4">
                      <span>{exp.period}</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>

                    <p className="text-sm text-ink-300 mb-4 leading-relaxed">{exp.description}</p>

                    <ul className="space-y-2 mb-4">
                      {exp.achievements.map((achievement, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-ink-200">
                          <CheckCircle2 className="w-4 h-4 text-accent-400 shrink-0 mt-0.5" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 text-xs font-mono rounded-md bg-ink-800/80 border border-ink-700/50 text-ink-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="hidden md:block md:w-1/2" />

                <div className="absolute left-4 md:left-1/2 top-6 w-3 h-3 rounded-full bg-accent-500 border-2 border-ink-950 md:-translate-x-1.5 ring-4 ring-accent-500/20" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
