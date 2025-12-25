import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Lashondra',
    quote: "When it came to negotiating, they didn't just settle for anything. They definitely went to the bat for me.",
    rating: 5,
    videoThumbnail: '/20.avif',
    thumbnail: '/20.avif',
  },
  {
    id: 2,
    name: 'Ray',
    quote: "The team at Morgan & Morgan made sure I understood every step of the process. They were professional, caring, and got me the results I deserved.",
    rating: 5,
    videoThumbnail: '/20.avif',
    thumbnail: '/20.avif',
  },
  {
    id: 3,
    name: 'Sean',
    quote: "I couldn't have asked for better representation. They fought hard for my case and never gave up. Highly recommended!",
    rating: 5,
    videoThumbnail: '/20.avif',
    thumbnail: '/20.avif',
  },
];

const INQUIRY_LINKS = [
  {
    title: 'Find a Location Near You',
    description: 'Need local support? We\'ve got offices nationwide to help you wherever you are.',
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
    link: '#',
  },
  {
    title: 'Refer a Case',
    description: 'Partner with Morgan & Morgan and help your client get the results they deserve.',
    link: '#',
  },
  {
    title: 'Media Inquiries',
    description: 'For press and media inquiries, email us!',
    link: '#',
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: rating }, (_, index) => (
        <svg
          key={index}
          className="w-5 h-5 text-blue-600 fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const currentTestimonial = TESTIMONIALS[activeTestimonial];

  return (
    <div className="min-h-screen bg-white">
      {/* In Their Words Section */}
      <section className="px-4 py-16 lg:py-24">
        <div className="container mx-auto max-w-7xl">
          {/* Title and Subtitle */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4">
              In Their Words
            </h1>
            <p className="text-lg md:text-xl text-gray-700">
              Real clients share their experience.
            </p>
          </div>

          {/* Main Testimonial and Video Block */}
          <div className="mb-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Left Side - Testimonial */}
                <div className="bg-white p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                  <div className="relative">
                    {/* Quote Mark */}
                    <div className="text-7xl md:text-8xl text-blue-600 font-serif leading-none mb-6">
                      "
                    </div>
                    {/* Quote Text */}
                    <p className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-8 leading-relaxed">
                      {currentTestimonial.quote}
                    </p>
                    {/* Author and Rating */}
                    <div className="flex items-center gap-4">
                      <span className="text-lg md:text-xl font-semibold text-gray-900">
                        {currentTestimonial.name}
                      </span>
                      <StarRating rating={currentTestimonial.rating} />
                    </div>
                  </div>
                </div>

                {/* Right Side - Video Player */}
                <div className="bg-blue-50 relative aspect-[4/3] lg:aspect-square">
                  <img
                    src={currentTestimonial.videoThumbnail}
                    alt={`${currentTestimonial.name} testimonial video`}
                    className="w-full h-full object-cover"
                  />
                  {/* Play Button Overlay */}
                  <button
                    type="button"
                    className="absolute inset-0 flex items-center justify-center bg-black/10 hover:bg-black/20 transition"
                    aria-label={`Play ${currentTestimonial.name}'s testimonial video`}
                  >
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
                      <svg
                        className="w-10 h-10 md:w-12 md:h-12 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center gap-4 mb-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <button
                key={testimonial.id}
                type="button"
                onClick={() => setActiveTestimonial(index)}
                className={`relative rounded-xl overflow-hidden transition-all ${
                  activeTestimonial === index
                    ? 'ring-4 ring-blue-600 scale-105'
                    : 'ring-2 ring-gray-300 hover:ring-gray-400 opacity-75 hover:opacity-100'
                }`}
                aria-label={`View ${testimonial.name}'s testimonial`}
              >
                <div className="relative w-32 md:w-40 aspect-[3/4]">
                  <img
                    src={testimonial.thumbnail}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Name Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900 to-transparent p-3">
                    <span className="text-white font-semibold text-sm md:text-base">
                      {testimonial.name}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Disclaimer */}
          <p className="text-sm text-gray-600 text-center max-w-3xl mx-auto">
            Results may vary depending on your particular facts and legal circumstances. Based on select nationwide reviews.
          </p>
        </div>
      </section>

      {/* Additional Inquiries Section */}
      <section className="bg-blue-50 px-4 py-16 lg:py-24">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Left Side - Title and Subtitle */}
            <div className="lg:col-span-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
                Additional Inquiries
              </h2>
              <p className="text-lg md:text-xl text-gray-700">
                Here are some helpful links.
              </p>
            </div>

            {/* Right Side - Inquiry Links */}
            <div className="lg:col-span-8">
              <div className="space-y-0">
                {INQUIRY_LINKS.map((inquiry, index) => (
                  <React.Fragment key={inquiry.title}>
                    {index > 0 && (
                      <div className="border-t border-gray-300 my-0" />
                    )}
                    <Link
                      to={inquiry.link}
                      className="block py-6 hover:bg-white/50 transition rounded-lg px-4 -mx-4 group"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                            {inquiry.title}
                          </h3>
                          <p className="text-gray-700">
                            {inquiry.description}
                          </p>
                        </div>
                        <svg
                          className="w-6 h-6 text-gray-400 group-hover:text-blue-600 transition flex-shrink-0 mt-1"
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
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

