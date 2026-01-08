import { motion } from 'framer-motion';
import { GraduationCap, School, Users, ArrowRight, BookOpen, Globe, ChevronDown, PenTool, Book } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';


const Home = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // for smooth scrolling
  });
};
  const partners = [
    { name: "Morgridge Center for Public Service", logo: "/images/morgridge.png" },
    { name: "Budhanilkantha School", logo: "/images/bnks.png" },
    { name: "Merosiksha", logo: "/images/merosiksha.png" },
    { name: "WIF", logo: "/images/wif.png" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen w-full bg-white flex items-center overflow-hidden pt-4 pb-4">
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
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Minimalist Welcome */}
            <motion.div
              className="inline-block text-sm tracking-widest uppercase text-gray-500 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Educate Nepal Initiative
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-light mb-8 leading-tight text-black"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Empowering Nepal's
              <br />
              <span className="font-normal">Future Through Education</span>
            </motion.h1>

            {/* Clean Subtitle */}
            <motion.p 
              className="text-lg md:text-xl mb-12 text-gray-600 font-light max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Transforming rural communities across Nepal by providing quality education, 
              training teachers, and building sustainable learning environments.
            </motion.p>

            {/* Minimalist Action Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link 
                  to="/programs" 
                  onClick={scrollToTop}
                  className="group inline-flex items-center gap-3 bg-black text-white font-medium px-8 py-4 transition-all duration-300 hover:bg-gray-800"
                >
                  <span>Explore Our Work</span>
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
                  to="/donate" 
                  onClick={scrollToTop}
                  className="group inline-flex items-center gap-3 border border-black text-black font-medium px-8 py-4 transition-all duration-300 hover:bg-black hover:text-white"
                >
                  <span>Make a Difference</span>
                  <ArrowRight 
                    size={16} 
                    className="group-hover:translate-x-1 transition-transform duration-300" 
                  />
                </Link>
              </motion.div>
            </motion.div>

            {/* Clean Stats Preview */}
            <motion.div
              className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              {[
                { icon: Users, value: "1K+", label: "Students" },
                { icon: School, value: "5+", label: "Schools" },
                { icon: GraduationCap, value: "15+", label: "Teachers" },
                { icon: Globe, value: "10+", label: "Communities" },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 mb-4">
                    <stat.icon size={20} className="text-gray-600" />
                  </div>
                  <div className="text-2xl font-light text-black mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Minimalist Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={24} className="text-gray-400" />
        </motion.div>
      </section>



      {/* Partners Section */}
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
              Our Partners
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-black mb-6">
              Powering Change Together
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light">
              We're proud to collaborate with these organizations to amplify our impact 
              and drive sustainable change in education across Nepal.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
          >
            {partners.map((partner, index) => (
              <motion.div 
                key={partner.name} 
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1
                }}
                whileHover={{ y: -5 }}
              >
                <div className="p-8 bg-white border border-gray-200 h-32 flex items-center justify-center transition-all duration-300 hover:border-gray-300">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-16 max-w-full object-contain opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                    title={partner.name}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
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
            Ready to Make a Difference?
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-6xl font-light mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Join Our Mission
          </motion.h2>

          <motion.p 
            className="text-lg md:text-xl mb-12 text-gray-300 max-w-3xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join thousands of supporters who are helping us transform education in Nepal. 
            Every contribution makes a lasting impact.
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
                onClick={scrollToTop}
                className="group inline-flex items-center gap-3 bg-white text-black font-medium px-8 py-4 transition-all duration-300 hover:bg-gray-100"
              >
                <span>Donate Today</span>
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
                onClick={scrollToTop}
                className="group inline-flex items-center gap-3 border border-white text-white font-medium px-8 py-4 transition-all duration-300 hover:bg-white hover:text-black"
              >
                <span>Volunteer With Us</span>
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


export default Home;
