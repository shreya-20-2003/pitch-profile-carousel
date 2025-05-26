
import React from 'react';
import { motion } from 'framer-motion';
import { Play, Bookmark, Heart, X } from 'lucide-react';

interface Candidate {
  id: number;
  name: string;
  role: string;
  experience: string;
  avatar: string;
  skills: string[];
  about: string;
  email: string;
  phone: string;
  location: string;
}

interface CandidateCardProps {
  candidate: Candidate;
  onClick: () => void;
}

const CandidateCard: React.FC<CandidateCardProps> = ({ candidate, onClick }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg p-6 cursor-pointer hover:shadow-xl transition-all duration-300"
      onClick={onClick}
    >
      {/* Avatar and Basic Info */}
      <div className="flex items-center mb-4">
        <img
          src={candidate.avatar}
          alt={candidate.name}
          className="w-16 h-16 rounded-full object-cover mr-4"
        />
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{candidate.name}</h3>
          <p className="text-gray-600">{candidate.role}</p>
          <p className="text-sm text-gray-500">{candidate.experience}</p>
        </div>
      </div>

      {/* Pitch Video Section */}
      <div className="relative bg-gray-100 rounded-lg h-32 mb-4 flex items-center justify-center">
        <button className="bg-blue-600 text-white rounded-full p-3 hover:bg-blue-700 transition-colors">
          <Play className="w-6 h-6" />
        </button>
        <span className="absolute top-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
          1:00
        </span>
      </div>

      {/* Skills */}
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {candidate.skills.slice(0, 3).map((skill, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
            >
              {skill}
            </span>
          ))}
          {candidate.skills.length > 3 && (
            <span className="text-gray-500 text-xs">+{candidate.skills.length - 3} more</span>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2 mb-4">
        <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors text-sm">
          Shortlist
        </button>
        <button className="flex-1 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors text-sm">
          Reject
        </button>
        <button className="bg-gray-200 text-gray-700 p-2 rounded-lg hover:bg-gray-300 transition-colors">
          <Bookmark className="w-4 h-4" />
        </button>
      </div>

      {/* Notes Input */}
      <textarea
        placeholder="Add notes about this candidate..."
        className="w-full border border-gray-300 rounded-lg p-2 text-sm resize-none"
        rows={2}
        onClick={(e) => e.stopPropagation()}
      />
    </motion.div>
  );
};

export default CandidateCard;
