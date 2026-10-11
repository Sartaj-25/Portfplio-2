import React from 'react';
import { Mic, PhoneCall, CheckCircle2, TrendingUp, Sparkles } from 'lucide-react';

export const NexusVisual: React.FC = () => {
  const isPlaying = true;

  return (
    <div className="rounded-xl bg-[#07070b] border border-purple-900/40 p-4 font-mono text-xs select-none shadow-xl">
      {/* Header bar */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-800/80">
        <div className="flex items-center gap-2">
          <PhoneCall size={14} className="text-purple-400 animate-pulse" />
          <span className="font-semibold text-zinc-200">AUTOMATON NEXUS VOICE AGENT</span>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px]">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>CALL IN PROGRESS · LATENCY 0.38s</span>
        </div>
      </div>

      {/* Audio Waveform Animation Bars */}
      <div className="p-3 rounded-lg bg-zinc-900/70 border border-zinc-800 mb-3">
        <div className="flex items-center justify-between mb-2 text-[10px] text-zinc-400">
          <span className="flex items-center gap-1.5">
            <Mic size={11} className="text-cyan-400" />
            Active Speech Synthesis Stream
          </span>
          <span className="text-purple-300">FastAPI Asynchronous Pipeline</span>
        </div>

        {/* Dynamic Waveform Visualizer */}
        <div className="h-10 flex items-center justify-center gap-1 bg-[#050508] rounded-md px-3 border border-zinc-900">
          {[40, 65, 30, 85, 95, 60, 45, 90, 75, 35, 80, 100, 70, 50, 90, 45, 60, 85, 40, 25].map(
            (height, idx) => (
              <div
                key={idx}
                className="w-1.5 rounded-full bg-gradient-to-t from-purple-600 via-cyan-400 to-blue-400 transition-all duration-300"
                style={{
                  height: isPlaying ? `${Math.max(20, (height * (idx % 3 + 1)) % 100)}%` : '15%',
                  opacity: isPlaying ? 0.9 : 0.3,
                }}
              />
            )
          )}
        </div>
      </div>

      {/* Real-time Dialogue Log */}
      <div className="p-2.5 rounded-lg bg-zinc-900/50 border border-zinc-800/80 mb-3 space-y-1.5 text-[11px]">
        <div className="flex items-start gap-2">
          <span className="text-cyan-400 font-bold shrink-0">Agent:</span>
          <span className="text-zinc-300">
            "Hello! Confirming order #8429 to Indiranagar dispatch for delivery by 4 PM?"
          </span>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-purple-400 font-bold shrink-0">Customer:</span>
          <span className="text-zinc-300 font-normal">
            "Yes, please confirm that."
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-emerald-400 text-[10px] pt-1">
          <CheckCircle2 size={12} />
          <span>Intent Verified: Order Confirmed & Updated in CRM</span>
        </div>
      </div>

      {/* Performance Metric Counters */}
      <div className="pt-2 border-t border-zinc-800/60 grid grid-cols-2 gap-2 text-[10px]">
        <div className="flex items-center gap-1.5 text-zinc-400">
          <TrendingUp size={12} className="text-emerald-400" />
          <span>Manual Effort: -80% Saved</span>
        </div>
        <div className="flex items-center justify-end gap-1.5 text-zinc-400">
          <Sparkles size={11} className="text-purple-400" />
          <span>1st Place / 120 Teams</span>
        </div>
      </div>
    </div>
  );
};
