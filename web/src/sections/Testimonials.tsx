import { testimonials } from "../data/testimonials";
import { FadeIn } from "../components/FadeIn";
import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 relative overflow-hidden">
      <div className="absolute top-10 left-10 h-64 w-64 bg-caramel/20 rounded-blob animate-blob blur-3xl -z-10" />

      <div className="section-container">
        <FadeIn>
          <p className="text-sm font-medium uppercase tracking-widest text-rose-dark text-center">
            O que dizem
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-chocolate text-center mt-2 mb-12">
            Depoimentos
          </h2>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <div className="rounded-3xl bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      size={16}
                      className="fill-caramel text-caramel"
                    />
                  ))}
                </div>
                <p className="text-cocoa-600 text-sm leading-relaxed">
                  "{t.message}"
                </p>
                <p className="mt-4 text-xs font-semibold text-chocolate">
                  — {t.name}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
