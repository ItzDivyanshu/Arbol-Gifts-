import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({ title, subtitle, className = '' }: SectionHeadingProps) {
  return (
    <div className={`text-left mb-12 ${className}`}>
      {subtitle && (
        <span className="text-printo-orange font-medium mb-2 block">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 relative inline-block">
        {title}
        <span className="absolute bottom-0 left-0 w-16 h-1 bg-printo-orange mt-2"></span>
      </h2>
    </div>
  );
}
