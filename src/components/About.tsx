import React from 'react';
import { Leaf, User, MapPin, Building2, CheckCircle2 } from 'lucide-react';
import { Language, SITE_CONFIG } from '../data/business';
import { getTranslations } from '../data/translations';

interface AboutProps {
  language: Language;
}

export const About: React.FC<AboutProps> = ({ language }) => {
  const t = getTranslations(language);

  return (
    <section id="about" className="py-16 sm:py-24 bg-[#FFF9EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#244B36]/10 bg-white">
              <img
                src="https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=1000&q=85"
                alt={SITE_CONFIG.businessName[language]}
                loading="lazy"
                className="w-full h-[320px] sm:h-[430px] object-cover"
              />
              <div className="p-3.5 bg-[#244B36] text-[#FFF9EF] text-xs flex items-center justify-between gap-2">
                <span>{t.about.photoCaption}</span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#6B9B55] text-white font-semibold flex-shrink-0">
                  Pure Veg
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#6B9B55] mb-2">
                <Leaf className="w-4 h-4" />
                {t.pureVegBadge}
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#244B36] leading-tight">
                {t.about.heading}
              </h2>
              <p className="text-base sm:text-lg font-medium text-[#C49A50] mt-1">
                {SITE_CONFIG.businessName[language]}
              </p>
            </div>

            <p className="text-base sm:text-lg text-[#292929]/90 leading-relaxed">
              {t.about.description}
            </p>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#F1E7D5] border border-[#C49A50]/30 flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#244B36] text-[#FFF9EF] flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckCircle2 className="w-5 h-5 text-[#6B9B55]" />
              </div>
              <div>
                <h3 className="font-bold text-[#244B36] text-base sm:text-lg">
                  {t.about.identityTitle}
                </h3>
                <p className="text-sm text-[#292929]/80 mt-0.5">
                  {t.about.identityDesc}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 rounded-2xl bg-white border border-[#244B36]/10 shadow-sm flex items-start gap-3">
                <User className="w-5 h-5 text-[#C49A50] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-[#292929]/60">
                    {t.about.ownerLabel}
                  </span>
                  <span className="font-bold text-[#244B36] text-base">
                    {SITE_CONFIG.ownerName[language]}
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#244B36]/10 shadow-sm flex items-start gap-3">
                <Building2 className="w-5 h-5 text-[#6B9B55] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-[#292929]/60">
                    {t.about.categoryLabel}
                  </span>
                  <span className="font-bold text-[#244B36] text-sm sm:text-base">
                    {SITE_CONFIG.category[language]}
                  </span>
                </div>
              </div>

              <div className="sm:col-span-2 p-4 rounded-2xl bg-white border border-[#244B36]/10 shadow-sm flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#244B36] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-[#292929]/60">
                    {t.about.locationLabel}
                  </span>
                  <span className="font-medium text-[#292929] text-sm sm:text-base">
                    {SITE_CONFIG.address[language]}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
