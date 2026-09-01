import { projects } from '@/data/portfolio';
import SectionHeading from './SectionHeading';
import { useReveal } from '@/hooks/useScroll';
import { ArrowUpRight } from 'lucide-react';

export default function Projects() {
  const { ref, visible } = useReveal();

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="section-container relative" ref={ref}>
        <div className={visible ? 'reveal visible' : 'reveal'}>
          <SectionHeading
            eyebrow="// projects"
            title="Open Source & Tools"
            description="Side projects and open-source contributions that solve real infrastructure problems."
          />
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-5">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <div
                key={project.name}
                className={`glass-card p-6 group hover:border-accent-500/30 transition-all duration-300 hover:-translate-y-1 ${visible ? 'reveal visible' : 'reveal'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-ink-800/80 border border-ink-700/50 group-hover:border-accent-500/40 group-hover:bg-accent-500/10 transition-all">
                    <Icon className="w-6 h-6 text-accent-400 group-hover:scale-110 transition-transform" />
                  </span>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink-500 hover:text-accent-400 transition-colors"
                    aria-label={`View ${project.name}`}
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>

                <h3 className="font-display text-xl font-semibold text-ink-50 mb-2 group-hover:text-accent-400 transition-colors">
                  {project.name}
                </h3>
                <p className="text-sm text-ink-300 leading-relaxed mb-4">{project.description}</p>

                <ul className="space-y-1.5 mb-4">
                  {project.highlights.map((h, j) => (
                    <li key={j} className="flex items-center gap-2 text-xs text-ink-400">
                      <span className="w-1 h-1 rounded-full bg-accent-400" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-mono rounded-md bg-ink-800/80 border border-ink-700/50 text-ink-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
