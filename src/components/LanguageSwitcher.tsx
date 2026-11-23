import React from 'react';
import { Globe } from 'lucide-react';
import { Language } from '../data/business';

interface LanguageSwitcherProps {
  language: Language;
  onChange: (lang: Language) => void;
  variant?: 'light' | 'dark';
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  language,
  onChange,
  variant = 'light',
}) => {
  const isDark = variant === 'dark';

  return (
    <div
      className={`inline-flex items-center rounded-full border p-1 text-xs sm:text-sm font-medium transition-colors ${
        isDark
          ? 'border-[#C49A50]/40 bg-[#1B3A29] text-[#FFF9EF]'
          : 'border-[#244B36]/20 bg-[#F1E7D5] text-[#292929]'
      }`}
      role="group"
      aria-label="Language selector"
    >
      <Globe className="ml-1.5 mr-1 h-3.5 w-3.5 text-[#6B9B55]" aria-hidden="true" />
      <button
        type="button"
        onClick={() => onChange('mr')}
        className={`rounded-full px-2.5 py-1 transition-all ${
          language === 'mr'
            ? 'bg-[#244B36] text-[#FFF9EF] shadow-sm font-semibold'
            : isDark
            ? 'text-[#FFF9EF]/80 hover:text-white'
            : 'text-[#292929]/80 hover:text-[#244B36]'
        }`}
        aria-pressed={language === 'mr'}
      >
        मराठी
      </button>
      <span className="px-0.5 opacity-40 select-none">|</span>
      <button
        type="button"
        onClick={() => onChange('en')}
        className={`rounded-full px-2.5 py-1 transition-all ${
          language === 'en'
            ? 'bg-[#244B36] text-[#FFF9EF] shadow-sm font-semibold'
            : isDark
            ? 'text-[#FFF9EF]/80 hover:text-white'
            : 'text-[#292929]/80 hover:text-[#244B36]'
        }`}
        aria-pressed={language === 'en'}
      >
        English
      </button>
    </div>
  );
};
