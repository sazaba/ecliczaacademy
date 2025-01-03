
import React from "react";
import Cta from "./Cta";


const Bonus = () => {
  return (
    <section className="bg-gradient-to-r from-red-600 to-orange-500 text-white py-12 px-6 mb-10 mt-3">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8">
          🎁 Bonos Exclusivos que Llevan tu Inglés al Siguiente Nivel 🎁
        </h2>
        <p className="text-lg text-center mb-8 leading-relaxed">
          Inscribirte hoy no solo te dará acceso al curso más completo de inglés, sino también a{" "}
          <span className="text-yellow-300 font-semibold">BONOS EXTRA</span> diseñados para maximizar tus resultados. ¡Esto es lo que hará que tu experiencia sea única y completa! 🚀
        </p>

        <div className="space-y-8">
          {/* Bono 1 */}
          <div className="bg-white text-gray-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-2xl font-semibold text-red-600 mb-3">
              1️⃣ Guía: Cómo preparar tu CV y entrevistas en inglés
            </h3>
            <p className="leading-relaxed">
              👉 Destaca en procesos laborales internacionales. Aprende a redactar un currículum profesional, responder preguntas comunes en entrevistas y mostrar seguridad en inglés para triunfar en el ámbito laboral.
            </p>
            <p className="mt-2 text-gray-700 font-semibold">**(Valor: $150 USD)**</p>
          </div>

          {/* Bono 2 */}
          <div className="bg-white text-gray-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-2xl font-semibold text-red-600 mb-3">
              2️⃣ Pack de 50 frases infalibles para viajar 🌍
            </h3>
            <p className="leading-relaxed">
              👉 El aliado perfecto para tus próximas aventuras. Incluye expresiones útiles para aeropuertos, restaurantes, hoteles y más, para que viajes sin miedo y te comuniques con total confianza.
            </p>
            <p className="mt-2 text-gray-700 font-semibold">**(Valor: $100 USD)**</p>
          </div>

          {/* Bono 3 */}
          <div className="bg-white text-gray-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-2xl font-semibold text-red-600 mb-3">
              3️⃣ Taller exclusivo: Cómo superar el TOEFL/IELTS con éxito 🎯
            </h3>
            <p className="leading-relaxed">
              👉 Estrategias y tips prácticos para destacar en estas certificaciones. Te enseñaremos cómo abordar cada sección del examen con seguridad y obtener una calificación sobresaliente.
            </p>
            <p className="mt-2 text-gray-700 font-semibold">**(Valor: $200 USD)**</p>
          </div>

          {/* Bono 4 */}
          <div className="bg-white text-gray-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-2xl font-semibold text-red-600 mb-3">
              4️⃣ Biblioteca digital de recursos avanzados 📚
            </h3>
            <p className="leading-relaxed">
              👉 Refuerza lo aprendido con libros, guías y ejercicios interactivos. Este material complementario te ayudará a practicar por tu cuenta y dominar cada aspecto del inglés.
            </p>
            <p className="mt-2 text-gray-700 font-semibold">**(Valor: $120 USD)**</p>
          </div>

          {/* Bono 5 */}
          <div className="bg-white text-gray-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-2xl font-semibold text-red-600 mb-3">
              5️⃣ Plantillas listas para conversaciones reales 🗣️
            </h3>
            <p className="leading-relaxed">
              👉 Domina conversaciones del día a día. Incluye guiones y plantillas prácticas para situaciones reales como pedir comida, hacer reservas, reuniones de trabajo y más, para que te sientas seguro en cualquier contexto.
            </p>
            <p className="mt-2 text-gray-700 font-semibold">**(Valor: $150 USD)**</p>
          </div>

          {/* Bono 6 */}
          <div className="bg-white text-gray-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-2xl font-semibold text-red-600 mb-3">
              6️⃣ Acceso de por vida a todas las actualizaciones 🚀
            </h3>
            <p className="leading-relaxed">
              👉 Tu curso crecerá contigo. Obtén sin costo adicional cualquier nueva lección, herramienta o material que agreguemos al curso.
            </p>
            <p className="mt-2 text-gray-700 font-semibold">**(Valor: $130 USD)**</p>
          </div>

          {/* Bono 7 */}
          <div className="bg-white text-gray-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-2xl font-semibold text-red-600 mb-3">
              7️⃣ Masterclass: Pronunciación Nativa 💬
            </h3>
            <p className="leading-relaxed">
              👉 Haz que tu inglés suene auténtico y natural. Aprende las claves de la pronunciación, entonación y ritmo con ejercicios prácticos y técnicas que te harán sonar como un hablante nativo.
            </p>
            <p className="mt-2 text-gray-700 font-semibold">**(Valor: $150 USD)**</p>
          </div>
        </div>

        {/* Llamado a la acción */}
        <div className="text-center mt-10">
          <p className="text-lg text-yellow-300 font-bold">
            🎉 BONOS TOTALMENTE GRATIS (Valor total: $1,000 USD)
          </p>
          <p className="mt-2">
            ¡Todo este contenido adicional es tuyo sin costo extra al inscribirte <span className="font-semibold">HOY</span>!
          </p>
          <p className="mt-2 text-yellow-200">
            🔐 Esta oferta es por tiempo limitado. No pierdas la oportunidad de recibir todo este valor por una fracción de su precio.
          </p>
        </div>
      </div>
      <Cta />
    </section>
  );
};

export default Bonus;

