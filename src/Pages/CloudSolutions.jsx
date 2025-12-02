import React from 'react';
import { Link } from 'react-router-dom';
import { Cloud, Server, Database, Lock, ArrowRight, UploadCloud, Network, Settings } from 'lucide-react';

const CloudSolutions = () => {
  
  // Sidebar Links
  const otherServices = [
    { name: "B2B Software Solutions", path: "/services/b2b-solutions" },
    { name: "Fintech Software", path: "/services/fintech-software" },
    { name: "Website Development", path: "/services/website-development" },
    { name: "API Services", path: "/services/api-services" },
  ];

  return (
    // 'pt-20' added for fixed header spacing
    <div className="bg-slate-50 min-h-screen pt-20">
      
      {/* --- Hero Section --- */}
      <div className="relative bg-slate-900 py-20">
        <div className="absolute inset-0 overflow-hidden">
          {/* Cloud Background Image */}
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80" 
            alt="Cloud Solutions Background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Cloud Computing Solutions
          </h1>
          <div className="flex justify-center items-center gap-2 text-slate-400 text-sm font-medium">
            <Link to="/" className="hover:text-[#00C2E0]">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-[#00C2E0]">Services</Link>
            <span>/</span>
            <span className="text-[#00C2E0]">Cloud Solutions</span>
          </div>
        </div>
      </div>

      {/* --- Main Content Area --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* LEFT COLUMN: Main Content */}
          <div className="w-full lg:w-2/3">
            
            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              Scale Your Business with the Power of Cloud
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed text-lg">
              In the modern digital landscape, agility is everything. Moving to the cloud isn't just about saving storage costs; it's about enabling innovation, flexibility, and global reach. At TRONAP Technologies, we provide end-to-end cloud services that help businesses migrate, optimize, and secure their digital infrastructure.
            </p>
            <p className="text-slate-600 mb-10 leading-relaxed text-lg">
              Whether you are looking to migrate legacy systems to the cloud, build serverless applications, or implement DevOps pipelines, our certified experts work with leading platforms like AWS, Microsoft Azure, and Google Cloud to deliver scalable and cost-effective solutions.
            </p>

            {/* Key Features Grid */}
            <h3 className="text-2xl font-bold text-slate-800 mb-6 border-l-4 border-[#00C2E0] pl-4">
              Our Cloud Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              
              <FeatureCard 
                icon={<UploadCloud className="text-[#00C2E0]" />}
                title="Cloud Migration"
                desc="Seamlessly move your applications and data to the cloud with zero downtime strategies."
              />
              <FeatureCard 
                icon={<Network className="text-[#00C2E0]" />}
                title="Cloud Architecture"
                desc="Designing robust, high-availability, and fault-tolerant infrastructure tailored to your needs."
              />
              <FeatureCard 
                icon={<Settings className="text-[#00C2E0]" />}
                title="DevOps & CI/CD"
                desc="Automating deployment pipelines to speed up release cycles and improve software quality."
              />
              <FeatureCard 
                icon={<Lock className="text-[#00C2E0]" />}
                title="Cloud Security"
                desc="Implementing advanced firewalls, encryption, and compliance monitoring to protect data."
              />

            </div>

            {/* Benefits Section */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Why Move to Cloud?</h3>
              <div className="space-y-4">
                <CloudBenefit 
                    title="Scalability" 
                    desc="Instantly scale resources up or down based on traffic demands." 
                    icon={<Server size={20} className="text-[#00C2E0]" />}
                />
                <CloudBenefit 
                    title="Cost Efficiency" 
                    desc="Pay only for what you use (Pay-as-you-go models) reducing CAPEX." 
                    icon={<Database size={20} className="text-[#00C2E0]" />}
                />
                <CloudBenefit 
                    title="Disaster Recovery" 
                    desc="Automated backups and geo-redundancy ensure your business never stops." 
                    icon={<Cloud size={20} className="text-[#00C2E0]" />}
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

            {/* Cloud Tech Stack Widget */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Cloud Platforms</h3>
                <div className="flex flex-wrap gap-2">
                    {['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'Linux'].map((tag) => (
                        <span key={tag} className="bg-cyan-50 text-[#008ba3] text-xs font-bold px-3 py-1 rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Contact Widget */}
            <div className="bg-[#0f172a] p-8 rounded-xl shadow-lg text-white text-center">
              <div className="bg-[#00C2E0] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cloud size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Cloud Consultation?</h3>
              <p className="text-slate-300 text-sm mb-6">
                Get a free assessment of your infrastructure and migration plan.
              </p>
              <Link to="/contact">
                <button className="w-full bg-[#00C2E0] hover:bg-[#00aec9] text-white py-3 rounded-full font-bold transition-colors">
                  Talk to Architect
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

const CloudBenefit = ({ title, desc, icon }) => (
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

export default CloudSolutions;