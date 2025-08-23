<template>
  <section id="services" class="py-20 bg-background">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-16" data-aos="fade-up">
        <h2 class="text-4xl md:text-5xl font-bold text-foreground mb-6 font-serif">
          Our Services
        </h2>
        <p class="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          We offer comprehensive business solutions designed to help your company thrive in today's competitive market.
        </p>
      </div>
      
      <!-- Services Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(service, index) in services" 
          :key="service.title"
          :data-aos="'fade-up'"
          :data-aos-delay="index * 100"
          class="group bg-card hover:bg-accent/5 p-8 rounded-2xl shadow-lg border border-border hover:border-accent/30 transition-all duration-300 hover:transform hover:scale-105"
        >
          <!-- Icon -->
          <div class="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
            <div v-html="service.icon" class="w-8 h-8 text-accent"></div>
          </div>
          
          <!-- Content -->
          <h3 class="text-2xl font-bold text-card-foreground mb-4 font-serif">
            {{ service.title }}
          </h3>
          <p class="text-muted-foreground leading-relaxed mb-6">
            {{ service.description }}
          </p>
          
          <!-- Features -->
          <ul class="space-y-2">
            <li 
              v-for="feature in service.features" 
              :key="feature"
              class="flex items-center text-sm text-muted-foreground"
            >
              <svg class="w-4 h-4 text-accent mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              {{ feature }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    title: 'Business Consulting',
    description: 'Strategic guidance to optimize your business operations and drive sustainable growth.',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>',
    features: ['Market Analysis', 'Process Optimization', 'Growth Strategy', 'Risk Assessment']
  },
  {
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing solutions to boost your online presence and reach.',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path></svg>',
    features: ['SEO Optimization', 'Social Media Marketing', 'Content Strategy', 'PPC Campaigns']
  },
  {
    title: 'Technology Solutions',
    description: 'Cutting-edge technology implementations to modernize your business infrastructure.',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>',
    features: ['Cloud Migration', 'System Integration', 'Automation', 'Security Solutions']
  },
  {
    title: 'Financial Planning',
    description: 'Expert financial guidance to ensure your business maintains healthy cash flow and growth.',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path></svg>',
    features: ['Budget Planning', 'Investment Strategy', 'Tax Optimization', 'Financial Reporting']
  },
  {
    title: 'Human Resources',
    description: 'Complete HR solutions to help you build and maintain a strong, productive workforce.',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>',
    features: ['Recruitment', 'Training Programs', 'Performance Management', 'Policy Development']
  },
  {
    title: 'Project Management',
    description: 'Professional project management services to ensure your initiatives are delivered on time and budget.',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>',
    features: ['Project Planning', 'Resource Management', 'Risk Mitigation', 'Quality Assurance']
  }
]
</script>
