import React, { useState } from 'react';
import { ShieldAlert, Cpu, UserCheck, Activity } from 'lucide-react';

export const FrabVisual: React.FC = () => {
  const [activeAgent, setActiveAgent] = useState<number>(1);

  const agents = [
    { name: 'Watchman', role: 'Telemetry', status: 'ANOMALY DETECTED', color: 'text-amber-400' },
    { name: 'Detective', role: 'Graph Mining', status: '3 HOPS TRACED', color: 'text-blue-400' },
    { name: 'Jurist', role: 'AML Rules', status: 'SAR CRITERIA MET', color: 'text-purple-400' },
    { name: 'Scribe', role: 'Dossier Gen', status: 'REPORT COMPILED', color: 'text-cyan-400' },
    { name: 'Supervisor', role: 'Gatekeeper', status: 'READY FOR SIGN-OFF', color: 'text-emerald-400' },
  ];

  return (
    <div className="rounded-xl bg-[#07070b] border border-blue-900/40 p-4 font-mono text-xs select-none shadow-xl">
      {/* Top Telemetry Header */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-800/80">
        <div className="flex items-center gap-2">
          <Activity size={14} className="text-cyan-400 animate-pulse" />
          <span className="font-semibold text-zinc-200">FRAB AI AML MONITOR</span>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-red-500/10 text-red-400 border border-red-500/20 text-[10px]">
          <ShieldAlert size={11} />
          <span>RISK INDEX: 89 / 100</span>
        </div>
      </div>

      {/* Multi-Agent Orchestration Flowchart */}
      <div className="mb-4">
        <div className="text-[10px] text-zinc-400 uppercase tracking-wider mb-2 flex items-center gap-1">
          <Cpu size={12} className="text-blue-400" />
          Multi-Agent Forensic Pipeline
        </div>
        <div className="grid grid-cols-5 gap-1.5">
          {agents.map((ag, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActiveAgent(i)}
              className={`p-2 rounded-lg text-left transition-all border ${
                activeAgent === i
                  ? 'bg-blue-950/60 border-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.3)]'
                  : 'bg-zinc-900/60 border-zinc-800/80 hover:border-zinc-700'
              }`}
            >
              <div className="text-[10px] text-zinc-400 truncate">{ag.role}</div>
              <div className="font-bold text-zinc-100 text-[11px] truncate">{ag.name}</div>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1" />
            </button>
          ))}
        </div>
      </div>

      {/* Active Agent Output Inspector */}
      <div className="p-3 rounded-lg bg-zinc-900/80 border border-zinc-800 text-[11px] text-zinc-300">
        <div className="flex items-center justify-between mb-1 text-zinc-400">
          <span>Agent Insight: {agents[activeAgent].name}</span>
          <span className={`font-mono text-[10px] ${agents[activeAgent].color}`}>
            {agents[activeAgent].status}
          </span>
        </div>
        <div className="text-zinc-300 text-xs">
          {activeAgent === 0 && 'Flagged sudden burst of 14 rapid micro-transfers under reporting threshold ($9,800 ea).'}
          {activeAgent === 1 && 'Identified cyclic flow between 3 intermediary shell entities across offshore corridors.'}
          {activeAgent === 2 && 'Triggers AML section 314(b) risk threshold. High probability of structuring/smurfing.'}
          {activeAgent === 3 && 'Generated 4-page evidence dossier with audit graph & timestamped chain-of-custody.'}
          {activeAgent === 4 && 'Pre-conditions validated. Escalated to Senior Human Compliance Officer for formal signoff.'}
        </div>
      </div>

      {/* Human Supervision Safeguard Banner */}
      <div className="mt-3 flex items-center justify-between text-[10px] text-zinc-400 pt-2 border-t border-zinc-800/60">
        <div className="flex items-center gap-1.5 text-emerald-400">
          <UserCheck size={12} />
          <span>Human-in-the-Loop Supervised Governance</span>
        </div>
        <span className="text-zinc-400">Vertex AI + Google ADK</span>
      </div>
    </div>
  );
};
