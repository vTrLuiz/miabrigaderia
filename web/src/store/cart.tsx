import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { parseBRLToNumber } from "../lib/currency";

export type CartItem = {
  slug: string;
  title: string;
  price: number; // numeric price in BRL
  img?: string;
  qty: number;
};

type CartState = {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "qty">, qty?: number) => void;
  removeItem: (slug: string) => void;
  setQty: (slug: string, qty: number) => void;
  clear: () => void;
  total: number;
};

const CartContext = createContext<CartState | null>(null);

function loadFromStorage(): CartItem[] {
  try {
    const raw = localStorage.getItem("cart:v1");
    return raw ? (JSON.parse(raw) as CartItem[]) : [];
  } catch {
    return [];
  }
}

function saveToStorage(items: CartItem[]) {
  try {
    localStorage.setItem("cart:v1", JSON.stringify(items));
  } catch {}
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => loadFromStorage());

  useEffect(() => {
    saveToStorage(items);
  }, [items]);

  const total = useMemo(
    () => items.reduce((sum, i) => sum + i.price * i.qty, 0),
    [items],
  );

  const addItem: CartState["addItem"] = (item, qty = 1) => {
    setItems((prev) => {
      const found = prev.find((i) => i.slug === item.slug);
      if (found) {
        return prev.map((i) =>
          i.slug === item.slug ? { ...i, qty: i.qty + qty } : i,
        );
      }
      return [...prev, { ...item, qty }];
    });
  };

  const removeItem: CartState["removeItem"] = (slug) => {
    setItems((prev) => prev.filter((i) => i.slug !== slug));
  };

  const setQty: CartState["setQty"] = (slug, qty) => {
    setItems((prev) =>
      prev.map((i) => (i.slug === slug ? { ...i, qty: Math.max(1, qty) } : i)),
    );
  };

  const clear: CartState["clear"] = () => setItems([]);

  const value: CartState = { items, addItem, removeItem, setQty, clear, total };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

// Helper to map product from catalog to CartItem
export function productToItem(p: {
  slug: string;
  title: string;
  price: string;
  img?: string;
}): Omit<CartItem, "qty"> {
  return {
    slug: p.slug,
    title: p.title,
    price: parseBRLToNumber(p.price),
    img: p.img,
  };
}
