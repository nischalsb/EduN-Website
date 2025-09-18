import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Heart, Users, Calendar, MapPin, Mail, Phone, CheckCircle } from 'lucide-react';

const volunteerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  skills: z.array(z.string()).min(1, 'Please select at least one skill'),
  availability: z.string().min(1, 'Please select your availability'),
  experience: z.string().min(10, 'Please provide some details about your experience'),
  motivation: z.string().min(20, 'Please tell us why you want to volunteer (minimum 20 characters)'),
});

type VolunteerForm = z.infer<typeof volunteerSchema>;

const GetInvolved: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm<VolunteerForm>({
    resolver: zodResolver(volunteerSchema),
    defaultValues: {
      skills: [],
    },
  });

  const skills = [
    'Teaching', 'Technology', 'Construction', 'Healthcare', 'Marketing',
    'Fundraising', 'Photography', 'Writing', 'Translation', 'Project Management'
  ];

  const opportunities = [
    {
      title: "Teaching Volunteer",
      location: "Various Districts",
      duration: "3-6 months",
      description: "Teach English, Math, or Science in rural schools. Help train local teachers and develop curriculum.",
      requirements: ["Bachelor's degree", "Teaching experience preferred", "Basic Nepali helpful"],
      icon: Users,
    },
    {
      title: "Infrastructure Projects",
      location: "Remote Villages",
      duration: "2-4 weeks",
      description: "Help build classrooms, libraries, and computer labs. Work alongside local communities.",
      requirements: ["Construction skills", "Physical fitness", "Team player"],
      icon: Heart,
    },
    {
      title: "Digital Literacy Training",
      location: "Schools & Communities",
      duration: "1-3 months",
      description: "Train teachers and students in computer skills and digital tools for education.",
      requirements: ["Computer proficiency", "Training experience", "Patience with beginners"],
      icon: Calendar,
    },
  ];

  const handleSkillToggle = (skill: string) => {
    const newSkills = selectedSkills.includes(skill)
      ? selectedSkills.filter(s => s !== skill)
      : [...selectedSkills, skill];
    
    setSelectedSkills(newSkills);
    setValue('skills', newSkills);
  };

  const onSubmit = (data: VolunteerForm) => {
    console.log('Volunteer application:', data);
    setIsSubmitted(true);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <motion.div
          className="text-center max-w-md mx-auto p-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Thank You for Your Interest!
          </h2>
          <p className="text-gray-600 mb-6">
            We've received your volunteer application and will get back to you within 48 hours.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="btn-primary"
          >
            Submit Another Application
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-64 md:h-80 w-full overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80)',
            backgroundPosition: 'center 60%'
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
                  Get Involved
                </h1>
                <p className="text-xl md:text-2xl font-medium drop-shadow-lg shadow-black/50">
                  Join our mission to transform education in Nepal. Whether you can volunteer 
                  your time, skills, or resources, there's a way for everyone to make a difference.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
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
              Volunteer Opportunities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Make a direct impact by volunteering with us. Choose from various 
              opportunities that match your skills and availability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {opportunities.map((opportunity, index) => {
              const IconComponent = opportunity.icon;
              return (
                <motion.div
                  key={opportunity.title}
                  className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <IconComponent className="h-12 w-12 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {opportunity.title}
                  </h3>
                  <div className="flex items-center text-gray-500 text-sm mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    {opportunity.location}
                  </div>
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    {opportunity.duration}
                  </div>
                  <p className="text-gray-600 mb-4">
                    {opportunity.description}
                  </p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {opportunity.requirements.map((req, idx) => (
                        <li key={idx} className="text-gray-600 text-sm flex items-start">
                          <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Volunteer Application Form */}
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
              Volunteer Application
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to make a difference? Fill out our volunteer application form 
              and we'll match you with the perfect opportunity.
            </p>
          </motion.div>

          <motion.div
            className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    {...register('name')}
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  {...register('phone')}
                  type="tel"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="+1 (555) 123-4567"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                )}
              </div>

              {/* Skills */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Skills & Expertise *
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {skills.map((skill) => (
                    <button
                      key={skill}
                      type="button"
                      onClick={() => handleSkillToggle(skill)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        selectedSkills.includes(skill)
                          ? 'bg-primary-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {skill}
                    </button>
                  ))}
                </div>
                {errors.skills && (
                  <p className="mt-1 text-sm text-red-600">{errors.skills.message}</p>
                )}
              </div>

              {/* Availability */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Availability *
                </label>
                <select
                  {...register('availability')}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="">Select your availability</option>
                  <option value="1-2 weeks">1-2 weeks</option>
                  <option value="1 month">1 month</option>
                  <option value="2-3 months">2-3 months</option>
                  <option value="3-6 months">3-6 months</option>
                  <option value="6+ months">6+ months</option>
                  <option value="Flexible">Flexible</option>
                </select>
                {errors.availability && (
                  <p className="mt-1 text-sm text-red-600">{errors.availability.message}</p>
                )}
              </div>

              {/* Experience */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Relevant Experience *
                </label>
                <textarea
                  {...register('experience')}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Tell us about your relevant experience, education, or background..."
                />
                {errors.experience && (
                  <p className="mt-1 text-sm text-red-600">{errors.experience.message}</p>
                )}
              </div>

              {/* Motivation */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Why do you want to volunteer with us? *
                </label>
                <textarea
                  {...register('motivation')}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Share your motivation and what you hope to achieve through volunteering..."
                />
                {errors.motivation && (
                  <p className="mt-1 text-sm text-red-600">{errors.motivation.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full btn-primary"
              >
                Submit Application
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Other Ways to Help */}
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
              Other Ways to Help
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Can't volunteer in person? There are many other ways to support our mission.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Monthly Donations",
                description: "Provide consistent support with a monthly donation that helps us plan long-term projects."
              },
              {
                icon: Users,
                title: "Spread the Word",
                description: "Share our mission with friends, family, and colleagues. Follow us on social media."
              },
              {
                icon: Mail,
                title: "Corporate Partnerships",
                description: "Connect us with your company for sponsorship opportunities and employee volunteer programs."
              }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.title}
                  className="text-center p-6"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <IconComponent className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;
