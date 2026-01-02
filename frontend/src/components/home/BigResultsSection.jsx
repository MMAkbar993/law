import React, { useState } from 'react';

const caseResults = [
  {
    amount: '$13,000,000,000',
    title: 'Deepwater Horizon Oil Spill',
  },
  {
    amount: '$1,800,000,000',
    title: 'Porter Ranch Gas Leak',
  },
  {
    amount: '$425,651,947',
    title: 'Rodriguez v. Google',
  },
  {
    amount: '$400,000,000',
    title: 'Dicamba Herbicide Settlement',
  },
  {
    amount: '$380,500,000',
    title: 'Equifax, Inc., Customer Data Security Breach Litigation',
  },
  {
    amount: '$190,000,000',
    title: 'Capital One Consumer Data Security Breach Litigation',
  },

];

export default function BigResultsSection() {
  const [mobileSlide, setMobileSlide] = useState(0);
  const [desktopSlide, setDesktopSlide] = useState(0);

  // Mobile: 3 cards per slide, Desktop: 9 cards per slide (3x3 grid)
  const mobileCardsPerSlide = 3;
  const desktopCardsPerSlide = 9;
  const mobileTotalSlides = Math.ceil(caseResults.length / mobileCardsPerSlide);
  const desktopTotalSlides = Math.ceil(caseResults.length / desktopCardsPerSlide);

  const handleMobileNext = () => {
    setMobileSlide((prev) => (prev >= mobileTotalSlides - 1 ? 0 : prev + 1));
  };

  const handleMobilePrev = () => {
    setMobileSlide((prev) => (prev <= 0 ? mobileTotalSlides - 1 : prev - 1));
  };

  const handleDesktopNext = () => {
    setDesktopSlide((prev) => (prev >= desktopTotalSlides - 1 ? 0 : prev + 1));
  };

  const handleDesktopPrev = () => {
    setDesktopSlide((prev) => (prev <= 0 ? desktopTotalSlides - 1 : prev - 1));
  };

  const ResultCard = ({ result }) => {
    return (
      <div className="h-full">
        <div className="w-full h-full bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
          <div className="flex-1 px-4 py-6 flex flex-col items-center justify-center text-center">
            <div className="mb-4">
              <img
                src={`/sites/default/files/2025-10/${result.icon}`}
                alt={result.iconAlt}
                className="w-16 h-16 mx-auto"
                loading="lazy"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
              {result.amount}
            </div>
            <div className="text-lg font-semibold text-gray-900">
              {result.title}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="bg-green-50 py-12 md:py-16 lg:py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-gray-900">
          The Right Firm
        </h2>

        {/* Mobile View */}
        <div className="block lg:hidden">
          <div className="relative">
            <div className="overflow-hidden rounded-lg">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${mobileSlide * 100}%)` }}
              >
                {Array.from({ length: mobileTotalSlides }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 gap-4 px-2">
                      {caseResults
                        .slice(slideIndex * mobileCardsPerSlide, (slideIndex + 1) * mobileCardsPerSlide)
                        .map((result, idx) => {
                          const actualIndex = slideIndex * mobileCardsPerSlide + idx;
                          return (
                            <div key={actualIndex} className="h-80">
                              <ResultCard result={result} />
                            </div>
                          );
                        })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-6">
              <div className="flex gap-2">
                <button
                  onClick={handleMobilePrev}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-300 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={mobileSlide === 0}
                  aria-label="Previous slide"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={handleMobileNext}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-300 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={mobileSlide === mobileTotalSlides - 1}
                  aria-label="Next slide"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:block">
          <div className="relative">
            <div className="overflow-hidden rounded-lg">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${desktopSlide * 100}%)` }}
              >
                {Array.from({ length: desktopTotalSlides }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-3 gap-6 px-2">
                      {caseResults
                        .slice(slideIndex * desktopCardsPerSlide, (slideIndex + 1) * desktopCardsPerSlide)
                        .map((result, idx) => {
                          const actualIndex = slideIndex * desktopCardsPerSlide + idx;
                          return (
                            <div key={actualIndex} className="h-48 p-4">
                              <ResultCard result={result} />
                            </div>
                          );
                        })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <div className="flex gap-2">
                <button
                  onClick={handleDesktopPrev}
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-white border border-gray-300 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={desktopSlide === 0}
                  aria-label="Previous slide"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={handleDesktopNext}
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-white border border-gray-300 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={desktopSlide === desktopTotalSlides - 1}
                  aria-label="Next slide"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-600">
            Results may vary depending on your particular facts and legal circumstances.
          </p>
        </div>
      </div>
    </section>
  );
}

