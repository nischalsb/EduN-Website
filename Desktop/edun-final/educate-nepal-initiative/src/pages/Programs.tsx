import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Users, BookOpen, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Program } from '../types/program';

const programsData: Program[] = [
    {
      id: 1,
      title: "Youth Empowerment Summit",
      description: "Annual youth summit focusing on leadership, opportunities, and social change in Nepal.",
      icon: Users,
      impact: "500+ youth participants annually",
      category: "leadership",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      details: [
        "Keynote speeches from industry leaders",
        "Panel discussions on youth opportunities",
        "Networking sessions with professionals",
        "Workshops on skill development"
      ],
      year: "2016-Present"
    },
    {
      id: 2,
      title: "E-Library & Book Donation Initiative",
      description: "Established a comprehensive learning center at Jana Priya Primary School, Barekot, Jajarkot, providing access to technology and educational resources.",
      icon: BookOpen,
      impact: "2000+ books and 5 computers donated",
      category: "education",
      image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      details: [
        "Donated 2000+ books and 5 computers with internet access",
        "Established a fully functional library with digital resources",
        "Conducted computer and internet literacy training",
        "Equipped with modern learning facilities and materials"
      ],
      year: "2018",
      fullDescription: "Education liberates the intellect, unlocks the imagination and is fundamental for self-respect. It is the key to prosperity and opens a world of opportunities, making it possible for each of us to contribute to a progressive, healthy society. Learning benefits every human being and should be available to all.\n\nA quality learning environment includes adequate facilities such as books, studying materials, computers, access to the internet and access to vast knowledge. It includes reasonable policies that promote and ensure a good quality of education. A quality learning environment is a place where children are free to learn, where they have learning resources and when children are excited about and proud of learning.",
      location: "Jana Priya Primary School, Barekot, Jajarkot",
      date: "May 24-26, 2018",
      budget: "NPR 300,000",
      sponsors: [
        "Everest Beer",
        "Waiba Infratech Pvt. Ltd.",
        "Nepal Bouddha Sewa Kendra",
        "Onstore Machinery",
        "Tripureshwor Conductor Udhyog",
        "Himal Nepal"
      ],
      events: [
        {
          id: 'library-inauguration',
          title: 'Library Inauguration Ceremony',
          description: 'Grand opening of the new library facility with local officials and community members in attendance.',
          date: 'May 24, 2018',
          images: [
            './public/images/Library Project- Jajarkot/1.webp',
            './public/images/Library Project- Jajarkot/2.webp',
            './public/images/Library Project- Jajarkot/3.webp'
          ]
        },
        {
          id: 'book-distribution',
          title: 'Book Distribution Day',
          description: 'Distribution of over 2000 books to the school library and students.',
          date: 'May 25, 2018',
          images: [
            '/images/Library Project- Jajarkot/4.webp',
            '/images/Library Project- Jajarkot/5.webp'
          ]
        },
        {
          id: 'computer-lab',
          title: 'Computer Lab Setup',
          description: 'Installation and setup of the new computer lab with internet connectivity.',
          date: 'May 26, 2018',
          images: [
            '/images/Library Project- Jajarkot/6.webp',
            '/images/Library Project- Jajarkot/7.webp',
            '/images/Library Project- Jajarkot/8.webp'
          ]
        }
      ],
      objectives: [
        "To broaden the knowledge base of the students by establishing a library",
        "To provide students with access to the internet and digital resources",
        "To enhance student confidence and interaction skills",
        "To help students realize the importance of education",
        "To motivate youth involvement in social service"
      ]
    },
    {
      id: 3,
      title: "Book Donation Drive",
      description: "Collecting and distributing books to schools and community centers across Nepal.",
      icon: BookOpen,
      impact: "10,000+ books donated",
      category: "education",
      image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      details: [
        "Textbooks and reference materials",
        "Fiction and non-fiction books",
        "Educational resources for all ages",
        "Library setup support"
      ],
      year: "2020-Present"
    },
    {
      id: 4,
      title: "Share Your Story Initiative",
      description: "A platform for youth to share their experiences and inspire others through storytelling.",
      icon: Users,
      impact: "50+ stories shared",
      category: "community",
      image: "https://images.unsplash.com/photo-1505373876331-ff89baa8f9d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      details: [
        "Storytelling workshops",
        "Digital publication platform",
        "Community sharing events",
        "Mentorship opportunities"
      ],
      year: "2022-Present"
    },
    {
      id: 5,
      title: "Career Guidance Program",
      description: "Helping Nepali youth explore career opportunities and develop necessary skills.",
      icon: GraduationCap,
      impact: "1000+ students guided",
      category: "career",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      details: [
        "Career counseling sessions",
        "Skill development workshops",
        "Industry expert interactions",
        "Resume and interview preparation"
      ],
      year: "Ongoing"
    },
    {
      id: 6,
      title: "Digital Literacy Program",
      description: "Empowering youth with essential digital skills for the modern workforce.",
      icon: BookOpen,
      impact: "500+ youth trained",
      category: "education",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      details: [
        "Basic computer skills training",
        "Internet and social media literacy",
        "Digital tools and software training",
        "Online safety and security"
      ],
      year: "Ongoing"
    }
  ];

const Programs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-64 md:h-80 w-full overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1523050853548-9860dacd1d1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80)',
            backgroundPosition: 'center 30%'
          }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-primary-600/70"></div>
          
          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="container-custom text-center text-white">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl mx-auto"
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-2xl shadow-black/50">
                  Our Programs
                </h1>
                <p className="text-xl md:text-2xl font-medium drop-shadow-lg shadow-black/50">
                  Comprehensive educational initiatives designed to create lasting impact 
                  in rural communities across Nepal.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programsData.map((program: Program) => (
              <Link 
                to={`/programs/${program.id}`}
                key={program.id}
                className="block h-full"
              >
                <motion.div
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative h-64">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="bg-white p-3 rounded-full shadow-lg">
                        <program.icon className="h-6 w-6 text-primary-600" />
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {program.impact}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{program.title}</h3>
                    <p className="text-gray-600 mb-4 flex-grow">{program.description}</p>
                    <div className="flex items-center text-sm text-primary-600 font-medium mt-auto">
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                    <ul className="mt-4 space-y-2">
                      {program.details.slice(0, 2).map((detail: string, idx: number) => (
                        <li key={idx} className="text-gray-600 text-sm flex items-start">
                          <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Program Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our programs have created measurable change across rural Nepal, 
              touching thousands of lives and building stronger communities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "2,500+", label: "Students Reached", color: "text-blue-600" },
              { number: "10+", label: "Teachers Trained", color: "text-green-600" },
              { number: "10+", label: "Schools Improved", color: "text-purple-600" },
              { number: "5+", label: "Communities Served", color: "text-orange-600" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                  {stat.number}
                </div>
                <div className="text-gray-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white section-padding">
        <div className="container-custom text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Support Our Programs
          </motion.h2>
          <motion.p
            className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Your contribution directly funds these life-changing programs. 
            Help us expand our reach and create even greater impact.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a href="/donate" className="btn-primary bg-accent-500 hover:bg-accent-600 border-none">
              Donate Now
            </a>
            <a href="/get-involved" className="btn-secondary bg-white text-primary-600 hover:bg-gray-50">
              Get Involved
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Export the programs array with proper typing
const programs: Program[] = programsData;
export { programs };

export default Programs;
