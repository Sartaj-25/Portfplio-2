import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  align = 'center',
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <div
      className={`mb-12 md:mb-16 ${
        isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'
      } ${className}`}
    >
      {badge && (
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide mb-3 bg-blue-500/10 text-cyan-400 border border-blue-500/20 shadow-[0_0_12px_rgba(59,130,246,0.15)] ${
            isCenter ? 'mx-auto' : ''
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          {badge}
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-zinc-400 leading-relaxed font-normal">
          {subtitle}
        </p>
      )}

      <div
        className={`mt-4 h-1 w-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full ${
          isCenter ? 'mx-auto' : ''
        }`}
      />
    </div>
  );
};
