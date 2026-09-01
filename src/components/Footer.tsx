import { Terminal, Github, Linkedin, Mail } from 'lucide-react';
import { profile, navLinks } from '@/data/portfolio';

export default function Footer() {
  return (
    <footer className="border-t border-ink-700/50 bg-ink-950">
      <div className="section-container py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-ink-800 border border-ink-700/50">
              <Terminal className="w-5 h-5 text-accent-400" />
            </span>
            <div>
              <div className="font-mono text-sm font-semibold text-ink-50">
                alex<span className="text-accent-400">.</span>carter
              </div>
              <div className="text-xs text-ink-500 font-mono">{profile.role}</div>
            </div>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-mono text-ink-400 hover:text-accent-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-ink-500 hover:text-accent-400 transition-colors" aria-label="GitHub">
              <Github className="w-4.5 h-4.5" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-ink-500 hover:text-accent-400 transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-4.5 h-4.5" />
            </a>
            <a href={`mailto:${profile.email}`} className="text-ink-500 hover:text-accent-400 transition-colors" aria-label="Email">
              <Mail className="w-4.5 h-4.5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-ink-800/50 text-center">
          <p className="text-xs font-mono text-ink-500">
            © {new Date().getFullYear()} {profile.name}. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
