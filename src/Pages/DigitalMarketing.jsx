import React from 'react';
import { Link } from 'react-router-dom';
import { Megaphone, Search, BarChart2, Mail, ArrowRight, MousePointer, Target, TrendingUp } from 'lucide-react';

const DigitalMarketing = () => {
  
  // Sidebar Links
  const otherServices = [
    { name: "Website Development", path: "/services/website-development" },
    { name: "E-Commerce Services", path: "/services/ecommerce-services" },
    { name: "Graphic Design", path: "/services/graphic-design" },
    { name: "CRM Solutions", path: "/services/crm-solutions" },
  ];

  return (
    // 'pt-20' added for fixed header spacing
    <div className="bg-slate-50 min-h-screen pt-20">
      
      {/* --- Hero Section --- */}
      <div className="relative bg-slate-900 py-20">
        <div className="absolute inset-0 overflow-hidden">
          {/* Digital Marketing Background Image */}
          <img 
            src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=1600&q=80" 
            alt="Digital Marketing Background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Digital Marketing Services
          </h1>
          <div className="flex justify-center items-center gap-2 text-slate-400 text-sm font-medium">
            <Link to="/" className="hover:text-[#00C2E0]">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-[#00C2E0]">Services</Link>
            <span>/</span>
            <span className="text-[#00C2E0]">Digital Marketing</span>
          </div>
        </div>
      </div>

      {/* --- Main Content Area --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* LEFT COLUMN: Main Content */}
          <div className="w-full lg:w-2/3">
            
            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              Grow Your Brand & Revenue Online
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed text-lg">
              In a world where everyone is online, visibility is everything. At TRONAP Technologies, we don't just run ads; we build data-driven marketing strategies that connect your brand with the right audience at the right time.
            </p>
            <p className="text-slate-600 mb-10 leading-relaxed text-lg">
              Our holistic approach combines Search Engine Optimization (SEO) to drive organic traffic, Social Media Marketing to build community, and Performance Marketing (PPC) to generate instant leads. We focus on measurable results—clicks, conversions, and ROI.
            </p>

            {/* Key Features Grid */}
            <h3 className="text-2xl font-bold text-slate-800 mb-6 border-l-4 border-[#00C2E0] pl-4">
              Our Marketing Strategies
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              
              <FeatureCard 
                icon={<Search className="text-[#00C2E0]" />}
                title="SEO (Search Engine Optimization)"
                desc="Ranking your website on Page 1 of Google to drive consistent, free organic traffic."
              />
              <FeatureCard 
                icon={<Megaphone className="text-[#00C2E0]" />}
                title="Social Media Marketing"
                desc="Building your brand presence on Instagram, LinkedIn, and Facebook with engaging content."
              />
              <FeatureCard 
                icon={<MousePointer className="text-[#00C2E0]" />}
                title="PPC (Google & Meta Ads)"
                desc="Targeted paid campaigns that generate high-quality leads and instant sales."
              />
              <FeatureCard 
                icon={<Mail className="text-[#00C2E0]" />}
                title="Email Marketing"
                desc="Personalized email sequences to nurture leads and retain existing customers."
              />

            </div>

            {/* Why Choose Us Section */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Why Choose Our Agency?</h3>
              <div className="space-y-4">
                <MarketingBenefit 
                    title="Data-Driven Approach" 
                    desc="We make decisions based on analytics and real-time data, not guesswork." 
                    icon={<BarChart2 size={20} className="text-[#00C2E0]" />}
                />
                <MarketingBenefit 
                    title="ROI Focused" 
                    desc="Our primary goal is to ensure you earn more than you spend on marketing." 
                    icon={<TrendingUp size={20} className="text-[#00C2E0]" />}
                />
                <MarketingBenefit 
                    title="Targeted Audience" 
                    desc="We pinpoint your ideal customer profile to ensure zero budget wastage." 
                    icon={<Target size={20} className="text-[#00C2E0]" />}
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

            {/* Marketing Tools Widget */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Marketing Tools</h3>
                <div className="flex flex-wrap gap-2">
                    {['Google Analytics', 'Google Ads', 'Meta Ads', 'SEMrush', 'Ahrefs', 'HubSpot', 'Mailchimp', 'Canva'].map((tag) => (
                        <span key={tag} className="bg-cyan-50 text-[#008ba3] text-xs font-bold px-3 py-1 rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Contact Widget */}
            <div className="bg-[#0f172a] p-8 rounded-xl shadow-lg text-white text-center">
              <div className="bg-[#00C2E0] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Want More Leads?</h3>
              <p className="text-slate-300 text-sm mb-6">
                Let's build a strategy that skyrockets your business growth.
              </p>
              <Link to="/contact">
                <button className="w-full bg-[#00C2E0] hover:bg-[#00aec9] text-white py-3 rounded-full font-bold transition-colors">
                  Get Free Audit
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

const MarketingBenefit = ({ title, desc, icon }) => (
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

export default DigitalMarketing;