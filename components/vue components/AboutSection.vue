<template>
  <section id="about" class="py-20 bg-muted">
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Content -->
        <div data-aos="fade-right">
          <h2 class="text-4xl md:text-5xl font-bold text-foreground mb-6 font-serif">
            About Our Company
          </h2>
          <p class="text-lg text-muted-foreground mb-6 leading-relaxed">
            With over a decade of experience in delivering exceptional business solutions, we've helped hundreds of companies transform their operations and achieve remarkable growth.
          </p>
          <p class="text-lg text-muted-foreground mb-8 leading-relaxed">
            Our team of experts combines industry knowledge with innovative approaches to provide tailored solutions that meet your unique business needs.
          </p>
          
          <!-- Stats -->
          <div class="grid grid-cols-2 gap-6">
            <div class="text-center">
              <div class="text-3xl font-bold text-accent mb-2">500+</div>
              <div class="text-muted-foreground">Happy Clients</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-accent mb-2">10+</div>
              <div class="text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
        
        <!-- Image -->
        <div data-aos="fade-left" class="relative">
          <div class="relative overflow-hidden rounded-2xl shadow-2xl">
            <img 
              src="/placeholder.svg?height=500&width=600"
              alt="Professional business team"
              class="w-full h-auto object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
          </div>
          
          <!-- Floating Card -->
          <div class="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-lg border border-border">
            <div class="flex items-center space-x-3">
              <div class="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                <svg class="w-6 h-6 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <div class="font-semibold text-card-foreground">Quality Assured</div>
                <div class="text-sm text-muted-foreground">100% Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
