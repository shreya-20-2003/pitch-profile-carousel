
import React from 'react';
import { motion } from 'framer-motion';
import RecruiterPitchCarousel from '../components/RecruiterPitchCarousel';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            🚀 Powered by AI-driven candidate matching
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            TalentFlow
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The modern recruiting platform that connects exceptional talent with forward-thinking companies. 
            Discover, evaluate, and hire the best candidates with our innovative pitch carousel.
          </p>
        </motion.div>

        <RecruiterPitchCarousel />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16 bg-white rounded-2xl shadow-lg p-8 mx-auto max-w-4xl"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose TalentFlow?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Smart Matching</h3>
              <p className="text-gray-600 text-sm">AI-powered candidate matching based on skills, experience, and culture fit</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Fast Screening</h3>
              <p className="text-gray-600 text-sm">1-minute pitch videos help you evaluate candidates quickly and effectively</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Data-Driven</h3>
              <p className="text-gray-600 text-sm">Comprehensive candidate profiles with skills, experience, and performance metrics</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
