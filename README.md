# Hotel Shital Family Restaurant – Pure Veg (Website Project)

**Marathi Name:** हॉटेल शितल फॅमिली रेस्टॉरंट प्युअर व्हेज  
**English Name:** Hotel Shital Family Restaurant – Pure Veg  
**Location:** Shop No. 1, Gadhe Jalgaon, Chhatrapati Sambhajinagar, Maharashtra – 431154  
**Owner:** सादरे पाटील (Sadre Patil)  
**Mobile:** +91 97654 55246  

---

## 1. Local Installation & VS Code Setup

1. Extract the downloaded ZIP archive (`hotel-shital-family-restaurant.zip`).
2. Open the extracted folder in **Visual Studio Code**.
3. Open the VS Code integrated terminal (`Ctrl + ~` or `Terminal > New Terminal`).
4. Install dependencies:
   ```bash
   npm install
   ```
5. Start the local development server:
   ```bash
   npm run dev
   ```
6. Open the local URL shown in the terminal (typically `http://localhost:5173`).

---

## 2. Production Build & Netlify Deployment

### Build Command
```bash
npm run build
```
This compiles TypeScript and outputs the production build into `dist/`.

### Netlify Deployment
- **Build command:** `npm run build`
- **Publish directory:** `dist`

---

## 3. Content & Configuration Guide

All editable content is centralized in `src/data/`:

- **`src/data/business.ts`**: Business name, owner name, phone, address, Google Maps link, opening hours, social media URLs, and Google Forms integration settings.
- **`src/data/menu.ts`**: 9 vegetarian menu categories and 35 dishes (strictly price-free) with verified dish-matched photography and WhatsApp customization enquiry support.
- **`src/data/facilities.ts`**: Toggle `enabled: true/false` to show or hide individual facilities and services.
- **`src/data/translations.ts`**: Complete Marathi (`mr`, default) and English (`en`) translation dictionary.

### Connecting Google Forms
1. Create a Google Form with fields: Full Name, Mobile Number, Email Address, Enquiry Type, and Message.
2. Copy the form `action` URL (`.../formResponse`) and each field's `entry.XXXXXX` ID.
3. Paste them into `SITE_CONFIG.googleForms` in `src/data/business.ts` and set `enabled: true`.
4. Run `npm run build` and test a live submission.

---

Website Designed & Developed by [Gadekar Market Complex](https://gadekarmarketcomplex.app/)
