
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/users', label: 'Talent' },
    { path: '/jobs', label: 'Jobs' },
    { path: '/leaderboard', label: 'Leaderboard' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">
              TalentFlow
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost" className="text-gray-700 hover:text-blue-600">
                <LogIn className="w-4 h-4 mr-2" />
                Sign In
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Join Now
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4 border-t border-gray-200 mt-4 pt-4"
          >
            <div className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? 'text-blue-600 bg-blue-50 rounded-md'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <Link to="/login" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" className="w-full border-gray-300 text-gray-700">
                    Sign In
                  </Button>
                </Link>
                <Link to="/signup" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Join Now
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
