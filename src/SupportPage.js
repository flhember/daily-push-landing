import React, { useContext, useEffect } from 'react';
import Header from './Header';
import { useTranslation } from 'react-i18next';
import { AppContext } from './AppContext';

export default function SupportPage() {
  const { dark } = useContext(AppContext);
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('support');
  }, [t]);

  return (
    <div className={dark ? 'dark bg-gray-900 text-gray-100 min-h-screen' : 'bg-white text-gray-900 min-h-screen'}>
      <Header />


      {/* Main content */}
      <main className="container mx-auto px-6 py-12">
        <h2 className="text-4xl font-extrabold mb-8 text-center">{t('support')}</h2>
        <p className="text-lg opacity-80 text-center max-w-2xl mx-auto mb-12">
          {t('supportDescription')}
        </p>

      {/* Email Card */}
      <div className="max-w-md mx-auto p-6 rounded-xl border shadow hover:shadow-lg transition text-center">
        <div className="text-indigo-600 text-5xl mb-4">📧</div>
        <h3 className="font-semibold text-2xl mb-2">
          {t('email', 'Email')}
        </h3>
        <p className="text-sm opacity-75">
          <a
            href="mailto:contact.dailypushproton.me@proton.me"
            className="underline hover:text-indigo-600 "
          >
            contact.dailypushproton.me@proton.me
          </a>
        </p>
      </div>

      </main>

      {/* Footer */}
      <footer className="mt-20 text-center text-sm opacity-60 py-6 border-t dark:border-gray-700">
        © {new Date().getFullYear()} Daily Push.
      </footer>
    </div>
  );
}
