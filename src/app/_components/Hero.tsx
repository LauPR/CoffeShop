import Link from "next/link";
import { ArrowRight, Coffee, Smartphone, Sparkles } from "lucide-react";

// Componente de hero principal de la página de la cafetería.
// Su responsabilidad es presentar el mensaje central del negocio y las llamadas a la acción.
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brown-darker via-brown-dark to-brown-darker text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:flex-row lg:items-center lg:py-24 lg:px-8">
        {/* Columna de texto principal */}
        <div className="flex-1 space-y-6">
          <p className="inline-flex items-center gap-2 rounded-full border border-brown/40 bg-brown-dark/60 px-3 py-1 text-xs font-medium text-cream-dark">
            <Sparkles className="h-3 w-3 text-brown-light" />
            <span>Tu nueva experiencia de café, también online</span>
          </p>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Mi Latte:
            <span className="block text-brown-light">
              el sabor de siempre, ahora digital.
            </span>
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-cream-dark sm:text-lg">
            Café de especialidad, dulces caseros y entrantes para compartir. Un
            lugar pensado para desconectar, trabajar o reunirte, que pronto
            también podrás disfrutar desde tu móvil.
          </p>

          {/* Botones de llamada a la acción */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/menu"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brown-light px-6 py-3 text-sm font-semibold text-brown-darker shadow-lg shadow-brown-light/30 transition hover:bg-brown-light/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brown-light focus-visible:ring-offset-2 focus-visible:ring-offset-brown-darker"
            >
              <Coffee className="h-4 w-4" />
              <span>Ver menú completo</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-brown/50 bg-brown-dark/60 px-6 py-3 text-sm font-medium text-cream transition hover:bg-brown-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brown focus-visible:ring-offset-2 focus-visible:ring-offset-brown-darker"
            >
              <Smartphone className="h-4 w-4" />
              <span>Pedidos online (próximamente)</span>
            </button>
          </div>

          {/* Pequeña sección de confianza / propuesta de valor */}
          <dl className="mt-4 grid grid-cols-1 gap-4 text-xs text-gray-light sm:grid-cols-3">
            <div className="flex flex-col gap-1">
              <dt className="font-medium text-cream">Café de especialidad</dt>
              <dd>Granos seleccionados y tueste local.</dd>
            </div>
            <div className="flex flex-col gap-1">
              <dt className="font-medium text-cream">Espacio acogedor</dt>
              <dd>Ideal para estudiar, trabajar o quedar.</dd>
            </div>
            <div className="flex flex-col gap-1">
              <dt className="font-medium text-cream">Listos para crecer</dt>
              <dd>Preparados para pedidos y reservas online.</dd>
            </div>
          </dl>
        </div>

        {/* Columna visual / tarjeta destacada del local */}
        <div className="flex-1">
          <div className="relative mx-auto max-w-md rounded-3xl border border-brown/40 bg-brown-dark/60 p-5 shadow-[0_18px_45px_rgba(0,0,0,0.65)] backdrop-blur">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div className="space-y-1">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-brown-light">
                  Mi Latte
                </p>
                <p className="text-sm text-cream-dark">
                  Tu rincón de café en el barrio
                </p>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-brown-light/20 px-3 py-1 text-[10px] font-semibold text-brown-light">
                <span className="h-1.5 w-1.5 rounded-full bg-brown-light" />
                Abierto hoy
              </span>
            </div>

            <div className="space-y-3 rounded-2xl bg-brown-darker/60 p-4">
              <p className="text-xs font-medium text-gray-light">
                Hoy te recomendamos
              </p>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="space-y-1 rounded-xl border border-brown/30 bg-brown-dark/40 p-3">
                  <p className="flex items-center justify-between text-[11px] font-medium text-cream">
                    Flat White
                    <span className="text-brown-light">3,20 €</span>
                  </p>
                  <p className="text-[11px] text-gray-light">
                    Espresso suave con leche microespumada.
                  </p>
                </div>
                <div className="space-y-1 rounded-xl border border-brown/30 bg-brown-dark/40 p-3">
                  <p className="flex items-center justify-between text-[11px] font-medium text-cream">
                    Tarta de zanahoria
                    <span className="text-brown-light">3,80 €</span>
                  </p>
                  <p className="text-[11px] text-gray-light">
                    Receta casera con frosting de queso crema.
                  </p>
                </div>
              </div>

              <div className="mt-2 flex items-center justify-between text-[11px] text-gray-light">
                <p>Pedidos en mostrador o para llevar.</p>
                <p className="font-medium text-cream">
                  Próximamente: pedidos online
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

