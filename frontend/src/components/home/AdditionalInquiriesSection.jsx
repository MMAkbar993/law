import React from 'react';
import { Link } from 'react-router-dom';

export default function AdditionalInquiriesSection() {
  const inquiries = [
    {
      title: 'Find a Location Near You',
      description: "Need local support? We've got offices nationwide to help you wherever you are.",
      link: '/locations',
    },
    {
      title: 'Case Process',
      description: 'Curious about what happens next? Learn how we handle your case from start to finish.',
      link: '/our-results',
    },
    {
      title: 'Practice Areas',
      description: 'Explore the cases we handle—from auto accidents to workplace injuries and beyond.',
      link: '/practice-areas',
    },
    {
      title: 'Careers',
      description: 'Ready to make a difference? Join our team and fight for the people.',
      link: '/contact',
    },
    {
      title: 'Refer a Case',
      description: 'Partner with Morgan & Morgan and help your client get the results they deserve.',
      link: '/contact',
    },
    {
      title: 'Media Inquiries',
      description: 'For press and media inquiries, email us!',
      link: '/contact',
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Left Column - Heading */}
          <div className="lg:w-1/3">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Additional Inquiries
            </h2>
            <p className="text-lg text-gray-600">
              Here are some helpful links.
            </p>
          </div>

          {/* Right Column - Inquiry Items */}
          <div className="lg:w-2/3 space-y-0">
            {inquiries.map((inquiry, index) => (
              <Link
                key={index}
                to={inquiry.link}
                className="block border-b border-gray-200 last:border-b-0 py-6 hover:bg-gray-50 transition-colors group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-accent transition-colors">
                      {inquiry.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {inquiry.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0 mt-1">
                    <svg
                      className="w-6 h-6 text-gray-400 group-hover:text-brand-accent transition-colors"
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
        </div>
      </div>
    </section>
  );
}
