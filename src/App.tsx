import React, { useState, useEffect } from 'react';
import { Language } from './data/business';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { PopularDishes } from './components/PopularDishes';
import { Menu } from './components/Menu';
import { Facilities } from './components/Facilities';
import { OpeningHours } from './components/OpeningHours';
import { Services } from './components/Services';
import { Offers } from './components/Offers';
import { Location } from './components/Location';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

const STORAGE_KEY = 'hotel_shital_lang';

export function App() {
  const [language, setLanguage] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved === 'en' || saved === 'mr' ? saved : 'mr';
    } catch {
      return 'mr';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // Ignore storage restriction in private mode
    }
    document.documentElement.lang = language;
  }, [language]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF9EF] text-[#292929] overflow-x-hidden">
      <Header language={language} onLanguageChange={setLanguage} />

      <main className="flex-1">
        <Hero language={language} />
        <About language={language} />
        <PopularDishes language={language} />
        <Menu language={language} />
        <Facilities language={language} />
        <OpeningHours language={language} />
        <Services language={language} />
        <Offers language={language} />
        <Location language={language} />
        <Contact language={language} />
      </main>

      <Footer language={language} />
      <WhatsAppButton language={language} />
    </div>
  );
}

export default App;
