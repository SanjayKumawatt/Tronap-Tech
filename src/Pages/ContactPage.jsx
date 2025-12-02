import React, { useState } from 'react';
import { MapPin, Mail, Send, CheckCircle, Phone, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

const ContactPage = () => {
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Fake submission delay to show animation
    setTimeout(() => {
      setFormStatus('success');
      // Form reset logic yahan aa sakti hai
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-35 pb-20">
      
      {/* --- Page Header --- */}
      <div className="text-center mb-16 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
          Get In <span className="text-[#00C2E0]">Touch</span>
        </h1>
        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
          Have a project in mind or want to discuss how we can transform your business? 
          We'd love to hear from you.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* --- Left Column: Contact Information --- */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Info Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-[#00C2E0]">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Contact Details</h3>
              
              <div className="space-y-6">
                
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="bg-cyan-50 p-3 rounded-full flex-shrink-0">
                    <MapPin className="text-[#00C2E0]" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Our Office</h4>
                    <p className="text-slate-600 text-sm leading-relaxed mt-1">
                      <span className="font-semibold text-slate-800">TRONAP TECHNOLOGIES PVT. LTD.</span><br />
                      D-4, Kadam Flat, Opp Swaminaryan Mandir,<br />
                      Bopal, Ahmedabad, Gujarat,<br />
                      India - 380058.
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="bg-cyan-50 p-3 rounded-full flex-shrink-0">
                    <Mail className="text-[#00C2E0]" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Email Us</h4>
                    <a href="mailto:support@tronap.in" className="text-slate-600 text-sm hover:text-[#00C2E0] transition-colors mt-1 block">
                      support@tronap.in
                    </a>
                  </div>
                </div>


              </div>
            </div>
          </div>

          {/* --- Right Column: Contact Form --- */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Send us a Message</h3>
              
              {formStatus === 'success' ? (
                // Success Message State
                <div className="flex flex-col items-center justify-center py-12 text-center animate-fadeIn">
                  <div className="bg-green-100 p-4 rounded-full mb-4">
                    <CheckCircle className="text-green-600" size={48} />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-800 mb-2">Message Sent!</h4>
                  <p className="text-slate-600">Thank you for contacting us. We will get back to you shortly.</p>
                  <button 
                    onClick={() => setFormStatus('idle')}
                    className="mt-6 text-[#00C2E0] font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                // Form State
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputGroup label="Your Name" type="text" placeholder="John Doe" required />
                    <InputGroup label="Your Email" type="email" placeholder="john@example.com" required />
                  </div>
                  
                  <InputGroup label="Subject" type="text" placeholder="Project Inquiry / General Question" required />
                  
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-slate-700">Message</label>
                    <textarea 
                      rows="5"
                      placeholder="Tell us about your project or inquiry..."
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-[#00C2E0] focus:ring-2 focus:ring-cyan-100 outline-none transition-all resize-none text-slate-700 bg-slate-50 focus:bg-white"
                      required
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={formStatus === 'submitting'}
                    className="w-full md:w-auto bg-[#00C2E0] hover:bg-[#00aec9] text-white font-bold py-4 px-8 rounded-lg shadow-lg shadow-cyan-200/50 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                    {!formStatus !== 'submitting' && <Send size={20} />}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* --- Google Map Section --- */}
        

      </div>
    </div>
  );
};

// --- Helper Components ---

const InputGroup = ({ label, type, placeholder, required }) => (
  <div className="flex flex-col gap-2">
    <label className="text-sm font-bold text-slate-700">{label}</label>
    <input 
      type={type} 
      placeholder={placeholder} 
      required={required}
      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-[#00C2E0] focus:ring-2 focus:ring-cyan-100 outline-none transition-all text-slate-700 bg-slate-50 focus:bg-white"
    />
  </div>
);

const SocialIcon = ({ icon }) => (
    <a href="#" className="bg-slate-100 text-slate-600 p-3 rounded-full hover:bg-[#00C2E0] hover:text-white transition-all duration-300">
        {icon}
    </a>
);

export default ContactPage;