import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Workflow, RefreshCw, Layers, ArrowRight, Monitor, Cpu, Terminal } from 'lucide-react';

const SoftwareDevelopment = () => {
  
  // Sidebar Links
  const otherServices = [
    { name: "B2B Software Solutions", path: "/services/b2b-solutions" },
    { name: "Fintech Software", path: "/services/fintech-software" },
    { name: "Website Development", path: "/services/website-development" },
    { name: "Cloud Solutions", path: "/services/cloud-solutions" },
  ];

  return (
    // 'pt-20' added for fixed header spacing
    <div className="bg-slate-50 min-h-screen pt-20">
      
      {/* --- Hero Section --- */}
      <div className="relative bg-slate-900 py-20">
        <div className="absolute inset-0 overflow-hidden">
          {/* Software Code Background Image */}
          <img 
            src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&w=1600&q=80" 
            alt="Software Development Background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Custom Software Development
          </h1>
          <div className="flex justify-center items-center gap-2 text-slate-400 text-sm font-medium">
            <Link to="/" className="hover:text-[#00C2E0]">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-[#00C2E0]">Services</Link>
            <span>/</span>
            <span className="text-[#00C2E0]">Software Dev</span>
          </div>
        </div>
      </div>

      {/* --- Main Content Area --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* LEFT COLUMN: Main Content */}
          <div className="w-full lg:w-2/3">
            
            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              Engineering Digital Excellence
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed text-lg">
              Off-the-shelf software often falls short of meeting specific business requirements. At TRONAP Technologies, we specialize in building bespoke software solutions that align perfectly with your operational goals. From enterprise-grade platforms to SaaS products, we engineer software that is scalable, secure, and built to last.
            </p>
            <p className="text-slate-600 mb-10 leading-relaxed text-lg">
              Our engineering team follows the Agile Methodology, ensuring rapid delivery, continuous feedback, and high flexibility. We handle the entire Software Development Life Cycle (SDLC)—from requirement gathering and system architecture to coding, testing, and maintenance.
            </p>

            {/* Key Features Grid */}
            <h3 className="text-2xl font-bold text-slate-800 mb-6 border-l-4 border-[#00C2E0] pl-4">
              Our Development Capabilities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              
              <FeatureCard 
                icon={<Code2 className="text-[#00C2E0]" />}
                title="Custom Enterprise Software"
                desc="Scalable software systems to automate workflows, manage resources, and improve productivity."
              />
              <FeatureCard 
                icon={<Monitor className="text-[#00C2E0]" />}
                title="SaaS Product Development"
                desc="End-to-end development of Software-as-a-Service products with multi-tenancy support."
              />
              <FeatureCard 
                icon={<RefreshCw className="text-[#00C2E0]" />}
                title="Legacy Modernization"
                desc="Upgrading outdated systems to modern tech stacks for better performance and security."
              />
              <FeatureCard 
                icon={<Layers className="text-[#00C2E0]" />}
                title="API Development & Integration"
                desc="Building robust RESTful and GraphQL APIs to connect disparate systems seamlessly."
              />

            </div>

            {/* SDLC Process Section */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">How We Build Software</h3>
              <div className="space-y-4">
                <ProcessItem 
                    title="1. Discovery & Planning" 
                    desc="We deeply understand your business needs to create a solid technical roadmap." 
                    icon={<Terminal size={20} className="text-[#00C2E0]" />}
                />
                <ProcessItem 
                    title="2. Agile Development" 
                    desc="Iterative coding sprints with regular updates, ensuring transparency and quality." 
                    icon={<Workflow size={20} className="text-[#00C2E0]" />}
                />
                <ProcessItem 
                    title="3. QA & Deployment" 
                    desc="Rigorous automated and manual testing before deploying to production environments." 
                    icon={<Cpu size={20} className="text-[#00C2E0]" />}
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
                <h3 className="text-xl font-bold text-slate-800 mb-4">Core Technologies</h3>
                <div className="flex flex-wrap gap-2">
                    {['Java', 'Python', '.NET Core', 'Node.js', 'React', 'Angular', 'Docker', 'Kubernetes', 'SQL', 'NoSQL'].map((tag) => (
                        <span key={tag} className="bg-cyan-50 text-[#008ba3] text-xs font-bold px-3 py-1 rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Contact Widget */}
            <div className="bg-[#0f172a] p-8 rounded-xl shadow-lg text-white text-center">
              <div className="bg-[#00C2E0] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code2 size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Have a Software Idea?</h3>
              <p className="text-slate-300 text-sm mb-6">
                Let's turn your complex requirements into a powerful software solution.
              </p>
              <Link to="/contact">
                <button className="w-full bg-[#00C2E0] hover:bg-[#00aec9] text-white py-3 rounded-full font-bold transition-colors">
                  Get a Free Quote
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

const ProcessItem = ({ title, desc, icon }) => (
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

export default SoftwareDevelopment;