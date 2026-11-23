import React, { useState, useMemo } from 'react';
import { Search, MessageCircle, X, Utensils, SlidersHorizontal } from 'lucide-react';
import { Language, SITE_CONFIG, getWhatsAppUrl } from '../data/business';
import { MENU_CATEGORIES, MENU_ITEMS, MenuCategoryId } from '../data/menu';
import { getTranslations } from '../data/translations';

interface MenuProps {
  language: Language;
}

export const Menu: React.FC<MenuProps> = ({ language }) => {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategoryId>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const t = getTranslations(language);

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !q ||
        item.name.en.toLowerCase().includes(q) ||
        item.name.mr.toLowerCase().includes(q) ||
        item.description.en.toLowerCase().includes(q) ||
        item.description.mr.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const getCategoryLabel = (catId: MenuCategoryId) => {
    const found = MENU_CATEGORIES.find((c) => c.id === catId);
    return found ? found.label[language] : '';
  };

  return (
    <section id="menu" className="py-16 sm:py-24 bg-[#FFF9EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#6B9B55] mb-2">
            <Utensils className="w-4 h-4" />
            {t.menu.subheading}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#244B36]">
            {t.menu.heading}
          </h2>
        </div>

        {/* Customization & Special Preparation Preferences Box */}
        <div className="max-w-4xl mx-auto mb-8 p-5 sm:p-6 rounded-2xl bg-[#F1E7D5] border border-[#C49A50]/40">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#244B36] text-[#C49A50] flex items-center justify-center flex-shrink-0 mt-0.5">
              <SlidersHorizontal className="w-4 h-4" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-[#244B36] text-sm sm:text-base">
                {t.menu.customBannerTitle}
              </h3>
              <p className="text-xs sm:text-sm text-[#292929]/80 mt-1">
                {t.menu.customBannerNote}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {t.menu.customTags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block px-3 py-1 rounded-full bg-white text-[#244B36] text-xs font-medium border border-[#244B36]/15"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Search Input */}
        <div className="max-w-md mx-auto mb-6">
          <div className="relative">
            <Search className="w-4 h-4 text-[#244B36]/60 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.menu.searchPlaceholder}
              className="w-full pl-11 pr-10 py-3 rounded-2xl bg-white border border-[#244B36]/20 text-sm text-[#292929] placeholder:text-[#292929]/50 focus:outline-none focus:ring-2 focus:ring-[#244B36]"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#292929]/50 hover:text-[#244B36]"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div
          className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 sm:flex-wrap sm:justify-center no-scrollbar"
          role="tablist"
          aria-label="Menu categories"
        >
          {MENU_CATEGORIES.map((category) => {
            const active = selectedCategory === category.id;
            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setSelectedCategory(category.id)}
                className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                  active
                    ? 'bg-[#244B36] text-[#FFF9EF] shadow-md'
                    : 'bg-white text-[#292929] border border-[#244B36]/15 hover:bg-[#F1E7D5]'
                }`}
              >
                <span aria-hidden="true">{category.emoji}</span>
                <span>{category.label[language]}</span>
              </button>
            );
          })}
        </div>

        {/* Text-Based Menu Cards Grid (Strictly No Images, Strictly No Prices) */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-14 bg-white rounded-3xl border border-[#244B36]/10">
            <p className="text-base text-[#292929]/80 mb-4">{t.menu.noResults}</p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="px-5 py-2.5 rounded-xl bg-[#244B36] text-[#FFF9EF] text-sm font-semibold"
            >
              {t.menu.resetFilter}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {filteredItems.map((item) => {
              const itemMsg =
                language === 'mr'
                  ? `नमस्कार! मला ${item.name.mr} बद्दल माहिती हवी आहे. कृपया उपलब्धता आणि विशेष तयारीबद्दल कळवा.`
                  : `Hello! I would like information about ${item.name.en} at Hotel Shital Family Restaurant. Please let me know about availability and special preparation.`;

              return (
                <article
                  key={item.id}
                  className="group bg-white rounded-2xl p-5 border border-[#244B36]/12 hover:border-[#C49A50]/70 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex items-center gap-3 min-w-0">
                        <span
                          className="w-11 h-11 rounded-xl bg-[#FFF9EF] border border-[#C49A50]/40 flex items-center justify-center text-xl flex-shrink-0 group-hover:scale-105 transition-transform"
                          aria-hidden="true"
                        >
                          {item.emoji}
                        </span>
                        <div className="min-w-0">
                          <h3 className="font-heading text-lg font-bold text-[#244B36] leading-snug">
                            {language === 'mr' ? item.name.mr : item.name.en}
                          </h3>
                          <p className="text-xs font-medium text-[#C49A50] truncate">
                            {language === 'mr' ? item.name.en : item.name.mr}
                          </p>
                        </div>
                      </div>

                      <span
                        className="w-5 h-5 rounded bg-[#FFF9EF] border-2 border-[#6B9B55] flex items-center justify-center flex-shrink-0 mt-1"
                        title="Pure Vegetarian"
                      >
                        <span className="w-2 h-2 rounded-full bg-[#6B9B55]" />
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#292929]/80 leading-relaxed mb-4">
                      {item.description[language]}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#F1E7D5] flex items-center justify-between gap-3">
                    <span className="text-[11px] font-semibold text-[#244B36]/70 bg-[#F1E7D5] px-2.5 py-1 rounded-full truncate">
                      {getCategoryLabel(item.category)}
                    </span>

                    <a
                      href={getWhatsAppUrl(itemMsg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#244B36] hover:bg-[#1B3A29] text-[#FFF9EF] text-xs font-semibold transition-colors flex-shrink-0"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-[#6B9B55]" />
                      <span>{t.menu.enquireDish}</span>
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* Menu Footer Enquiry Callout */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-[#244B36] text-[#FFF9EF] text-center shadow-lg">
          <p className="text-base sm:text-xl font-medium max-w-2xl mx-auto mb-5">
            {t.menu.footerNote}
          </p>
          <a
            href={getWhatsAppUrl(SITE_CONFIG.whatsappMessages.menu[language])}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#6B9B55] hover:bg-[#5c8848] text-white font-bold text-sm sm:text-base shadow-md transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            <span>{t.menu.whatsappCta}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
