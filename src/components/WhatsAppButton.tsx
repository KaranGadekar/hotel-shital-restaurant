import React from 'react';
import { Language, SITE_CONFIG, getWhatsAppUrl } from '../data/business';
import { getTranslations } from '../data/translations';

interface WhatsAppButtonProps {
  language: Language;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ language }) => {
  const t = getTranslations(language);
  const href = getWhatsAppUrl(SITE_CONFIG.whatsappMessages.general[language]);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.whatsappTooltip}
      title={t.whatsappTooltip}
      className="fixed bottom-5 right-5 z-40 group flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white p-3.5 sm:px-4 sm:py-3.5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
    >
      <svg
        viewBox="0 0 32 32"
        className="w-6 h-6 sm:w-7 sm:h-7 fill-current flex-shrink-0"
        aria-hidden="true"
      >
        <path d="M16.004 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.256.59 4.458 1.71 6.398L3.1 29.02l6.79-1.78a12.74 12.74 0 0 0 6.114 1.56h.006c7.058 0 12.798-5.74 12.798-12.8 0-3.42-1.332-6.636-3.75-9.054A12.716 12.716 0 0 0 16.004 3.2zm0 23.438h-.004a10.6 10.6 0 0 1-5.404-1.48l-.388-.23-4.028 1.056 1.076-3.926-.252-.402a10.576 10.576 0 0 1-1.622-5.656c0-5.858 4.766-10.624 10.626-10.624 2.838 0 5.506 1.106 7.512 3.114a10.556 10.556 0 0 1 3.11 7.514c0 5.86-4.766 10.634-10.626 10.634zm5.828-7.958c-.32-.16-1.89-.932-2.182-1.038-.292-.106-.506-.16-.718.16-.214.32-.826 1.038-1.012 1.252-.186.212-.372.24-.692.08-.32-.16-1.35-.498-2.572-1.588-.95-.848-1.592-1.894-1.778-2.214-.186-.32-.02-.492.14-.652.144-.144.32-.372.48-.558.16-.186.212-.32.32-.532.106-.214.052-.4-.028-.56-.08-.16-.718-1.732-.984-2.372-.26-.622-.524-.538-.718-.548l-.612-.01c-.214 0-.56.08-.852.4-.292.32-1.118 1.092-1.118 2.664s1.144 3.09 1.304 3.304c.16.212 2.252 3.438 5.456 4.822.762.33 1.356.526 1.82.674.766.244 1.462.21 2.012.128.614-.092 1.89-.772 2.156-1.518.266-.746.266-1.384.186-1.518-.08-.134-.292-.214-.612-.374z" />
      </svg>
      <span className="hidden sm:inline text-sm font-bold pr-1">
        {t.whatsappTooltip}
      </span>
    </a>
  );
};
