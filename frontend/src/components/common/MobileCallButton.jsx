import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../contexts/ThemeContext';

export default function MobileCallButton() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const phoneNumber = t('common.phone');
  const phoneLink = `tel:${phoneNumber.replace(/[^\d]/g, '')}`;
  const accentColor = theme.accent || '#f5d000';

  return (
    <a
      href={phoneLink}
      className="fixed bottom-0 left-0 right-0 text-black font-bold py-4 px-6 text-center text-lg z-50 shadow-[0_-4px_12px_rgba(0,0,0,0.15)] transition-colors"
      style={{ 
        backgroundColor: accentColor,
      }}
      onMouseEnter={(e) => {
        // Darken the color on hover
        const color = accentColor;
        const rgb = color.match(/\d+/g);
        if (rgb) {
          const r = Math.max(0, parseInt(rgb[0]) - 20);
          const g = Math.max(0, parseInt(rgb[1]) - 20);
          const b = Math.max(0, parseInt(rgb[2]) - 20);
          e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        }
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = accentColor;
      }}
    >
      Call Us Now: {phoneNumber}
    </a>
  );
}

