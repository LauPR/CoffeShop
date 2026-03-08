import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { MENU_CATEGORIES } from "@/lib/data/menu";
import { MENU_CATEGORY_ICONS } from "../_components/menu/category-icons";
import { MenuCategorySection } from "../_components/menu/MenuCategorySection";

export const metadata: Metadata = {
  title: "Menú | Mi Latte",
  description:
    "Explora nuestro menú: café de especialidad, postres, entrantes, bebidas y comidas en Mi Latte.",
};

/**
 * Página de menú completo.
 * Orquesta las secciones de categorías usando datos centralizados
 * y el componente reutilizable MenuCategorySection.
 */
export default function MenuPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Cabecera */}
      <header className="border-b border-cream-dark bg-white">
        <div className="mx-auto flex max-w-4xl flex-col gap-4 px-4 py-6 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex w-fit items-center gap-2 text-sm font-medium text-brown-dark transition hover:text-brown-darker"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al inicio
          </Link>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-brown-darker sm:text-3xl">
              Menú
            </h1>
            <p className="mt-1 text-sm text-gray">
              Cafés, postres, entrantes, bebidas y comidas en Mi Latte.
            </p>
          </div>
        </div>
      </header>

      {/* Lista de categorías */}
      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <nav className="mb-8 flex flex-wrap gap-2" aria-label="Navegación por categorías">
          {MENU_CATEGORIES.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="rounded-full border border-brown-light/60 bg-white px-4 py-2 text-sm font-medium text-brown-dark transition hover:bg-brown-light/20"
            >
              {cat.label}
            </a>
          ))}
        </nav>

        <div className="space-y-2">
          {MENU_CATEGORIES.map((category) => {
            const Icon = MENU_CATEGORY_ICONS[category.id] ?? MENU_CATEGORY_ICONS.cafe;
            return (
              <MenuCategorySection key={category.id} category={category} icon={Icon} />
            );
          })}
        </div>
      </main>
    </div>
  );
}
