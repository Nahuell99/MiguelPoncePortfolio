const whatsappText = encodeURIComponent(
  'Hola Miguel, quiero solicitar un presupuesto.',
);
const whatsappUrl = `https://wa.me/5491122689165?text=${whatsappText}`;

export const site = {
  year: 2026,
  brand: 'Miguel Ponce',
  legalName: 'Miguel Ponce Mantenimiento y Servicios',
  phoneDisplay: '11 2268 9165',
  phoneHref: whatsappUrl,
  whatsappUrl,
  email: 'migueloponce@gmail.com',
  emailHref: 'mailto:migueloponce@gmail.com',
  area: 'Lanús y zonas aledañas',
  nav: [
    { id: 'inicio', label: 'Inicio' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'nosotros', label: 'Nosotros' },
    { id: 'planes', label: 'Planes' },
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
      icon: 'fence',
      title: 'Herrería',
      text: 'Rejas, portones, estructuras metálicas, soldaduras y trabajos a medida.',
    },
    {
      icon: 'build',
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
