import React from 'react';
import { UtensilsCrossed, Phone, MessageCircle, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { Language, SITE_CONFIG, getWhatsAppUrl } from '../data/business';
import { getTranslations } from '../data/translations';

interface HeroProps {
  language: Language;
}

export const Hero: React.FC<HeroProps> = ({ language }) => {
  const t = getTranslations(language);

  return (
    <section
      id="home"
      className="relative min-h-[86vh] flex items-center overflow-hidden bg-[#244B36]"
    >
      <img
        src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1800&q=85"
        alt={SITE_CONFIG.businessName[language]}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(22, 46, 33, 0.86) 0%, rgba(28, 58, 41, 0.82) 55%, rgba(20, 42, 30, 0.92) 100%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 w-full">
        <div className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-2.5 mb-5">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#6B9B55] text-white text-xs sm:text-sm font-bold shadow-sm">
              <ShieldCheck className="w-4 h-4" />
              {t.pureVegBadge}
            </span>

            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FFF9EF]/15 backdrop-blur-sm border border-[#C49A50]/50 text-[#FFF9EF] text-xs sm:text-sm font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#C49A50]" />
              {SITE_CONFIG.shortLocation[language]}
            </span>

            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#244B36]/90 border border-[#6B9B55]/60 text-[#FFF9EF] text-xs sm:text-sm font-medium">
              <Clock className="w-3.5 h-3.5 text-[#6B9B55]" />
              {t.hero.open24Badge}
            </span>
          </div>

          <p className="text-[#C49A50] font-semibold tracking-wide text-sm sm:text-lg mb-2">
            {SITE_CONFIG.businessName[language]}
          </p>

          <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold text-[#FFF9EF] leading-tight mb-5">
            {t.hero.heading}
          </h1>

          <p className="text-base sm:text-xl text-[#FFF9EF]/90 leading-relaxed mb-8 max-w-2xl">
            {t.hero.subtext}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap gap-3 sm:gap-4">
            <a
              href="#menu"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#C49A50] hover:bg-[#b58b42] text-[#292929] font-bold text-sm sm:text-base shadow-lg transition-all"
            >
              <UtensilsCrossed className="w-5 h-5" />
              <span>{t.hero.exploreMenu}</span>
            </a>

            <a
              href={SITE_CONFIG.telHref}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#FFF9EF] hover:bg-[#F1E7D5] text-[#244B36] font-bold text-sm sm:text-base shadow-lg transition-all"
            >
              <Phone className="w-5 h-5 text-[#244B36]" />
              <span>{t.hero.callNow}</span>
            </a>

            <a
              href={getWhatsAppUrl(SITE_CONFIG.whatsappMessages.general[language])}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#6B9B55] hover:bg-[#5c8848] text-white font-bold text-sm sm:text-base shadow-lg transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              <span>{t.hero.whatsappEnquiry}</span>
            </a>

            <a
              href={SITE_CONFIG.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-[#FFF9EF]/40 text-[#FFF9EF] font-semibold text-sm sm:text-base transition-all"
            >
              <MapPin className="w-5 h-5 text-[#C49A50]" />
              <span>{t.hero.getDirections}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
