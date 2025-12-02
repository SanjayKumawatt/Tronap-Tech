import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, FileText, Mail } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    // 'pt-20' added for fixed header spacing
    <div className="bg-slate-50 min-h-screen pt-20">
      
      {/* --- Hero Section --- */}
      <div className="relative bg-slate-900 py-16">
        <div className="absolute inset-0 overflow-hidden">
          {/* Abstract Security Background */}
          <div className="absolute inset-0 bg-slate-900 opacity-90"></div>
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#00C2E0] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Privacy Policy
          </h1>
          
        </div>
      </div>

      {/* --- Main Content Area --- */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100">
          
          {/* Introduction */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Shield className="text-[#00C2E0]" size={24} />
              1. Introduction
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Welcome to TRONAP Technologies Private Limited ("Company", "we", "our", "us"). We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
            </p>
          </div>

          {/* Information Collection */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Eye className="text-[#00C2E0]" size={24} />
              2. Information We Collect
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We may collect, use, store, and transfer different kinds of personal data about you which we have grouped together follows:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 ml-4">
              <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data:</strong> includes billing address, delivery address, email address, and telephone numbers.</li>
              <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, and operating system.</li>
              <li><strong>Usage Data:</strong> includes information about how you use our website, products, and services.</li>
            </ul>
          </div>

          {/* How We Use Information */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <FileText className="text-[#00C2E0]" size={24} />
              3. How We Use Your Data
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 ml-4">
              <li>To provide the services and maintain our website.</li>
              <li>To notify you about changes to our service.</li>
              <li>To provide customer support.</li>
              <li>To gather analysis or valuable information so that we can improve our service.</li>
              <li>To monitor the usage of our service.</li>
              <li>To detect, prevent and address technical issues.</li>
            </ul>
          </div>

          {/* Data Security */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Lock className="text-[#00C2E0]" size={24} />
              4. Data Security
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.
            </p>
          </div>

          {/* Cookies */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">5. Cookies</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
            </p>
          </div>

          {/* Contact Us */}
          <div className="border-t border-slate-100 pt-8 mt-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Mail className="text-[#00C2E0]" size={24} />
              Contact Us
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <div className="bg-slate-50 p-6 rounded-xl text-sm text-slate-700">
              <p className="font-bold text-slate-900 mb-1">TRONAP TECHNOLOGIES PRIVATE LIMITED</p>
              <p>D-4, Kadam Flat, Opp Swaminaryan Mandir,</p>
              <p>Bopal, Ahmedabad, Daskroi,</p>
              <p>Gujarat, India, 380058.</p>
              <p className="mt-4 font-medium text-[#00C2E0]">
                Email: <a href="mailto:support@tronap.in">support@tronap.in</a>
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;