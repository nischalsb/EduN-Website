import React from 'react';
import { motion } from 'framer-motion';
import { Quote, MapPin, Calendar, Users, BookOpen, Heart } from 'lucide-react';

const Impact: React.FC = () => {
  const stories = [
    {
      id: 1,
      title: "From Darkness to Light: X's Journey",
      excerpt: "How a scholarship changed everything for a young girl in rural Nepal.",
      content: "Sita Tamang was just 12 when her parents considered pulling her out of school to help with farm work. Living in a remote village in Sindhupalchok, her family struggled to afford school supplies and uniforms. Through our scholarship program, Sita not only completed her education but became the first in her village to attend university. Today, she's studying to become a teacher, determined to give back to her community.",
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "Sita Tamang",
      date: "March 2024",
      category: "Education",
      location: "Sindhupalchok District"
    },
    {
      id: 2,
      title: "Building Dreams: The Shree Saraswati School Transformation",
      excerpt: "How infrastructure development changed an entire community's future.",
      content: "The Shree Saraswati School in Dolakha was on the verge of closure. With crumbling walls, no electricity, and a leaking roof, only 23 students remained. Our infrastructure program completely rebuilt the school, adding solar panels, a computer lab, and a library. Today, over 150 students attend, and the school has become a beacon of hope for the entire district.",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "Ram Bahadur Shrestha, Principal",
      date: "January 2024",
      category: "Infrastructure",
      location: "Dolakha District"
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
    { icon: Users, number: "2,500+", label: "Lives Changed", color: "text-blue-600" },
    { icon: BookOpen, number: "45", label: "Schools Transformed", color: "text-green-600" },
    { icon: Heart, number: "180", label: "Teachers Empowered", color: "text-red-600" },
    { icon: MapPin, number: "25", label: "Communities Reached", color: "text-purple-600" }
  ];

  // const fadeInUp = {
  //   initial: { opacity: 0, y: 60 },
  //   animate: { opacity: 1, y: 0 },
  //   transition: { duration: 0.6 }
  // };

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
                  Our Impact
                </h1>
                <p className="text-xl md:text-2xl font-medium drop-shadow-lg shadow-black/50">
                  Real stories of transformation from the communities we serve. 
                  See how education is changing lives across rural Nepal.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex justify-center mb-4">
                    <IconComponent className={`h-12 w-12 ${stat.color}`} />
                  </div>
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-600">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Stories */}
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
              Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Behind every statistic is a human story. Meet some of the incredible 
              individuals whose lives have been transformed through education.
            </p>
          </motion.div>

          <div className="space-y-16">
            {stories.map((story, index) => (
              <motion.div
                key={story.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-medium">
                      {story.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <MapPin className="h-4 w-4 mr-1" />
                      {story.location}
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {story.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    {story.content}
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="h-4 w-4 mr-2" />
                      {story.date}
                    </div>
                    <div className="text-gray-500 text-sm">
                      - {story.author}
                    </div>
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <img
                    src={story.image}
                    alt={story.title}
                    className="rounded-lg shadow-lg w-full h-80 object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
              What People Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear directly from the students, teachers, and families whose lives 
              have been touched by our programs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-gray-50 p-6 rounded-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Quote className="h-8 w-8 text-primary-600 mb-4" />
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-600 text-sm">
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
      <section className="bg-primary-600 text-white section-padding">
        <div className="container-custom text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Be Part of the Next Success Story
          </motion.h2>
          <motion.p
            className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Your support creates real, lasting change. Join us in transforming 
            more lives through the power of education.
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

export default Impact;
