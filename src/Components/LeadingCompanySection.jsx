import React from 'react';
import { CheckCircle2, Zap, ShieldCheck, TrendingUp, Layers, Cpu, Headset } from 'lucide-react';

const LeadingCompanySection = () => {
  return (
    // Background Gradient: Light Blue to White (Image jaisa)
    <section className="w-full bg-gradient-to-b from-cyan-50 to-white py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- Main Heading --- */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
            India's Leading Software Company
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Welcome to <span className="font-bold text-slate-900">TRONAP Technologies Private Limited</span>, a leading fintech software company dedicated to transforming the financial technology landscape with next-generation solutions. Our innovative products and services empower businesses, financial institutions, and individuals with seamless, secure, and efficient digital financial experiences.
          </p>
        </div>

        {/* --- Specialization Section --- */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-slate-900 mb-4 border-l-4 border-[#00C2E0] pl-3">
            At TRONAP Technologies, we specialize in developing:
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <SpecialtyItem 
              title="Digital Payment Platforms" 
              desc="Fast, secure, and scalable payment solutions." 
            />
            <SpecialtyItem 
              title="Website Development" 
              desc="Transparent and decentralized financial ecosystems." 
            />
            <SpecialtyItem 
              title="Android App Dev" 
              desc="Advanced insights for better decision-making." 
            />
            <SpecialtyItem 
              title="Wealth Management Platforms" 
              desc="Tools for managing financial portfolios effortlessly." 
            />
          </div>

          <p className="mt-8 text-slate-700 leading-relaxed italic">
            Our commitment to innovation, agility, and security has made us a trusted partner for fintech transformation. We stay ahead of industry trends with cutting-edge technologies and customer-centric solutions that adapt to your unique business needs.
          </p>
        </div>

        {/* --- Why Choose Us Section --- */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-cyan-100">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">
            Why choose <span className="text-[#00C2E0]">TRONAP?</span>
          </h3>
          
          <div className="space-y-6">
            {/* Reason 1 */}
            <div className="flex gap-4">
              <div className="mt-1 bg-cyan-100 p-2 rounded-lg h-fit">
                <Layers className="text-[#00C2E0]" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg">Scalable Solutions</h4>
                <p className="text-slate-600">Our fintech software grows with your business.</p>
              </div>
            </div>

            {/* Reason 2 */}
            <div className="flex gap-4">
              <div className="mt-1 bg-cyan-100 p-2 rounded-lg h-fit">
                <Cpu className="text-[#00C2E0]" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg">Future-Ready Technology</h4>
                <p className="text-slate-600">Stay ahead with AI, blockchain, and cloud-based innovations.</p>
              </div>
            </div>

            {/* Reason 3 */}
            <div className="flex gap-4">
              <div className="mt-1 bg-cyan-100 p-2 rounded-lg h-fit">
                <Headset className="text-[#00C2E0]" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg">End-to-End Support</h4>
                <p className="text-slate-600">From consultation to implementation, we’ve got you covered.</p>
              </div>
            </div>
          </div>
        </div>

        {/* --- Closing CTA --- */}
        <div className="mt-12 text-center">
          <p className="text-lg font-medium text-slate-800">
            Join TRONAP today and experience fintech solutions that redefine financial management and drive your business forward.
          </p>
        </div>

      </div>
    </section>
  );
};

// Chhota helper component taaki code clean rahe
const SpecialtyItem = ({ title, desc }) => (
  <div className="flex items-start gap-3 bg-white/60 p-4 rounded-lg border border-slate-100 hover:border-cyan-200 transition-colors">
    <CheckCircle2 className="text-[#00C2E0] flex-shrink-0 mt-1" size={20} />
    <div>
      <span className="font-bold text-slate-900 block">{title}</span>
      <span className="text-slate-600 text-sm">{desc}</span>
    </div>
  </div>
);

export default LeadingCompanySection;