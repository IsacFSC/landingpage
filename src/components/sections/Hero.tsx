import { ArrowRight, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative px-6 pt-4 pb-20 md:pt-18 md:pb-32 text-center overflow-hidden">
      {/* Aurora Background Effect - Defined in global.css */}
      <div className="absolute inset-0 -z-10 animate-aurora opacity-30 dark:opacity-20 blur-[100px]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-3xl mx-auto relative"
      >
        {/* Beam Effect Wrapper */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-brand-primary/50 to-transparent overflow-hidden">
          <div className="w-full h-full animate-[beam_3s_infinite] bg-gradient-to-r from-transparent via-brand-primary to-transparent" />
        </div>

        {/* Badge */}
        <div className="badge inline-flex items-center gap-2 mb-8">
          <Rocket className="w-4 h-4" />
          Sites que realmente geram clientes
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-7xl font-bold leading-[1.1] tracking-tight text-brand-black dark:text-brand-white">
          Criação de Sites que{' '}
          <span className="text-brand-primary">convertem visitantes em clientes</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-8 text-base md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          Desenvolvemos landing pages de alta performance, otimizadas para SEO e tráfego pago.
          Transforme sua presença digital em uma máquina de vendas.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-col items-center gap-4">
          <a
            href="https://wa.me/5567981178782"
            className="btn-primary w-full md:w-auto px-8 py-4 text-lg flex items-center justify-center gap-2"
          >
            Falar com especialista
            <ArrowRight className="w-5 h-5" />
          </a>

          <span className="text-xs text-muted-foreground">
            Resposta em até 15 minutos no horário comercial
          </span>
        </div>

        {/* Trust */}
        <div className="mt-8 md:mt-12 text-xs text-muted-foreground/60 uppercase tracking-widest font-medium">
          +50 projetos entregues 
          <span className='animate-pulse text-brand-primary text-sm px-1'>•</span>
          SEO local 
          <span className='animate-pulse text-brand-primary text-sm px-1'>•</span>
          Alta performance
        </div>
      </motion.div>
    </section>
  );
}
