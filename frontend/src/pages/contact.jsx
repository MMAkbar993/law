import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSubmission } from '../hooks/useSubmission';
import Testimonials from './testimonials';
import FeeFreeFormSection from '../components/home/FeeFreeFormSection';

export default function Contact() {
  const { t, i18n } = useTranslation();
  const { submit, status, resetStatus } = useSubmission();
  
  const initialFormState = {
    fullName: '',
    phone: '',
    zipCode: '',
    email: '',
    caseType: '',
    description: '',
    consent: false
  };
  
  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    if (status.state !== 'idle') {
      resetStatus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submit({
        ...formData,
        locale: i18n.language,
      });
      setFormData(initialFormState);
    } catch {
      // handled by hook
    }
  };

  const caseTypes = t('feeFree.caseTypes', { returnObjects: true });
  const phoneNumber = t('common.phone');

  return (
    <div className="min-h-screen bg-white">
      {/* Contact Us Your Way Section */}
      <section className="px-4 py-16 lg:py-24">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Contact Us Your Way */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
                {t('contact.title')}
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                {t('contact.description')}
              </p>

              {/* Attorney Image */}
              <div className="mb-6">
                <img
                  src="female-attorney-at-desk.avif"
                  alt="Morgan & Morgan attorney"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>

              {/* Contact Info Box */}
              <div className="bg-blue-50 rounded-xl p-6 md:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <svg
                    className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div>
                    <p className="text-lg font-semibold text-gray-900 mb-2">
                      {t('contact.here247')}
                    </p>
                    <p className="text-base text-gray-700">
                      {t('contact.formDescription', { phone: phoneNumber })}
                    </p>
                  </div>
                </div>
              </div>

              {/* Disclaimer */}
              {/* <p className="text-xs text-gray-600 mt-6">
                {t('contact.attorneyDisclaimer')}{' '}
                <Link to="/attorneys" className="text-blue-600 hover:text-blue-700 underline">
                  {t('contact.attorneyPage')}
                </Link>
                .
              </p> */}
            </div>

            {/* Right Side - It's Free to Get Started Form */}
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-xl border border-gray-200">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t('contact.formTitle')}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name */}
                <input
                  type="text"
                  name="fullName"
                  placeholder={t('common.form.fullName')}
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />

                {/* Phone Number and Zip Code */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <input
                    type="tel"
                    name="phone"
                    placeholder={t('common.form.phone')}
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                  />
                  <input
                    type="text"
                    name="zipCode"
                    placeholder={t('common.form.zip')}
                    value={formData.zipCode}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                  />
                </div>

                {/* Email */}
                <input
                  type="email"
                  name="email"
                  placeholder={t('common.form.email')}
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />

                {/* Case Type Dropdown */}
                <select
                  name="caseType"
                  value={formData.caseType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                >
                  <option value="">{t('common.form.caseTypePlaceholder')}</option>
                  {Array.isArray(caseTypes) && caseTypes.map(({ value, label }) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>

                {/* Description Textarea */}
                <textarea
                  name="description"
                  placeholder={t('common.form.description')}
                  value={formData.description}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                  required
                />

                {/* Consent Checkbox */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="consent"
                    id="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    className="mt-1 w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                    required
                  />
                  <label htmlFor="consent" className="text-sm text-gray-700">
                    {t('common.form.consent')}
                  </label>
                </div>

                {/* Terms & Privacy */}
                <p className="text-xs text-gray-500">
                  {t('common.form.terms')}
                </p>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 rounded-lg transition-colors text-lg disabled:cursor-not-allowed disabled:opacity-70"
                  disabled={status.state === 'loading'}
                >
                  {status.state === 'loading' ? t('common.buttons.submitting') : 'Start your claim'}
                </button>

                {/* Status Messages */}
                <div className="min-h-[1.5rem] text-sm" aria-live="polite">
                  {status.state === 'success' && (
                    <div className="space-y-1 text-green-700">
                      <p>{t('common.messages.submissionSuccess')}</p>
                      {status.location && (
                        <p>
                          {t('common.messages.locationGuess', {
                            city: status.location.city || '—',
                            region: status.location.region || '—',
                            country: status.location.country || '—',
                            source: status.location.source || 'lookup',
                          })}
                        </p>
                      )}
                    </div>
                  )}
                  {status.state === 'error' && (
                    <p className="text-red-600">
                      {status.message || t('common.messages.submissionError')}
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Why Morgan & Morgan Section */}
      <section className="bg-gray-50 px-4 py-16 lg:py-24">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              {t('contact.whyTitle')}
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              {t('contact.whyDescription')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Column 1: Fighting for More */}
            <div className="text-center lg:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                {t('contact.fightingForMore')}
              </h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                {t('contact.fightingDescription')}
              </p>
            </div>

            {/* Column 2: The Fee is Free, Unless We Win */}
            <div className="text-center lg:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                {t('contact.feeFree')}
              </h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                {t('contact.feeDescription')}
              </p>
            </div>

            {/* Column 3: Local Care + National Power */}
            <div className="text-center lg:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                {t('contact.localCare')}
              </h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                {t('contact.localDescription')}
              </p>
              <Link
                to="/locations"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
              >
                <span>{t('contact.findOffice')}</span>
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* <Testimonials /> */}
      <FeeFreeFormSection />
    </div>
  );
}

