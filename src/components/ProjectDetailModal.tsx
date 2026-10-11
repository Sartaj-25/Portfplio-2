import React from 'react';
import type { ProjectItem } from '../types';
import {
  X,
  Trophy,
  CheckCircle2,
  AlertCircle,
  Cpu,
  Layers,
  Sparkles,
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
}) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#0e0e13] border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="relative p-6 sm:p-8 bg-gradient-to-r from-zinc-900 via-zinc-900/90 to-blue-950/30 border-b border-zinc-800">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-xl bg-zinc-800/80 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-blue-500/10 text-cyan-400 border border-blue-500/20">
              {project.category}
            </span>
            {project.achievement && (
              <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-amber-500/10 text-amber-300 border border-amber-500/30 flex items-center gap-1.5">
                <Trophy size={13} />
                {project.achievement}
              </span>
            )}
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            {project.name}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl">
            {project.tagline}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[70vh] overflow-y-auto">
          {/* Impact Metrics Banner */}
          {project.impactMetrics && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {project.impactMetrics.map((metric, mIdx) => (
                <div
                  key={mIdx}
                  className="p-3.5 rounded-xl bg-zinc-900/70 border border-zinc-800 text-center"
                >
                  <div className="text-xs font-mono text-zinc-400 mb-1">
                    {metric.label}
                  </div>
                  <div className="text-sm sm:text-base font-bold text-cyan-300">
                    {metric.value}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Problem Statement & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-red-950/15 border border-red-500/20">
              <h4 className="text-xs font-mono text-red-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <AlertCircle size={14} />
                The Problem Solved
              </h4>
              <p className="text-sm text-zinc-300 leading-relaxed">
                {project.problemSolved}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-blue-950/20 border border-blue-500/20">
              <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Sparkles size={14} />
                The Engineered Solution
              </h4>
              <p className="text-sm text-zinc-300 leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>

          {/* Architecture Overview */}
          {project.architectureOverview && (
            <div>
              <h3 className="text-sm font-mono text-zinc-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Layers size={16} className="text-blue-400" />
                System Architecture & Workflow
              </h3>
              <div className="p-5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-sm text-zinc-300 leading-relaxed font-light">
                {project.architectureOverview}
              </div>
            </div>
          )}

          {/* Agent Roles (Specific to FRAB) */}
          {project.agentRoles && (
            <div>
              <h3 className="text-sm font-mono text-zinc-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Cpu size={16} className="text-cyan-400" />
                Multi-Agent Pipeline Specialization
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.agentRoles.map((agent, aIdx) => (
                  <div
                    key={aIdx}
                    className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-start gap-3"
                  >
                    <span className="w-2 h-2 rounded-full bg-cyan-400 mt-2 shrink-0" />
                    <div>
                      <div className="text-xs font-mono font-bold text-cyan-300">
                        {agent.role}
                      </div>
                      <div className="text-xs text-zinc-400 mt-0.5">
                        {agent.task}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Features List */}
          <div>
            <h3 className="text-sm font-mono text-zinc-400 uppercase tracking-wider mb-3">
              Key Capabilities & Features
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {project.keyFeatures.map((feat, fIdx) => (
                <li
                  key={fIdx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 p-2.5 rounded-lg bg-zinc-900/40 border border-zinc-800/60"
                >
                  <CheckCircle2 size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Used */}
          <div>
            <h3 className="text-sm font-mono text-zinc-400 uppercase tracking-wider mb-3">
              Complete Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono bg-zinc-900 text-zinc-300 border border-zinc-800 hover:border-zinc-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 bg-zinc-900/90 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-zinc-400 font-mono">
            {project.id === 'frab'
              ? '★ System assists human investigators; decision authority remains with forensic lead.'
              : project.id === 'automaton-nexus'
              ? '★ Analytics metrics reflect benchmark sprint findings.'
              : '★ Cryptographic claims verified client-side via Midnight & Veridian.'}
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-zinc-200 bg-zinc-800 hover:bg-zinc-700 transition-colors"
              >
                <GithubIcon size={14} />
                GitHub Repository
              </a>
            )}

            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
