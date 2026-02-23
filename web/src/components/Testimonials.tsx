import { testimonials } from "../data/testimonials";

export function Testimonials() {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-semibold text-center mb-4">Depoimentos</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <blockquote
            key={i}
            className="rounded-xl border border-brand-border bg-white/80 p-4"
          >
            <p className="text-sm">“{t.message}”</p>
            <footer className="mt-2 text-xs opacity-80">— {t.name}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
