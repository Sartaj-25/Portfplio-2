import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Terminal, Command } from 'lucide-react';
import { personalData } from '../data/personal';

interface NavbarProps {
  onOpenTerminal?: () => void;
  onOpenCommandPalette?: () => void;
  onOpenResume?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenTerminal,
  onOpenCommandPalette,
  onOpenResume,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Achievements', href: '#achievements', id: 'achievements' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);

      // Scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      // Detect active section
      const sections = navLinks.map((link) => link.id);
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top scroll progress indicator bar */}
      <div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#09090B]/85 backdrop-blur-md border-b border-zinc-800/80 shadow-lg shadow-black/20 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Brand Name */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
              className="group flex items-center gap-3 cursor-pointer select-none"
            >
              <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/40 flex items-center justify-center transition-all duration-300 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                <span className="font-mono font-bold text-sm bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  SA
                </span>
                <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-cyan-400 animate-ping opacity-75" />
                <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-cyan-400" />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-zinc-100 tracking-tight group-hover:text-white transition-colors">
                  {personalData.name}
                </span>
                <span className="text-[11px] font-mono text-zinc-400 -mt-0.5 tracking-wider">
                  DEV // AI // ZK
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 bg-zinc-900/60 p-1.5 rounded-full border border-zinc-800/70 backdrop-blur-md">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                      isActive
                        ? 'text-white bg-blue-600/30 border border-blue-500/40 shadow-[0_0_12px_rgba(59,130,246,0.25)]'
                        : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Action Buttons on Right */}
            <div className="hidden sm:flex items-center gap-2.5">
              {/* Terminal Quick Launcher */}
              {onOpenTerminal && (
                <button
                  type="button"
                  onClick={onOpenTerminal}
                  title="Open Interactive Terminal (~)"
                  className="p-2 rounded-lg bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-cyan-400 transition-colors"
                >
                  <Terminal size={17} />
                  <span className="sr-only">Interactive Terminal</span>
                </button>
              )}

              {/* Command Palette Trigger */}
              {onOpenCommandPalette && (
                <button
                  type="button"
                  onClick={onOpenCommandPalette}
                  title="Command Palette (Ctrl+K)"
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-zinc-200 text-xs font-mono transition-colors"
                >
                  <Command size={14} className="text-zinc-500" />
                  <span className="hidden xl:inline text-zinc-400">Search</span>
                  <kbd className="text-[10px] bg-zinc-800 px-1.5 py-0.5 rounded text-zinc-400 border border-zinc-700">⌘K</kbd>
                </button>
              )}

              {/* Resume Trigger */}
              {onOpenResume && (
                <button
                  type="button"
                  onClick={onOpenResume}
                  className="px-3 py-1.5 text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 rounded-lg transition-colors"
                >
                  Resume
                </button>
              )}

              {/* Let's Talk CTA */}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                className="relative inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold rounded-lg text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 transition-all shadow-[0_0_18px_rgba(59,130,246,0.35)] hover:shadow-[0_0_24px_rgba(34,211,238,0.5)] active:scale-95"
              >
                Let's Talk
                <ArrowUpRight size={14} />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              {onOpenCommandPalette && (
                <button
                  type="button"
                  onClick={onOpenCommandPalette}
                  aria-label="Open Command Palette"
                  className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Command size={18} />
                </button>
              )}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle mobile menu"
                className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white focus:outline-none"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-zinc-800/90 bg-[#09090B]/95 backdrop-blur-xl px-4 pt-3 pb-6 animate-fadeIn">
            <nav className="flex flex-col gap-1.5 mb-4">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors flex items-center justify-between ${
                      isActive
                        ? 'text-cyan-400 bg-blue-950/40 border border-blue-800/40'
                        : 'text-zinc-300 hover:text-white hover:bg-zinc-900/60'
                    }`}
                  >
                    {link.label}
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />}
                  </a>
                );
              })}
            </nav>

            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-zinc-800/60">
              {onOpenResume && (
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="w-full py-2 px-3 text-xs font-medium text-center rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-200"
                >
                  View Resume
                </button>
              )}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                className="w-full py-2 px-3 text-xs font-semibold text-center rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md flex items-center justify-center gap-1"
              >
                Let's Talk <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
