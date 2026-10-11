import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectDetailModal } from '../components/ProjectDetailModal';
import { projectsData } from '../data/projects';
import type { ProjectItem } from '../types';
import { Sparkles } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filters = [
    { id: 'all', label: 'All Projects (3)' },
    { id: 'ai', label: 'AI & Multi-Agent' },
    { id: 'web3', label: 'Blockchain & ZKP' },
    { id: 'voice', label: 'Voice Automation' },
  ];

  const filteredProjects = projectsData.filter((p) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'ai') return p.category.includes('AI');
    if (selectedFilter === 'web3') return p.category.includes('Web3') || p.category.includes('Cryptography');
    if (selectedFilter === 'voice') return p.category.includes('Voice');
    return true;
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="FLAGSHIP PORTFOLIO"
          title="Projects That Solve Problems"
          subtitle="Real-world challenges. Intelligent solutions. Thoughtful engineering."
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setSelectedFilter(f.id)}
              className={`px-4 py-2 rounded-full text-xs font-mono font-medium transition-all ${
                selectedFilter === f.id
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-[0_0_18px_rgba(59,130,246,0.35)]'
                  : 'bg-zinc-900 text-zinc-400 hover:text-zinc-200 border border-zinc-800'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* Bottom Banner for Architecture Deep-Dive */}
        <div className="mt-14 p-6 rounded-2xl glass-panel border border-zinc-800 text-center max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="p-2.5 rounded-xl bg-blue-500/10 text-cyan-400 border border-blue-500/20 shrink-0">
              <Sparkles size={20} />
            </div>
            <div>
              <div className="text-sm font-bold text-white">
                Interested in architecture diagrams & implementation files?
              </div>
              <div className="text-xs text-zinc-400">
                Detailed breakdowns, agent prompt architectures, and code snippets are available.
              </div>
            </div>
          </div>

          <a
            href="#contact"
            className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-zinc-800 hover:bg-zinc-700 transition-colors shrink-0 border border-zinc-700"
          >
            Request Walkthrough
          </a>
        </div>
      </div>

      {/* Deep-Dive Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
