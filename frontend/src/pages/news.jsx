import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { API_ROUTES } from '../config/api';
import Articles from './articles';
import FeeFreeFormSection from '../components/home/FeeFreeFormSection';

const ARTICLES = [
  {
    id: 1,
    category: 'Case Alerts',
    title: 'Personal Records Stolen – National Public Data: What You Need to Know',
    description: 'Another data breach has affected countless unsuspecting people due to lax security measures. Billions of personal records may soon be leaked online...',
    image: 'shutterstock_2204212039.jpg.avif',
    featured: true,
  },
  {
    id: 2,
    category: 'In The Community, John Morgan',
    title: "John Morgan's 'You Can't Teach Hungry': A Multimillion Dollar Roadmap",
    image: 'Email Header-CantTeachHungry.png.avif',
  },
  {
    id: 3,
    category: 'Newsroom, Winning Cases',
    title: "Motorcyclist's Collision: Police Dashcam Captures Life-Changing Moment",
  },
 
  {
    id: 5,
    category: 'Newsroom, Product Recalls',
    title: 'The Week in Recalls: January 26, 2024',
  },
  {
    id: 6,
    category: 'Newsroom, Product Recalls',
    title: 'The Week in Recalls: January 19, 2024',
  },
  {
    id: 7,
    category: 'Data Privacy',
    title: 'Is Your Enterprise\'s MSSP Safe?',
  },
  {
    id: 8,
    category: 'Personal Injury',
    title: 'Don\'t Let Food Recalls Spoil Your Thanksgiving: What to Know and What to Avoid',
    description: 'With Thanksgiving right around the corner, many Americans are in full swing planning menus, shopping for ingredients, and prepping family gatherings...',
    image: 'shutterstock_1807910176.jpg.avif',
    featured: true,
  },
  {
    id: 9,
    category: 'Maritime & Admiralty, Boating Accident',
    title: 'Maritime Injuries & Wrongful Death: How the Law Protects Victims and Families',
    image: 'shutterstock_2117367026.jpg.avif',
  },
  {
    id: 10,
    category: 'Maritime & Admiralty, Boating Accident',
    title: 'When a Parasailing Adventure Turns Into an Injury',
    image: 'shutterstock_2555990299.jpg.avif',
  },
  {
    id: 11,
    category: 'Boating Accident, Maritime & Admiralty',
    title: 'Riverboat Accidents: What Injured Passengers, Crew, and Families Need to Know',
    image: 'shutterstock_273240434.jpg.avif',
  },
];

const SIDEBAR_LINKS = [
  'Latest Stories',
  'Accidents & Incidents',
  'Injury Prevention',
  'Insurance',
  'Newsroom',
];

function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      const response = await fetch(API_ROUTES.newsletter, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Subscription failed');
      }

      setMessage('Thank you for subscribing!');
      setEmail('');
    } catch (error) {
      setMessage(error.message || 'Failed to subscribe. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-blue-600 text-white py-12 md:py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Subscribe to our newsletter
        </h2>
        <p className="text-lg text-center mb-8 text-white/90">
          Get the latest updates on new cases, important news, and tips for keeping you and your family safe and healthy.
        </p>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email address"
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-gray-700 hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </button>
          </div>
          {message && (
            <p className={`text-sm mt-4 text-center ${message.includes('Thank you') ? 'text-green-200' : 'text-red-200'}`}>
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default function News() {
  const featuredArticle = ARTICLES.find(a => a.id === 1);
  const sidebarArticles = ARTICLES.filter(a => a.id >= 2 && a.id <= 7);
  const secondFeatured = ARTICLES.find(a => a.id === 8);
  const bottomArticles = ARTICLES.filter(a => a.id >= 9 && a.id <= 11);

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto max-w-7xl px-4 py-8 md:py-12">
        {/* Header */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-12">
          News
        </h1>

        {/* Main Article Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Left - Featured Article */}
          <div>
            {featuredArticle && (
              <article className="mb-8">
                <div className="mb-4">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-64 md:h-80 object-cover rounded-lg"
                  />
                </div>
                <p className="text-sm text-gray-500 mb-2">{featuredArticle.category}</p>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  <Link to={`/news/${featuredArticle.id}`} className="hover:text-blue-600 transition">
                    {featuredArticle.title}
                  </Link>
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {featuredArticle.description}
                </p>
              </article>
            )}
          </div>

          {/* Right - Stacked Articles */}
          <div className="space-y-6">
            {sidebarArticles.map((article) => (
              <article key={article.id} className="flex gap-4">
                {article.image && (
                  <div className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                )}
                <div className="flex-1">
                  <p className="text-xs md:text-sm text-gray-500 mb-1">{article.category}</p>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900">
                    <Link to={`/news/${article.id}`} className="hover:text-blue-600 transition">
                      {article.title}
                    </Link>
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Middle Section - Sidebar and Featured Article */}
        <div className="grid lg:grid-cols-4 gap-8 mb-16">
          {/* Left Sidebar */}
         

          {/* Right - Second Featured Article */}
          <div className="lg:col-span-3">
            {secondFeatured && (
              <article>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Latest Stories</h3>
                <div className="mb-4">
                  <img
                    src={secondFeatured.image}
                    alt={secondFeatured.title}
                    className="w-full h-64 md:h-96 object-cover rounded-lg"
                  />
                </div>
                <p className="text-sm text-gray-500 mb-2">{secondFeatured.category}</p>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  <Link to={`/news/${secondFeatured.id}`} className="hover:text-blue-600 transition">
                    {secondFeatured.title}
                  </Link>
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {secondFeatured.description}
                </p>
              </article>
            )}
          </div>
        </div>

        {/* Bottom Article Row */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {bottomArticles.map((article) => (
            <article key={article.id}>
              <div className="mb-4">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 md:h-64 object-cover rounded-lg"
                />
              </div>
              <p className="text-sm text-gray-500 mb-2">{article.category}</p>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                <Link to={`/news/${article.id}`} className="hover:text-blue-600 transition">
                  {article.title}
                </Link>
              </h3>
            </article>
          ))}
        </div>
      </div>

      {/* Newsletter Subscription Section */}
      <NewsletterSection />

      <Articles />
      <FeeFreeFormSection />
    </div>
  );
}

