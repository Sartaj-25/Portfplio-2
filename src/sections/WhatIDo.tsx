import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { whatIDoData } from '../data/whatIDo';
import { Layout, Bot, ShieldCheck, Rocket } from 'lucide-react';

export const WhatIDo: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Layout: <Layout className="text-blue-400" size={28} />,
    Bot: <Bot className="text-cyan-400" size={28} />,
    ShieldCheck: <ShieldCheck className="text-indigo-400" size={28} />,
    Rocket: <Rocket className="text-emerald-400" size={28} />,
  };

  return (
    <section className="py-20 relative bg-[#09090B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="CAPABILITIES"
          title="What I Bring to the Table"
          subtitle="Engineering execution blending rapid prototyping with rigorous system design."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whatIDoData.map((item, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 border border-zinc-800 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-inner">
                  {iconMap[item.iconName]}
                </div>

                <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-zinc-400 leading-relaxed font-light mb-6">
                  {item.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-800/80">
                {item.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-zinc-900/90 text-zinc-400 border border-zinc-800/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
