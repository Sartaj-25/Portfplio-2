import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { personalData } from '../data/personal';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#060608] border-t border-zinc-800/80 py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-800/60">
          {/* Brand & Tagline */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2.5 mb-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/40 flex items-center justify-center">
                <span className="font-mono font-bold text-xs bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  SA
                </span>
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                {personalData.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-md font-light">
              Building intelligent systems and privacy-first digital experiences.
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
            >
              <GithubIcon size={17} />
            </a>

            <a
              href={personalData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-blue-400 hover:border-zinc-700 transition-colors"
            >
              <LinkedinIcon size={17} />
            </a>

            <a
              href={`mailto:${personalData.contact.email}`}
              aria-label="Send Email"
              className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-cyan-400 hover:border-zinc-700 transition-colors"
            >
              <Mail size={17} />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300 hover:text-white hover:border-blue-500/40 transition-all ml-2"
              title="Back to Top"
            >
              <ArrowUp size={14} className="text-cyan-400" />
              <span>Top</span>
            </button>
          </div>
        </div>

        {/* Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-3 font-mono">
          <div>
            © 2026 {personalData.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-[11px]">
            <span>Designed & Engineered with React, TypeScript & Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
