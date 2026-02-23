export function parseBRLToNumber(price: string): number {
  // Converts strings like 'R$ 3,50' to 3.5
  const digits = price.replace(/[^\d,\.]/g, "");
  const normalized = digits.replace(".", "").replace(",", ".");
  const n = Number(normalized);
  return isNaN(n) ? 0 : n;
}

export function formatBRL(n: number): string {
  return n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
