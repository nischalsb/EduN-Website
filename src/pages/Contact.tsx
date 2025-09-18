import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { submitContactForm } from '../services/api';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
});

type ContactForm = z.infer<typeof contactSchema>;

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@educatenepal.org"],
      description: "Send us an email and we'll respond within 24 hours"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+977-1-2345678", "+977-9898989898"],
      description: "Available Monday to Friday, 9 AM to 5 PM NPT"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Kathmandu, Nepal", "GPO Box 12345"],
      description: "Schedule a visit to our office in Kathmandu"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Mon - Fri: 9:00 AM - 5:00 PM", "Sat: 10:00 AM - 2:00 PM"],
      description: "Nepal Time (NPT) - UTC +5:45"
    }
  ];

  const offices = [
    {
      city: "Kathmandu",
      address: "Budhanilkantha, Ward 05, Kathmandu 44600, Nepal",
      phone: "+977-1-4567890",
      email: "xxxxxxx@educatenepal.org",
      type: "Main Office"
    },
    {
      city: "Nawalparasi",
      address: "Bardaghat Municipality, Nawalparasi District",
      phone: "+977-9841234567",
      email: "xxxxxxx@educatenepal.org",
      type: "Field Office"
    },
  ];

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      const result = await submitContactForm(data);
      console.log('Contact form submitted successfully:', result);
      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setSubmitError('Failed to send message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // const fadeInUp = {
  //   initial: { opacity: 0, y: 60 },
  //   animate: { opacity: 1, y: 0 },
  //   transition: { duration: 0.6 }
  // };

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
            Message Sent Successfully!
          </h2>
          <p className="text-gray-600 mb-6">
            Thank you for reaching out. We'll get back to you within 24 hours.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="btn-primary"
          >
            Send Another Message
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
            backgroundImage: 'url(https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80)',
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
                  Contact Us
                </h1>
                <p className="text-xl md:text-2xl font-medium drop-shadow-lg shadow-black/50">
                  Get in touch with us to learn more about our programs, volunteer opportunities, 
                  or partnership possibilities. We'd love to hear from you.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
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
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the best way to reach us. We're here to answer your questions 
              and help you get involved in our mission.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <motion.div
                  key={info.title}
                  className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <IconComponent className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {info.title}
                  </h3>
                  <div className="space-y-1 mb-3">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-700 font-medium">
                        {detail}
                      </p>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm">
                    {info.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      {...register('name')}
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="John Doe"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    {...register('subject')}
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="How can we help you?"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    {...register('message')}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Tell us more about your inquiry..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
                
                {submitError && (
                  <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-600 text-sm">{submitError}</p>
                  </div>
                )}
              </form>
            </motion.div>

            {/* Office Locations */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Our Offices
              </h3>
              <div className="space-y-6">
                {offices.map((office) => (
                  <div key={office.city} className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-xl font-semibold text-gray-900">
                        {office.city}
                      </h4>
                      <span className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-medium">
                        {office.type}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-start space-x-2">
                        <MapPin className="h-4 w-4 text-gray-500 mt-1 flex-shrink-0" />
                        <p className="text-gray-600">{office.address}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-gray-500 flex-shrink-0" />
                        <p className="text-gray-600">{office.phone}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4 text-gray-500 flex-shrink-0" />
                        <p className="text-gray-600">{office.email}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Quick answers to common questions about our programs and how to get involved.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How can I volunteer with your organization?",
                answer: "Visit our Get Involved page to see current volunteer opportunities and fill out our application form. We offer both on-site and remote volunteer positions."
              },
              {
                question: "Are donations tax-deductible?",
                answer: "Yes, we are a registered non-profit organization. All donations are tax-deductible and you will receive a receipt for your records."
              },
              {
                question: "How do you select which schools to support?",
                answer: "We work with local communities and government officials to identify schools with the greatest need. Priority is given to remote areas with limited resources."
              },
              {
                question: "Can I visit your projects in Nepal?",
                answer: "Yes! We welcome visitors and can arrange field trips to see our programs in action. Please contact us at least 2 weeks in advance to coordinate."
              },
              {
                question: "How can my company partner with you?",
                answer: "We offer various corporate partnership opportunities including sponsorships, employee volunteer programs, and CSR initiatives. Contact us to discuss options."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 rounded-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h4>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
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
            Don't wait to get involved. Every day we delay is another day children 
            in rural Nepal go without the education they deserve.
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
              Volunteer Today
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
