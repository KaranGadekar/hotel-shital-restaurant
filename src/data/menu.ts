export type MenuCategoryId =
  | 'all'
  | 'breakfast_snacks'
  | 'south_indian'
  | 'punjabi_specialities'
  | 'veg_curries'
  | 'dal_rice'
  | 'indian_breads'
  | 'veg_thali'
  | 'chinese'
  | 'beverages';

export interface MenuCategory {
  id: MenuCategoryId;
  emoji: string;
  label: {
    mr: string;
    en: string;
  };
}

export interface MenuItem {
  id: string;
  category: Exclude<MenuCategoryId, 'all'>;
  emoji: string;
  name: {
    mr: string;
    en: string;
  };
  description: {
    mr: string;
    en: string;
  };
  isPopular?: boolean;
}

export const MENU_CATEGORIES: MenuCategory[] = [
  { id: 'all', emoji: '🍽️', label: { mr: 'सर्व पदार्थ', en: 'All Items' } },
  { id: 'breakfast_snacks', emoji: '🥣', label: { mr: 'नाश्ता आणि स्नॅक्स', en: 'Breakfast & Snacks' } },
  { id: 'south_indian', emoji: '🥞', label: { mr: 'साऊथ इंडियन', en: 'South Indian' } },
  { id: 'punjabi_specialities', emoji: '🧀', label: { mr: 'पंजाबी पदार्थ', en: 'Punjabi Specialities' } },
  { id: 'veg_curries', emoji: '🍲', label: { mr: 'व्हेज करी', en: 'Veg Curries' } },
  { id: 'dal_rice', emoji: '🍚', label: { mr: 'डाळ आणि भात', en: 'Dal & Rice' } },
  { id: 'indian_breads', emoji: '🫓', label: { mr: 'रोटी आणि भारतीय ब्रेड', en: 'Indian Breads' } },
  { id: 'veg_thali', emoji: '🍱', label: { mr: 'व्हेज थाळी', en: 'Veg Thali' } },
  { id: 'chinese', emoji: '🍜', label: { mr: 'चायनीज', en: 'Chinese' } },
  { id: 'beverages', emoji: '☕', label: { mr: 'पेये', en: 'Beverages' } },
];

export const MENU_ITEMS: MenuItem[] = [
  // 1. Breakfast & Snacks
  {
    id: 'poha',
    category: 'breakfast_snacks',
    emoji: '🥣',
    name: { mr: 'पोहे', en: 'Poha' },
    description: {
      mr: 'हलका, गरमागरम आणि पारंपारिक महाराष्ट्रीयन नाश्ता.',
      en: 'Light, warm, and classic traditional Indian breakfast.',
    },
  },
  {
    id: 'upma',
    category: 'breakfast_snacks',
    emoji: '🍲',
    name: { mr: 'उपमा', en: 'Upma' },
    description: {
      mr: 'गरमागरम आणि चविष्ट पारंपारिक रवा नाश्ता.',
      en: 'Warm and savory traditional semolina breakfast.',
    },
  },
  {
    id: 'idli-sambhar',
    category: 'breakfast_snacks',
    emoji: '🍽️',
    name: { mr: 'इडली सांबार', en: 'Idli Sambhar' },
    description: {
      mr: 'मऊ वाफवलेल्या इडल्या, गरमागरम सांबार आणि चटणीसोबत.',
      en: 'Soft steamed idlis served with hot sambhar and chutney.',
    },
  },
  {
    id: 'medu-vada',
    category: 'breakfast_snacks',
    emoji: '🍩',
    name: { mr: 'मेदू वडा', en: 'Medu Vada' },
    description: {
      mr: 'कुरकुरीत साऊथ इंडियन वडे, सांबार आणि चटणीसोबत.',
      en: 'Crispy South Indian lentil fritters served with sambhar and chutney.',
    },
  },

  // 2. South Indian
  {
    id: 'plain-dosa',
    category: 'south_indian',
    emoji: '🥞',
    name: { mr: 'प्लेन डोसा', en: 'Plain Dosa' },
    description: {
      mr: 'दक्षिण भारतीय चवीचा कुरकुरीत सोनेरी डोसा, सांबार व चटणीसोबत.',
      en: 'Crispy golden South Indian crepe served with sambhar and chutney.',
    },
  },
  {
    id: 'masala-dosa',
    category: 'south_indian',
    emoji: '🍽️',
    name: { mr: 'मसाला डोसा', en: 'Masala Dosa' },
    description: {
      mr: 'दक्षिण भारतीय चवीचा कुरकुरीत डोसा, मसालेदार बटाटा भाजीसोबत.',
      en: 'Crispy South Indian dosa filled with spiced potato masala.',
    },
    isPopular: true,
  },
  {
    id: 'mysore-masala-dosa',
    category: 'south_indian',
    emoji: '🌶️',
    name: { mr: 'म्हैसूर मसाला डोसा', en: 'Mysore Masala Dosa' },
    description: {
      mr: 'खमंग चटणी आणि बटाटा मसाल्याची खास चव असलेला डोसा.',
      en: 'Crisp dosa layered with spiced chutney and potato masala.',
    },
  },
  {
    id: 'onion-uttappa',
    category: 'south_indian',
    emoji: '🧅',
    name: { mr: 'ऑनियन उत्तप्पा', en: 'Onion Uttappa' },
    description: {
      mr: 'कांदा आणि मसाल्यांची चव असलेला मऊ व खमंग साऊथ इंडियन उत्तप्पा.',
      en: 'Savory South Indian pancake topped with fresh onions and herbs.',
    },
  },

  // 3. Punjabi Specialities
  {
    id: 'paneer-butter-masala',
    category: 'punjabi_specialities',
    emoji: '🧀',
    name: { mr: 'पनीर बटर मसाला', en: 'Paneer Butter Masala' },
    description: {
      mr: 'मऊ पनीर आणि स्वादिष्ट क्रीमी ग्रेव्हीचा खास स्वाद.',
      en: 'Soft paneer cubes simmered in a rich and creamy gravy.',
    },
    isPopular: true,
  },
  {
    id: 'shahi-paneer',
    category: 'punjabi_specialities',
    emoji: '👑',
    name: { mr: 'शाही पनीर', en: 'Shahi Paneer' },
    description: {
      mr: 'सुगंधी मसाले आणि समृद्ध ग्रेव्हीमधील खास पंजाबी पनीर डिश.',
      en: 'Royal paneer preparation in mildly spiced aromatic gravy.',
    },
  },
  {
    id: 'kadai-paneer',
    category: 'punjabi_specialities',
    emoji: '🥘',
    name: { mr: 'कढई पनीर', en: 'Kadai Paneer' },
    description: {
      mr: 'खास मसाल्यांमध्ये तयार केलेली चविष्ट पंजाबी पनीर भाजी.',
      en: 'Flavorful paneer cooked with aromatic Indian spices.',
    },
  },

  // 4. Veg Curries
  {
    id: 'veg-kolhapuri',
    category: 'veg_curries',
    emoji: '🌶️',
    name: { mr: 'व्हेज कोल्हापुरी', en: 'Veg Kolhapuri' },
    description: {
      mr: 'भाज्या आणि झणझणीत मसाल्यांची पारंपारिक चमचमीत भाजी.',
      en: 'Mixed vegetables cooked in a bold and flavorful spiced gravy.',
    },
    isPopular: true,
  },
  {
    id: 'mix-veg',
    category: 'veg_curries',
    emoji: '🥕',
    name: { mr: 'मिक्स व्हेज', en: 'Mix Veg' },
    description: {
      mr: 'विविध भाज्यांची संतुलित मसाल्यातील चविष्ट घरगुती भाजी.',
      en: 'Assorted vegetables cooked in a balanced homestyle curry.',
    },
  },

  // 5. Dal & Rice
  {
    id: 'dal-fry',
    category: 'dal_rice',
    emoji: '🥣',
    name: { mr: 'डाळ फ्राय', en: 'Dal Fry' },
    description: {
      mr: 'खमंग फोडणी दिलेली गरमागरम आणि चविष्ट डाळ.',
      en: 'Warm yellow lentils tempered with classic Indian spices.',
    },
  },
  {
    id: 'dal-tadka',
    category: 'dal_rice',
    emoji: '🍲',
    name: { mr: 'डाळ तडका', en: 'Dal Tadka' },
    description: {
      mr: 'सुवासिक तडका दिलेली चविष्ट आणि पारंपारिक डाळ.',
      en: 'Smooth yellow lentils finished with a fragrant spice tempering.',
    },
  },
  {
    id: 'jeera-rice',
    category: 'dal_rice',
    emoji: '🍚',
    name: { mr: 'जिरा राईस', en: 'Jeera Rice' },
    description: {
      mr: 'जिऱ्याची फोडणी दिलेला सुवासिक आणि मोकळा भात.',
      en: 'Fragrant rice lightly tempered with roasted cumin seeds.',
    },
  },
  {
    id: 'veg-pulao',
    category: 'dal_rice',
    emoji: '🍛',
    name: { mr: 'व्हेज पुलाव', en: 'Veg Pulao' },
    description: {
      mr: 'भाज्या आणि सौम्य मसाल्यांसह तयार केलेला सुगंधी पुलाव.',
      en: 'Aromatic rice cooked with vegetables and mild spices.',
    },
  },
  {
    id: 'veg-biryani',
    category: 'dal_rice',
    emoji: '🍲',
    name: { mr: 'व्हेज बिर्याणी', en: 'Veg Biryani' },
    description: {
      mr: 'सुवासिक तांदूळ आणि मसालेदार भाज्यांची खास शाकाहारी बिर्याणी.',
      en: 'Fragrant spiced rice and vegetables cooked with aromatic herbs.',
    },
    isPopular: true,
  },
  {
    id: 'dal-khichdi',
    category: 'dal_rice',
    emoji: '🥣',
    name: { mr: 'डाळ खिचडी', en: 'Dal Khichdi' },
    description: {
      mr: 'हलकी, पौष्टिक आणि खमंग पारंपारिक डाळ खिचडी.',
      en: 'Comforting and wholesome lentil-rice preparation.',
    },
  },

  // 6. Indian Breads
  {
    id: 'chapati',
    category: 'indian_breads',
    emoji: '🫓',
    name: { mr: 'चपाती', en: 'Chapati' },
    description: {
      mr: 'मऊ आणि गरमागरम घरगुती चपाती.',
      en: 'Soft and warm traditional whole-wheat flatbread.',
    },
  },
  {
    id: 'tandoori-roti',
    category: 'indian_breads',
    emoji: '🫓',
    name: { mr: 'तंदुरी रोटी', en: 'Tandoori Roti' },
    description: {
      mr: 'खमंग आणि पारंपारिक भारतीय तंदुरी रोटी.',
      en: 'Traditional crisp Indian flatbread baked in a tandoor.',
    },
  },
  {
    id: 'butter-roti',
    category: 'indian_breads',
    emoji: '🧈',
    name: { mr: 'बटर रोटी', en: 'Butter Roti' },
    description: {
      mr: 'बटर लावून सर्व्ह केलेली गरमागरम तंदुरी रोटी.',
      en: 'Hot tandoori roti brushed with butter.',
    },
  },
  {
    id: 'plain-naan',
    category: 'indian_breads',
    emoji: '🫓',
    name: { mr: 'प्लेन नान', en: 'Plain Naan' },
    description: {
      mr: 'मऊ आणि हलका पारंपारिक भारतीय नान.',
      en: 'Soft and freshly baked traditional Indian naan.',
    },
  },
  {
    id: 'butter-naan',
    category: 'indian_breads',
    emoji: '🧈',
    name: { mr: 'बटर नान', en: 'Butter Naan' },
    description: {
      mr: 'बटर लावलेला मऊ आणि चविष्ट नान, पंजाबी भाज्यांसोबत उत्तम.',
      en: 'Soft naan glazed with butter, ideal with rich gravies.',
    },
  },

  // 7. Veg Thali
  {
    id: 'regular-veg-thali',
    category: 'veg_thali',
    emoji: '🍱',
    name: { mr: 'रेग्युलर व्हेज थाळी', en: 'Regular Veg Thali' },
    description: {
      mr: 'भाजी, डाळ, भात आणि रोटी/चपाती असलेले परिपूर्ण शाकाहारी भोजन.',
      en: 'Wholesome vegetarian meal with curry, dal, rice, and Indian bread.',
    },
  },
  {
    id: 'special-veg-thali',
    category: 'veg_thali',
    emoji: '🍽️',
    name: { mr: 'स्पेशल व्हेज थाळी', en: 'Special Veg Thali' },
    description: {
      mr: 'विविध भाज्या, डाळ, भात, रोटी आणि खास पदार्थांसह समृद्ध थाळी.',
      en: 'Elaborate vegetarian platter with assorted curries, dal, rice, and breads.',
    },
    isPopular: true,
  },
  {
    id: 'punjabi-thali',
    category: 'veg_thali',
    emoji: '🥘',
    name: { mr: 'पंजाबी थाळी', en: 'Punjabi Thali' },
    description: {
      mr: 'पंजाबी भाजी, डाळ, भात आणि तंदुरी ब्रेड्सची खास थाळी.',
      en: 'Hearty North Indian vegetarian platter with rich curry and breads.',
    },
  },

  // 8. Chinese
  {
    id: 'veg-fried-rice',
    category: 'chinese',
    emoji: '🍚',
    name: { mr: 'व्हेज फ्राईड राईस', en: 'Veg Fried Rice' },
    description: {
      mr: 'भाज्या आणि चायनीज मसाल्यांसह परतलेला चविष्ट राईस.',
      en: 'Stir-fried rice tossed with vegetables and Indo-Chinese seasonings.',
    },
  },
  {
    id: 'schezwan-fried-rice',
    category: 'chinese',
    emoji: '🌶️',
    name: { mr: 'शेजवान फ्राईड राईस', en: 'Schezwan Fried Rice' },
    description: {
      mr: 'चटपटीत शेजवान चवीचा झणझणीत फ्राईड राईस.',
      en: 'Flavorful wok-tossed rice with bold Schezwan seasoning.',
    },
  },
  {
    id: 'veg-hakka-noodles',
    category: 'chinese',
    emoji: '🍜',
    name: { mr: 'व्हेज हक्का नूडल्स', en: 'Veg Hakka Noodles' },
    description: {
      mr: 'भाज्यांसह परतलेले चविष्ट शाकाहारी हक्का नूडल्स.',
      en: 'Stir-fried vegetarian noodles tossed with crisp vegetables.',
    },
  },
  {
    id: 'veg-manchurian',
    category: 'chinese',
    emoji: '🥢',
    name: { mr: 'व्हेज मंच्युरियन', en: 'Veg Manchurian' },
    description: {
      mr: 'कुरकुरीत व्हेज मंच्युरियन, चविष्ट इंडो-चायनीज सॉसमध्ये.',
      en: 'Crispy vegetable dumplings tossed in savory Indo-Chinese sauce.',
    },
    isPopular: true,
  },

  // 9. Beverages
  {
    id: 'tea',
    category: 'beverages',
    emoji: '☕',
    name: { mr: 'चहा', en: 'Tea' },
    description: {
      mr: 'ताजेतवाने करणारा गरमागरम भारतीय चहा.',
      en: 'Freshly brewed warm Indian tea.',
    },
  },
  {
    id: 'coffee',
    category: 'beverages',
    emoji: '☕',
    name: { mr: 'कॉफी', en: 'Coffee' },
    description: {
      mr: 'गरमागरम आणि सुवासिक कॉफी.',
      en: 'Warm and aromatic freshly prepared coffee.',
    },
  },
  {
    id: 'buttermilk',
    category: 'beverages',
    emoji: '🥛',
    name: { mr: 'ताक (मठ्ठा)', en: 'Buttermilk' },
    description: {
      mr: 'थंडगार आणि पाचक पारंपारिक मसाला ताक.',
      en: 'Refreshing and spiced chilled Indian buttermilk.',
    },
  },
  {
    id: 'cold-drinks',
    category: 'beverages',
    emoji: '🥤',
    name: { mr: 'कोल्ड ड्रिंक्स', en: 'Cold Drinks' },
    description: {
      mr: 'थंडगार शीतपेये.',
      en: 'Chilled refreshing soft drinks.',
    },
  },
];
