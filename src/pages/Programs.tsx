import React from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, ArrowRight, Calendar, MapPin, PenTool, Book, School, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Program } from '../types/program';

const programsData: Program[] = [
    {
      id: 1,
      title: "Nepal ma Abasar nai xaina - NMAC",
      description: "A comprehensive youth empowerment program focusing on opportunities and leadership development in Nepal.",
      icon: Users,
      impact: "500+ youth participants annually",
      category: "leadership",
      image: "/EduN-Website/images/1. nmbc- Nepal ma Abasar nai xaina/nmac11.webp",
      details: [
        "Keynote speeches from industry leaders",
        "Panel discussions on youth opportunities",
        "Networking sessions with professionals",
        "Workshops on skill development"
      ],
      year: "2016-Present",
      fullDescription: "Nepal ma Abasar nai xaina (NMAC) is our flagship youth empowerment program that brings together young leaders from across Nepal to discuss opportunities, challenges, and solutions for the country's development. The program features interactive workshops, panel discussions, and networking opportunities.",
      location: "Kathmandu, Nepal",
      date: "Annual Event",
      events: [
        {
          id: 'nmac-2016',
          title: 'NMAC 2016 - Inaugural Event',
          description: 'The first edition of Nepal ma Abasar nai xaina, bringing together youth leaders from across the country.',
          date: '2016',
          images: [
            '/images/1. nmbc- Nepal ma Abasar nai xaina/nmac11.webp',
            '/images/1. nmbc- Nepal ma Abasar nai xaina/nmac12.webp',
            '/images/1. nmbc- Nepal ma Abasar nai xaina/nmac13.webp'
          ]
        },
        {
          id: 'nmac-2017',
          title: 'NMAC 2017 - Expanding Reach',
          description: 'Second edition with increased participation and expanded program offerings.',
          date: '2017',
          images: [
            '/images/1. nmbc- Nepal ma Abasar nai xaina/nmac21.webp',
            '/images/1. nmbc- Nepal ma Abasar nai xaina/nmac22.webp',
            '/images/1. nmbc- Nepal ma Abasar nai xaina/nmac23.webp',
            '/images/1. nmbc- Nepal ma Abasar nai xaina/nmac24.webp'
          ]
        }
      ]
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
            '/images/Library Project- Jajarkot/1.webp',
            '/images/Library Project- Jajarkot/2.webp',
            '/images/Library Project- Jajarkot/3.webp'
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
      title: "Nepal ma Abasar nai xaina - NMBC",
      description: "A follow-up youth empowerment program building on the success of NMAC, focusing on community building and social change.",
      icon: Users,
      impact: "300+ youth participants",
      category: "leadership",
      image: "/images/2. nmbc- Nepal ma Abasar nai xaina/nmbc1.webp",
      details: [
        "Community building workshops",
        "Social change initiatives",
        "Youth leadership development",
        "Networking and collaboration"
      ],
      year: "2017-2018",
      fullDescription: "Nepal ma Abasar nai xaina - NMBC (Nepal ma Abasar nai xaina Community) was a continuation of our youth empowerment efforts, focusing on building stronger communities and fostering social change through youth engagement.",
      location: "Kathmandu, Nepal",
      date: "2017-2018",
      events: [
        {
          id: 'nmbc-2017',
          title: 'NMBC 2017 - Community Building',
          description: 'Focus on community building and youth engagement in social change.',
          date: '2017',
          images: [
            '/images/2. nmbc- Nepal ma Abasar nai xaina/nmbc1.webp',
            '/images/2. nmbc- Nepal ma Abasar nai xaina/nmbc2.webp',
            '/images/2. nmbc- Nepal ma Abasar nai xaina/nmbc3.webp',
            '/images/2. nmbc- Nepal ma Abasar nai xaina/nmbc4.webp'
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Library Project - Dadeldhura",
      description: "Established a comprehensive learning center in Dadeldhura, providing access to books, technology, and educational resources.",
      icon: BookOpen,
      impact: "1500+ books and 3 computers donated",
      category: "education",
      image: "/images/Library Project Dadeldhura/relib1.webp",
      details: [
        "Donated 1500+ books and 3 computers",
        "Established modern library facility",
        "Conducted digital literacy training",
        "Provided educational resources and materials"
      ],
      year: "2019",
      fullDescription: "The Library Project in Dadeldhura was another successful initiative to improve educational infrastructure in rural Nepal. We established a comprehensive learning center with modern facilities and resources.",
      location: "Dadeldhura, Nepal",
      date: "2019",
      events: [
        {
          id: 'dadeldhura-setup',
          title: 'Library Setup and Inauguration',
          description: 'Setting up the new library facility with books, computers, and educational resources.',
          date: '2019',
          images: [
            '/images/Library Project Dadeldhura/relib1.webp',
            '/images/Library Project Dadeldhura/relib2.webp',
            '/images/Library Project Dadeldhura/relib3.webp',
            '/images/Library Project Dadeldhura/relib4.webp'
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Gossip Stories Initiative",
      description: "A storytelling platform that shares inspiring stories and experiences from youth across Nepal, promoting positive narratives and community building.",
      icon: Users,
      impact: "100+ stories shared",
      category: "community",
      image: "/images/Gossip Stories /gs1.webp",
      details: [
        "Story collection and curation",
        "Digital storytelling platform",
        "Community sharing events",
        "Youth voice amplification"
      ],
      year: "2020-Present",
      fullDescription: "Gossip Stories is our innovative storytelling initiative that captures and shares the inspiring experiences of young people across Nepal. Through this platform, we amplify youth voices and create positive narratives that inspire others.",
      location: "Various locations across Nepal",
      date: "2020-Present",
      events: [
        {
          id: 'gossip-stories-launch',
          title: 'Gossip Stories Launch Event',
          description: 'Launch of the storytelling platform with community sharing and story collection.',
          date: '2020',
          images: [
            '/images/Gossip Stories /gs1.webp',
            '/images/Gossip Stories /gs2.webp',
            '/images/Gossip Stories /gs3.webp',
            '/images/Gossip Stories /gs4.webp',
            '/images/Gossip Stories /gs5.webp'
          ]
        }
      ]
    },
    {
      id: 6,
      title: "Library Project - Rukum",
      description: "Established a learning center in Rukum, providing educational resources and technology access to the local community.",
      icon: BookOpen,
      impact: "1000+ books and 2 computers donated",
      category: "education",
      image: "/images/Library Project- Rukum/relib5.webp",
      details: [
        "Donated 1000+ books and 2 computers",
        "Established community learning center",
        "Conducted educational workshops",
        "Provided digital literacy training"
      ],
      year: "2021",
      fullDescription: "The Library Project in Rukum was our initiative to bring educational resources and technology to another rural community in Nepal. We established a learning center that serves as a hub for education and community development.",
      location: "Rukum, Nepal",
      date: "2021",
      events: [
        {
          id: 'rukum-setup',
          title: 'Library Setup and Community Engagement',
          description: 'Setting up the learning center and engaging with the local community.',
          date: '2021',
          images: [
            '/images/Library Project- Rukum/1a.webp',
            '/images/Library Project- Rukum/relib5.webp'
          ]
        }
      ]
    }
  ];

const Programs: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden pt-16 pb-16">
        {/* Floating Animated Icons */}
        <motion.div
          className="absolute top-20 left-10 text-gray-300"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          <BookOpen size={32} />
        </motion.div>

        <motion.div
          className="absolute top-32 right-16 text-gray-300"
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -3, 0]
          }}
          transition={{ 
            duration: 3.5, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 0.5
          }}
        >
          <PenTool size={28} />
        </motion.div>

        <motion.div
          className="absolute top-40 left-1/4 text-gray-300"
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 2, 0]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
        >
          <Book size={24} />
        </motion.div>

        <motion.div
          className="absolute bottom-40 left-20 text-gray-300"
          animate={{ 
            y: [0, 12, 0],
            rotate: [0, -4, 0]
          }}
          transition={{ 
            duration: 4.5, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1.5
          }}
        >
          <School size={30} />
        </motion.div>

        <motion.div
          className="absolute bottom-32 right-1/4 text-gray-300"
          animate={{ 
            y: [0, -8, 0],
            rotate: [0, 3, 0]
          }}
          transition={{ 
            duration: 3.8, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 0.8
          }}
        >
          <GraduationCap size={26} />
        </motion.div>

        <motion.div
          className="absolute top-1/2 right-10 text-gray-300"
          animate={{ 
            y: [0, 18, 0],
            rotate: [0, -2, 0]
          }}
          transition={{ 
            duration: 4.2, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
        >
          <BookOpen size={22} />
        </motion.div>

        <div className="container-custom">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-sm tracking-widest uppercase text-gray-500 mb-4">
              Our Programs
            </div>
            <h1 className="text-4xl md:text-6xl font-light text-black mb-8 leading-tight">
              Educational Initiatives
            </h1>
            <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">
              Comprehensive programs designed to create lasting impact 
              in rural communities across Nepal.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {programsData.map((program: Program) => (
              <Link 
                to={`/programs/${program.id}`}
                key={program.id}
                className="block h-full"
              >
                <motion.div
                  className="bg-white border border-gray-200 overflow-hidden h-full flex flex-col transition-all duration-300 hover:border-gray-300"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="relative h-64">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                            <div className="bg-white p-3">
                              <program.icon className="h-6 w-6 text-gray-600" />
                            </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-black text-white px-3 py-1 text-sm font-medium">
                        {program.impact}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8 flex-grow flex flex-col">
                    <h3 className="text-xl font-light text-black mb-4">{program.title}</h3>
                    <p className="text-gray-600 mb-6 flex-grow font-light leading-relaxed">{program.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar size={16} className="mr-2" />
                        {program.year}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin size={16} className="mr-2" />
                        {program.location}
                      </div>
                    </div>
                    
                    <div className="flex items-center text-sm text-black font-medium mt-auto group">
                      Learn more 
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
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
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-sm tracking-widest uppercase text-gray-500 mb-4">
              Program Impact
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-black mb-6">
              Measurable Change
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light">
              Our programs have created measurable change across rural Nepal, 
              touching thousands of lives and building stronger communities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { number: "2,500+", label: "Students Reached" },
              { number: "10+", label: "Teachers Trained" },
              { number: "10+", label: "Schools Improved" },
              { number: "5+", label: "Communities Served" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl font-light text-black mb-3">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-500 uppercase tracking-wider font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white section-padding">
        <div className="container-custom text-center">
          <motion.div
            className="text-sm tracking-widest uppercase text-gray-400 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Support Our Programs
          </motion.div>
          
          <motion.h2
            className="text-4xl md:text-6xl font-light mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Help Us Expand
          </motion.h2>
          
          <motion.p
            className="text-lg md:text-xl mb-12 text-gray-300 max-w-3xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Your contribution directly funds these life-changing programs. 
            Help us expand our reach and create even greater impact.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link 
                to="/donate" 
                className="group inline-flex items-center gap-3 bg-white text-black font-medium px-8 py-4 transition-all duration-300 hover:bg-gray-100"
              >
                <span>Donate Now</span>
                <ArrowRight 
                  size={16} 
                  className="group-hover:translate-x-1 transition-transform duration-300" 
                />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link 
                to="/get-involved" 
                className="group inline-flex items-center gap-3 border border-white text-white font-medium px-8 py-4 transition-all duration-300 hover:bg-white hover:text-black"
              >
                <span>Get Involved</span>
                <ArrowRight 
                  size={16} 
                  className="group-hover:translate-x-1 transition-transform duration-300" 
                />
              </Link>
            </motion.div>
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
