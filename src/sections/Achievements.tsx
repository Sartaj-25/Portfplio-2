import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { achievementsData } from '../data/achievements';
import { Trophy, Medal, Award, Lightbulb, Sparkles, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Achievements: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Trophy: <Trophy className="text-amber-400" size={26} />,
    Medal: <Medal className="text-cyan-400" size={26} />,
    Award: <Award className="text-blue-400" size={26} />,
    Lightbulb: <Lightbulb className="text-yellow-400" size={26} />,
  };

  const triggerCelebration = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#3B82F6', '#22D3EE', '#6366F1', '#ffffff'],
    });
  };

  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-zinc-950/40">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="HONORS & AWARDS"
          title="Milestones & Recognition"
          subtitle="Competitive hackathon podium finishes and innovation program distinctions."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {achievementsData.map((item) => (
            <div
              key={item.id}
              onClick={triggerCelebration}
              className="glass-card rounded-2xl p-6 sm:p-8 border border-zinc-800 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden cursor-pointer"
            >
              {/* Subtle gradient corner highlight */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full pointer-events-none" />

              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 group-hover:scale-110 group-hover:border-zinc-700 transition-all shadow-md">
                  {iconMap[item.iconName] || <Trophy className="text-amber-400" size={26} />}
                </div>

                <div className="flex flex-col items-end gap-1">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-blue-500/10 text-cyan-300 border border-blue-500/20 shadow-sm">
                    {item.badge}
                  </span>
                  <span className="text-[11px] font-mono text-zinc-400">
                    {item.dateOrYear}
                  </span>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                {item.title}
              </h3>

              <div className="text-xs font-mono text-zinc-400 mb-4">
                {item.organizationOrEvent}
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed font-light mb-6">
                {item.details}
              </p>

              {/* Bottom highlights bar */}
              <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono">
                {item.prize ? (
                  <span className="text-amber-300 font-semibold flex items-center gap-1.5">
                    <Sparkles size={13} className="text-amber-400" />
                    {item.prize}
                  </span>
                ) : (
                  <span className="text-cyan-400 font-semibold flex items-center gap-1.5">
                    <CheckCircle2 size={13} />
                    Verified Milestone
                  </span>
                )}

                <span className="text-zinc-400 text-[11px] group-hover:text-zinc-300 transition-colors">
                  Click to celebrate ✦
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
