import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Mail, MapPin, X } from 'lucide-react';

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
  const leadership = [
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
    }
  ];

  const teamMembers = [
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

  const advisors = [
    {
      name: "Prof. Ram Khadka",
      role: "Education Policy Advisor",
      bio: "Former Secretary of Education, Government of Nepal. 30+ years in education policy and administration.",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Dr. Jennifer Walsh",
      role: "International Development Advisor",
      bio: "Former Country Director for Room to Read Nepal. Expert in scaling education programs in developing countries.",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <section className="relative h-64 md:h-80 bg-gradient-to-r from-primary-600 to-primary-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')"
          }}
        ></div>
        <div className="absolute inset-0 bg-primary-600/70"></div>
        <div className="relative container-custom h-full flex items-center">
          <div className="text-left max-w-2xl">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg"
              {...fadeInUp}
            >
              Our Team
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-white/90 drop-shadow-md"
              {...fadeInUp}
              transition={{ delay: 0.2 }}
            >
              Meet the passionate individuals driving change in Nepal's education sector.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Leadership */}
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
              Leadership
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              {leadership.map((member, index) => (
                <motion.div
                  key={member.name}
                  className="flex flex-col items-center text-center cursor-pointer group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  onClick={() => handleMemberClick(member)}
                >
                  <div className="relative mb-5 overflow-hidden rounded-full w-48 h-48 border-4 border-primary-100 group-hover:border-primary-400 transition-all duration-300">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="px-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-primary-600 font-medium">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Team Members */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Team
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
            {teamMembers.slice(0, 3).map((member, index) => (
              <TeamMemberCard 
                key={member.name} 
                member={member} 
                index={index} 
                onClick={handleMemberClick} 
              />
            ))}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {teamMembers.slice(3).map((member, index) => (
              <TeamMemberCard 
                key={member.name} 
                member={member} 
                index={index + 3} 
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
                      <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0 border-4 border-primary-100">
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
                        <p className="text-primary-600 font-medium mb-3">
                          {selectedMember.role}
                        </p>
                        <div className="flex items-center justify-center md:justify-start text-gray-500 text-sm mb-4">
                          <MapPin className="h-4 w-4 mr-1" />
                          {selectedMember.location}
                        </div>
                        <div className="flex space-x-4 justify-center md:justify-start">
                          <a
                            href={`mailto:${selectedMember.email}`}
                            className="text-gray-400 hover:text-primary-600 transition-colors"
                            title="Email"
                          >
                            <Mail className="h-5 w-5" />
                          </a>
                          <a
                            href={selectedMember.linkedin}
                            className="text-gray-400 hover:text-primary-600 transition-colors"
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

      {/* Advisory Board */}
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
              Advisory Board
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Distinguished leaders who provide strategic guidance and expertise 
              to help us achieve our mission more effectively.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {advisors.map((advisor, index) => (
              <motion.div
                key={advisor.name}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-start space-x-4">
                  <img
                    src={advisor.image}
                    alt={advisor.name}
                    className="w-20 h-20 rounded-full object-cover flex-shrink-0"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {advisor.name}
                    </h3>
                    <p className="text-primary-600 font-medium mb-3">
                      {advisor.role}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      {advisor.bio}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
      <section className="bg-primary-600 text-white section-padding">
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
            className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto"
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
            <a href="/get-involved" className="btn-primary bg-accent-500 hover:bg-accent-600 border-none">
              Get Involved
            </a>
            <a href="/contact" className="btn-secondary bg-white text-primary-600 hover:bg-gray-50">
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
}> = ({ member, index, onClick }) => (
  <motion.div
    className="text-center cursor-pointer group"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    onClick={() => onClick(member)}
  >
    <div className="relative mb-4 overflow-hidden rounded-full w-32 h-32 mx-auto border-4 border-gray-100 group-hover:border-primary-400 transition-all duration-300">
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover"
      />
    </div>
    <h3 className="font-semibold text-gray-900">{member.name}</h3>
    <p className="text-primary-600 text-sm">{member.role}</p>
  </motion.div>
);

export default Team;
