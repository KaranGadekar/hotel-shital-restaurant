import React, { useState } from 'react';
import {
  User,
  Phone,
  ListFilter,
  MessageSquare,
  MessageCircle,
  CheckCircle2,
} from 'lucide-react';
import { Language, getWhatsAppUrl } from '../data/business';
import { getTranslations } from '../data/translations';

interface ContactFormProps {
  language: Language;
}

interface FormState {
  fullName: string;
  mobile: string;
  enquiryType: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  mobile?: string;
  message?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ language }) => {
  const t = getTranslations(language);

  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    mobile: '',
    enquiryType: 'menu',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [whatsappUrl, setWhatsappUrl] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = t.form.errors.nameRequired;
    }

    const cleanedMobile = formData.mobile.replace(/[\s\-+]/g, '').replace(/^91/, '');
    if (!cleanedMobile) {
      newErrors.mobile = t.form.errors.mobileRequired;
    } else if (!/^[6-9]\d{9}$/.test(cleanedMobile)) {
      newErrors.mobile = t.form.errors.mobileInvalid;
    }

    if (!formData.message.trim()) {
      newErrors.message = t.form.errors.messageRequired;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const selectedTypeLabel =
      t.form.types[formData.enquiryType as keyof typeof t.form.types] || formData.enquiryType;

    const formattedMessage =
      language === 'mr'
        ? `नमस्कार हॉटेल शितल फॅमिली रेस्टॉरंट!\n\nनाव: ${formData.fullName.trim()}\nमोबाईल: ${formData.mobile.trim()}\nचौकशीचा प्रकार: ${selectedTypeLabel}\nसंदेश: ${formData.message.trim()}`
        : `Hello Hotel Shital Family Restaurant!\n\nName: ${formData.fullName.trim()}\nMobile: ${formData.mobile.trim()}\nEnquiry Type: ${selectedTypeLabel}\nMessage: ${formData.message.trim()}`;

    const url = getWhatsAppUrl(formattedMessage);
    setWhatsappUrl(url);

    // Open WhatsApp directly in a new tab/app
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-[#244B36]/10">
      <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#244B36] mb-2">
        {t.form.heading}
      </h3>
      <p className="text-sm sm:text-base text-[#292929]/80 mb-6">
        {t.form.subtext}
      </p>

      {whatsappUrl && (
        <div className="mb-6 p-5 rounded-2xl bg-[#F1E7D5] border border-[#6B9B55] space-y-3">
          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-[#244B36] flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-[#244B36] text-base">
                {t.form.whatsappReadyTitle}
              </h4>
              <p className="text-xs sm:text-sm text-[#292929]/85 mt-1">
                {t.form.whatsappReadyBody}
              </p>
            </div>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-sm transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{t.form.openWhatsappBackupBtn}</span>
          </a>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        {/* 1. Full Name */}
        <div>
          <label
            htmlFor="enquiry-name"
            className="block text-sm font-semibold text-[#244B36] mb-1.5"
          >
            {t.form.nameLabel} <span className="text-red-600">*</span>
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-[#244B36]/50 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              id="enquiry-name"
              type="text"
              required
              value={formData.fullName}
              onChange={(e) => {
                setFormData({ ...formData, fullName: e.target.value });
                if (errors.fullName) setErrors({ ...errors, fullName: undefined });
              }}
              placeholder={t.form.namePlaceholder}
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FFF9EF] border border-[#244B36]/20 text-sm text-[#292929] focus:outline-none focus:ring-2 focus:ring-[#244B36]"
            />
          </div>
          {errors.fullName && (
            <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>
          )}
        </div>

        {/* 2. Mobile Number */}
        <div>
          <label
            htmlFor="enquiry-mobile"
            className="block text-sm font-semibold text-[#244B36] mb-1.5"
          >
            {t.form.mobileLabel} <span className="text-red-600">*</span>
          </label>
          <div className="relative">
            <Phone className="w-4 h-4 text-[#244B36]/50 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              id="enquiry-mobile"
              type="tel"
              required
              value={formData.mobile}
              onChange={(e) => {
                setFormData({ ...formData, mobile: e.target.value });
                if (errors.mobile) setErrors({ ...errors, mobile: undefined });
              }}
              placeholder={t.form.mobilePlaceholder}
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FFF9EF] border border-[#244B36]/20 text-sm text-[#292929] focus:outline-none focus:ring-2 focus:ring-[#244B36]"
            />
          </div>
          {errors.mobile && (
            <p className="text-xs text-red-600 mt-1">{errors.mobile}</p>
          )}
        </div>

        {/* 3. Enquiry Type */}
        <div>
          <label
            htmlFor="enquiry-type"
            className="block text-sm font-semibold text-[#244B36] mb-1.5"
          >
            {t.form.typeLabel}
          </label>
          <div className="relative">
            <ListFilter className="w-4 h-4 text-[#244B36]/50 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <select
              id="enquiry-type"
              value={formData.enquiryType}
              onChange={(e) =>
                setFormData({ ...formData, enquiryType: e.target.value })
              }
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FFF9EF] border border-[#244B36]/20 text-sm text-[#292929] focus:outline-none focus:ring-2 focus:ring-[#244B36]"
            >
              <option value="menu">{t.form.types.menu}</option>
              <option value="availability">{t.form.types.availability}</option>
              <option value="special_prep">{t.form.types.special_prep}</option>
              <option value="info">{t.form.types.info}</option>
              <option value="group">{t.form.types.group}</option>
              <option value="general">{t.form.types.general}</option>
              <option value="other">{t.form.types.other}</option>
            </select>
          </div>
        </div>

        {/* 4. Message */}
        <div>
          <label
            htmlFor="enquiry-message"
            className="block text-sm font-semibold text-[#244B36] mb-1.5"
          >
            {t.form.messageLabel} <span className="text-red-600">*</span>
          </label>
          <div className="relative">
            <MessageSquare className="w-4 h-4 text-[#244B36]/50 absolute left-3.5 top-3.5" />
            <textarea
              id="enquiry-message"
              rows={4}
              required
              value={formData.message}
              onChange={(e) => {
                setFormData({ ...formData, message: e.target.value });
                if (errors.message) setErrors({ ...errors, message: undefined });
              }}
              placeholder={t.form.messagePlaceholder}
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FFF9EF] border border-[#244B36]/20 text-sm text-[#292929] focus:outline-none focus:ring-2 focus:ring-[#244B36]"
            />
          </div>
          {errors.message && (
            <p className="text-xs text-red-600 mt-1">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm sm:text-base shadow-md transition-all"
        >
          <MessageCircle className="w-5 h-5" />
          <span>{t.form.submitBtn}</span>
        </button>
      </form>
    </div>
  );
};
