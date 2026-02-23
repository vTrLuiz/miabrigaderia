import { useCart, productToItem } from "../store/cart";
import { formatBRL } from "../lib/currency";
import { parseBRLToNumber } from "../lib/currency";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, Trash2, MessageCircle } from "lucide-react";

export default function CartDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { items, setQty, removeItem, clear, total } = useCart();

  const whatsappNumber = "5521979464990";
  const message = items
    .map((i) => `• ${i.title} x${i.qty} = ${formatBRL(i.price * i.qty)}`)
    .join("\n");
  const waLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Olá! Gostaria de fazer um pedido:\n\n${message}\n\nTotal: ${formatBRL(total)}`,
  )}`;

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/40"
          />

          {/* Drawer */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 26, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md bg-cream shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-cocoa-100">
              <h2 className="font-display text-xl font-semibold text-chocolate">
                Seu pedido
              </h2>
              <button onClick={onClose} aria-label="Fechar carrinho">
                <X size={20} className="text-cocoa-400" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {items.length === 0 ? (
                <p className="text-cocoa-400 text-center py-12">
                  Seu carrinho está vazio
                </p>
              ) : (
                items.map((item) => (
                  <motion.div
                    key={item.slug}
                    layout
                    className="flex items-center gap-4 rounded-2xl bg-white p-3"
                  >
                    {item.img && (
                      <img
                        src={item.img}
                        alt={item.title}
                        className="h-16 w-16 rounded-xl object-cover"
                      />
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm text-chocolate truncate">
                        {item.title}
                      </p>
                      <p className="text-xs text-cocoa-400">
                        {formatBRL(item.price)}
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => setQty(item.slug, item.qty - 1)}
                        className="p-1 rounded-lg hover:bg-cocoa-50"
                        aria-label="Diminuir"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-6 text-center text-sm font-medium">
                        {item.qty}
                      </span>
                      <button
                        onClick={() => setQty(item.slug, item.qty + 1)}
                        className="p-1 rounded-lg hover:bg-cocoa-50"
                        aria-label="Aumentar"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.slug)}
                      className="p-1 text-rose-dark hover:text-rose"
                      aria-label="Remover"
                    >
                      <Trash2 size={14} />
                    </button>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-5 border-t border-cocoa-100 space-y-3">
                <div className="flex justify-between font-display text-lg font-semibold text-chocolate">
                  <span>Total</span>
                  <span>{formatBRL(total)}</span>
                </div>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium transition-colors"
                >
                  <MessageCircle size={18} />
                  Pedir pelo WhatsApp
                </a>
                <button
                  onClick={clear}
                  className="w-full text-center text-xs text-cocoa-400 underline"
                >
                  Limpar carrinho
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
