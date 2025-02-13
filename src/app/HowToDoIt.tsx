import React from "react";
import { motion } from "framer-motion";

const steps = [
  { id: "1️⃣", title: "Aprende como un niño", description: "Absorbe el inglés de forma intuitiva y sin reglas aburridas." },
  { id: "2️⃣", title: "Sin tiempo extra", description: "Lecciones cortas que se integran a tu rutina diaria." },
  { id: "3️⃣", title: "Pierde el miedo", description: "Practica con simulacros y gana confianza en poco tiempo." },
  { id: "4️⃣", title: "Resultados rápidos", description: "En semanas notarás progreso con nuestro reto de 21 días." },
  { id: "5️⃣", title: "IA que te ayuda", description: "Usamos tecnología para potenciar tu aprendizaje." },
  { id: "🌟", title: "Somos diferentes", description: "Enfoque dinámico, contenido real y comunidad global." },
];

const HowToDoIt = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-6 md:px-16 mt-4 rounded-2xl shadow-lg">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
        >
          💡 <span className="text-yellow-400">La clave para avanzar</span>
        </motion.h2>

        <div className="relative border-l-4 border-yellow-400 pl-6 space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              <div className="absolute -left-6 top-1 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-gray-900 font-bold shadow-lg">
                {step.id}
              </div>
              <h3 className="text-xl font-semibold text-yellow-400">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToDoIt;
