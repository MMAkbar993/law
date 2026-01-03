import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import FeeFreeFormSection from '../components/home/FeeFreeFormSection';

function LocationSearch() {
  const { t } = useTranslation();
  const hero = t('locations.hero', { returnObjects: true });
  const localOffice = hero?.localOffice;
  const allOffices = Array.isArray(hero?.offices) ? hero.offices : [];
  const [showAllOffices, setShowAllOffices] = useState(false);
  
  // Show first 3 offices by default, or all if showAllOffices is true
  const displayedOffices = showAllOffices ? allOffices : allOffices.slice(0, 3);

  return (
    <section className="bg-brand-light px-4 pb-12 pt-8 md:pt-12">
      <div className="container mx-auto max-w-6xl">
        {/* Search Section */}
        <div className="mb-10">
          <div className="text-sm text-gray-500 mb-2 font-semibold uppercase tracking-wide">
            {t('locations.hero.title')}
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:gap-4">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder={hero?.searchPlaceholder}
                className="w-full rounded-full border border-transparent bg-white px-6 py-3 text-base shadow-md focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/50"
              />
              <button
                type="button"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-brand-accent px-5 py-2 text-sm font-semibold text-black shadow hover:bg-brand-accentDark transition"
              >
                {hero?.searchButton}
              </button>
            </div>
            <button
              type="button"
              onClick={() => setShowAllOffices(!showAllOffices)}
              className="mt-4 inline-flex items-center text-sm font-semibold text-brand-primary transition hover:text-brand-primaryDark md:mt-0"
            >
              {showAllOffices ? 'Show Less' : hero?.viewAll}
              <svg className={`ml-2 h-4 w-4 transition-transform ${showAllOffices ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414-1.414L13.586 11H4a1 1 0 0 1 0-2h9.586l-3.293-3.293a1 1 0 0 1 0-1.414Z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        {/* Offices Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedOffices.map((office, index) => (
            <div
              key={index}
              className="rounded-3xl bg-white p-6 shadow-xl ring-1 ring-gray-100 hover:shadow-2xl transition-shadow duration-300"
            >
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-primary">
                {index === 0 ? hero?.localOfficeLabel : 'Office Location'}
              </p>
              <h3 className="mt-3 text-xl font-bold text-gray-900">
                {office?.name}
              </h3>
              <div className="mt-3 space-y-1 text-sm text-gray-600">
                {Array.isArray(office?.addressLines) &&
                  office.addressLines.map((line, lineIndex) => (
                    <p key={lineIndex}>{line}</p>
                  ))}
              </div>
              <div className="mt-4 flex items-center gap-3 text-brand-primary">
                <svg className="h-5 w-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1 1 18 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <a
                  href={`tel:${office?.phone?.replace(/[^0-9+]/g, '') ?? ''}`}
                  className="text-sm font-semibold hover:underline"
                >
                  {office?.phone}
                </a>
              </div>
              <button
                type="button"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-brand-accent px-6 py-3 text-sm font-bold text-black transition hover:bg-brand-accentDark w-full"
              >
                {office?.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RemoteHelp() {
  const { t } = useTranslation();
  const remoteHelp = t('locations.remoteHelp', { returnObjects: true });
  const features = Array.isArray(remoteHelp?.features) ? remoteHelp.features : [];

  return (
    <section className="bg-white px-4 py-12">
      <div className="container mx-auto max-w-6xl rounded-3xl bg-gray-50 px-6 py-8 shadow-sm ring-1 ring-gray-100">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{remoteHelp?.title}</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-2 rounded-xl bg-white px-4 py-3 shadow ring-1 ring-gray-100">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-primary text-white">
                    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <p className="text-sm font-semibold text-gray-800">{feature}</p>
                </div>
              ))}
            </div>
          </div>
          <Link to="/">
          <button
            type="button"
            className="inline-flex items-center rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-primaryDark"
          >
            {remoteHelp?.cta}
            <svg className="ml-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414-1.414L13.586 11H4a1 1 0 0 1 0-2h9.586l-3.293-3.293a1 1 0 0 1 0-1.414Z" clipRule="evenodd" />
            </svg>
          </button>
          </Link> 
        </div>
      </div>
    </section>
  );
}

function Coverage() {
  const { t } = useTranslation();
  const coverage = t('locations.coverage', { returnObjects: true });

  return (
    <section className="px-4 py-16">
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              {coverage?.title}
            </h2>
            <p className="mt-6 text-base text-gray-600">
              {coverage?.description}
            </p>
          </div>
          <div className="relative overflow-hidden rounded-3xl bg-brand-light shadow-lg">
            <img
              src="/usa-pin-map.svg"
              alt={coverage?.mapAlt}
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function StateList() {
  const { t } = useTranslation();
  const statesData = t('locations.states.items', { returnObjects: true });
  const statesTitle = t('locations.states.title');
  const [isExpanded, setIsExpanded] = useState(false);

  const columns = useMemo(() => {
    if (!Array.isArray(statesData) || !statesData.length) {
      return [];
    }
    const columnCount = 3;
    const perColumn = Math.ceil(statesData.length / columnCount);
    return Array.from({ length: columnCount }, (_, columnIndex) =>
      statesData.slice(columnIndex * perColumn, (columnIndex + 1) * perColumn),
    );
  }, [statesData]);

  // Show first column when collapsed (preview)
  const previewColumns = useMemo(() => {
    if (!Array.isArray(statesData) || !statesData.length) {
      return [];
    }
    const columnCount = 3;
    const perColumn = Math.ceil(statesData.length / columnCount);
    // When collapsed, only show the first column
    return [
      statesData.slice(0, perColumn),
      [], // Empty columns for layout consistency
      [],
    ];
  }, [statesData]);

  return (
    <section className="bg-white px-4 pb-16">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            {statesTitle}
          </h2>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-brand-primary hover:text-brand-primaryDark font-semibold transition-colors"
            aria-expanded={isExpanded}
            aria-label={isExpanded ? 'Collapse list' : 'Expand list'}
          >
            <span className="text-sm">
              {isExpanded ? 'Show Less' : 'Show All'}
            </span>
            <svg
              className={`h-5 w-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
        <div
          className={`mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3 overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[5000px]' : 'max-h-[400px]'
            }`}
        >
          {(isExpanded ? columns : previewColumns).map((column, columnIndex) => (
            <div key={columnIndex} className={`space-y-8 ${!isExpanded && columnIndex > 0 ? 'hidden lg:block lg:opacity-0' : ''}`}>
              {column.map((stateInfo) => (
                <div key={stateInfo.state}>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {stateInfo.state}
                  </h3>
                  <ul className="mt-2 space-y-1 text-sm text-gray-600">
                    {stateInfo.cities.map((city) => (
                      <li key={city}>{city}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Locations() {
  const { t } = useTranslation();

  return (
    <div className="bg-white">
      
      <LocationSearch />
      <RemoteHelp />
      <Coverage />
      <StateList />
      <FeeFreeFormSection />
    </div>
  );
}


