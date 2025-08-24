"use client";
import FocusLock from "react-focus-lock";
import React from "react";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

import { useState } from "react";
import {
  Flame,
  Shield,
  Wrench,
  GraduationCap,
  AlertTriangle,
  Phone,
  X,
} from "lucide-react";

export default function ServicesSection() {
  const [ref, isVisible] = useIntersectionObserver();
  const [selectedService, setSelectedService] = useState<number | null>(null);

  React.useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;

    if (selectedService !== null) {
      document.body.style.overflow = "hidden"; // lock scroll
    } else {
      document.body.style.overflow = originalStyle; // restore original
    }

    // cleanup when component unmounts
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [selectedService]);

  const services = [
    {
      icon: <Flame size={48} />,
      title: "Fire Extinguisher Installation",
      description:
        "Professional installation of fire extinguishers in compliance with local fire codes and NFPA standards.",
      features: [
        "Code compliance assessment",
        "Strategic placement planning",
        "Professional mounting",
        "Documentation & certificates",
      ],
    },
    {
      icon: <Wrench size={48} />,
      title: "Maintenance & Inspection",
      description:
        "Regular maintenance and inspection services to ensure your fire extinguishers are always ready when needed.",
      features: [
        "Monthly visual inspections",
        "Annual maintenance",
        "6-year teardown service",
        "12-year hydrostatic testing",
      ],
    },
    {
      icon: <Shield size={48} />,
      title: "Fire Safety Consultation",
      description:
        "Comprehensive fire safety assessments and consultation to identify risks and improve protection.",
      features: [
        "Risk assessment",
        "Fire safety planning",
        "Code compliance review",
        "Emergency evacuation plans",
      ],
    },
    {
      icon: <GraduationCap size={48} />,
      title: "Fire Safety Training",
      description:
        "Professional training programs to educate your staff on proper fire extinguisher use and fire safety protocols.",
      features: [
        "Hands-on training",
        "OSHA compliance",
        "Group workshops",
        "Certification programs",
      ],
    },
    {
      icon: <AlertTriangle size={48} />,
      title: "Emergency Services",
      description:
        "24/7 emergency fire extinguisher services for urgent situations and immediate safety needs.",
      features: [
        "Emergency installation",
        "Rapid response",
        "After-hours service",
        "Emergency consultation",
      ],
    },
    {
      icon: <Phone size={48} />,
      title: "System Monitoring",
      description:
        "Advanced monitoring systems to track fire extinguisher status and ensure continuous protection.",
      features: [
        "Digital monitoring",
        "Automated alerts",
        "Compliance tracking",
        "Maintenance scheduling",
      ],
    },
  ];

  const closeModal = () => setSelectedService(null);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50" ref={ref}>
      {isVisible && (
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Fire Safety Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive fire extinguisher installation, maintenance, and
                safety services to protect your property and ensure compliance
                with fire codes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  onClick={() => setSelectedService(index)}
                >
                  <div className="text-red-600 mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="text-sm text-gray-500 flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {selectedService !== null && isVisible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={handleBackdropClick}
          role="dialog"
          aria-modal="true"
          aria-labelledby={`service-title-${services[selectedService].title}`}
          aria-describedby={`service-description-${services[selectedService].description}`}
        >
          <FocusLock>
            <div
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="text-red-600">
                    {services[selectedService].icon}
                  </div>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label="Close modal"
                  >
                    <X size={24} />
                  </button>
                </div>

                <h3
                  className="text-3xl font-bold text-gray-900 mb-4"
                  id={`service-title-${services[selectedService].title}`}
                >
                  {services[selectedService].title}
                </h3>

                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  {services[selectedService].description}
                </p>

                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">
                    Key Features:
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {services[selectedService].features.map(
                      (feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="text-gray-600 flex items-center gap-3"
                        >
                          <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                          {feature}
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <div className="flex gap-4">
                  <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors">
                    Get Quote
                  </button>
                  <button
                    onClick={closeModal}
                    className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </FocusLock>
        </div>
      )}
    </section>
  );
}
