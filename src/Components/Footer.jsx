import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Facebook, Twitter, Linkedin, Instagram, ChevronRight } from 'lucide-react';
import logo from "../assets/logo.svg";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT US', path: '/about' },
    { name: 'SERVICES', path: '/services' },
    { name: 'CONTACT', path: '/contact' },
  ];

  const services = [
    'Web Development',
    'Mobile App Development',
    'UI/UX Design',
    'Digital Marketing',
    'Cloud Solutions'
  ];

  return (
    // CHANGE 1: Background ab Light Blue kar diya hai (Image jaisa)
    <footer className="bg-[#bae6fd] text-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* --- Column 1: Company Info --- */}
          <div>
<img src={logo} alt="" />
            {/* Dark Text for Paragraph */}
            <p className="text-slate-700 text-sm mb-6 leading-relaxed font-medium">
              Category - Software Development Startup. We transform ideas into powerful digital experiences with cutting-edge technology.
            </p>
            
          </div>

          {/* --- Column 2: Quick Links --- */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-6 border-b-2 border-slate-900/10 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="group flex items-center text-slate-700 hover:text-blue-700 transition-colors duration-200 font-medium"
                  >
                    <ChevronRight size={16} className="text-blue-700 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* --- Column 3: Our Services --- */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-6 border-b-2 border-slate-900/10 pb-2 inline-block">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-sm text-slate-700 hover:text-blue-700 transition-colors cursor-pointer font-medium">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* --- Column 4: Contact Details --- */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-6 border-b-2 border-slate-900/10 pb-2 inline-block">Contact Us</h3>
            <div className="space-y-4">
              
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="text-blue-700 flex-shrink-0 mt-1" size={20} />
                <p className="text-sm leading-relaxed text-slate-700 font-medium">
                  <span className="font-bold text-slate-900 block mb-1">TRONAP TECHNOLOGIES PRIVATE LIMITED</span>
                  D-4, Kadam Flat, Opp Swaminaryan Mandir, Bopal, Ahmedabad, Daskroi, Gujarat, India, 380058.
                </p>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail className="text-blue-700 flex-shrink-0" size={20} />
                <a href="mailto:support@tronap.in" className="text-sm text-slate-700 hover:text-blue-700 transition-colors font-medium">
                  support@tronap.in
                </a>
              </div>
              
            </div>
          </div>

        </div>

        {/* --- Bottom Bar --- */}
        <div className="border-t border-slate-900/10 pt-8 mt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-600 font-medium">
            &copy; {currentYear} <span className="text-slate-900 font-bold">TRONAP Technologies Pvt. Ltd.</span> All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-slate-600 font-medium">
            <Link to="/privacy" className="hover:text-blue-700 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-blue-700 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;