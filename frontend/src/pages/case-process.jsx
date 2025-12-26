import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import FeeFreeFormSection from '../components/home/FeeFreeFormSection';

export default function CaseProcess() {
  const { t } = useTranslation();
  const [openAccordion, setOpenAccordion] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(0);

  const breadcrumbs = t('caseProcess.breadcrumbs', { returnObjects: true });
  const hero = t('caseProcess.hero', { returnObjects: true });
  const afterInjury = t('caseProcess.afterInjury', { returnObjects: true });
  const doIHaveCase = t('caseProcess.doIHaveCase', { returnObjects: true });
  const hiringAttorney = t('caseProcess.hiringAttorney', { returnObjects: true });
  const caseWorth = t('caseProcess.caseWorth', { returnObjects: true });
  const workingWithAttorney = t('caseProcess.workingWithAttorney', { returnObjects: true });
  const injuredCTA = t('caseProcess.injuredCTA', { returnObjects: true });
  const caseBreakdown = t('caseProcess.caseBreakdown', { returnObjects: true });
  const documents101 = t('caseProcess.documents101', { returnObjects: true });
  const glossary = t('caseProcess.glossary', { returnObjects: true });
  const learnMore = t('caseProcess.learnMore', { returnObjects: true });

  const heroConfig = hero && typeof hero === 'object' ? hero : {};
  const afterInjuryConfig = afterInjury && typeof afterInjury === 'object' ? afterInjury : {};
  const cards = Array.isArray(afterInjuryConfig.cards) ? afterInjuryConfig.cards : [];
  const doIHaveCaseConfig = doIHaveCase && typeof doIHaveCase === 'object' ? doIHaveCase : {};
  const hiringAttorneyConfig = hiringAttorney && typeof hiringAttorney === 'object' ? hiringAttorney : {};
  const caseWorthConfig = caseWorth && typeof caseWorth === 'object' ? caseWorth : {};
  const workingWithAttorneyConfig = workingWithAttorney && typeof workingWithAttorney === 'object' ? workingWithAttorney : {};
  const injuredCTAConfig = injuredCTA && typeof injuredCTA === 'object' ? injuredCTA : {};
  const caseBreakdownConfig = caseBreakdown && typeof caseBreakdown === 'object' ? caseBreakdown : {};
  const documents101Config = documents101 && typeof documents101 === 'object' ? documents101 : {};
  const glossaryConfig = glossary && typeof glossary === 'object' ? glossary : {};
  const learnMoreConfig = learnMore && typeof learnMore === 'object' ? learnMore : {};
  
  const accordionItems = Array.isArray(doIHaveCaseConfig.items) ? doIHaveCaseConfig.items : [];
  const attorneyLinks = Array.isArray(hiringAttorneyConfig.links) ? hiringAttorneyConfig.links : [];
  const workingCards = Array.isArray(workingWithAttorneyConfig.cards) ? workingWithAttorneyConfig.cards : [];
  const videoSeries = Array.isArray(caseBreakdownConfig.videos) ? caseBreakdownConfig.videos : [];
  const glossaryTerms = Array.isArray(glossaryConfig.terms) ? glossaryConfig.terms : [];
  const learnMoreLinks = Array.isArray(learnMoreConfig.links) ? learnMoreConfig.links : [];

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="bg-white">


      {/* Hero Section - Modern and Clean */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              {heroConfig.titlePart1 ?? 'THE CASE'} {heroConfig.titlePart2 ?? 'PROCESS'}
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              {heroConfig.description ?? "Start here. We'll guide you through what you need to know."}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section - After an Injury - Simplified */}
      <section className="bg-white px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {afterInjuryConfig.title ?? 'After an Injury'}
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              {afterInjuryConfig.intro ?? "I've been hurt. Now what? Facing an injury can be overwhelming. Here are the basics."}
            </p>
          </div>

          {/* Content Cards - Modern Grid */}

        </div>
      </section>

      {/* Do I Have a Case Section - Simplified */}
      <section className="bg-gray-50 px-4 py-20">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {doIHaveCaseConfig.title ?? 'Do I have a case?'}
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              {doIHaveCaseConfig.intro ?? "Here's what we look for to see if an incident might qualify for a personal injury claim."}
            </p>
          </div>

          {/* Accordion Items - Centered */}
          <div className="max-w-3xl mx-auto space-y-4">
              {accordionItems.length > 0 ? (
                accordionItems.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => toggleAccordion(index)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-blue-50 transition"
                      aria-expanded={openAccordion === index}
                    >
                      <span className="text-xl font-bold text-gray-900">
                        {item.title}
                      </span>
                      <svg
                        className={`w-6 h-6 text-gray-600 transition-transform ${
                          openAccordion === index ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {openAccordion === index && item.content && (
                      <div className="px-6 pb-6 text-gray-700 text-lg leading-relaxed">
                        {item.content}
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <>
                  <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 overflow-hidden">
                    <button
                      type="button"
                      onClick={() => toggleAccordion(0)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-blue-50 transition"
                      aria-expanded={openAccordion === 0}
                    >
                      <span className="text-xl font-bold text-gray-900">
                        There were damages
                      </span>
                      <svg
                        className={`w-5 h-5 text-gray-500 transition-transform ${
                          openAccordion === 0 ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {openAccordion === 0 && (
                      <div className="px-6 pb-6 text-gray-700 text-lg leading-relaxed">
                        Content about damages would go here.
                      </div>
                    )}
                  </div>

                  <div className="bg-white rounded-lg shadow-sm ring-1 ring-gray-200 overflow-hidden">
                    <button
                      type="button"
                      onClick={() => toggleAccordion(1)}
                      className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition"
                      aria-expanded={openAccordion === 1}
                    >
                      <span className="text-lg font-semibold text-gray-900">
                        Someone else was at fault
                      </span>
                      <svg
                        className={`w-5 h-5 text-gray-500 transition-transform ${
                          openAccordion === 1 ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {openAccordion === 1 && (
                      <div className="px-5 pb-5 text-gray-700">
                        Content about fault would go here.
                      </div>
                    )}
                  </div>

                  <div className="bg-white rounded-lg shadow-sm ring-1 ring-gray-200 overflow-hidden">
                    <button
                      type="button"
                      onClick={() => toggleAccordion(2)}
                      className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition"
                      aria-expanded={openAccordion === 2}
                    >
                      <span className="text-lg font-semibold text-gray-900">
                        There is enough insurance coverage
                      </span>
                      <svg
                        className={`w-5 h-5 text-gray-500 transition-transform ${
                          openAccordion === 2 ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {openAccordion === 2 && (
                      <div className="px-5 pb-5 text-gray-700">
                        Content about insurance coverage would go here.
                      </div>
                    )}
                  </div>

                  <div className="bg-white rounded-lg shadow-sm ring-1 ring-gray-200 overflow-hidden">
                    <button
                      type="button"
                      onClick={() => toggleAccordion(3)}
                      className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition"
                      aria-expanded={openAccordion === 3}
                    >
                      <span className="text-lg font-semibold text-gray-900">
                        Think you have a case? Not sure? Get in touch.
                      </span>
                      <svg
                        className={`w-5 h-5 text-gray-500 transition-transform ${
                          openAccordion === 3 ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {openAccordion === 3 && (
                      <div className="px-5 pb-5 text-gray-700">
                        Contact information would go here.
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
      </section>

      {/* Hiring An Attorney 101 Section - Simplified */}
      <section className="bg-white px-4 py-20">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {hiringAttorneyConfig.title ?? 'Hiring An Attorney 101'}
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              {hiringAttorneyConfig.intro ?? 'All law firms are not the same.'}
            </p>
          </div>

          {/* Links Card - Modernized */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                {attorneyLinks.length > 0 ? (
                  <div className="divide-y divide-gray-200">
                    {attorneyLinks.map((link, index) => (
                      <Link
                        key={index}
                        to={link.url || '#'}
                        className="flex items-center justify-between p-6 hover:bg-blue-50 transition group border-b border-gray-100 last:border-b-0"
                      >
                        <span className="text-xl font-bold text-gray-900 group-hover:text-blue-600">
                          {link.title}
                        </span>
                        <div className="flex-shrink-0 ml-4">
                          <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center group-hover:bg-yellow-500 transition">
                            <svg
                              className="w-6 h-6 text-black"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="divide-y divide-gray-200">
                    <Link
                      to="#"
                      className="flex items-center justify-between p-5 hover:bg-gray-50 transition group"
                    >
                      <span className="text-lg font-semibold text-gray-900 group-hover:text-brand-primary">
                        Choosing the Right Attorney for You
                      </span>
                      <div className="flex-shrink-0 ml-4">
                        <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center">
                          <svg
                            className="w-5 h-5 text-black"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </div>
                    </Link>

                    <Link
                      to="#"
                      className="flex items-center justify-between p-5 hover:bg-gray-50 transition group"
                    >
                      <span className="text-lg font-semibold text-gray-900 group-hover:text-brand-primary">
                        Injury Attorney Fees: How It Works
                      </span>
                      <div className="flex-shrink-0 ml-4">
                        <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center">
                          <svg
                            className="w-5 h-5 text-black"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </div>
                    </Link>

                    <Link
                      to="#"
                      className="flex items-center justify-between p-5 hover:bg-gray-50 transition group"
                    >
                      <span className="text-lg font-semibold text-gray-900 group-hover:text-brand-primary">
                        Why Do Cases Get Turned Down?
                      </span>
                      <div className="flex-shrink-0 ml-4">
                        <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center">
                          <svg
                            className="w-5 h-5 text-black"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </div>
                    </Link>

                    <Link
                      to="#"
                      className="flex items-center justify-between p-5 hover:bg-gray-50 transition group"
                    >
                      <span className="text-lg font-semibold text-gray-900 group-hover:text-brand-primary">
                        The Morgan & Morgan Difference
                      </span>
                      <div className="flex-shrink-0 ml-4">
                        <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center">
                          <svg
                            className="w-5 h-5 text-black"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            </div>
      </section>

      {/* How much is my case worth? Section - Simplified */}


      {/* Working with an Attorney Section - Simplified */}
      <section className="bg-white px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {workingWithAttorneyConfig.title ?? 'Working with an Attorney'}
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              {workingWithAttorneyConfig.intro ?? 'Everything you need to know about what happens throughout your case journey.'}
            </p>
          </div>

          {/* Content Cards - Modern Grid */}
        </div>
      </section>

      {/* Injured? CTA Section - Simplified */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 px-4 py-20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            {injuredCTAConfig.title ?? 'Injured? Getting the compensation you deserve starts here.'}
          </h2>
          <Link
            to={injuredCTAConfig.buttonUrl || '#'}
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-10 py-5 rounded-xl text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {injuredCTAConfig.buttonText ?? 'Start your claim'}
          </Link>
        </div>
      </section>

      {/* The Case Process: A Breakdown Section - Simplified */}



      {/* Glossary Section - Simplified */}
      <section className="bg-white px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {glossaryConfig.title ?? 'Glossary'}
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              {glossaryConfig.description ?? 'From defense to depositions, view the complete guide for helpful explanations of common legal terms.'}
            </p>
          </div>

          {/* Glossary Terms - Centered Grid */}
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6 md:grid-cols-2">
                {glossaryTerms.length > 0 ? (
                  glossaryTerms.map((term, index) => (
                    <div key={index} className="flex gap-3">
                      <div className="flex-shrink-0 mt-1">
                        {term.icon ? (
                          <img src={term.icon} alt="" className="w-6 h-6" />
                        ) : (
                          <div className="w-6 h-6 bg-gray-300 rounded" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {term.title}
                        </h3>
                        <p className="text-sm text-gray-700">
                          {term.definition}
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <>
                    {/* Damages */}
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" />
                          <path d="M16 14L16.5 16.5L19 17L16.5 17.5L16 20L15.5 17.5L13 17L15.5 16.5L16 14Z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Damages</h3>
                        <p className="text-sm text-gray-700">
                          Financial compensation awarded for injury-related costs, including medical expenses, lost wages, and pain and suffering.
                        </p>
                      </div>
                    </div>

                    {/* Negligence */}
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2L2 22H22L12 2ZM12 16H12.01V18H12V16ZM12 8V14H12.01V8H12Z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Negligence</h3>
                        <p className="text-sm text-gray-700">
                          Failure to exercise reasonable care, resulting in harm or injury to another person.
                        </p>
                      </div>
                    </div>

                    {/* Settlement */}
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 12L11 14L15 10M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Settlement</h3>
                        <p className="text-sm text-gray-700">
                          An agreement reached between parties to resolve a lawsuit without going to trial, often involving compensation.
                        </p>
                      </div>
                    </div>

                    {/* Plaintiff */}
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9H21ZM19 21H5V3H13V9H19V21Z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Plaintiff</h3>
                        <p className="text-sm text-gray-700">
                          The person who initiates a lawsuit seeking legal remedy for damages caused by the defendant.
                        </p>
                      </div>
                    </div>

                    {/* Defendant */}
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M15.5 12C15.5 10.62 14.38 9.5 13 9.5S10.5 10.62 10.5 12S11.62 14.5 13 14.5S15.5 13.38 15.5 12M13 7.5C15.21 7.5 17 9.29 17 11.5C17 13.71 15.21 15.5 13 15.5S9 13.71 9 11.5C9 9.29 10.79 7.5 13 7.5M13 1.5C8.58 1.5 5 4.58 5 9C5 11.88 6.64 14.29 9 15.5C9.25 15.66 9.5 15.82 9.75 16C10.75 16.38 11.83 16.59 13 16.59C14.17 16.59 15.25 16.38 16.25 16C16.5 15.82 16.75 15.66 17 15.5C19.36 14.29 21 11.88 21 9C21 4.58 17.42 1.5 13 1.5M13 3C16.31 3 19 5.69 19 9C19 11.5 17.5 13.64 15.5 14.5C15.25 14.66 15 14.82 14.75 15C14.25 15.25 13.63 15.41 13 15.41C12.37 15.41 11.75 15.25 11.25 15C11 14.82 10.75 14.66 10.5 14.5C8.5 13.64 7 11.5 7 9C7 5.69 9.69 3 13 3Z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Defendant</h3>
                        <p className="text-sm text-gray-700">
                          The person or party being sued or accused in a court of law.
                        </p>
                      </div>
                    </div>

                    {/* Deposition */}
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H6L4 18V4H20V16Z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Deposition</h3>
                        <p className="text-sm text-gray-700">
                          Sworn out-of-court testimony given by a witness, recorded for use in the legal process.
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {glossaryConfig.linkText && (
                <div className="mt-12 text-center">
                  <Link
                    to={glossaryConfig.linkUrl || '#'}
                    className="inline-flex items-center text-xl font-bold text-gray-900 hover:text-blue-600 transition group"
                  >
                    <span>{glossaryConfig.linkText}</span>
                    <div className="ml-3 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center group-hover:bg-yellow-500 transition">
                      <svg
                        className="w-5 h-5 text-gray-900"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </Link>
                </div>
              )}

          </div>
        </div>
      </section>

      {/* Learn More Section - Modern Design */}
      <section className="bg-white px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {learnMoreConfig.title ?? 'Learn More'}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {learnMoreConfig.description ?? "Injured and not sure what to do next? We'll guide you through everything you need to know."}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {learnMoreLinks.length > 0 ? (
              <>
                <div className="space-y-0 bg-gray-50 rounded-2xl overflow-hidden border border-gray-100">
                  {learnMoreLinks.slice(0, Math.ceil(learnMoreLinks.length / 2)).map((link, index) => (
                    <Link
                      key={index}
                      to={link.url || '#'}
                      className="block px-6 py-5 border-b border-gray-200 last:border-b-0 hover:bg-white hover:shadow-sm transition-all duration-200 group"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-base md:text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors leading-snug flex-1">
                          {link.title}
                        </span>
                        <svg
                          className="w-5 h-5 text-gray-400 flex-shrink-0 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-200"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="space-y-0 bg-gray-50 rounded-2xl overflow-hidden border border-gray-100">
                  {learnMoreLinks.slice(Math.ceil(learnMoreLinks.length / 2)).map((link, index) => (
                    <Link
                      key={index + Math.ceil(learnMoreLinks.length / 2)}
                      to={link.url || '#'}
                      className="block px-6 py-5 border-b border-gray-200 last:border-b-0 hover:bg-white hover:shadow-sm transition-all duration-200 group"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-base md:text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors leading-snug flex-1">
                          {link.title}
                        </span>
                        <svg
                          className="w-5 h-5 text-gray-400 flex-shrink-0 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-200"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </Link>
                  ))}
                </div>
              </>
            ) : (
              <>
                <div className="space-y-0 bg-gray-50 rounded-2xl overflow-hidden border border-gray-100">
                  {[
                    'How Much Does a Personal Injury Lawyer Cost?',
                    'Can You Switch Personal Injury Lawyers?',
                    'What Damages Can You Sue For?',
                    'Personal Injury Law Cheat Sheet: Everything You Need to Know From A to Z',
                    'What Is Morgan & Morgan\'s Process Like?',
                  ].map((title, index) => (
                    <Link
                      key={index}
                      to="#"
                      className="block px-6 py-5 border-b border-gray-200 last:border-b-0 hover:bg-white hover:shadow-sm transition-all duration-200 group"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-base md:text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors leading-snug flex-1">
                          {title}
                        </span>
                        <svg
                          className="w-5 h-5 text-gray-400 flex-shrink-0 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-200"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="space-y-0 bg-gray-50 rounded-2xl overflow-hidden border border-gray-100">
                  {[
                    'Lawsuit Settlements: When and How You\'ll Get Paid',
                    'Should I Represent Myself in a Personal Injury Case?',
                    'How Much is My Personal Injury Case Worth?',
                    'How Can I Find a Good Personal Injury Lawyer?',
                    'What To Expect In A Virtual Hearing',
                  ].map((title, index) => (
                    <Link
                      key={index}
                      to="#"
                      className="block px-6 py-5 border-b border-gray-200 last:border-b-0 hover:bg-white hover:shadow-sm transition-all duration-200 group"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-base md:text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors leading-snug flex-1">
                          {title}
                        </span>
                        <svg
                          className="w-5 h-5 text-gray-400 flex-shrink-0 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-200"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>

          {learnMoreConfig.showLoadMore !== false && (
            <div className="mt-12 text-center">
              <button
                type="button"
                className="inline-flex items-center gap-2 text-base font-semibold text-blue-600 hover:text-blue-700 transition-colors group"
              >
                <span>{learnMoreConfig.loadMoreText ?? 'Load more'}</span>
                <svg
                  className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      </section>
      <FeeFreeFormSection />
    </div>
  );
}

