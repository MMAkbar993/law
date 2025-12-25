import React, { useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';

export default function BigWinsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 5;
  const { t } = useTranslation();

  return (
    <section className="bg-brand-primary text-white py-12 md:py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col items-center text-center">
          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t('bigWins.title')}
          </h2>
          
          {/* Sub-heading/Description */}
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            {t('bigWins.description')}
          </p>
          
          {/* Call to Action Button */}
          <button className="bg-brand-accent text-black font-bold px-6 py-4 rounded-lg hover:bg-brand-accentDark transition-colors text-lg mb-6 w-full md:w-auto">
            {t('bigWins.cta')}
          </button>
          
          {/* Secondary Link */}
         
          
          {/* Legal Disclaimer */}
          <p className="text-xs text-gray-400 leading-relaxed max-w-2xl">
            {t('bigWins.disclaimer')}
          </p>
        </div>
      </div>
    </section>
  );
}

