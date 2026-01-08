import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '../../lib/constants';

// Utility function to scroll to top of the page
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/images/logo.png" 
                alt={`${SITE_CONFIG.name} Logo`}
                className="h-10 w-auto"
              />
              <span className="font-semibold text-xl">{SITE_CONFIG.name}</span>
            </div>
            <p className="text-white mb-6 max-w-md">
              Empowering rural communities in Nepal through quality education and sustainable development. 
              Together, we're building a brighter future for Nepal's children.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/EduNfornepal/" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://x.com/NepalEdun" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href={SITE_CONFIG.links.instagram} className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href={SITE_CONFIG.links.linkedin} className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/programs" onClick={scrollToTop} className="text-white hover:text-gray-300 transition-colors">Programs</Link></li>
              <li><Link to="/impact" onClick={scrollToTop} className="text-white hover:text-gray-300 transition-colors">Our Impact</Link></li>
              <li><Link to="/get-involved" onClick={scrollToTop} className="text-white hover:text-gray-300 transition-colors">Get Involved</Link></li>
              <li><Link to="/about" onClick={scrollToTop} className="text-white hover:text-gray-300 transition-colors">About Us</Link></li>
              <li><Link to="/contact" onClick={scrollToTop} className="text-white hover:text-gray-300 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-white" />
                <span className="text-white text-sm">educatenepalinitiative123@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-white" />
                <span className="text-white text-sm">+977 9860495325</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-white mt-0.5" />
                <span className="text-white text-sm">
                  Narayansthan, Budhanilkantha 
                  Kathmandu, Nepal
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-white text-sm">
            2024 {SITE_CONFIG.name}. All rights reserved. | 
            <Link to="/privacy" onClick={scrollToTop} className="text-white hover:text-gray-300 ml-1">Privacy Policy</Link> | 
            <Link to="/terms" onClick={scrollToTop} className="text-white hover:text-gray-300 ml-1">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
