import { Code2, TrendingUp, MapPin, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface Service {
  icon: LucideIcon;
  title: string;
  desc: string;
  whatsappMsg: string;
}

const services: Service[] = [
  {
    icon: Code2,
    title: 'Plataformas de Conversão',
    desc: 'Não apenas sites, mas máquinas de vendas otimizadas para converter visitantes em faturamento real.',
    whatsappMsg:
      'Olá! Gostaria de saber mais sobre a criação de Plataformas de Conversão (Sites de Alta Performance).',
  },
  {
    icon: TrendingUp,
    title: 'Escalabilidade de Vendas',
    desc: 'Estratégias agressivas de tráfego pago no Google e Meta focadas em ROI positivo e escala previsível.',
    whatsappMsg: 'Olá! Tenho interesse em escalar minhas vendas através de Gestão de Tráfego Pago.',
  },
  {
    icon: MapPin,
    title: 'Domínio Regional (SEO)',
    desc: 'Colocamos seu negócio no topo do Google Maps para que você seja a autoridade máxima na sua cidade.',
    whatsappMsg:
      'Olá! Gostaria de entender como posso dominar as buscas locais da minha região com SEO e Google Maps.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

export default function Services() {
  return (
    <section id="servicos" className="px-6 py-24 bg-muted/30 relative overflow-hidden">
      {/* Efeito sutil de brilho no fundo */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-6xl font-bold tracking-tight"
          >
            Soluções para crescimento real
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Não criamos sites — criamos aquisição de clientes.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-3"
        >
          {services.map((s, i) => (
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              key={i}
              className="card p-8 group border-white/5 bg-card/40 backdrop-blur-md hover:border-brand-primary/40 flex flex-col h-full"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center mb-6 group-hover:bg-brand-primary/20 transition-colors duration-300">
                <s.icon className="w-7 h-7 text-brand-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed flex-grow">{s.desc}</p>

              <a
                href={`https://wa.me/5567981178782?text=${encodeURIComponent(s.whatsappMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex items-center text-sm font-bold text-brand-primary group-hover:gap-2 transition-all cursor-pointer"
              >
                Falar sobre este serviço
                <ChevronRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
