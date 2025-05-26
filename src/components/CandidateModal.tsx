
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Mail, Phone, MapPin, Calendar, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const CandidateModal = ({ candidate, isOpen, onClose }) => {
  if (!candidate) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative h-64 bg-gradient-to-br from-blue-100 to-purple-100">
              <img
                src={candidate.avatar}
                alt={candidate.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20" />
              
              <Button
                onClick={onClose}
                variant="outline"
                size="icon"
                className="absolute top-4 right-4 bg-white bg-opacity-90 hover:bg-white"
              >
                <X className="w-4 h-4" />
              </Button>

              <div className="absolute bottom-4 left-4 text-white">
                <h2 className="text-3xl font-bold">{candidate.name}</h2>
                <p className="text-xl opacity-90">{candidate.role}</p>
              </div>

              <Button
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-90 hover:bg-white text-blue-600"
                size="lg"
              >
                <Play className="w-6 h-6 mr-2" fill="currentColor" />
                Play Full Pitch
              </Button>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-6">
                  {/* About */}
                  <Card>
                    <CardHeader>
                      <CardTitle>About</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 leading-relaxed">
                        {candidate.about || `${candidate.name} is a ${candidate.role.toLowerCase()} with ${candidate.experience}. Passionate about technology and innovation, they bring a unique perspective to every project they work on.`}
                      </p>
                    </CardContent>
                  </Card>

                  {/* Skills */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Skills & Technologies</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {candidate.skills.map((skill, index) => (
                          <Badge 
                            key={index} 
                            variant="secondary" 
                            className="bg-blue-50 text-blue-700 px-3 py-1"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Experience */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Experience</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <Award className="w-5 h-5 text-blue-600 mt-1" />
                          <div>
                            <h4 className="font-medium">{candidate.role}</h4>
                            <p className="text-sm text-gray-600">{candidate.experience}</p>
                            <p className="text-sm text-gray-500 mt-1">
                              Led multiple high-impact projects and mentored junior team members
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Contact Info */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Contact Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Mail className="w-4 h-4 text-gray-500" />
                        <span className="text-sm">{candidate.email || 'Available upon request'}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="w-4 h-4 text-gray-500" />
                        <span className="text-sm">{candidate.phone || 'Available upon request'}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MapPin className="w-4 h-4 text-gray-500" />
                        <span className="text-sm">{candidate.location || 'Remote / Flexible'}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Calendar className="w-4 h-4 text-gray-500" />
                        <span className="text-sm">Available immediately</span>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Quick Stats */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Quick Stats</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Experience:</span>
                        <span className="text-sm font-medium">{candidate.experience}</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Skills:</span>
                        <span className="text-sm font-medium">{candidate.skills.length} core skills</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Availability:</span>
                        <span className="text-sm font-medium text-green-600">Available</span>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Schedule Interview
                    </Button>
                    <Button variant="outline" className="w-full">
                      Send Message
                    </Button>
                    <Button variant="outline" className="w-full">
                      Download Resume
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CandidateModal;
