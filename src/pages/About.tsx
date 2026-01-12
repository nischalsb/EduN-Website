import React from 'react';
import { motion } from 'framer-motion';
import { Target, Globe, Heart, Lightbulb, ArrowRight, PenTool, Book, School, GraduationCap, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

// const fadeInUp = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6 }
//   }
// } as const;


const About: React.FC = () => {
  

  const values = [
    {
      icon: Target,
      title: "Impact-Driven",
      description: "Every program is designed with measurable outcomes and sustainable change in mind."
    },
    {
      icon: Heart,
      title: "Community-Centered",
      description: "We work with communities, not for them, ensuring local ownership and cultural sensitivity."
    },
    {
      icon: Globe,
      title: "Transparency",
      description: "Open reporting on all activities, finances, and outcomes. Accountability is our priority."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Embracing modern solutions while respecting traditional values and local wisdom."
    }
  ];

  const milestones = [
    { year: "2016", event: "Establishishment of the Organization" },
    { year: "2016", event: "First Talkshow hosted- Nepal ma awasar nai chaina?" },
    { year: "2017", event: "Second series of Talkshow hosted- Nepal ma awasar nai china?" },
    { year: "2017", event: "Library Establishment at Rukum" },
    { year: "2018", event: "Library and Computer Establishment at Jajarkot" },
    { year: "2018", event: "Talkshow hosted- K Nepal ma Bhrastachar nai chaina?" },
    { year: "2019", event: "Library Establishment at Dadeldhura" },
    { year: "2020", event: "Gossip Stories- I" },
    { year: "2021", event: "Gossip Stories- II" },
    { year: "2022", event: "Gossip Stories- II" },
    { year: "2023", event: "Gossip Stories- III" },
    { year: "2024", event: "Digital Literacy across different Rural Municipalities in Nepal in collaboration with MeroSiksha" },
    { year: "2025", event: "IT project at Kohalpur Municipality" }
  ];

  // const partners = [
  //   { name: "Morgridge Center for Public Service", logo: "/images/morgridge.png" },
  //   { name: "Budhanilkantha School", logo: "/images/bnks.png" },
  //   { name: "Merosikshal", logo: "/images/merosiksha.png" },
  // ];


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
              About Us
            </div>
            <h1 className="text-4xl md:text-6xl font-light text-black mb-8 leading-tight">
              Our Story
            </h1>
            <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">
              Learn about our mission, values, and the dedicated team working to transform education in rural Nepal.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-sm tracking-widest uppercase text-gray-500 mb-4">
                Our Mission
              </div>
              <h2 className="text-4xl md:text-5xl font-light text-black mb-8 leading-tight">
                Empowering Communities Through Education
              </h2>
              <div className="space-y-6 mb-8">
                <p className="text-lg text-gray-600 font-light leading-relaxed">
                  To empower rural communities in Nepal through quality education, sustainable 
                  development, and community-driven initiatives that create lasting positive change.
                </p>
                <p className="text-lg text-gray-600 font-light leading-relaxed">
                  We believe that education is the most powerful tool for breaking the cycle of 
                  poverty and creating opportunities for individuals and entire communities to thrive.
                </p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-2xl font-light text-black mb-4">Our Vision</h3>
                <p className="text-lg text-gray-600 font-light leading-relaxed">
                  A Nepal where every child, regardless of their geographic location or economic 
                  background, has access to quality education and the opportunity to reach their full potential.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Students in Nepal"
                className="w-full h-96 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Legal & Transparency */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-sm tracking-widest uppercase text-gray-500 mb-4">
                Our Legal Status & Registration
              </div>

              <h2 className="text-4xl md:text-5xl font-light text-black mb-0 leading-tight">
                Committed to Accountability
              </h2>
              <h2 className="text-4xl md:text-5xl font-light text-black mt-0 leading-tight">
                and Compliance
              </h2>

              <div className="space-y-8">
                <p className="text-lg text-gray-600 font-light mt-8 leading-relaxed">
                  EduNep is a legally registered and compliant non-profit organization in Nepal, registered with relevant government authorities. Below are our official registration details:
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-black">District Administrative Office</h3>
                    <p className="text-gray-600">Registration no: 681</p>
                    <p className="text-gray-600">Registration date: 2073/01/13 B.S. (25 April 2016 A.D.)</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-black">Budhanilkantha Municipality</h3>
                    <p className="text-gray-600">Registration no: 394</p>
                    <p className="text-gray-600">Registration date: 2077/11/17 B.S. (1 March 2021 A.D.)</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-black">Social Welfare Council, Nepal</h3>
                    <p className="text-gray-600">Registration no: 51532</p>
                    <p className="text-gray-600">Registration date: 2077/04/13 B.S. (28 July 2020 A.D.)</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-black">PAN</h3>
                    <p className="text-gray-600">PAN no: 613227090</p>
                  </div>
                </div>

                <p className="text-lg text-gray-600 font-light leading-relaxed">
                  Registration certificates and compliance documents can be shared upon request.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-sm tracking-widest uppercase text-gray-500 mb-4">
              Our Values
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-black mb-6">
              What Drives Us
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light">
              These core values guide everything we do and shape how we approach 
              our work in communities across Nepal.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={value.title}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                          <div className="inline-flex items-center justify-center w-16 h-16 mb-6">
                            <IconComponent className="h-8 w-8 text-gray-600" />
                          </div>
                  <h3 className="text-xl font-light text-black mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>


      {/* Timeline */}
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
              Our Journey
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-black mb-6">
              Milestones Achieved
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light">
              From a small initiative to a recognized organization - see how we've grown 
              and the milestones we've achieved along the way.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-300"></div>
              
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  className={`relative flex items-center mb-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="bg-white border border-gray-200 p-6 ml-12 md:ml-0">
                      <div className="text-black font-medium text-lg mb-3">
                        {milestone.year}
                      </div>
                      <p className="text-gray-600 font-light leading-relaxed">
                        {milestone.event}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-black rounded-full border-4 border-white"></div>
                </motion.div>
              ))}
            </div>
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
            Join Our Mission
          </motion.div>
          
          <motion.h2
            className="text-4xl md:text-6xl font-light mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Be Part of the Change
          </motion.h2>
          
          <motion.p
            className="text-lg md:text-xl mb-12 text-gray-300 max-w-3xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Whether you want to volunteer, donate, or partner with us, there are many 
            ways to be part of transforming education in Nepal.
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
                to="/get-involved" 
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setTimeout(() => {
                    window.location.href = '/get-involved';
                  }, 100);
                }}
                className="group inline-flex items-center gap-3 bg-white text-black font-medium px-8 py-4 transition-all duration-300 hover:bg-gray-100"
              >
                <span>Get Involved</span>
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
                to="/contact" 
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setTimeout(() => {
                    window.location.href = '/contact';
                  }, 100);
                }}
                className="group inline-flex items-center gap-3 border border-white text-white font-medium px-8 py-4 transition-all duration-300 hover:bg-white hover:text-black"
              >
                <span>Contact Us</span>
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

export default About;
