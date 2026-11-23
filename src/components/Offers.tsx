import React from 'react';
import { UtensilsCrossed, Leaf } from 'lucide-react';
import { Language } from '../data/business';
import { getTranslations } from '../data/translations';

interface OffersProps {
  language: Language;
}

export const Offers: React.FC<OffersProps> = ({ language }) => {
  const t = getTranslations(language);

  return (
    <section className="py-14 sm:py-20 bg-[#244B36] text-[#FFF9EF]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#C49A50]/20 border border-[#C49A50]/50 text-[#C49A50] text-xs sm:text-sm font-bold mb-4">
          <Leaf className="w-3.5 h-3.5" />
          {t.highlights.heading}
        </span>

        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#FFF9EF] mb-4">
          {t.highlights.title}
        </h2>

        <p className="text-base sm:text-lg text-[#FFF9EF]/85 max-w-2xl mx-auto mb-8">
          {t.highlights.subtitle}
        </p>

        <a
          href="#menu"
          className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#C49A50] hover:bg-[#b58b42] text-[#292929] font-bold text-sm sm:text-base shadow-lg transition-all"
        >
          <UtensilsCrossed className="w-5 h-5" />
          <span>{t.highlights.cta}</span>
        </a>
      </div>
    </section>
  );
};
