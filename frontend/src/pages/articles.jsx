import React from 'react';
import { Link } from 'react-router-dom';

const CATEGORY_SECTIONS = [
  {
    id: 'accidents-incidents',
    title: 'Accidents & Incidents',
    featured: {
      image: 'shutterstock_2278839387.jpg.avif',
      title: 'Daylight Saving Time Accidents: A Hidden Danger',
      description: 'Daylight Saving Time disrupts sleep schedules and alters routines, leading to potential dangers on the road. Learn how this time change can impact driver alertness and increase accident risks.',
    },
    subArticles: [
      {
        image: 'shutterstock_365176154.jpg.avif',
        title: 'FMLA Leave: Your Rights, Legal Protections, and How Morgan & Morgan Can Help',
      },
      {
        image: 'shutterstock_2455951325.jpg.avif',
        title: 'Illegally Parked Car Accidents: Who\'s Liable and What You Need to Know',
      },
      {
        image: 'shutterstock_2486702355.jpg.avif',
        title: 'What to Do if Your Chest Hurts After a Car Accident',
      },
    ],
  },
  {
    id: 'injury-prevention',
    title: 'Injury Prevention',
    featured: {
      image: 'shutterstock_2190588221.jpg.avif',
      title: 'Scrolling Smart: Morgan & Morgan\'s Guide to Social Media Safety',
      description: 'Common social media terms like like, share, repost, tagging, and follow are part of our daily lives. However, issues like hacking, leaks, stalking, and mental health concerns are real threats. Learn how to protect yourself and your family online.',
    },
    subArticles: [
      {
        image: 'Data Breach.jpg.avif',
        title: 'How to Protect Yourself From Tax Refund Scams',
      },
    ],
  },
  {
    id: 'insurance',
    title: 'Insurance',
    featured: {
      image: 'shutterstock_2280574061.jpg.avif',
      title: 'Exploring Homeowners Insurance Costs in Atlanta: What You Need to Know',
      description: 'Navigating homeowners insurance in Atlanta can be challenging. The city\'s rates are often higher compared to state and national averages. Understanding these costs and your coverage options is essential for protecting your investment.',
    },
    subArticles: [
      {
        image: 'shutterstock_2475266223.jpg.avif',
        title: 'How to Appeal a Car Insurance Decision in Miami',
      },
      {
        image: 'shutterstock_153986042.jpg.avif',
        title: 'Understanding Personal Injury Protection (PIP)',
      },
      {
        image: 'Business-Interruption-Vandalism-Lawsuit-compressor.jpg.avif',
        title: 'How Can Vandalism Impact My Business Interruption and Insurance Claims',
      },
    ],
  },
  {
    id: 'newsroom',
    title: 'Newsroom',
    featured: {
      image: 'Books with apple_horizonal (1).png.avif',
      title: 'Standing Up to Bullying: Awareness, Prevention, and the Fight for Stronger Laws',
      description: 'Children facing taunts, threats, and exclusion need our support. October is National Bullying Prevention Month, a time to raise awareness and advocate for stronger protections against bullying in schools and communities.',
    },
    subArticles: [
      {
        image: 'BOYS_GIRLS_60_v3_101024 .00_00_13_11.Still004.jpg.avif',
        title: 'Be Their Hero: Safe Driving Starts With You',
      },
      {
        image: 'R+R Blog Post image_3.21.25-02.png.avif',
        title: 'The Week in Recalls: Week of March 21, 2025',
        isRecall: true,
      },
      {
        image: 'R+R Blog Post image_3.7.25-02.png.avif',
        title: 'The Week in Recalls: Week of March 7, 2025',
        isRecall: true,
      },
    ],
  },
  {
    id: 'case-process',
    title: 'The Case Process',
    featured: {
      image: 'shutterstock_2479055231.jpg.avif',
      title: '3 Reasons Why You Need America\'s Largest Injury Law Firm to Take on a Big Company',
      description: 'Facing a legal battle against a major corporation? Whether it\'s a personal injury case, workplace dispute, or other legal matter, having the right representation makes all the difference. Learn why size, resources, and experience matter.',
    },
    subArticles: [
      {
        image: 'shutterstock_2191499763.jpg.avif',
        title: 'Hiring Your First Lawyer: A Guide for First-Time Legal Representation',
      },
      {
        image: 'shutterstock_2555954279.jpg.avif',
        title: 'How Social Media Can Affect Your Personal Injury Lawsuit',
      },
    ],
    additionalText: 'Average Value of a Bodily Injury Claim',
  },
];

function CategorySection({ section }) {
  return (
    <section className="mb-16">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          {section.title}
        </h2>
        {/* <Link
          to={`/articles/${section.id}`}
          className="text-blue-600 hover:text-blue-700 font-semibold"
        >
          View All
        </Link> */}
      </div>

      {/* Featured Article */}
      <div className="mb-8">
        <article className="grid md:grid-cols-2 gap-6">
          <div>
            <img
              src={section.featured.image}
              alt={section.featured.title}
              className="w-full h-64 md:h-80 object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              <Link to={`/articles/${section.id}/${section.featured.title.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-blue-600 transition">
                {section.featured.title}
              </Link>
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {section.featured.description}
            </p>
          </div>
        </article>
      </div>

      {/* Sub-articles */}
      <div className={`grid gap-6 ${
        section.subArticles.length === 1 
          ? 'md:grid-cols-1' 
          : section.subArticles.length === 2 
          ? 'md:grid-cols-2' 
          : 'md:grid-cols-3'
      }`}>
        {section.subArticles.map((article, index) => (
          <article key={index}>
            <div className="mb-4">
              {article.isRecall ? (
                <div className="w-full h-48 bg-blue-600 rounded-lg flex flex-col items-center justify-center text-white">
                  <div className="text-2xl font-bold mb-2">RECALL RECAP</div>
                  <div className="text-lg">
                    {article.title.includes('March 21') ? 'March 21st, 2025' : 'March 7th, 2025'}
                  </div>
                </div>
              ) : (
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
              )}
            </div>
            <h4 className="text-xl font-bold text-gray-900">
              <Link to={`/articles/${section.id}/${article.title.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-blue-600 transition">
                {article.title}
              </Link>
            </h4>
          </article>
        ))}
      </div>

      {/* Additional Text (for Case Process section) */}
      {section.additionalText && (
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-gray-600 text-center">
            {section.additionalText}
          </p>
        </div>
      )}
    </section>
  );
}

export default function Articles() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto max-w-7xl px-4 py-8 md:py-12">
        {CATEGORY_SECTIONS.map((section) => (
          <CategorySection key={section.id} section={section} />
        ))}
      </div>
    </div>
  );
}

