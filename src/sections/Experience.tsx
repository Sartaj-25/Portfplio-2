import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { experienceData } from '../data/experience';
import { Briefcase, Calendar, Building2, CheckCircle2, Zap } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="HANDS-ON IMPACT"
          title="Experience & Practical Work"
          subtitle="Sprint-driven, high-intensity engineering delivering production prototypes."
        />

        <div className="relative border-l-2 border-zinc-800 ml-4 md:ml-8 pl-6 md:pl-10 space-y-12">
          {experienceData.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline marker with pulsing dot */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-zinc-900 border-2 border-blue-500 flex items-center justify-center group-hover:border-cyan-400 group-hover:scale-125 transition-all">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
              </div>

              {/* Main Timeline Card */}
              <div className="glass-card rounded-2xl p-6 sm:p-8 border border-zinc-800 hover:border-blue-500/40 transition-all duration-300 shadow-xl">
                {/* Header info */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-blue-500/10 text-cyan-400 border border-blue-500/20">
                        {item.badge}
                      </span>
                      {item.metrics && (
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                          <Zap size={11} />
                          {item.metrics}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.role}
                    </h3>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs font-mono text-zinc-400">
                    <div className="flex items-center gap-1.5 text-zinc-300 font-semibold text-sm">
                      <Building2 size={15} className="text-blue-400" />
                      <span>{item.organization}</span>
                    </div>
                    <div className="flex items-center gap-1.5 mt-1">
                      <Calendar size={13} className="text-cyan-400" />
                      <span>{item.date}</span>
                    </div>
                  </div>
                </div>

                {/* Engagement Overview */}
                <p className="text-sm sm:text-base text-zinc-300 mb-6 leading-relaxed bg-zinc-900/40 p-4 rounded-xl border border-zinc-800/80">
                  {item.description}
                </p>

                {/* Key Responsibilities */}
                <div className="space-y-3">
                  <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Briefcase size={13} className="text-blue-400" />
                    Key Contributions & Engineering Deliverables:
                  </div>

                  <ul className="space-y-2.5">
                    {item.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-3 text-sm text-zinc-300">
                        <CheckCircle2 size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
