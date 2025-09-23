import { createContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [dark, setDark] = useState(false);
  const { i18n } = useTranslation();

  const [lang, setLang] = useState(i18n.language || 'en');

  const toggleDark = () => setDark(prev => !prev);

  const changeLang = (newLang) => {
    i18n.changeLanguage(newLang);
    setLang(newLang);
  };

  // Optionnel : appliquer classe dark à body
  useEffect(() => {
    if (dark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [dark]);

  return (
    <AppContext.Provider value={{ dark, toggleDark, lang, changeLang }}>
      {children}
    </AppContext.Provider>
  );
}