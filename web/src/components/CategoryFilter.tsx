import { ProductCategory } from "../data/products";

type Props = {
  categories: ProductCategory[];
  current?: ProductCategory | "Todos";
  onChange: (cat: ProductCategory | "Todos") => void;
  onSearchChange?: (term: string) => void;
};

export function CategoryFilter({
  categories,
  current = "Todos",
  onChange,
  onSearchChange,
}: Props) {
  const all = ["Todos", ...categories];
  return (
    <div className="flex flex-wrap items-center gap-3 mb-6">
      {all.map((c) => (
        <button
          key={c}
          type="button"
          onClick={() => onChange(c as ProductCategory | "Todos")}
          className={`h-9 rounded-md border px-3 text-sm ${current === c ? "bg-brand border-brand-border text-black" : "bg-white/80 border-brand-border hover:bg-brand-hover"}`}
          aria-pressed={current === c}
        >
          {c}
        </button>
      ))}
      {onSearchChange && (
        <input
          type="search"
          placeholder="Buscar..."
          className="h-9 rounded-md border border-brand-border bg-white/80 px-3 text-sm flex-1 min-w-[200px]"
          onChange={(e) => onSearchChange(e.target.value)}
          aria-label="Buscar produtos"
        />
      )}
    </div>
  );
}
