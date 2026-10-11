import React from 'react';
import { ShieldCheck, Lock, Key, Check, Fingerprint, EyeOff } from 'lucide-react';

export const IdentipiVisual: React.FC = () => {
  const claims = [
    { title: 'Age Eligibility', proof: 'Proven: Age ≥ 18', privacy: 'DOB Redacted' },
    { title: 'Jurisdiction', proof: 'Proven: Resident of Karnataka, IN', privacy: 'Street Address Redacted' },
    { title: 'KYC Sanctions', proof: 'Proven: Passed OFAC / Clean Record', privacy: 'National ID Redacted' },
  ];

  return (
    <div className="rounded-xl bg-[#07070b] border border-cyan-900/40 p-4 font-mono text-xs select-none shadow-xl">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-800/80">
        <div className="flex items-center gap-2">
          <Fingerprint size={14} className="text-cyan-400" />
          <span className="font-semibold text-zinc-200">IDENTIPI ZK-CREDENTIAL</span>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px]">
          <ShieldCheck size={11} />
          <span>ZERO-KNOWLEDGE VERIFIED</span>
        </div>
      </div>

      {/* DID Metadata Bar */}
      <div className="p-2.5 rounded-lg bg-zinc-900/80 border border-zinc-800 mb-3 flex items-center justify-between text-[11px]">
        <div className="flex items-center gap-2 truncate">
          <Key size={13} className="text-blue-400 shrink-0" />
          <span className="text-zinc-400">DID:</span>
          <span className="text-cyan-300 truncate font-mono text-[10px]">
            did:veridian:midnight:0x7a8c9f21e...b41
          </span>
        </div>
        <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-500/10 text-cyan-400 shrink-0">
          IPFS PINNED
        </span>
      </div>

      {/* Selective Disclosure Claims */}
      <div className="space-y-2 mb-3">
        {claims.map((claim, idx) => (
          <div
            key={idx}
            className="p-2.5 rounded-lg bg-zinc-900/50 border border-zinc-800/80 flex items-center justify-between"
          >
            <div>
              <div className="text-[10px] text-zinc-400">{claim.title}</div>
              <div className="text-[11px] font-semibold text-emerald-300 flex items-center gap-1.5 mt-0.5">
                <Check size={12} className="text-emerald-400" />
                {claim.proof}
              </div>
            </div>

            <div className="text-right">
              <span className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 border border-zinc-700">
                <EyeOff size={10} className="text-cyan-400" />
                {claim.privacy}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Proof State */}
      <div className="pt-2 border-t border-zinc-800/60 flex items-center justify-between text-[10px] text-zinc-400">
        <div className="flex items-center gap-1.5">
          <Lock size={11} className="text-cyan-400" />
          <span>Protocol: Midnight ZK-SNARKs</span>
        </div>
        <span className="text-emerald-400 font-mono">0 PII LEAKED TO VERIFIER</span>
      </div>
    </div>
  );
};
