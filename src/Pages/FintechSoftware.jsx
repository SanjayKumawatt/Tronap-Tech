import React from 'react';
import { Link } from 'react-router-dom';
import { BadgeDollarSign, Lock, Wallet, TrendingUp, ArrowRight, ShieldCheck, Building2, Coins } from 'lucide-react';

const FintechSoftware = () => {
  
  // Sidebar Links
  const otherServices = [
    { name: "B2B Software Solutions", path: "/services/b2b-solutions" },
    { name: "Cloud Solutions", path: "/services/cloud-solutions" },
    { name: "Android App Development", path: "/services/android-development" },
    { name: "CRM Solutions", path: "/services/crm-solutions" },
  ];

  return (
    // 'pt-20' added for fixed header spacing
    <div className="bg-slate-50 min-h-screen pt-20">
      
      {/* --- Hero Section --- */}
      <div className="relative bg-slate-900 py-20">
        <div className="absolute inset-0 overflow-hidden">
          {/* Fintech Background Image */}
          <img 
            src="https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&w=1600&q=80" 
            alt="Fintech Background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Fintech Software Development
          </h1>
          <div className="flex justify-center items-center gap-2 text-slate-400 text-sm font-medium">
            <Link to="/" className="hover:text-[#00C2E0]">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-[#00C2E0]">Services</Link>
            <span>/</span>
            <span className="text-[#00C2E0]">Fintech</span>
          </div>
        </div>
      </div>

      {/* --- Main Content Area --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* LEFT COLUMN: Main Content */}
          <div className="w-full lg:w-2/3">
            
            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              Next-Gen Financial Technology Solutions
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed text-lg">
              The financial industry is evolving rapidly. At TRONAP Technologies, we empower banks, financial institutions, and startups with cutting-edge software that ensures secure, seamless, and compliant financial transactions.
            </p>
            <p className="text-slate-600 mb-10 leading-relaxed text-lg">
              We specialize in building robust platforms for digital banking, payment gateways, wealth management, and blockchain applications. Our solutions prioritize data security (PCI-DSS compliance) and user experience, helping you build trust with your customers.
            </p>

            {/* Key Features Grid */}
            <h3 className="text-2xl font-bold text-slate-800 mb-6 border-l-4 border-[#00C2E0] pl-4">
              Fintech Solutions We Build
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              
              <FeatureCard 
                icon={<Wallet className="text-[#00C2E0]" />}
                title="Digital Wallets"
                desc="Secure mobile wallets for peer-to-peer (P2P) transfers, bill payments, and QR code scanning."
              />
              <FeatureCard 
                icon={<Lock className="text-[#00C2E0]" />}
                title="Secure Payments"
                desc="Custom payment gateway integration with fraud detection and multi-currency support."
              />
              <FeatureCard 
                icon={<TrendingUp className="text-[#00C2E0]" />}
                title="Wealth Management"
                desc="Robo-advisory and investment platforms with real-time market data analytics."
              />
              <FeatureCard 
                icon={<Coins className="text-[#00C2E0]" />}
                title="Blockchain & Crypto"
                desc="Decentralized finance (DeFi) apps, smart contracts, and crypto exchange platforms."
              />

            </div>

            {/* Compliance & Security Section */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Security & Compliance First</h3>
              <div className="space-y-4">
                <SecurityFeature 
                    title="Bank-Grade Security" 
                    desc="AES-256 encryption and multi-factor authentication (MFA) to protect user assets." 
                    icon={<ShieldCheck size={20} className="text-[#00C2E0]" />}
                />
                <SecurityFeature 
                    title="Regulatory Compliance" 
                    desc="Adherence to KYC, AML, GDPR, and PCI-DSS standards for global operations." 
                    icon={<Building2 size={20} className="text-[#00C2E0]" />}
                />
                <SecurityFeature 
                    title="Real-Time Fraud Detection" 
                    desc="AI-driven algorithms to detect and prevent suspicious activities instantly." 
                    icon={<BadgeDollarSign size={20} className="text-[#00C2E0]" />}
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
                <h3 className="text-xl font-bold text-slate-800 mb-4">Fintech Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                    {['Python', 'Java', 'Node.js', 'Blockchain', 'Solidity', 'AWS', 'Docker', 'Kubernetes'].map((tag) => (
                        <span key={tag} className="bg-cyan-50 text-[#008ba3] text-xs font-bold px-3 py-1 rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Contact Widget */}
            <div className="bg-[#0f172a] p-8 rounded-xl shadow-lg text-white text-center">
              <div className="bg-[#00C2E0] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <BadgeDollarSign size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Build a Fintech App?</h3>
              <p className="text-slate-300 text-sm mb-6">
                Let's disrupt the financial sector with innovative technology.
              </p>
              <Link to="/contact">
                <button className="w-full bg-[#00C2E0] hover:bg-[#00aec9] text-white py-3 rounded-full font-bold transition-colors">
                  Consult Experts
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

const SecurityFeature = ({ title, desc, icon }) => (
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

export default FintechSoftware;