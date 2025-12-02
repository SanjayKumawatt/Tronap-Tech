import React from 'react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight, ChevronRight } from 'lucide-react';
  import heroImageUrl  from "../assets/hero.jpg";

// Yahan apni actual image import kar lena
// import heroImage from '../assets/hero-team.jpg';

const HeroSection = () => {
  // Placeholder image URL (Jab tak tum apni image nahi lagate)


  return (
    // Section ko top padding di hai taaki fixed Header ke peeche na chhip jaye
    <section className="w-full bg-white pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* --- Left Column: Text Content --- */}
          <div className="w-full md:w-1/2 flex flex-col items-start text-left">
            
            {/* Main Headline with Gradient */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-800 leading-tight tracking-tight mb-4">
              Empowering Your Digital Vision with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e3a8a] via-purple-600 to-[#f97316]">
                CodeWibe
              </span>
            </h1>

            {/* Typing Animation Subtitle */}
            {/* h-16/h-20 height fix kiya hai taaki text change hone par layout hile nahi */}
            <div className="text-xl md:text-2xl lg:text-3xl font-semibold text-slate-600 mb-6 h-16 md:h-20 flex items-center">
              <TypeAnimation
                sequence={[
                    // New Modified Text
                  'Next-Gen Web, Mobile & IT Solutions.',
                  2000, // 2 second wait
                  'Turning Complex Ideas into Reality.',
                  2000,
                  'Innovative Digital Transformation Services.',
                  2000,
                ]}
                wrapper="span"
                speed={50} // Typing speed
                deletionSpeed={70} // Deleting speed
                repeat={Infinity} // Loop forever
                cursor={true}
                className="inline-block"
              />
            </div>

            {/* Modified Paragraph */}
            <p className="text-slate-500 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
              We don't just build software; we engineer digital transformations. Specializing in bespoke Web Development, intuitive Mobile Apps, and striking UI/UX Design, our expert team fuses imaginative creativity with robust technology to deliver stunning solutions that drive measurable growth for your business.
            </p>

            {/* Buttons Container */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              {/* Primary Button (Gradient) */}
              <Link to="/contact">
                <button className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-[#1e3a8a] to-[#f97316] hover:from-[#162a66] hover:to-[#d96312] text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-blue-200/50 transition-all duration-300 transform hover:-translate-y-1">
                  Get Started
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>

              {/* Secondary Button (Outline) */}
              <Link to="/services">
                <button className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent border-2 border-rose-400 text-rose-500 hover:bg-rose-50 hover:border-rose-500 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300">
                  View Services
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform"/>
                </button>
              </Link>
            </div>
          </div>

          {/* --- Right Column: Image --- */}
          <div className="w-full md:w-1/2 relative">
            {/* Decorative blob background (Optional - hatana ho toh hata dena) */}
            <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
            <div className="absolute bottom-0 -left-4 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>
            
            {/* Main Image container with styling */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 border-4 border-white transform  hover:rotate-0 transition-all duration-500">
               {/* Agar local image use kar rahe ho toh src={heroImage} likhna */}
              <img 
                src={heroImageUrl} 
                alt="CodeWibe Team working together on digital solutions" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection; 