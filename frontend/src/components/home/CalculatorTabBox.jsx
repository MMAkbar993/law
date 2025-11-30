import React, { useState } from 'react';
import AutoAccidentCalculator from '../../pages/auto-accident-calculator';

export default function CalculatorTabBox() {
  const [activeTab, setActiveTab] = useState('calculator');

  return (
    <section className="bg-white py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Tab Navigation */}
        <div className="flex items-center gap-2 mb-8 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('calculator')}
            className={`relative px-6 py-3 font-semibold text-sm uppercase tracking-wide transition-colors ${
              activeTab === 'calculator'
                ? 'text-brand-primary border-b-2 border-brand-primary'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Auto Accident Calculator
            {activeTab === 'calculator' && (
              <span className="absolute -top-1 -right-1 bg-[#f5d000] text-black text-xs font-bold px-2 py-0.5 rounded-full">
                NEW
              </span>
            )}
          </button>
        </div>

        {/* Tab Content */}
        <div className="mt-8">
          {activeTab === 'calculator' && (
            <div className="bg-white rounded-lg overflow-hidden">
              <AutoAccidentCalculator />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

