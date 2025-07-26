import React from 'react';

// --- Icon Components (You can replace these with your preferred icon library) ---

const UploadIcon = () => (
  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
);

const BrainIcon = () => (
    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
);

const DashboardIcon = () => (
    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
);

const AlertIcon = () => (
    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
);

const ExportIcon = () => (
    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
);

const SecureIcon = () => (
    <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.917l9 3 9-3a12.02 12.02 0 00-2.382-9.975z"></path></svg>
);

// --- Data for the features ---
const featuresData = [
  {
    icon: <UploadIcon />,
    bgColor: 'bg-blue-100',
    title: "Easy Data Upload",
    description: "Upload employee data via CSV or Excel files with automatic data validation and processing.",
  },
  {
    icon: <BrainIcon />,
    bgColor: 'bg-green-100',
    title: "AI Prediction Engine",
    description: "Advanced ML models including Logistic Regression, Decision Trees, and XGBoost for accurate predictions.",
  },
  {
    icon: <DashboardIcon />,
    bgColor: 'bg-purple-100',
    title: "Interactive Dashboard",
    description: "Comprehensive analytics dashboard with risk levels, filters, and real-time insights.",
  },
  {
    icon: <AlertIcon />,
    bgColor: 'bg-red-100',
    title: "Smart Alerts",
    description: "Automated notifications for high-risk employees and sudden changes in churn probability.",
  },
  {
    icon: <ExportIcon />,
    bgColor: 'bg-orange-100',
    title: "Export Reports",
    description: "Generate detailed reports in PDF or Excel format for stakeholder presentations.",
  },
  {
    icon: <SecureIcon />,
    bgColor: 'bg-teal-100',
    title: "Secure & Compliant",
    description: "Enterprise-grade security with GDPR compliance and encrypted data storage.",
  },
];

// --- Reusable Feature Card Component ---
const FeatureCard = ({ icon, bgColor, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${bgColor}`}>
        {icon}
      </div>
      <h3 className="mt-5 text-xl font-bold text-gray-900">{title}</h3>
      <p className="mt-2 text-base text-gray-600">{description}</p>
    </div>
  );
};


// --- Main Features Section Component ---
const Features = () => {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Powerful Features for HR Teams
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Everything you need to predict, analyze, and prevent employee churn in one comprehensive platform.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuresData.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              bgColor={feature.bgColor}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;