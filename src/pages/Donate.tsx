import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Wallet, Smartphone, Shield, Heart, Users, BookOpen, Building, PenTool, Book, School, GraduationCap } from 'lucide-react';

const Donate: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [selectedPayment, setSelectedPayment] = useState('stripe');

  const donationAmounts = [25, 50, 100, 250, 500, 1000];

  const impactExamples = [
    {
      amount: 25,
      impact: "Provides school supplies for 1 student for a month",
      icon: BookOpen,
    },
    {
      amount: 50,
      impact: "Funds a teacher training workshop session",
      icon: Users,
    },
    {
      amount: 100,
      impact: "Sponsors a student's education for 3 months",
      icon: Heart,
    },
    {
      amount: 250,
      impact: "Equips a classroom with basic learning materials",
      icon: Building,
    },
  ];

  const paymentMethods = [
    {
      id: 'stripe',
      name: 'Credit/Debit Card',
      description: 'Secure payment via Stripe',
      icon: CreditCard,
      available: true,
    },
    {
      id: 'paypal',
      name: 'PayPal',
      description: 'Pay with your PayPal account',
      icon: Wallet,
      available: true,
    },
    {
      id: 'esewa',
      name: 'eSewa',
      description: 'Popular digital wallet in Nepal',
      icon: Smartphone,
      available: true,
    },
    {
      id: 'khalti',
      name: 'Khalti',
      description: 'Digital payment solution for Nepal',
      icon: Smartphone,
      available: true,
    },
  ];

  const handleDonate = () => {
    const amount = selectedAmount || parseFloat(customAmount);
    if (!amount || amount < 1) {
      alert('Please select or enter a valid donation amount');
      return;
    }
    
    // In a real app, this would integrate with actual payment processors
    alert(`Thank you for your ${amount} USD donation via ${selectedPayment}! This is a demo - no actual payment was processed.`);
  };

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
              Make a Donation
            </div>
            <h1 className="text-4xl md:text-6xl font-light text-black mb-8 leading-tight">
              Support Our Mission
            </h1>
            <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">
              Your contribution directly funds educational programs that transform lives 
              in rural Nepal. Every dollar makes a meaningful difference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Examples */}
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
              Your Impact
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-black mb-6">
              Every Dollar Counts
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light">
              See exactly how your donation creates change in rural Nepal communities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {impactExamples.map((example, index) => {
              const IconComponent = example.icon;
              return (
                <motion.div
                  key={example.amount}
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
                  <div className="text-3xl font-light text-black mb-3">
                    ${example.amount}
                  </div>
                  <p className="text-gray-600 text-sm font-light leading-relaxed">
                    {example.impact}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Choose Your Donation Amount
              </h3>

              {/* Preset Amounts */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {donationAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => {
                      setSelectedAmount(amount);
                      setCustomAmount('');
                    }}
                    className={`p-4 rounded-lg border-2 transition-colors ${
                      selectedAmount === amount
                        ? 'border-gray-600 bg-gray-50 text-gray-600'
                        : 'border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    <div className="text-xl font-bold">${amount}</div>
                  </button>
                ))}
              </div>

              {/* Custom Amount */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Or enter a custom amount (USD)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                  <input
                    type="number"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(null);
                    }}
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                    placeholder="0.00"
                    min="1"
                  />
                </div>
              </div>

              {/* Payment Methods */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Choose Payment Method
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {paymentMethods.map((method) => {
                    const IconComponent = method.icon;
                    return (
                      <button
                        key={method.id}
                        onClick={() => setSelectedPayment(method.id)}
                        disabled={!method.available}
                        className={`p-4 rounded-lg border-2 transition-colors text-left ${
                          selectedPayment === method.id
                            ? 'border-gray-600 bg-gray-50'
                            : 'border-gray-200 hover:border-gray-400'
                        } ${!method.available ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        <div className="flex items-center space-x-3">
                          <IconComponent className="h-6 w-6 text-gray-600" />
                          <div>
                            <div className="font-medium text-gray-900">
                              {method.name}
                            </div>
                            <div className="text-sm text-gray-600">
                              {method.description}
                            </div>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Security Notice */}
              <div className="flex items-center space-x-2 mb-6 p-4 bg-green-50 rounded-lg">
                <Shield className="h-5 w-5 text-green-600" />
                <div className="text-sm text-green-800">
                  <strong>Secure Donation:</strong> All transactions are encrypted and secure. 
                  Your personal information is protected.
                </div>
              </div>

              {/* Donate Button */}
              <button
                onClick={handleDonate}
                className="w-full btn-primary text-lg py-4"
              >
                Donate ${selectedAmount || customAmount || '0'} Now
              </button>

              <p className="text-center text-sm text-gray-600 mt-4">
                Your donation is tax-deductible. You will receive a receipt via email.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Transparency Section */}
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
              How We Use Your Donations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We believe in complete transparency. Here's exactly how your contributions are used.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Fund Allocation Chart */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Fund Allocation
                </h3>
                <div className="space-y-4">
                  {[
                    { category: 'Education Programs', percentage: 75, color: 'bg-gray-600' },
                    { category: 'Infrastructure', percentage: 15, color: 'bg-gray-500' },
                    { category: 'Administration', percentage: 8, color: 'bg-gray-400' },
                    { category: 'Fundraising', percentage: 2, color: 'bg-gray-300' },
                  ].map((item) => (
                    <div key={item.category}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-700">{item.category}</span>
                        <span className="font-medium">{item.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${item.color}`}
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Achievements */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Recent Achievements
                </h3>
                <div className="space-y-4">
                  {[
                    { achievement: 'Launched IT Training Program', location: 'Kohalpur, Banke District' },
                    { achievement: 'Trained 2 teachers', location: 'Kohalpur, Banke' },
                    { achievement: 'Provided scholarship worth NRs. 100K ', location: 'Various districts' },
                    { achievement: 'Installed solar panels', location: '5 schools' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-medium text-gray-900">{item.achievement}</div>
                        <div className="text-sm text-gray-600">{item.location}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Other Ways to Give */}
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
              Other Ways to Give
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore different ways to support our mission beyond one-time donations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Monthly Giving",
                description: "Join our monthly giving program for sustained impact. Cancel anytime.",
                cta: "Set Up Monthly Donation"
              },
              {
                title: "Corporate Sponsorship",
                description: "Partner with us for employee engagement and CSR initiatives.",
                cta: "Learn About Partnerships"
              },
              {
                title: "Legacy Giving",
                description: "Leave a lasting impact through planned giving and bequests.",
                cta: "Explore Legacy Options"
              }
            ].map((option, index) => (
              <motion.div
                key={option.title}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {option.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {option.description}
                </p>
                <button className="btn-secondary">
                  {option.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;
