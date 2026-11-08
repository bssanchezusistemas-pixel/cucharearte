export interface MenuItem {
  id: string;
  name: string;
  category: 'waffles' | 'cuchareables' | 'bowls' | 'malteadas';
  price: number;
  description: string;
  badge?: string;
  isPopular?: boolean;
  image: string;
  ingredients: string[];
  customizable?: boolean;
}

export interface StoreInfo {
  name: string;
  tagline: string;
  address: string;
  neighborhood: string;
  city: string;
  coords: {
    lat: number;
    lng: number;
  };
  phone: string;
  phoneRaw: string;
  instagram: string;
  instagramUrl: string;
  schedule: string;
  openHour: number;
  closeHour: number;
  geofenceRadiusMeters: number;
}

export const STORE_INFO: StoreInfo = {
  name: 'CuchareArte',
  tagline: 'El Arte de Cucharear 🥄✨',
  address: 'CRA 11 # 8-59',
  neighborhood: 'Centro Comercial / Zona Rosa',
  city: 'Zarzal, Valle del Cauca',
  coords: {
    lat: 4.3941,
    lng: -76.0768
  },
  phone: '+57 310 6450714',
  phoneRaw: '573106450714',
  instagram: '@_cucharearte',
  instagramUrl: 'https://www.instagram.com/_cucharearte',
  schedule: 'Lunes a Domingo • 2:00 PM a 11:00 PM',
  openHour: 14,
  closeHour: 23,
  geofenceRadiusMeters: 250
};

export const MENU_CATEGORIES = [
  { id: 'all', label: 'Todo el Menú', icon: '✨' },
  { id: 'waffles', label: 'Waffles en Cono', icon: '🧇' },
  { id: 'cuchareables', label: 'Potes Cuchareables', icon: '🍨' },
  { id: 'bowls', label: 'Bowls & Frutas', icon: '🍓' },
  { id: 'malteadas', label: 'Malteadas', icon: '🥤' },
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'waffle-fresas-pearls',
    name: 'Waffle en Cono Fresas & Pearls',
    category: 'waffles',
    price: 15000,
    description: 'Nuestra estrella: Cono de waffle artesanal recién horneado, helado suave cremoso, fresas frescas en láminas, perlas crocantes de chocolate blanco y salsa de Nutella.',
    badge: 'Favorito del Local ⭐',
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1559620192-032c4bc4674e?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Waffle crocante recién hecho', 'Helado de Vainilla', 'Fresas naturales', 'Perlas de chocolate blanco', 'Nutella tibia'],
    customizable: true
  },
  {
    id: 'waffle-brownie-fudge',
    name: 'Waffle en Cono Brownie Fudge',
    category: 'waffles',
    price: 16500,
    description: 'Cono de waffle dorado relleno de helado de chocolate y vainilla, cubos de brownie melcochudo, fudge artesanal y barquillo de chocolate.',
    badge: 'Ultra Chocolate 🍫',
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Cono de waffle', 'Helado artesanal doble', 'Chunks de brownie', 'Fudge de chocolate', 'Barquillo crujiente'],
    customizable: true
  },
  {
    id: 'waffle-lotus-crunch',
    name: 'Waffle en Cono Lotus Caramel',
    category: 'waffles',
    price: 17500,
    description: 'Cono crujiente con crema de galleta Lotus Biscoff derretida, helado de nata, crumble de galleta especiada y caramelo salado.',
    badge: 'Edición Especial ✨',
    isPopular: false,
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Cono waffle', 'Crema Lotus Biscoff', 'Helado Fior di Latte', 'Galleta Lotus', 'Caramelo salado'],
    customizable: true
  },
  {
    id: 'cuchareable-choco-tentacion',
    name: 'Pote Cuchareable Choco-Tentación',
    category: 'cuchareables',
    price: 14500,
    description: 'Pote transparente para cucharear capa por capa: base de galleta triturada, helado de chocolate intenso, arequipe tibio, brownie bites y chispas de chocolate.',
    badge: '100% Cuchareable 🥄',
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Helado de Chocolate Belga', 'Crumble de galleta', 'Arequipe suave', 'Brownie casero', 'Sirope de chocolate'],
    customizable: true
  },
  {
    id: 'cuchareable-maracuya-frescura',
    name: 'Pote Cuchareable Maracuyá & Leche Condensada',
    category: 'cuchareables',
    price: 14000,
    description: 'El balance perfecto entre dulce y cítrico. Helado de maracuyá 100% pulpa natural, lluvia de leche condensada, galleta crocante y perlas crujientes.',
    badge: 'Sabor Vallecaucano 🌴',
    isPopular: false,
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Helado de Maracuyá artesanal', 'Coulis de maracuyá con semillas', 'Leche condensada', 'Base de galleta'],
    customizable: true
  },
  {
    id: 'cuchareable-oreo-overload',
    name: 'Pote Cuchareable Oreo Overload',
    category: 'cuchareables',
    price: 15500,
    description: 'Pote de 16oz con helado Cookies & Cream, crema batida, baño generoso de Nutella, galletas Oreo trituradas y mini Oreos enteras en la cima.',
    badge: 'Más Vendido 🔥',
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Helado Cookies & Cream', 'Nutella original', 'Galleta Oreo triturada', 'Mini Oreo', 'Crema Chantilly'],
    customizable: true
  },
  {
    id: 'bowl-lucky-charms',
    name: 'Super Bowl Lucky Charms & Frutas',
    category: 'bowls',
    price: 18000,
    description: 'Inspirado en nuestro post viral: Bowl con helado artesanal a elección, fresas frescas, kiwi en rodajas, banano, melón dulce y cereal Lucky Charms de chocolate con malvaviscos.',
    badge: 'Viral en Redes 🌈',
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Helado a elección', 'Fresas frescas de cultivo', 'Kiwi', 'Banano', 'Melón', 'Lucky Charms Chocolate'],
    customizable: true
  },
  {
    id: 'bowl-pitaya-tropical',
    name: 'Bowl Tropical Pitaya & Nieve',
    category: 'bowls',
    price: 16500,
    description: 'Bowl refrescante y colorido con cubos de pitaya roja (fruta del dragón), fresas, kiwi, helado de yogur artesanal, granola crocante de miel y coco rallado.',
    badge: 'Super Refrescante 🌺',
    isPopular: false,
    image: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Pitaya roja natural', 'Kiwi y Fresas', 'Helado de yogur griego', 'Granola de avena con miel', 'Coco tostado'],
    customizable: true
  },
  {
    id: 'malteada-cucharearte-pink',
    name: 'Malteada Signature Cucharearte Pink',
    category: 'malteadas',
    price: 15500,
    description: 'Nuestra malteada rosa icónica: helado de fresa y vainilla artesanal, borde escarchado en chocolate blanco y chispitas rosas, copete de chantilly y fresa fresca.',
    badge: 'La Reina de la Casa 👑',
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Helado de Fresa natural', 'Leche entera cremosa', 'Escarchado rosa', 'Crema Chantilly', 'Fresa entera', 'Barquillo'],
    customizable: false
  },
  {
    id: 'malteada-arequipe-crunch',
    name: 'Malteada Arequipe & Brownie Shake',
    category: 'malteadas',
    price: 16000,
    description: 'Batido espeso de helado de arequipe con veteado de caramelo, trozos de brownie sumergidos, crema batida y toque de sal marina.',
    badge: 'Cremosa & Intensa 🍯',
    isPopular: false,
    image: 'https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Helado de Arequipe', 'Salsa de caramelo', 'Chunks de brownie', 'Crema Chantilly', 'Topping crujiente'],
    customizable: false
  }
];

export const CUSTOMIZER_OPTIONS = {
  sizes: [
    { id: 'personal', name: 'Personal (12 oz)', extra: 0, desc: 'Ideal para 1 persona golosa' },
    { id: 'duo', name: 'Dúo Cuchareable (16 oz)', extra: 4000, desc: 'Para compartir en pareja' },
    { id: 'mega', name: 'Mega Bowl (24 oz)', extra: 8000, desc: 'El rey del local, para toda la mesa' }
  ],
  iceCreamFlavors: [
    'Vainilla Francesa Suave',
    'Chocolate Belga Intenso',
    'Fresa Silvestre Natural',
    'Maracuyá Cremoso',
    'Arequipe de Paila',
    'Cookies & Cream (Oreo)',
    'Yogur Griego con Moras'
  ],
  sauces: [
    'Nutella tibia original',
    'Arequipe casero',
    'Leche Condensada',
    'Coulis de Frutos Rojos',
    'Caramelo Salado',
    'Fudge de Chocolate Amargo'
  ],
  toppings: [
    'Fresas frescas laminadas',
    'Cereal Lucky Charms Chocolate',
    'Crumble de Galleta Oreo',
    'Chunks de Brownie melcochudo',
    'Perlas de Chocolate Blanco',
    'Galleta Lotus triturada',
    'Kiwi en cubitos',
    'Barquillo crocante',
    'Chispas de colores',
    'Granola crocante de miel'
  ]
};

export const REVIEWS = [
  {
    id: 1,
    name: 'Valentina Restrepo',
    date: 'Hace 3 días',
    rating: 5,
    comment: '¡El mejor lugar de Zarzal para una tarde dulce! El Waffle en cono con fresas es otro nivel y el local es súper aesthetic para fotos rosas.',
    favorite: 'Waffle en Cono Fresas & Pearls'
  },
  {
    id: 2,
    name: 'Camilo Andrés Giraldo',
    date: 'La semana pasada',
    rating: 5,
    comment: 'Los potes cuchareables tienen una cantidad de Nutella y brownie increíble. Me llegó la notificación al pasar por la Cra 11 y aproveché el descuento del día.',
    favorite: 'Pote Cuchareable Choco-Tentación'
  },
  {
    id: 3,
    name: 'Mariana Salazar',
    date: 'Hace 2 semanas',
    rating: 5,
    comment: 'El bowl de frutas con Lucky Charms y helado de yogur es adictivo. Todo súper fresco y la atención de las chicas es un 10/10.',
    favorite: 'Super Bowl Lucky Charms'
  }
];
