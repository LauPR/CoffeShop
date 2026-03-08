import { Clock, MapPin, Phone } from "lucide-react";

// Franja inferior con información básica del negocio.
// Reúne datos clave como horarios, dirección y contacto rápido.
export function InfoStrip() {
  return (
    <section className="bg-zinc-950 text-zinc-50">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 text-sm sm:grid-cols-3">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 text-amber-300">
              <Clock className="h-4 w-4" />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-400">
                Horario
              </p>
              <p className="mt-1 text-sm text-zinc-50">
                Lunes a viernes · 8:00 – 20:00
              </p>
              <p className="text-sm text-zinc-300">
                Sábados · 9:00 – 14:00 · Domingos cerrado
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 text-amber-300">
              <MapPin className="h-4 w-4" />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-400">
                Dónde estamos
              </p>
              <p className="mt-1 text-sm text-zinc-50">
                Calle Ejemplo 123, Barrio Centro
              </p>
              <p className="text-sm text-zinc-300">
                Ciudad · País · Próximamente podrás vernos en el mapa.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 text-amber-300">
              <Phone className="h-4 w-4" />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-400">
                Contacto
              </p>
              <p className="mt-1 text-sm text-zinc-50">+34 600 000 000</p>
              <p className="text-sm text-zinc-300">
                Escríbenos para reservas o eventos. Más adelante podrás hacerlo
                directamente desde la web.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

