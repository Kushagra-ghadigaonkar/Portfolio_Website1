import { useState } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { navLinks } from '@/data/portfolio';
import { useScrollPosition, useActiveSection } from '@/hooks/useScroll';

export default function Navbar() {
  const scrolled = useScrollPosition();
  const [open, setOpen] = useState(false);
  const active = useActiveSection(navLinks.map((l) => l.href.slice(1)));

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ink-950/85 backdrop-blur-md border-b border-ink-700/50'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5 group">
          <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-ink-800 border border-ink-700 group-hover:border-accent-500/50 transition-colors">
            <Terminal className="w-5 h-5 text-accent-400" />
          </span>
          <span className="font-mono text-sm font-semibold text-ink-50">
            alex<span className="text-accent-400">.</span>carter
          </span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-all ${
                  isActive
                    ? 'text-accent-400 bg-accent-500/10'
                    : 'text-ink-300 hover:text-ink-50 hover:bg-ink-800/50'
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href="#contact"
            className="ml-3 px-4 py-2 text-sm font-semibold rounded-lg bg-accent-500 text-ink-950 hover:bg-accent-400 transition-colors"
          >
            Get in Touch
          </a>
        </div>

        <button
          className="md:hidden p-2 text-ink-200 hover:text-ink-50"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-ink-950/95 backdrop-blur-md border-b border-ink-700/50">
          <div className="px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 text-sm font-medium text-ink-200 hover:text-accent-400 rounded-lg hover:bg-ink-800/50"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 px-4 py-2.5 text-sm font-semibold text-center rounded-lg bg-accent-500 text-ink-950"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
