import React from 'react';
import { Users, Target, Brain, Shield, Zap, TrendingUp, Code, Database, BarChart3, GitBranch } from 'lucide-react';

const AboutUs = () => {
  const stats = [
    { number: '89%', label: 'Prediction Accuracy' },
    { number: '500+', label: 'Companies Served' },
    { number: '10K+', label: 'Employee Profiles Analyzed' },
    { number: '24/7', label: 'System Uptime' }
  ];

  const features = [
    {
      icon: Brain,
      title: 'Machine Learning Powered',
      description: 'Advanced algorithms using Logistic Regression and Scikit-learn for precise churn predictions'
    },
    {
      icon: BarChart3,
      title: 'Comprehensive Analytics',
      description: 'Deep insights into job satisfaction, work-life balance, and career progression patterns'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'PostgreSQL database with enterprise-grade security for your sensitive HR data'
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'FastAPI backend delivers lightning-fast predictions and responsive user experience'
    }
  ];

  const techStack = [
    { category: 'Frontend', technologies: ['React.js', 'Tailwind CSS', 'Vite'] },
    { category: 'Backend', technologies: ['FastAPI', 'Python', 'Uvicorn'] },
    { category: 'Database', technologies: ['PostgreSQL'] },
    { category: 'ML & Analytics', technologies: ['Scikit-learn', 'Pandas', 'NumPy'] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">About PredictiveHR</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Revolutionizing human resources with intelligent churn prediction and actionable insights. 
            We empower organizations to retain top talent through data-driven decision making.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Target className="w-4 h-4" />
              Our Mission
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Predicting Tomorrow's Workforce Today
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              At PredictiveHR, we believe that understanding employee behavior is the key to building 
              stronger, more resilient organizations. Our cutting-edge machine learning platform analyzes 
              comprehensive employee metrics to predict resignation probability with unprecedented accuracy.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              By transforming complex data into actionable insights, we help HR teams proactively address 
              retention challenges, improve employee satisfaction, and build lasting organizational success.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose PredictiveHR?</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our platform combines advanced technology with deep HR expertise to deliver 
              unmatched insights into employee retention.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Code className="w-4 h-4" />
              Technology Stack
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Built with Modern Technologies</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We leverage the latest technologies to ensure scalability, performance, and reliability.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techStack.map((stack, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">{stack.category}</h3>
                <div className="space-y-2">
                  {stack.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-600">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">How PredictiveHR Works</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our streamlined process transforms your employee data into powerful predictive insights.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-2xl mb-6">
                <Database className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">1. Data Collection</h3>
              <p className="text-gray-600 leading-relaxed">
                Securely upload employee data including job roles, compensation, distance from home, 
                promotions, and work-life balance metrics.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl mb-6">
                <Brain className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">2. ML Analysis</h3>
              <p className="text-gray-600 leading-relaxed">
                Our Logistic Regression model analyzes patterns in job satisfaction, career progression, 
                and other key factors to predict churn probability.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl mb-6">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">3. Actionable Insights</h3>
              <p className="text-gray-600 leading-relaxed">
                Receive detailed analytics, churn probability scores, and strategic recommendations 
                to improve employee retention.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Users className="w-4 h-4" />
            Our Team
          </div>
          <h2 className="text-4xl font-bold mb-6">Meet the Creator</h2>

         <div className='flex flex-row gap-10'>
             <div className="max-w-xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold">NA</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">NavvAbhishek</h3>
              <p className="text-blue-300 mb-4">Frontend & Backend Developer</p>
              <p className="text-gray-300 leading-relaxed">
                
              </p>
            </div>
          </div>
          
          <div className="max-w-xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold">NA</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Ulindu Rasantha</h3>
              <p className="text-blue-300 mb-4">Frontend & Backend Developer</p>
              <p className="text-gray-300 leading-relaxed">
              
              </p>
            </div>
          </div>
          <div className="max-w-xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold">NA</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Chamath Lasindu</h3>
              <p className="text-blue-300 mb-4">ML Model Designer</p>
              <p className="text-gray-300 leading-relaxed">
               
              </p>
            </div>
          </div>
         </div>

        </div>
      </div>

      {/* Future Vision */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <GitBranch className="w-4 h-4" />
              Future Roadmap
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What's Coming Next</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
              We're constantly evolving to bring you the most advanced HR analytics platform.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Advanced ML models (Random Forest, XGBoost)',
              'Real-time predictions and alerts',
              'Email notifications for high-risk employees',
              'Advanced data visualization dashboards',
              'Mobile application for on-the-go insights',
              'Integration with popular HR systems'
            ].map((enhancement, index) => (
              <div key={index} className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm">
                <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700">{enhancement}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your HR Strategy?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of companies already using PredictiveHR to build stronger, more resilient teams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Started Today
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;