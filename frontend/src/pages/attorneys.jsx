import React, { useState, useMemo, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import MissionVideoSection from '../components/common/MissionVideoSection';
import CareersSection from '../components/common/CareersSection';
import FeeFreeFormSection from '../components/home/FeeFreeFormSection';
import AttorneyModal from '../components/attorneys/AttorneyModal';

export default function Attorneys() {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [practiceArea, setPracticeArea] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [sortBy, setSortBy] = useState('firstName');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedAttorney, setSelectedAttorney] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const attorneysPerPage = 12;

  // Dropdown states
  const [practiceAreaOpen, setPracticeAreaOpen] = useState(false);
  const [stateOpen, setStateOpen] = useState(false);
  const [cityOpen, setCityOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  const practiceAreaRef = useRef(null);
  const stateRef = useRef(null);
  const cityRef = useRef(null);
  const sortRef = useRef(null);

  const attorneysConfig = t('attorneys', { returnObjects: true });
  const config = attorneysConfig && typeof attorneysConfig === 'object' ? attorneysConfig : {};

  // All US states
  const allStates = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado',
    'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho',
    'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
    'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
    'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma',
    'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
    'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington',
    'Washington D.C.', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];

  // Practice areas from HTML
  const practiceAreas = [
    'Americans with Disabilities Act', 'Aviation Crash', 'Birth Injury', 'Boating Accident',
    'Breach of Contract', 'Burn Injury', 'California Wildfire', 'Car Accident',
    'Carbon Monoxide Exposure', 'Catastrophic Event', 'Child Sexual Abuse', 'Class Action',
    'Construction Accidents', 'Construction Defect', 'Dangerous Drugs', 'Data Privacy',
    'Depo-Provera', 'Dog Bite', 'Dram Shop Liability', 'Drowning Accident', 'Elder Abuse',
    'Employee Misclassification', 'Employment Law', 'Exploding Airbags', 'Explosions',
    'Family and Medical Leave Act', 'Hair Dye Lawsuit', 'Hertz Data Breach', 'Insurance Claims',
    'Maritime & Admiralty', 'Mass Arbitration', 'Mass Tort', 'Medical Malpractice',
    'Mesothelioma Claim', 'Motorcycle Accident', 'Negligent Security', 'Nursing Home Abuse',
    'Offshore Injury', 'Personal Injury', 'Premises Liability', 'Product Liability',
    'Professional Liability', 'Slip and Fall', 'Social Security Disability', 'Spinal Cord Injury',
    'Toxic Fumes Lawsuit', 'Toxics and Environmental', 'Traumatic Brain Injury', 'Trucking Accident',
    'Ultra-Processed Foods', 'Unpaid Overtime', 'Veterans Benefit', 'Wage and Hour Violation',
    'Weight Loss and Diabetes Drugs', 'Whistleblower & Qui Tam', 'Wildfire Claims',
    "Workers' Compensation", 'Workplace Discrimination', 'Wrongful Death', 'Wrongful Termination'
  ];

  // Sample attorney data with contact info
  const allAttorneys = useMemo(() => {
    const sampleAttorneys = [
      { 
        id: 1, 
        firstName: 'William J.', 
        lastName: 'Degenhart', 
        location: 'Georgia', 
        image: '9606_Degenhart_WilliamJ_1000x1000-min (1).avif',
        email: 'wdegenhart@forthepeople.com',
        phone: '(404) 555-0100',
        description: 'William J. Degenhart is an experienced attorney specializing in personal injury cases with a focus on helping clients receive the compensation they deserve.'
      },
      { 
        id: 2, 
        firstName: 'William', 
        lastName: 'Rosario', 
        location: 'Florida', 
        image: 'William_Rosario_1000x1000-min.avif',
        email: 'wrosario@forthepeople.com',
        phone: '(407) 555-0101',
        description: 'William Rosario brings years of expertise in personal injury law, dedicated to fighting for justice on behalf of his clients.'
      },
      { 
        id: 3, 
        firstName: 'Wise', 
        lastName: 'Rudolph', 
        location: 'Tennessee', 
        image: 'Wise_Rudolph_1000x1000_up2.avif',
        email: 'wrudolph@forthepeople.com',
        phone: '(615) 555-0102',
        description: 'Wise Rudolph is committed to providing exceptional legal representation and personalized service to each client.'
      },
      { 
        id: 4, 
        firstName: 'Yair', 
        lastName: 'Bengio', 
        location: 'Florida', 
        image: 'Yair_Shalom_Bengio_1000x1000.avif',
        email: 'ybengio@forthepeople.com',
        phone: '(305) 555-0103',
        description: 'Yair Bengio specializes in complex personal injury cases with a track record of successful outcomes for his clients.'
      },
      { 
        id: 5, 
        firstName: 'Yalkin', 
        lastName: 'Gencel', 
        location: 'Florida', 
        image: 'Yalkin_Gencel_1000x1000-min.avif',
        email: 'ygencel@forthepeople.com',
        phone: '(954) 555-0104',
        description: 'Yalkin Gencel is a dedicated attorney focused on achieving the best possible results for injury victims.'
      },
      { 
        id: 6, 
        firstName: 'Yechezkel', 
        lastName: 'Rodal', 
        nickname: 'Chezky', 
        location: 'Florida', 
        image: 'Chezky_Rodal_992x992 (1).avif',
        email: 'crodal@forthepeople.com',
        phone: '(561) 555-0105',
        description: 'Chezky Rodal brings extensive experience in personal injury law and is committed to fighting for his clients\' rights.'
      },
      { 
        id: 7, 
        firstName: 'Zach', 
        lastName: 'White', 
        location: 'Washington D.C.', 
        image: 'Zach_White_1000x1000-min.avif',
        email: 'zwhite@forthepeople.com',
        phone: '(202) 555-0106',
        description: 'Zach White is an accomplished attorney with expertise in personal injury cases and a passion for client advocacy.'
      },
      { 
        id: 8, 
        firstName: 'Zachary', 
        lastName: 'Baker', 
        location: 'Florida', 
        image: 'Zachary_Baker_1000x1000.avif',
        email: 'zbaker@forthepeople.com',
        phone: '(727) 555-0107',
        description: 'Zachary Baker provides compassionate and effective legal representation for injury victims throughout Florida.'
      },
      { 
        id: 9, 
        firstName: 'Zachary', 
        lastName: 'Chesser', 
        location: 'Kentucky', 
        image: 'Zachary_Chesser_1000x1000-min.avif',
        email: 'zchesser@forthepeople.com',
        phone: '(502) 555-0108',
        description: 'Zachary Chesser is dedicated to helping clients navigate the legal process and secure fair compensation.'
      },
      { 
        id: 10, 
        firstName: 'Zachary', 
        lastName: 'Hudson', 
        location: 'Florida', 
        image: '9411_Hudson_Zachary_1000x1000.avif',
        email: 'zhudson@forthepeople.com',
        phone: '(352) 555-0109',
        description: 'Zachary Hudson brings a wealth of experience in personal injury law and a commitment to client success.'
      },
      { 
        id: 11, 
        firstName: 'Zachary', 
        lastName: 'Lodmer', 
        location: 'California', 
        image: 'Zachary_Lodmer_1000x1000.avif',
        email: 'zlodmer@forthepeople.com',
        phone: '(213) 555-0110',
        description: 'Zachary Lodmer specializes in personal injury cases with a focus on achieving maximum compensation for clients.'
      },
      { 
        id: 12, 
        firstName: 'Zachary', 
        lastName: 'O\'Neill', 
        location: 'Florida', 
        image: 'Zachary_O.avif',
        email: 'zoneill@forthepeople.com',
        phone: '(904) 555-0111',
        description: 'Zachary O\'Neill is committed to providing exceptional legal services and fighting for client rights.'
      },
      { 
        id: 13, 
        firstName: 'Zilya', 
        lastName: 'Ruga', 
        location: 'Florida', 
        image: 'Zilya_Ruga_1000x1000-min.avif',
        email: 'zruga@forthepeople.com',
        phone: '(786) 555-0112',
        description: 'Zilya Ruga brings dedication and expertise to every case, ensuring clients receive the representation they deserve.'
      },
    ];
    
    if (Array.isArray(config.attorneys) && config.attorneys.length > 0) {
      return config.attorneys;
    }
    return sampleAttorneys;
  }, [config.attorneys]);

  // Filter and sort attorneys
  const filteredAndSortedAttorneys = useMemo(() => {
    let filtered = [...allAttorneys];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(attorney => {
        const fullName = `${attorney.firstName} ${attorney.lastName}`.toLowerCase();
        const nickname = attorney.nickname ? attorney.nickname.toLowerCase() : '';
        return fullName.includes(query) || nickname.includes(query);
      });
    }

    if (practiceArea) {
      filtered = filtered.filter(attorney => 
        attorney.practiceAreas && attorney.practiceAreas.includes(practiceArea)
      );
    }

    if (state) {
      filtered = filtered.filter(attorney => 
        attorney.location && attorney.location.includes(state)
      );
    }

    if (city) {
      filtered = filtered.filter(attorney => 
        attorney.city && attorney.city.toLowerCase() === city.toLowerCase()
      );
    }

    filtered.sort((a, b) => {
      if (sortBy === 'firstName') {
        return a.firstName.localeCompare(b.firstName);
      } else if (sortBy === 'lastName') {
        return a.lastName.localeCompare(b.lastName);
      } else if (sortBy === 'state') {
        return (a.location || '').localeCompare(b.location || '');
      } else if (sortBy === 'city') {
        return (a.city || '').localeCompare(b.city || '');
      }
      return 0;
    });

    return filtered;
  }, [allAttorneys, searchQuery, practiceArea, state, city, sortBy]);

  // Get unique cities for selected state
  const uniqueCities = useMemo(() => {
    const cities = new Set();
    allAttorneys.forEach(attorney => {
      if (attorney.city && (!state || attorney.location?.includes(state))) {
        cities.add(attorney.city);
      }
    });
    return Array.from(cities).sort();
  }, [allAttorneys, state]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedAttorneys.length / attorneysPerPage);
  const startIndex = (currentPage - 1) * attorneysPerPage;
  const paginatedAttorneys = filteredAndSortedAttorneys.slice(startIndex, startIndex + attorneysPerPage);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (practiceAreaRef.current && !practiceAreaRef.current.contains(event.target)) {
        setPracticeAreaOpen(false);
      }
      if (stateRef.current && !stateRef.current.contains(event.target)) {
        setStateOpen(false);
      }
      if (cityRef.current && !cityRef.current.contains(event.target)) {
        setCityOpen(false);
      }
      if (sortRef.current && !sortRef.current.contains(event.target)) {
        setSortOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getPageNumbers = () => {
    const pages = [];
    
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 3; i++) pages.push(i);
        pages.push('...');
        pages.push(totalPages - 1);
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push(2);
        pages.push('...');
        for (let i = totalPages - 2; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
        pages.push('...');
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  const getPracticeAreaLabel = () => practiceArea || 'Practice Area';
  const getStateLabel = () => state || 'State';
  const getCityLabel = () => city || 'City';
  const getSortLabel = () => {
    if (sortBy === 'firstName') return 'First Name';
    if (sortBy === 'lastName') return 'Last Name';
    if (sortBy === 'state') return 'State';
    if (sortBy === 'city') return 'City';
    return 'First Name';
  };

  const formatPracticeAreaValue = (area) => area.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '-amp-');

  return (
    <div id="citrus-attorney-index" className="bg-white min-h-screen">
      <div className="application">
        {/* Attorney Index Header */}
        <div className="attorney-index-header pt-8" style={{ overflow: 'visible' }}>
          <div className="wrapper max-w-7xl mx-auto px-4" style={{ overflow: 'visible' }}>
            {/* Search Input */}
            <div className="new-search-input-wrapper relative mb-4">
              <label htmlFor="name-filter" className="sr-only">Find a lawyer by name</label>
              <div className="search-icon absolute left-4 top-1/2 transform -translate-y-1/2 pointer-events-none z-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M19.7753 18.6511L16.8091 15.7067C17.9605 14.2699 18.5181 12.4464 18.3672 10.6109C18.2164 8.77535 17.3685 7.06745 15.998 5.83834C14.6275 4.60923 12.8385 3.95232 10.9989 4.0027C9.15928 4.05307 7.40887 4.8069 6.10758 6.10918C4.80629 7.41146 4.05303 9.1632 4.0027 11.0042C3.95236 12.8452 4.60876 14.6356 5.83694 16.0071C7.06512 17.3787 8.77172 18.2272 10.6058 18.3781C12.4399 18.5291 14.2621 17.9711 15.6978 16.8188L18.64 19.7633C18.7143 19.8383 18.8028 19.8978 18.9002 19.9385C18.9976 19.9791 19.1021 20 19.2077 20C19.3132 20 19.4177 19.9791 19.5152 19.9385C19.6126 19.8978 19.701 19.8383 19.7753 19.7633C19.9194 19.6141 20 19.4147 20 19.2072C20 18.9997 19.9194 18.8003 19.7753 18.6511ZM11.2124 16.8188C10.1055 16.8188 9.02346 16.4903 8.10309 15.8749C7.18272 15.2595 6.46538 14.3847 6.04178 13.3613C5.61818 12.3379 5.50735 11.2117 5.7233 10.1252C5.93925 9.03875 6.47228 8.04076 7.25499 7.25746C8.0377 6.47416 9.03493 5.94072 10.1206 5.72461C11.2062 5.50849 12.3315 5.61941 13.3542 6.04333C14.3768 6.46725 15.2509 7.18514 15.8659 8.1062C16.4809 9.02727 16.8091 10.1102 16.8091 11.2179C16.8091 12.7034 16.2195 14.128 15.1699 15.1784C14.1203 16.2287 12.6968 16.8188 11.2124 16.8188Z" fill="#020202"></path>
                </svg>
              </div>
              <input
                id="name-filter"
                name="name-filter"
                placeholder="Find a lawyer by name"
                maxLength="30"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                aria-label="Find a lawyer by name"
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Attorney Filters */}
            <div className="attorney-filters attorney-filter-select relative" style={{ zIndex: 1 }}>
              <ul className="filters flex flex-wrap gap-4">
                {/* Practice Area Filter */}
                <li className="practice-area-filter" ref={practiceAreaRef}>
                  <div className="filter-row citrus-select-list filter-practice-areas relative">
                    <button
                      type="button"
                      onClick={() => {
                        setPracticeAreaOpen(!practiceAreaOpen);
                        setStateOpen(false);
                        setCityOpen(false);
                        setSortOpen(false);
                      }}
                      className="selected-item flex items-center justify-between w-full px-4 py-3 border border-gray-300 rounded-lg bg-white hover:border-gray-400 transition"
                      aria-label="Filter by practice area"
                      aria-expanded={practiceAreaOpen}
                    >
                      <span>{getPracticeAreaLabel()}</span>
                      <svg className={`w-4 h-4 transition-transform ${practiceAreaOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {practiceAreaOpen && (
                      <ul className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
                        <li>
                          <button
                            type="button"
                            onClick={() => {
                              setPracticeArea('');
                              setPracticeAreaOpen(false);
                              setCurrentPage(1);
                            }}
                            className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${!practiceArea ? 'bg-blue-50 font-semibold' : ''}`}
                          >
                            Practice Area
                          </button>
                        </li>
                        {practiceAreas.map((area) => {
                          const value = formatPracticeAreaValue(area);
                          return (
                            <li key={value}>
                              <button
                                type="button"
                                onClick={() => {
                                  setPracticeArea(area);
                                  setPracticeAreaOpen(false);
                                  setCurrentPage(1);
                                }}
                                className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${practiceArea === area ? 'bg-blue-50 font-semibold' : ''}`}
                              >
                                {area}
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                </li>

                {/* State Filter */}
                <li className="state-filter" ref={stateRef}>
                  <div className="filter-row citrus-select-list filter-state relative">
                    <button
                      type="button"
                      onClick={() => {
                        setStateOpen(!stateOpen);
                        setPracticeAreaOpen(false);
                        setCityOpen(false);
                        setSortOpen(false);
                      }}
                      className="selected-item flex items-center justify-between w-full px-4 py-3 border border-gray-300 rounded-lg bg-white hover:border-gray-400 transition"
                      aria-label="Filter by state"
                      aria-expanded={stateOpen}
                    >
                      <span>{getStateLabel()}</span>
                      <svg className={`w-4 h-4 transition-transform ${stateOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {stateOpen && (
                      <div className="absolute top-full left-0 mt-1 z-[100]" style={{ maxHeight: '400px', minWidth: '200px', width: 'max-content' }}>
                        <ul className="bg-white border border-gray-300 rounded-lg shadow-xl overflow-y-auto overscroll-contain" style={{ maxHeight: '400px', minWidth: '200px' }}>
                          <li className="sticky top-0 bg-white z-10 border-b border-gray-200 shadow-sm">
                            <button
                              type="button"
                              onClick={() => {
                                setState('');
                                setCity('');
                                setStateOpen(false);
                                setCurrentPage(1);
                              }}
                              className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${!state ? 'bg-blue-50 font-semibold' : ''}`}
                            >
                              State
                            </button>
                          </li>
                          {allStates.map((stateName) => (
                            <li key={stateName}>
                              <button
                                type="button"
                                onClick={() => {
                                  setState(stateName);
                                  setCity('');
                                  setStateOpen(false);
                                  setCurrentPage(1);
                                }}
                                className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${state === stateName ? 'bg-blue-50 font-semibold' : ''}`}
                              >
                                {stateName}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </li>

                {/* City Filter */}
                {/* <li className={`city-filter ${!state ? 'opacity-50' : ''}`} ref={cityRef}>
                  <div className="filter-row citrus-select-list filter-city relative">
                    <button
                      type="button"
                      onClick={() => {
                        if (state) {
                          setCityOpen(!cityOpen);
                          setPracticeAreaOpen(false);
                          setStateOpen(false);
                          setSortOpen(false);
                        }
                      }}
                      disabled={!state}
                      className="selected-item flex items-center justify-between w-full px-4 py-3 border border-gray-300 rounded-lg bg-white hover:border-gray-400 transition disabled:cursor-not-allowed"
                      aria-label="Filter by city"
                      aria-expanded={cityOpen}
                    >
                      <span>{getCityLabel()}</span>
                      <svg className={`w-4 h-4 transition-transform ${cityOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {cityOpen && state && (
                      <ul className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
                        <li>
                          <button
                            type="button"
                            onClick={() => {
                              setCity('');
                              setCityOpen(false);
                              setCurrentPage(1);
                            }}
                            className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${!city ? 'bg-blue-50 font-semibold' : ''}`}
                          >
                            City
                          </button>
                        </li>
                        {uniqueCities.map((cityName) => (
                          <li key={cityName}>
                            <button
                              type="button"
                              onClick={() => {
                                setCity(cityName);
                                setCityOpen(false);
                                setCurrentPage(1);
                              }}
                              className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${city === cityName ? 'bg-blue-50 font-semibold' : ''}`}
                            >
                              {cityName}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li> */}
              </ul>
            </div>
          </div>

          {/* Attorney Table Top */}
          <div className="attorney-table-top max-w-7xl mx-auto">
            <div className="scroll-target" style={{ height: 0 }}></div>
            <div className="attorney-active-filters flex items-center justify-between mb-6 px-4">
              <p className="h5 mt-2 total-count-attorneys text-lg font-bold text-gray-900">
                {filteredAndSortedAttorneys.length}+ Attorneys
              </p>

            </div>
          </div>
        </div>

        {/* Attorney Index Main */}
        <div className="attorney-index-main max-w-7xl mx-auto">
          <div className="attorney-listing">
            <div className="paginated-results">
              <div className="attorney-results-box-wrapper attorney-results-box-wrapper--grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 mb-8">
                {paginatedAttorneys.map((attorney) => (
                  <button
                    key={attorney.id}
                    onClick={() => {
                      setSelectedAttorney(attorney);
                      setIsModalOpen(true);
                    }}
                    className="attorney-box bg-white rounded-lg shadow-sm ring-1 ring-gray-200 overflow-hidden hover:shadow-lg transition group text-left w-full"
                  >
                    <div className="image-wrapper aspect-square bg-gray-100 overflow-hidden">
                      <img
                        src={attorney.image ? `/${attorney.image}` : '/placeholder-attorney.jpg'}
                        alt={`${attorney.firstName} ${attorney.nickname ? `"${attorney.nickname}"` : ''} ${attorney.lastName}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="attorney-info p-4">
                      <div className="inner-content">
                        <p className="attorney-name text-lg font-bold text-gray-900 mb-1">
                          {attorney.firstName} {attorney.nickname && `"${attorney.nickname}"`} {attorney.lastName}
                        </p>
                        <div className="office-location body-sm text-sm text-gray-600">
                          <span>{attorney.location}</span>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <ul className="pagination flex items-center justify-center gap-2 px-4 mb-12">
                  <li className="previous">
                    <button
                      type="button"
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className={`pagination__link prev px-4 py-2 rounded-lg transition ${
                        currentPage === 1
                          ? 'bg-gray-200 text-gray-400 cursor-not-allowed opacity-50'
                          : 'bg-white text-gray-900 hover:bg-gray-100 border border-gray-300'
                      }`}
                      aria-label="Previous page"
                      aria-disabled={currentPage === 1}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                  </li>

                  {getPageNumbers().map((page, index) => (
                    <li key={index} className={currentPage === page ? 'pagination__link--active' : ''}>
                      {page === '...' ? (
                        <span className="px-2 text-gray-500">...</span>
                      ) : (
                        <button
                          type="button"
                          onClick={() => handlePageChange(page)}
                          className={`px-4 py-2 rounded-lg font-semibold transition ${
                            currentPage === page
                              ? 'bg-brand-primary text-white'
                              : 'bg-white text-gray-900 hover:bg-gray-100 border border-gray-300'
                          }`}
                          aria-label={currentPage === page ? `Page ${page} is your current page` : `Page ${page}`}
                          aria-current={currentPage === page ? 'page' : undefined}
                        >
                          {page}
                        </button>
                      )}
                    </li>
                  ))}

                  <li className={`next ${currentPage === totalPages ? 'pagination__link--disabled' : ''}`}>
                    <button
                      type="button"
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className={`pagination__link next px-4 py-2 rounded-lg transition ${
                        currentPage === totalPages
                          ? 'bg-gray-200 text-gray-400 cursor-not-allowed opacity-50'
                          : 'bg-white text-gray-900 hover:bg-gray-100 border border-gray-300'
                      }`}
                      aria-label="Next page"
                      aria-disabled={currentPage === totalPages}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 1,000 Attorneys. 1 Mission. Section */}
      <MissionVideoSection
        title={config.mission?.title}
        description={config.mission?.description}
      />


      <FeeFreeFormSection />
      
      {/* Attorney Modal */}
      <AttorneyModal
        attorney={selectedAttorney}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedAttorney(null);
        }}
      />
    </div>
  );
}
