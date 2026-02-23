import { useState, useEffect } from "react";
import { ShoppingBag } from "lucide-react";
import { useCart } from "../store/cart";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Produtos", href: "#produtos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export default function NavBar({ onCartClick }: { onCartClick: () => void }) {
  const { items } = useCart();
  const count = items.reduce((s, i) => s + i.qty, 0);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-cream/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="section-container flex items-center justify-between py-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <img
            src="https://i.imgur.com/ptJh8IG.png"
            alt="Mia Brigaderia"
            width={48}
            height={48}
            className="rounded-full"
          />
          <span className="font-display text-xl font-semibold text-chocolate">
            Mia Brigaderia
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-cocoa-600 hover:text-chocolate transition-colors"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={onCartClick}
            className="relative p-2 rounded-full hover:bg-cocoa-100 transition-colors"
            aria-label="Abrir carrinho"
          >
            <ShoppingBag size={20} className="text-chocolate" />
            <AnimatePresence>
              {count > 0 && (
                <motion.span
                  key="badge"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center rounded-full bg-rose text-white text-[10px] font-bold"
                >
                  {count}
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </nav>

        {/* Mobile: cart + hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={onCartClick}
            className="relative p-2"
            aria-label="Abrir carrinho"
          >
            <ShoppingBag size={20} className="text-chocolate" />
            {count > 0 && (
              <span className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center rounded-full bg-rose text-white text-[10px] font-bold">
                {count}
              </span>
            )}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2"
            aria-label="Menu"
          >
            <div className="space-y-1.5">
              <span
                className={`block h-0.5 w-5 bg-chocolate transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block h-0.5 w-5 bg-chocolate transition-opacity ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-5 bg-chocolate transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-cream/95 backdrop-blur-md overflow-hidden"
          >
            <div className="section-container py-4 flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-medium text-cocoa-600"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
