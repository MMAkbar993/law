import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import FeeFreeFormSection from '../components/home/FeeFreeFormSection';

export default function OurFirm() {
  const { t } = useTranslation();
  const [activeTimelineIndex, setActiveTimelineIndex] = useState(0);
  const [activeCommunityIndex, setActiveCommunityIndex] = useState(0);
  const [activeTabIndex, setActiveTabIndex] = useState(0);


  const ourFirmConfig = t('ourFirm', { returnObjects: true });
  const config = ourFirmConfig && typeof ourFirmConfig === 'object' ? ourFirmConfig : {};

  const hero = config.hero || {};
  const quote = config.quote || {};
  const timeline = config.timeline || {};
  const features = config.features || {};
  const spanishBanner = config.spanishBanner || {};
  const clientsFirst = config.clientsFirst || {};
  const missionVideo = config.missionVideo || {};
  const forAttorneys = config.forAttorneys || {};
  const standingUp = config.standingUp || {};
  const verdictMagazine = config.verdictMagazine || {};
  const communities = config.communities || {};

  const timelineEvents = Array.isArray(timeline.events) && timeline.events.length > 0
    ? timeline.events
    : [
      {
        year: '1988',
        image: '2a5933f1cc42ba8a6cb60f7dab85c4d5.jpg.avif',
        description: "John and Ultima Morgan founded Morgan & Morgan with the mission to fight 'for the people, not the powerful.'",
        videoUrl: '#',
        videoId: 'tvyoe9ijpj',
      },
      {
        year: '1997',
        image: '24dd65d85711bb34b7391c4605061331.jpg.avif',
        description: "We've grown to 25 lawyers and secured our first $1 million verdict, establishing our reputation as trial attorneys.",
        videoUrl: '#',
        videoId: '66g52m7swu',
      },
      {
        year: '2008',
        image: '7a3892ebfcfd4bcc9ec29055648a3a7a.jpg.avif',
        description: "John and Ultima's son, Mike Morgan, joins Morgan & Morgan's growing army, now numbering over 100 lawyers.",
        videoUrl: '#',
        videoId: '6wabyag5i5',
      },
      {
        year: '2010',
        image: '6b531ffc057951450efbb5146b3924bb.jpg.avif',
        description: 'The firm secured a $1.25 billion settlement in a Black farmers discrimination case. Matt Morgan joins the firm.',
        videoUrl: '#',
        videoId: 'c2tynjpsw4',
      },
      {
        year: '2015',
        image: '146d62a46da8f221c996af8244ed0e3d.jpg.avif',
        description: "Dan Morgan joined the firm's 250 attorneys. We're on our way to becoming America's Largest Injury Law Firm.",
        videoUrl: '#',
        videoId: '6gctzmefg7',
      },
      {
        year: '2023',
        image: 'a0f254bda63698cd8bb417073368359b.jpg.avif',
        description: 'Licensed in all 50 states, we\'re here to fight everywhere for everyone.',
        videoUrl: '#',
        videoId: 'er8bowp8eq',
      },
      {
        year: '2025',
        image: '11961ff7983686f805b2b7bea033bb3c.jpg.avif',
        description: '1,000 attorneys strong and still growing.',
        videoUrl: '#',
        videoId: '0dzgavdyv3',
      },
    ];

  const standingUpTabs = [
    {
      title: 'Raising the Minimum Wage',
      subtitle: 'A liveable wage should be a right, not a privilege.',
      image: 'Mike Bird.png.avif',
      description: "John Morgan has been a key advocate for raising Florida's minimum wage to $15 an hour. His efforts led to the successful passage of a constitutional amendment in 2020, with the increase being phased in through 2026.",
    },
    {
      title: 'Legalization of Medical Marijuana',
      subtitle: 'Outdated marijuana laws need to change—for good.',
      image: 'Mike Bird-2.png.avif',
      description: 'After leading the successful effort to legalize medical marijuana in Florida, John Morgan is now advocating for the full legalization of recreational use. This change aims to reform a law that disproportionately affects marginalized communities.',
    },
    {
      title: 'Bail Reform',
      subtitle: 'The justice system shouldn\'t punish poverty.',
      image: 'Mike Bird-3.png.avif',
      description: 'Bail systems across the country often disadvantage people without financial resources. Our advocacy work includes efforts to reform these systems—aiming to create a fairer process for all Floridians, regardless of their economic standing.',
    },
  ];

  const communityCards = [
    {
      title: 'Celebrating Growth in the Palmetto State: Morgan & Morgan\'s Columbia Office Is Officially Open',
      image: 'Untitled design (88).jpg.avif',
      link: '#',
    },
    {
      title: 'Meet R. Walker Garrett: The Columbus Attorney Fighting for His Community',
      image: 'RWalkerGarrett_Blog 1920x1080.jpg.avif',
      link: '#',
    },
    {
      title: 'Morgan & Morgan Donates $22,300 to St. Louis Blues Charitable Foundation, Blues for Kids',
      image: 'BlogHeader_76ers-min.png.avif',
      link: '#',
    },
    {
      title: 'Morgan & Morgan Partners With the Philadelphia 76ERS for First Annual Season of Giving Coat Drive',
      image: 'BlogHeader_WWE-min.png.avif',
      link: '#',
    },
    {
      title: 'Morgan & Morgan Named Official Law Firm Partner of WWE®',
      image: 'Untitled design (88).jpg.avif',
      link: '#',
    },
    {
      title: 'Morgan & Morgan Helps Make Wishes Come True at Mother\'s Day Truck-a-Thon in Manheim, PA',
      image: 'Untitled design (81).jpg.avif',
      link: '#',
    },
    {
      title: 'Walking for Wishes and Making Magic in Jacksonville',
      image: 'Untitled design (80).jpg.avif',
      link: '#',
    },
    {
      title: 'Wango Tango Hits the Right Note With Morgan & Morgan in Huntington Beach',
      image: 'Untitled design (80).jpg.avif',
      link: '#',
    },
    {
      title: 'Morgan & Morgan Brings Big Energy to Monster Jam Charleston',
      image: 'Untitled design (79).jpg.avif',
      link: '#',
    },
    {
      title: 'Morgan & Morgan Brings the Action to Monster Jam at Atlanta Motor Speedway',
      image: 'Untitled design (78).jpg.avif',
      link: '#',
    },
  ];

  return (
    <div className="bg-gray-900 min-h-screen">
      {/* Secondary Navigation */}
      <section className="bg-white border-b border-gray-200">
        <div className="container mx-auto max-w-7xl px-4 py-3">
          <div className="flex items-center justify-center gap-6 flex-wrap">
          
            <ul className="flex items-center gap-6 text-sm font-semibold text-gray-700">
              
              <li className="hidden lg:list-item">
                <Link
                  to="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold text-sm transition"
                >
                  Start your claim
                </Link>
              </li>
              
            </ul>
            <div className="lg:hidden">
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold text-sm transition"
              >
                Start your claim
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section with Dark Blue Background */}
      <section className="relative bg-gray-900 px-4 py-16 lg:py-24">
        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left Column - Text Content */}
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
                {hero.title ?? 'OUR FAMILY, FIGHTING FOR YOURS'}
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                {hero.description ?? "Morgan & Morgan was founded by John and Ultima Morgan in 1988. Our purpose is inspired by John's brother, Tim, who was paralyzed in a workplace accident. The insurance companies left his family with too little to cover his care. John vowed to fight for other families like theirs—and Morgan & Morgan was born."}
              </p>
              <Link
                to={hero.buttonUrl || '#'}
                className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-4 rounded-lg transition shadow-lg"
              >
                {hero.buttonText ?? 'Watch our story'}
              </Link>
            </div>

            {/* Right Column - Image with Quote Overlay */}
            <div className="relative">
              <div className="relative aspect-[4/5] lg:aspect-square rounded-lg overflow-hidden shadow-2xl">
                <img
                  src={hero.image || 'tim_john_1024 2.png.avif'}
                  alt={hero.imageAlt || 'John and Tim Morgan'}
                  className="w-full h-full object-cover"
                />

                {/* Quote Overlay */}
                <div className="absolute bottom-0 right-0 left-0 p-6 lg:p-8">
                  <div className="relative">
                    <p
                      className="text-yellow-400 text-3xl md:text-4xl lg:text-5xl font-bold italic"
                      style={{
                        fontFamily: 'cursive, serif',
                        textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                        lineHeight: '1.2',
                      }}
                    >
                      {quote.text ?? '"For the people, not the powerful."'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Through the Years Section */}
    

      {/* We Built this Firm for You Section */}
      <section className="bg-white px-4 py-16">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {features.title ?? 'We Built this Firm for You'}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {features.intro ?? "After 35 years, Morgan & Morgan remains a family firm dedicated to fighting for the average American family. Here's how we make it happen."}
            </p>
          </div>

          <div className="space-y-8">
            {Array.isArray(features.items) && features.items.length > 0 ? (
              features.items.map((feature, index) => (
                <div key={index} className="bg-blue-50 rounded-2xl p-8 md:p-12">
                  <div className="grid gap-8 lg:grid-cols-2 items-center">
                    <div className="flex justify-center lg:justify-start">
                      {feature.illustration ? (
                        <img
                          src={feature.illustration}
                          alt={feature.title}
                          className="max-w-md w-full h-auto"
                        />
                      ) : (
                        <div className="w-full max-w-md aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                          <span className="text-gray-400">Illustration</span>
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-lg text-gray-700 mb-6">
                        {feature.description}
                      </p>
                      {feature.linkText && (
                        <Link
                          to={feature.linkUrl || '#'}
                          className="inline-flex items-center gap-2 text-brand-primary font-semibold hover:text-brand-primaryDark transition"
                        >
                          <span>{feature.linkText}</span>
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
                      )}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <>
                {/* Feature 1: Everywhere for Everyone */}
                <div className="bg-blue-50 rounded-2xl p-8 md:p-12">
                  <div className="grid gap-8 lg:grid-cols-2 items-center">
                    <div className="flex justify-center lg:justify-start">
                      <img src="Screenshot 2024-11-26 at 7.08.53 AM 1.avif" alt="" />
                    </div>
                    <div className="bg-white p-4 rounded-lg w-full">
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        Everywhere for Everyone
                      </h3>
                      <p className="text-lg text-gray-700 mb-6">
                        With 125 offices nationwide, we're committed to being accessible to all. No matter where you are, you can count on a dedicated team ready to fight for you.
                      </p>
                      <Link
                        to="/locations"
                        className="inline-flex items-center gap-2 text-brand-primary font-semibold hover:text-brand-primaryDark transition"
                      >
                        <span>Find an office near you</span>
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

                {/* Feature 2: Fighting for More */}
                <div className="bg-blue-50 rounded-2xl p-8 md:p-12">
                  <div className="grid gap-8 lg:grid-cols-2 items-center">
                    <div className="flex justify-center lg:justify-start">
                      <img src="Screenshot 2024-11-26 at 7.08.53 AM 1-2.avif" alt="" />
                    </div>
                    <div className="bg-white p-4 rounded-lg w-full">
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        Fighting for More
                      </h3>
                      <p className="text-lg text-gray-700 mb-6">
                        We have the experience, credibility and resources to fight for what you deserve. Don't settle for less.
                      </p>
                      <Link
                        to="/our-results"
                        className="inline-flex items-center gap-2 text-brand-primary font-semibold hover:text-brand-primaryDark transition"
                      >
                        <span>View our results</span>
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

                {/* Feature 3: Here for You, Every Step of the Way */}
                <div className="bg-blue-50 rounded-2xl p-8 md:p-12">
                  <div className="grid gap-8 lg:grid-cols-2 items-center">
                    <div className="flex justify-center lg:justify-start">
                      <img src="Screenshot 2024-11-26 at 7.08.53 AM 1-3.avif" alt="" />
                    </div>
                    <div className="bg-white p-4 rounded-lg w-full">
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        Here for You, Every Step of the Way
                      </h3>
                      <p className="text-lg text-gray-700 mb-6">
                        Call or text us 24/7, track updates through our app, and stay informed with clear communication at every stage. We're here to guide you from start to finish.
                      </p>
                      <Link
                        to="/case-process"
                        className="inline-flex items-center gap-2 text-brand-primary font-semibold hover:text-brand-primaryDark transition"
                      >
                        <span>See if you qualify</span>
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
              </>
            )}
          </div>
        </div>
      </section>

      {/* Hablamos tu idioma - Spanish Banner Section */}
      <section className="bg-gray-900 px-4 py-16">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8">
              {spanishBanner.title ?? 'Hablamos tu idioma'}
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-12 items-center">
            {/* Left - Logo Box */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="text-3xl font-extrabold text-gray-900 mb-2">
                  {spanishBanner.logoText ?? 'ABOGADOS.COM'}
                </div>
                <div className="text-lg font-semibold text-gray-700">
                  {spanishBanner.logoSubtext ?? 'MORGAN & MORGAN'}
                </div>
              </div>
            </div>

            {/* Right - Testimonial */}
            <div className="lg:col-span-9">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0">
                  <img
                    src={spanishBanner.testimonialImage || 'Rectangle 34624240-4_0.png.webp'}
                    alt={spanishBanner.testimonialName || 'Oswaldo'}
                    className="w-24 h-24 rounded-full object-cover border-4 border-white"
                  />
                </div>
                <div className="flex-1 text-white">
                  <p className="text-xl md:text-2xl font-semibold mb-4 leading-relaxed">
                    {spanishBanner.testimonialQuote ?? '"Comunicarse con ellos es rápido. Es confiable. Ellos son bilingües. Lo más lindo de todo esto es que el abogado, a uno le coge tanta confianza que uno se siente tan seguro."'}
                  </p>
                  <p className="text-sm text-white/80 mb-6">
                    {spanishBanner.testimonialAuthor ?? 'Oswaldo, Cliente real de Morgan & Morgan'}
                  </p>
                  <p className="text-lg text-white/90 mb-6">
                    {spanishBanner.missionStatement ?? "We're here for the 42 million Spanish speakers in the U.S.—in their language."}
                  </p>
                  <Link
                    to={spanishBanner.buttonUrl || '#'}
                    className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-900 font-bold px-6 py-3 rounded-lg transition shadow-lg"
                  >
                    <span>{spanishBanner.buttonText ?? 'Conoce tus derechos'}</span>
                    <svg
                      className="w-4 h-4"
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
          </div>
        </div>
      </section>

      {/* Clients First, Always Section */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {clientsFirst.title ?? 'Clients First, Always'}
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {Array.isArray(clientsFirst.items) && clientsFirst.items.length > 0 ? (
              clientsFirst.items.map((item, index) => (
                <div key={index} className="bg-blue-50 rounded-xl p-6">
                  <div className="w-12 h-12 bg-gray-300 rounded-lg flex items-center justify-center mb-4">
                    {item.icon ? (
                      <img src={item.icon} alt="" className="w-8 h-8" />
                    ) : (
                      <div className="w-8 h-8 bg-gray-400 rounded" />
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-700">
                    {item.description}
                  </p>
                </div>
              ))
            ) : (
              <>
                {/* Righting a Rigged System */}
                <div className="bg-blue-50 rounded-xl p-6">
                  <div className="w-12 h-12 bg-gray-300 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Righting a Rigged System
                  </h3>
                  <p className="text-gray-700">
                    At our core, Morgan & Morgan is centered on advocating for individuals, fighting for justice, and empowering those who may not have a voice in the legal system.
                  </p>
                </div>

                {/* Stronger Together */}
                <div className="bg-blue-50 rounded-xl p-6">
                  <div className="w-12 h-12 bg-gray-300 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Stronger Together
                  </h3>
                  <p className="text-gray-700">
                    We've grown our firm so that our collective knowledge, resources, and talent can help us achieve more for those who need it most.
                  </p>
                </div>

                {/* Practice of Compassion */}
                <div className="bg-blue-50 rounded-xl p-6">
                  <div className="w-12 h-12 bg-gray-300 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Practice of Compassion
                  </h3>
                  <p className="text-gray-700">
                    It's more than words—we built our firm for you. We strive to make the process as smooth as possible—our clients can focus on recovery while we handle the rest.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* 1,000 Attorneys. 1 Mission. Video Section */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {missionVideo.title ?? '1,000 Attorneys. 1 Mission.'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {missionVideo.subtitle ?? "It's more than a job. Our attorneys are dedicated to making a difference."}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video bg-blue-100 rounded-lg overflow-hidden shadow-lg">
              <img
                src={missionVideo.videoThumbnail || 'aba4d66b26a87cd5887ba9e03348dd2b.jpg.avif'}
                alt="Attorney video"
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition"
                aria-label="Play video"
              >
                <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                  <svg
                    className="w-10 h-10 text-gray-900 ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-4 text-center">
              {missionVideo.disclaimer ?? 'The attorneys shown in these videos may not be licensed in your state. To find an attorney licensed in your area, please visit our attorney page.'}
            </p>
          </div>
        </div>
      </section>

      {/* For the Attorneys Section */}
      <section className="bg-gray-900 px-4 py-16">
        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-12 items-center">
            {/* Left - Logo */}
            <div className="lg:col-span-3">
              <div className="text-white">
                <div className="text-2xl font-extrabold mb-1">
                  {forAttorneys.logoText ?? 'MORGAN & MORGAN'}
                </div>
                <div className="text-sm text-white/80">
                  {forAttorneys.logoSubtext ?? 'THE MORGAN CONNECTION'}
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="lg:col-span-9">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
                {forAttorneys.title ?? 'For the Attorneys'}
              </h2>
              <p className="text-lg text-white/90 mb-6 leading-relaxed">
                {forAttorneys.description ?? "We created The Morgan Connection because we can go further together than we can alone. As a nationwide network of referral and co-counsel partners, TMC enables firms to scale their practices, diversify income, and help more clients get the justice they deserve."}
              </p>
              <Link
                to={forAttorneys.buttonUrl || '#'}
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-900 font-bold px-6 py-3 rounded-lg transition shadow-lg"
              >
                <span>{forAttorneys.buttonText ?? 'Join our network'}</span>
                <svg
                  className="w-4 h-4"
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
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Standing Up for Change Section */}
      <section className="bg-white px-4 py-16">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {standingUp.title ?? 'Standing Up for Change'}
            </h2>
            <p className="text-lg text-gray-600 hidden lg:block">
              {standingUp.subtitle ?? "For John Morgan, advocacy is more than winning cases."}
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Left Column - Tabs */}
            <div className="space-y-4">
              {standingUpTabs.map((tab, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveTabIndex(index)}
                  className={`w-full text-left p-4 rounded-lg transition ${
                    activeTabIndex === index
                      ? 'bg-blue-50 border-2 border-blue-600'
                      : 'bg-gray-50 border-2 border-transparent hover:bg-gray-100'
                  }`}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {tab.title}
                  </h3>
                  <p className="text-gray-700">
                    {tab.subtitle}
                  </p>
                  {/* Mobile Content */}
                  <div className={`lg:hidden mt-4 ${activeTabIndex === index ? 'block' : 'hidden'}`}>
                    <img
                      src={tab.image}
                      alt={tab.title}
                      className="w-full h-auto rounded-lg mb-4"
                    />
                    <p className="text-sm text-gray-700">
                      {tab.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {/* Right Column - Desktop Content */}
            <div className="hidden lg:block">
              <div className="mb-6">
                <img
                  src={standingUpTabs[activeTabIndex].image}
                  alt={standingUpTabs[activeTabIndex].title}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <p className="text-lg text-gray-700">
                {standingUpTabs[activeTabIndex].description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Annual Verdict Magazine Section */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            {/* Left - Magazine Cover */}
            <div className="flex justify-center lg:justify-start">
              <div className="max-w-sm">
                <img
                  src={verdictMagazine.coverImage || 'magazine-pic_0.jpeg.avif'}
                  alt="Verdict Magazine"
                  className="w-full h-auto rounded-lg shadow-xl"
                />
              </div>
            </div>

            {/* Right - Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {verdictMagazine.title ?? 'Annual Verdict Magazine'}
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {verdictMagazine.description ?? "Our annual magazine highlights our biggest cases, firm growth, and the attorneys and clients behind the numbers. Each issue also includes a recent selection of verdicts and settlements across different practice areas. We're proud to share the results of our dedication 'For The People.'"}
              </p>
              <Link
                to={verdictMagazine.buttonUrl || '#'}
                className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-primaryDark text-white font-bold px-6 py-3 rounded-lg transition shadow-lg"
              >
                <span>{verdictMagazine.buttonText ?? 'View the Magazine'}</span>
                <svg
                  className="w-4 h-4"
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
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Committed to Our Communities Section */}
      <section className="bg-white px-4 py-16">
        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-12 mb-12">
            {/* Left - Title */}
            <div className="lg:col-span-5">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                {communities.title ?? 'Committed to Our Communities'}
              </h2>
            </div>

            {/* Right - Supporting Text and CTA */}
            <div className="lg:col-span-7">
              <p className="text-lg text-gray-700 mb-6">
                {communities.description ?? "Even as we've grown, we remain committed to the local communities we call home."}
              </p>
              <Link
                to={communities.buttonUrl || '#'}
                className="inline-flex items-center gap-2 text-brand-primary font-semibold hover:text-brand-primaryDark transition"
              >
                <span>{communities.buttonText ?? 'See how else we support'}</span>
                <svg
                  className="w-4 h-4"
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

          {/* Community Cards Carousel */}
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ 
                  transform: `translateX(calc(-${activeCommunityIndex} * (100% / 3)))` 
                }}
              >
                {communityCards.map((card, index) => (
                  <div 
                    key={index} 
                    className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 pr-6"
                  >
                    <Link to={card.link} className="block bg-white rounded-lg shadow-lg overflow-hidden ring-1 ring-gray-200 hover:shadow-xl transition h-full">
                      <div className="aspect-[642/596] bg-gray-100 overflow-hidden">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg md:text-xl font-bold text-gray-900">
                          {card.title}
                        </h3>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Navigation Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {communityCards.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveCommunityIndex(index)}
                  className={`h-2 w-2 rounded-full transition-all ${activeCommunityIndex === index
                      ? 'bg-gray-900'
                      : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  aria-label={`Go to community card ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Floating TEXT US Sidebar */}
      {/* <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <div className="bg-blue-100 rounded-l-lg p-4 shadow-lg">
          <div className="flex flex-col items-center gap-2">
            <div className="text-blue-900 font-bold text-sm transform -rotate-90 whitespace-nowrap">
              TEXT US
            </div>
            <div className="text-blue-900 text-xs font-semibold">
              24/7/365
            </div>
            <button
              type="button"
              className="mt-2 w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center hover:bg-yellow-500 transition shadow-md"
              aria-label="Text us"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </button>
          </div>
        </div>
      </div> */}
      <FeeFreeFormSection />
    </div>
  );
}

