import { useContext, useEffect } from 'react';
import { AppContext } from './AppContext';
import DiscoverApp from './DiscoverApp';
import Header from './Header';
import { useTranslation } from 'react-i18next';
import './i18n';

export default function DailyPushLanding() {
  const { dark } = useContext(AppContext);
  const { t } = useTranslation();

  useEffect(() => {
    document.title = "Daily Push";
  }, []);

  return (
    <div className={dark ? 'dark bg-gray-900 text-gray-100 min-h-screen' : 'bg-white text-gray-900 min-h-screen'}>
      <Header />

      <main className="container mx-auto px-6 py-12">
        {/* Hero */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl font-extrabold leading-tight">{t('title')}</h2>
            <p className="mt-4 text-lg opacity-80">{t('hero')}</p>

            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white font-semibold">✓</span>
                <div>
                  <div className="font-semibold">{t('features.prog')}</div>
                  <div className="text-sm opacity-75">{t('features.progDesc')}</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">✓</span>
                <div>
                  <div className="font-semibold">{t('features.tracking')}</div>
                  <div className="text-sm opacity-75">{t('features.trackingDesc')}</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-full bg-gray-700 dark:bg-gray-300 flex items-center justify-center text-white dark:text-gray-800 font-semibold">✓</span>
                <div>
                  <div className="font-semibold">{t('features.darkMode')}</div>
                  <div className="text-sm opacity-75">{t('features.darkModeDesc')}</div>
                </div>
              </li>
            </ul>

            <div className="mt-8 flex gap-4">
              <a href="#download" className="px-5 py-3 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white font-semibold">{t('getApp')}</a>
              <a href="#features" className="px-5 py-3 rounded-md border dark:border-gray-700 text-sm">{t('seeFeatures')}</a>
            </div>
          </div>
        </section>

        <DiscoverApp />

        {/* Features */}
        <section id="features" className="mt-16">
          <h3 className="text-2xl font-bold">{t('seeFeatures')}</h3>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border dark:border-gray-700">
              <h4 className="font-semibold">{t('features.prog')}</h4>
              <p className="mt-2 text-sm opacity-75">{t('features.progDesc')}</p>
            </div>
            <div className="p-6 rounded-xl border dark:border-gray-700">
              <h4 className="font-semibold">{t('features.tracking')}</h4>
              <p className="mt-2 text-sm opacity-75">{t('features.trackingDesc')}</p>
            </div>
            <div className="p-6 rounded-xl border dark:border-gray-700">
              <h4 className="font-semibold">{t('features.darkMode')}</h4>
              <p className="mt-2 text-sm opacity-75">{t('features.darkModeDesc')}</p>
            </div>
          </div>
        </section>

        {/* Footer / CTA */}
        <section id="download" className="mt-20 py-12 rounded-2xl bg-gradient-to-r from-indigo-600 to-pink-500 text-white">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-3xl font-extrabold">{t('ready')}</h3>
            <p className="mt-3 opacity-90">{t('downloadDesc')}</p>
            <div className="mt-6 flex justify-center gap-4">
              <a href="https://apps.apple.com/app/id6752792345" className='px-6 py-3 bg-white text-indigo-600 rounded-md font-semibold'>App Store</a>
              <a href="https://play.google.com/store/apps/details?id=com.flhember.DailyPush" className='px-6 py-3 bg-white text-indigo-600 rounded-md font-semibold'>Google Play</a>
            </div>
          </div>
        </section>

        <footer className="mt-8 text-center text-sm opacity-60">© {new Date().getFullYear()} Daily Push.</footer>
      </main>
    </div>
  );
}
