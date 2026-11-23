import React from 'react';
import { Clock } from 'lucide-react';
import { Language, SITE_CONFIG } from '../data/business';
import { getTranslations } from '../data/translations';

interface OpeningHoursProps {
  language: Language;
}

export const OpeningHours: React.FC<OpeningHoursProps> = ({ language }) => {
  const t = getTranslations(language);

  return (
    <section id="hours" className="py-16 sm:py-24 bg-[#F1E7D5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl border border-[#244B36]/15 overflow-hidden">
          <div className="bg-[#244B36] p-6 sm:p-8 text-[#FFF9EF] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#6B9B55]/20 border border-[#6B9B55] flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-[#C49A50]" />
              </div>
              <div>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold">
                  {t.hours.heading}
                </h2>
                <p className="text-xs sm:text-sm text-[#FFF9EF]/80 mt-0.5">
                  {t.hours.statusText}
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6B9B55] text-white font-bold text-xs sm:text-sm self-start sm:self-center shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
              <span>{t.hours.badge}</span>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            <div className="divide-y divide-[#F1E7D5]">
              {SITE_CONFIG.openingHours.days.map((day) => (
                <div
                  key={day.id}
                  className="py-3.5 flex items-center justify-between gap-4"
                >
                  <span className="font-semibold text-[#292929] text-sm sm:text-base">
                    {language === 'mr' ? day.mr : day.en}
                  </span>
                  <span className="inline-flex items-center gap-2 font-bold text-[#244B36] text-xs sm:text-sm bg-[#F1E7D5] px-3.5 py-1.5 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-[#6B9B55]" />
                    {language === 'mr' ? day.timeMr : day.timeEn}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
