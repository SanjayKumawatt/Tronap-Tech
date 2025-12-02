import React from 'react';
import { Link } from 'react-router-dom';
import { CloudLightning, Users, BarChart, Settings, ArrowRight, Database, Code2, Globe } from 'lucide-react';

const SalesforceServices = () => {
  
  // Sidebar Links - Related to Salesforce
  const otherServices = [
    { name: "CRM Solutions", path: "/services/crm-solutions" },
    { name: "B2B Software Solutions", path: "/services/b2b-solutions" },
    { name: "Cloud Solutions", path: "/services/cloud-solutions" },
    { name: "API Services", path: "/services/api-services" },
  ];

  return (
    // 'pt-20' added for fixed header spacing
    <div className="bg-slate-50 min-h-screen pt-20">
      
      {/* --- Hero Section --- */}
      <div className="relative bg-slate-900 py-20">
        <div className="absolute inset-0 overflow-hidden">
          {/* Salesforce/Corporate Background Image */}
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80" 
            alt="Salesforce Services Background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Salesforce Services
          </h1>
          <div className="flex justify-center items-center gap-2 text-slate-400 text-sm font-medium">
            <Link to="/" className="hover:text-[#00C2E0]">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-[#00C2E0]">Services</Link>
            <span>/</span>
            <span className="text-[#00C2E0]">Salesforce</span>
          </div>
        </div>
      </div>

      {/* --- Main Content Area --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* LEFT COLUMN: Main Content */}
          <div className="w-full lg:w-2/3">
            
            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              Unlock the Full Potential of Salesforce
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed text-lg">
              Salesforce is the world's #1 CRM, but maximizing its ROI requires expert implementation and customization. At TRONAP Technologies, we provide end-to-end Salesforce solutions tailored to your business processes.
            </p>
            <p className="text-slate-600 mb-10 leading-relaxed text-lg">
              Whether you are looking to implement Sales Cloud for your sales team, Service Cloud for customer support, or need custom development using Apex and Lightning Web Components (LWC), our certified developers ensure seamless integration and automation.
            </p>

            {/* Key Features Grid */}
            <h3 className="text-2xl font-bold text-slate-800 mb-6 border-l-4 border-[#00C2E0] pl-4">
              Our Salesforce Expertise
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              
              <FeatureCard 
                icon={<Users className="text-[#00C2E0]" />}
                title="Sales & Service Cloud"
                desc="Implementation and optimization of core Salesforce clouds to boost team productivity."
              />
              <FeatureCard 
                icon={<Code2 className="text-[#00C2E0]" />}
                title="Custom Development"
                desc="Building bespoke apps and components using Apex, Visualforce, and LWC."
              />
              <FeatureCard 
                icon={<Database className="text-[#00C2E0]" />}
                title="Data Migration"
                desc="Securely transferring legacy data to Salesforce with data cleansing and mapping."
              />
              <FeatureCard 
                icon={<CloudLightning className="text-[#00C2E0]" />}
                title="Integration Services"
                desc="Connecting Salesforce with ERPs, Marketing tools, and third-party APIs."
              />

            </div>

            {/* Why Choose Us Section */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Why Partner with TRONAP?</h3>
              <div className="space-y-4">
                <SalesforceBenefit 
                    title="Certified Experts" 
                    desc="Our team consists of certified Salesforce Administrators and Developers." 
                    icon={<Globe size={20} className="text-[#00C2E0]" />}
                />
                <SalesforceBenefit 
                    title="Tailored Solutions" 
                    desc="We don't believe in one-size-fits-all. We align Salesforce with YOUR workflows." 
                    icon={<Settings size={20} className="text-[#00C2E0]" />}
                />
                <SalesforceBenefit 
                    title="Ongoing Support" 
                    desc="Post-implementation support and managed services to keep your system running smoothly." 
                    icon={<BarChart size={20} className="text-[#00C2E0]" />}
                />
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Sidebar */}
          <div className="w-full lg:w-1/3 space-y-8">
            
            {/* Other Services Menu */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Explore More</h3>
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

            {/* Tech Stack Widget */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Salesforce Tech</h3>
                <div className="flex flex-wrap gap-2">
                    {['Apex', 'LWC', 'Visualforce', 'SOQL', 'Flow Builder', 'Sales Cloud', 'MuleSoft'].map((tag) => (
                        <span key={tag} className="bg-cyan-50 text-[#008ba3] text-xs font-bold px-3 py-1 rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Contact Widget */}
            <div className="bg-[#0f172a] p-8 rounded-xl shadow-lg text-white text-center">
              <div className="bg-[#00C2E0] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <CloudLightning size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Need Salesforce Help?</h3>
              <p className="text-slate-300 text-sm mb-6">
                Optimize your CRM strategy with our certified experts.
              </p>
              <Link to="/contact">
                <button className="w-full bg-[#00C2E0] hover:bg-[#00aec9] text-white py-3 rounded-full font-bold transition-colors">
                  Get a Consultation
                </button>
              </Link>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

// Helper Components
const FeatureCard = ({ icon, title, desc }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-cyan-100 transition-all">
    <div className="mb-4 bg-cyan-50 w-12 h-12 flex items-center justify-center rounded-lg">
      {icon}
    </div>
    <h4 className="text-lg font-bold text-slate-800 mb-2">{title}</h4>
    <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
  </div>
);

const SalesforceBenefit = ({ title, desc, icon }) => (
    <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
        <div className="bg-cyan-50 p-2 rounded-full mt-1">
            {icon}
        </div>
        <div>
            <h4 className="font-bold text-slate-800">{title}</h4>
            <p className="text-sm text-slate-600 mt-1">{desc}</p>
        </div>
    </div>
);

export default SalesforceServices;