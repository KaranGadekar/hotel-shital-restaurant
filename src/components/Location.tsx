import React, { useState } from 'react';
import { MapPin, Navigation, Copy, Check } from 'lucide-react';
import { Language, SITE_CONFIG } from '../data/business';
import { getTranslations } from '../data/translations';

interface LocationProps {
  language: Language;
}

export const Location: React.FC<LocationProps> = ({ language }) => {
  const [copied, setCopied] = useState(false);
  const t = getTranslations(language);

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(
        `${SITE_CONFIG.businessName.en}, ${SITE_CONFIG.address.en}`
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-[#F1E7D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#244B36] mb-2">
            <MapPin className="w-4 h-4 text-[#C49A50]" />
            {t.location.subheading}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#244B36]">
            {t.location.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-[#244B36]/10 flex flex-col justify-between">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-[#6B9B55]/15 text-[#244B36] text-xs font-bold mb-4">
                {t.pureVegBadge}
              </span>
              <h3 className="font-heading text-2xl font-bold text-[#244B36] mb-3">
                {SITE_CONFIG.businessName[language]}
              </h3>
              <div className="flex items-start gap-3 text-[#292929]/85 text-base leading-relaxed mb-6">
                <MapPin className="w-5 h-5 text-[#C49A50] flex-shrink-0 mt-1" />
                <p>{SITE_CONFIG.address[language]}</p>
              </div>
            </div>

            <div className="space-y-3">
              <a
                href={SITE_CONFIG.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#244B36] hover:bg-[#1B3A29] text-[#FFF9EF] font-bold text-sm sm:text-base shadow-sm transition-all"
              >
                <Navigation className="w-5 h-5 text-[#C49A50]" />
                <span>{t.location.directionsBtn}</span>
              </a>

              <button
                type="button"
                onClick={handleCopyAddress}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#F1E7D5] hover:bg-[#e5d8c0] text-[#244B36] font-semibold text-sm transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-[#6B9B55]" />
                    <span>{t.location.copiedBtn}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>{t.location.copyBtn}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 rounded-3xl overflow-hidden shadow-md border border-[#244B36]/15 bg-white min-h-[320px] sm:min-h-[380px]">
            <iframe
              title={SITE_CONFIG.businessName.en}
              src={SITE_CONFIG.googleMapsEmbedUrl}
              className="w-full h-full min-h-[320px] sm:min-h-[380px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
