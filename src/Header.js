import React, { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import logo from './assets/push-up-128.png';
import LanguageSwitcher from './LanguageSwitcher';
import { AppContext } from './AppContext';

export default function Header() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const { dark, toggleDark } = useContext(AppContext);

  return (
    <header className="container mx-auto px-6 py-6 flex items-center justify-between relative">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <Link to="/">
          <div className="w-10 h-10 rounded-md overflow-hidden">
            <img src={logo} alt="Daily Push Logo" className="w-full h-full object-cover" />
          </div>
        </Link>
        <div>
          <h1 className="text-lg font-semibold">Daily Push</h1>
          <p className="text-xs opacity-70">{t('from0to100', 'From 0 to 100 Push-Ups')}</p>
        </div>
      </div>

      {/* Navigation + Dark Mode + Lang */}
      <div className="flex items-center gap-4 relative">
        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-4">
          <Link to="/support" className="hover:underline font-semibold">{t('support', 'Support')}</Link>
          <Link to="/privacy" className="hover:underline">{t('privacy', 'Privacy')}</Link>
          <Link to="/terms" className="hover:underline">{t('terms', 'Terms')}</Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden px-3 py-2 border rounded-md text-sm"
          onClick={() => setMenuOpen((s) => !s)}
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute right-0 top-full mt-2 w-40 rounded-md shadow-lg bg-white dark:bg-gray-800 border dark:border-gray-700 z-10 flex flex-col">
            <Link to="/support" onClick={() => setMenuOpen(false)} className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">{t('support', 'Support')}</Link>
            <Link to="/privacy" onClick={() => setMenuOpen(false)} className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">{t('privacy', 'Privacy')}</Link>
            <Link to="/terms" onClick={() => setMenuOpen(false)} className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">{t('terms', 'Terms')}</Link>
          </div>
        )}

        {/* Language */}
        <LanguageSwitcher />

        {/* Dark Mode */}
        <button
          onClick={() => toggleDark()}
          className="px-3 py-2 rounded-md border dark:border-gray-700 text-sm"
        >
          {dark ? t('lightMode', 'Light Mode') : t('darkMode', 'Dark Mode')}
        </button>
      </div>
    </header>
  );
}
