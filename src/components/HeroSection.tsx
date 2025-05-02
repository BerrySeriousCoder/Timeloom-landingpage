
import React from 'react';
import { ArrowRight, Calendar, Mail, BarChart3 } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-300/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      {/* Floating icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 animate-float">
          <Mail className="w-8 h-8 text-blue-400/60" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float delay-300">
          <Calendar className="w-10 h-10 text-purple-400/60" />
        </div>
        <div className="absolute bottom-1/3 left-1/3 animate-float delay-700">
          <BarChart3 className="w-9 h-9 text-indigo-400/60" />
        </div>
      </div>
      
      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Tag Everything.
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Track Progress.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            The only productivity tool that unifies your emails, calendar events, and projects with a global tagging system. 
            Visualize progress like never before.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="group bg-blue-600 text-white px-8 py-4 rounded-2xl hover:bg-blue-700 transition-all duration-300 font-semibold text-lg flex items-center gap-2 hover:scale-105 shadow-lg hover:shadow-xl">
              Get Started Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-2xl hover:border-blue-600 hover:text-blue-600 transition-all duration-300 font-semibold text-lg hover:scale-105">
              Watch Demo
            </button>
          </div>
          
          {/* Trust indicators */}
          <div className="flex flex-col items-center space-y-4">
            <p className="text-sm text-gray-500">Trusted by productivity enthusiasts worldwide</p>
            <div className="flex items-center space-x-6 text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm">Open Source</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-sm">Privacy First</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                <span className="text-sm">Google Verified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
