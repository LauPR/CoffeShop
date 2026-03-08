import { ArrowRight, Coffee, Smartphone, Sparkles } from "lucide-react";

// Componente de hero principal de la página de la cafetería.
// Su responsabilidad es presentar el mensaje central del negocio y las llamadas a la acción.
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-zinc-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:flex-row lg:items-center lg:py-24 lg:px-8">
        {/* Columna de texto principal */}
        <div className="flex-1 space-y-6">
          <p className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-xs font-medium text-zinc-300">
            <Sparkles className="h-3 w-3 text-amber-300" />
            <span>Tu nueva experiencia de café, también online</span>
          </p>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Cafetería Aurora:
            <span className="block text-amber-300">
              el sabor de siempre, ahora digital.
            </span>
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg">
            Café de especialidad, dulces caseros y entrantes para compartir. Un
            lugar pensado para desconectar, trabajar o reunirte, que pronto
            también podrás disfrutar desde tu móvil.
          </p>

          {/* Botones de llamada a la acción */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#menu"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-zinc-950 shadow-lg shadow-amber-300/40 transition hover:bg-amber-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
            >
              <Coffee className="h-4 w-4" />
              <span>Ver menú destacado</span>
              <ArrowRight className="h-4 w-4" />
            </a>

            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/60 px-6 py-3 text-sm font-medium text-zinc-200 transition hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
            >
              <Smartphone className="h-4 w-4" />
              <span>Pedidos online (próximamente)</span>
            </button>
          </div>

          {/* Pequeña sección de confianza / propuesta de valor */}
          <dl className="mt-4 grid grid-cols-1 gap-4 text-xs text-zinc-400 sm:grid-cols-3">
            <div className="flex flex-col gap-1">
              <dt className="font-medium text-zinc-200">Café de especialidad</dt>
              <dd>Granos seleccionados y tueste local.</dd>
            </div>
            <div className="flex flex-col gap-1">
              <dt className="font-medium text-zinc-200">Espacio acogedor</dt>
              <dd>Ideal para estudiar, trabajar o quedar.</dd>
            </div>
            <div className="flex flex-col gap-1">
              <dt className="font-medium text-zinc-200">Listos para crecer</dt>
              <dd>Preparados para pedidos y reservas online.</dd>
            </div>
          </dl>
        </div>

        {/* Columna visual / tarjeta destacada del local */}
        <div className="flex-1">
          <div className="relative mx-auto max-w-md rounded-3xl border border-zinc-800 bg-zinc-900/60 p-5 shadow-[0_18px_45px_rgba(0,0,0,0.65)] backdrop-blur">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div className="space-y-1">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-amber-300">
                  Cafetería Aurora
                </p>
                <p className="text-sm text-zinc-300">
                  Tu rincón de café en el barrio
                </p>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-3 py-1 text-[10px] font-semibold text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Abierto hoy
              </span>
            </div>

            <div className="space-y-3 rounded-2xl bg-zinc-900/80 p-4">
              <p className="text-xs font-medium text-zinc-400">
                Hoy te recomendamos
              </p>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="space-y-1 rounded-xl border border-zinc-800 bg-zinc-950/40 p-3">
                  <p className="flex items-center justify-between text-[11px] font-medium text-zinc-100">
                    Flat White
                    <span className="text-amber-300">3,20 €</span>
                  </p>
                  <p className="text-[11px] text-zinc-400">
                    Espresso suave con leche microespumada.
                  </p>
                </div>
                <div className="space-y-1 rounded-xl border border-zinc-800 bg-zinc-950/40 p-3">
                  <p className="flex items-center justify-between text-[11px] font-medium text-zinc-100">
                    Tarta de zanahoria
                    <span className="text-amber-300">3,80 €</span>
                  </p>
                  <p className="text-[11px] text-zinc-400">
                    Receta casera con frosting de queso crema.
                  </p>
                </div>
              </div>

              <div className="mt-2 flex items-center justify-between text-[11px] text-zinc-400">
                <p>Pedidos en mostrador o para llevar.</p>
                <p className="font-medium text-zinc-200">
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

