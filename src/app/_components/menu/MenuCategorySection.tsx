import type { LucideIcon } from "lucide-react";
import type { MenuCategory } from "@/lib/data/menu";

interface MenuCategorySectionProps {
  category: MenuCategory;
  icon: LucideIcon;
}

/**
 * Sección reutilizable para cada categoría del menú.
 * Muestra el título, descripción y lista de ítems con precio.
 */
export function MenuCategorySection({ category, icon: Icon }: MenuCategorySectionProps) {
  return (
    <section
      id={category.id}
      className="scroll-mt-20 border-b border-cream-dark py-10 last:border-b-0"
      aria-labelledby={`category-${category.id}`}
    >
      <header className="mb-6 flex items-start gap-3">
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brown-light/20 text-brown-dark">
          <Icon className="h-5 w-5" />
        </span>
        <div>
          <h2
            id={`category-${category.id}`}
            className="text-xl font-semibold tracking-tight text-brown-darker sm:text-2xl"
          >
            {category.label}
          </h2>
          <p className="mt-1 text-sm text-gray-dark">{category.description}</p>
        </div>
      </header>

      <ul className="space-y-4" role="list">
        {category.items.map((item) => (
          <li
            key={item.id}
            className="flex flex-col gap-1 border-l-2 border-brown-light/40 pl-4 sm:flex-row sm:items-baseline sm:justify-between"
          >
            <div>
              <p className="font-medium text-black">{item.name}</p>
              {item.description && (
                <p className="text-sm text-gray">{item.description}</p>
              )}
            </div>
            <span className="shrink-0 text-sm font-semibold text-brown-dark">
              {item.price}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
