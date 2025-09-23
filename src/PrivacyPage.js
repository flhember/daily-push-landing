import React, { useContext, useEffect } from 'react';
import Header from './Header';
import { useTranslation } from 'react-i18next';
import { AppContext } from './AppContext';

export default function PrivacyPage() {
  const { dark } = useContext(AppContext);
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('privacyPage.title');
  }, [t]);

  const handleMail = () => {
    const subject = encodeURIComponent(t('privacyPage.emailSubject', 'Feedback / Privacy - Daily Push'));
    const mail = `mailto:contact.dailypushproton.me@proton.me?subject=${subject}`;
    window.location.href = mail;
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className={dark ? 'dark bg-gray-900 text-gray-100 min-h-screen' : 'bg-white text-gray-900 min-h-screen'}>
      <Header />

      <main className="container mx-auto px-6 py-12">
        {/* Header / intro */}
        <div className="max-w-3xl mx-auto">
          <div className="flex items-start justify-between gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold mb-2">{t('privacyPage.title')}</h1>
              <p className="text-sm text-gray-600 dark:text-gray-300/80">
                {t('privacyPage.lastUpdated', { date: "23/07/2025" })}
              </p>
            </div>

            {/* CTA mail and small note */}
            <div className="hidden sm:flex sm:flex-col items-end gap-3">
              <button
                onClick={handleMail}
                className="inline-flex items-center gap-3 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow"
              >
                <span className="text-lg">📧</span>
                <span className="text-sm font-medium">{t('contact', 'Contact')}</span>
              </button>
              <p className="text-xs text-gray-500 dark:text-gray-400/80"> {t('privacyPage.intro1')} </p>
            </div>
          </div>

          <p className="mt-6 text-base leading-relaxed text-gray-700 dark:text-gray-300">
            {t('privacyPage.intro2')}
          </p>
        </div>

        {/* Layout: content + TOC */}
        <div className="mt-12 grid md:grid-cols-[1fr_240px] gap-10">
          {/* Content column */}
          <div>
            {/* Collected */}
            <section id="collected" className="mb-8 p-6 rounded-2xl border dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm">
              <h2 className="text-xl font-semibold mb-3">{t('privacyPage.collectedTitle')}</h2>
              <p className="mb-3 text-gray-700 dark:text-gray-300">{t('privacyPage.collectedIntro')}</p>
              <p className="whitespace-pre-line text-sm text-gray-600 dark:text-gray-300/90">
                {t('privacyPage.collectedList')}
              </p>
            </section>

            {/* Usage */}
            <section id="usage" className="mb-8 p-6 rounded-2xl border dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm">
              <h2 className="text-xl font-semibold mb-3">{t('privacyPage.usageTitle')}</h2>
              <p className="text-sm text-gray-700 dark:text-gray-300">{t('privacyPage.usageText')}</p>
            </section>

            {/* Sharing */}
            <section id="sharing" className="mb-8 p-6 rounded-2xl border dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm">
              <h2 className="text-xl font-semibold mb-3">{t('privacyPage.sharingTitle')}</h2>
              <p className="text-sm text-gray-700 dark:text-gray-300">{t('privacyPage.sharingText')}</p>
            </section>

            {/* Rights */}
            <section id="rights" className="mb-8 p-6 rounded-2xl border dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm">
              <h2 className="text-xl font-semibold mb-3">{t('privacyPage.rightsTitle')}</h2>
              <p className="text-sm text-gray-700 dark:text-gray-300">{t('privacyPage.rightsText')}</p>

              <div className="mt-4 text-sm text-gray-700 dark:text-gray-300">
                <p>{t('privacyPage.requestDel')}</p>
                <button
                  onClick={handleMail}
                  className="mt-3 inline-block px-4 py-2 rounded-md bg-white dark:bg-gray-700 border dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <span className="underline text-indigo-600 dark:text-indigo-400">contact.dailypushproton.me@proton.me</span>
                </button>
              </div>
            </section>
          </div>

          {/* TOC / aside */}
          <aside className="hidden md:block sticky top-32 self-start">
            <div className="w-full p-4 rounded-lg border dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm">
              <h4 className="text-sm font-semibold mb-3">{t('privacyPage.intro3')}</h4>
              <nav className="flex flex-col gap-2 text-sm">
                <button onClick={() => scrollTo('collected')} className="text-left text-indigo-600 hover:underline">• {t('privacyPage.collectedTitle')}</button>
                <button onClick={() => scrollTo('usage')} className="text-left hover:underline">• {t('privacyPage.usageTitle')}</button>
                <button onClick={() => scrollTo('sharing')} className="text-left hover:underline">• {t('privacyPage.sharingTitle')}</button>
                <button onClick={() => scrollTo('rights')} className="text-left hover:underline">• {t('privacyPage.rightsTitle')}</button>
              </nav>

              <div className="mt-4">
                <button onClick={handleMail} className="w-full px-3 py-2 rounded-md bg-indigo-600 text-white text-sm">
                  {t('privacyPage.contactButton', 'Contact us')}
                </button>
              </div>

              <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">{t('privacyPage.lastUpdated', { date: "23/07/2025" })}</p>
            </div>
          </aside>
        </div>
      </main>

      <footer className="mt-20 text-center text-sm opacity-60 py-6 border-t dark:border-gray-700">
        © {new Date().getFullYear()} Daily Push.
      </footer>
    </div>
  );
}
