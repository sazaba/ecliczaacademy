import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "⏱️ ¿Cuánto tiempo tomará aprender inglés?",
    answer: (
      <>
        <p className="text-gray-300">
          Todo depende de tu dedicación. Según nuestros estudiantes, estos son los tiempos promedio:
        </p>
        <ul className="list-disc list-inside text-gray-400 mt-4 space-y-2">
          <li>🔥 En <b>3 meses</b> dedicando 2 horas al día.</li>
          <li>🚀 En <b>6 meses</b> estudiando 1 hora diaria.</li>
          <li>💡 En <b>12 meses</b> con solo 30 minutos diarios.</li>
          <li>🌱 En <b>24 meses</b> con apenas 15 minutos al día.</li>
        </ul>
      </>
    ),
  },
  {
    question: "🤔 ¿Qué nivel necesito para empezar?",
    answer: (
      <p className="text-gray-300">
        ¡Ninguno! Este Curso está diseñado para **principiantes absolutos**. No necesitas experiencia
        previa con el inglés. Si ya sabes algo, genial, tendrás una ventaja, pero no es un requisito.
      </p>
    ),
  },
  {
    question: "🌟 ¿Qué nivel alcanzaré al finalizar?",
    answer: (
      <>
        <p className="text-gray-300">
          Al completar el programa, tendrás una{" "}
          <span className="text-yellow-400 font-semibold">fluidez conversacional</span> que te permitirá:
        </p>
        <ul className="list-disc list-inside text-gray-400 mt-4 space-y-2">
          <li>✅ Comprender inglés cotidiano sin esfuerzo ni traducciones mentales.</li>
          <li>📖 Leer y entender textos fácilmente.</li>
          <li>🗣️ Escribir y tener conversaciones fluidas sin miedo a cometer errores.</li>
        </ul>
      </>
    ),
  },
];

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-900 text-white py-20 px-6 md:px-16 rounded-2xl shadow-black shadow-lg">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-12 leading-tight"
        >
          ❓ Preguntas <span className="text-yellow-400">Frecuentes</span>
        </motion.h2>
      </div>

      {/* Preguntas en formato de acordeón */}
      <div className="max-w-4xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-gray-800 rounded-xl shadow-lg overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between p-6 text-left text-lg font-bold text-yellow-400 hover:bg-gray-700 transition"
            >
              {faq.question}
              {openIndex === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="px-6 pb-6 text-gray-300"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
