import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Layout, Search, ShoppingCart, ArrowRight, Laptop, Server, Code } from 'lucide-react';

const WebsiteDevelopment = () => {
  
  // Sidebar Navigation Links
  const otherServices = [
    { name: "Android App Development", path: "/services/android-development" },
    { name: "B2B Software Solutions", path: "/services/b2b-solutions" },
    { name: "Fintech Software", path: "/services/fintech-software" },
    { name: "Digital Marketing", path: "/services/digital-marketing" },
  ];

  return (
    // 'pt-20' added for fixed header spacing
    <div className="bg-slate-50 min-h-screen pt-20">
      
      {/* --- Hero Section --- */}
      <div className="relative bg-slate-900 py-20">
        <div className="absolute inset-0 overflow-hidden">
          {/* Web Dev Background Image */}
          <img 
            src="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1600&q=80" 
            alt="Website Development Background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Website Development
          </h1>
          <div className="flex justify-center items-center gap-2 text-slate-400 text-sm font-medium">
            <Link to="/" className="hover:text-[#00C2E0]">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-[#00C2E0]">Services</Link>
            <span>/</span>
            <span className="text-[#00C2E0]">Web Development</span>
          </div>
        </div>
      </div>

      {/* --- Main Content Area --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* LEFT COLUMN: Main Content */}
          <div className="w-full lg:w-2/3">
            
            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              Your Digital Presence Starts Here
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed text-lg">
              In the digital age, your website is your most important marketing asset. It’s the first place potential customers go to learn about your business. At TRONAP Technologies, we don’t just build websites; we build high-performance digital experiences that convert visitors into loyal customers.
            </p>
            <p className="text-slate-600 mb-10 leading-relaxed text-lg">
              From simple corporate websites to complex web applications and e-commerce stores, our team utilizes the latest technologies like React, Next.js, and Node.js to deliver fast, secure, and SEO-friendly solutions tailored to your brand.
            </p>

            {/* Key Features Grid */}
            <h3 className="text-2xl font-bold text-slate-800 mb-6 border-l-4 border-[#00C2E0] pl-4">
              Why Choose Our Web Services?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              
              <FeatureCard 
                icon={<Layout className="text-[#00C2E0]" />}
                title="Responsive Design"
                desc="Mobile-first approach ensuring your site looks perfect on phones, tablets, and desktops."
              />
              <FeatureCard 
                icon={<Search className="text-[#00C2E0]" />}
                title="SEO Optimized"
                desc="Built with clean code and best practices to rank higher on Google search results."
              />
              <FeatureCard 
                icon={<Server className="text-[#00C2E0]" />}
                title="Fast Performance"
                desc="Optimized loading speeds to reduce bounce rates and improve user experience."
              />
              <FeatureCard 
                icon={<Code className="text-[#00C2E0]" />}
                title="Custom Development"
                desc="Tailored functionality and integrations to meet your specific business logic."
              />

            </div>

            {/* Types of Websites Section */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Types of Websites We Build</h3>
              <div className="space-y-4">
                <WebType 
                    title="Corporate Websites" 
                    desc="Professional sites to showcase your company portfolio and services." 
                    icon={<Globe size={20} className="text-[#00C2E0]" />}
                />
                <WebType 
                    title="E-Commerce Stores" 
                    desc="Full-featured online shops with payment gateways and inventory management." 
                    icon={<ShoppingCart size={20} className="text-[#00C2E0]" />}
                />
                <WebType 
                    title="Web Applications" 
                    desc="Complex, interactive platforms like dashboards, SaaS products, and portals." 
                    icon={<Laptop size={20} className="text-[#00C2E0]" />}
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
                <h3 className="text-xl font-bold text-slate-800 mb-4">Web Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                    {['React.js', 'Next.js', 'Node.js', 'Tailwind CSS', 'MongoDB', 'PostgreSQL', 'WordPress', 'Shopify'].map((tag) => (
                        <span key={tag} className="bg-cyan-50 text-[#008ba3] text-xs font-bold px-3 py-1 rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Contact Widget */}
            <div className="bg-[#0f172a] p-8 rounded-xl shadow-lg text-white text-center">
              <div className="bg-[#00C2E0] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Need a Website?</h3>
              <p className="text-slate-300 text-sm mb-6">
                Let's build a stunning website that drives results for your business.
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

const WebType = ({ title, desc, icon }) => (
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

export default WebsiteDevelopment;