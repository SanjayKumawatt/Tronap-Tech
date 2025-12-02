import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Code2, ShieldCheck, Zap, ArrowRight, Phone, Layers } from 'lucide-react';

const AndroidDevelopment = () => {
  
  // Sidebar links (Current page ko chhod kar)
  const otherServices = [
    { name: "B2B Software Solutions", path: "/services/b2b-solutions" },
    { name: "Website Development", path: "/services/website-development" },
    { name: "Fintech Software", path: "/services/fintech-software" },
    { name: "iOS App Development", path: "/services/ios-development" }, // Added relevant link
  ];

  return (
    // "pt-20" added here as requested to handle fixed header
    <div className="bg-slate-50 min-h-screen pt-20">
      
      {/* --- Hero Section --- */}
      <div className="relative bg-slate-900 py-20">
        <div className="absolute inset-0 overflow-hidden">
          {/* Mobile Tech Background Image */}
          <img 
            src="https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&w=1600&q=80" 
            alt="Android Development Background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Android App Development
          </h1>
          <div className="flex justify-center items-center gap-2 text-slate-400 text-sm font-medium">
            <Link to="/" className="hover:text-[#00C2E0]">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-[#00C2E0]">Services</Link>
            <span>/</span>
            <span className="text-[#00C2E0]">Android App</span>
          </div>
        </div>
      </div>

      {/* --- Main Content Area --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* LEFT COLUMN: Main Content */}
          <div className="w-full lg:w-2/3">
            
            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              Transform Your Business with Custom Android Apps
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed text-lg">
              With over 2.5 billion active users, Android is the world's most popular mobile operating system. At TRONAP Technologies, we craft high-performance, secure, and user-friendly Android applications that help you reach this massive audience effectively.
            </p>
            <p className="text-slate-600 mb-10 leading-relaxed text-lg">
              Whether you need a native app built with Kotlin/Java for maximum performance or a cross-platform solution using Flutter/React Native, our expert team ensures your app stands out on the Google Play Store. We handle the entire lifecycle—from concept and design to development, testing, and deployment.
            </p>

            {/* Key Features Grid */}
            <h3 className="text-2xl font-bold text-slate-800 mb-6 border-l-4 border-[#00C2E0] pl-4">
              Our Android Expertise
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              
              <FeatureCard 
                icon={<Smartphone className="text-[#00C2E0]" />}
                title="Custom App Development"
                desc="Tailor-made applications designed specifically to meet your unique business requirements."
              />
              <FeatureCard 
                icon={<Code2 className="text-[#00C2E0]" />}
                title="Native & Hybrid"
                desc="Expertise in both Native (Kotlin/Java) and Hybrid (Flutter/React Native) technologies."
              />
              <FeatureCard 
                icon={<Zap className="text-[#00C2E0]" />}
                title="High Performance"
                desc="Optimized code for fast loading times, smooth animations, and battery efficiency."
              />
              <FeatureCard 
                icon={<ShieldCheck className="text-[#00C2E0]" />}
                title="Secure & Scalable"
                desc="Enterprise-grade security protocols and architecture that grows with your user base."
              />

            </div>

            {/* Development Process (Simple Steps) */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Our Development Process</h3>
              <div className="space-y-6">
                <ProcessStep 
                  num="01" 
                  title="Discovery & Strategy" 
                  desc="We analyze your idea, target audience, and competitors to create a roadmap." 
                />
                <ProcessStep 
                  num="02" 
                  title="UI/UX Design" 
                  desc="Creating intuitive and engaging interfaces that users love." 
                />
                <ProcessStep 
                  num="03" 
                  title="Development & Testing" 
                  desc="Coding with clean standards and rigorous testing for bugs." 
                />
                <ProcessStep 
                  num="04" 
                  title="Launch & Support" 
                  desc="Deploying to Play Store and providing ongoing maintenance." 
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
                <h3 className="text-xl font-bold text-slate-800 mb-4">Technologies We Use</h3>
                <div className="flex flex-wrap gap-2">
                    {['Kotlin', 'Java', 'Flutter', 'React Native', 'Android SDK', 'Firebase', 'SQLite'].map((tag) => (
                        <span key={tag} className="bg-cyan-50 text-[#008ba3] text-xs font-bold px-3 py-1 rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Contact Widget */}
            <div className="bg-[#0f172a] p-8 rounded-xl shadow-lg text-white text-center">
              <div className="bg-[#00C2E0] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Go Mobile!</h3>
              <p className="text-slate-300 text-sm mb-6">
                Ready to launch your app? Let's build something amazing together.
              </p>
              <Link to="/contact">
                <button className="w-full bg-[#00C2E0] hover:bg-[#00aec9] text-white py-3 rounded-full font-bold transition-colors">
                  Start Project
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

const ProcessStep = ({ num, title, desc }) => (
    <div className="flex gap-4">
        <div className="text-3xl font-black text-slate-200">{num}</div>
        <div>
            <h4 className="font-bold text-slate-900 text-lg">{title}</h4>
            <p className="text-slate-600 text-sm">{desc}</p>
        </div>
    </div>
);

export default AndroidDevelopment;