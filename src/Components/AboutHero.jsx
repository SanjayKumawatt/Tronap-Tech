import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Users, Briefcase, Award } from 'lucide-react';

const AboutHero = () => {
  return (
    <div className="relative w-full bg-slate-900 pt-20">
      
      {/* --- Main Hero Content --- */}
      <div className="relative w-full h-[60vh] min-h-[450px] flex items-center justify-center overflow-hidden">
        
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80" 
            alt="Team working together" 
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-slate-900/80 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent"></div>
        </div>

        {/* Text Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          
          {/* Breadcrumb (Navigation Path) */}
          <div className="flex items-center gap-2 text-sm font-bold text-[#00C2E0] bg-slate-800/50 px-4 py-1.5 rounded-full backdrop-blur-sm mb-6 border border-slate-700">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-slate-300">About Us</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
            Building the Future with <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C2E0] to-cyan-200">
              Technology & Innovation
            </span>
          </h1>

          {/* Subtitle Paragraph */}
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            At TRONAP Technologies, we don't just write code; we craft digital experiences that empower businesses to scale, succeed, and lead in a competitive world.
          </p>
        </div>
      </div>


    </div>
  );
};

export default AboutHero;