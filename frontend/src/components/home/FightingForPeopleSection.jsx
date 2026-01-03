import React from 'react';
import { useTranslation } from 'react-i18next';

export default function FightingForPeopleSection() {
  const { t } = useTranslation();
  const stats = t('fighting.stats', { returnObjects: true });
  const primaryStats = stats.slice(0, 3);
  const highlightStat = stats[3] ?? stats[stats.length - 1] ?? { value: '', label: '' };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            {t('fighting.title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl leading-relaxed">
            {t('fighting.description')}
          </p>
        </div>

        {/* Modern Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Primary Stats Cards */}
          {primaryStats.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Decorative accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-brand-accent/10 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="relative z-10">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 group-hover:text-brand-primary transition-colors duration-300">
                  {item.value}
                </div>
                <div className="text-base md:text-lg text-gray-600 font-medium leading-relaxed">
                  {item.label}
                </div>
              </div>
            </div>
          ))}

          {/* Highlight Stat Card - Featured */}
          <div className="relative group bg-gradient-to-br from-brand-primary to-brand-primaryDark rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-brand-accent rounded-full -ml-12 -mb-12 group-hover:scale-125 transition-transform duration-700"></div>
            </div>
            
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            
            <div className="relative z-10 text-white">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 group-hover:scale-105 transition-transform duration-300">
                {highlightStat.value}
              </div>
              <div className="text-base md:text-lg font-medium leading-relaxed opacity-95">
                {highlightStat.label}
              </div>
            </div>
            
            {/* Corner accent */}
            <div className="absolute top-4 right-4 w-3 h-3 bg-brand-accent rounded-full opacity-60 group-hover:opacity-100 transition-opacity"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

