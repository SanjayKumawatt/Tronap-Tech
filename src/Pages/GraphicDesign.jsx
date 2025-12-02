import React from 'react';
import { Link } from 'react-router-dom';
import { Palette, PenTool, LayoutTemplate, Image, ArrowRight, Layers, FileImage, PaintBucket } from 'lucide-react';

const GraphicDesign = () => {
  
  // Sidebar Links
  const otherServices = [
    { name: "Website Development", path: "/services/website-development" },
    { name: "Digital Marketing", path: "/services/digital-marketing" },
    { name: "UI/UX Design", path: "/services/ui-ux-design" }, // Assuming you might have this or similar
    { name: "E-Commerce Services", path: "/services/ecommerce-services" },
  ];

  return (
    // 'pt-20' added for fixed header spacing
    <div className="bg-slate-50 min-h-screen pt-20">
      
      {/* --- Hero Section --- */}
      <div className="relative bg-slate-900 py-20">
        <div className="absolute inset-0 overflow-hidden">
          {/* Creative Background Image */}
          <img 
            src="https://images.unsplash.com/photo-1626785774573-4b799312c95d?auto=format&fit=crop&w=1600&q=80" 
            alt="Graphic Design Background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Graphic Design Services
          </h1>
          <div className="flex justify-center items-center gap-2 text-slate-400 text-sm font-medium">
            <Link to="/" className="hover:text-[#00C2E0]">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-[#00C2E0]">Services</Link>
            <span>/</span>
            <span className="text-[#00C2E0]">Graphic Design</span>
          </div>
        </div>
      </div>

      {/* --- Main Content Area --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* LEFT COLUMN: Main Content */}
          <div className="w-full lg:w-2/3">
            
            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              Elevate Your Brand with Stunning Visuals
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed text-lg">
              First impressions matter. In a crowded digital marketplace, your visual identity is what sets you apart. At TRONAP Technologies, our creative team combines art with strategy to design visuals that not only look good but also communicate your brand's message effectively.
            </p>
            <p className="text-slate-600 mb-10 leading-relaxed text-lg">
              From designing a unique logo that defines your identity to creating engaging social media posts that stop the scroll, we provide comprehensive graphic design solutions. We use industry-leading tools like Adobe Creative Cloud to ensure high-quality, print-ready, and digital-optimized assets.
            </p>

            {/* Key Features Grid */}
            <h3 className="text-2xl font-bold text-slate-800 mb-6 border-l-4 border-[#00C2E0] pl-4">
              Our Design Expertise
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              
              <FeatureCard 
                icon={<PenTool className="text-[#00C2E0]" />}
                title="Logo & Branding"
                desc="Creating memorable logos and complete brand style guides (colors, fonts, tone)."
              />
              <FeatureCard 
                icon={<Image className="text-[#00C2E0]" />}
                title="Social Media Creatives"
                desc="Engaging posts, stories, and banners tailored for Instagram, LinkedIn, and Facebook."
              />
              <FeatureCard 
                icon={<LayoutTemplate className="text-[#00C2E0]" />}
                title="Marketing Materials"
                desc="Professional brochures, flyers, business cards, and presentations."
              />
              <FeatureCard 
                icon={<Layers className="text-[#00C2E0]" />}
                title="Infographics"
                desc="Turning complex data into easy-to-understand and visually appealing graphics."
              />

            </div>

            {/* Design Process / Why Us */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Why Choose Our Design Team?</h3>
              <div className="space-y-4">
                <DesignBenefit 
                    title="Creative Concepts" 
                    desc="We don't use templates. Every design is crafted from scratch to match your vision." 
                    icon={<PaintBucket size={20} className="text-[#00C2E0]" />}
                />
                <DesignBenefit 
                    title="Brand Consistency" 
                    desc="We ensure all visuals align with your brand guidelines for a uniform identity." 
                    icon={<Palette size={20} className="text-[#00C2E0]" />}
                />
                <DesignBenefit 
                    title="Fast Turnaround" 
                    desc="High-quality designs delivered within deadlines to keep your marketing moving." 
                    icon={<FileImage size={20} className="text-[#00C2E0]" />}
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

            {/* Tools Stack Widget */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Tools We Use</h3>
                <div className="flex flex-wrap gap-2">
                    {['Photoshop', 'Illustrator', 'InDesign', 'Figma', 'Canva', 'CorelDRAW', 'Lightroom'].map((tag) => (
                        <span key={tag} className="bg-cyan-50 text-[#008ba3] text-xs font-bold px-3 py-1 rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Contact Widget */}
            <div className="bg-[#0f172a] p-8 rounded-xl shadow-lg text-white text-center">
              <div className="bg-[#00C2E0] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Need Creative Designs?</h3>
              <p className="text-slate-300 text-sm mb-6">
                Let's give your brand a visual makeover that attracts customers.
              </p>
              <Link to="/contact">
                <button className="w-full bg-[#00C2E0] hover:bg-[#00aec9] text-white py-3 rounded-full font-bold transition-colors">
                  Contact Design Team
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

const DesignBenefit = ({ title, desc, icon }) => (
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

export default GraphicDesign;