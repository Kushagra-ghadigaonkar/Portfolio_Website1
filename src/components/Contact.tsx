import { useState } from 'react';
import { profile } from '@/data/portfolio';
import { useReveal } from '@/hooks/useScroll';
import { Github, Linkedin, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const { ref, visible } = useReveal();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="section-container relative" ref={ref}>
        <div className={visible ? 'reveal visible' : 'reveal'}>
          <div className="text-center max-w-2xl mx-auto">
            <div className="flex items-center gap-3 mb-4 justify-center">
              <span className="font-mono text-sm text-accent-400">// contact</span>
              <span className="h-px w-12 bg-gradient-to-r from-accent-400 to-transparent" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink-50 tracking-tight">
              Let's Build Something Reliable
            </h2>
            <p className="mt-4 text-ink-300 text-base md:text-lg leading-relaxed">
              Whether you need to scale your infrastructure, automate your pipelines, or improve reliability — I'd love to talk.
            </p>
          </div>
        </div>

        <div className={`mt-16 grid lg:grid-cols-2 gap-8 ${visible ? 'reveal visible' : 'reveal'}`} style={{ transitionDelay: '150ms' }}>
          <div className="space-y-4">
            <a
              href={`mailto:${profile.email}`}
              className="glass-card p-5 flex items-center gap-4 hover:border-accent-500/30 transition-all group"
            >
              <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-ink-800/80 border border-ink-700/50 group-hover:border-accent-500/30 transition-colors">
                <Mail className="w-5 h-5 text-accent-400" />
              </span>
              <div>
                <div className="text-xs font-mono text-ink-400">Email</div>
                <div className="text-sm text-ink-100 font-medium">{profile.email}</div>
              </div>
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-5 flex items-center gap-4 hover:border-accent-500/30 transition-all group"
            >
              <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-ink-800/80 border border-ink-700/50 group-hover:border-accent-500/30 transition-colors">
                <Github className="w-5 h-5 text-accent-400" />
              </span>
              <div>
                <div className="text-xs font-mono text-ink-400">GitHub</div>
                <div className="text-sm text-ink-100 font-medium">github.com/alexcarter</div>
              </div>
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-5 flex items-center gap-4 hover:border-accent-500/30 transition-all group"
            >
              <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-ink-800/80 border border-ink-700/50 group-hover:border-accent-500/30 transition-colors">
                <Linkedin className="w-5 h-5 text-accent-400" />
              </span>
              <div>
                <div className="text-xs font-mono text-ink-400">LinkedIn</div>
                <div className="text-sm text-ink-100 font-medium">linkedin.com/in/alexcarter</div>
              </div>
            </a>

            <div className="glass-card p-5 flex items-center gap-4">
              <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-ink-800/80 border border-ink-700/50">
                <MapPin className="w-5 h-5 text-accent-400" />
              </span>
              <div>
                <div className="text-xs font-mono text-ink-400">Location</div>
                <div className="text-sm text-ink-100 font-medium">{profile.location}</div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="glass-card p-6 space-y-4">
            <div>
              <label className="block text-xs font-mono text-ink-400 mb-2">Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-ink-800/60 border border-ink-700/50 text-ink-100 text-sm placeholder:text-ink-500 focus:border-accent-500/50 focus:outline-none focus:ring-1 focus:ring-accent-500/30 transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-ink-400 mb-2">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-ink-800/60 border border-ink-700/50 text-ink-100 text-sm placeholder:text-ink-500 focus:border-accent-500/50 focus:outline-none focus:ring-1 focus:ring-accent-500/30 transition-colors"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-ink-400 mb-2">Message</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-ink-800/60 border border-ink-700/50 text-ink-100 text-sm placeholder:text-ink-500 focus:border-accent-500/50 focus:outline-none focus:ring-1 focus:ring-accent-500/30 transition-colors resize-none"
                placeholder="Tell me about your project or role..."
              />
            </div>
            <button
              type="submit"
              disabled={sent}
              className="w-full px-5 py-3 text-sm font-semibold rounded-lg bg-accent-500 text-ink-950 hover:bg-accent-400 transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {sent ? (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  Message Sent
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
