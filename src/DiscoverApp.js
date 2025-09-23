import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import { useTranslation } from 'react-i18next';

// Images EN
import preview1Eng from './assets/eng/preview1.png';
import preview2Eng from './assets/eng/preview2.png';
import preview3Eng from './assets/eng/preview3.png';
import preview4Eng from './assets/eng/preview4.png';
import preview5Eng from './assets/eng/preview5.png';

// Images FR
import preview1Fr from './assets/fr/preview1.png';
import preview2Fr from './assets/fr/preview2.png';
import preview3Fr from './assets/fr/preview3.png';
import preview4Fr from './assets/fr/preview4.png';
import preview5Fr from './assets/fr/preview5.png';

export default function DiscoverApp() {
  const { t, i18n } = useTranslation();

  // Sélection des images selon la langue
  const previews = i18n.language === 'fr'
    ? [preview1Fr, preview2Fr, preview3Fr, preview4Fr, preview5Fr]
    : [preview1Eng, preview2Eng, preview3Eng, preview4Eng, preview5Eng];

  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-indigo-600">{t('discoverAppTitle')}</h2>

        <div className="mt-8">
          <Swiper
            modules={[Pagination, Navigation]}
            pagination={{ clickable: true }}
            navigation
            loop={true}
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
              1280: { slidesPerView: 5, spaceBetween: 32 },
            }}
          >
            {previews.map((src, i) => (
              <SwiperSlide key={i}>
                <img src={src} alt={t('previewAlt', { number: i + 1 })} className="rounded-lg shadow-lg" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
