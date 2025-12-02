import React from 'react';

const TechStack = () => {
  // Maine Tech Stack ko 2 parts mein divide kiya hai taaki 2 alag rows bana sakein
  const row1 = [
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
    { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg' },
    { name: 'Svelte', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg' },
    { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
    { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  ];

  const row2 = [
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Go', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
  ];

  return (
    <section className="py-16 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
          Technology Stack
        </h2>
        <div className="h-1 w-20 bg-[#00C2E0] mx-auto mt-4 rounded-full"></div>
        <p className="mt-4 text-slate-600">
          We use the latest and most robust technologies to build scalable solutions.
        </p>
      </div>

      {/* Container for Animation */}
      <div className="flex flex-col gap-8">
        
        {/* Row 1: Moves Left */}
        <div className="relative flex overflow-x-hidden group">
          <div className="animate-marquee whitespace-nowrap flex gap-8">
            {/* Original Set */}
            {row1.map((tech, index) => (
              <TechCard key={index} tech={tech} />
            ))}
            {/* Duplicate Set for Seamless Loop */}
            {row1.map((tech, index) => (
              <TechCard key={`dup-${index}`} tech={tech} />
            ))}
             {/* Triplicate Set for Wide Screens */}
             {row1.map((tech, index) => (
              <TechCard key={`tri-${index}`} tech={tech} />
            ))}
          </div>
        </div>

        {/* Row 2: Moves Right (Reverse Direction) */}
        <div className="relative flex overflow-x-hidden group">
          <div className="animate-marquee-reverse whitespace-nowrap flex gap-8">
             {/* Original Set */}
             {row2.map((tech, index) => (
              <TechCard key={index} tech={tech} />
            ))}
            {/* Duplicate Set */}
            {row2.map((tech, index) => (
              <TechCard key={`dup-${index}`} tech={tech} />
            ))}
             {/* Triplicate Set */}
             {row2.map((tech, index) => (
              <TechCard key={`tri-${index}`} tech={tech} />
            ))}
          </div>
        </div>

      </div>

      {/* CSS Styles for Animation (Inline here for simplicity) */}
      <style>{`
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 25s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0); }
        }
        /* Pause on Hover (Optional) */
        .group:hover .animate-marquee,
        .group:hover .animate-marquee-reverse {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

// Helper Component for the Pill Card
const TechCard = ({ tech }) => (
  <div className="inline-flex items-center gap-3 bg-white border border-slate-100 px-6 py-3 rounded-full shadow-sm min-w-[160px] mx-2 hover:shadow-md hover:border-[#00C2E0] transition-all duration-300 cursor-default">
    <img src={tech.icon} alt={tech.name} className="w-8 h-8" />
    <span className="text-slate-700 font-bold text-sm tracking-wide">{tech.name}</span>
  </div>
);

export default TechStack;