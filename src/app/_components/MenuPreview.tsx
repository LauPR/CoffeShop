import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MENU_CATEGORIES } from "@/lib/data/menu";
import { MENU_CATEGORY_ICONS } from "./menu/category-icons";

// Vista previa simple de categorías del menú.
// Usa los mismos datos centralizados que la página /menu para evitar duplicación.
export function MenuPreview() {
  return (
    <section
      id="menu"
      className="border-b border-cream-dark bg-gradient-to-b from-white to-cream/50"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <header className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brown-dark">
              Menú
            </p>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight text-brown-darker sm:text-3xl">
              Un vistazo rápido a lo que ofrecemos.
            </h2>
          </div>
          <p className="max-w-md text-sm text-gray-dark">
            Esta es solo una muestra. Más adelante podrás gestionar tu carta,
            precios y disponibilidad desde el panel de administración o tu
            backend.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {MENU_CATEGORIES.slice(0, 6).map((category) => {
            const Icon = MENU_CATEGORY_ICONS[category.id] ?? MENU_CATEGORY_ICONS.cafe;
            return (
              <Link
                key={category.id}
                href={`/menu#${category.id}`}
                className="group flex h-full flex-col gap-4 rounded-2xl border border-cream-dark bg-white/80 p-4 shadow-sm shadow-cream-dark/30 transition hover:-translate-y-0.5 hover:border-brown-light/50 hover:shadow-md"
              >
                <header className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brown-light/25 text-brown-dark">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-brown-darker">
                      {category.label}
                    </h3>
                    <p className="text-xs text-gray-dark">
                      {category.description}
                    </p>
                  </div>
                </header>

                <ul className="flex-1 space-y-1.5 text-sm text-gray-dark">
                  {category.items.slice(0, 3).map((item) => (
                    <li key={item.id} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-brown-light" />
                      <span>{item.name}</span>
                    </li>
                  ))}
                  {category.items.length > 3 && (
                    <li className="text-xs font-medium text-brown-dark">
                      +{category.items.length - 3} más…
                    </li>
                  )}
                </ul>

                <span className="mt-auto inline-flex items-center gap-1 text-xs font-medium text-brown-dark group-hover:text-brown-darker">
                  Ver categoría completa
                  <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            );
          })}
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 rounded-full border border-brown-light bg-white px-6 py-3 text-sm font-semibold text-brown-dark transition hover:bg-brown-light/15"
          >
            Ver menú completo
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

