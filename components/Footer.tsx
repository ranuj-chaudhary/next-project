"use client";

import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

export default function Footer() {
  const [ref, isVisible] = useIntersectionObserver();
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white" ref={ref}>
      {isVisible && (
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Company Info */}
              <div>
                <h3 className="text-2xl font-bold text-red-400 mb-6">
                  FireGuard Pro
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Professional fire extinguisher installation and maintenance
                  services. Protecting lives and property with certified fire
                  safety solutions for over 20 years.
                </p>
                <div className="flex space-x-4">
                  {[
                    { icon: <Facebook size={20} />, href: "#" },
                    { icon: <Twitter size={20} />, href: "#" },
                    { icon: <Linkedin size={20} />, href: "#" },
                    { icon: <Instagram size={20} />, href: "#" },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="bg-gray-800 p-3 rounded-full hover:bg-red-600 transition-colors duration-300"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
                <ul className="space-y-3">
                  {[
                    { label: "Home", id: "home" },
                    { label: "About Us", id: "about" },
                    { label: "Services", id: "services" },
                    { label: "Portfolio", id: "gallery" },
                    { label: "Contact", id: "contact" },
                  ].map((link, index) => (
                    <li key={index}>
                      <button
                        onClick={() => scrollToSection(link.id)}
                        className="text-gray-300 hover:text-red-400 transition-colors duration-200"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4 className="text-lg font-semibold mb-6">Services</h4>
                <ul className="space-y-3">
                  {[
                    "Fire Extinguisher Installation",
                    "Maintenance & Inspection",
                    "Emergency Response Systems",
                    "Fire Safety Training",
                    "Compliance Consulting",
                    "24/7 Emergency Service",
                  ].map((service, index) => (
                    <li key={index}>
                      <span className="text-gray-300 hover:text-red-400 transition-colors duration-200 cursor-pointer">
                        {service}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="text-red-400 flex-shrink-0" size={18} />
                    <span className="text-gray-300">+1 (555) FIRE-911</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="text-red-400 flex-shrink-0" size={18} />
                    <span className="text-gray-300">info@fireguardpro.com</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin
                      className="text-red-400 flex-shrink-0 mt-1"
                      size={18}
                    />
                    <span className="text-gray-300">
                      456 Safety Boulevard, Suite 200
                      <br />
                      Fire Protection District, NY 10002
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-12 pt-8 text-center">
              <p className="text-gray-400">
                © 2024 FireGuard Pro. All rights reserved. Professional Fire
                Safety Solutions.
              </p>
            </div>
          </div>{" "}
        </div>
      )}
    </footer>
  );
}
