import React from "react";
import Cta from "./Cta";
import { Gift, CheckCircle } from "lucide-react";

const Bonus = () => {
  return (
    <section className="bg-gradient-to-r from-red-700 to-orange-600 text-white py-16 px-8 mb-12 mt-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-xl">
          🎁 ¡Bonos Exclusivos para Potenciar tu Inglés! 🚀
        </h2>
        <p className="text-lg md:text-xl leading-relaxed">
          Al inscribirte <span className="text-yellow-300 font-semibold">hoy</span>, recibirás estos bonos
          diseñados para que domines el inglés en tiempo récord. ¡Aprovecha esta oportunidad única! 🎯
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {bonuses.map((bonus, index) => (
          <div
            key={index}
            className="bg-white text-gray-900 rounded-2xl p-6 shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-red-600 flex items-center gap-2 mb-3">
              <Gift size={28} className="text-orange-500" /> {bonus.title}
            </h3>
            <p className="leading-relaxed text-gray-800">{bonus.description}</p>
            <p className="mt-2 text-gray-600 font-semibold">{bonus.value}</p>
          </div>
        ))}
      </div>

      {/* Destacar el total de los bonos */}
      <div className="text-center mt-12">
        <p className="text-2xl font-bold text-yellow-300 flex items-center justify-center gap-2">
          <CheckCircle size={28} /> ¡Bonos valorados en más de <span className="text-yellow-400">$1,000 USD</span>!
        </p>
        <p className="mt-2 text-lg">
          🎉 Todo esto es tuyo <span className="font-semibold">GRATIS</span> al inscribirte hoy. ¡Oferta por tiempo limitado!
        </p>
      </div>

      <Cta />
    </section>
  );
};

const bonuses = [
  {
    title: "1️⃣ Guía: CV y entrevistas en inglés",
    description: "Aprende a crear un currículum impactante y responder entrevistas con seguridad.",
    value: "**(Valor: $150 USD)**",
  },
  {
    title: "2️⃣ Pack de 50 frases infalibles para viajar 🌍",
    description: "Expresiones clave para aeropuertos, hoteles y más. Viaja sin miedo y con confianza.",
    value: "**(Valor: $100 USD)**",
  },
  {
    title: "3️⃣ Taller: Cómo superar el TOEFL/IELTS 🎯",
    description: "Domina estrategias efectivas para obtener una calificación sobresaliente.",
    value: "**(Valor: $200 USD)**",
  },
  {
    title: "4️⃣ Biblioteca digital de recursos avanzados 📚",
    description: "Accede a libros, guías y ejercicios interactivos para reforzar tu aprendizaje.",
    value: "**(Valor: $120 USD)**",
  },
  {
    title: "5️⃣ Plantillas para conversaciones reales 🗣️",
    description: "Guiones prácticos para que hables inglés con confianza en cualquier situación.",
    value: "**(Valor: $150 USD)**",
  },
  {
    title: "6️⃣ Acceso de por vida a actualizaciones 🚀",
    description: "Recibe todas las nuevas lecciones y mejoras sin costo adicional.",
    value: "**(Valor: $130 USD)**",
  },
  {
    title: "7️⃣ Masterclass: Pronunciación Nativa 💬",
    description: "Aprende a sonar como un hablante nativo con técnicas avanzadas de pronunciación.",
    value: "**(Valor: $150 USD)**",
  },
];

export default Bonus;


