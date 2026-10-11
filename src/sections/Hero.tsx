import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Send,
  Mail,
  Copy,
  Check,
  Code2,
  Shield,
  Bot,
  Layers,
  Sparkles,
  Terminal,
} from 'lucide-react';
import { personalData } from '../data/personal';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';

export const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const roles = personalData.titles;

  // Text animation for roles
  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [roles.length]);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalData.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden"
    >
      {/* Background glowing gradients & tech grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-600/15 via-cyan-500/10 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Availability & Greeting Pill */}
            <div className="flex flex-wrap items-center gap-2.5 mb-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-medium tracking-wide bg-blue-500/10 text-cyan-400 border border-blue-500/20">
                <Sparkles size={13} className="text-cyan-400" />
                {personalData.hero.badge}
              </span>

              {personalData.availability.isOpen && (
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  {personalData.availability.badgeText}
                </span>
              )}
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-5">
              {personalData.hero.headline[0]}
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                {personalData.hero.headline[1]}
              </span>
            </h1>

            {/* Animated Rotating Role Subtitle */}
            <div className="flex items-center gap-2 text-lg sm:text-xl font-mono text-zinc-300 mb-6 h-8">
              <span className="text-zinc-500">&gt;</span>
              <span className="text-zinc-400">role:</span>
              <span
                key={roleIndex}
                className="font-semibold text-cyan-300 transition-all duration-300 inline-block border-b-2 border-cyan-400 pb-0.5"
              >
                {roles[roleIndex]}
              </span>
              <span className="inline-block w-2 h-5 bg-blue-400 animate-pulse" />
            </div>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-zinc-300/90 leading-relaxed max-w-2xl mb-8 font-light">
              {personalData.hero.description}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-9 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => scrollTo('projects')}
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 transition-all shadow-[0_0_24px_rgba(59,130,246,0.35)] hover:shadow-[0_0_32px_rgba(34,211,238,0.5)] active:scale-95"
              >
                Explore My Work
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-zinc-200 bg-zinc-900/80 hover:bg-zinc-800 hover:text-white border border-zinc-800 hover:border-zinc-700 transition-all active:scale-95"
              >
                Let's Connect
                <Send size={15} className="text-cyan-400" />
              </button>
            </div>

            {/* Secondary Social Links & Email copy */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400 pt-6 border-t border-zinc-800/80 w-full max-w-xl">
              <span className="font-mono text-zinc-500 text-[11px] uppercase tracking-wider">
                Connect:
              </span>

              <a
                href={personalData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/60 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white transition-colors"
              >
                <GithubIcon size={14} />
                <span>GitHub</span>
              </a>

              <a
                href={personalData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/60 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white transition-colors"
              >
                <LinkedinIcon size={14} className="text-blue-400" />
                <span>LinkedIn</span>
              </a>

              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/60 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white transition-colors"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check size={14} className="text-emerald-400" />
                    <span className="text-emerald-400 font-mono">Copied!</span>
                  </>
                ) : (
                  <>
                    <Mail size={14} className="text-cyan-400" />
                    <span>{personalData.contact.email}</span>
                    <Copy size={12} className="text-zinc-500 ml-1" />
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: High-Tech Developer Visual Panel */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="relative w-full max-w-md">
              {/* Outer Glowing Rings */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 via-cyan-500/20 to-indigo-600/20 rounded-3xl blur-xl opacity-60 pointer-events-none" />
              
              {/* Main Tech Terminal Card */}
              <div className="relative rounded-2xl glass-panel p-5 border border-zinc-800/90 shadow-2xl overflow-hidden">
                {/* Header bar */}
                <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-zinc-800/80">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 font-mono text-xs text-zinc-400 flex items-center gap-1.5">
                      <Terminal size={12} className="text-cyan-400" />
                      sartaj-identity.ts
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-cyan-400 border border-blue-500/30">
                    STATUS: ACTIVE
                  </span>
                </div>

                {/* Simulated Code & Architecture Object */}
                <div className="font-mono text-xs leading-relaxed text-zinc-300 space-y-2 bg-[#050508]/80 p-4 rounded-xl border border-zinc-900/90">
                  <div className="text-zinc-500">// Sartaj Ali - Core Engineering Manifest</div>
                  <div>
                    <span className="text-blue-400">const</span>{' '}
                    <span className="text-yellow-300">engineer</span>:{' '}
                    <span className="text-cyan-300">Developer</span> = {'{'}
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-400">name:</span>{' '}
                    <span className="text-emerald-300">'{personalData.name}'</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-400">focus:</span> [
                    <span className="text-emerald-300">'FullStack'</span>,{' '}
                    <span className="text-emerald-300">'AI-Agents'</span>,{' '}
                    <span className="text-emerald-300">'ZKP/DID'</span>],
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-400">education:</span>{' '}
                    <span className="text-purple-300">'B.E. CSE (2023-2027)'</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-400">location:</span>{' '}
                    <span className="text-emerald-300">'Bangalore, IN'</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-400">passions:</span> [
                    <span className="text-cyan-300">'Hackathons'</span>,{' '}
                    <span className="text-cyan-300">'Privacy'</span>,{' '}
                    <span className="text-cyan-300">'Scalable Arch'</span>]
                  </div>
                  <div>{'};'}</div>
                  <div className="pt-2 text-zinc-500 flex items-center justify-between">
                    <span>// Runtime Ready</span>
                    <span className="text-emerald-400 flex items-center gap-1 text-[11px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Ready to Build
                    </span>
                  </div>
                </div>

                {/* Floating Orbiting Technology Badges */}
                <div className="mt-4 pt-4 border-t border-zinc-800/80 grid grid-cols-3 gap-2">
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-zinc-900/70 border border-zinc-800 hover:border-blue-500/40 transition-colors">
                    <div className="p-1.5 rounded bg-blue-500/10 text-blue-400">
                      <Code2 size={16} />
                    </div>
                    <div className="text-left">
                      <div className="text-[11px] font-semibold text-zinc-200">Full-Stack</div>
                      <div className="text-[9px] text-zinc-400">React · Node</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 p-2 rounded-lg bg-zinc-900/70 border border-zinc-800 hover:border-cyan-500/40 transition-colors">
                    <div className="p-1.5 rounded bg-cyan-500/10 text-cyan-400">
                      <Bot size={16} />
                    </div>
                    <div className="text-left">
                      <div className="text-[11px] font-semibold text-zinc-200">AI Agents</div>
                      <div className="text-[9px] text-zinc-400">Multi-Agent</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 p-2 rounded-lg bg-zinc-900/70 border border-zinc-800 hover:border-indigo-500/40 transition-colors">
                    <div className="p-1.5 rounded bg-indigo-500/10 text-indigo-400">
                      <Shield size={16} />
                    </div>
                    <div className="text-left">
                      <div className="text-[11px] font-semibold text-zinc-200">Blockchain</div>
                      <div className="text-[9px] text-zinc-400">ZKP · DID</div>
                    </div>
                  </div>
                </div>

                {/* Verified Hackathon Highlight pill at bottom */}
                <div className="mt-3 p-2.5 rounded-xl bg-gradient-to-r from-blue-900/30 via-cyan-900/20 to-purple-900/30 border border-blue-500/20 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Layers size={14} className="text-cyan-400" />
                    <span className="text-[11px] font-medium text-zinc-300">
                      Smart Horizon 2026 (3rd) · AtherNex (1st)
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400 font-semibold">
                    PODIUM
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
