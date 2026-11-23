import React from 'react';
import { Phone, MessageCircle, MapPin, User, Navigation } from 'lucide-react';
import { Language, SITE_CONFIG, getWhatsAppUrl } from '../data/business';
import { getTranslations } from '../data/translations';
import { ContactForm } from './ContactForm';

interface ContactProps {
  language: Language;
}

export const Contact: React.FC<ContactProps> = ({ language }) => {
  const t = getTranslations(language);

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#FFF9EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-wider text-[#6B9B55] mb-2">
            {t.contact.subheading}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#244B36]">
            {t.contact.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <div className="lg:col-span-5 bg-[#244B36] text-[#FFF9EF] rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-[#6B9B55] text-white text-xs font-bold mb-3">
                {t.pureVegBadge}
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold leading-snug">
                {SITE_CONFIG.businessName[language]}
              </h3>
            </div>

            <div className="space-y-4 text-sm sm:text-base">
              <div className="flex items-start gap-3.5">
                <User className="w-5 h-5 text-[#C49A50] flex-shrink-0 mt-1" />
                <div>
                  <span className="block text-xs uppercase tracking-wider text-[#FFF9EF]/70">
                    {t.about.ownerLabel}
                  </span>
                  <span className="font-bold text-lg">
                    {SITE_CONFIG.ownerName[language]}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Phone className="w-5 h-5 text-[#C49A50] flex-shrink-0 mt-1" />
                <div>
                  <span className="block text-xs uppercase tracking-wider text-[#FFF9EF]/70">
                    Mobile
                  </span>
                  <a
                    href={SITE_CONFIG.telHref}
                    className="font-bold text-lg hover:text-[#C49A50] transition-colors"
                  >
                    {SITE_CONFIG.mobileDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-[#C49A50] flex-shrink-0 mt-1" />
                <div>
                  <span className="block text-xs uppercase tracking-wider text-[#FFF9EF]/70">
                    {t.about.locationLabel}
                  </span>
                  <p className="text-[#FFF9EF]/90 leading-relaxed">
                    {SITE_CONFIG.address[language]}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2 space-y-3">
              <a
                href={SITE_CONFIG.telHref}
                className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl bg-[#C49A50] hover:bg-[#b58b42] text-[#292929] font-bold text-sm sm:text-base shadow-md transition-all"
              >
                <Phone className="w-5 h-5" />
                <span>{t.contact.callBtn}</span>
              </a>

              <a
                href={getWhatsAppUrl(SITE_CONFIG.whatsappMessages.general[language])}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl bg-[#6B9B55] hover:bg-[#5c8848] text-white font-bold text-sm sm:text-base shadow-md transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{t.contact.whatsappBtn}</span>
              </a>

              <a
                href={SITE_CONFIG.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 py-3 px-6 rounded-xl bg-white/10 hover:bg-white/20 border border-[#FFF9EF]/30 text-[#FFF9EF] font-semibold text-sm transition-all"
              >
                <Navigation className="w-4 h-4 text-[#C49A50]" />
                <span>{t.contact.directionsBtn}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ContactForm language={language} />
          </div>
        </div>
      </div>
    </section>
  );
};
