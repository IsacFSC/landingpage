import { Card } from '@/components/ui/card';

interface Testimonial {
  name: string;
  company: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Ricardo Silva',
    company: 'Silva Imóveis',
    quote:
      'A DS Desenvolvimento transformou completamente nossa presença digital. Em menos de 3 meses, o volume de leads triplicou.',
  },
  {
    name: 'Ana Oliveira',
    company: 'BioEstética',
    quote: 'Site extremamente rápido e design premium que transmite autoridade imediata.',
  },
  {
    name: 'Marcos Vinícius',
    company: 'TechSolutions',
    quote: 'Código limpo, performance absurda e resultado no Google impecável.',
  },
  {
    name: 'Juliana Costa',
    company: 'Fashion Store',
    quote: 'SEO Local colocou nossa empresa no topo do Google Maps.',
  },
  {
    name: 'Carlos Eduardo',
    company: 'Clínica Sorriso',
    quote:
      'Excelente trabalho no SEO Local. Hoje somos a primeira opção quando alguém busca por dentista na região.',
  },
  {
    name: 'Marina Lima',
    company: 'Arquitetura & Design',
    quote:
      'O design do site ficou incrível. Conseguiu transmitir exatamente a sofisticação que meus projetos exigem.',
  },
  {
    name: 'Paulo André',
    company: 'Suplementos Prime',
    quote:
      'A integração com o WhatsApp facilitou demais nosso atendimento. Leads qualificados chegando todos os dias.',
  },
  {
    name: 'Roberta Santos',
    company: 'Advocacia Integrada',
    quote:
      'Profissionalismo e entrega no prazo. O site é leve, rápido e passa muita confiança para os nossos clientes.',
  },
  {
    name: 'Felipe Neves',
    company: 'Construtora Neves',
    quote:
      'Nossa landing page de lançamentos imobiliários superou todas as expectativas de conversão e captação de leads.',
  },
  {
    name: 'Beatriz Rocha',
    company: 'Buffet Gourmet',
    quote:
      'O novo site nos trouxe clientes de grandes eventos corporativos que antes não conseguíamos alcançar.',
  },
];

export default function Testimonials() {
  return (
    <div className="relative py-16 overflow-hidden group">
      {/* Blur edges estilo Stripe/Neon */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-background to-transparent z-10" />

      {/* Container da animação */}
      <div className="flex w-fit animate-marquee gap-6 px-6 group-hover:[animation-play-state:paused]">
        {/* Duplicamos a lista para criar o efeito infinito sem saltos */}
        {[...testimonials, ...testimonials].map((t, i) => (
          <div key={i} className="flex-shrink-0">
            <Card className="w-[350px] p-6 rounded-2xl glass border-white/10 hover:border-brand-primary/50 transition-colors duration-500 h-full flex flex-col justify-between">
              <p className="text-sm text-muted-foreground leading-relaxed italic">“{t.quote}”</p>

              <div className="mt-6 border-t border-white/5 pt-4">
                <div className="font-semibold text-foreground">{t.name}</div>
                <div className="text-xs text-brand-primary/80 font-medium">{t.company}</div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
