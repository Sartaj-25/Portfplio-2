import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { skillCategories } from '../data/skills';
import {
  Code2,
  Layout,
  Server,
  Database,
  Cpu,
  Shield,
  Wrench,
  CheckCircle2,
} from 'lucide-react';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categoryIcons: Record<string, React.ReactNode> = {
    Code2: <Code2 className="text-blue-400" size={20} />,
    Layout: <Layout className="text-cyan-400" size={20} />,
    Server: <Server className="text-emerald-400" size={20} />,
    Database: <Database className="text-purple-400" size={20} />,
    Cpu: <Cpu className="text-yellow-400" size={20} />,
    Shield: <Shield className="text-indigo-400" size={20} />,
    Wrench: <Wrench className="text-rose-400" size={20} />,
  };

  const filteredCategories =
    selectedCategory === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === selectedCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-zinc-950/50">
      {/* Background ambient lighting */}
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="TECHNICAL ARSENAL"
          title="Technical Arsenal"
          subtitle="Technologies I use to turn ideas into reality."
        />

        {/* Filter buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all ${
              selectedCategory === 'all'
                ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-[0_0_15px_rgba(59,130,246,0.3)]'
                : 'bg-zinc-900 text-zinc-400 hover:text-zinc-200 border border-zinc-800'
            }`}
          >
            All Disciplines ({skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)})
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all ${
                selectedCategory === cat.id
                  ? 'bg-blue-600/40 text-cyan-300 border border-blue-500/50 shadow-[0_0_15px_rgba(34,211,238,0.2)]'
                  : 'bg-zinc-900 text-zinc-400 hover:text-zinc-200 border border-zinc-800'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Grid of skill categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => (
            <div
              key={cat.id}
              className="glass-card rounded-2xl p-6 border border-zinc-800 hover:border-blue-500/30 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5 pb-3 border-b border-zinc-800/80">
                  <div className="p-2 rounded-xl bg-zinc-900 border border-zinc-800">
                    {categoryIcons[cat.iconName] || <Code2 size={20} />}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {cat.title}
                    </h3>
                    <span className="text-[11px] font-mono text-zinc-400">
                      {cat.skills.length} core technologies
                    </span>
                  </div>
                </div>

                {/* Skills inside this category */}
                <div className="space-y-3">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700/90 transition-all hover:bg-zinc-900/90 group/skill"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <CheckCircle2
                            size={14}
                            className={
                              skill.highlight
                                ? 'text-cyan-400'
                                : 'text-zinc-500 group-hover/skill:text-cyan-400'
                            }
                          />
                          <span className="text-sm font-semibold text-zinc-200 group-hover/skill:text-white">
                            {skill.name}
                          </span>
                        </div>
                        {skill.highlight && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                            CORE
                          </span>
                        )}
                      </div>

                      {skill.description && (
                        <p className="text-xs text-zinc-400 pl-5.5 font-light leading-snug">
                          {skill.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-zinc-800/40 text-[11px] font-mono text-zinc-400 flex items-center justify-between">
                <span>VERIFIED STACK</span>
                <span className="text-cyan-400/80">PROD READY</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
