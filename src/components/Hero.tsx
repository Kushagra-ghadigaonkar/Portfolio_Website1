import { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { profile, terminalLines } from '@/data/portfolio';

const PHOTO_URL = 'https://images.pexels.com/photos/5483147/pexels-photo-5483147.jpeg?auto=compress&cs=tinysrgb&w=600';

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    if (visibleLines >= terminalLines.length) return;

    const line = terminalLines[visibleLines];
    if (line.type === 'prompt') {
      setTypedText('');
      let i = 0;
      const interval = setInterval(() => {
        i++;
        setTypedText(line.text.slice(0, i));
        if (i >= line.text.length) {
          clearInterval(interval);
          setTimeout(() => {
            setVisibleLines((v) => v + 1);
          }, 400);
        }
      }, 45);
      return () => clearInterval(interval);
    } else {
      const timeout = setTimeout(() => {
        setVisibleLines((v) => v + 1);
      }, 200);
      return () => clearTimeout(timeout);
    }
  }, [visibleLines]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink-950/50 to-ink-950" />

      <div className="section-container relative z-10 grid lg:grid-cols-2 gap-12 items-center py-20">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-ink-800/60 border border-ink-700/50 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500" />
            </span>
            <span className="text-xs font-mono text-ink-300">Available for new opportunities</span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-ink-50 leading-[1.1]">
            {profile.name}
          </h1>
          <p className="mt-3 text-xl md:text-2xl font-mono text-accent-400">
            {profile.role}
          </p>
          <p className="mt-6 text-base md:text-lg text-ink-300 leading-relaxed max-w-xl">
            {profile.tagline}
          </p>

          <div className="mt-5 flex items-center gap-2 text-sm text-ink-400 font-mono">
            <MapPin className="w-4 h-4 text-ink-500" />
            {profile.location}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="px-5 py-3 text-sm font-semibold rounded-lg bg-accent-500 text-ink-950 hover:bg-accent-400 transition-colors shadow-lg shadow-accent-500/20"
            >
              Let's Connect
            </a>
            <a
              href="#projects"
              className="px-5 py-3 text-sm font-semibold rounded-lg border border-ink-600 text-ink-100 hover:border-accent-500/50 hover:text-accent-400 transition-colors"
            >
              View Projects
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-ink-400 hover:text-accent-400 transition-colors" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-ink-400 hover:text-accent-400 transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href={`mailto:${profile.email}`} className="text-ink-400 hover:text-accent-400 transition-colors" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="animate-fade-in-up flex flex-col gap-5" style={{ animationDelay: '0.2s' }}>
          {/* Photo */}
          <div className="relative group mx-auto w-full max-w-sm">
            <div className="absolute -inset-0.5 bg-gradient-to-br from-accent-500/30 via-cyan-400/20 to-transparent rounded-2xl blur-sm group-hover:blur-md transition-all duration-300" />
            <div className="relative glass-card rounded-2xl overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={PHOTO_URL}
                  alt="Alex Carter — DevOps Engineer"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                <div>
                  <div className="font-display text-sm font-semibold text-ink-50">{profile.name}</div>
                  <div className="font-mono text-xs text-accent-400">{profile.role}</div>
                </div>
                <span className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-ink-950/70 backdrop-blur-sm border border-ink-700/50">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent-500" />
                  </span>
                  <span className="font-mono text-[10px] text-ink-300">online</span>
                </span>
              </div>
            </div>
          </div>

          {/* Terminal */}
          <div className="glass-card overflow-hidden shadow-xl shadow-ink-950/50">
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-ink-700/50 bg-ink-800/40">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-amber-500/70" />
                <span className="w-3 h-3 rounded-full bg-accent-500/70" />
              </div>
              <span className="ml-2 font-mono text-xs text-ink-400">alex@devops:~</span>
            </div>
            <div className="p-4 font-mono text-xs md:text-sm min-h-[160px] space-y-1.5">
              {terminalLines.slice(0, visibleLines).map((line, i) => (
                <div key={i} className="leading-relaxed">
                  {line.type === 'prompt' ? (
                    <div className="flex gap-2">
                      <span className="text-accent-400">$</span>
                      <span className="text-ink-100">{line.text}</span>
                    </div>
                  ) : (
                    <div className="text-ink-300 pl-4">{line.text}</div>
                  )}
                </div>
              ))}
              {visibleLines < terminalLines.length && terminalLines[visibleLines]?.type === 'prompt' && (
                <div className="flex gap-2">
                  <span className="text-accent-400">$</span>
                  <span className="text-ink-100">{typedText}</span>
                  <span className="w-2 h-4 bg-accent-400 animate-blink inline-block" />
                </div>
              )}
              {visibleLines >= terminalLines.length && (
                <div className="flex gap-2 pt-2">
                  <span className="text-accent-400">$</span>
                  <span className="w-2 h-4 bg-accent-400 animate-blink inline-block" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-ink-500 hover:text-accent-400 transition-colors animate-float"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-6 h-6" />
      </a>
    </section>
  );
}
