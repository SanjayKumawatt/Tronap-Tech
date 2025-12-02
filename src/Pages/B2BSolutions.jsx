import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, BarChart3, Settings, Users, ArrowRight, Phone } from 'lucide-react';

const B2BSolutions = () => {
  
  // Sidebar ke liye doosri services ki list
  const otherServices = [
    { name: "Android App Development", path: "/services/android-development" },
    { name: "Website Development", path: "/services/website-development" },
    { name: "Fintech Software", path: "/services/fintech-software" },
    { name: "Cloud Solutions", path: "/services/cloud-solutions" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-20">
      
      {/* --- Hero Section --- */}
      <div className="relative bg-slate-900 py-20">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80" 
            alt="B2B Software Background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            B2B Software Solutions
          </h1>
          <div className="flex justify-center items-center gap-2 text-slate-400 text-sm font-medium">
            <Link to="/" className="hover:text-[#00C2E0]">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-[#00C2E0]">Services</Link>
            <span>/</span>
            <span className="text-[#00C2E0]">B2B Solutions</span>
          </div>
        </div>
      </div>

      {/* --- Main Content Area --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* LEFT COLUMN: Detailed Content */}
          <div className="w-full lg:w-2/3">
            
            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              Streamline Your Business Operations
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed text-lg">
              In today's fast-paced corporate world, efficiency is key. Our B2B Software Solutions are designed to automate complex processes, enhance communication between businesses, and drive operational excellence. Whether you need a custom ERP system, a supply chain management tool, or an automated workflow platform, TRONAP Technologies has the expertise to build it.
            </p>
            <p className="text-slate-600 mb-10 leading-relaxed text-lg">
              We focus on creating scalable, secure, and user-friendly software that integrates seamlessly with your existing infrastructure, allowing you to focus on growth rather than technical hurdles.
            </p>

            {/* Key Features Grid */}
            <h3 className="text-2xl font-bold text-slate-800 mb-6 border-l-4 border-[#00C2E0] pl-4">
              What We Offer
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              
              <FeatureCard 
                icon={<Settings className="text-[#00C2E0]" />}
                title="Process Automation"
                desc="Reduce manual errors and save time by automating repetitive business tasks."
              />
              <FeatureCard 
                icon={<BarChart3 className="text-[#00C2E0]" />}
                title="Data Analytics"
                desc="Gain actionable insights with advanced reporting and dashboard tools."
              />
              <FeatureCard 
                icon={<Users className="text-[#00C2E0]" />}
                title="ERP Integration"
                desc="Centralize your business data with custom Enterprise Resource Planning systems."
              />
              <FeatureCard 
                icon={<CheckCircle2 className="text-[#00C2E0]" />}
                title="Supply Chain Mgmt"
                desc="Optimize your logistics and inventory with real-time tracking solutions."
              />

            </div>

            {/* Why Choose Us for B2B */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Why Choose TRONAP?</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#00C2E0] mt-1 flex-shrink-0" size={20} />
                  <span className="text-slate-600"><strong>Scalable Architecture:</strong> Solutions that grow with your company.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#00C2E0] mt-1 flex-shrink-0" size={20} />
                  <span className="text-slate-600"><strong>Security First:</strong> Enterprise-grade security protocols to protect sensitive data.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#00C2E0] mt-1 flex-shrink-0" size={20} />
                  <span className="text-slate-600"><strong>Custom Development:</strong> Tailored specifically to your industry needs.</span>
                </li>
              </ul>
            </div>

          </div>

          {/* RIGHT COLUMN: Sidebar (Navigation & Contact) */}
          <div className="w-full lg:w-1/3 space-y-8">
            
            {/* Other Services Menu */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Other Services</h3>
              <ul className="space-y-2">
                {otherServices.map((service, index) => (
                  <li key={index}>
                    <Link 
                      to={service.path} 
                      className="flex items-center justify-between p-3 rounded-lg bg-slate-50 hover:bg-[#00C2E0] hover:text-white transition-all duration-300 group text-slate-600 font-medium"
                    >
                      {service.name}
                      <ArrowRight size={16} className="text-slate-400 group-hover:text-white" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Widget */}
            <div className="bg-[#0f172a] p-8 rounded-xl shadow-lg text-white text-center">
              <div className="bg-[#00C2E0] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Have a Project?</h3>
              <p className="text-slate-300 text-sm mb-6">
                Let's discuss how our B2B solutions can transform your business efficiency.
              </p>
              <Link to="/contact">
                <button className="w-full bg-[#00C2E0] hover:bg-[#00aec9] text-white py-3 rounded-full font-bold transition-colors">
                  Contact Us Now
                </button>
              </Link>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

// Helper Component for Feature Cards
const FeatureCard = ({ icon, title, desc }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-cyan-100 transition-all">
    <div className="mb-4 bg-cyan-50 w-12 h-12 flex items-center justify-center rounded-lg">
      {icon}
    </div>
    <h4 className="text-lg font-bold text-slate-800 mb-2">{title}</h4>
    <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
  </div>
);

export default B2BSolutions;