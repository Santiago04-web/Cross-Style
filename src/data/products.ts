export interface Product {
  id: string;
  name: string;
  category: 'CAMISETAS' | 'BUZOS' | 'PANTALONES' | 'ACCESORIOS' | 'TODOS';
  subCategory: string;
  price: number; // En pesos colombianos (COP), fácilmente editable
  displayPrice: string;
  tag: string;
  description: string;
  fit: string;
  composition: string;
  image: string;
  gallery: string[];
  sizes: string[];
  isNewDrop?: boolean;
}

/**
 * CATÁLOGO DE PRODUCTOS - CROSS STYLE
 * 
 * NOTA PARA EDICIÓN:
 * Para cambiar un producto por uno real, solo edita el nombre, precio,
 * descripción e imagen en este archivo. Todos los componentes se actualizarán automáticamente.
 */
export const PRODUCTS_DATA: Product[] = [
  {
    id: 'cs-prod-01',
    name: 'PRODUCTO 01',
    category: 'CAMISETAS',
    subCategory: 'Camiseta Oversized Streetwear',
    price: 115000,
    displayPrice: '$115.000 COP',
    tag: 'DROP 01 // ESENCIAL',
    description: 'Silueta oversized pesada con caída estructurada y hombros caídos. Gráfica tipográfica urbana de alto impacto y acabado vintage lavado.',
    fit: 'Boxy Heavyweight Fit',
    composition: '100% Algodón Peinado 260 GSM',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    isNewDrop: true,
  },
  {
    id: 'cs-prod-02',
    name: 'PRODUCTO 02',
    category: 'BUZOS',
    subCategory: 'Hoodie Pesado Acid Wash',
    price: 185000,
    displayPrice: '$185.000 COP',
    tag: 'DROP EXCLUSIVO',
    description: 'Buzo con capota doble capa confeccionado en felpa pesada de tacto suave. Detalle metálico en ojales y cordón grueso tubular.',
    fit: 'Relaxed Street Fit',
    composition: '80% Algodón / 20% Poliéster Francés 420 GSM',
    image: 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1000&q=85'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    isNewDrop: true,
  },
  {
    id: 'cs-prod-03',
    name: 'PRODUCTO 03',
    category: 'PANTALONES',
    subCategory: 'Pantalón Cargo Utility Street',
    price: 175000,
    displayPrice: '$175.000 COP',
    tag: 'PIEZA CLAVE',
    description: 'Pantalón utility con bolsillos cargo 3D ergonómicos, cinturón regulable táctico y tanca en los tobillos para ajuste customizado.',
    fit: 'Relaxed Tapered Fit',
    composition: 'Dril Rígido Premium 100% Algodón',
    image: 'https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=1000&q=85'
    ],
    sizes: ['30', '32', '34', '36'],
    isNewDrop: false,
  },
  {
    id: 'cs-prod-04',
    name: 'PRODUCTO 04',
    category: 'ACCESORIOS',
    subCategory: 'Gorra Dad Cap Chrome Star',
    price: 85000,
    displayPrice: '$85.000 COP',
    tag: 'EDICIÓN LIMITADA',
    description: 'Gorra desestructurada de 6 paneles en sarga negra desgastada. Bordado frontal 3D de alta densidad con destello metálico plata.',
    fit: 'Ajustable Uniselect',
    composition: '100% Algodón Sarga Lavada',
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=1000&q=85'
    ],
    sizes: ['ÚNICA (AJUSTABLE)'],
    isNewDrop: true,
  },
  {
    id: 'cs-prod-05',
    name: 'PRODUCTO 05',
    category: 'CAMISETAS',
    subCategory: 'Camiseta Raw Edge Vintage',
    price: 120000,
    displayPrice: '$120.000 COP',
    tag: 'URBAN VIBE',
    description: 'Corte amplio con costuras reforzadas a la vista y cuello cerrado grueso en rib 1x1. Diseñada para un look minimalista y contundente.',
    fit: 'Drop Shoulder Oversize',
    composition: '100% Algodón Orgánico 280 GSM',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    isNewDrop: false,
  },
  {
    id: 'cs-prod-06',
    name: 'PRODUCTO 06',
    category: 'BUZOS',
    subCategory: 'Zip-Up Heavy Hoodie Chrome',
    price: 198000,
    displayPrice: '$198.000 COP',
    tag: 'PREMIUM PIECE',
    description: 'Chaqueta hoodie con cremallera bidireccional metálica en tono níquel oscuro. Puños y pretina anchos con retención de forma permanente.',
    fit: 'Oversized Boxy Silhouette',
    composition: 'Algodón Pesado 450 GSM Heavy Fleece',
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1000&q=85'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    isNewDrop: true,
  }
];

export const BUSINESS_INFO = {
  name: 'Cross Style',
  tagline: 'MÁS QUE ROPA',
  nit: '900238405-7',
  registrationNumber: '901513-60',
  city: 'Cali, Valle del Cauca, Colombia',
  address: 'CL 54 NORTE # 26 - 117 CS 7',
  phone: '3042325488',
  phoneDisplay: '+57 304 232 5488',
  whatsappUrl: 'https://wa.me/573042325488',
  whatsappCatalogUrl: 'https://wa.me/573042325488?text=Hola%20Cross%20Style%2C%20quiero%20conocer%20el%20cat%C3%A1logo.',
  email: 'soporte@crossstyle.online',
  domain: 'https://crossstyle.online/',
  year: 2026,
};
