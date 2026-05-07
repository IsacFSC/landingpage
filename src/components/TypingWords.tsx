import { TypeAnimation } from 'react-type-animation';

export default function TypingWords() {
  return (
    <div className="text-xs md:text-2xl font-bold tracking-tight">
      <span className="text-white">Especialistas em </span>

      <TypeAnimation
        sequence={[
          'Performance',
          2000,
          'Tráfego',
          2000,
          'Conversão',
          2000,
        ]}
        wrapper="span"
        speed={40}
        repeat={Infinity}
        className="
          bg-gradient-to-r
          from-[#08CB00]
          via-green-300
          to-emerald-500
          bg-clip-text
          text-transparent
        "
      />
    </div>
  );
}