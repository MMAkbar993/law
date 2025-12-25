import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function FeeFreeFormSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-brand-primary text-white py-12 md:py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="flex flex-col">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              THE FEE IS FREE®
            </h2>
            <p className="text-lg md:text-xl text-gray-200">
              Only pay if we win. Contact us 24/7.
            </p>
          </div>

          {/* Right Column - Simple Button */}
          <div className="flex flex-col items-center justify-center">
            <Link
              to="/auto-accident-calculator"
              className="w-full max-w-md border-2 border-white bg-transparent text-white font-bold py-4 px-8 rounded-lg transition-colors hover:bg-white hover:text-brand-primary text-lg text-center"
            >
              Start your claim
            </Link>
            
            {/* Copyright Notice */}
            <p className="text-xs text-gray-400 text-center mt-6">
              {t('common.disclaimers.copyright')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

