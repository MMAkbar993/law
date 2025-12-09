import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../contexts/ThemeContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [aboutDropdownTimeout, setAboutDropdownTimeout] = useState(null);
  const { t, i18n } = useTranslation();
  const { theme, logo } = useTheme();
  const isSpanish = i18n.language.startsWith('es');

  useEffect(() => {
    document.documentElement.setAttribute('lang', i18n.language);
  }, [i18n.language]);

  const toggleLanguage = () => {
    const nextLanguage = isSpanish ? 'en' : 'es';
    i18n.changeLanguage(nextLanguage);
  };

  const headerBg = theme.primary || '#0a2043';
  const accentColor = theme.accent || '#f5d000';
  
  const navLinkBase =
    'text-white text-sm font-semibold transition-colors duration-200 flex items-center';

  return (
    <header className="sticky top-0 z-50 text-white" style={{ backgroundColor: headerBg }}>
      <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-3 flex-wrap lg:flex-nowrap">
        {/* Logo */}
        <a href="/">
        <div className="flex items-center">
          <div className="flex flex-col items-center md:items-start">
            {logo ? (
              <div 
                className="max-w-xs max-h-16"
                dangerouslySetInnerHTML={{ __html: logo }}
              />
            ) : (
              <>
                <div className="inline-flex items-center border-2 border-black bg-black px-4 py-1.5">
                  <span className="text-lg font-black leading-none tracking-tight" style={{ color: accentColor }}>
                    {t('header.logo')}
                  </span>
                </div>
                <p className="mt-1 hidden text-xs font-semibold tracking-wide text-white md:block">
                  {t('header.tagline.prefix')}{' '}
                  <span style={{ color: accentColor }}>{t('header.tagline.highlight')}</span>{' '}
                  {t('header.tagline.suffix')}
                </p>
              </>
            )}
          </div>
        </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden flex-1 items-center justify-end lg:flex min-w-0">
          <nav className="flex items-center gap-4 lg:gap-6 flex-wrap justify-end">
            <Link 
              to="/locations" 
              className={navLinkBase}
              style={{ '--hover-color': accentColor }}
              onMouseEnter={(e) => e.target.style.color = accentColor}
              onMouseLeave={(e) => e.target.style.color = 'white'}
            >
              {t('header.nav.locations')}
            </Link>
            <Link 
              to="/practice-areas" 
              className={navLinkBase}
              style={{ '--hover-color': accentColor }}
              onMouseEnter={(e) => e.target.style.color = accentColor}
              onMouseLeave={(e) => e.target.style.color = 'white'}
            >
              {t('header.nav.practiceAreas')}
            </Link>
            <Link 
              to="/attorneys" 
              className={navLinkBase}
              style={{ '--hover-color': accentColor }}
              onMouseEnter={(e) => e.target.style.color = accentColor}
              onMouseLeave={(e) => e.target.style.color = 'white'}
            >
              {t('header.nav.attorneys')}
            </Link>
            <div 
              className="relative"
              onMouseEnter={() => {
                if (aboutDropdownTimeout) {
                  clearTimeout(aboutDropdownTimeout);
                  setAboutDropdownTimeout(null);
                }
                setIsAboutDropdownOpen(true);
              }}
              onMouseLeave={() => {
                const timeout = setTimeout(() => {
                  setIsAboutDropdownOpen(false);
                }, 200); // 200ms delay before closing
                setAboutDropdownTimeout(timeout);
              }}
            >
              <Link 
                to="/our-firm" 
                className={navLinkBase}
                style={{ '--hover-color': accentColor }}
                onMouseEnter={(e) => e.target.style.color = accentColor}
                onMouseLeave={(e) => e.target.style.color = 'white'}
              >
                {t('header.nav.about')}
                <svg 
                  className={`ml-1 h-4 w-4 transition-transform ${isAboutDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              {isAboutDropdownOpen && (
                <div 
                  className="absolute top-full left-0 pt-2 w-64 z-50"
                  onMouseEnter={() => {
                    if (aboutDropdownTimeout) {
                      clearTimeout(aboutDropdownTimeout);
                      setAboutDropdownTimeout(null);
                    }
                    setIsAboutDropdownOpen(true);
                  }}
                  onMouseLeave={() => {
                    const timeout = setTimeout(() => {
                      setIsAboutDropdownOpen(false);
                    }, 200);
                    setAboutDropdownTimeout(timeout);
                  }}
                >
                  <div className="bg-white rounded-lg shadow-lg py-2">
                    <Link
                      to="/our-firm"
                      className="block px-4 py-2 text-gray-900 hover:bg-blue-50 transition-colors text-sm font-semibold"
                    >
                      {t('header.nav.aboutDropdown.whoWeAre')}
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link 
              to="/our-results" 
              className={navLinkBase}
              style={{ '--hover-color': accentColor }}
              onMouseEnter={(e) => e.target.style.color = accentColor}
              onMouseLeave={(e) => e.target.style.color = 'white'}
            >
              {t('header.nav.results')}
            </Link>
            <Link 
              to="/auto-accident-calculator" 
              className={`${navLinkBase} relative`}
              style={{ '--hover-color': accentColor }}
              onMouseEnter={(e) => e.target.style.color = accentColor}
              onMouseLeave={(e) => e.target.style.color = 'white'}
            >
              {t('header.nav.calculator')}
              <span className="ml-2 inline-flex items-center rounded-full bg-[#f5d000] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-black">
                NEW
              </span>
            </Link>
            <Link 
              to="/contact" 
              className={navLinkBase}
              style={{ '--hover-color': accentColor }}
              onMouseEnter={(e) => e.target.style.color = accentColor}
              onMouseLeave={(e) => e.target.style.color = 'white'}
            >
              {t('header.nav.contact')}
            </Link>
            {/* <button 
              className="ml-4 text-white transition-colors duration-200"
              style={{ '--hover-color': accentColor }}
              onMouseEnter={(e) => e.target.style.color = accentColor}
              onMouseLeave={(e) => e.target.style.color = 'white'}
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button> */}
            <div className="ml-6 flex flex-col items-end">
              <a 
                href={`tel:${t('common.phone').replace(/[^\d]/g, '')}`}
                className="text-xl font-black tracking-tight transition-colors"
                style={{ color: accentColor }}
                onMouseEnter={(e) => e.target.style.opacity = '0.8'}
                onMouseLeave={(e) => e.target.style.opacity = '1'}
              >
                {t('common.phone')}
              </a>
              <p className="text-xs font-semibold text-white/90 mt-0.5">
                Get Help Now. 24/7
              </p>
            </div>
            <button
              type="button"
              onClick={toggleLanguage}
              className="ml-4 rounded-full border border-white/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white transition-colors duration-200 hover:bg-white/10"
            >
              {isSpanish ? t('common.language.toEnglish') : t('common.language.toSpanish')}
            </button>
          </nav>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white transition-colors duration-200"
          style={{ '--hover-color': accentColor }}
          onMouseEnter={(e) => e.target.style.color = accentColor}
          onMouseLeave={(e) => e.target.style.color = 'white'}
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
            if (isMenuOpen) {
              setIsAboutDropdownOpen(false);
            }
          }}
        >
          <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-white/20 px-4 pb-6" style={{ backgroundColor: headerBg }}>
          <nav className="flex flex-col space-y-4 pt-4">
            <Link
              to="/locations"
              className="text-white text-sm font-semibold uppercase tracking-wide"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('header.nav.locations')}
            </Link>
            <Link
              to="/practice-areas"
              className="text-white text-sm font-semibold uppercase tracking-wide"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('header.nav.practiceAreas')}
            </Link>
            <Link 
              to="/attorneys" 
              className="text-white text-sm font-semibold uppercase tracking-wide"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('header.nav.attorneys')}
            </Link>
            <div>
              <button
                className="text-white text-sm font-semibold uppercase tracking-wide flex items-center w-full"
                onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
              >
                {t('header.nav.about')}
                <svg 
                  className={`ml-1 h-4 w-4 transition-transform ${isAboutDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isAboutDropdownOpen && (
                <div className="pl-4 pt-2 space-y-2">
                  <Link
                    to="/our-firm"
                    className="block text-white/80 text-sm font-semibold uppercase tracking-wide hover:text-white transition-colors"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsAboutDropdownOpen(false);
                    }}
                  >
                    {t('header.nav.aboutDropdown.whoWeAre')}
                  </Link>
                </div>
              )}
            </div>
            <Link
              to="/our-results"
              className="text-white text-sm font-semibold uppercase tracking-wide"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('header.nav.results')}
            </Link>
            <Link 
              to="/auto-accident-calculator" 
              className="text-white text-sm font-semibold uppercase tracking-wide flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('header.nav.calculator')}
              <span className="inline-flex items-center rounded-full bg-[#f5d000] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-black">
                NEW
              </span>
            </Link>
            <Link 
              to="/contact" 
              className="text-white text-sm font-semibold uppercase tracking-wide"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('header.nav.contact')}
            </Link>
            <a 
              href={`tel:${t('common.phone').replace(/[^\d]/g, '')}`}
              className="pt-2 text-lg font-black transition-colors"
              style={{ color: accentColor }}
              onMouseEnter={(e) => e.target.style.opacity = '0.8'}
              onMouseLeave={(e) => e.target.style.opacity = '1'}
            >
              {t('common.phone')}
            </a>
            <button
              type="button"
              onClick={toggleLanguage}
              className="w-max rounded-full border border-white/40 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition-colors duration-200 hover:bg-white/10"
            >
              {isSpanish ? t('common.language.toEnglish') : t('common.language.toSpanish')}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

