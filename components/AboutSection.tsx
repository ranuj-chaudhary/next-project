"use client";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import Image from "next/image";
import { CheckCircle, Shield, Target, Award } from "lucide-react";

export default function AboutSection() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section ref={ref} id="about" className="py-20 bg-white min-h-[400px]">
      {isVisible && (
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About FireGuard Pro
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We are certified fire safety professionals dedicated to
                protecting lives and property through expert fire extinguisher
                installation and comprehensive fire safety solutions.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div data-aos="fade-right">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Fire Safety Expertise
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Established in 2003, FireGuard Pro has been the trusted name
                  in fire safety services for over two decades. We specialize in
                  fire extinguisher installation, maintenance, and comprehensive
                  fire safety solutions for commercial and residential
                  properties.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Our certified technicians have protected over 2,000 properties
                  and trained thousands of individuals in proper fire safety
                  protocols. We maintain the highest industry certifications and
                  stay current with all fire codes and NFPA standards.
                </p>

                <div className="space-y-4">
                  {[
                    "NFPA certified technicians",
                    "20+ years fire safety experience",
                    "24/7 emergency response",
                    "Full code compliance guarantee",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle
                        className="text-red-600 flex-shrink-0"
                        size={20}
                      />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative" data-aos="fade-left">
                <Image
                  src="/fire-safety-installation.png"
                  alt="Fire safety technician installing equipment"
                  height={288}
                  width={192}
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-red-600 text-white p-6 rounded-2xl shadow-xl">
                  <div className="text-3xl font-bold">20+</div>
                  <div className="text-red-100">Years Protecting Lives</div>
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="grid md:grid-cols-3 gap-8" data-aos="fade-up">
              {[
                {
                  icon: <Shield className="text-red-600" size={48} />,
                  title: "Safety First",
                  description:
                    "Every installation and service we provide prioritizes the safety and protection of lives and property.",
                },
                {
                  icon: <Target className="text-red-600" size={48} />,
                  title: "Code Compliance",
                  description:
                    "We ensure all installations meet or exceed local fire codes and NFPA standards for complete compliance.",
                },
                {
                  icon: <Award className="text-red-600" size={48} />,
                  title: "Certified Excellence",
                  description:
                    "Our team maintains industry certifications and continuous training to deliver the highest quality service.",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-red-50 transition-colors duration-300"
                >
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
