import { BusinessHighlights } from "./_components/BusinessHighlights";
import { Hero } from "./_components/Hero";
import { InfoStrip } from "./_components/InfoStrip";
import { MenuPreview } from "./_components/MenuPreview";

// Página principal (home) de la cafetería.
// La responsabilidad de este componente es orquestar las secciones de la página,
// delegando el contenido y el diseño a componentes más pequeños.
export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans text-zinc-900">
      <Hero />

      <main className="flex-1">
        <BusinessHighlights />
        <MenuPreview />
        <InfoStrip />
      </main>

      <footer className="border-t border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-zinc-500 sm:flex-row sm:px-6 lg:px-8">
          <p>© {currentYear} Cafetería Aurora. Todos los derechos reservados.</p>
          <p className="text-[11px] text-zinc-400">
            Construido con Next.js y Tailwind CSS. Pensado para crecer hacia
            pedidos y reservas online.
          </p>
        </div>
      </footer>
    </div>
  );
}

