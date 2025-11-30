import React from 'react';
import { useTranslation } from 'react-i18next';

export default function MissionVideoSection({ 
  title,
  description,
  videoThumbnail,
  disclaimer,
  onPlayClick
}) {
  const { t } = useTranslation();
  const config = t('missionVideo', { returnObjects: true });
  const missionConfig = config && typeof config === 'object' ? config : {};

  const finalTitle = title || missionConfig.title || '1,000 Attorneys. 1 Mission.';
  const finalDescription = description || missionConfig.description || "It's more than a job. Our attorneys are dedicated to making a difference in the lives of the clients and families we serve.";
  const finalThumbnail = videoThumbnail || missionConfig.videoThumbnail || 'aba4d66b26a87cd5887ba9e03348dd2b.jpg.avif';
  const finalDisclaimer = disclaimer || missionConfig.disclaimer || 'The attorneys shown in this video may not be licensed in your state. To find an attorney licensed in your area, please visit our attorney page.';

  const handlePlayClick = () => {
    if (onPlayClick) {
      onPlayClick();
    } else {
      // Default behavior - could open a modal or navigate to video
      console.log('Play video clicked');
    }
  };

  return (
    <section className="bg-white px-4 py-16">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            {finalTitle}
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            {finalDescription}
          </p>
        </div>

        {/* Video Player */}
        <div className="max-w-4xl mx-auto mb-6">
          <div className="relative aspect-video bg-blue-100 rounded-lg overflow-hidden shadow-lg">
            <img
              src={finalThumbnail}
              alt="Video thumbnail"
              className="w-full h-full object-cover"
            />
            <button
              type="button"
              onClick={handlePlayClick}
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
            {finalDisclaimer}
          </p>
        </div>
      </div>
    </section>
  );
}

