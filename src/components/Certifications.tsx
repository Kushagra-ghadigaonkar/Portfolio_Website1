import { certifications } from '@/data/portfolio';
import SectionHeading from './SectionHeading';
import { useReveal } from '@/hooks/useScroll';
import { Award } from 'lucide-react';

export default function Certifications() {
  const { ref, visible } = useReveal();

  return (
    <section id="certifications" className="py-24 md:py-32 relative">
      <div className="section-container" ref={ref}>
        <div className={visible ? 'reveal visible' : 'reveal'}>
          <SectionHeading
            eyebrow="// certifications"
            title="Certifications"
            description="Industry-recognized credentials validating deep platform and cloud expertise."
          />
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => {
            const Icon = cert.icon;
            return (
              <div
                key={cert.name}
                className={`glass-card p-5 flex items-start gap-4 group hover:border-accent-500/30 transition-all duration-300 hover:-translate-y-1 ${visible ? 'reveal visible' : 'reveal'}`}
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500/15 to-cyan-500/10 border border-accent-500/20 shrink-0">
                  <Icon className="w-6 h-6 text-accent-400" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-semibold text-sm text-ink-50 leading-snug mb-1">
                    {cert.name}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-ink-400">
                    <span className="font-mono">{cert.issuer}</span>
                    <span className="w-1 h-1 rounded-full bg-ink-600" />
                    <span className="font-mono">{cert.year}</span>
                  </div>
                </div>
                <Award className="w-4 h-4 text-amber-400/60 shrink-0 ml-auto" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
