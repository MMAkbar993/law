import React from 'react';
import { useTranslation } from 'react-i18next';

export default function HeroSection() {
  const { t } = useTranslation();
  const features = t('hero.features', { returnObjects: true });

  return (
    <section className="bg-white py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Main Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2">
            {t('hero.titleLine1')}
          </h1>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            {t('hero.titleLine2')}
          </h2>
        </div>

        {/* Descriptive Paragraph */}
        <p className="text-lg md:text-xl text-gray-800 text-center max-w-4xl mx-auto mb-16 leading-relaxed">
          {t('hero.description')}
        </p>


      </div>
    </section>
  );
}

