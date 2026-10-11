import React, { useState, useRef, useEffect } from 'react';
import { Terminal, X, CornerDownLeft } from 'lucide-react';
import { personalData } from '../data/personal';
import { projectsData } from '../data/projects';
import { achievementsData } from '../data/achievements';

interface InteractiveTerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandLog {
  command: string;
  output: React.ReactNode;
}

export const InteractiveTerminal: React.FC<InteractiveTerminalProps> = ({
  isOpen,
  onClose,
}) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandLog[]>([
    {
      command: 'init',
      output: (
        <div className="text-zinc-400 space-y-1">
          <p className="text-cyan-300 font-bold">
            Sartaj Ali — Developer Terminal v2.6.0
          </p>
          <p>Type <span className="text-yellow-300 font-bold">help</span> to view available commands.</p>
        </div>
      ),
    },
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isOpen, history]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    let output: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        output = (
          <div className="space-y-1 text-zinc-300">
            <p className="text-cyan-400 font-semibold mb-1">Available Commands:</p>
            <p><span className="text-yellow-300 w-24 inline-block font-mono">bio</span> — Print developer summary & background</p>
            <p><span className="text-yellow-300 w-24 inline-block font-mono">skills</span> — List technical skills by category</p>
            <p><span className="text-yellow-300 w-24 inline-block font-mono">projects</span> — List flagship hackathon projects</p>
            <p><span className="text-yellow-300 w-24 inline-block font-mono">awards</span> — List verified podium finishes & prizes</p>
            <p><span className="text-yellow-300 w-24 inline-block font-mono">contact</span> — Show direct contact coordinates</p>
            <p><span className="text-yellow-300 w-24 inline-block font-mono">clear</span> — Reset terminal screen</p>
            <p><span className="text-yellow-300 w-24 inline-block font-mono">exit</span> — Close terminal panel</p>
          </div>
        );
        break;

      case 'bio':
        output = (
          <div className="space-y-1 text-zinc-300">
            <p className="text-cyan-300 font-bold">{personalData.name} ({personalData.education.degree})</p>
            <p>{personalData.education.institution} · CGPA {personalData.education.cgpa}</p>
            <p className="text-zinc-400 mt-2">{personalData.hero.description}</p>
          </div>
        );
        break;

      case 'skills':
        output = (
          <div className="space-y-2 text-zinc-300">
            <p><span className="text-blue-400 font-bold">Languages:</span> Java, Python, JavaScript</p>
            <p><span className="text-cyan-400 font-bold">Frontend:</span> React.js, Tailwind CSS, Figma</p>
            <p><span className="text-emerald-400 font-bold">Backend:</span> Node.js, FastAPI</p>
            <p><span className="text-purple-400 font-bold">Databases:</span> MongoDB, PostgreSQL, Supabase</p>
            <p><span className="text-yellow-400 font-bold">AI / ML:</span> AI Agents, Voice Processing, AWS Bedrock, Prompt Engineering</p>
            <p><span className="text-indigo-400 font-bold">Blockchain:</span> Midnight, Zero-Knowledge Proofs (ZKP), Veridian DID, IPFS</p>
            <p><span className="text-rose-400 font-bold">Tools:</span> Git, GitHub, AWS, Google ADK</p>
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="space-y-2 text-zinc-300">
            {projectsData.map((p, idx) => (
              <div key={idx} className="p-2 rounded bg-zinc-900 border border-zinc-800">
                <span className="text-cyan-300 font-bold">{p.name}</span>
                <span className="text-xs text-amber-300 ml-2">[{p.achievement}]</span>
                <p className="text-xs text-zinc-400 mt-0.5">{p.tagline}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'awards':
        output = (
          <div className="space-y-1.5 text-zinc-300">
            {achievementsData.map((a, idx) => (
              <p key={idx}>
                <span className="text-amber-400 font-bold">★ {a.title}</span> — {a.organizationOrEvent}
              </p>
            ))}
          </div>
        );
        break;

      case 'contact':
        output = (
          <div className="space-y-1 text-zinc-300">
            <p><span className="text-cyan-400">Email:</span> {personalData.contact.email}</p>
            <p><span className="text-cyan-400">Phone:</span> {personalData.contact.phone}</p>
            <p><span className="text-cyan-400">GitHub:</span> {personalData.contact.github}</p>
            <p><span className="text-cyan-400">LinkedIn:</span> {personalData.contact.linkedin}</p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      case 'exit':
        onClose();
        setInput('');
        return;

      default:
        output = (
          <p className="text-red-400">
            Command not recognized: <span className="font-bold">{cmd}</span>. Type <span className="text-yellow-300 font-bold">help</span> for valid commands.
          </p>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: input, output }]);
    setInput('');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-[#09090e] border border-blue-900/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[520px]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header */}
        <div className="p-3 bg-zinc-900/90 border-b border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 font-mono text-xs text-zinc-400 flex items-center gap-1.5">
              <Terminal size={14} className="text-cyan-400" />
              sartaj@terminal: ~ (bash)
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-zinc-800 text-zinc-400 hover:text-white"
          >
            <X size={16} />
          </button>
        </div>

        {/* Terminal Output Body */}
        <div className="p-4 flex-1 overflow-y-auto font-mono text-xs space-y-4">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center gap-2 text-zinc-500">
                <span className="text-cyan-400">sartaj@portfolio:~$</span>
                <span className="text-white font-medium">{item.command}</span>
              </div>
              <div className="pl-4">{item.output}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input prompt */}
        <form
          onSubmit={handleCommand}
          className="p-3 bg-[#050508] border-t border-zinc-800/80 flex items-center gap-2 font-mono text-xs"
        >
          <span className="text-cyan-400 font-semibold shrink-0">
            sartaj@portfolio:~$
          </span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type 'help'..."
            className="flex-1 bg-transparent text-white focus:outline-none placeholder-zinc-600"
          />
          <button
            type="submit"
            className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-cyan-400"
            aria-label="Submit Command"
          >
            <CornerDownLeft size={13} />
          </button>
        </form>
      </div>
    </div>
  );
};
