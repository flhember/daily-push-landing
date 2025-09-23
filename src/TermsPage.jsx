import React, { useContext, useEffect } from 'react';
import Header from './Header';
import { useTranslation } from 'react-i18next';
import { AppContext } from './AppContext';

export default function TermsPage() {
  const { dark } = useContext(AppContext);
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('termsPage.title');
  }, [t]);

  const sections = [
    { title: t('termsPage.section1Title'), text: t('termsPage.section1Text') },
    { title: t('termsPage.section2Title'), text: t('termsPage.section2Text') },
    { title: t('termsPage.section3Title'), text: t('termsPage.section3Text') },
    { title: t('termsPage.section4Title'), text: t('termsPage.section4Text') },
    { 
      title: t('termsPage.section5Title'), 
      text: <>
        {t('termsPage.section5Text')}{' '}
        <a href="mailto:contact.dailypushproton.me@proton.me" className="text-indigo-600 hover:underline">
          contact.dailypushproton.me@proton.me
        </a>
      </> 
    },
  ];

  return (
    <div className={dark ? 'dark bg-gray-900 text-gray-100 min-h-screen' : 'bg-white text-gray-900 min-h-screen'}>
      <Header />

      <main className="container mx-auto px-6 py-12 max-w-3xl space-y-8">
        <h1 className="text-3xl font-bold mb-6 text-center">{t('termsPage.title')}</h1>

        {sections.map((section, idx) => (
          <div key={idx} className="p-6 rounded-xl border shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-2">{section.title}</h2>
            <p className="text-sm opacity-85">{section.text}</p>
          </div>
        ))}
      </main>

      <footer className="mt-20 text-center text-sm opacity-60 py-6 border-t">
        © {new Date().getFullYear()} Daily Push.
      </footer>
    </div>
  );
}
