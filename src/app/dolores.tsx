import React from "react";

const Dolores = () => {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white py-16 px-6 md:px-24">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-black mb-8 text-gray-900 tracking-tight leading-tight">
          ¡El Inglés No Tiene Por Qué Ser Tu Obstáculo!
        </h1>
        <p className="text-lg md:text-2xl text-gray-700 mb-12">
          ¿Te has sentido atrapado en estos problemas? ¡Es hora de liberarte!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[ 
            { 
              title: "¿Atrapado en el mismo nivel?", 
              text: "¿Llevas años intentando hablar inglés y sigues sin poder mantener una conversación simple? ¡Es frustrante, pero no imposible de cambiar!" 
            },
            { 
              title: "¿Miedo al inglés?", 
              text: "¿El solo pensar en hablar inglés te llena de ansiedad? 🫣 ¡Rompe esa barrera ahora y empieza a hablar con confianza!" 
            },
            { 
              title: "¿Oportunidades desperdiciadas?", 
              text: "¿Te has quedado atrás por no dominar el inglés? ¡Es momento de dejar de perder oportunidades laborales y personales!" 
            },
            { 
              title: "¿El inglés te limita al viajar?", 
              text: "¿Te da miedo viajar por no entender a los demás? 🌍 El inglés es la llave para explorar el mundo sin límites." 
            },
            { 
              title: "¿No sabes por dónde empezar?", 
              text: "¿Te sientes perdido en el mar de recursos de inglés? Te damos un camino claro y directo para aprender rápidamente." 
            },
            { 
              title: "¿Tu esfuerzo no da resultados?", 
              text: "¿Estudias, estudias y estudias pero sigues sin ver avances? ¡Es hora de cambiar tu enfoque por uno rápido y efectivo!" 
            }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-indigo-600 to-teal-500 p-6 rounded-lg shadow-lg text-left transform hover:scale-105 transition-transform"
            >
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
                <span className="mr-2">⚡</span>{item.title}
              </h2>
              <p className="text-white text-base">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dolores;
