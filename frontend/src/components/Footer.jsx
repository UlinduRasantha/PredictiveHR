import { BarChart3, Github, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info & Socials */}
          <div className="md:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-blue-600 rounded-lg p-2">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">PredictiveHR</span>
            </div>
            <p className="mb-6 max-w-md">
              Empowering HR teams with AI-driven insights to predict and prevent employee churn, 
              helping organizations retain their most valuable talent.
            </p>
            {/* Social Media Links */}
            <div className="flex space-x-4">
                <a href="#" aria-label="Twitter" className="hover:text-white transition-colors duration-300">
                    <Twitter className="h-6 w-6" />
                  
                </a>
                <a href="#" aria-label="GitHub" className="hover:text-white transition-colors duration-300">
                    <Github className="h-6 w-6" />
                </a>
                <a href="#" aria-label="LinkedIn" className="hover:text-white transition-colors duration-300">
                    <Linkedin className="h-6 w-6" />
                </a>
            </div>
          </div>
          
          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-white mb-4 tracking-wider uppercase text-sm">Product</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition-colors duration-300">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Demo</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Integrations</a></li>
            </ul>
          </div>
          
          {/* Contact Links */}
          <div>
            <h3 className="font-semibold text-white mb-4 tracking-wider uppercase text-sm">Contact</h3>
            <ul className="space-y-3 text-sm">
                <li className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 flex-shrink-0" />
                    <span>contact@PredictiveHR.com</span>
                </li>
                <li className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 flex-shrink-0" />
                    <span>+94 (71) 1604788 </span>
                </li>
                <li className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    <span>Colombo, Sri Lanka</span>
                </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-center md:text-left">
            © {new Date().getFullYear()} PredictiveHR. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
            <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;