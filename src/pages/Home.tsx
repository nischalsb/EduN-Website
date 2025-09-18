import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, School, Users, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const STATS = {
  studentsImpacted: 5000,
  schoolsSupported: 50,
  teachersTrained: 250,
  yearsActive: 5,
  communitiesReached: 20
};

const Home = () => {

  // const fadeInUp = {
  //   initial: { opacity: 0, y: 60 },
  //   animate: { opacity: 1, y: 0 },
  //   transition: { duration: 0.6 }
  // };

  const partners = [
    { name: "Morgridge Center for Public Service", logo: "/images/morgridge.png" },
    { name: "Budhanilkantha School", logo: "/images/bnks.png" },
    { name: "Merosiksha", logo: "/images/merosiksha.png" },
    { name: "WIF", logo: "/images/wif.png" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1523050853548-9862d8c8f4f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2100&q=80)',
            backgroundPosition: 'center 60%'
          }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-primary-700/70"></div>
          
          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="container-custom">
              <motion.div 
                className="max-w-4xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-2xl shadow-black/50">
                  Empowering Nepal's Future Through Education
                </h1>
                <motion.p 
                  className="text-xl md:text-2xl lg:text-3xl mb-8 text-white font-medium drop-shadow-lg shadow-black/50 max-w-3xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  Join us in transforming rural communities across Nepal by providing quality education, 
                  training teachers, and building sustainable learning environments.
                </motion.p>
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 mt-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  <Link 
                    to="/programs" 
                    className="btn-secondary text-lg px-8 py-4 text-center bg-white/10 hover:bg-white/20 border-white/30 text-white font-semibold"
                  >
                    Our Work →
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
          
          
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-center mb-4">
                <Users className="h-12 w-12 text-primary-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                <AnimatedNumber value={STATS.studentsImpacted} />+
              </div>
              <div className="text-gray-600">Students Impacted</div>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex justify-center mb-4">
                <School className="h-12 w-12 text-primary-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                <AnimatedNumber value={STATS.schoolsSupported} />+
              </div>
              <div className="text-gray-600">Schools Supported</div>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex justify-center mb-4">
                <GraduationCap className="h-12 w-12 text-primary-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                <AnimatedNumber value={STATS.teachersTrained} />+
              </div>
              <div className="text-gray-600">Teachers Trained</div>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex justify-center mb-4">
                <Calendar className="h-12 w-12 text-primary-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                <AnimatedNumber value={STATS.communitiesReached} />+
              </div>
              <div className="text-gray-600">Communities Reached</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-gray-50 section-padding">
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
                We believe every child in Nepal deserves access to quality education. Our mission is to 
                bridge the educational gap in rural communities by providing resources, training teachers, 
                and building sustainable learning environments.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Through collaborative partnerships and community-driven initiatives, we're creating 
                lasting change that empowers students, families, and entire communities.
              </p>
              <Link to="/about" className="btn-primary">
                Learn More About Us
              </Link>
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
                alt="Children in Nepal classroom"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Decorative Divider */}
      <div className="relative py-12">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-4 text-4xl text-gray-400"></span>
        </div>
      </div>

      {/* Partners */}
      <section className="bg-gray-50 section-padding">
              <div className="container-custom">
                <motion.div
                  className="text-center mb-12"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Our Valued Partners
                  </h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    We're proud to collaborate with these esteemed organizations to amplify our impact 
                    and drive sustainable change in education across Nepal.
                  </p>
                </motion.div>
      
                <motion.div 
                  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-center max-w-5xl mx-auto px-4 w-full"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, staggerChildren: 0.1 }}
                >
                  {partners.map((partner, index) => (
                    <motion.div 
                      key={partner.name} 
                      className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 w-full max-w-[200px] h-32 flex items-center justify-center"
                      whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="max-h-16 max-w-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                        title={partner.name}
                      />
                    </motion.div>
                  ))}
                </motion.div>
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
            Join thousands of supporters who are helping us transform education in Nepal. 
            Every contribution makes a lasting impact.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/donate" className="btn-primary bg-accent-500 hover:bg-accent-600 border-none">
              Donate Today
            </Link>
            <Link to="/get-involved" className="btn-secondary bg-white text-primary-600 hover:bg-gray-50">
              Volunteer With Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Animated Number Component
const AnimatedNumber = ({ value }: { value: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const duration = 2; // seconds
  const frameDuration = 1000 / 60; // 60fps
  const totalFrames = Math.round(duration * 1000 / frameDuration);
  const countTo = value;

  useEffect(() => {
    if (!isInView) return;
    
    let frame = 0;
    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const currentCount = Math.round(countTo * progress);
      
      if (parseInt(String(currentCount), 10) <= countTo) {
        setCount(currentCount);
      }
      
      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameDuration);
    
    return () => clearInterval(counter);
  }, [isInView, countTo, totalFrames]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.8 }
      } : {}}
    >
      {count.toLocaleString()}
    </motion.span>
  );
};

export default Home;
