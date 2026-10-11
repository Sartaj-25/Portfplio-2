import React from 'react';
import {
  X,
  Download,
  FileText,
  GraduationCap,
  Briefcase,
  Trophy,
  Code2,
} from 'lucide-react';
import { personalData } from '../data/personal';
import { projectsData } from '../data/projects';
import { achievementsData } from '../data/achievements';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#0f0f15] border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="p-6 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-blue-500/10 text-cyan-400 border border-blue-500/20">
              <FileText size={20} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Sartaj Ali — Curriculum Vitae</h2>
              <p className="text-xs font-mono text-zinc-400">
                Verified Resume · Last Updated 2026
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/resume.pdf"
              download="Sartaj_Ali_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 transition-all shadow-md"
            >
              <Download size={14} />
              Download PDF
            </a>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-xl hover:bg-zinc-800 text-zinc-400 hover:text-white"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 font-sans text-sm text-zinc-300">
          {/* Personal Summary */}
          <div>
            <h3 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              Summary
            </h3>
            <p className="text-zinc-300 leading-relaxed bg-zinc-900/40 p-4 rounded-xl border border-zinc-800/80">
              Computer Science & Engineering student with hands-on experience in{' '}
              <strong className="text-white">full-stack development</strong>,{' '}
              <strong className="text-white">AI agents</strong>, and{' '}
              <strong className="text-white">blockchain applications</strong>. Built multi-agent
              financial crime investigation systems and privacy-preserving decentralized identity
              solutions. Experienced in hackathon-driven product development, rapid prototyping, and
              collaborative problem solving, with recognition in national and international
              hackathons.
            </p>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-3 flex items-center gap-2">
              <GraduationCap size={15} />
              Education
            </h3>
            <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80 flex flex-col sm:flex-row justify-between gap-2">
              <div>
                <h4 className="font-bold text-white text-base">
                  {personalData.education.institution}
                </h4>
                <p className="text-zinc-400 text-xs mt-0.5">
                  {personalData.education.degree}
                </p>
              </div>
              <div className="sm:text-right font-mono text-xs text-zinc-400">
                <div>{personalData.education.location}</div>
                <div className="text-cyan-300 mt-0.5">
                  {personalData.education.period} · CGPA: {personalData.education.cgpa}
                </div>
              </div>
            </div>
          </div>

          {/* Practical Work / Experience */}
          <div>
            <h3 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Briefcase size={15} />
              Experience
            </h3>
            <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80 space-y-3">
              <div className="flex flex-col sm:flex-row justify-between gap-1">
                <div>
                  <h4 className="font-bold text-white">
                    Full-Stack Developer — Hackathon Contributor
                  </h4>
                  <p className="text-xs text-cyan-400 font-mono">AutomatonAI · Project-Based</p>
                </div>
                <div className="text-xs font-mono text-zinc-400 sm:text-right">
                  April 2026
                </div>
              </div>
              <ul className="space-y-1.5 text-xs text-zinc-300 list-disc list-inside">
                <li>Developed a real-time automation engine for industrial workflows and data ingestion during a 24-hour hackathon.</li>
                <li>Improved backend latency by 30% through optimized query handling and asynchronous processing.</li>
                <li>Collaborated with technical mentors to refine system architecture, scalability, and real-world deployment requirements.</li>
              </ul>
            </div>
          </div>

          {/* Key Hackathon Projects */}
          <div>
            <h3 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Code2 size={15} />
              Projects
            </h3>
            <div className="space-y-4">
              {projectsData.map((project) => (
                <div
                  key={project.id}
                  className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80 space-y-2"
                >
                  <div className="flex flex-col sm:flex-row justify-between gap-1">
                    <h4 className="font-bold text-white text-sm">
                      {project.name}
                    </h4>
                    {project.achievement && (
                      <span className="text-xs font-mono text-amber-300 font-semibold">
                        {project.achievement}
                      </span>
                    )}
                  </div>
                  <div className="text-xs font-mono text-zinc-400">
                    {project.technologies.join(', ')}
                  </div>
                  <p className="text-xs text-zinc-300">{project.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Trophy size={15} />
              Achievements & Recognition
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {achievementsData.map((a) => (
                <div
                  key={a.id}
                  className="p-3 rounded-xl bg-zinc-900/50 border border-zinc-800"
                >
                  <div className="font-bold text-cyan-300">{a.title}</div>
                  <p className="text-zinc-400 mt-1 leading-snug">{a.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal footer with tip */}
        <div className="p-4 bg-zinc-900/90 border-t border-zinc-800 flex items-center justify-between text-xs font-mono text-zinc-400">
          <span>Tip: Place your printable PDF at /public/resume.pdf</span>
          <button
            type="button"
            onClick={onClose}
            className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
