<template>
  <section id="home" class="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-secondary">
    <div class="absolute inset-0 bg-black opacity-20"></div>
    <div class="relative z-10 container mx-auto px-4 text-center">
      <div data-aos="fade-up" data-aos-delay="200">
        <h1 class="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 font-serif">
          Professional Business Solutions
        </h1>
        <p class="text-xl md:text-2xl text-primary-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Empowering your business with innovative strategies, cutting-edge technology, and exceptional service to drive growth and success.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#about" 
            class="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Learn More
          </a>
          <a 
            href="#contact" 
            class="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4 rounded-lg font-semibold transition-all duration-300"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
    
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-accent opacity-10 rounded-full animate-pulse"></div>
      <div class="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary opacity-10 rounded-full animate-pulse" style="animation-delay: 2s;"></div>
    </div>
  </section>
</template>
