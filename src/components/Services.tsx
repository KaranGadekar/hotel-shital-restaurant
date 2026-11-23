import React from 'react';
import {
  UtensilsCrossed,
  ShoppingBag,
  Users,
  UsersRound,
  MessageSquare,
} from 'lucide-react';
import { Language } from '../data/business';
import { SERVICES_DATA, ServiceItem } from '../data/facilities';
import { getTranslations } from '../data/translations';

interface ServicesProps {
  language: Language;
}

const serviceIcons: Record<ServiceItem['iconName'], React.ReactNode> = {
  UtensilsCrossed: <UtensilsCrossed className="w-6 h-6" />,
  ShoppingBag: <ShoppingBag className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
  UsersRound: <UsersRound className="w-6 h-6" />,
  MessageSquare: <MessageSquare className="w-6 h-6" />,
};

export const Services: React.FC<ServicesProps> = ({ language }) => {
  const t = getTranslations(language);
  const enabledServices = SERVICES_DATA.filter((s) => s.enabled);

  if (enabledServices.length === 0) return null;

  return (
    <section className="py-16 sm:py-24 bg-[#FFF9EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-wider text-[#6B9B55] mb-2">
            {t.services.subheading}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#244B36]">
            {t.services.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {enabledServices.map((service) => (
            <div
              key={service.id}
              className="p-6 rounded-3xl bg-white border border-[#244B36]/10 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#244B36] text-[#C49A50] flex items-center justify-center mb-4">
                  {serviceIcons[service.iconName]}
                </div>
                <h3 className="font-heading text-xl font-bold text-[#244B36] mb-2">
                  {service.title[language]}
                </h3>
                <p className="text-sm text-[#292929]/80 leading-relaxed">
                  {service.description[language]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
