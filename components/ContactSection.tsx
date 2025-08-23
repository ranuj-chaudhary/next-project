"use client";

import type React from "react";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
 
import { useState } from "react";
import { Mail, Phone, MapPin, Send, AlertTriangle } from "lucide-react";

export default function ContactSection() {
  const [ref, isVisible] = useIntersectionObserver();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert(
      "Thank you for your message! We'll get back to you soon with a fire safety quote."
    );
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50" ref={ref}>
      {isVisible && (
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Contact FireGuard Pro
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Need fire extinguisher installation or emergency fire safety
                services? Contact our certified technicians today for a free
                consultation and quote.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div data-aos="fade-right">
                <h3 className="text-3xl font-bold text-gray-900 mb-8">
                  Contact Information
                </h3>

                <div className="space-y-6 mb-8">
                  {[
                    {
                      icon: <Phone className="text-red-600" size={24} />,
                      title: "Emergency & Service",
                      info: "+1 (555) FIRE-911",
                      subtitle: "24/7 Emergency Response",
                    },
                    {
                      icon: <Mail className="text-red-600" size={24} />,
                      title: "Email",
                      info: "safety@fireguardpro.com",
                      subtitle: "Free quotes within 2 hours",
                    },
                    {
                      icon: <MapPin className="text-red-600" size={24} />,
                      title: "Service Area",
                      info: "Greater Metro Area & Surrounding Counties",
                      subtitle: "Licensed & Insured in All Areas",
                    },
                  ].map((contact, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg"
                    >
                      <div className="flex-shrink-0">{contact.icon}</div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">
                          {contact.title}
                        </h4>
                        <p className="text-gray-700 font-medium">
                          {contact.info}
                        </p>
                        <p className="text-gray-500 text-sm">
                          {contact.subtitle}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-red-600 text-white p-8 rounded-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <AlertTriangle size={32} />
                    <h4 className="text-2xl font-bold">
                      Emergency Fire Safety?
                    </h4>
                  </div>
                  <p className="mb-6">
                    Need immediate fire extinguisher installation or emergency
                    fire safety services? Our certified technicians are
                    available 24/7 for urgent situations.
                  </p>
                  <button className="bg-white text-red-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
                    Call Emergency Line
                  </button>
                </div>
              </div>

              {/* Contact Form */}
              <div data-aos="fade-left">
                <form
                  onSubmit={handleSubmit}
                  className="bg-white p-8 rounded-2xl shadow-lg"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Get Your Free Fire Safety Quote
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors duration-200"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors duration-200"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Service Needed
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors duration-200"
                      placeholder="Installation, Maintenance, Inspection, etc."
                    />
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Property Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors duration-200 resize-none"
                      placeholder="Tell us about your property size, type (commercial/residential), and fire safety needs..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-red-600 text-white px-6 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                  >
                    Get Free Quote <Send size={20} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
