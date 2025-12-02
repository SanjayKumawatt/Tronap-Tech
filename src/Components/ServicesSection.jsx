import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare } from 'lucide-react';

import img1 from "../assets/service/img1.avif";
import img2 from "../assets/service/img2.avif";
import img3 from "../assets/service/img3.avif";
import img4 from "../assets/service/img4.jpg";
// import img12 from "../assets/img12.avif";
import img6 from "../assets/service/img6.avif";
import img7 from "../assets/service/img7.avif";
import img8 from "../assets/service/img8.avif";
import img9 from "../assets/service/img9.avif";
import img10 from "../assets/service/img10.avif";
import img11 from "../assets/service/img11.avif";
import img12 from "../assets/service/img12.avif";

const ServicesSection = () => {
  
  // Data array update kiya hai: har object mein ek 'path' add kiya hai
  const services = [
    {
      title: "B2B Software Solutions",
      desc: "Robust software solutions to enhance your business processes.",
      img: img1,
      path: "/services/b2b-solutions" // New Path
    },
    {
      title: "Android Application Development",
      desc: "Custom Android apps to meet your business and customer needs.",
      img: img2,
      path: "/services/android-development"
    },
    {
      title: "Website Development",
      desc: "Stunning websites built with the latest technologies for optimal performance.",
      img: img3,
      path: "/services/website-development"
    },
    {
      title: "Graphic Design",
      desc: "Creative designs to captivate your audience and boost engagement.",
      img: img4,
      path: "/services/graphic-design"
    },
    {
      title: "Fintech Software Development",
      desc: "Innovative financial technology solutions for the modern enterprise.",
      img: img12,
      path: "/services/fintech-software"
    },
    {
      title: "Cloud Solutions",
      desc: "Scalable and secure cloud computing services for your business needs.",
      img: img6,
      path: "/services/cloud-solutions"
    },
    {
      title: "CRM Solutions",
      desc: "Customer Relationship Management systems to streamline your operations.",
      img: img7,
      path: "/services/crm-solutions"
    },
    {
      title: "E-Commerce Services",
      desc: "Complete e-commerce solutions to take your online store to the next level.",
      img: img8,
      path: "/services/ecommerce-services"
    },
    {
      title: "Salesforce Services",
      desc: "Tailored Salesforce development to optimize your customer interactions.",
      img: img9,
      path: "/services/salesforce-services"
    },
    {
      title: "Software Development",
      desc: "End-to-end software development services for businesses of all sizes.",
      img: img10,
      path: "/services/software-development"
    },
    {
      title: "API Services",
      desc: "API services designed to help businesses integrate innovative solutions seamlessly.",
      img: img12,
      path: "/services/api-services"
    }
  ];

  return (
    <section className="w-full bg-white py-16 md:py-24" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-800 mb-4">
            Our Services
          </h2>
          <div className="h-1 w-24 bg-[#00C2E0] mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            We provide a wide range of digital solutions to help your business grow and succeed in the modern era.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative h-64 w-full rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${service.img})` }}
              ></div>

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-slate-900/70 group-hover:bg-slate-900/80 transition-colors duration-300"></div>

              {/* Content Container */}
              <div className="relative h-full flex flex-col items-center justify-center p-6 text-center z-10">
                
                {/* Title & Desc */}
                <div className="transform transition-transform duration-300 group-hover:-translate-y-4">
                  <h3 className="text-xl font-bold text-white mb-3 tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-slate-200 text-sm leading-relaxed opacity-90">
                    {service.desc}
                  </p>
                </div>

                {/* Buttons */}
                <div className="absolute bottom-6 flex gap-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75">
                  
                  {/* CHANGE: Yahan Link 'to' mein ab service.path use ho raha hai */}
                  <Link to={service.path}>
                    <button className="bg-white text-slate-900 px-4 py-2 rounded text-sm font-bold hover:bg-[#00C2E0] hover:text-white transition-colors flex items-center gap-1">
                      Learn More
                    </button>
                  </Link>
                  
                  <Link to="/contact">
                    <button className="bg-[#00C2E0] text-white px-4 py-2 rounded text-sm font-bold hover:bg-[#00aec9] transition-colors flex items-center gap-1">
                      Contact Us
                    </button>
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;