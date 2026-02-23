import { FadeIn } from "../components/FadeIn";

export default function About() {
  return (
    <section id="sobre" className="py-24 relative overflow-hidden bg-white">
      {/* Blob */}
      <div className="absolute -bottom-20 -left-20 h-96 w-96 bg-mint/20 rounded-blob animate-blob blur-3xl -z-10" />

      <div className="section-container grid md:grid-cols-2 gap-12 items-center">
        {/* Avatar */}
        <FadeIn>
          <div className="relative flex justify-center">
            <div className="relative w-72 h-72 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-rose/30 animate-blob blur-xl" />
              <img
                src="https://i.imgur.com/22PvGoB.jpg"
                alt="Mayara Rodrigues"
                loading="lazy"
                className="relative z-10 w-full h-full object-cover rounded-blob animate-blob shadow-xl"
                style={{ animationDelay: "2s" }}
              />
            </div>
          </div>
        </FadeIn>

        {/* Text */}
        <FadeIn delay={0.2}>
          <p className="text-sm font-medium uppercase tracking-widest text-rose-dark">
            Quem somos
          </p>
          <h2 className="font-display text-4xl font-bold text-chocolate mt-2 mb-6">
            A história da Mia
          </h2>
          <div className="space-y-4 text-cocoa-500 leading-relaxed">
            <p>
              Olá, meu nome é Mayara (conhecida também como Mia), tenho 24 anos
              e vim contar um pouco de como tudo começou.
            </p>
            <p>
              Em 2016 eu e minha mãe estávamos em busca de uma renda extra, já
              que ela tinha ficado desempregada. Como eu já havia vendido bolo
              durante todo o meu ensino médio e sempre amei cozinhar pra outras
              pessoas, juntamos o útil ao agradável. Investimos em curso,
              materiais e com um pouco de medo, mas muita vontade, iniciamos.
            </p>
            <p>
              Em 2019, insatisfeita com meu emprego, pedi demissão. Me vi
              perdida e me questionando diversas vezes o que eu realmente
              queria. E me encontrei.
            </p>
            <p>
              Hoje me dedico 100% aos meus doces e à vocês. Sou grata a cada um
              que me ajudou a chegar até aqui, principalmente minha mãe que
              nunca me desamparou. E a cada um dos meus clientes, sem vocês nada
              disso teria sentido.{" "}
              <span className="font-semibold text-chocolate">Obrigada.</span>
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
