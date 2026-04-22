<template>
  <div class="testimonials-container relative py-10">
    <div class="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white dark:from-[#020617] to-transparent z-10 pointer-events-none"></div>
    <div class="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white dark:from-[#020617] to-transparent z-10 pointer-events-none"></div>

    <swiper-container
      :slides-per-view="1.2"
      :space-between="20"
      :loop="true"
      :speed="5000"
      :autoplay="{
        delay: 0,
        disableOnInteraction: false,
      }"
      :free-mode="true"
      :breakpoints="{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3.5 },
        1440: { slidesPerView: 4.5 }
      }"
      class="continuous-swiper"
    >
      <swiper-slide v-for="(item, index) in testimonials" :key="index" class="h-auto">
        <!-- Adicionado h-full e min-h-[320px] para padronização -->
        <div class="glass-card p-8 rounded-3xl h-full min-h-[320px] flex flex-col justify-between hover:translate-y-[-8px] transition-all duration-500 group border border-white/20 dark:border-white/10">
          <div>
            <div class="text-vue-green mb-2 text-4xl opacity-50 font-serif">"</div>
            <p class="text-gray-600 dark:text-gray-300 italic mb-6 leading-relaxed text-sm md:text-base">
              {{ item.quote }}
            </p>
          </div>
          
          <div class="flex items-center gap-4 border-t border-gray-100 dark:border-white/5 pt-6">
            <img :src="item.image" :alt="item.name" class="w-12 h-12 rounded-full border-2 border-vue-green object-cover flex-shrink-0" />
            <div class="min-w-0">
              <h4 class="font-bold text-vue-blue dark:text-white text-sm truncate">{{ item.name }}</h4>
              <p class="text-[10px] text-gray-500 font-medium tracking-tight uppercase truncate">{{ item.company }}</p>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<script setup>
import { register } from 'swiper/element/bundle';
register();

const testimonials = [
  {
    name: "Ricardo Silva",
    company: "Silva Imóveis",
    quote: "A DS Desenvolvimento transformou completamente nossa presença digital. Em menos de 3 meses, o volume de leads qualificados triplicou.",
    image: "https://i.pravatar.cc/150?u=ricardo"
  },
  {
    name: "Ana Oliveira",
    company: "BioEstética",
    quote: "O site é extremamente rápido e o design Liquid Glass passa uma autoridade incrível para nossos clientes de alto padrão.",
    image: "https://i.pravatar.cc/150?u=ana"
  },
  {
    name: "Marcos Vinícius",
    company: "TechSolutions",
    quote: "Trabalho com tecnologia e sou exigente. O código deles é limpo e a performance no Google é impecável. Recomendo!",
    image: "https://i.pravatar.cc/150?u=marcos"
  },
  {
    name: "Juliana Costa",
    company: "Fashion Store",
    quote: "O Google Maps agora é nossa maior fonte de clientes locais. A estratégia de SEO Local da equipe foi o divisor de águas.",
    image: "https://i.pravatar.cc/150?u=juliana"
  },
  {
    name: "Fabio Mendes",
    company: "Mendes Advocacia",
    quote: "Nossa Landing Page converte 4x mais que o site antigo. A clareza da proposta de valor e a velocidade fazem toda a diferença.",
    image: "https://i.pravatar.cc/150?u=fabio"
  },
  {
    name: "Carla Souza",
    company: "FitLife Academia",
    quote: "A gestão de anúncios trouxe um ROI que nunca tínhamos visto antes. O suporte da equipe DS é excepcional e proativo.",
    image: "https://i.pravatar.cc/150?u=carla"
  },
  {
    name: "Bruno Guedes",
    company: "Guedes Logística",
    quote: "Eles entendem de negócio, não só de código. A consultoria estratégica inicial poupou meses de erros no nosso marketing.",
    image: "https://i.pravatar.cc/150?u=bruno"
  }
];
</script>

<style scoped>
.continuous-swiper::part(wrapper) {
  transition-timing-function: linear !important;
}

swiper-slide {
  height: auto;
}

.glass-card {
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.07);
}

:global(.dark) .glass-card {
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
}
</style>
