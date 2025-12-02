import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Heart } from 'lucide-react';

  import aboutImage from "../assets/whoweare.avif";


const AboutSection = () => {
  // Image for "Team Hands" (Placeholder)

  return (
    <section className="w-full bg-slate-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* --- Left Side: Image --- */}
          <div className="w-full md:w-1/2 relative group">
            {/* Background Decoration */}
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-200 to-blue-200 rounded-2xl opacity-30 blur-lg group-hover:opacity-50 transition duration-500"></div>
            
            {/* Image Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <img 
                src={aboutImage} 
                alt="Team hands joined together representing unity" 
                className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
              />
              
              {/* Overlay Text (Optional creative touch) */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-white font-bold text-lg">Unity in Innovation</p>
              </div>
            </div>
          </div>

          {/* --- Right Side: Content --- */}
          <div className="w-full md:w-1/2 flex flex-col items-start">
            
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 relative inline-block">
              Who We Are
              {/* Underline Effect */}
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-[#00C2E0] rounded-full"></span>
            </h2>

            {/* Paragraphs */}
            <p className="text-slate-600 text-lg leading-relaxed mb-4">
              We are a leading software solutions company committed to driving business success through innovation and technology. At <span className="font-bold text-slate-800">TRONAP Technologies</span>, our team of experienced professionals is dedicated to delivering cutting-edge services tailored to our clients' needs.
            </p>
            
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              With a strong focus on client satisfaction, we provide comprehensive solutions for a wide range of industries. We strive to enhance operational efficiency, improve customer engagement, and deliver outstanding business outcomes.
            </p>

            {/* Sub-sections: Mission & Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 w-full">
              
              {/* Mission */}
              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-2">
                    <Target className="text-[#00C2E0]" size={24} />
                    <h3 className="text-xl font-bold text-slate-800">Our Mission</h3>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">
                  To provide innovative, reliable, and scalable solutions that empower businesses to achieve their goals.
                </p>
              </div>

              {/* Core Values */}
              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-2">
                    <Heart className="text-[#00C2E0]" size={24} />
                    <h3 className="text-xl font-bold text-slate-800">Core Values</h3>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Integrity, Innovation, Customer-Centricity, and Excellence are at the heart of everything we do.
                </p>
              </div>
            </div>

            {/* Button */}
            <Link to="/about">
              <button className="bg-[#00C2E0] hover:bg-[#00aec9] text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-cyan-200/50 transition-all duration-300 flex items-center gap-2 transform hover:-translate-y-1">
                Learn More About Us
                <ArrowRight size={18} />
              </button>
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;