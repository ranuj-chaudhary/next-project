"use client"

import type React from "react"
import { ArrowRight, Play, Shield, Phone, Mail } from "lucide-react"
import { useState } from "react"

export default function HeroSection() {
  const [formData, setFormData] = useState({
    organizationName: "",
    businessType: "",
    contactPerson: "",
    email: "",
    phone: "",
    buildingSize: "",
    floors: "",
    currentEquipment: "",
    timeline: "",
    requirements: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage("")

    try {
      const response = await fetch("/api/send-quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitMessage(result.message)
        setFormData({
          organizationName: "",
          businessType: "",
          contactPerson: "",
          email: "",
          phone: "",
          buildingSize: "",
          floors: "",
          currentEquipment: "",
          timeline: "",
          requirements: "",
        })
      } else {
        setSubmitMessage(result.message)
      }
    } catch (error) {
      setSubmitMessage("Failed to submit quote request. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-red-50 to-orange-50 pt-20"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-red-100/40 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              Protect Your
              <span className="text-red-600 block">Business Today</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Professional fire extinguisher installation, maintenance, and inspection services to keep your business
              and employees safe from fire hazards.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
              <button
                onClick={() => scrollToSection("services")}
                className="bg-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-700 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                View Our Services <ArrowRight size={20} />
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-600 hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                <Play size={20} /> Learn More
              </button>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <Phone className="w-6 h-6 text-red-600" />
                <div>
                  <div className="font-semibold text-gray-900">24/7 Emergency</div>
                  <div className="text-red-600 font-bold">(555) FIRE-911</div>
                </div>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <Mail className="w-6 h-6 text-red-600" />
                <div>
                  <div className="font-semibold text-gray-900">Email Us</div>
                  <div className="text-red-600 font-bold">info@fireguardpro.com</div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: "2000+", label: "Installations" },
                { number: "500+", label: "Businesses Protected" },
                { number: "20+", label: "Years Experience" },
                { number: "24/7", label: "Emergency Service" },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-red-600 mb-1">{stat.number}</div>
                  <div className="text-gray-600 font-medium text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Quote Form */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-red-100">
            <div className="text-center mb-6">
              <Shield className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Get Your Free Quote</h2>
              <p className="text-gray-600">Professional fire safety assessment for your business</p>
            </div>

            {submitMessage && (
              <div
                className={`mb-4 p-4 rounded-lg ${submitMessage.includes("successfully") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
              >
                {submitMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Organization Name *</label>
                  <input
                    type="text"
                    name="organizationName"
                    value={formData.organizationName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Your Business Name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Business Type *</label>
                  <select
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select Business Type</option>
                    <option value="office">Office Building</option>
                    <option value="warehouse">Warehouse</option>
                    <option value="restaurant">Restaurant</option>
                    <option value="retail">Retail Store</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="healthcare">Healthcare Facility</option>
                    <option value="education">Educational Institution</option>
                    <option value="residential">Residential Complex</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Contact Person *</label>
                  <input
                    type="text"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Your Full Name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="(555) 123-4567"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Building Size (sq ft)</label>
                  <input
                    type="text"
                    name="buildingSize"
                    value={formData.buildingSize}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="e.g., 5,000 sq ft"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Number of Floors</label>
                  <select
                    name="floors"
                    value={formData.floors}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">Select Floors</option>
                    <option value="1">1 Floor</option>
                    <option value="2">2 Floors</option>
                    <option value="3">3 Floors</option>
                    <option value="4+">4+ Floors</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Installation Timeline</label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">Select Timeline</option>
                    <option value="immediate">Immediate (Within 1 week)</option>
                    <option value="month">Within 1 month</option>
                    <option value="quarter">Within 3 months</option>
                    <option value="planning">Just planning ahead</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Current Fire Safety Equipment</label>
                <input
                  type="text"
                  name="currentEquipment"
                  value={formData.currentEquipment}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Describe existing fire extinguishers, alarms, etc."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Additional Requirements</label>
                <textarea
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Any specific requirements or questions..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-red-600 text-white px-6 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 disabled:bg-red-400 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:transform-none"
              >
                {isSubmitting ? "Sending Quote Request..." : "Get Free Quote"}
                {!isSubmitting && <ArrowRight size={20} />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
