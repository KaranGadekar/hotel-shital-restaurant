export interface FacilityItem {
  id: string;
  enabled: boolean;
  iconName: 'Users' | 'Armchair' | 'Utensils' | 'ShoppingBag' | 'Car' | 'Snowflake';
  title: {
    mr: string;
    en: string;
  };
  description: {
    mr: string;
    en: string;
  };
}

export interface ServiceItem {
  id: string;
  enabled: boolean;
  iconName: 'UtensilsCrossed' | 'ShoppingBag' | 'Users' | 'UsersRound' | 'MessageSquare';
  title: {
    mr: string;
    en: string;
  };
  description: {
    mr: string;
    en: string;
  };
}

export const FACILITIES_DATA: FacilityItem[] = [
  {
    id: 'family-dining',
    enabled: true,
    iconName: 'Users',
    title: { mr: 'फॅमिली डायनिंग', en: 'Family Dining' },
    description: {
      mr: 'संपूर्ण कुटुंबासोबत एकत्र बसून शांत आणि आनंददायी जेवणाचा अनुभव.',
      en: 'Welcoming dining space designed for families to enjoy meals together comfortably.',
    },
  },
  {
    id: 'comfortable-seating',
    enabled: true,
    iconName: 'Armchair',
    title: { mr: 'आरामदायी बैठक व्यवस्था', en: 'Comfortable Seating' },
    description: {
      mr: 'प्रशस्त आणि स्वच्छ बैठक व्यवस्थेमुळे निवांत जेवणाचा आनंद.',
      en: 'Spacious and neat seating arrangements for a relaxed dining experience.',
    },
  },
  {
    id: 'dine-in',
    enabled: true,
    iconName: 'Utensils',
    title: { mr: 'डाइन-इन (Dine-in)', en: 'Dine-in' },
    description: {
      mr: 'गरमागरम आणि ताज्या शाकाहारी पदार्थांचा रेस्टॉरंटमध्ये बसून आस्वाद घ्या.',
      en: 'Enjoy freshly prepared vegetarian meals served hot at your table.',
    },
  },
  {
    id: 'takeaway',
    enabled: true,
    iconName: 'ShoppingBag',
    title: { mr: 'टेकअवे चौकशी', en: 'Takeaway Enquiry' },
    description: {
      mr: 'पार्सल व टेकअवे उपलब्धतेबद्दल थेट रेस्टॉरंटशी संपर्क साधा.',
      en: 'Contact the restaurant directly regarding parcel and takeaway availability.',
    },
  },
  {
    id: 'parking',
    enabled: true,
    iconName: 'Car',
    title: { mr: 'पार्किंग माहिती', en: 'Parking Information' },
    description: {
      mr: 'येणाऱ्या पाहुण्यांसाठी वाहने उभी करण्याच्या सोयीबद्दल माहितीसाठी संपर्क साधा.',
      en: 'Reach out to us for convenient vehicle parking information during your visit.',
    },
  },
  {
    id: 'ac-dining',
    enabled: true,
    iconName: 'Snowflake',
    title: { mr: 'प्रसन्न डायनिंग हॉल', en: 'Pleasant Dining Hall' },
    description: {
      mr: 'कुटुंब व मित्रपरिवारासाठी स्वच्छ आणि आरामदायी डायनिंग वातावरण.',
      en: 'Clean and comfortable dining atmosphere suited for families and groups.',
    },
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'service-dine-in',
    enabled: true,
    iconName: 'UtensilsCrossed',
    title: { mr: 'डाइन-इन सेवा', en: 'Dine-in' },
    description: {
      mr: 'कुटुंब आणि मित्रपरिवारासोबत रेस्टॉरंटमध्ये बसून शाकाहारी भोजनाचा आनंद घ्या.',
      en: 'Sit-down family restaurant dining with warm hospitality.',
    },
  },
  {
    id: 'service-takeaway',
    enabled: true,
    iconName: 'ShoppingBag',
    title: { mr: 'टेकअवे चौकशी', en: 'Takeaway Enquiry' },
    description: {
      mr: 'पार्सल व टेकअवे उपलब्धतेबद्दल फोन किंवा WhatsApp वर चौकशी करा.',
      en: 'Enquire via Call or WhatsApp regarding takeaway parcel availability.',
    },
  },
  {
    id: 'service-family',
    enabled: true,
    iconName: 'Users',
    title: { mr: 'फॅमिली डायनिंग चौकशी', en: 'Family Dining Enquiry' },
    description: {
      mr: 'कौटुंबिक जेवणाच्या नियोजनासाठी आगाऊ माहिती व संपर्क सुविधा.',
      en: 'Reach out ahead of your family visit for seating and menu information.',
    },
  },
  {
    id: 'service-group',
    enabled: true,
    iconName: 'UsersRound',
    title: { mr: 'ग्रुप डायनिंग चौकशी', en: 'Group Dining Enquiry' },
    description: {
      mr: 'मोठ्या गटासाठी किंवा एकत्र जेवणाच्या नियोजनासाठी थेट चौकशी करा.',
      en: 'Connect with us to coordinate group dining visits.',
    },
  },
  {
    id: 'service-general',
    enabled: true,
    iconName: 'MessageSquare',
    title: { mr: 'विशेष तयारी व मेन्यू चौकशी', en: 'Special Preparation & Food Enquiry' },
    description: {
      mr: 'पदार्थांची उपलब्धता आणि आवडीनुसार विशेष तयारीबद्दल आमच्याशी संपर्क साधा.',
      en: 'Ask about available vegetarian dishes and special preparation preferences.',
    },
  },
];
