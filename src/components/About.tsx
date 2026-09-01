import { profile, stats } from '@/data/portfolio';
import SectionHeading from './SectionHeading';
import { useReveal } from '@/hooks/useScroll';

export default function About() {
  const { ref, visible } = useReveal();

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="section-container" ref={ref}>
        <div className={visible ? 'reveal visible' : 'reveal'}>
          <SectionHeading
            eyebrow="// about"
            title="About Me"
            description={profile.bio}
          />
        </div>

        <div className={`mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 ${visible ? 'reveal visible' : 'reveal'}`} style={{ transitionDelay: '150ms' }}>
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass-card p-6 text-center group hover:border-accent-500/30 transition-all hover:-translate-y-1"
            >
              <div className="font-display text-3xl md:text-4xl font-bold text-gradient">
                {stat.value}
              </div>
              <div className="mt-2 text-xs md:text-sm text-ink-400 font-mono">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
