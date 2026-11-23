import React from 'react';
import { Users, Armchair, Utensils, ShoppingBag, Car, Snowflake } from 'lucide-react';
import { Language } from '../data/business';
import { FACILITIES_DATA, FacilityItem } from '../data/facilities';
import { getTranslations } from '../data/translations';

interface FacilitiesProps {
  language: Language;
}

const iconMap: Record<FacilityItem['iconName'], React.ReactNode> = {
  Users: <Users className="w-6 h-6" />,
  Armchair: <Armchair className="w-6 h-6" />,
  Utensils: <Utensils className="w-6 h-6" />,
  ShoppingBag: <ShoppingBag className="w-6 h-6" />,
  Car: <Car className="w-6 h-6" />,
  Snowflake: <Snowflake className="w-6 h-6" />,
};

export const Facilities: React.FC<FacilitiesProps> = ({ language }) => {
  const t = getTranslations(language);
  const enabledFacilities = FACILITIES_DATA.filter((f) => f.enabled);

  if (enabledFacilities.length === 0) return null;

  return (
    <section id="dining" className="py-16 sm:py-24 bg-[#FFF9EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-wider text-[#6B9B55] mb-2">
            {t.dining.subheading}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#244B36]">
            {t.dining.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {enabledFacilities.map((facility) => (
            <div
              key={facility.id}
              className="bg-white rounded-3xl p-6 border border-[#244B36]/10 shadow-sm hover:shadow-lg transition-all flex flex-col"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#F1E7D5] text-[#244B36] flex items-center justify-center mb-4">
                {iconMap[facility.iconName]}
              </div>
              <h3 className="font-heading text-xl font-bold text-[#244B36] mb-2">
                {facility.title[language]}
              </h3>
              <p className="text-sm text-[#292929]/80 leading-relaxed">
                {facility.description[language]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
