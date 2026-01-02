import React, { useEffect, useMemo, useState } from 'react';

const REVIEWS = [
  {
    id: 'review-1',
    author: 'Tim S.',
    location: 'Atlanta, GA',
    rating: 5,
    quote:
      'Morgan & Morgan employees kept me informed throughout our legal process, especially my case worker, Kathleen, who was very kind and very helpful in explaining the legal paperwork.',
  },
  {
    id: 'review-2',
    author: 'Daniel W.',
    location: 'Atlanta, GA',
    rating: 5,
    quote:
      "It's well known what Morgan & Morgan says they do. And that’s exactly what they do. They handled the process very well and I appreciate them very much. Thank you Morgan and Morgan.",
  },
  {
    id: 'review-3',
    author: 'Claudia R.',
    location: 'Orlando, FL',
    rating: 5,
    quote:
      'They were compassionate and responsive every step of the way. I always felt like my case mattered and that I was in capable hands.',
  },
  {
    id: 'review-4',
    author: 'Tim S.',
    location: 'Atlanta, GA',
    rating: 5,
    quote:
      'Morgan & Morgan employees kept me informed throughout our legal process, especially my case worker, Kathleen, who was very kind and very helpful in explaining the legal paperwork.',
  },
];

function StarRow({ count = 5 }) {
  return (
    <div className="flex items-center gap-1 text-[#fbbf24]">
      {Array.from({ length: count }, (_, index) => (
        <span key={index} aria-hidden="true">
          ★
        </span>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = useMemo(() => REVIEWS, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [items.length]);

  const goToIndex = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="bg-[#0d2248] py-20 text-white">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold">100,000+ Five Star Reviews</h2>
        </div>

        <div className="flex justify-center">
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl">
            {items.map((review, index) => {
              const isActive = index === activeIndex;
              return (
                <article
                  key={review.id}
                  className={`col-span-1 rounded-3xl bg-white p-8 text-left text-[#111827] transition duration-500 ${isActive ? 'block opacity-100' : 'hidden opacity-0'
                    } md:block md:opacity-100`}
                  aria-hidden={!isActive}
                >

                  <p className="text-base leading-relaxed text-[#1f2937]">{review.quote}</p>
                  <div className="mt-6 font-semibold text-[#111827]">{review.author}</div>
                  <div className="text-sm text-[#374151]">{review.location}</div>
                  <div className="mt-4">
                    <StarRow count={review.rating} />
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-12 flex items-center justify-center gap-3" role="tablist" aria-label="Client testimonials">
          {items.map((_item, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={_item.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => goToIndex(index)}
                className={`h-2.5 w-2.5 rounded-full transition ${isActive ? 'bg-white' : 'bg-white/30 hover:bg-white/60'
                  }`}
              >
                <span className="sr-only">Go to review {index + 1}</span>
              </button>
            );
          })}
        </div>

        <p className="mt-10 text-center text-xs text-white/60">
          Results may vary depending on your particular facts and legal circumstances. Based on select nationwide reviews.
        </p>
      </div>
    </section>
  );
}


