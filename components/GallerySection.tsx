"use client";
import Image from "next/image";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [ref, isVisible] = useIntersectionObserver();

  const categories = [
    {
      id: "office",
      title: "Office Buildings",
      description:
        "Professional fire safety installations for corporate offices and business centers",
      featured: "/commercial-fire-installation.png",
      projects: [
        {
          id: 1,
          title: "Corporate Headquarters",
          image: "/commercial-fire-installation.png",
        },
        {
          id: 2,
          title: "Business Center Complex",
          image: "/warehouse-fire-system.png",
        },
        {
          id: 3,
          title: "High-Rise Office Tower",
          image: "/retail-fire-extinguisher.png",
        },
      ],
    },
    {
      id: "residential",
      title: "Residential Buildings",
      description:
        "Comprehensive fire protection for apartments, condos, and residential complexes",
      featured: "/residential-fire-safety.png",
      projects: [
        {
          id: 4,
          title: "Apartment Complex",
          image: "/residential-fire-safety.png",
        },
        {
          id: 5,
          title: "Condominium Tower",
          image: "/apartment-fire-system.png",
        },
        {
          id: 6,
          title: "Senior Living Facility",
          image: "/kitchen-fire-extinguisher.png",
        },
      ],
    },
    {
      id: "government",
      title: "Government Buildings",
      description:
        "Specialized fire safety systems for municipal and federal government facilities",
      featured: "/industrial-fire-system.png",
      projects: [
        {
          id: 7,
          title: "City Hall Complex",
          image: "/industrial-fire-system.png",
        },
        {
          id: 8,
          title: "Federal Office Building",
          image: "/chemical-plant-fire-safety.png",
        },
        {
          id: 9,
          title: "Courthouse Facility",
          image: "/power-plant-fire-system.png",
        },
      ],
    },
    {
      id: "schools",
      title: "Schools & Educational",
      description:
        "Safe learning environments with comprehensive fire protection systems",
      featured: "/school-4.jpg",
      projects: [
        {
          id: 10,
          title: "Elementary School",
          image: "/school-2.jpg",
        },
        {
          id: 11,
          title: "University Campus",
          image: "/school-3.jpg",
        },
        {
          id: 12,
          title: "Community College",
          image: "/school-1.jpg",
        },
      ],
    },
    {
      id: "warehouses",
      title: "Warehouses & Industrial",
      description:
        "Heavy-duty fire suppression systems for storage and manufacturing facilities",
      featured: "/warehouse-1.jpg",
      projects: [
        {
          id: 13,
          title: "Distribution Center",
          image: "/warehouse-2.jpg",
        },
        {
          id: 14,
          title: "Manufacturing Plant",
          image: "/warehouse-3.jpg",
        },
        {
          id: 15,
          title: "Cold Storage Facility",
          image: "/warehouse-4.jpg",
        },
      ],
    },
  ];

  const scrollGallery = (categoryId: string, direction: "left" | "right") => {
    const gallery = document.getElementById(`gallery-${categoryId}`);
    if (gallery) {
      const scrollAmount = 320;
      gallery.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50" ref={ref}>
      {isVisible && (
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Fire Safety Projects
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how we've protected businesses and homes with professional
                fire extinguisher installations and safety systems.
              </p>
            </div>

            <div className="space-y-20">
              {categories.map((category, categoryIndex) => (
                <div
                  key={category.id}
                  className="relative"
                  data-aos="fade-up"
                  data-aos-delay={categoryIndex * 200}
                >
                  {/* Category Header */}
                  <div className="mb-8">
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                      {category.title}
                    </h3>
                    <p className="text-lg text-gray-600">
                      {category.description}
                    </p>
                  </div>

                  {/* Featured Project and Gallery */}
                  <div className="grid lg:grid-cols-2 gap-8 items-start">
                    {/* Featured Large Image */}
                    <div className="relative group">
                      <div
                        className="relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer w-full h-80 lg:h-96"
                        onClick={() => setSelectedImage(category.featured)}
                      >
                        <Image
                          src={category.featured || "/placeholder.svg"}
                          alt={`Featured ${category.title} project`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-6 left-6 text-white">
                            <span className="text-sm bg-red-600 px-3 py-1 rounded-full mb-2 inline-block">
                              Featured
                            </span>
                            <h4 className="text-xl font-bold">
                              {
                                category.projects.find(
                                  (p) => p.image === category.featured
                                )?.title
                              }
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Horizontal Scrolling Gallery */}
                    <div className="relative">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-xl font-semibold text-gray-900">
                          More Projects
                        </h4>
                        <div className="flex gap-2">
                          <button
                            onClick={() => scrollGallery(category.id, "left")}
                            className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-200"
                            aria-label="Scroll left"
                          >
                            <ChevronLeft size={20} className="text-gray-600" />
                          </button>
                          <button
                            onClick={() => scrollGallery(category.id, "right")}
                            className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-200"
                            aria-label="Scroll right"
                          >
                            <ChevronRight size={20} className="text-gray-600" />
                          </button>
                        </div>
                      </div>

                      <div
                        id={`gallery-${category.id}`}
                        className="flex gap-4 overflow-x-auto scrollbar-hide pb-4"
                        style={{
                          scrollbarWidth: "none",
                          msOverflowStyle: "none",
                        }}
                      >
                        {category.projects.map((project, index) => (
                          <div
                            key={project.id}
                            className="flex-shrink-0 w-72 group cursor-pointer"
                            onClick={() => setSelectedImage(project.image)}
                          >
                            <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                              <Image
                                src={project.image || "/placeholder.svg"}
                                alt={project.title}
                                width={600}
                                height={400}
                                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                              />

                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-4 left-4 text-white">
                                  <h5 className="font-semibold text-sm">
                                    {project.title}
                                  </h5>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  {categoryIndex < categories.length - 1 && (
                    <div className="mt-16 border-t border-gray-200"></div>
                  )}
                </div>
              ))}
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
              <div
                className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                onClick={() => setSelectedImage(null)}
              >
                <div
                  className="relative max-w-4xl max-h-full"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-200 backdrop-blur-sm"
                    aria-label="Close modal"
                  >
                    <X size={24} />
                  </button>
                  <Image
                    src={selectedImage || "/placeholder.svg"}
                    alt="Gallery image"
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
              </div>
            )}
          </div>{" "}
        </div>
      )}

      {/* Add custom scrollbar hiding styles */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
