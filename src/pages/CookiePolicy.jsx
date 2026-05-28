import { useState } from 'react';
import { Link } from 'react-router-dom';

const CookiePolicy = () => {
  const [isExpanded, setIsExpanded] = useState({});

  const toggleSection = (section) => {
    setIsExpanded(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const cookieSections = [
    {
      id: 'what-we-collect',
      title: 'What Cookies We Collect',
      content: [
        'We use cookies and similar tracking technologies to access and store information on your device to improve your browsing experience.',
        'The cookies we use include session cookies, persistent cookies, and third-party cookies.'
      ]
    },
    {
      id: 'how-we-use',
      title: 'How We Use Cookies',
      content: [
        'To provide and maintain our services',
        'To understand and analyze how our services are used',
        'To improve our services and user experience',
        'To personalize content and recommendations',
        'To show advertisements that are relevant to you'
      ]
    },
    {
      id: 'third-party',
      title: 'Third-Party Cookies',
      content: [
        'We may use third-party services that place cookies on your device.',
        'These third-party cookies are used for analytics, advertising, and other purposes.',
        'You can control third-party cookies through your browser settings.'
      ]
    },
    {
      id: 'manage',
      title: 'Managing Cookies',
      content: [
        'You can control cookies through your browser settings.',
        'You can delete cookies at any time.',
        'Disabling cookies may affect the functionality of our services.'
      ]
    }
  ];

  return (
    <div className="min-h-[calc(100vh-5rem)] bg-gradient-to-br from-gray-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 relative transition-colors duration-300">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-primary-200/30 to-purple-200/30 dark:from-primary-600/10 dark:to-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-tl from-blue-200/30 to-purple-200/30 dark:from-blue-600/10 dark:to-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black bg-gradient-to-r from-primary-600 via-purple-600 to-primary-800 bg-clip-text text-transparent mb-4">
            Cookie Policy
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            This Cookie Policy explains how we use cookies and similar tracking technologies when you visit our website.
          </p>
        </div>

        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/20 p-8 transition-colors duration-300 mb-8">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300">
              This website uses cookies to enhance your browsing experience and to analyze how our website is used.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              By continuing to use our website, you consent to our use of cookies in accordance with this Cookie Policy.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {cookieSections.map((section) => (
            <div key={section.id} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/20 overflow-hidden transition-colors duration-300">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors duration-300"
              >
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">{section.title}</h2>
                <svg
                  className={`w-6 h-6 text-primary-600 dark:text-primary-400 transform transition-transform duration-300 ${isExpanded[section.id] ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isExpanded[section.id] && (
                <div className="p-6 pt-0 border-t border-gray-200 dark:border-gray-700">
                  <ul className="space-y-2">
                    {section.content.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <p className="text-gray-700 dark:text-gray-300">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-600 to-purple-600 text-white font-semibold rounded-xl hover:from-primary-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-primary-500/25"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;