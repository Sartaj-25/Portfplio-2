import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { personalData } from '../data/personal';
import {
  GraduationCap,
  Calendar,
  Award,
  MapPin,
  Layers,
  Cpu,
  Shield,
} from 'lucide-react';

export const About: React.FC = () => {
  const { about, education } = personalData;

  const pillarIcons: Record<string, React.ReactNode> = {
    Layout: <Layers className="text-blue-400" size={24} />,
    BrainCircuit: <Cpu className="text-cyan-400" size={24} />,
    ShieldCheck: <Shield className="text-indigo-400" size={24} />,
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="ABOUT SARTAJ"
          title={about.heading}
          subtitle={about.subtitle}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Story & Biography */}
          <div className="lg:col-span-7 flex flex-col justify-between glass-card p-6 sm:p-8 rounded-2xl border border-zinc-800">
            <div>
              <div className="flex items-center gap-2 mb-4 text-xs font-mono text-zinc-400">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span>MISSION STATEMENT & PERSPECTIVE</span>
              </div>

              <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
                {about.bioParagraphs.map((paragraph, idx) => (
                  <p key={idx} className={idx === 0 ? 'text-zinc-200 font-medium text-base sm:text-lg' : ''}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Quick engineering tags */}
            <div className="mt-8 pt-6 border-t border-zinc-800/80 flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-zinc-400 mr-2">Core Pillars:</span>
              <span className="px-3 py-1 rounded-full text-xs bg-blue-500/10 text-blue-300 border border-blue-500/20">
                Multi-Agent Systems
              </span>
              <span className="px-3 py-1 rounded-full text-xs bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                Zero-Knowledge Proofs
              </span>
              <span className="px-3 py-1 rounded-full text-xs bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                Full-Stack Architecture
              </span>
              <span className="px-3 py-1 rounded-full text-xs bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                FastAPI & React
              </span>
            </div>
          </div>

          {/* Right Column: Pillars & Compact Education Card */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            {/* 3 Core Pillars */}
            <div className="space-y-3.5">
              {about.pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="glass-card p-4 sm:p-5 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-all hover:translate-x-1 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 shrink-0 group-hover:border-zinc-700 transition-colors">
                      {pillarIcons[pillar.icon] || <Layers className="text-blue-400" size={24} />}
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-semibold text-white group-hover:text-cyan-300 transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-400 mt-1 leading-snug">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Compact Education Card */}
            <div className="glass-panel p-5 sm:p-6 rounded-2xl border border-zinc-800 relative overflow-hidden bg-gradient-to-br from-zinc-900/90 via-zinc-900/60 to-blue-950/20">
              <div className="flex items-center justify-between mb-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 font-medium">
                  <GraduationCap size={15} />
                  EDUCATION
                </span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                  <Award size={12} /> CGPA: {education.cgpa}
                </span>
              </div>

              <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">
                {education.degree}
              </h4>

              <div className="mt-2 text-sm text-zinc-300 font-medium">
                {education.institution}
              </div>

              <div className="mt-3 flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400 pt-3 border-t border-zinc-800/80">
                <div className="flex items-center gap-1.5">
                  <Calendar size={13} className="text-blue-400" />
                  <span>{education.period}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin size={13} className="text-cyan-400" />
                  <span>{education.location}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
