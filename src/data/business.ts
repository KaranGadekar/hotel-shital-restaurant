export type Language = 'mr' | 'en';

/**
 * Centralized Business Configuration for Hotel Shital Family Restaurant – Pure Veg.
 * Developer Note: Update opening hours, social links, and Google Forms entry IDs here
 * after final confirmation from the restaurant owner.
 */
export const SITE_CONFIG = {
  businessName: {
    mr: 'हॉटेल शितल फॅमिली रेस्टॉरंट प्युअर व्हेज',
    en: 'Hotel Shital Family Restaurant – Pure Veg',
  },
  shortName: {
    mr: 'हॉटेल शितल',
    en: 'Hotel Shital',
  },
  category: {
    mr: 'प्युअर व्हेज फॅमिली रेस्टॉरंट',
    en: 'Pure Vegetarian Family Restaurant',
  },
  ownerName: {
    mr: 'सादरे पाटील',
    en: 'Sadre Patil',
  },
  mobileDisplay: '+91 97654 55246',
  mobileRaw: '097654 55246',
  telHref: 'tel:+919765455246',
  whatsappNumber: '919765455246',
  address: {
    mr: 'शॉप नं. १, गाढे जळगाव, छत्रपती संभाजीनगर, महाराष्ट्र – ४३११५४.',
    en: 'Shop No. 1, Gadhe Jalgaon, Chhatrapati Sambhajinagar, Maharashtra – 431154.',
  },
  shortLocation: {
    mr: 'गाढे जळगाव, छत्रपती संभाजीनगर',
    en: 'Gadhe Jalgaon, Chhatrapati Sambhajinagar',
  },
  googleMapsLink:
    'https://www.google.com/maps/search/?api=1&query=Hotel+Shital+Family+Restaurant+Pure+Veg+Shop+No.+1+Gadhe+Jalgaon+Chhatrapati+Sambhajinagar+Maharashtra+431154',
  googleMapsEmbedUrl:
    'https://maps.google.com/maps?q=Hotel%20Shital%20Family%20Restaurant%20Pure%20Veg%20Gadhe%20Jalgaon%20Chhatrapati%20Sambhajinagar%20431154&t=&z=15&ie=UTF8&iwloc=&output=embed',
  credit: {
    prefix: 'Website Designed & Developed by ',
    name: 'Gadekar Market Complex',
    url: 'https://gadekarmarketcomplex.app/',
  },
  socialLinks: {
    instagram: '', // Add verified Instagram URL when available
    facebook: '',  // Add verified Facebook URL when available
  },
  googleForms: {
    enabled: false, // Set to true once real Google Form URL & entry IDs are configured and tested
    formActionUrl: '', // e.g., https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse
    entries: {
      fullName: '',    // e.g., entry.111111111
      mobile: '',      // e.g., entry.222222222
      email: '',       // e.g., entry.333333333
      enquiryType: '', // e.g., entry.444444444
      message: '',     // e.g., entry.555555555
    },
  },
  // Developer Note: Verify actual operating hours with the owner before public launch.
  openingHours: {
    days: [
      { id: 'mon', mr: 'सोमवार', en: 'Monday', timeMr: '२४ तास सुरू', timeEn: 'Open 24 Hours' },
      { id: 'tue', mr: 'मंगळवार', en: 'Tuesday', timeMr: '२४ तास सुरू', timeEn: 'Open 24 Hours' },
      { id: 'wed', mr: 'बुधवार', en: 'Wednesday', timeMr: '२४ तास सुरू', timeEn: 'Open 24 Hours' },
      { id: 'thu', mr: 'गुरुवार', en: 'Thursday', timeMr: '२४ तास सुरू', timeEn: 'Open 24 Hours' },
      { id: 'fri', mr: 'शुक्रवार', en: 'Friday', timeMr: '२४ तास सुरू', timeEn: 'Open 24 Hours' },
      { id: 'sat', mr: 'शनिवार', en: 'Saturday', timeMr: '२४ तास सुरू', timeEn: 'Open 24 Hours' },
      { id: 'sun', mr: 'रविवार', en: 'Sunday', timeMr: '२४ तास सुरू', timeEn: 'Open 24 Hours' },
    ],
  },
  whatsappMessages: {
    general: {
      mr: 'नमस्कार, मला हॉटेल शितल फॅमिली रेस्टॉरंटबद्दल अधिक माहिती हवी आहे.',
      en: 'Hello, I would like more information about Hotel Shital Family Restaurant.',
    },
    menu: {
      mr: 'नमस्कार, मला हॉटेल शितल फॅमिली रेस्टॉरंटच्या मेन्यूबद्दल अधिक माहिती हवी आहे.',
      en: 'Hello, I would like more information about the menu at Hotel Shital Family Restaurant.',
    },
  },
};

export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
