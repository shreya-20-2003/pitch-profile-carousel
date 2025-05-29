
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, MapPin, Briefcase, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { candidatesData } from '../data/candidatesData';

const Users = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSkill, setSelectedSkill] = useState('');

  const skills = ['React', 'Python', 'JavaScript', 'Node.js', 'UI/UX', 'Data Science'];

  const filteredUsers = candidatesData.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedSkill === '' || user.skills.includes(selectedSkill))
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Discover Talent
          </h1>
          <p className="text-gray-600">
            Connect with {candidatesData.length}+ professionals ready for new opportunities
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search professionals by name, role, or skills"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              <Button
                variant={selectedSkill === '' ? 'default' : 'outline'}
                onClick={() => setSelectedSkill('')}
                size="sm"
              >
                All Skills
              </Button>
              {skills.map(skill => (
                <Button
                  key={skill}
                  variant={selectedSkill === skill ? 'default' : 'outline'}
                  onClick={() => setSelectedSkill(skill)}
                  size="sm"
                >
                  {skill}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* User Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUsers.map((user, index) => (
            <motion.div
              key={user.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardContent className="p-6">
                  {/* User Header */}
                  <div className="flex items-center mb-4">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">{user.name}</h3>
                      <p className="text-blue-600 font-medium">{user.role}</p>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <MapPin className="w-3 h-3 mr-1" />
                        {user.location}
                      </div>
                    </div>
                  </div>

                  {/* Experience */}
                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    <Briefcase className="w-4 h-4 mr-2" />
                    {user.experience}
                  </div>

                  {/* Skills */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {user.skills.slice(0, 3).map((skill, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {user.skills.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{user.skills.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* About */}
                  <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                    {user.about}
                  </p>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                      View Profile
                    </Button>
                    <Button variant="outline" size="icon">
                      <Star className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredUsers.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No professionals found</h3>
            <p className="text-gray-600">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Users;
