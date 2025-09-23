import React, { useState, useRef, useEffect, useContext } from 'react';
import { AppContext } from './AppContext';

export default function LanguageSwitcher() {
  const { lang, changeLang, dark } = useContext(AppContext);
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function onDocClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, []);

  const handleChange = (newLang) => {
    changeLang(newLang);
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative inline-block text-left">
      <button
        onClick={() => setOpen((s) => !s)}
        aria-haspopup="menu"
        aria-expanded={open}
        className="px-3 py-2 rounded-md border dark:border-gray-700 text-sm"
        type="button"
      >
        {lang === 'fr' ? 'Français' : 'English'}
      </button>

      {open && (
        <div
          className={
            'absolute right-0 mt-2 w-36 rounded-md shadow-lg border z-10 ' +
            (dark ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900')
          }
          role="menu"
        >
          <button
            onClick={() => handleChange('en')}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
            type="button"
          >
            English
          </button>
          <button
            onClick={() => handleChange('fr')}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
            type="button"
          >
            Français
          </button>
        </div>
      )}
    </div>
  );
}
