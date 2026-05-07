import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import TypingWords from './TypingWords';

export default function Navbar() {
  const [active, setActive] = useState<string>('servicos');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = ['servicos', 'resultados', 'contato'];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        root: null,
        threshold: 0.6,
      },
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);

      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const linkClass = (id: string) =>
    `
    relative group transition-all duration-300
    hover:text-[#08CB00]
    ${
      active === id
        ? 'text-[#08CB00]'
        : 'text-white/70 hover:text-white'
    }
  `;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-2xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* LOGO */}
        <a
          href="/"
          className="relative z-50 flex items-center text-xl font-bold tracking-tighter"
        >
          <span className="animate-gradient bg-gradient-to-r from-slate-200 via-white to-slate-400 bg-clip-text text-transparent">
            DS
          </span>

          <span className="hidden bg-gradient-to-r from-green-300 via-green-400 to-[#08CB00] bg-clip-text text-transparent md:block">
            Desenvolvimento
          </span>
          <div className='justify-center items-center ml-2 md:hidden flex'>
            <TypingWords />
          </div>
        </a>

        {/* DESKTOP MENU */}
        <div className="hidden items-center gap-8 text-sm font-medium md:flex">
          {['servicos', 'resultados', 'contato'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={linkClass(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}

              {/* Animated underline */}
              <span
                className={`
                  absolute -bottom-2 left-0 h-[2px]
                  bg-gradient-to-r from-[#08CB00] to-emerald-400
                  transition-all duration-300
                  ${
                    active === item
                      ? 'w-full'
                      : 'w-0 group-hover:w-full'
                  }
                `}
              />
            </a>
          ))}
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">
          {/* CTA DESKTOP */}
          <a
            href="https://wa.me/5567981178782"
            className="
              hidden md:flex
              items-center justify-center
              rounded-xl
              border border-[#08CB00]/40
              bg-[#08CB00]
              px-5 py-2
              text-sm font-semibold
              text-black
              shadow-[0_0_30px_rgba(8,203,0,0.35)]
              transition-all duration-300
              hover:scale-105
              hover:shadow-[0_0_40px_rgba(8,203,0,0.5)]
              active:scale-95
            "
          >
            Falar agora
          </a>

          {/* BURGER BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              relative z-50
              flex h-10 w-10 items-center justify-center
              rounded-xl
              border border-white/10
              bg-white/5
              text-white
              backdrop-blur-xl
              transition-all duration-300
              hover:bg-white/10
              md:hidden
            "
            aria-label="Abrir menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`
          absolute left-0 top-0 w-full
          overflow-hidden
          border-b border-white/10
          bg-black/90
          backdrop-blur-3xl
          transition-all duration-500 ease-in-out
          md:hidden
          ${
            menuOpen
              ? 'max-h-[500px] opacity-100'
              : 'max-h-0 opacity-0'
          }
        `}
      >
        <div className="flex flex-col px-6 pb-6 pt-24">
          {['servicos', 'resultados', 'contato'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setMenuOpen(false)}
              className={`
                rounded-xl px-4 py-4
                text-lg font-medium
                transition-all duration-300
                ${
                  active === item
                    ? 'bg-white/10 text-[#08CB00]'
                    : 'text-white/80 hover:bg-white/5 hover:text-white'
                }
              `}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}

          {/* MOBILE CTA */}
          <a
            href="https://wa.me/5567981178782"
            className="
              mt-6 flex items-center justify-center
              rounded-2xl
              bg-[#08CB00]
              px-5 py-4
              font-semibold
              text-black
              shadow-[0_0_40px_rgba(8,203,0,0.35)]
              transition-all duration-300
              hover:scale-[1.02]
              active:scale-95
            "
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}