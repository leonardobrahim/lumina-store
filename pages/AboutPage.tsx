import React from 'react';

export const AboutPage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto py-12 animate-in fade-in duration-700">
      <h1 className="text-5xl md:text-7xl font-display font-bold italic mb-12 text-center text-lumina-base">
        Lumina.
      </h1>

      <div className="prose prose-lg prose-slate mx-auto text-lumina-muted">
        <p className="lead text-xl md:text-2xl text-lumina-base font-light leading-relaxed mb-8">
          Acreditamos que o design não é apenas sobre como algo se parece, mas como ele funciona e como ele faz você se sentir.
        </p>

        <p className="mb-6">
          Fundada em 2024, a Lumina nasceu da necessidade de silêncio em um mundo barulhento. Nossa curadoria é focada em objetos essenciais que trazem clareza, funcionalidade e beleza estética para o cotidiano.
        </p>

        <h3 className="text-2xl font-display font-bold text-lumina-base mt-12 mb-4">Manifesto</h3>
        <p className="mb-6">
          Rejeitamos o excesso. Celebramos a qualidade. Cada peça em nossa loja é escolhida não por ser tendência, mas por ser atemporal. Trabalhamos com designers independentes e marcas que compartilham nossa visão de sustentabilidade e durabilidade.
        </p>

        <div className="grid grid-cols-2 gap-8 my-12 not-prose">
            <div className="bg-gray-100 p-8 rounded-2xl text-center">
                <span className="block text-4xl font-bold text-lumina-accent mb-2">100%</span>
                <span className="text-sm font-semibold text-lumina-base uppercase tracking-wider">Carbono Neutro</span>
            </div>
            <div className="bg-gray-100 p-8 rounded-2xl text-center">
                <span className="block text-4xl font-bold text-lumina-accent mb-2">30</span>
                <span className="text-sm font-semibold text-lumina-base uppercase tracking-wider">Dias para Troca</span>
            </div>
        </div>

        <h3 className="text-2xl font-display font-bold text-lumina-base mt-8 mb-4">O Futuro</h3>
        <p>
          Estamos apenas começando. Nossa visão é criar um ecossistema de lifestyle que vai além do produto físico, integrando tecnologia e bem-estar. Obrigado por fazer parte da nossa jornada.
        </p>
      </div>
    </div>
  );
};