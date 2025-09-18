import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, MapPin, Users } from 'lucide-react';
import { programs } from './Programs';
import Events from '../components/Events/Events';

export default function ProgramDetail() {
  const { id } = useParams<{ id: string }>();
  console.log('[ProgramDetail] route param id =', id);
  const program = programs.find(p => p.id === Number(id));
  console.log('[ProgramDetail] matched program =', program);

  if (!program) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Program not found</h1>
          <p className="text-gray-600">Debug: id = {id}</p>
          <Link to="/programs" className="text-primary-600 hover:underline">
            ← Back to Programs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 w-full">
        <img
          src={program.image}
          alt={program.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center">
          <div className="container-custom text-white">
            <Link 
              to="/programs" 
              className="inline-flex items-center text-white hover:text-primary-300 mb-4 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Programs
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {program.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-sm md:text-base">
              {program.location && (
                <span className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {program.location}
                </span>
              )}
              {program.date && (
                <span className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {program.date}
                </span>
              )}
              {program.impact && (
                <span className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  {program.impact}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="prose max-w-none"
              >
                <h2>About This Program</h2>
                <p className="text-lg text-gray-700">
                  {program.fullDescription || program.description}
                </p>

                {program.details && program.details.length > 0 && (
                  <>
                    <h3>Program Highlights</h3>
                    <ul className="space-y-2">
                      {program.details.map((detail, index) => (
                        <li key={index} className="flex">
                          <span className="text-primary-600 mr-2">•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </motion.div>

              {/* Events Section */}
              {program.events && program.events.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mt-16"
                >
                  <h2 className="text-3xl font-bold mb-8">Program Events</h2>
                  <Events events={program.events} />
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md sticky top-6"
              >
                <h3 className="text-xl font-bold mb-4">Quick Info</h3>
                
                {program.category && (
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-500">Category</h4>
                    <p className="capitalize">{program.category}</p>
                  </div>
                )}

                {program.year && (
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-500">Year</h4>
                    <p>{program.year}</p>
                  </div>
                )}

                {program.budget && (
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-500">Budget</h4>
                    <p>{program.budget}</p>
                  </div>
                )}

                {program.objectives && program.objectives.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-500 mb-2">Objectives</h4>
                    <ul className="space-y-2">
                      {program.objectives.map((objective, index) => (
                        <li key={index} className="flex text-sm">
                          <span className="text-primary-600 mr-2">•</span>
                          {objective}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {program.sponsors && program.sponsors.length > 0 && (
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-2">Sponsors & Partners</h4>
                    <div className="flex flex-wrap gap-2">
                      {program.sponsors.map((sponsor, index) => (
                        <span 
                          key={index}
                          className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
                        >
                          {sponsor}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
