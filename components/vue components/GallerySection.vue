<template>
  <section id="gallery" class="py-20 bg-muted">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-16" data-aos="fade-up">
        <h2 class="text-4xl md:text-5xl font-bold text-foreground mb-6 font-serif">
          Our Portfolio
        </h2>
        <p class="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Explore our successful projects and see how we've helped businesses achieve their goals.
        </p>
      </div>
      
      <!-- Gallery Tabs -->
      <div class="flex flex-wrap justify-center gap-4 mb-12" data-aos="fade-up" data-aos-delay="200">
        <button 
          v-for="category in categories" 
          :key="category"
          @click="activeCategory = category"
          :class="[
            'px-6 py-3 rounded-full font-semibold transition-all duration-300',
            activeCategory === category 
              ? 'bg-accent text-accent-foreground shadow-lg' 
              : 'bg-card text-card-foreground hover:bg-accent/10 border border-border'
          ]"
        >
          {{ category }}
        </button>
      </div>
      
      <!-- Gallery Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="(item, index) in filteredGallery" 
          :key="item.id"
          :data-aos="'fade-up'"
          :data-aos-delay="index * 100"
          class="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
          @click="openLightbox(item)"
        >
          <div class="aspect-square overflow-hidden">
            <img 
              :src="item.image" 
              :alt="item.title"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          
          <!-- Overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div class="absolute bottom-0 left-0 right-0 p-6">
              <h3 class="text-white font-bold text-xl mb-2 font-serif">{{ item.title }}</h3>
              <p class="text-white/90 text-sm">{{ item.description }}</p>
              <div class="mt-3">
                <span class="inline-block bg-accent/20 text-accent-foreground px-3 py-1 rounded-full text-xs font-medium">
                  {{ item.category }}
                </span>
              </div>
            </div>
          </div>
          
          <!-- View Icon -->
          <div class="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Lightbox Modal -->
    <div 
      v-if="lightboxOpen" 
      class="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      @click="closeLightbox"
    >
      <div class="relative max-w-4xl max-h-full">
        <img 
          :src="selectedImage?.image" 
          :alt="selectedImage?.title"
          class="max-w-full max-h-full object-contain rounded-lg"
        />
        <button 
          @click="closeLightbox"
          class="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <div class="absolute bottom-4 left-4 right-4 text-center">
          <h3 class="text-white font-bold text-2xl mb-2 font-serif">{{ selectedImage?.title }}</h3>
          <p class="text-white/90">{{ selectedImage?.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeCategory = ref('All')
const lightboxOpen = ref(false)
const selectedImage = ref(null)

const categories = ['All', 'Consulting', 'Marketing', 'Technology', 'Finance']

const galleryItems = [
  {
    id: 1,
    title: 'Corporate Strategy Redesign',
    description: 'Complete business strategy overhaul for a Fortune 500 company',
    category: 'Consulting',
    image: '/placeholder.svg?height=400&width=400'
  },
  {
    id: 2,
    title: 'Digital Marketing Campaign',
    description: 'Award-winning social media campaign that increased engagement by 300%',
    category: 'Marketing',
    image: '/placeholder.svg?height=400&width=400'
  },
  {
    id: 3,
    title: 'Cloud Infrastructure Migration',
    description: 'Seamless migration of legacy systems to modern cloud architecture',
    category: 'Technology',
    image: '/placeholder.svg?height=400&width=400'
  },
  {
    id: 4,
    title: 'Financial Planning System',
    description: 'Custom financial planning platform for investment management',
    category: 'Finance',
    image: '/placeholder.svg?height=400&width=400'
  },
  {
    id: 5,
    title: 'Brand Identity Development',
    description: 'Complete brand redesign and identity system for tech startup',
    category: 'Marketing',
    image: '/placeholder.svg?height=400&width=400'
  },
  {
    id: 6,
    title: 'Process Automation',
    description: 'Automated workflow system reducing manual tasks by 80%',
    category: 'Technology',
    image: '/placeholder.svg?height=400&width=400'
  },
  {
    id: 7,
    title: 'Market Analysis Report',
    description: 'Comprehensive market research and competitive analysis',
    category: 'Consulting',
    image: '/placeholder.svg?height=400&width=400'
  },
  {
    id: 8,
    title: 'Investment Portfolio',
    description: 'Diversified investment strategy yielding 15% annual returns',
    category: 'Finance',
    image: '/placeholder.svg?height=400&width=400'
  },
  {
    id: 9,
    title: 'E-commerce Platform',
    description: 'Custom e-commerce solution with advanced analytics',
    category: 'Technology',
    image: '/placeholder.svg?height=400&width=400'
  }
]

const filteredGallery = computed(() => {
  if (activeCategory.value === 'All') {
    return galleryItems
  }
  return galleryItems.filter(item => item.category === activeCategory.value)
})

const openLightbox = (item) => {
  selectedImage.value = item
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  lightboxOpen.value = false
  selectedImage.value = null
  document.body.style.overflow = 'auto'
}
</script>
