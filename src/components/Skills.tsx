import { useEffect, useState } from 'react';
import { skillCategories, techStack, dashboardMetrics } from '@/data/portfolio';
import type { SkillCategory } from '@/data/portfolio';
import SectionHeading from './SectionHeading';
import { useReveal } from '@/hooks/useScroll';

function CircularProgress({
  value,
  accent,
  size = 120,
  stroke = 8,
  visible,
}: {
  value: number;
  accent: string;
  size?: number;
  stroke?: number;
  visible: boolean;
}) {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    if (!visible) return;
    let frame: number;
    const start = performance.now();
    const duration = 1200;
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setAnimatedValue(Math.round(eased * value));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [visible, value]);

  const offset = circumference - (animatedValue / 100) * circumference;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgba(61,81,112,0.25)"
          strokeWidth={stroke}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={accent}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ filter: `drop-shadow(0 0 6px ${accent}40)` }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-display text-2xl font-bold text-ink-50">{animatedValue}%</span>
        <span className="font-mono text-[10px] text-ink-400 mt-0.5">overall</span>
      </div>
    </div>
  );
}

function CategoryCard({
  category,
  visible,
  delay,
}: {
  category: SkillCategory;
  visible: boolean;
  delay: number;
}) {
  const Icon = category.icon;
  return (
    <div
      className={`glass-card p-5 group hover:border-accent-500/30 transition-all duration-300 hover:-translate-y-1 ${visible ? 'reveal visible' : 'reveal'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-4 mb-5">
        <CircularProgress
          value={category.overall}
          accent={category.accent}
          size={88}
          stroke={6}
          visible={visible}
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <Icon className={`w-4 h-4 ${category.color}`} />
            <h3 className="font-display font-semibold text-sm text-ink-50 truncate">
              {category.title}
            </h3>
          </div>
          <p className="font-mono text-xs text-ink-400">
            {category.skills.length} tools
          </p>
        </div>
      </div>

      <div className="space-y-2.5">
        {category.skills.map((skill) => (
          <div key={skill.name} className="flex items-center gap-3">
            <span className="text-xs text-ink-200 w-24 shrink-0 truncate">{skill.name}</span>
            <div className="flex-1 h-1.5 rounded-full bg-ink-800 overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-1000 ease-out"
                style={{
                  width: visible ? `${skill.level}%` : '0%',
                  backgroundColor: category.accent,
                }}
              />
            </div>
            <span className="text-[10px] font-mono text-ink-500 w-8 text-right">{skill.level}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const levelConfig = {
  expert: { label: 'Expert', color: 'text-accent-400', dot: 'bg-accent-500', border: 'border-accent-500/30 bg-accent-500/5' },
  advanced: { label: 'Advanced', color: 'text-cyan-400', dot: 'bg-cyan-500', border: 'border-cyan-500/30 bg-cyan-500/5' },
  proficient: { label: 'Proficient', color: 'text-amber-400', dot: 'bg-amber-500', border: 'border-amber-500/30 bg-amber-500/5' },
};

export default function Skills() {
  const { ref, visible } = useReveal();

  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="section-container relative" ref={ref}>
        <div className={visible ? 'reveal visible' : 'reveal'}>
          <SectionHeading
            eyebrow="// skills"
            title="Technical Expertise Dashboard"
            description="A real-time view of platform proficiency across cloud, containers, automation, and observability."
          />
        </div>

        {/* Dashboard Metrics Bar */}
        <div className={`mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 ${visible ? 'reveal visible' : 'reveal'}`} style={{ transitionDelay: '80ms' }}>
          {dashboardMetrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <div key={metric.label} className="glass-card p-4 flex items-center gap-3">
                <span
                  className="flex items-center justify-center w-10 h-10 rounded-lg shrink-0"
                  style={{ backgroundColor: `${metric.accent}15`, border: `1px solid ${metric.accent}30` }}
                >
                  <Icon className="w-5 h-5" style={{ color: metric.accent }} />
                </span>
                <div>
                  <div className="font-display text-xl font-bold text-ink-50">
                    {metric.value}<span className="text-sm text-ink-400">{metric.suffix}</span>
                  </div>
                  <div className="font-mono text-[10px] text-ink-400">{metric.label}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Category Cards with Circular Gauges */}
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((category, i) => (
            <CategoryCard
              key={category.title}
              category={category}
              visible={visible}
              delay={i * 80}
            />
          ))}
        </div>

        {/* Tech Stack Matrix */}
        <div className={`mt-6 glass-card p-6 ${visible ? 'reveal visible' : 'reveal'}`} style={{ transitionDelay: '500ms' }}>
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-display font-semibold text-ink-50 text-sm">Technology Stack</h3>
            <div className="flex items-center gap-4">
              {(Object.keys(levelConfig) as (keyof typeof levelConfig)[]).map((level) => (
                <div key={level} className="flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full ${levelConfig[level].dot}`} />
                  <span className={`font-mono text-[10px] ${levelConfig[level].color}`}>{levelConfig[level].label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {techStack.map((tool) => {
              const cfg = levelConfig[tool.level];
              return (
                <div
                  key={tool.name}
                  className={`px-3 py-1.5 rounded-lg border ${cfg.border} transition-all hover:scale-105 cursor-default`}
                >
                  <div className="flex items-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
                    <span className="text-xs font-medium text-ink-100">{tool.name}</span>
                    <span className="font-mono text-[9px] text-ink-500">{tool.category}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
