<template>
  <header class="sticky top-0 z-50 bg-primary shadow-lg">
    <nav class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center space-x-2">
          <div class="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
            <span class="text-accent-foreground font-bold text-xl">B</span>
          </div>
          <span class="text-primary-foreground font-bold text-xl font-serif">BusinessPro</span>
        </div>
        
        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <a 
            v-for="item in navItems" 
            :key="item.name"
            :href="item.href"
            class="text-primary-foreground hover:text-accent transition-colors duration-300 font-medium"
          >
            {{ item.name }}
          </a>
        </div>
        
        <!-- Mobile Menu Button -->
        <button 
          @click="toggleMobileMenu"
          class="md:hidden text-primary-foreground hover:text-accent transition-colors"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      
      <!-- Mobile Navigation -->
      <div v-if="mobileMenuOpen" class="md:hidden mt-4 pb-4">
        <div class="flex flex-col space-y-2">
          <a 
            v-for="item in navItems" 
            :key="item.name"
            :href="item.href"
            @click="closeMobileMenu"
            class="text-primary-foreground hover:text-accent transition-colors duration-300 py-2 font-medium"
          >
            {{ item.name }}
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' }
]

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
</script>
