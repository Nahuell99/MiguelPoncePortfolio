const whatsappText = encodeURIComponent(
  'Hola Miguel, quiero solicitar un presupuesto.',
);

export const site = {
  year: 2026,
  brand: 'Miguel Ponce',
  legalName: 'Miguel Ponce Mantenimiento y Servicios',
  phoneDisplay: '11 2268 9165',
  phoneHref: 'tel:+5491122689165',
  whatsappUrl: `https://wa.me/5491122689165?text=${whatsappText}`,
  email: 'migueloponce@gmail.com',
  emailHref: 'mailto:migueloponce@gmail.com',
  area: 'Lanús y zonas aledañas',
  nav: [
    { id: 'inicio', label: 'Inicio' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'nosotros', label: 'Nosotros' },
    { id: 'planes', label: 'Planes' },
    { id: 'trabajos', label: 'Trabajos' },
    { id: 'contacto', label: 'Contacto' },
  ],
  hero: {
    titleLead: 'Todo el mantenimiento',
    titleAccent: 'en un solo lugar',
    text: 'Soluciones profesionales para su industria, comercio y hogar.',
    cta: 'Solicitar presupuesto',
    badges: [
      { icon: 'check', label: 'Confianza' },
      { icon: 'medal', label: 'Experiencia' },
      { icon: 'clock', label: 'Atención 24/7' },
    ],
  },
  services: [
    {
      icon: 'faucet',
      title: 'Plomería',
      text: 'Instalaciones, reparaciones de cañerías, filtraciones, destapes y mucho más.',
    },
    {
      icon: 'bolt',
      title: 'Electricidad',
      text: 'Instalaciones eléctricas, reparaciones, tableros, iluminación y más.',
    },
    {
      icon: 'weld',
      title: 'Herrería',
      text: 'Rejas, portones, estructuras metálicas, soldaduras y trabajos a medida.',
    },
    {
      icon: 'gear',
      title: 'Mantenimiento general',
      text: 'Soluciones integrales para su industria, comercio y hogar.',
    },
    {
      icon: 'home',
      title: 'Hogar, comercio e industria',
      text: 'Atención personalizada para cada necesidad.',
    },
  ],
  about: {
    eyebrow: 'Sobre nosotros',
    title: 'Más de 20 años de experiencia',
    text: 'Brindamos soluciones confiables y eficientes en mantenimiento general. Nuestro compromiso es garantizar calidad, seguridad y satisfacción en cada trabajo.',
    cta: 'Conocenos más',
  },
  plans: {
    title: 'Planes de mantenimiento',
    items: [
      {
        icon: 'shield',
        title: 'Preventivo',
        text: 'Evite fallas y prolongue la vida útil de sus instalaciones con controles periódicos y programados.',
      },
      {
        icon: 'wrench',
        title: 'Correctivo',
        text: 'Reacción rápida y efectiva ante cualquier inconveniente para minimizar tiempos de inactividad.',
      },
    ],
    subscription: {
      icon: 'calendar',
      title: 'Abonos mensuales',
      text: 'Planes a medida para su hogar, comercio, consorcio o industria.',
      cta: 'Consulte nuestros planes',
    },
  },
  works: {
    eyebrow: 'Trabajos',
    title: 'Lo que hacemos',
    text: 'Cada trabajo se adapta al lugar y al problema. Estos son los encargos más habituales.',
    items: [
      {
        icon: 'faucet',
        title: 'Plomería',
        text: 'Destapes, filtraciones y cambio de cañerías en viviendas y comercios.',
      },
      {
        icon: 'bolt',
        title: 'Electricidad',
        text: 'Tableros, iluminación y reparación de instalaciones.',
      },
      {
        icon: 'weld',
        title: 'Herrería',
        text: 'Rejas, portones y estructuras metálicas a medida.',
      },
      {
        icon: 'gear',
        title: 'Mantenimiento integral',
        text: 'Controles periódicos para consorcios, comercios e industria.',
      },
    ],
  },
  cta: {
    title: 'Atención personalizada',
    text: 'Nos adaptamos a sus necesidades.',
    button: 'Contactanos',
  },
  footer: [
    {
      icon: 'headset',
      title: 'Atención 24/7',
      text: 'Estamos siempre disponibles para ayudarte.',
    },
    {
      icon: 'clipboard',
      title: 'Trabajos garantizados',
      text: 'Calidad, seguridad y garantía en todos nuestros servicios.',
    },
    {
      icon: 'pin',
      title: 'Zona de cobertura',
      text: 'Lanús y zonas aledañas. Consulte por su zona.',
    },
  ],
};
