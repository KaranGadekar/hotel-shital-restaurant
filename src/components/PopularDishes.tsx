import React from 'react';
import { MessageCircle, Sparkles } from 'lucide-react';
import { Language, getWhatsAppUrl } from '../data/business';
import { MENU_ITEMS } from '../data/menu';
import { getTranslations } from '../data/translations';

interface PopularDishesProps {
  language: Language;
}

export const PopularDishes: React.FC<PopularDishesProps> = ({ language }) => {
  const t = getTranslations(language);

  const popularIds = [
    'special-veg-thali',
    'paneer-butter-masala',
    'veg-kolhapuri',
    'masala-dosa',
    'veg-manchurian',
    'veg-biryani',
  ];

  const popularItems = popularIds
    .map((id) => MENU_ITEMS.find((item) => item.id === id))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <section className="py-16 sm:py-24 bg-[#F1E7D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#244B36]/10 text-[#244B36] text-xs sm:text-sm font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C49A50]" />
            {t.popular.subheading}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#244B36]">
            {t.popular.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {popularItems.map((dish) => {
            const dishMsg =
              language === 'mr'
                ? `नमस्कार! मला ${dish.name.mr} बद्दल माहिती हवी आहे. कृपया उपलब्धता आणि विशेष तयारीबद्दल कळवा.`
                : `Hello! I would like information about ${dish.name.en} at Hotel Shital Family Restaurant. Please let me know about availability and special preparation.`;

            return (
              <article
                key={dish.id}
                className="group bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl border border-[#244B36]/10 hover:border-[#C49A50]/60 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div
                      className="w-12 h-12 rounded-2xl bg-[#FFF9EF] border border-[#C49A50]/40 flex items-center justify-center text-2xl shadow-sm group-hover:scale-105 transition-transform"
                      aria-hidden="true"
                    >
                      {dish.emoji}
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#FFF9EF] border border-[#6B9B55]/60">
                      <span className="w-3 h-3 rounded-sm border-2 border-[#6B9B55] flex items-center justify-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#6B9B55]" />
                      </span>
                      <span className="text-[11px] font-bold text-[#244B36]">Pure Veg</span>
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-[#244B36] leading-snug">
                    {language === 'mr' ? dish.name.mr : dish.name.en}
                  </h3>
                  <p className="text-xs font-semibold text-[#C49A50] mt-0.5 mb-3">
                    {language === 'mr' ? dish.name.en : dish.name.mr}
                  </p>
                  <p className="text-sm text-[#292929]/80 leading-relaxed mb-6">
                    {dish.description[language]}
                  </p>
                </div>

                <a
                  href={getWhatsAppUrl(dishMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#244B36] hover:bg-[#1B3A29] text-[#FFF9EF] text-sm font-semibold transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#6B9B55]" />
                  <span>{t.popular.enquireBtn}</span>
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
