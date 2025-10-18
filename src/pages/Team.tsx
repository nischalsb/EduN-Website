import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Mail, MapPin, X, PenTool, Book, School, GraduationCap, BookOpen } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin: string;
  email: string;
  location: string;
}

const Team: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  
  const handleMemberClick = (member: TeamMember) => {
    setSelectedMember(member);
  };
  
  const closeModal = () => {
    setSelectedMember(null);
  };
  const teamMembers = [
    {
      name: "Dhirendra Acharya",
      role: "President",
      bio: "President of the Education Nepal Initiative (EduN) with a strong academic background including an MBA at Global College. His educational journey began at Xavier International School, followed by studies at Caribbean College and Brooklyn College, culminating in a Bachelor's in Social Work (B.S.W.). Has served as a member secretary under the Ministry of Youth and Sports' Youth and Self-Employment Fund.",
      image: "/images/president.jpg",
      linkedin: "#",
      email: "dhirendra@edunep.org",
      location: "Kathmandu, Nepal"
    },
    {
      name: "Tilak Dhital",
      role: "Founder, Vice President",
      bio: "Emerging leader in education, finance, and entrepreneurship with over six years of experience. Co-founder and Financial Head at Digital Learning Nepal - MeroSiksha. Certified ICT Smart Board Trainer and co-founder of Budhanilkantha Education Services. Recipient of the Global Students Entrepreneurship Award 2023 and recognized as an Emerging Leader in the Nepal Youth Young Entrepreneurship Award 2024.",
      image: "/images/tilak_new.jpg",
      linkedin: "#",
      email: "tilak@edunep.org",
      location: "Kathmandu, Nepal"
    },
    {
      name: "Nischal Singh Bista",
      role: "Program Coordinator",
      bio: "A social, curious, and ambitious individual who has learned about the reality and needs of society through this organization. Committed to ensuring programs are well-planned, executed effectively, and continuously improved for success. Enjoys being part of a platform that showcases work and provides abundant learning opportunities.",
      image: "/images/nischal.jpeg",
      linkedin: "#",
      email: "nischal@edunep.org",
      location: "Kathmandu, Nepal"
    },
    {
      name: "Bibhas Parajuli",
      role: "Joint Secretary",
      bio: "Aspiring student of Bachelors in Development Studies (BDevS) at National College. Has been involved in social and development work for the past 3 years, with a focus on sustainable development, quality education, and research. Passionate about creating positive change through education and community development initiatives.",
      image: "/images/logo.png",
      linkedin: "#",
      email: "bibhas@edunep.org",
      location: "Kathmandu, Nepal"
    },
    {
      name: "Kussum Ghimire",
      role: "Executive Member",
      bio: "An upbeat, self-motivated team player with excellent communication skills and a passion for social work. Enjoys reading, writing, singing, and sketching. Has worked in the field of menstrual health awareness and organized various fundraising, blood donation, and educational events. Committed to helping young minds grow through educational and social empowerment programs.",
      image: "/images/logo.png",
      linkedin: "#",
      email: "kussum@edunep.org",
      location: "Kathmandu, Nepal"
    },
    {
      name: "Sulav Khanal",
      role: "Executive Member",
      bio: "Visionary leader dedicated to transforming education through digital technology. Co-Founder of MeroSiksha, having trained over 5,000 students and teachers in digital learning practices. Led a successful $8,000 fundraising campaign for a government school in Rimuwa, Gulmi, and spearheaded programs to support widows in western Nepal. Passionate public speaker on leadership and digital education.",
      image: "/images/sulav.jpg",
      linkedin: "#",
      email: "sulav@edunep.org",
      location: "Kathmandu, Nepal"
    },
    {
      name: "Birendra Madai",
      role: "Founder, Executive Member",
      bio: "Founding president of Educate Nepal Initiative, established in 2016. Led the organization for two consecutive terms, during which he helped conduct national-level talk shows, book donation programs, and established an e-library in Jajarkot district. Played a key role in building the organization's identity and mission to spread knowledge across Nepal.",
      image: "/images/birendra.webp",
      linkedin: "#",
      email: "birendra@edunep.org",
      location: "Kathmandu, Nepal"
    },
    {
      name: "Sandesh Paudel",
      role: "Treasurer",
      bio: "Energetic and ambitious entrepreneur experienced in operations, finance, and management. Graduate of Budhanilkantha School and currently studying at Tribhuvan University. Effective communicator and motivator with 3+ years of experience in social and educational development. Committed to leveraging team strengths to achieve organizational goals and handle challenging situations under pressure.",
      image: "/images/sandesh.webp",
      linkedin: "#",
      email: "sandesh@edunep.org",
      location: "Kathmandu, Nepal"
    }
  ];


  // const fadeInUp = {
  //   initial: { opacity: 0, y: 60 },
  //   animate: { opacity: 1, y: 0 },
  //   transition: { duration: 0.6 }
  // };

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
              Our Team
            </div>
            <h1 className="text-4xl md:text-6xl font-light text-black mb-8 leading-tight">
              Meet Our People
            </h1>
            <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">
              Meet the passionate individuals driving change in Nepal's education sector.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Team */}
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
              Our Team
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-black mb-6">
              Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light">
              Passionate individuals working together to create lasting change in education across Nepal.
            </p>
          </motion.div>

          {/* Leadership Row - Dhirendra and Tilak */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16 max-w-4xl mx-auto">
            {teamMembers.slice(0, 2).map((member, index) => (
              <motion.div
                key={member.name}
                className="flex flex-col items-center text-center cursor-pointer group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => handleMemberClick(member)}
                whileHover={{ y: -5 }}
              >
                <div className="relative mb-8 overflow-hidden w-48 h-48 rounded-full group-hover:shadow-lg transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="px-4">
                  <h3 className="text-2xl font-light text-black mb-2">{member.name}</h3>
                  <p className="text-gray-600 font-medium">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Other Team Members - Max 3 per row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teamMembers.slice(2).map((member, index) => (
              <TeamMemberCard 
                key={member.name} 
                member={member} 
                index={index + 2} 
                onClick={handleMemberClick} 
              />
            ))}
          </div>

          {/* Member Modal */}
          <AnimatePresence>
            {selectedMember && (
              <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                <motion.div 
                  className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <button 
                    onClick={closeModal}
                    className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X className="h-6 w-6" />
                  </button>
                  
                  <div className="p-8">
                    <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                      <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0 border-4 border-gray-200">
                        <img 
                          src={selectedMember.image} 
                          alt={selectedMember.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">
                          {selectedMember.name}
                        </h3>
                        <p className="text-gray-600 font-medium mb-3">
                          {selectedMember.role}
                        </p>
                        <div className="flex items-center justify-center md:justify-start text-gray-500 text-sm mb-4">
                          <MapPin className="h-4 w-4 mr-1" />
                          {selectedMember.location}
                        </div>
                        <div className="flex space-x-4 justify-center md:justify-start">
                          <a
                            href={`mailto:${selectedMember.email}`}
                            className="text-gray-400 hover:text-gray-600 transition-colors"
                            title="Email"
                          >
                            <Mail className="h-5 w-5" />
                          </a>
                          <a
                            href={selectedMember.linkedin}
                            className="text-gray-400 hover:text-gray-600 transition-colors"
                            title="LinkedIn"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Linkedin className="h-5 w-5" />
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    <div className="prose max-w-none">
                      <p className="text-gray-700">
                        {selectedMember.bio}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>

      

      {/* Join Our Team */}
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
              Join Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're always looking for passionate individuals who share our vision 
              of transforming education in Nepal.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Full-time Positions",
                description: "Join our core team and make education your career while creating lasting impact.",
                cta: "View Open Positions"
              },
              {
                title: "Volunteer Opportunities",
                description: "Contribute your skills and time to support our programs and initiatives.",
                cta: "Become a Volunteer"
              },
              {
                title: "Internships",
                description: "Gain valuable experience while contributing to meaningful projects in Nepal.",
                cta: "Apply for Internship"
              }
            ].map((option, index) => (
              <motion.div
                key={option.title}
                className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {option.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {option.description}
                </p>
                <button className="btn-primary">
                  {option.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-600 text-white section-padding">
        <div className="container-custom text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Make a Difference?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Whether you want to join our team, volunteer, or support our mission, 
            there are many ways to be part of transforming education in Nepal.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a href="/get-involved" className="bg-white text-black font-medium px-8 py-4 transition-all duration-300 hover:bg-gray-100 hover:scale-105">
              Get Involved
            </a>
            <a href="/contact" className="border border-white text-white font-medium px-8 py-4 transition-all duration-300 hover:bg-white hover:text-black hover:scale-105">
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Team Member Card Component
const TeamMemberCard: React.FC<{ 
  member: TeamMember; 
  index: number;
  onClick: (member: TeamMember) => void;
}> = ({ member, index, onClick }) => {
  // Members who should have circular borders
  const circularBorderMembers = ["Nischal Singh Bista", "Sulav Khanal", "Sandesh Paudel", "Birendra Madai"];
  const hasCircularBorder = circularBorderMembers.includes(member.name);

  return (
    <motion.div
      className="text-center cursor-pointer group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onClick={() => onClick(member)}
      whileHover={{ y: -5 }}
    >
      <div className={`relative mb-6 overflow-hidden w-32 h-32 mx-auto group-hover:border-gray-400 transition-all duration-300 ${
        hasCircularBorder ? 'rounded-full border-2 border-gray-300' : ''
      }`}>
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="font-light text-black mb-1">{member.name}</h3>
      <p className="text-gray-600 text-sm font-medium">{member.role}</p>
    </motion.div>
  );
};

export default Team;
