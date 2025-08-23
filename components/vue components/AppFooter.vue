<template>
  <footer class="bg-primary text-primary-foreground">
    <div class="container mx-auto px-4 py-16">
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Company Info -->
        <div>
          <div class="flex items-center space-x-2 mb-6">
            <div
              class="w-10 h-10 bg-accent rounded-lg flex items-center justify-center"
            >
              <span class="text-accent-foreground font-bold text-xl">B</span>
            </div>
            <span class="text-primary-foreground font-bold text-xl font-serif"
              >BusinessPro</span
            >
          </div>
          <p class="text-primary-foreground/80 mb-6 leading-relaxed">
            Empowering businesses with innovative solutions and exceptional
            service to drive growth and success in today's competitive market.
          </p>
          <div class="flex space-x-4">
            <a
              href="#"
              class="w-10 h-10 bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground rounded-lg flex items-center justify-center transition-colors"
              aria-label="Twitter"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M24 4.557c-.883.392-1.832.656-2.828.775 
             1.017-.609 1.798-1.574 2.165-2.724
             -.951.564-2.005.974-3.127 1.195
             -.897-.957-2.178-1.555-3.594-1.555
             -3.179 0-5.515 2.966-4.797 6.045
             -4.091-.205-7.719-2.165-10.148-5.144
             -1.29 2.213-.669 5.108 1.523 6.574
             -.806-.026-1.566-.247-2.229-.616
             -.054 2.281 1.581 4.415 3.949 4.89
             -.693.188-1.452.232-2.224.084
             .626 1.956 2.444 3.379 4.6 3.419
             -2.07 1.623-4.678 2.348-7.29 2.04
             2.179 1.397 4.768 2.212 7.548 2.212
             9.142 0 14.307-7.721 13.995-14.646
             .962-.695 1.797-1.562 2.457-2.549z"
                />
              </svg>
              <span class="sr-only">Twitter</span>
            </a>
            <a
              href="#"
              class="w-10 h-10 bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground rounded-lg flex items-center justify-center transition-colors"
            >
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                />
              </svg>
              <span class="sr-only">Visit LinkedIn</span>
            </a>

            <a
              href="#"
              aria-label="Visit GitHub"
              class="w-10 h-10 bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground rounded-lg flex items-center justify-center transition-colors"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079..." />
              </svg>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-semibold mb-6 font-serif">Quick Links</h3>
          <ul class="space-y-3">
            <li>
              <a
                href="#home"
                class="text-primary-foreground/80 hover:text-accent transition-colors"
                >Home</a
              >
            </li>
            <li>
              <a
                href="#about"
                class="text-primary-foreground/80 hover:text-accent transition-colors"
                >About Us</a
              >
            </li>
            <li>
              <a
                href="#services"
                class="text-primary-foreground/80 hover:text-accent transition-colors"
                >Services</a
              >
            </li>
            <li>
              <a
                href="#gallery"
                class="text-primary-foreground/80 hover:text-accent transition-colors"
                >Portfolio</a
              >
            </li>
            <li>
              <a
                href="#contact"
                class="text-primary-foreground/80 hover:text-accent transition-colors"
                >Contact</a
              >
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h3 class="text-lg font-semibold mb-6 font-serif">Services</h3>
          <ul class="space-y-3">
            <li>
              <a
                href="#"
                class="text-primary-foreground/80 hover:text-accent transition-colors"
                >Business Consulting</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-primary-foreground/80 hover:text-accent transition-colors"
                >Digital Marketing</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-primary-foreground/80 hover:text-accent transition-colors"
                >Technology Solutions</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-primary-foreground/80 hover:text-accent transition-colors"
                >Financial Planning</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-primary-foreground/80 hover:text-accent transition-colors"
                >Project Management</a
              >
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="text-lg font-semibold mb-6 font-serif">Contact Info</h3>
          <div class="space-y-4">
            <div class="flex items-start space-x-3">
              <svg
                class="w-5 h-5 text-accent mt-1 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
              <div class="text-primary-foreground/80">
                <p>123 Business Ave, Suite 100</p>
                <p>New York, NY 10001</p>
              </div>
            </div>
            <div class="flex items-center space-x-3">
              <svg
                class="w-5 h-5 text-accent flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                ></path>
              </svg>
              <span class="text-primary-foreground/80">+1 (555) 123-4567</span>
            </div>
            <div class="flex items-center space-x-3">
              <svg
                class="w-5 h-5 text-accent flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
              <span class="text-primary-foreground/80"
                >contact@businesspro.com</span
              >
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-primary-foreground/20 mt-12 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-primary-foreground/60 text-sm">
            © 2024 BusinessPro. All rights reserved.
          </p>
          <div class="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              class="text-primary-foreground/60 hover:text-accent text-sm transition-colors"
              >Privacy Policy</a
            >
            <a
              href="#"
              class="text-primary-foreground/60 hover:text-accent text-sm transition-colors"
              >Terms of Service</a
            >
            <a
              href="#"
              class="text-primary-foreground/60 hover:text-accent text-sm transition-colors"
              >Cookie Policy</a
            >
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
