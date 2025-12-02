import React from 'react';
import { Link } from 'react-router-dom';

const WhoWeAre = () => {
  return (
    <div className="w-full overflow-hidden">
      
      {/* --- PART 1: Who We Are (Hands Image Section) --- */}
      <section className="w-full bg-gradient-to-r from-cyan-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            
            {/* Left: Image (Hands Circle) */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white max-w-md">
                <img 
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80" 
                  alt="Team Hands Joined" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right: Text Content */}
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold text-slate-800 mb-6 border-b-2 border-slate-200 pb-2 inline-block">
                Who We Are
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                We are a leading software solutions company committed to driving business success through innovation and technology. Our team of experienced professionals is dedicated to delivering cutting-edge services tailored to our clients' needs.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                With a strong focus on client satisfaction, we provide comprehensive solutions for a wide range of industries. We strive to enhance operational efficiency, improve customer engagement, and deliver outstanding business outcomes.
              </p>

              <div className="mb-6">
                <h3 className="text-[#00C2E0] font-bold text-xl mb-2">Our Mission</h3>
                <p className="text-slate-500 text-sm">
                  Our mission is to provide innovative, reliable, and scalable solutions that empower businesses to achieve their goals.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-[#00C2E0] font-bold text-xl mb-2">Core Values</h3>
                <p className="text-slate-500 text-sm">
                  Integrity, Innovation, Customer-Centricity, and Excellence are at the heart of everything we do.
                </p>
              </div>

              <Link to="/about">
                <button className="bg-[#00C2E0] hover:bg-[#00aec9] text-white px-6 py-3 rounded-md font-bold transition-all shadow-md">
                  Learn More About Us
                </button>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* --- PART 2: Mission & Vision Strip (Grey Background) --- */}
      {/* Section 1: Our Mission */}
      <section className="w-full bg-slate-100 py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/3">
             {/* Placeholder for 'OUR MISSION' card image */}
             <div className="bg-white p-2 shadow-lg rotate-3 max-w-xs mx-auto">
                <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80" alt="Mission" className="w-full" />
             </div>
          </div>
          <div className="w-full md:w-2/3">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Mission</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              At TRONAP, our mission is to deliver innovative, scalable, and customized IT solutions that empower businesses in the digital age. We specialize in web and mobile development, software solutions, and cutting-edge digital marketing strategies to help our clients achieve maximum online visibility and sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Our Vision (Image Right) */}
      <section className="w-full bg-slate-200 py-16 border-b border-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-10">
          <div className="w-full md:w-2/3">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Vision</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              At TRONAP, we envision a future where innovation meets functionality, empowering businesses with cutting-edge digital solutions. Our vision is to craft high-performance, SEO-friendly websites and applications that drive engagement, enhance visibility, and maximize growth.
            </p>
          </div>
          <div className="w-full md:w-1/3">
             {/* Placeholder for 'Globe/Vision' image */}
             <div className="rounded-xl overflow-hidden shadow-lg max-w-xs mx-auto">
                <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80" alt="Vision" className="w-full" />
             </div>
          </div>
        </div>
      </section>

      {/* Section 3: Our Goals */}
      <section className="w-full bg-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Goals</h3>
            <p className="text-slate-600 text-sm leading-relaxed max-w-4xl mx-auto">
              At TRONAP, our goal is to revolutionize the IT and FinTech industries by developing cutting-edge, secure, and scalable digital solutions. We strive to empower businesses with innovative technology, seamless financial services, and intelligent automation, ensuring efficiency, security, and growth in a rapidly evolving digital world.
            </p>
        </div>
      </section>

    </div>
  );
};

export default WhoWeAre;