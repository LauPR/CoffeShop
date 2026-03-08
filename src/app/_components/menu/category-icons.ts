import type { LucideIcon } from "lucide-react";
import { Coffee, IceCream2, Sandwich, Wine, UtensilsCrossed } from "lucide-react";

/**
 * Mapa de categorías del menú a sus iconos.
 * Centralizado para reutilizar en la página del menú y en vistas previas.
 */
export const MENU_CATEGORY_ICONS: Record<string, LucideIcon> = {
  cafe: Coffee,
  postres: IceCream2,
  entrantes: Sandwich,
  bebidas: Wine,
  comidas: UtensilsCrossed,
};
