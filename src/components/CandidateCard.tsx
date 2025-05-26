
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bookmark, Play, Heart, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const CandidateCard = ({ candidate, onClick }) => {
  const [notes, setNotes] = useState('');
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const { toast } = useToast();

  const handleAction = (action, e) => {
    e.stopPropagation();
    
    switch (action) {
      case 'shortlist':
        toast({
          title: "Candidate Shortlisted",
          description: `${candidate.name} has been added to your shortlist.`,
        });
        break;
      case 'reject':
        toast({
          title: "Candidate Rejected",
          description: `${candidate.name} has been rejected.`,
          variant: "destructive",
        });
        break;
      case 'bookmark':
        setIsBookmarked(!isBookmarked);
        toast({
          title: isBookmarked ? "Bookmark Removed" : "Candidate Bookmarked",
          description: `${candidate.name} has been ${isBookmarked ? 'removed from' : 'added to'} bookmarks.`,
        });
        break;
    }
  };

  const handlePlayVideo = (e) => {
    e.stopPropagation();
    setShowVideo(true);
    toast({
      title: "Playing Pitch Video",
      description: `Now playing ${candidate.name}'s 1-minute pitch.`,
    });
  };

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="h-full"
    >
      <Card 
        className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer border-0 overflow-hidden h-full"
        onClick={onClick}
      >
        <CardContent className="p-0 h-full flex flex-col">
          {/* Video/Avatar Section */}
          <div className="relative h-64 bg-gradient-to-br from-blue-100 to-purple-100 overflow-hidden">
            {showVideo ? (
              <div className="absolute inset-0 bg-black flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="animate-pulse">▶ Playing Video...</div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowVideo(false);
                    }}
                  >
                    <X className="w-4 h-4 mr-1" />
                    Close
                  </Button>
                </div>
              </div>
            ) : (
              <>
                <img
                  src={candidate.avatar}
                  alt={candidate.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20" />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handlePlayVideo}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-4 shadow-lg transition-all duration-200"
                >
                  <Play className="w-8 h-8 text-blue-600 ml-1" fill="currentColor" />
                </motion.button>
              </>
            )}
            
            {/* Bookmark button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => handleAction('bookmark', e)}
              className={`absolute top-4 right-4 p-2 rounded-full shadow-lg transition-all duration-200 ${
                isBookmarked 
                  ? 'bg-yellow-500 text-white' 
                  : 'bg-white bg-opacity-90 text-gray-600 hover:bg-yellow-500 hover:text-white'
              }`}
            >
              <Bookmark className="w-5 h-5" fill={isBookmarked ? "currentColor" : "none"} />
            </motion.button>
          </div>

          {/* Content Section */}
          <div className="p-6 flex-1 flex flex-col">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-gray-900 mb-1">{candidate.name}</h3>
              <p className="text-blue-600 font-medium">{candidate.role}</p>
              <p className="text-sm text-gray-500 mt-1">{candidate.experience}</p>
            </div>

            {/* Skills */}
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {candidate.skills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="bg-blue-50 text-blue-700 hover:bg-blue-100"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Notes */}
            <div className="mb-4 flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Notes
              </label>
              <Textarea
                placeholder="Add your notes about this candidate..."
                value={notes}
                onChange={(e) => {
                  e.stopPropagation();
                  setNotes(e.target.value);
                }}
                onClick={(e) => e.stopPropagation()}
                className="resize-none h-20 text-sm"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 mt-auto">
              <Button
                onClick={(e) => handleAction('shortlist', e)}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                size="sm"
              >
                <Heart className="w-4 h-4 mr-1" />
                Shortlist
              </Button>
              <Button
                onClick={(e) => handleAction('reject', e)}
                variant="outline"
                className="flex-1 border-red-200 text-red-600 hover:bg-red-50"
                size="sm"
              >
                <X className="w-4 h-4 mr-1" />
                Reject
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CandidateCard;
