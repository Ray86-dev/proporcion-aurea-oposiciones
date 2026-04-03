// ============================================================
// CONFIGURACION: Cambia estos valores con tus datos reales
// ============================================================

// Tu numero de WhatsApp con codigo de pais (sin +, sin espacios)
// Ejemplo: 34612345678
export const WHATSAPP_NUMBER = "34XXXXXXXXX"; // <-- PON TU NUMERO AQUI

// ============================================================

export const INSTAGRAM_URL = "https://www.instagram.com/aurea.opos";
export const WHATSAPP_COMMUNITY_URL = "https://chat.whatsapp.com/BNxWSxkVp0ZDXSkrHBvoOe";
export const EMAIL = "aurea.opos@gmail.com";

export type Temario = {
  id: string;
  title: string;
  specialty: string;
  image: string;
  description: string[];
  whatsappMessage: string;
};

export const temarios: Temario[] = [
  {
    id: "volumen",
    title: "Volumen",
    specialty: "Especialidad de Volumen",
    image: "/images/Temario Volumen.png",
    description: [
      "Temario completo de la especialidad de Volumen, desarrollado tema a tema con el rigor que la oposición exige.",
      "Actualizado según el BOE, con un enfoque claro y práctico pensado para que aproveches cada hora de estudio.",
      "Impreso y encuadernado con cariño. Cada ejemplar que entregamos en mano va con una nota personal nuestra.",
    ],
    whatsappMessage:
      "Hola, quiero información sobre el temario de Volumen para OPOS Secundaria (Escuelas de Arte). ¿Cuál es el proceso de compra y envío?",
  },
  {
    id: "fotografia",
    title: "Fotografía",
    specialty: "Especialidad de Fotografía",
    image: "/images/Temario Fotografía.png",
    description: [
      "Todos los temas de Fotografía desarrollados con rigor académico y un enfoque práctico orientado a la oposición.",
      "Hemos cuidado cada detalle para que tengas un material claro, completo y que de verdad te ayude a prepararte.",
      "Solo en papel, porque creemos que estudiar sin pantallas marca la diferencia. Y sí, también va con su nota y confeti.",
    ],
    whatsappMessage:
      "Hola, quiero información sobre el temario de Fotografía para OPOS Secundaria (Escuelas de Arte). ¿Cuál es el proceso de compra y envío?",
  },
  {
    id: "audiovisuales",
    title: "Medios Audiovisuales",
    specialty: "Especialidad de Medios Audiovisuales",
    image: "/images/Temario Medios Audiovisuales.png",
    description: [
      "Temario completo de Medios Audiovisuales con todos los temas desarrollados según la normativa vigente.",
      "Pensado para que cada sesión de estudio cuente: contenido exhaustivo, bien estructurado y fácil de seguir.",
      "Impreso y encuadernado con la misma dedicación que ponemos en cada entrega. Sin versión digital, con mucho corazón.",
    ],
    whatsappMessage:
      "Hola, quiero información sobre el temario de Medios Audiovisuales para OPOS Secundaria (Escuelas de Arte). ¿Cuál es el proceso de compra y envío?",
  },
];

export const GENERIC_WHATSAPP_MESSAGE =
  "¡Hola, Rayco y Verónica! Me interesa información sobre vuestros temarios de OPOS de Escuelas de Arte.";

export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const faqs = [
  {
    question: "¿Cómo se realiza el pago?",
    answer:
      "Muy fácil: escríbenos por WhatsApp y te lo explicamos todo. Aceptamos transferencia, Bizum y coordinamos contigo la entrega de forma personal.",
  },
  {
    question: "¿Hacéis envíos a toda Canarias?",
    answer:
      "¡Por supuesto! Enviamos a todas las islas. Si estás en la zona de La Laguna – Santa Cruz, la entrega en mano es gratuita y viene con una sorpresita.",
  },
  {
    question: "¿Hay versión digital?",
    answer:
      "No, y es una decisión consciente. Queremos proteger el trabajo que hay detrás de cada tema y, además, creemos firmemente que estudiar en papel te ayuda a concentrarte mejor.",
  },
  {
    question: "¿Cuánto tarda la entrega?",
    answer:
      "En mano, normalmente en 1-2 días tras confirmar el pago. Para el resto de Canarias, entre 3-5 días hábiles. Te avisamos en todo momento para que estés tranquilo/a.",
  },
];
