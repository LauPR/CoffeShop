import { Coffee, Cookie, Sparkles, Wifi } from "lucide-react";

// Sección de destacados del negocio.
// La responsabilidad de este componente es comunicar de forma rápida
// qué hace especial a la cafetería.
const items = [
  {
    title: "Café de especialidad",
    description:
      "Trabajamos con tostadores locales y seleccionamos granos de temporada para ofrecerte el mejor sabor en cada taza.",
    icon: Coffee,
  },
  {
    title: "Dulces y entrantes caseros",
    description:
      "Tartas, galletas y pequeños entrantes preparados en el día para acompañar tu café o tu bebida favorita.",
    icon: Cookie,
  },
  {
    title: "Espacio pensado para ti",
    description:
      "Zona tranquila para trabajar o estudiar, mesas para grupos y un ambiente acogedor para tus conversaciones.",
    icon: Sparkles,
  },
  {
    title: "Conectados al mundo digital",
    description:
      "Wi‑Fi estable, enchufes disponibles y preparación para integrar pedidos y reservas online.",
    icon: Wifi,
  },
];

export function BusinessHighlights() {
  return (
    <section className="border-b border-cream-dark bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <header className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brown-dark">
              Sobre la cafetería
            </p>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight text-brown-darker sm:text-3xl">
              Un lugar físico con visión digital.
            </h2>
          </div>
          <p className="max-w-md text-sm text-gray-dark">
            Esta página es solo el inicio. El objetivo es que poco a poco
            conviertas tu cafetería en una experiencia completa, tanto en el
            local como en internet.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="flex h-full flex-col gap-3 rounded-2xl border border-cream-dark bg-cream/60 p-4 shadow-sm shadow-cream-dark/40 transition hover:-translate-y-0.5 hover:border-brown-light/60 hover:shadow-md"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brown-light/25 text-brown-dark">
                  <Icon className="h-4 w-4" />
                </span>
                <h3 className="text-sm font-semibold text-brown-darker">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-dark">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

