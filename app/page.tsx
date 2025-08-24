"use client";
import Script from "next/script";
import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
// import AboutSection from "@/components/AboutSection"
// import ServicesSection from "@/components/ServicesSection";
// import GallerySection from "@/components/GallerySection";
// import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";
import TawkToChat from "@/components/TawkToChat";

const ServicesSection = dynamic(() => import("@/components/ServicesSection"), {
  ssr: false, // client-side only (for lazy loading)
  loading: () => <div className="h-40 bg-gray-200 animate-pulse" />, // skeleton
});
const GallerySection = dynamic(() => import("@/components/GallerySection"), {
  ssr: false, // client-side only (for lazy loading)
  loading: () => <div className="h-40 bg-gray-200 animate-pulse" />, // skeleton
});
const ContactSection = dynamic(() => import("@/components/ContactSection"), {
  ssr: false,
});
const AboutSection = dynamic(() => import("@/components/AboutSection"), {
  ssr: false, // client-side only (for lazy loading)
  loading: () => <div className="h-40 bg-gray-200 animate-pulse" />, // skeleton
});

export default function HomePage() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, observerOptions);

    // Observe all elements with data-animate attribute
    const animateElements = document.querySelectorAll("[data-animate]");
    animateElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen">
      
      <Header data-animate />
      <HeroSection data-animate />
      <AboutSection data-animate />
      <ServicesSection data-animate />
      <GallerySection data-animate />
      <ContactSection data-animate />
      <Footer data-animate />
      <TawkToChat />
    </main>
  );
}
