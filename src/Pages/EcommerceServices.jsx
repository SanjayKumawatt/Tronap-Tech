import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, CreditCard, Package, Smartphone, ArrowRight, Store, Truck, BarChart } from 'lucide-react';

const EcommerceServices = () => {
  
  // Sidebar Links
  const otherServices = [
    { name: "Website Development", path: "/services/website-development" },
    { name: "Digital Marketing", path: "/services/digital-marketing" }, // Crucial for E-com
    { name: "Fintech Software", path: "/services/fintech-software" },
    { name: "Android App Development", path: "/services/android-development" },
  ];

  return (
    // 'pt-20' added for fixed header spacing
    <div className="bg-slate-50 min-h-screen pt-20">
      
      {/* --- Hero Section --- */}
      <div className="relative bg-slate-900 py-20">
        <div className="absolute inset-0 overflow-hidden">
          {/* E-Commerce Background Image */}
          <img 
            src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1600&q=80" 
            alt="E-Commerce Background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            E-Commerce Services
          </h1>
          <div className="flex justify-center items-center gap-2 text-slate-400 text-sm font-medium">
            <Link to="/" className="hover:text-[#00C2E0]">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-[#00C2E0]">Services</Link>
            <span>/</span>
            <span className="text-[#00C2E0]">E-Commerce</span>
          </div>
        </div>
      </div>

      {/* --- Main Content Area --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* LEFT COLUMN: Main Content */}
          <div className="w-full lg:w-2/3">
            
            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              Launch a Powerful Online Store
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed text-lg">
              In the retail world, your online store is your 24/7 salesperson. At TRONAP Technologies, we build robust, scalable, and visually stunning e-commerce platforms that turn visitors into loyal customers.
            </p>
            <p className="text-slate-600 mb-10 leading-relaxed text-lg">
              Whether you need a custom-built marketplace using MERN Stack, or a quick store setup on Shopify/WooCommerce, we provide end-to-end solutions. We focus on smooth user journeys, secure payment integrations, and easy-to-manage inventory systems to maximize your ROI.
            </p>

            {/* Key Features Grid */}
            <h3 className="text-2xl font-bold text-slate-800 mb-6 border-l-4 border-[#00C2E0] pl-4">
              Our E-Commerce Solutions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              
              <FeatureCard 
                icon={<Store className="text-[#00C2E0]" />}
                title="Custom Storefronts"
                desc="Unique designs tailored to your brand, ensuring you stand out from competitors."
              />
              <FeatureCard 
                icon={<CreditCard className="text-[#00C2E0]" />}
                title="Payment Integration"
                desc="Secure setup of gateways like Stripe, PayPal, Razorpay for seamless transactions."
              />
              <FeatureCard 
                icon={<Smartphone className="text-[#00C2E0]" />}
                title="m-Commerce Ready"
                desc="Fully responsive mobile designs and apps so customers can shop on the go."
              />
              <FeatureCard 
                icon={<Package className="text-[#00C2E0]" />}
                title="Inventory Management"
                desc="Automated tools to track stock levels, orders, and shipments in real-time."
              />

            </div>

            {/* Platforms Section */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Platforms We Support</h3>
              <div className="space-y-4">
                <PlatformItem 
                    title="Shopify / Shopify Plus" 
                    desc="Perfect for quick launches and scalable dropshipping businesses." 
                    icon={<ShoppingCart size={20} className="text-[#00C2E0]" />}
                />
                <PlatformItem 
                    title="WooCommerce" 
                    desc="Flexible WordPress-based stores with endless customization plugins." 
                    icon={<Store size={20} className="text-[#00C2E0]" />}
                />
                <PlatformItem 
                    title="Custom Development (MERN)" 
                    desc="High-performance, bespoke marketplaces built with React and Node.js." 
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
                <h3 className="text-xl font-bold text-slate-800 mb-4">E-Com Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                    {['Shopify', 'WooCommerce', 'Magento', 'React.js', 'Node.js', 'Stripe', 'Razorpay', 'MongoDB'].map((tag) => (
                        <span key={tag} className="bg-cyan-50 text-[#008ba3] text-xs font-bold px-3 py-1 rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Contact Widget */}
            <div className="bg-[#0f172a] p-8 rounded-xl shadow-lg text-white text-center">
              <div className="bg-[#00C2E0] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Start Selling Online?</h3>
              <p className="text-slate-300 text-sm mb-6">
                Let's build an online store that drives revenue.
              </p>
              <Link to="/contact">
                <button className="w-full bg-[#00C2E0] hover:bg-[#00aec9] text-white py-3 rounded-full font-bold transition-colors">
                  Launch Your Store
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

const PlatformItem = ({ title, desc, icon }) => (
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

export default EcommerceServices;