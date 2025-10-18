import React from 'react';
import { motion } from 'framer-motion';
import { Quote, MapPin, Calendar, Users, BookOpen, Heart, ArrowRight, PenTool, Book, School, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Impact: React.FC = () => {
  const stories = [
    {
      id: 1,
      title: "Coding Confidence with the IT Training Program",
      excerpt: "How a It training helped me identify my love for coding",
      content: "I had the opportunity to be part of the WIF IT Training Program organized in collaboration with EduN (Educate Nepal Initiative). This training was a great experience for me because I learned the basics of HTML, CSS, JavaScript, and Python in a structured and easy-to-follow way.\n\nThe program not only gave me technical knowledge but also helped me build confidence in programming. I especially liked the hands-on practice sessions where we created small projects, which made learning more fun and practical.\n\nOverall, this training has improved my skills, motivated me to explore coding further, and opened new opportunities for my future in the IT field. Now, I am excited to move forward by building small projects like mobile apps and websites while also balancing my school studies.",
      image: "/images/students/5E23314C-04E7-4BC8-8EE9-29E3970CBECE.png",
      author: "Pravat Badi",
      date: "September 2025",
      category: "Education",
      location: "Banke District"
    },
    {
      id: 2,
      title: "The Best Training Program I’ve Ever Joined",
      excerpt: "How the IT training program helped me restart and grow my skills",
      content: "The training program is the best program I’ve ever participated in. It gave me the chance to restart and grow my skills. I had smart companions to learn with and a very supportive teacher who always helped me improve my coding skills. I really loved this experience, and I want to sincerely thank everyone for organizing this program.",
      image: "",
      author: "Gurans Thakuril",
      date: "September 2025",
      category: "Education",
      location: "Dailekh District"
    },
    {
      id: 3,
      title: "Empowering Educators: Teacher Training Success",
      excerpt: "How modern teaching methods transformed classroom experiences.",
      content: "Ganga Ram Jaisi had been teaching for 15 years using traditional methods. Through our teacher training program, he learned interactive teaching techniques, digital tools, and student-centered approaches. His classroom is now vibrant with engaged students, and test scores have improved by 40%. Ganga Ram now trains other teachers in his district, multiplying the impact.",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "Ganga Ram Jaisi ",
      date: "May 2025",
      category: "Teacher Training",
      location: "Banke District"
    }
  ];

  const testimonials = [
    {
      name: "Pemba Sherpa",
      role: "Parent, Solukhumbu",
      quote: "My daughter can now read and write in both Nepali and English. The computer classes have opened up a whole new world for her. Thank you for giving our children hope.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Kamala Thapa",
      role: "Teacher, Gorkha",
      quote: "The training program completely changed how I teach. My students are more engaged, and I feel confident using new technologies in the classroom.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Bikash Rai",
      role: "Student, Okhaldhunga",
      quote: "I never thought I could go to university. The scholarship program made my dreams possible. Now I'm studying engineering and want to help develop my village.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ];

  const impactStats = [
    { icon: Users, number: "2,500+", label: "Lives Changed", color: "text-gray-600" },
    { icon: BookOpen, number: "45", label: "Schools Transformed", color: "text-gray-600" },
    { icon: Heart, number: "180", label: "Teachers Empowered", color: "text-gray-600" },
    { icon: MapPin, number: "25", label: "Communities Reached", color: "text-gray-600" }
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
              Our Impact
            </div>
            <h1 className="text-4xl md:text-6xl font-light text-black mb-8 leading-tight">
              Stories of Transformation
            </h1>
            <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">
              Real stories of transformation from the communities we serve. 
              See how education is changing lives across rural Nepal.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
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
              Impact by Numbers
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-black mb-6">
              Measurable Change
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light">
              Every number represents a life changed, a dream realized, and a community transformed.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {impactStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
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
                  <div className="text-4xl font-light text-black mb-3">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Stories */}
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
              Success Stories
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-black mb-6">
              Real People, Real Change
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light">
              Behind every statistic is a human story. Meet some of the incredible 
              individuals whose lives have been transformed through education.
            </p>
          </motion.div>

          <div className="space-y-20">
            {stories.map((story, index) => (
              <motion.div
                key={story.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center space-x-4 mb-6">
                    <span className="bg-gray-100 text-gray-600 px-4 py-2 text-sm font-medium">
                      {story.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <MapPin className="h-4 w-4 mr-2" />
                      {story.location}
                    </div>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-light text-black mb-6 leading-tight">
                    {story.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-8 font-light leading-relaxed">
                    {story.content}
                  </p>
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="h-4 w-4 mr-2" />
                      {story.date}
                    </div>
                    <div className="text-gray-500 text-sm font-medium">
                      - {story.author}
                    </div>
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  {story.image && (
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-80 object-cover"
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
              What People Say
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-black mb-6">
              Voices of Change
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light">
              Hear directly from the students, teachers, and families whose lives 
              have been touched by our programs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-white border border-gray-200 p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Quote className="h-8 w-8 text-gray-400 mb-6" />
                <p className="text-gray-600 mb-8 font-light leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-medium text-black">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-500 text-sm">
                      {testimonial.role}
                    </div>
                  </div>
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
            Be Part of the Next Success Story
          </motion.div>
          
          <motion.h2
            className="text-4xl md:text-6xl font-light mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Create More Change
          </motion.h2>
          
          <motion.p
            className="text-lg md:text-xl mb-12 text-gray-300 max-w-3xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Your support creates real, lasting change. Join us in transforming 
            more lives through the power of education.
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

export default Impact;
