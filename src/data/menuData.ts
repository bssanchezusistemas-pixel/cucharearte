export interface MenuItem {
  id: string;
  name: string;
  category: 'tradicionales' | 'premium' | 'combinados' | 'waffles' | 'malteadas';
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
  { id: 'tradicionales', label: 'Tradicionales $14K', icon: '🍨' },
  { id: 'premium', label: 'Premium $16K', icon: '👑' },
  { id: 'combinados', label: 'Combinados de Autor', icon: '✨' },
  { id: 'waffles', label: 'Waffle en Cono $30K', icon: '🧇' },
  { id: 'malteadas', label: 'Malteadas $16K', icon: '🥤' },
];

export const MENU_ITEMS: MenuItem[] = [
  // WAFFLE EN CONO
  {
    id: 'waffle-en-cono-completo',
    name: 'Waffle en Cono Cucharearte',
    category: 'waffles',
    price: 30000,
    description: 'La estrella del local: Cono de waffle artesanal crujiente, helado suave cremoso, fresas frescas en láminas, banano, copete de crema chantilly, 1 topping a elección y 1 salsa tibia.',
    badge: 'La Estrella del Local ⭐',
    isPopular: true,
    image: '/menu/menu_waffles_malteadas.jpg',
    ingredients: ['Waffle artesanal caliente', 'Helado cremoso', 'Fresas naturales', 'Banano dulce', 'Crema Chantilly', '1 Topping a elección', '1 Salsa a elección'],
    customizable: true
  },

  // CUCHAREABLES TRADICIONALES ($14.000)
  {
    id: 'cuchareable-chocorramo',
    name: 'Cuchareable Chocorramo',
    category: 'tradicionales',
    price: 14000,
    description: 'Pote cuchareable con helado artesanal, trozos generosos del clásico Chocorramo colombiano y cobertura de chocolate.',
    badge: '100% Colombiano 🇨🇴',
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Helado artesanal', 'Chunks de Chocorramo', 'Fudge de chocolate', 'Crumble crocante'],
    customizable: true
  },
  {
    id: 'cuchareable-leche-klim',
    name: 'Cuchareable Leche Klim',
    category: 'tradicionales',
    price: 14000,
    description: 'Helado cremoso coronado con una capa generosa de Leche Klim en polvo y sirope dulce. Un sabor nostálgico inolvidable.',
    badge: 'Favorito Tradicional ✨',
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Helado de vainilla suave', 'Lluvia de Leche Klim', 'Leche condensada', 'Toque crujiente'],
    customizable: true
  },
  {
    id: 'cuchareable-milo',
    name: 'Cuchareable Milo',
    category: 'tradicionales',
    price: 14000,
    description: 'El auténtico sabor a malta y chocolate: helado de chocolate cubierto con una montaña de Milo en polvo y chispitas.',
    badge: 'Pura Energía 🍫',
    isPopular: false,
    image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Helado de chocolate', 'Milo en polvo generoso', 'Salsa de chocolate', 'Base crocante'],
    customizable: true
  },
  {
    id: 'cuchareable-oreo',
    name: 'Cuchareable Oreo',
    category: 'tradicionales',
    price: 14000,
    description: 'Capas de helado Cookies & Cream con abundante galleta Oreo triturada y salsa especial de chocolate.',
    badge: 'Más Vendido 🔥',
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Helado Cookies & Cream', 'Galleta Oreo triturada', 'Mini Oreo', 'Sirope de chocolate'],
    customizable: true
  },
  {
    id: 'cuchareable-brownie',
    name: 'Cuchareable Brownie',
    category: 'tradicionales',
    price: 14000,
    description: 'Cubitos de brownie melcochudo recién horneado sumergidos en helado cremoso y bañados en chocolate caliente.',
    badge: 'Ultra Melcochudo 🤎',
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Helado artesanal', 'Brownie casero melcochudo', 'Salsa de chocolate', 'Crumble'],
    customizable: true
  },
  {
    id: 'cuchareable-mamut',
    name: 'Cuchareable Mamut',
    category: 'tradicionales',
    price: 14000,
    description: 'Inspirado en la galleta Mamut con malvavisco esponjoso, cobertura de chocolate y helado.',
    badge: 'Divertido & Cremoso 🦣',
    isPopular: false,
    image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Helado artesanal', 'Galleta Mamut', 'Malvavisco derretido', 'Chocolate'],
    customizable: true
  },
  {
    id: 'cuchareable-burbujet',
    name: 'Cuchareable Burbujet',
    category: 'tradicionales',
    price: 14000,
    description: 'Helado combinado con las deliciosas esferas de chocolate Burbujet que estallan de sabor en cada cucharada.',
    badge: 'Choco Burbujas 🫧',
    isPopular: false,
    image: 'https://images.unsplash.com/photo-1549744983-f73245464629?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Helado cremoso', 'Chocolatinas Burbujet', 'Fudge de chocolate', 'Perlitas crujientes'],
    customizable: true
  },
  {
    id: 'cuchareable-quipitos',
    name: 'Cuchareable Quipitos',
    category: 'tradicionales',
    price: 14000,
    description: '¡La explosión dulce y chispeante favorita de todos! Polvo efervescente Quipitos sobre una base suave de helado.',
    badge: 'Efervescente & Único 💥',
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Helado suave', 'Quipitos chispeantes', 'Leche condensada', 'Topping dulce'],
    customizable: true
  },
  {
    id: 'cuchareable-piazza',
    name: 'Cuchareable Piazza',
    category: 'tradicionales',
    price: 14000,
    description: 'Barquillos Piazza rellenos y crocantes, incrustados en helado suave con veteado de chocolate y arequipe.',
    badge: 'Barquillo Crocante 🥢',
    isPopular: false,
    image: 'https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Helado cremoso', 'Barquillos Piazza', 'Arequipe', 'Sirope de chocolate'],
    customizable: true
  },
  {
    id: 'cuchareable-red-velvet',
    name: 'Cuchareable Red Velvet',
    category: 'tradicionales',
    price: 14000,
    description: 'Bizcocho Red Velvet aterciopelado color carmesí, helado cremoso y notas suaves de queso dulce.',
    badge: 'Aterciopelado 🌹',
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Helado suave', 'Bizcocho Red Velvet', 'Crema dulce', 'Salsa de frutos rojos'],
    customizable: true
  },

  // CUCHAREABLES PREMIUM ($16.000)
  {
    id: 'cuchareable-leche-klim-frambuesas',
    name: 'Cuchareable Leche Klim con Frambuesas',
    category: 'premium',
    price: 16000,
    description: 'La combinación reina: suave helado artesanal con abundante Leche Klim en polvo y frambuesas enteras naturales.',
    badge: 'Recomendado del Chef 🍓',
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Helado cremoso', 'Leche Klim generosa', 'Frambuesas naturales', 'Coulis de frambuesa'],
    customizable: true
  },
  {
    id: 'cuchareable-maracululo',
    name: 'Cuchareable Maracululo',
    category: 'premium',
    price: 16000,
    description: 'Pura fruta vallecaucana: helado con pulpa natural de maracuyá y lulo ácido, balanceado con dulce leche condensada.',
    badge: 'Sabor Vallecaucano 🌴',
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Helado artesanal', 'Pulpa de Maracuyá', 'Pulpa de Lulo fresco', 'Leche condensada'],
    customizable: true
  },
  {
    id: 'cuchareable-choco-frambuesa',
    name: 'Cuchareable Choco Frambuesa',
    category: 'premium',
    price: 16000,
    description: 'Intenso chocolate semiamargo combinado con la acidez refrescante de frambuesas frescas en compota.',
    badge: 'Elegancia Pura 🍫',
    isPopular: false,
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Helado de Chocolate Belga', 'Frambuesas enteras', 'Fudge de chocolate', 'Virutas de chocolate'],
    customizable: true
  },
  {
    id: 'cuchareable-frutos-rojos',
    name: 'Cuchareable Frutos Rojos',
    category: 'premium',
    price: 16000,
    description: 'Fresas, moras, arándanos y frambuesas cocidas en sirope artesanal sobre helado suave.',
    badge: 'Frutas Naturales 🍒',
    isPopular: false,
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Helado artesanal', 'Fresas naturales', 'Moras y frambuesas', 'Sirope de frutos rojos'],
    customizable: true
  },
  {
    id: 'cuchareable-queso-bocadillo',
    name: 'Cuchareable Queso y Bocadillo',
    category: 'premium',
    price: 16000,
    description: 'El tradicional matrimonio dulce-salado: láminas de queso campesino fresco, jalea de bocadillo veleño y helado.',
    badge: 'Tradición Colombiana 🧀',
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Helado de nata', 'Queso fresco rayado', 'Bocadillo derretido', 'Oblea crocante'],
    customizable: true
  },
  {
    id: 'cuchareable-oblea',
    name: 'Cuchareable Oblea',
    category: 'premium',
    price: 16000,
    description: 'Todo el sabor de la clásica oblea de parque en un pote: capas de oblea crocante, arequipe de paila, queso y dulce de mora.',
    badge: 'Clásico Infaltable 🥞',
    isPopular: false,
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Helado artesanal', 'Oblea crujiente', 'Arequipe casero', 'Queso suave', 'Mora'],
    customizable: true
  },
  {
    id: 'cuchareable-limon',
    name: 'Cuchareable Limón',
    category: 'premium',
    price: 16000,
    description: 'Pie de limón cuchareable: crema de limón cítrica y aterciopelada, crumble de galleta dorada y helado suave.',
    badge: 'Cítrico & Dulce 🍋',
    isPopular: false,
    image: 'https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Helado de nata', 'Curd de limón natural', 'Galleta triturada', 'Ralladura de limón verde'],
    customizable: true
  },
  {
    id: 'cuchareable-cripi-nutella',
    name: 'Cuchareable Cripi Nutella',
    category: 'premium',
    price: 16000,
    description: 'Abundante Nutella original tibia con perlas de arroz crocante inflado bañadas en chocolate y helado cremoso.',
    badge: 'Top Ventas Nutella 🌰',
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Helado de vainilla', 'Nutella original', 'Arroz inflado cripi chocolate', 'Topping de avellanas'],
    customizable: true
  },
  {
    id: 'cuchareable-chocolatina-jumbo',
    name: 'Cuchareable Chocolatina Jumbo',
    category: 'premium',
    price: 16000,
    description: 'Trozos crujientes de Chocolatina Jumbo con maní tostado, caramelo suave y helado artesanal.',
    badge: 'Con Maní Tostado 🥜',
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Helado de chocolate', 'Chocolatina Jumbo con maní', 'Caramelo suave', 'Chispas de maní'],
    customizable: true
  },
  {
    id: 'cuchareable-chocolatina-jet',
    name: 'Cuchareable Chocolatina Jet',
    category: 'premium',
    price: 16000,
    description: 'El sabor inconfundible de la icónica Chocolatina Jet colombiana triturada y fundida sobre helado artesanal.',
    badge: 'La Tradición Jet ✈️',
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1549744983-f73245464629?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Helado artesanal', 'Chocolatinas Jet', 'Sirope de chocolate Jet', 'Crumble crocante'],
    customizable: true
  },

  // COMBINADOS DE AUTOR
  {
    id: 'combinado-frutos-rojos-klim-frambuesa',
    name: 'Combinado Frutos Rojos, Leche Klim & Frambuesa',
    category: 'combinados',
    price: 17000,
    description: 'Fusión de autor: capas de helado de frutos rojos, abundante Leche Klim en polvo y frambuesas enteras frescas.',
    badge: 'Combinado Especial ✨',
    isPopular: true,
    image: '/menu/menu_combinados.jpg',
    ingredients: ['Helado artesanal', 'Sirope de frutos rojos', 'Leche Klim en polvo', 'Frambuesas frescas'],
    customizable: true
  },
  {
    id: 'combinado-milo-queso',
    name: 'Combinado Milo & Queso',
    category: 'combinados',
    price: 17000,
    description: 'La revelación de la casa: la dulzura y textura del Milo en polvo combinada con queso campesino rallado fresco y helado.',
    badge: 'Contraste Perfecto 🧀',
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Helado artesanal', 'Milo en polvo', 'Queso suave rallado', 'Leche condensada'],
    customizable: true
  },
  {
    id: 'combinado-galleta-ganache-limon',
    name: 'Combinado Galleta: Ganache de Limón & Galleta',
    category: 'combinados',
    price: 20000,
    description: 'Experiencia gourmet: ganache artesanal de limón ácido y sedoso, galletas trituradas finas y helado cremoso.',
    badge: 'Edición Gourmet 🍋',
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Ganache artesanal de limón', 'Galleta crocante dorada', 'Helado de nata', 'Ralladura cítrica'],
    customizable: true
  },
  {
    id: 'combinado-premium-red-velvet',
    name: 'Combinado Premium: Red Velvet & Frambuesas Achocolatadas',
    category: 'combinados',
    price: 23000,
    description: 'Nuestra creación más lujosa: Red Velvet suave, helado de frutos rojos y frambuesas enteras bañadas en chocolate crujiente.',
    badge: 'La Máxima Creación 👑',
    isPopular: true,
    image: '/menu/menu_combinados.jpg',
    ingredients: ['Bizcocho Red Velvet', 'Helado de Frutos Rojos', 'Frambuesas achocolatadas', 'Cobertura crujiente'],
    customizable: true
  },

  // MALTEADAS ($16.000)
  {
    id: 'malteada-chicle',
    name: 'Malteada de Chicle',
    category: 'malteadas',
    price: 16000,
    description: 'Batido cremoso y divertido con sabor a chicle clásico, color rosa pastel, copete de chantilly y chispas de colores.',
    badge: 'Super Divertida 🫧',
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Helado de chicle artesanal', 'Leche cremosa', 'Crema Chantilly', 'Chispitas de colores'],
    customizable: false
  },
  {
    id: 'malteada-frutos-rojos',
    name: 'Malteada de Frutos Rojos',
    category: 'malteadas',
    price: 16000,
    description: 'Helado de frutos del bosque licuado con leche entera, veteado de coulis de mora y fresa, coronado con chantilly.',
    badge: 'Frutas Silvestres 🍓',
    isPopular: false,
    image: 'https://images.unsplash.com/photo-1553787499-6f9133860278?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Helado de frutos rojos', 'Leche cremosa', 'Chantilly', 'Sirope de fresa natural'],
    customizable: false
  },
  {
    id: 'malteada-brownie',
    name: 'Malteada de Brownie',
    category: 'malteadas',
    price: 16000,
    description: 'Deliciosa malteada de chocolate espeso con trozos de brownie batidos en la mezcla y en la cima.',
    badge: 'Doble Brownie 🍫',
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Helado de chocolate belga', 'Trozos de brownie melcochudo', 'Salsa fudge', 'Crema Chantilly'],
    customizable: false
  },
  {
    id: 'malteada-chocorramo',
    name: 'Malteada de Chocorramo',
    category: 'malteadas',
    price: 16000,
    description: 'El bizcocho bañado en chocolate más famoso de Colombia convertido en una malteada cremosa irresistible.',
    badge: 'Favorito Nacional 🇨🇴',
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Helado de vainilla y chocolate', 'Chocorramo triturado', 'Crema Chantilly', 'Chocolate líquido'],
    customizable: false
  },
  {
    id: 'malteada-flips',
    name: 'Malteada de Flips',
    category: 'malteadas',
    price: 16000,
    description: 'Batido con el inigualable cereal Flips relleno de chocolate y dulce de leche, coronado con flips enteros crujientes.',
    badge: 'Cereal Flips Crocante 🥣',
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Helado de dulce de leche', 'Cereal Flips relleno', 'Leche cremosa', 'Crema Chantilly'],
    customizable: false
  }
];

export const CUSTOMIZER_OPTIONS = {
  toppingAdicionalPrice: 3000,
  waffleIceCreams: [
    'Vainilla Francesa',
    'Chocolate Belga',
    'Fresa Silvestre',
    'Maracuyá',
    'Arequipe',
    'Cookies & Cream (Oreo)'
  ],
  waffleToppings: [
    'Chispas de chocolate negro',
    'Chispas de chocolate blanco',
    'Chispas de colores'
  ],
  waffleSauces: [
    'Salsa de Chocolate',
    'Leche Condensada',
    'Arequipe'
  ],
  extraToppings: [
    'Chocorramo en chunks',
    'Leche Klim generosa',
    'Milo en polvo',
    'Galleta Oreo triturada',
    'Brownie melcochudo',
    'Cereal Flips chocolate',
    'Frambuesas naturales',
    'Fresas frescas en láminas',
    'Quipitos efervescente',
    'Burbujet',
    'Queso rallado fresco'
  ]
};

export const REVIEWS = [
  {
    id: 1,
    name: 'Valentina Restrepo',
    date: 'Hace 3 días',
    rating: 5,
    comment: '¡El Waffle en cono con fresas, banano y chantilly es una locura total! El local en Zarzal es hermoso para pasar la tarde.',
    favorite: 'Waffle en Cono Cucharearte'
  },
  {
    id: 2,
    name: 'Camilo Andrés Giraldo',
    date: 'La semana pasada',
    rating: 5,
    comment: 'El Combinado de Frutos Rojos con Leche Klim y Frambuesas es el mejor postre que he probado. 10/10.',
    favorite: 'Combinado Frutos Rojos & Klim'
  },
  {
    id: 3,
    name: 'Mariana Salazar',
    date: 'Hace 2 semanas',
    rating: 5,
    comment: 'La malteada de Flips y el cuchareable de Chocorramo son increíbles. Súper recomendado en la Cra 11 de Zarzal.',
    favorite: 'Malteada de Flips'
  }
];
