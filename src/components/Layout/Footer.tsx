import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '../../lib/constants';

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
            <p className="text-gray-300 mb-6 max-w-md">
              Empowering rural communities in Nepal through quality education and sustainable development. 
              Together, we're building a brighter future for Nepal's children.
            </p>
            <div className="flex space-x-4">
              <a href={SITE_CONFIG.links.facebook} className="text-gray-400 hover:text-primary-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href={SITE_CONFIG.links.twitter} className="text-gray-400 hover:text-primary-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href={SITE_CONFIG.links.instagram} className="text-gray-400 hover:text-primary-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href={SITE_CONFIG.links.linkedin} className="text-gray-400 hover:text-primary-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/programs" className="text-gray-300 hover:text-primary-400 transition-colors">Programs</Link></li>
              <li><Link to="/impact" className="text-gray-300 hover:text-primary-400 transition-colors">Our Impact</Link></li>
              <li><Link to="/get-involved" className="text-gray-300 hover:text-primary-400 transition-colors">Get Involved</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-primary-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-primary-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary-400" />
                <span className="text-gray-300 text-sm">info@educatenepal.org</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary-400" />
                <span className="text-gray-300 text-sm">+977-1-4567890</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary-400 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  Kathmandu, Nepal<br />
                  GPO Box 12345
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 {SITE_CONFIG.name}. All rights reserved. | 
            <Link to="/privacy" className="hover:text-primary-400 ml-1">Privacy Policy</Link> | 
            <Link to="/terms" className="hover:text-primary-400 ml-1">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
