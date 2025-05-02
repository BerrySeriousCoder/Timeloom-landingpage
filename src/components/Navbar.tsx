
import React, { useState } from 'react';
import { Menu, X, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl px-4">
      {/* Desktop Navbar - Centered Dock Style */}
      <div className="hidden md:flex items-center justify-between bg-white/80 backdrop-blur-xl border border-gray-200/20 rounded-2xl px-6 py-3 shadow-lg shadow-gray-900/5">
        <Link to="/" className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
          Timeloom
        </Link>
        
        <div className="flex items-center space-x-1 bg-gray-50/50 rounded-xl p-1">
          <a href="#features" className="text-gray-700 hover:text-blue-600 hover:bg-white/80 px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg">
            Features
          </a>
          <a href="#faq" className="text-gray-700 hover:text-blue-600 hover:bg-white/80 px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg">
            FAQ
          </a>
          <Link to="/privacy" className="text-gray-700 hover:text-blue-600 hover:bg-white/80 px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg">
            Privacy
          </Link>
          <Link to="/terms" className="text-gray-700 hover:text-blue-600 hover:bg-white/80 px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg">
            Terms
          </Link>
        </div>
        
        <div className="flex items-center space-x-3">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 p-2 rounded-lg hover:bg-gray-50/50 transition-all duration-200 flex items-center gap-2">
            <Github size={16} />
          </a>
          <button className="bg-gray-900 text-white px-5 py-2 rounded-xl hover:bg-gray-800 transition-all duration-200 font-medium text-sm hover:scale-105 shadow-sm">
            Get Started
          </button>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden">
        <div className="bg-white/80 backdrop-blur-xl border border-gray-200/20 rounded-2xl px-4 py-3 shadow-lg shadow-gray-900/5">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-xl font-bold text-gray-900">
              Timeloom
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900 p-2 rounded-lg hover:bg-gray-50/50 transition-all duration-200"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="mt-2 bg-white/90 backdrop-blur-xl border border-gray-200/20 rounded-2xl shadow-lg shadow-gray-900/10 overflow-hidden">
            <div className="px-4 py-2 space-y-1">
              <a href="#features" className="block text-gray-700 hover:text-blue-600 hover:bg-gray-50/50 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200">
                Features
              </a>
              <a href="#faq" className="block text-gray-700 hover:text-blue-600 hover:bg-gray-50/50 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200">
                FAQ
              </a>
              <Link to="/privacy" className="block text-gray-700 hover:text-blue-600 hover:bg-gray-50/50 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200">
                Privacy
              </Link>
              <Link to="/terms" className="block text-gray-700 hover:text-blue-600 hover:bg-gray-50/50 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200">
                Terms
              </Link>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="block text-gray-700 hover:text-blue-600 hover:bg-gray-50/50 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 flex items-center gap-2">
                <Github size={16} />
                Open Source
              </a>
              <div className="pt-2 pb-1">
                <button className="w-full bg-gray-900 text-white px-4 py-2 rounded-xl hover:bg-gray-800 transition-all duration-200 font-medium text-sm">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
