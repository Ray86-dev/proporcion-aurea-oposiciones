// ============================================================
// CONFIGURACION: Cambia estos valores con tus datos reales
// ============================================================

// Tu numero de WhatsApp con codigo de pais (sin +, sin espacios)
// Ejemplo: 34612345678
export const WHATSAPP_NUMBER = "34XXXXXXXXX"; // <-- PON TU NUMERO AQUI

// Tu perfil de Instagram (sin @)
export const INSTAGRAM_HANDLE = "proporcionaurea.oposiciones"; // <-- PON TU HANDLE AQUI

// ============================================================

export const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_HANDLE}`;

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
      "Temario completo para la especialidad de Volumen del Cuerpo de Profesores de Artes Plasticas y Diseno.",
      "Contenido actualizado segun el BOE, con todos los temas desarrollados de forma rigurosa y clara.",
      "Impreso y encuadernado en papel de alta calidad para facilitar el estudio y la anotacion a mano.",
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
      "Temario completo para la especialidad de Fotografía del Cuerpo de Profesores de Artes Plasticas y Diseno.",
      "Todos los temas desarrollados con rigor academico y enfoque practico orientado a la oposicion.",
      "Formato impreso y encuadernado, sin version digital, para proteger el contenido y facilitar el estudio concentrado.",
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
      "Temario completo para la especialidad de Medios Audiovisuales del Cuerpo de Profesores de Artes Plasticas y Diseno.",
      "Desarrollo exhaustivo de todos los temas segun la normativa vigente, ideal para la preparacion de oposiciones.",
      "Edicion impresa y encuadernada con materiales de calidad. No se ofrece version digital para minimizar el plagio.",
    ],
    whatsappMessage:
      "Hola, quiero información sobre el temario de Medios Audiovisuales para OPOS Secundaria (Escuelas de Arte). ¿Cuál es el proceso de compra y envío?",
  },
];

export const GENERIC_WHATSAPP_MESSAGE =
  "Hola Proporción Áurea, quiero información sobre los temarios de OPOS de Escuelas de Arte.";

export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const faqs = [
  {
    question: "¿Cómo se realiza el pago?",
    answer:
      "El pago se concreta directamente por WhatsApp. Contacta con nosotros, te indicaremos las opciones disponibles (transferencia, Bizum, etc.) y coordinaremos la entrega.",
  },
  {
    question: "¿Hacéis envíos a toda Canarias?",
    answer:
      "Sí, realizamos envíos a todas las islas de Canarias. Los gastos de envío se calculan según destino. La entrega en mano es gratuita en la zona metropolitana de La Laguna – Santa Cruz de Tenerife.",
  },
  {
    question: "¿Hay versión digital?",
    answer:
      "No. Nuestros temarios solo se venden en formato impreso y encuadernado. Esta decisión protege el contenido frente al plagio y fomenta un estudio más concentrado y efectivo.",
  },
  {
    question: "¿Cuánto tarda la entrega?",
    answer:
      "La entrega en mano en la zona metropolitana de La Laguna – Santa Cruz se realiza en 1-2 días hábiles tras confirmar el pago. Los envíos al resto de Canarias suelen tardar entre 3-5 días hábiles.",
  },
];
