import React, { useState, useEffect } from 'react';
import {
  Search,
  X,
  FileText,
  Code2,
  Trophy,
  Mail,
  Home,
  User,
  Briefcase,
} from 'lucide-react';
import { projectsData } from '../data/projects';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onOpenResume,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const navigateTo = (id: string) => {
    onClose();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: 'Home / Hero', id: 'home', icon: <Home size={15} /> },
    { label: 'About Me & Education', id: 'about', icon: <User size={15} /> },
    { label: 'Technical Arsenal (Skills)', id: 'skills', icon: <Code2 size={15} /> },
    { label: 'Experience (AutomatonAI)', id: 'experience', icon: <Briefcase size={15} /> },
    { label: 'Featured Projects', id: 'projects', icon: <Code2 size={15} /> },
    { label: 'Milestones & Achievements', id: 'achievements', icon: <Trophy size={15} /> },
    { label: 'Contact Sartaj', id: 'contact', icon: <Mail size={15} /> },
  ];

  const filteredNav = navItems.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  const filteredProjects = projectsData.filter((p) =>
    (p.name + p.description + p.technologies.join(' ')).toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl bg-[#0e0e13] border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-zinc-800 gap-3">
          <Search size={18} className="text-zinc-500" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or jump to section..."
            className="w-full bg-transparent text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none font-mono"
          />
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-zinc-800 text-zinc-500 hover:text-zinc-300"
          >
            <X size={16} />
          </button>
        </div>

        {/* Content list */}
        <div className="p-3 max-h-80 overflow-y-auto space-y-4 text-xs font-mono">
          {/* Quick Actions */}
          <div>
            <div className="px-2 py-1 text-[10px] text-zinc-400 uppercase tracking-wider">
              Quick Actions
            </div>
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenResume();
              }}
              className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-zinc-800/80 text-zinc-300 hover:text-white transition-colors"
            >
              <div className="flex items-center gap-2">
                <FileText size={15} className="text-cyan-400" />
                <span>View / Download Resume PDF</span>
              </div>
              <kbd className="text-[10px] bg-zinc-800 px-1.5 py-0.5 rounded text-zinc-400">PDF</kbd>
            </button>
          </div>

          {/* Navigation */}
          {filteredNav.length > 0 && (
            <div>
              <div className="px-2 py-1 text-[10px] text-zinc-400 uppercase tracking-wider">
                Sections
              </div>
              {filteredNav.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => navigateTo(item.id)}
                  className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-zinc-800/80 text-zinc-300 hover:text-white transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-blue-400">{item.icon}</span>
                    <span>{item.label}</span>
                  </div>
                  <span className="text-zinc-400 text-[11px]">Jump &gt;</span>
                </button>
              ))}
            </div>
          )}

          {/* Projects */}
          {filteredProjects.length > 0 && (
            <div>
              <div className="px-2 py-1 text-[10px] text-zinc-400 uppercase tracking-wider">
                Projects
              </div>
              {filteredProjects.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => navigateTo('projects')}
                  className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-zinc-800/80 text-zinc-300 hover:text-white transition-colors"
                >
                  <div className="flex items-center gap-2 truncate">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                    <span className="truncate">{p.name}</span>
                  </div>
                  <span className="text-cyan-400 text-[10px] shrink-0">{p.category}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Footer shortcuts helper */}
        <div className="p-3 bg-zinc-900/60 border-t border-zinc-800/80 flex items-center justify-between text-[10px] text-zinc-400 font-mono">
          <span>Navigate with mouse or search query</span>
          <span>ESC to close</span>
        </div>
      </div>
    </div>
  );
};
