import React from 'react';

const SmartSection = () => {
  const smartSteps = [
    { letter: 'S', label: 'Simplify', desc: 'Making complex processes easy.' },
    { letter: 'M', label: 'Managerial', desc: 'Efficient handling of resources.' },
    { letter: 'A', label: 'Authentic', desc: 'Genuine and transparent services.' },
    { letter: 'R', label: 'Reliable', desc: 'Consistent performance you can trust.' },
    { letter: 'T', label: 'Time-Bound', desc: 'Delivering results within deadlines.' },
  ];

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* --- Left Side: SMART Diagram --- */}
          <div className="w-full lg:w-5/12 flex justify-center">
            <div className="relative flex flex-col items-center gap-6">
              
              {/* Connecting Line (Behind diamonds) */}
              <div className="absolute top-4 bottom-4 w-1 bg-slate-100 -z-10 rounded-full"></div>

              {smartSteps.map((step, index) => (
                <div key={index} className="flex items-center w-full max-w-xs group">
                  
                  {/* The Diamond Shape */}
                  <div className="relative flex-shrink-0 z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#00C2E0] to-blue-600 rotate-45 rounded-lg shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center border-2 border-white">
                      {/* Letter inside (Counter-rotated to stay straight) */}
                      <span className="-rotate-45 text-white text-2xl font-extrabold">
                        {step.letter}
                      </span>
                    </div>
                  </div>

                  {/* The Label Text */}
                  <div className="ml-8 flex flex-col justify-center">
                    <h4 className="text-xl font-bold text-slate-800 group-hover:text-[#00C2E0] transition-colors">
                      {step.label}
                    </h4>
                    {/* Optional: Small description if needed */}
                    {/* <p className="text-xs text-slate-400">{step.desc}</p> */}
                  </div>

                  {/* Connecting Horizontal Line (Visual flair) */}
                  <div className="hidden sm:block absolute left-14 w-8 h-[2px] bg-slate-200 -z-10"></div>
                </div>
              ))}
            </div>
          </div>

          {/* --- Right Side: Text Content --- */}
          <div className="w-full lg:w-7/12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 leading-tight mb-6">
              Taking A Lot of Pride, Doing Everything, That Impacts <span className="text-[#00C2E0]">Your Growth</span>
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Times are always challenging, with obstacles and uncertainties at every corner. However, it’s in these very moments that we push ourselves to be better, to think bigger, and to take bold actions that truly matter.
            </p>

            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Every step we take is driven by the belief that growth comes from the work we do today, laying a solid foundation for a brighter future. We are committed to delivering digital products and platforms that don’t just meet expectations but set the stage for what’s next.
            </p>

            <p className="text-slate-600 text-lg leading-relaxed border-l-4 border-[#00C2E0] pl-4 italic bg-slate-50 py-2 rounded-r-lg">
              "Our mission is to blend innovation with purpose, ensuring that each project we undertake contributes to progress, transformation, and long-term success."
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SmartSection;