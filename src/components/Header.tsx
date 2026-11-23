import React, { useState, useEffect } from 'react';
import { Leaf, Phone, Menu as MenuIcon, X, MessageCircle } from 'lucide-react';
import { Language, SITE_CONFIG, getWhatsAppUrl } from '../data/business';
import { getTranslations } from '../data/translations';
import { LanguageSwitcher } from './LanguageSwitcher';

interface HeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Header: React.FC<HeaderProps> = ({ language, onLanguageChange }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = getTranslations(language);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: t.nav.home },
    { href: '#about', label: t.nav.about },
    { href: '#menu', label: t.nav.menu },
    { href: '#dining', label: t.nav.dining },
    { href: '#hours', label: t.nav.hours },
    { href: '#contact', label: t.nav.contact },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#FFF9EF]/95 backdrop-blur-md shadow-md border-b border-[#244B36]/10'
          : 'bg-[#FFF9EF] border-b border-[#244B36]/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-2">
          {/* Logo & Brand */}
          <a
            href="#home"
            className="flex items-center gap-2.5 sm:gap-3 min-w-0 group focus:outline-none"
          >
            <div className="relative flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#244B36] flex items-center justify-center shadow-sm border border-[#C49A50]/40 group-hover:bg-[#1d3d2c] transition-colors">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg border-2 border-[#6B9B55] flex items-center justify-center bg-[#FFF9EF]">
                <Leaf className="w-4 h-4 sm:w-5 sm:h-5 text-[#244B36] fill-[#6B9B55]" />
              </div>
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-bold text-sm sm:text-lg text-[#244B36] truncate leading-tight">
                  {SITE_CONFIG.shortName[language]}
                </span>
                <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-[#6B9B55]/15 border border-[#6B9B55] text-[#244B36] text-[10px] font-bold uppercase tracking-wide flex-shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6B9B55]" />
                  Pure Veg
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-[#292929]/75 truncate">
                {SITE_CONFIG.category[language]}
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-5" aria-label="Primary Navigation">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[#292929] hover:text-[#244B36] transition-colors py-1 border-b-2 border-transparent hover:border-[#C49A50]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right Controls */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            <LanguageSwitcher language={language} onChange={onLanguageChange} />
            <a
              href={SITE_CONFIG.telHref}
              className="inline-flex items-center gap-2 bg-[#244B36] hover:bg-[#1B3A29] text-[#FFF9EF] text-sm font-semibold px-4 py-2.5 rounded-full shadow-sm transition-all"
            >
              <Phone className="w-4 h-4 text-[#C49A50]" />
              <span>{t.nav.callNow}</span>
            </a>
          </div>

          {/* Mobile Controls */}
          <div className="flex md:hidden items-center gap-1.5 flex-shrink-0">
            <a
              href={SITE_CONFIG.telHref}
              className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#244B36] text-[#FFF9EF] shadow-sm"
              aria-label={t.nav.callNow}
            >
              <Phone className="w-4 h-4 text-[#C49A50]" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-[#244B36] hover:bg-[#F1E7D5] focus:outline-none"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Navigation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-[#FFF9EF] border-b border-[#244B36]/15 ${
          mobileMenuOpen ? 'max-h-[540px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-3 pb-5 space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-[#F1E7D5]">
            <span className="text-xs font-semibold text-[#244B36] uppercase tracking-wider">
              {language === 'mr' ? 'भाषा निवडा' : 'Select Language'}
            </span>
            <LanguageSwitcher language={language} onChange={onLanguageChange} />
          </div>

          <nav className="grid grid-cols-1 gap-1" aria-label="Mobile Navigation">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="block px-3 py-2.5 rounded-xl text-base font-medium text-[#292929] hover:bg-[#F1E7D5] hover:text-[#244B36] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="grid grid-cols-2 gap-2.5 pt-2">
            <a
              href={SITE_CONFIG.telHref}
              onClick={handleNavClick}
              className="flex items-center justify-center gap-2 bg-[#244B36] text-[#FFF9EF] font-semibold text-sm py-3 px-4 rounded-xl shadow-sm"
            >
              <Phone className="w-4 h-4 text-[#C49A50]" />
              <span>{t.nav.callNow}</span>
            </a>
            <a
              href={getWhatsAppUrl(SITE_CONFIG.whatsappMessages.general[language])}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNavClick}
              className="flex items-center justify-center gap-2 bg-[#6B9B55] text-white font-semibold text-sm py-3 px-4 rounded-xl shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t.nav.whatsapp}</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
