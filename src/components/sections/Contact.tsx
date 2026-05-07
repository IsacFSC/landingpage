import { Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contato" className="px-6 py-16">
      <div className="max-w-xl mx-auto">
        {/* Header */}
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Solicite uma análise gratuita
        </h2>

        <p className="mt-3 text-sm text-center text-muted-foreground">
          Descubra onde seu negócio está perdendo dinheiro.
        </p>

        {/* Form */}
        <form className="mt-8 space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input
              className="w-full p-4 rounded-xl border bg-card/50 focus:ring-2 ring-brand-primary/50 outline-none transition-all"
              placeholder="Nome"
            />
            <input
              className="w-full p-4 rounded-xl border bg-card/50 focus:ring-2 ring-brand-primary/50 outline-none transition-all"
              placeholder="WhatsApp"
            />
          </div>

          <input
            className="w-full p-4 rounded-xl border bg-card/50 focus:ring-2 ring-brand-primary/50 outline-none transition-all"
            placeholder="E-mail"
          />

          <select className="w-full p-4 rounded-xl border bg-card/50 focus:ring-2 ring-brand-primary/50 outline-none transition-all appearance-none">
            <option value="">Qual serviço você precisa?</option>
            <option value="site">Site de Alta Performance</option>
            <option value="trafego">Gestão de Tráfego</option>
            <option value="seo">SEO Local</option>
            <option value="consultoria">Consultoria Gratuita</option>
          </select>

          <button className="btn-primary w-full py-4 text-lg mt-4 shadow-xl shadow-brand-primary/20">
            Solicitar análise gratuita
          </button>
        </form>

        {/* Contato direto */}
        <div className="mt-8 space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            +55 67 98117-8782
          </div>

          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            contato@dsdesenvolvimento.com
          </div>
        </div>
      </div>
    </section>
  );
}
