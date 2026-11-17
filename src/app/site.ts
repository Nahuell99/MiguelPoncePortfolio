const phoneE164 = '5491122689165';

export const whatsappLink = (text: string): string =>
  `https://wa.me/${phoneE164}?text=${encodeURIComponent(text)}`;

const whatsappUrl = whatsappLink('Hola Miguel, quiero pedir un presupuesto.');

export interface Photo {
  src: string;
  thumb: string;
  alt: string;
  width: number;
  height: number;
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  text: string;
  /** Color del oficio: el mismo código que usan los caños en obra. */
  tone: 'agua' | 'gas' | 'luz' | 'hierro' | 'obra';
  photos: Photo[];
}

const photo = (name: string, alt: string, width: number, height: number): Photo => ({
  src: `images/trabajos/${name}.webp`,
  thumb: `images/trabajos/${name}-sm.webp`,
  alt,
  width,
  height,
});

const plomeria: Photo[] = [
  photo('plomeria-1', 'Cañerías de termofusión con llaves de paso en una terraza', 1080, 929),
  photo('plomeria-2', 'Bomba de agua conectada con cañerías de termofusión', 1043, 680),
  photo('plomeria-3', 'Colector de agua fría y caliente amurado en pared', 1053, 1267),
  photo('plomeria-4', 'Cañerías de agua y desagües empotrados en la pared', 862, 1320),
  photo('plomeria-5', 'Bajadas de agua y desagüe en una pared abierta', 844, 967),
  photo('plomeria-6', 'Instalación de bombas y cañerías bajo tanque de agua', 1055, 1254),
  photo('plomeria-7', 'Conexión de termotanque con cañerías de termofusión', 875, 1298),
];

const gas: Photo[] = [
  photo('gas-3', 'Distribución de cañerías de gas para un edificio', 1080, 1192),
  photo('gas-2', 'Cañería de gas tendida a lo largo de un pasillo en obra', 1080, 1298),
  photo('gas-1', 'Batería de cañerías de gas amarillas para varios medidores', 1067, 1127),
  photo('gas-4', 'Codo de cañería de gas enterrada en zanja', 1080, 1125),
  photo('gas-5', 'Conexión de regulador y cañería de gas junto al gabinete', 1033, 1168),
  photo('gas-6', 'Miguel soldando la cañería en un nicho de medidor de gas', 1080, 828),
  photo('gas-7', 'Miguel trabajando en una cañería de gas a nivel del piso', 1066, 1236),
];

const electricidad: Photo[] = [
  photo('electricidad-1', 'Tablero eléctrico con térmicas durante una instalación', 838, 510),
];

const herreria: Photo[] = [
  photo('herreria-1', 'Soldadura con máscara en el taller', 1080, 928),
  photo('herreria-2', 'Soldadura de una reja metálica', 1080, 1022),
];

const obra: Photo[] = [
  photo('yeso-1', 'Estructura metálica para cielorraso de durlock', 1060, 668),
  photo('yeso-2', 'Tabiques de durlock en armado dentro de un departamento', 1080, 907),
];

const services: Service[] = [
  {
    id: 'plomeria',
    icon: 'faucet',
    title: 'Plomería',
    text: 'Instalaciones, reparaciones de cañerías, filtraciones, destapes, bombas y termotanques.',
    tone: 'agua',
    photos: plomeria,
  },
  {
    id: 'gas',
    icon: 'gas_meter',
    title: 'Gas',
    text: 'Instalaciones y cañerías de gas, baterías de medidores, conexión de artefactos y pérdidas.',
    tone: 'gas',
    photos: gas,
  },
  {
    id: 'electricidad',
    icon: 'bolt',
    title: 'Electricidad',
    text: 'Instalaciones eléctricas, reparaciones, tableros, iluminación y más.',
    tone: 'luz',
    photos: electricidad,
  },
  {
    id: 'herreria',
    icon: 'fence',
    title: 'Herrería',
    text: 'Rejas, portones, estructuras metálicas, soldaduras y trabajos a medida.',
    tone: 'hierro',
    photos: herreria,
  },
  {
    id: 'mantenimiento',
    icon: 'build',
    title: 'Mantenimiento general',
    text: 'Durlock, cielorrasos, tabiques y arreglos para tu industria, comercio y hogar.',
    tone: 'obra',
    photos: obra,
  },
];

export const site = {
  year: new Date().getFullYear(),
  brand: 'Miguel Ponce',
  legalName: 'Miguel Ponce Mantenimiento y Servicios',
  phoneDisplay: '11 2268 9165',
  phoneTel: `tel:+${phoneE164}`,
  whatsappUrl,
  email: 'lacardeuse1985@gmail.com',
  emailUser: 'lacardeuse1985',
  emailDomain: 'gmail.com',
  emailHref: 'mailto:lacardeuse1985@gmail.com',
  area: 'Lanús y alrededores',
  nav: [
    { id: 'servicios', label: 'Trabajos' },
    { id: 'nosotros', label: 'Sobre mí' },
    { id: 'planes', label: 'Planes' },
    { id: 'contacto', label: 'Contacto' },
  ],
  hero: {
    status: 'Atención 24 horas, todos los días',
    titleLead: 'Todo el mantenimiento',
    titleAccent: 'en un solo lugar',
    text: 'Más de 20 años instalando y reparando en casas, comercios e industrias de Lanús y alrededores.',
    cta: 'Pedir presupuesto',
    secondary: 'Ver trabajos',
  },
  services,
  about: {
    title: 'Más de 20 años de oficio',
    text: 'Brindo soluciones confiables y eficientes en mantenimiento general. Mi compromiso es el mismo en cada trabajo: calidad, seguridad y que quede bien hecho la primera vez.',
    facts: [
      { icon: 'clipboard', title: 'Trabajos garantizados', text: 'Calidad y seguridad en cada servicio.' },
      { icon: 'clock', title: 'Atención 24/7', text: 'Urgencias de día, de noche y feriados.' },
      { icon: 'pin', title: 'Lanús y alrededores', text: 'Consultame si llego a tu zona.' },
    ],
    cta: 'Escribime por WhatsApp',
  },
  plans: {
    title: 'Planes de mantenimiento',
    text: 'Para consorcios, comercios e industrias que prefieren prevenir antes que salir a apagar incendios.',
    items: [
      {
        icon: 'shield',
        title: 'Preventivo',
        text: 'Controles periódicos y programados para evitar fallas y alargar la vida útil de las instalaciones.',
      },
      {
        icon: 'wrench',
        title: 'Correctivo',
        text: 'Respuesta rápida ante cualquier inconveniente para que el problema no frene tu actividad.',
      },
    ],
    subscription: {
      icon: 'calendar',
      title: 'Abonos mensuales',
      text: 'Planes a medida para hogares, comercios, consorcios e industrias.',
      cta: 'Consultar abonos',
      href: whatsappLink('Hola Miguel, quiero consultar por los abonos mensuales de mantenimiento.'),
    },
  },
  contact: {
    title: '¿Qué necesitás arreglar?',
    text: 'Contame qué pasa y, si podés, mandame una foto por WhatsApp. Así te paso un presupuesto más preciso.',
  },
};

export const serviceWhatsapp = (service: Service): string =>
  whatsappLink(`Hola Miguel, quiero consultar por un trabajo de ${service.title.toLowerCase()}.`);
