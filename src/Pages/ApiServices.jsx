import React from 'react';
import { Link } from 'react-router-dom';
import { Webhook, Server, Database, Lock, ArrowRight, Code2, Share2, FileCode } from 'lucide-react';

const ApiServices = () => {
  
  // Sidebar Links
  const otherServices = [
    { name: "Software Development", path: "/services/software-development" },
    { name: "Cloud Solutions", path: "/services/cloud-solutions" },
    { name: "Fintech Software", path: "/services/fintech-software" },
    { name: "B2B Software Solutions", path: "/services/b2b-solutions" },
  ];

  return (
    // 'pt-20' added for fixed header spacing
    <div className="bg-slate-50 min-h-screen pt-20">
      
      {/* --- Hero Section --- */}
      <div className="relative bg-slate-900 py-20">
        <div className="absolute inset-0 overflow-hidden">
          {/* API/Server Background Image */}
          <img 
            src="https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=1600&q=80" 
            alt="API Services Background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            API Development & Integration
          </h1>
          <div className="flex justify-center items-center gap-2 text-slate-400 text-sm font-medium">
            <Link to="/" className="hover:text-[#00C2E0]">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-[#00C2E0]">Services</Link>
            <span>/</span>
            <span className="text-[#00C2E0]">API Services</span>
          </div>
        </div>
      </div>

      {/* --- Main Content Area --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* LEFT COLUMN: Main Content */}
          <div className="w-full lg:w-2/3">
            
            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              Seamlessly Connect Your Digital Ecosystem
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed text-lg">
              In a connected world, applications need to talk to each other. At TRONAP Technologies, we specialize in building robust, secure, and high-performance APIs that allow your software systems to communicate effortlessly.
            </p>
            <p className="text-slate-600 mb-10 leading-relaxed text-lg">
              Whether you need to expose your data to mobile apps, integrate third-party services like payment gateways, or build a microservices architecture, our team delivers RESTful and GraphQL APIs that are scalable and well-documented.
            </p>

            {/* Key Features Grid */}
            <h3 className="text-2xl font-bold text-slate-800 mb-6 border-l-4 border-[#00C2E0] pl-4">
              Our API Capabilities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              
              <FeatureCard 
                icon={<Code2 className="text-[#00C2E0]" />}
                title="Custom API Development"
                desc="Building robust REST and GraphQL APIs tailored to your specific business logic and data needs."
              />
              <FeatureCard 
                icon={<Share2 className="text-[#00C2E0]" />}
                title="Third-Party Integration"
                desc="Connecting your app with Stripe, Google Maps, Social Media, CRMs, and other external tools."
              />
              <FeatureCard 
                icon={<Server className="text-[#00C2E0]" />}
                title="Microservices Architecture"
                desc="Breaking down monolithic applications into smaller, manageable, and independent services."
              />
              <FeatureCard 
                icon={<Webhook className="text-[#00C2E0]" />}
                title="Legacy System API"
                desc="Creating API wrappers around old legacy systems to make them compatible with modern apps."
              />

            </div>

            {/* Why Choose Us Section */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Built for Performance & Security</h3>
              <div className="space-y-4">
                <ApiBenefit 
                    title="High Security" 
                    desc="Implementation of OAuth2, JWT, and API Keys to ensure only authorized access." 
                    icon={<Lock size={20} className="text-[#00C2E0]" />}
                />
                <ApiBenefit 
                    title="Scalability" 
                    desc="Designed to handle high loads and millions of requests without latency." 
                    icon={<Database size={20} className="text-[#00C2E0]" />}
                />
                <ApiBenefit 
                    title="Documentation" 
                    desc="Comprehensive Swagger/OpenAPI documentation for easy developer consumption." 
                    icon={<FileCode size={20} className="text-[#00C2E0]" />}
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
                <h3 className="text-xl font-bold text-slate-800 mb-4">API Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                    {['REST', 'GraphQL', 'Node.js', 'Python', 'Postman', 'Swagger', 'AWS API Gateway', 'OAuth2'].map((tag) => (
                        <span key={tag} className="bg-cyan-50 text-[#008ba3] text-xs font-bold px-3 py-1 rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Contact Widget */}
            <div className="bg-[#0f172a] p-8 rounded-xl shadow-lg text-white text-center">
              <div className="bg-[#00C2E0] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Webhook size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Need Custom APIs?</h3>
              <p className="text-slate-300 text-sm mb-6">
                Let's connect your systems and streamline your data flow.
              </p>
              <Link to="/contact">
                <button className="w-full bg-[#00C2E0] hover:bg-[#00aec9] text-white py-3 rounded-full font-bold transition-colors">
                  Discuss Integration
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

const ApiBenefit = ({ title, desc, icon }) => (
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

export default ApiServices;