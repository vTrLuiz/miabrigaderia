import { useState } from "react";
import { products, type ProductCategory } from "../data/products";
import { useCart, productToItem } from "../store/cart";
import { FadeIn } from "../components/FadeIn";
import { ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

const categories: Array<ProductCategory | "Todos"> = [
  "Todos",
  ...Array.from(new Set(products.map((p) => p.category))),
];

export default function Products() {
  const [cat, setCat] = useState<ProductCategory | "Todos">("Todos");
  const { addItem } = useCart();

  const filtered =
    cat === "Todos" ? products : products.filter((p) => p.category === cat);

  return (
    <section id="produtos" className="py-24 relative overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute top-0 right-0 h-72 w-72 bg-rose-light/40 rounded-blob animate-blob blur-3xl -z-10" />

      <div className="section-container">
        <FadeIn>
          <p className="text-sm font-medium uppercase tracking-widest text-rose-dark text-center">
            Nosso cardápio
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-chocolate text-center mt-2 mb-12">
            Delícias artesanais
          </h2>
        </FadeIn>

        {/* Category filter */}
        <FadeIn delay={0.1}>
          <div className="flex justify-center gap-2 mb-10 flex-wrap">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  cat === c
                    ? "bg-chocolate text-cream shadow-lg"
                    : "bg-white text-cocoa-600 hover:bg-cocoa-100 border border-cocoa-200"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Product grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <FadeIn key={p.slug} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group rounded-3xl bg-white shadow-sm hover:shadow-xl transition-shadow overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-5">
                  <span className="text-xs font-medium text-rose-dark uppercase tracking-wider">
                    {p.category}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-chocolate mt-1">
                    {p.title}
                  </h3>
                  <p className="text-sm text-cocoa-400 mt-1">{p.desc}</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="font-display text-lg font-bold text-chocolate">
                      {p.price}
                    </span>
                    <button
                      onClick={() => addItem(productToItem(p))}
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-mint hover:bg-mint-dark text-chocolate text-sm font-medium transition-colors"
                      aria-label={`Adicionar ${p.title} ao carrinho`}
                    >
                      <ShoppingBag size={16} />
                      Adicionar
                    </button>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
