import React from 'react';

export default function AttorneyModal({ attorney, isOpen, onClose }) {
  if (!isOpen || !attorney) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">
            {attorney.firstName} {attorney.nickname && `"${attorney.nickname}"`} {attorney.lastName}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-6">
          {/* Image and Basic Info */}
          <div className="flex flex-col md:flex-row gap-6 mb-6">
            {attorney.image && (
              <div className="flex-shrink-0">
                <img
                  src={`/${attorney.image}`}
                  alt={`${attorney.firstName} ${attorney.lastName}`}
                  className="w-48 h-48 object-cover rounded-lg"
                />
              </div>
            )}
            <div className="flex-1">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Location</h3>
                <p className="text-gray-900">{attorney.location || 'Not specified'}</p>
                {attorney.city && (
                  <p className="text-gray-600">{attorney.city}</p>
                )}
              </div>
              
              {attorney.practiceAreas && attorney.practiceAreas.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">Practice Areas</h3>
                  <div className="flex flex-wrap gap-2">
                    {attorney.practiceAreas.slice(0, 5).map((area, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Description */}
          {attorney.description && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">About</h3>
              <p className="text-gray-700 leading-relaxed">{attorney.description}</p>
            </div>
          )}

          {/* Contact Information */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Contact Information</h3>
            <div className="space-y-3">
              {attorney.email && (
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a
                    href={`mailto:${attorney.email}`}
                    className="text-blue-600 hover:text-blue-700 hover:underline"
                  >
                    {attorney.email}
                  </a>
                </div>
              )}
              {attorney.phone && (
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a
                    href={`tel:${attorney.phone.replace(/[^\d]/g, '')}`}
                    className="text-blue-600 hover:text-blue-700 hover:underline"
                  >
                    {attorney.phone}
                  </a>
                </div>
              )}
              {!attorney.email && !attorney.phone && (
                <p className="text-gray-500 italic">Contact information not available</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

