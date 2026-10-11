import React from 'react';
import type { ProjectItem } from '../types';
import {
  Trophy,
  ExternalLink,
  Layers,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import { FrabVisual } from './project-visuals/FrabVisual';
import { IdentipiVisual } from './project-visuals/IdentipiVisual';
import { NexusVisual } from './project-visuals/NexusVisual';
import { GithubIcon } from './SocialIcons';

interface ProjectCardProps {
  project: ProjectItem;
  onOpenDetails: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onOpenDetails,
}) => {
  const renderVisual = () => {
    switch (project.id) {
      case 'frab':
        return <FrabVisual />;
      case 'identipi':
        return <IdentipiVisual />;
      case 'automaton-nexus':
        return <NexusVisual />;
      default:
        return null;
    }
  };

  return (
    <article className="glass-card rounded-2xl border border-zinc-800 hover:border-blue-500/40 transition-all duration-300 overflow-hidden shadow-2xl group flex flex-col justify-between">
      {/* Top Banner & Header */}
      <div className="p-6 sm:p-8">
        {/* Badges bar */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 mb-4">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-blue-500/10 text-cyan-400 border border-blue-500/20">
            {project.category}
          </span>

          {project.achievement && (
            <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-amber-500/10 text-amber-300 border border-amber-500/30 flex items-center gap-1.5 shadow-[0_0_12px_rgba(245,158,11,0.15)]">
              <Trophy size={13} />
              {project.achievement}
            </span>
          )}
        </div>

        {/* Title & Tagline */}
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-cyan-300 transition-colors tracking-tight">
          {project.name}
        </h3>
        <p className="mt-2 text-sm text-zinc-400 leading-relaxed font-light">
          {project.tagline}
        </p>

        {/* Bespoke Interactive Simulation Visual */}
        <div className="mt-6 mb-6">{renderVisual()}</div>

        {/* Short Description */}
        <p className="text-sm text-zinc-300 leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Problem Being Solved Box */}
        <div className="mb-5 p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs text-zinc-300">
          <div className="text-[11px] font-mono text-cyan-400 mb-1 flex items-center gap-1 font-semibold">
            <AlertCircle size={13} />
            PROBLEM ADDRESSED:
          </div>
          <p className="leading-relaxed text-zinc-400 font-light">
            {project.problemSolved}
          </p>
        </div>

        {/* Key Features Preview */}
        <div className="space-y-2 mb-6">
          <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
            Key Highlights:
          </div>
          {project.keyFeatures.slice(0, 3).map((feat, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
              <CheckCircle2 size={14} className="text-cyan-400 shrink-0 mt-0.5" />
              <span>{feat}</span>
            </div>
          ))}
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-800/80">
          {project.technologies.map((tech, tIdx) => (
            <span
              key={tIdx}
              className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-zinc-900/80 text-zinc-300 border border-zinc-800"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="p-6 bg-zinc-900/50 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-3">
        {/* Deep Dive Modal Trigger */}
        <button
          type="button"
          onClick={() => onOpenDetails(project)}
          className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group/btn"
        >
          <Layers size={14} />
          View Architecture & Deep Dive
          <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform" />
        </button>

        {/* External links: GitHub and Live Demo */}
        <div className="flex items-center gap-2">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-300 hover:text-white bg-zinc-800 hover:bg-zinc-700 transition-colors"
            >
              <GithubIcon size={13} />
              GitHub
            </a>
          ) : (
            <span className="text-[11px] font-mono text-zinc-400 px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800">
              Private Repo
            </span>
          )}

          {project.liveDemoUrl ? (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-sm transition-all"
            >
              <ExternalLink size={13} />
              Live Demo
            </a>
          ) : (
            <button
              type="button"
              onClick={() => onOpenDetails(project)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-400 bg-zinc-900/80 border border-zinc-800 hover:text-zinc-200 transition-colors"
              title="Interactive simulation is live in the dashboard above"
            >
              <span>Interactive Preview</span>
            </button>
          )}
        </div>
      </div>
    </article>
  );
};
