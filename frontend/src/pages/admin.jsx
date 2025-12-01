import React, { useState, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const CASE_TYPE_OPTIONS = [
  'Personal Injury',
  'Car Accident',
  'Truck Accident',
  'Motorcycle Accident',
  'Slip and Fall',
  'Workers\' Compensation',
  'Medical Malpractice',
  'Product Liability',
  'Wrongful Death',
  'Dog Bite',
  'Brain Injury',
  'Spine Injury',
  'Birth Injury',
  'Burn Injury',
  'Construction Accident',
  'Premises Liability',
  'Nursing Home Abuse',
  'Domestic Abuse',
  'Employment Law',
  'Social Security Disability',
  'Class Action',
  'Mass Tort',
  'Dangerous Drugs',
  'Defective Products',
  'Insurance Claims',
  'Other',
];

export default function Admin() {
  const { currentTheme, setCurrentTheme, logo, setLogo, caseTypes, setCaseTypes, themes } = useTheme();
  const fileInputRef = useRef(null);
  const [logoPreview, setLogoPreview] = useState(logo);

  const handleThemeChange = (themeKey) => {
    setCurrentTheme(themeKey);
  };

  const handleLogoUpload = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (file.type !== 'image/svg+xml' && !file.name.endsWith('.svg')) {
      alert('Please upload an SVG file');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const svgContent = e.target.result;
      setLogo(svgContent);
      setLogoPreview(svgContent);
    };
    reader.readAsText(file);
  };

  const handleCaseTypeToggle = (caseType) => {
    setCaseTypes((prev) => {
      if (prev.includes(caseType)) {
        return prev.filter((ct) => ct !== caseType);
      } else {
        return [...prev, caseType];
      }
    });
  };

  const handleRemoveLogo = () => {
    setLogo(null);
    setLogoPreview(null);
    localStorage.removeItem('logo');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Admin Panel</h1>

        {/* Theme Selection */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Theme Settings</h2>
          <p className="text-gray-600 mb-6">Select a color theme for your website</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Object.entries(themes).map(([key, theme]) => (
              <button
                key={key}
                onClick={() => handleThemeChange(key)}
                className={`p-4 rounded-lg border-2 transition-all ${
                  currentTheme === key
                    ? 'border-blue-600 ring-2 ring-blue-200'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-8 h-8 rounded"
                    style={{ backgroundColor: theme.primary }}
                  />
                  <div
                    className="w-8 h-8 rounded"
                    style={{ backgroundColor: theme.accent }}
                  />
                </div>
                <p className="font-semibold text-gray-900">{theme.name}</p>
                {currentTheme === key && (
                  <p className="text-sm text-blue-600 mt-1">Active</p>
                )}
              </button>
            ))}
          </div>
        </section>

        {/* Logo Upload */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Logo Settings</h2>
          <p className="text-gray-600 mb-6">Upload your logo as an SVG file</p>
          
          <div className="space-y-4">
            {logoPreview && (
              <div className="border-2 border-gray-200 rounded-lg p-4 bg-gray-50">
                <p className="text-sm font-medium text-gray-700 mb-2">Current Logo Preview:</p>
                <div
                  className="max-w-xs"
                  dangerouslySetInnerHTML={{ __html: logoPreview }}
                />
              </div>
            )}
            
            <div className="flex items-center gap-4">
              <input
                ref={fileInputRef}
                type="file"
                accept=".svg,image/svg+xml"
                onChange={handleLogoUpload}
                className="hidden"
                id="logo-upload"
              />
              <label
                htmlFor="logo-upload"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer transition-colors"
              >
                Upload SVG Logo
              </label>
              
              {logo && (
                <button
                  onClick={handleRemoveLogo}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  Remove Logo
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Case Types Selection */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Case Types</h2>
          <p className="text-gray-600 mb-6">Select the types of cases your law firm handles</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {CASE_TYPE_OPTIONS.map((caseType) => (
              <label
                key={caseType}
                className="flex items-center gap-3 p-3 border-2 border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
              >
                <input
                  type="checkbox"
                  checked={caseTypes.includes(caseType)}
                  onChange={() => handleCaseTypeToggle(caseType)}
                  className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                />
                <span className="text-gray-900 font-medium">{caseType}</span>
              </label>
            ))}
          </div>
          
          {caseTypes.length > 0 && (
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm font-medium text-blue-900 mb-2">
                Selected Case Types ({caseTypes.length}):
              </p>
              <p className="text-sm text-blue-700">
                {caseTypes.join(', ')}
              </p>
            </div>
          )}
        </section>

        {/* Save Notice */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-sm text-green-800">
            <strong>Note:</strong> All changes are saved automatically to your browser's local storage.
          </p>
        </div>
      </div>
    </div>
  );
}

