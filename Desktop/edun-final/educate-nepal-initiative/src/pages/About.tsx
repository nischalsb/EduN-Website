import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Target, Globe, Heart, Lightbulb } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
} as const;

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
    { year: "2016", event: "Founded ENI with first school partnership in Dolakha" },
    { year: "2017", event: "Launched teacher training program, trained first 25 educators" },
    { year: "2018", event: "Expanded to 5 districts, built first computer lab" },
    { year: "2019", event: "Reached 1,000 students, established scholarship program" },
    { year: "2020", event: "Adapted to COVID-19 with remote learning initiatives" },
    { year: "2021", event: "Launched digital literacy program across 15 schools" },
    { year: "2022", event: "Opened community learning centers in 10 villages" },
    { year: "2023", event: "Reached 2,000 students, expanded to 8 districts" },
    { year: "2024", event: "Celebrating 2,500+ students impacted and 45 schools supported" }
  ];

  const partners = [
    { name: "Morgridge Center for Public Service", logo: "/images/morgridge.png" },
    { name: "Budhanilkantha School", logo: "/images/bnks.png" },
    { name: "Merosikshal", logo: "/images/merosiksha.png" },
  
  ];


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <section className="relative h-64 md:h-80 bg-gradient-to-r from-primary-600 to-primary-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')"
          }}
        ></div>
        <div className="absolute inset-0 bg-primary-600/70"></div>
        <div className="relative container-custom h-full flex items-center">
          <div className="text-left max-w-2xl">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              About Us
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-white/90 drop-shadow-md"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              Learn about our mission, values, and the dedicated team working to transform education in rural Nepal.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                To empower rural communities in Nepal through quality education, sustainable 
                development, and community-driven initiatives that create lasting positive change.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We believe that education is the most powerful tool for breaking the cycle of 
                poverty and creating opportunities for individuals and entire communities to thrive.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-lg text-gray-600">
                A Nepal where every child, regardless of their geographic location or economic 
                background, has access to quality education and the opportunity to reach their full potential.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Students in Nepal"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and shape how we approach 
              our work in communities across Nepal.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={value.title}
                  className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <IconComponent className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>


      {/* Timeline */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From a small initiative to a recognized organization - see how we've grown 
              and the milestones we've achieved along the way.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-primary-200"></div>
              
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
                    <div className="bg-white p-6 rounded-lg shadow-lg ml-12 md:ml-0">
                      <div className="text-primary-600 font-bold text-lg mb-2">
                        {milestone.year}
                      </div>
                      <p className="text-gray-700">
                        {milestone.event}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      

      {/* CTA Section */}
      <section className="bg-primary-600 text-white section-padding">
        <div className="container-custom text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Join Our Mission
          </motion.h2>
          <motion.p
            className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Whether you want to volunteer, donate, or partner with us, there are many 
            ways to be part of transforming education in Nepal.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <a href="/get-involved" className="inline-block px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white font-medium rounded-md transition-colors duration-200">
              Get Involved
            </a>
            <a href="/contact" className="inline-block px-6 py-3 bg-white text-primary-600 hover:bg-gray-50 font-medium rounded-md border border-gray-300 transition-colors duration-200">
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
