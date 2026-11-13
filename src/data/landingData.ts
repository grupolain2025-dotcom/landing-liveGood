export const AFFILIATE_LINK = 'https://www.livegood.com/JILSZO';
export const UNIFIED_CTA_TEXT = 'Regístrate ahora';

export interface Testimonial {
  name: string;
  rank: 'DIAMANTE' | 'ORO' | 'PLATA' | 'BRONCE';
  rankColor: string;
  avatarInitials: string;
  avatarGradient: string;
  flag: string;
  timeInBusiness: string;
  keyResult: string;
  before: string;
  quote: string;
  location: string;
  income: string;
}

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    name: 'Pedro Suárez',
    rank: 'DIAMANTE',
    rankColor: 'bg-blue-950/90 text-blue-300 border-blue-500/40',
    avatarInitials: 'PS',
    avatarGradient: 'from-blue-600 to-indigo-700',
    flag: '🇨🇴',
    timeInBusiness: '14 meses en LiveGood',
    keyResult: '100% de libertad horaria',
    before: 'Trabajaba más de 12 horas al día en un empleo tradicional sin tiempo para su familia.',
    quote:
      'Invertí los $40 USD de activación y en mi primer mes ya cubrí mis gastos. Hoy vivo 100% de este negocio digital con ingresos superiores a los $4,200 USD al mes, trabajando desde mi hogar o viajando.',
    location: 'Bogotá, Colombia',
    income: '$4,200+ USD/mes',
  },
  {
    name: 'Carlos & Diana Restrepo',
    rank: 'ORO',
    rankColor: 'bg-amber-950/90 text-amber-300 border-amber-500/40',
    avatarInitials: 'CR',
    avatarGradient: 'from-amber-600 to-orange-700',
    flag: '🇨🇴',
    timeInBusiness: '9 meses en LiveGood',
    keyResult: 'Cero stock en casa',
    before: 'Frustrados con empresas tradicionales que obligan a comprar miles de dólares en stock.',
    quote:
      'Aquí no hay cajas en el garaje ni autoenvíos forzados. Cobramos puntualmente cada jueves en dólares y nuestro equipo ya genera ingresos constantes en más de 8 países.',
    location: 'Medellín, Colombia',
    income: '$2,600+ USD/mes',
  },
  {
    name: 'Dra. Esther Molinares Rodríguez',
    rank: 'PLATA',
    rankColor: 'bg-slate-800 text-slate-200 border-slate-400/50',
    avatarInitials: 'EM',
    avatarGradient: 'from-emerald-600 to-teal-800',
    flag: '🇲🇽',
    timeInBusiness: '7 meses en LiveGood',
    keyResult: 'Retención de equipo del 88%',
    before: 'Buscaba un modelo ético y transparente que no dependiera de vender productos a sobreprecio.',
    quote:
      'Al ser un modelo tipo club con precios directos de fábrica, la retención de los miembros es altísima. He construido un ingreso residual recurrente que me da total tranquilidad cada semana.',
    location: 'Ciudad de México, México',
    income: '$1,850+ USD/mes',
  },
  {
    name: 'Verónica Sepúlveda',
    rank: 'BRONCE',
    rankColor: 'bg-emerald-950/90 text-emerald-400 border-emerald-600/40',
    avatarInitials: 'VS',
    avatarGradient: 'from-rose-600 to-pink-700',
    flag: '🇨🇱',
    timeInBusiness: '4 meses en LiveGood',
    keyResult: 'Genera desde su celular',
    before: 'Mamá de dos niños buscando generar ingresos desde su celular sin descuidar a sus hijos.',
    quote:
      'El sistema automatizado de LiveGood hace el trabajo pesado. Dedico un par de horas al día desde casa y el mes pasado superé los $950 USD. Es el sistema más noble y sencillo que he visto.',
    location: 'Santiago, Chile',
    income: '$950+ USD/mes',
  },
];

export const FOR_WHOM_ITEMS = [
  {
    title: 'Personas que buscan un ingreso extra real trabajando desde casa',
    desc: 'Genera ingresos semanales en dólares desde tu celular o computadora con un sistema automatizado probado por miles de personas en todo el mundo.',
  },
  {
    title: 'Empleados y profesionales que desean independencia horaria',
    desc: 'Deja de cambiar tiempo por dinero y construye una fuente de ingresos residuales que te permita tener libertad para disfrutar tu vida.',
  },
  {
    title: 'Madres y padres de familia que priorizan su hogar',
    desc: 'Genera ingresos significativos sin salir de casa, con total flexibilidad para acompañar y educar a tus hijos sin pedir permiso a un jefe.',
  },
  {
    title: 'Emprendedores digitales y usuarios de redes sociales',
    desc: 'Monetiza tu tiempo y tus redes con un modelo de suscripción global en más de 200 países sin necesidad de inventarios ni de ocuparte de envíos.',
  },
];

export const OFFER_PILLARS = [
  {
    number: '01',
    title: 'Sistema 100% Digital y Llave en Mano',
    desc: 'Al registrarte recibes tu embudo digital, páginas oficiales listas y sistema automatizado de presentación para empezar desde el primer minuto.',
  },
  {
    number: '02',
    title: 'Cero Inventarios ni Compras Obligatorias',
    desc: 'Olvídate de acumular cajas en tu casa o de autoenvíos forzados de $150-$200 al mes. Tu negocio opera 100% digital sin ataduras de stock.',
  },
  {
    number: '03',
    title: 'Pagos Semanales y Mensuales en Dólares',
    desc: 'Comisiones de inicio rápido del 50%, matriz forzada 2x15 con derrame global y bonos de igualación que premian tu constancia.',
  },
  {
    number: '04',
    title: 'Prerregistro 100% Gratuito en la Powerline',
    desc: 'Asegura tu posición en la línea de poder global antes del corte de este jueves a medianoche y benefíciate de todo el crecimiento internacional.',
  },
];

export const FAQS_DATA = [
  {
    question: '¿Cómo funciona este negocio desde casa y cuánto necesito para empezar?',
    answer:
      'El proceso es sumamente accesible y transparente: realizas un prerregistro 100% gratuito para asegurar tu lugar en la línea de poder mundial. Para activar tu negocio global, solo abonas un pago único de afiliación de $40 USD y la membresía mensual de $9.95 USD (sin compras forzadas ni costos ocultos).',
  },
  {
    question: '¿Tengo que comprar o almacenar productos obligatoriamente cada mes?',
    answer:
      'No, absolutamente NO. A diferencia de las empresas tradicionales de venta directa, en LiveGood no existen compras mínimas mensuales, ni autoenvíos forzados ni necesidad de acumular inventarios en tu hogar.',
  },
  {
    question: '¿Cómo y cuándo se pagan las comisiones?',
    answer:
      'LiveGood paga puntualmente todas las semanas comisiones de inicio rápido directamente a tu cuenta bancaria local o billetera digital internacional (BitPay / transferencia bancaria directa), además de comisiones residuales mensuales.',
  },
  {
    question: '¿Por qué es importante hacer el prerregistro gratuito hoy mismo?',
    answer:
      'Cada día, miles de personas de más de 200 países se unen a LiveGood. El sistema Powerline realiza un corte semanal cada jueves a medianoche (hora del Este de EE.UU.). Al registrarte gratis hoy, aseguras tu puesto de ventaja en la línea de poder y todas las personas que entren después quedarán posicionadas debajo de ti.',
  },
  {
    question: '¿Necesito experiencia previa en negocios digitales o ventas?',
    answer:
      'No requieres ninguna experiencia previa. Al registrarte accedes a entrenamientos paso a paso, capacitaciones semanales en vivo y herramientas automatizadas diseñadas para que cualquier persona empiece a generar resultados desde su primera semana.',
  },
  {
    question: '¿Puedo desarrollar este negocio a tiempo parcial desde mi celular?',
    answer:
      'Sí, el 85% de los miembros comenzaron dedicando solo 1 a 2 horas al día en sus tiempos libres desde su teléfono móvil. El sistema automatizado se encarga de presentar y dar seguimiento.',
  },
];
