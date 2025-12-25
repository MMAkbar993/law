import React from 'react';
import { useTranslation } from 'react-i18next';

export default function MissionVideoSection({ 
  title,
  description,
  onPlayClick
}) {
  const { t } = useTranslation();
  const config = t('missionVideo', { returnObjects: true });
  const missionConfig = config && typeof config === 'object' ? config : {};

  const finalTitle = title || missionConfig.title || '1 Mission.';
  const finalDescription = description || missionConfig.description || "Our attorneys are dedicated to making a difference in the families we serve.";

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

 
      </div>
    </section>
  );
}

