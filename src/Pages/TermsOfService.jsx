import React from 'react';
import { FileCheck, ShieldAlert, Scale, AlertCircle, Mail } from 'lucide-react';

const TermsOfService = () => {
  return (
    // 'pt-20' added for fixed header spacing
    <div className="bg-slate-50 min-h-screen pt-20">
      
      {/* --- Hero Section --- */}
      <div className="relative bg-slate-900 py-16">
        <div className="absolute inset-0 overflow-hidden">
          {/* Abstract Background */}
          <div className="absolute inset-0 bg-slate-900 opacity-90"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-slate-400 text-sm">
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>
      </div>

      {/* --- Main Content Area --- */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100">
          
          {/* 1. Acceptance */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <FileCheck className="text-[#00C2E0]" size={24} />
              1. Acceptance of Terms
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              By accessing the website of TRONAP TECHNOLOGIES PRIVATE LIMITED, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
          </div>

          {/* 2. Use License */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Scale className="text-[#00C2E0]" size={24} />
              2. Use License
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Permission is granted to temporarily download one copy of the materials (information or software) on TRONAP Technologies' website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 ml-4">
              <li>Modify or copy the materials;</li>
              <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
              <li>Attempt to decompile or reverse engineer any software contained on TRONAP Technologies' website;</li>
              <li>Remove any copyright or other proprietary notations from the materials; or</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
            </ul>
          </div>

          {/* 3. Disclaimer */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <ShieldAlert className="text-[#00C2E0]" size={24} />
              3. Disclaimer
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              The materials on TRONAP Technologies' website are provided on an 'as is' basis. TRONAP Technologies makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </div>

          {/* 4. Limitations */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <AlertCircle className="text-[#00C2E0]" size={24} />
              4. Limitations
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              In no event shall TRONAP Technologies or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on TRONAP Technologies' website, even if TRONAP Technologies or a TRONAP Technologies authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </div>

          {/* 5. Governing Law */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">5. Governing Law</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              These terms and conditions are governed by and construed in accordance with the laws of Gujarat, India and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
            </p>
          </div>

          {/* Contact Us */}
          <div className="border-t border-slate-100 pt-8 mt-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Mail className="text-[#00C2E0]" size={24} />
              Contact Us
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-slate-50 p-6 rounded-xl text-sm text-slate-700">
              <p className="font-bold text-slate-900 mb-1">TRONAP TECHNOLOGIES PRIVATE LIMITED</p>
              <p>D-4, Kadam Flat, Opp Swaminaryan Mandir,</p>
              <p>Bopal, Ahmedabad, Daskroi,</p>
              <p>Gujarat, India, 380058.</p>
              <p className="mt-4 font-medium text-[#00C2E0]">
                Email: <a href="mailto:support@tronap.in">support@tronap.in</a>
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TermsOfService;