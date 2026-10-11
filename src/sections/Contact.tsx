import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { personalData } from '../data/personal';
import {
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  ExternalLink,
  MessageSquare,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';

export const Contact: React.FC = () => {
  const { contact } = personalData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please provide a subject.';
    if (!formData.message.trim()) {
      errs.message = 'Please enter a brief message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Use direct mailto fallback so user gets a real email sent
    const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject}`);
    const mailtoBody = encodeURIComponent(
      `Hello Sartaj,\n\n${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`
    );
    window.location.href = `mailto:${contact.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setSubmitted(true);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="GET IN TOUCH"
          title="Have an Idea? Let's Build It."
          subtitle="I'm always interested in connecting with developers, exploring innovative ideas, collaborating on challenging projects, and discussing opportunities in software engineering, AI, and blockchain."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-zinc-800 space-y-6">
              <h3 className="text-xl font-bold text-white mb-2">
                Contact Information
              </h3>
              <p className="text-sm text-zinc-400 font-light leading-relaxed">
                Feel free to reach out via direct email, connect on LinkedIn, or inspect my repositories on GitHub.
              </p>

              {/* Direct channels */}
              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-900/70 border border-zinc-800">
                  <div className="flex items-center gap-3 truncate">
                    <div className="p-2 rounded-lg bg-blue-500/10 text-cyan-400">
                      <Mail size={18} />
                    </div>
                    <div className="truncate">
                      <div className="text-[11px] font-mono text-zinc-400">EMAIL</div>
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-sm font-medium text-zinc-200 hover:text-white transition-colors truncate block"
                      >
                        {contact.email}
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={copyEmail}
                    className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-zinc-200 transition-colors shrink-0 ml-2"
                    title="Copy Email"
                  >
                    {copiedEmail ? (
                      <CheckCircle2 size={16} className="text-emerald-400" />
                    ) : (
                      <Copy size={16} />
                    )}
                  </button>
                </div>

                {/* Location */}
                <div className="flex items-center p-3.5 rounded-xl bg-zinc-900/70 border border-zinc-800 gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-zinc-400">LOCATION</div>
                    <div className="text-sm font-medium text-zinc-200">
                      {contact.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-zinc-800/80 flex flex-col gap-2.5">
                <a
                  href={`mailto:${contact.email}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 transition-all shadow-md"
                >
                  <Mail size={15} />
                  Email Me Directly
                </a>

                <div className="grid grid-cols-2 gap-2.5">
                  <a
                    href={contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-semibold text-zinc-200 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 transition-colors"
                  >
                    <GithubIcon size={15} />
                    GitHub
                    <ExternalLink size={12} className="text-zinc-500" />
                  </a>

                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-semibold text-zinc-200 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 transition-colors"
                  >
                    <LinkedinIcon size={15} className="text-blue-400" />
                    LinkedIn
                    <ExternalLink size={12} className="text-zinc-500" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-zinc-800">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-800/80">
                <div className="flex items-center gap-2">
                  <MessageSquare size={18} className="text-cyan-400" />
                  <h3 className="text-lg font-bold text-white">Send a Message</h3>
                </div>
                <span className="text-[11px] font-mono text-zinc-400">
                  FALLBACK: MAILTO CLIENT
                </span>
              </div>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-start gap-3">
                  <CheckCircle2 size={18} className="shrink-0 mt-0.5 text-emerald-400" />
                  <div>
                    <div className="font-semibold text-sm">Draft Prepared!</div>
                    <div className="mt-1 text-zinc-300">
                      Your default mail client has opened with your message pre-filled. If it did not launch automatically, feel free to email directly to{' '}
                      <span className="font-mono text-cyan-300 font-semibold">{contact.email}</span>.
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-zinc-300 mb-1.5">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Chen"
                      className={`w-full px-4 py-2.5 rounded-xl bg-zinc-900/90 border text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none transition-colors ${
                        errors.name ? 'border-red-500 focus:border-red-400' : 'border-zinc-800 focus:border-blue-500'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-[11px] text-red-400 flex items-center gap-1">
                        <AlertCircle size={11} /> {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-300 mb-1.5">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className={`w-full px-4 py-2.5 rounded-xl bg-zinc-900/90 border text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none transition-colors ${
                        errors.email ? 'border-red-500 focus:border-red-400' : 'border-zinc-800 focus:border-blue-500'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-[11px] text-red-400 flex items-center gap-1">
                        <AlertCircle size={11} /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-300 mb-1.5">
                    SUBJECT / TOPIC *
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Collaboration on AI Agent Project / Hackathon"
                    className={`w-full px-4 py-2.5 rounded-xl bg-zinc-900/90 border text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none transition-colors ${
                      errors.subject ? 'border-red-500 focus:border-red-400' : 'border-zinc-800 focus:border-blue-500'
                    }`}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-[11px] text-red-400 flex items-center gap-1">
                      <AlertCircle size={11} /> {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-300 mb-1.5">
                    MESSAGE *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project, idea, or role opportunity..."
                    className={`w-full px-4 py-2.5 rounded-xl bg-zinc-900/90 border text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none transition-colors ${
                      errors.message ? 'border-red-500 focus:border-red-400' : 'border-zinc-800 focus:border-blue-500'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-[11px] text-red-400 flex items-center gap-1">
                      <AlertCircle size={11} /> {errors.message}
                    </p>
                  )}
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                  <div className="text-[11px] text-zinc-400 font-mono">
                    ✦ Zero tracking · Direct recipient routing
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-lg shadow-blue-500/20 active:scale-95 transition-all"
                  >
                    <Send size={14} />
                    Send Message (via Mailto)
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
