import React from 'react';
import { Leaf, Phone, MessageCircle, MapPin, User } from 'lucide-react';
import { Language, SITE_CONFIG, getWhatsAppUrl } from '../data/business';
import { getTranslations } from '../data/translations';

interface FooterProps {
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  const t = getTranslations(language);

  const hasInstagram = Boolean(SITE_CONFIG.socialLinks.instagram);
  const hasFacebook = Boolean(SITE_CONFIG.socialLinks.facebook);

  return (
    <footer className="bg-[#1B3A29] text-[#FFF9EF] border-t border-[#C49A50]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-10 border-b border-white/15">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-[#244B36] border border-[#6B9B55] flex items-center justify-center">
                <Leaf className="w-6 h-6 text-[#6B9B55]" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-[#FFF9EF]">
                  {SITE_CONFIG.businessName[language]}
                </h3>
                <span className="inline-block text-xs font-bold text-[#6B9B55]">
                  {t.pureVegBadge}
                </span>
              </div>
            </div>

            <p className="text-sm text-[#FFF9EF]/80 leading-relaxed max-w-md">
              {t.about.description}
            </p>

            <div className="flex items-center gap-2 text-sm text-[#C49A50] font-semibold">
              <User className="w-4 h-4" />
              <span>
                {t.about.ownerLabel}: {SITE_CONFIG.ownerName[language]}
              </span>
            </div>

            {(hasInstagram || hasFacebook) && (
              <div className="flex items-center gap-3 pt-2">
                {hasInstagram && (
                  <a
                    href={SITE_CONFIG.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold"
                  >
                    Instagram
                  </a>
                )}
                {hasFacebook && (
                  <a
                    href={SITE_CONFIG.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold"
                  >
                    Facebook
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading text-lg font-bold text-[#C49A50]">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-sm text-[#FFF9EF]/85">
              <li>
                <a href="#home" className="hover:text-[#C49A50] transition-colors">
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#C49A50] transition-colors">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#C49A50] transition-colors">
                  {t.nav.menu}
                </a>
              </li>
              <li>
                <a href="#hours" className="hover:text-[#C49A50] transition-colors">
                  {t.nav.hours}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#C49A50] transition-colors">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Direct Actions */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-heading text-lg font-bold text-[#C49A50]">
              {t.footer.contactTitle}
            </h4>
            <div className="space-y-2.5 text-sm text-[#FFF9EF]/85">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C49A50] flex-shrink-0 mt-1" />
                <span>{SITE_CONFIG.address[language]}</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C49A50] flex-shrink-0" />
                <a href={SITE_CONFIG.telHref} className="hover:text-[#C49A50] font-semibold">
                  {SITE_CONFIG.mobileDisplay}
                </a>
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5 pt-2">
              <a
                href={SITE_CONFIG.telHref}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#C49A50] text-[#292929] text-xs font-bold"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{t.nav.callNow}</span>
              </a>
              <a
                href={getWhatsAppUrl(SITE_CONFIG.whatsappMessages.general[language])}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#6B9B55] text-white text-xs font-bold"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
              <a
                href={SITE_CONFIG.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Google Maps</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Exclusive GMC Design Credit */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-[#FFF9EF]/75">
          <p>
            © {new Date().getFullYear()} {SITE_CONFIG.businessName[language]}. {t.footer.rights}
          </p>
          <p className="text-center sm:text-right">
            <span>{SITE_CONFIG.credit.prefix}</span>
            <a
              href={SITE_CONFIG.credit.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#C49A50] hover:text-[#FFF9EF] underline decoration-[#C49A50]/50 underline-offset-4 transition-colors"
            >
              {SITE_CONFIG.credit.name}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
