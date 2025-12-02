import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Home, MoveLeft, FileQuestion } from 'lucide-react';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12">
      <div className="max-w-lg w-full text-center">
        
        {/* Animated Icon Container */}
        <div className="mb-6 flex justify-center">
            <div className="relative">
                {/* Background Glow Effect */}
                <div className="absolute -inset-4 bg-cyan-200 rounded-full opacity-40 blur-xl animate-pulse"></div>
                <FileQuestion size={100} className="text-[#00C2E0] relative z-10" strokeWidth={1.5} />
            </div>
        </div>

        {/* Big 404 Text */}
        <h1 className="text-9xl font-extrabold text-slate-800 tracking-tight">
          4<span className="text-[#00C2E0]">0</span>4
        </h1>

        {/* Headlines */}
        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-800">
          Page Nahi Mili Bhai!
        </h2>
        
        <p className="mt-4 text-slate-500 text-lg">
          Lagta hai tum kisi galat link par click kar baithe ho, ya phir ye page ab exist nahi karta.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          
          {/* Go Back Button (Previous Page) */}
          <button
            onClick={() => navigate(-1)}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 border-gray-300 text-gray-600 font-bold hover:border-[#00C2E0] hover:text-[#00C2E0] transition-all duration-300"
          >
            <MoveLeft size={20} />
            Wapas Jao
          </button>

          {/* Home Button (Primary) */}
          <Link to="/" className="w-full sm:w-auto">
            <button className="w-full flex items-center justify-center gap-2 bg-[#00C2E0] hover:bg-[#00aec9] text-white px-8 py-3.5 rounded-full font-bold shadow-lg shadow-cyan-200/50 transition-all duration-300 transform hover:-translate-y-1">
              <Home size={20} />
              Home Page
            </button>
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default ErrorPage;