import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function CareersSection({
  title,
  features,
  buttonText,
  buttonUrl,
}) {
  const { t } = useTranslation();
  const config = t('careers', { returnObjects: true });
  const careersConfig = config && typeof config === 'object' ? config : {};

  const finalTitle = title || careersConfig.title || 'Looking to join our team?';
  const finalButtonText = buttonText || careersConfig.buttonText || 'Get started';
  const finalButtonUrl = buttonUrl || careersConfig.buttonUrl || '/careers';

  const defaultFeatures = [
    "America's Largest Injury Firm",
    'A Variety of Case Types',
    'Limitless Opportunities',
  ];

  const finalFeatures = features || careersConfig.features || defaultFeatures;

  return (
    <section className="bg-gray-50 px-4 py-16">
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-5 items-center">
          {/* Left Column - Title and Features */}
          <div className="lg:col-span-3">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              {finalTitle}
            </h2>
            <div className="space-y-4">
              {Array.isArray(finalFeatures) && finalFeatures.length > 0 ? (
                finalFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-4 bg-blue-50 rounded-lg p-4">
                    <div className="flex-shrink-0 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-lg font-semibold text-gray-900">{feature}</span>
                  </div>
                ))
              ) : (
                defaultFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-4 bg-blue-50 rounded-lg p-4">
                    <div className="flex-shrink-0 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-lg font-semibold text-gray-900">{feature}</span>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Right Column - CTA Button */}
          <div className="lg:col-span-2 flex justify-center lg:justify-end">
            <Link
              to={finalButtonUrl}
              className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-primaryDark text-white font-bold px-8 py-4 rounded-lg transition shadow-lg"
            >
              <span>{finalButtonText}</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 17l9.2-9.2M17 8v9m-9-9h9"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

