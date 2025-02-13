import React from "react";

const Dolores = () => {
  const problemas = [
    { title: "Estancado 🔄", text: "Años estudiando y aún no hablas. ¿Hasta cuándo?" },
    { title: "Pánico al inglés 😨", text: "El miedo te frena. Rompe la barrera YA." },
    { title: "Oportunidades perdidas 🚪", text: "Trabajo, viajes, conexiones… ¿Cuánto más vas a perder?" },
    { title: "Viajar te asusta ✈️", text: "El inglés abre el mundo. No te quedes atrás." },
    { title: "Demasiada info 🤯", text: "No necesitas más cursos. Necesitas un método real." },
    { title: "Esfuerzo sin resultados ❌", text: "Mucho estudio, cero avances. Es hora de cambiar el juego." }
  ];

  return (
    <section className="bg-gradient-to-b from-gray-100 to-white py-16 px-6 md:px-24 text-center">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-black mb-8 text-gray-900 leading-tight">
          El Inglés NO es el Problema. Es el Método. 🚀
        </h1>
        <p className="text-lg md:text-2xl text-gray-700 mb-12">
          Si te identificas con esto, es hora de hacer algo distinto.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {problemas.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-indigo-600 to-teal-500 p-6 rounded-lg shadow-lg text-left hover:scale-105 transition-transform"
            >
              <h2 className="text-xl font-semibold text-white mb-3">{item.title}</h2>
              <p className="text-white">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dolores;

