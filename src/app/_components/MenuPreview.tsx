import { Coffee, IceCream2, Sandwich } from "lucide-react";

// Vista previa simple de categorías del menú.
// De momento los datos son estáticos, pero la estructura del componente
// está pensada para que más adelante puedas conectarla a un backend o API.
const categories = [
  {
    id: "cafes",
    label: "Cafés calientes",
    icon: Coffee,
    description: "Preparados con café de especialidad y leche fresca.",
    items: ["Espresso simple / doble", "Latte clásico", "Capuccino", "Flat White"],
  },
  {
    id: "dulces",
    label: "Dulces",
    icon: IceCream2,
    description: "Perfectos para acompañar tu bebida favorita.",
    items: ["Tarta de zanahoria", "Brownie de chocolate", "Galletas artesanales"],
  },
  {
    id: "entrantes",
    label: "Entrantes",
    icon: Sandwich,
    description: "Opciones saladas ligeras para compartir o picar.",
    items: ["Tostada de aguacate", "Sandwich mixto", "Focaccia de la casa"],
  },
  {
    id: "bebidas",
    label: "Bebidas frías",
    icon: IceCream2,
    description: "Ideales para los días calurosos o después del trabajo.",
    items: ["Cold Brew", "Iced Latte", "Limonada casera"],
  },
];

export function MenuPreview() {
  return (
    <section
      id="menu"
      className="border-b border-zinc-100 bg-gradient-to-b from-white to-amber-50/60"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <header className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-600">
              Menú
            </p>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
              Un vistazo rápido a lo que ofrecemos.
            </h2>
          </div>
          <p className="max-w-md text-sm text-zinc-700">
            Esta es solo una muestra. Más adelante podrás gestionar tu carta,
            precios y disponibilidad desde el panel de administración o tu
            backend.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <article
                key={category.id}
                className="flex h-full flex-col gap-4 rounded-2xl border border-amber-100 bg-white/80 p-4 shadow-sm shadow-amber-100"
              >
                <header className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-900">
                      {category.label}
                    </h3>
                    <p className="text-xs text-zinc-600">
                      {category.description}
                    </p>
                  </div>
                </header>

                <ul className="space-y-1.5 text-sm text-zinc-700">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-amber-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

