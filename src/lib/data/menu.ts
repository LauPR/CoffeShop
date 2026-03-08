/**
 * Datos estáticos del menú de Mi Latte.
 * Separados por responsabilidad: aquí solo definimos la estructura de datos.
 * Más adelante se puede conectar a una API o base de datos (ej. Supabase).
 */

export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: string;
}

export interface MenuCategory {
  id: string;
  label: string;
  description: string;
  items: MenuItem[];
}

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: "cafe",
    label: "Café",
    description: "Preparados con café de especialidad y leche fresca.",
    items: [
      {
        id: "espresso",
        name: "Espresso simple / doble",
        description: "Café espresso clásico.",
        price: "1,80 € / 2,20 €",
      },
      {
        id: "latte",
        name: "Latte clásico",
        description: "Espresso con leche cremosa.",
        price: "3,20 €",
      },
      {
        id: "capuccino",
        name: "Capuccino",
        description: "Espresso, leche y espuma de leche.",
        price: "3,00 €",
      },
      {
        id: "flat-white",
        name: "Flat White",
        description: "Espresso suave con leche microespumada.",
        price: "3,20 €",
      },
      {
        id: "americano",
        name: "Americano",
        description: "Espresso diluido con agua caliente.",
        price: "2,50 €",
      },
    ],
  },
  {
    id: "postres",
    label: "Postres",
    description: "Dulces caseros para acompañar tu bebida favorita.",
    items: [
      {
        id: "tarta-zanahoria",
        name: "Tarta de zanahoria",
        description: "Receta casera con frosting de queso crema.",
        price: "3,80 €",
      },
      {
        id: "brownie",
        name: "Brownie de chocolate",
        description: "Brownie denso con nueces.",
        price: "3,20 €",
      },
      {
        id: "galletas",
        name: "Galletas artesanales",
        description: "A elegir: chips de chocolate, avena o mantequilla.",
        price: "2,50 €",
      },
      {
        id: "cheesecake",
        name: "Cheesecake de frutos rojos",
        description: "Base de galleta con mermelada casera.",
        price: "4,00 €",
      },
    ],
  },
  {
    id: "entrantes",
    label: "Entrantes",
    description: "Opciones saladas ligeras para compartir o picar.",
    items: [
      {
        id: "tostada-aguacate",
        name: "Tostada de aguacate",
        description: "Pan artesanal, aguacate, tomate y aceite.",
        price: "5,50 €",
      },
      {
        id: "sandwich-mixto",
        name: "Sandwich mixto",
        description: "Jamón serrano, queso y tomate.",
        price: "4,50 €",
      },
      {
        id: "focaccia",
        name: "Focaccia de la casa",
        description: "Focaccia casera con aceitunas y tomillo.",
        price: "5,00 €",
      },
      {
        id: "humus",
        name: "Humus con pan de pita",
        description: "Humus casero y pan de pita tostado.",
        price: "4,20 €",
      },
    ],
  },
  {
    id: "bebidas",
    label: "Bebidas",
    description: "Cafés fríos, infusiones y refrescos naturales.",
    items: [
      {
        id: "cold-brew",
        name: "Cold Brew",
        description: "Café infusionado en frío 24h.",
        price: "3,80 €",
      },
      {
        id: "iced-latte",
        name: "Iced Latte",
        description: "Latte helado con hielo.",
        price: "3,80 €",
      },
      {
        id: "limonada",
        name: "Limonada casera",
        description: "Limonada natural con menta.",
        price: "3,00 €",
      },
      {
        id: "infusion",
        name: "Infusiones",
        description: "Manzanilla, té verde, menta, jengibre.",
        price: "2,20 €",
      },
    ],
  },
  {
    id: "comidas",
    label: "Comidas",
    description: "Platos para comer en el local o llevar.",
    items: [
      {
        id: "ensalada",
        name: "Ensalada Mi Latte",
        description: "Mix de hojas, pollo, aguacate y aderezo de la casa.",
        price: "9,50 €",
      },
      {
        id: "wrap",
        name: "Wrap vegetal",
        description: "Tortilla rellena de verduras asadas y humus.",
        price: "7,50 €",
      },
      {
        id: "bowl",
        name: "Bowl de quinoa",
        description: "Quinoa, verduras, huevo poché y tahini.",
        price: "10,00 €",
      },
      {
        id: "sopa",
        name: "Sopa del día",
        description: "Sopa casera según temporada.",
        price: "6,00 €",
      },
    ],
  },
];
