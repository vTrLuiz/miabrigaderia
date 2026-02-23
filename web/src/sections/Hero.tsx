import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Decorative blobs */}
      <div className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-blob bg-mint/30 animate-blob blur-3xl" />
      <div
        className="absolute -bottom-40 -left-40 h-[600px] w-[600px] rounded-blob bg-rose-light/50 animate-blob blur-3xl"
        style={{ animationDelay: "4s" }}
      />

      <div className="section-container relative z-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-rose-dark">
            Doces artesanais com amor
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.1] text-chocolate">
            Cada doce,{" "}
            <span className="italic text-rose-dark">uma obra de arte</span>
          </h1>
          <p className="text-lg text-cocoa-400 max-w-md">
            Brigadeiros gourmet, brownies recheados e delícias exclusivas feitas
            com ingredientes selecionados e muito carinho.
          </p>
          <div className="flex gap-4">
            <a
              href="#produtos"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-chocolate text-cream font-medium hover:bg-cocoa-700 transition-colors"
            >
              Ver cardápio
            </a>
            <a
              href="#contato"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full border-2 border-chocolate text-chocolate font-medium hover:bg-chocolate hover:text-cream transition-colors"
            >
              Fale conosco
            </a>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex justify-center"
        >
          <div className="relative w-96 h-96 md:w-[480px] md:h-[480px]">
            <img
              src="https://i.imgur.com/ptJh8IG.png"
              alt="Mia Brigaderia"
              className="relative z-10 w-full h-full object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
