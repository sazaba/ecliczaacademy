import Image from "next/image";
import React from "react";
import M5 from './images/M5.webp'

const Monica = () => {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white py-1 px-2 md:px-24">
      <div className="max-w-full mx-auto text-center">
        <h1 className="text-5xl font-black mb-10 text-gray-900 tracking-tight leading-tight">
          ¡Conoce a Mónica, <br/> la creadora del Metodo Eclicza 2.0!
        </h1>
        <div className="mt-3 mb-3">
            <Image
              src={M5} // Cambia esta ruta por la de tu imagen
              alt="Persona que dio un testimonio"
              className="w-full rounded-xl"
            />
          </div>
        <p className="text-lg md:text-2xl text-gray-700 mb-12">
          Transformando la manera de aprender inglés con un método inmersivo que garantiza resultados 8 veces más rápidos.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-500 to-teal-500 p-6 rounded-lg shadow-lg text-left transform hover:scale-105 transition-transform">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
              <span className="mr-2">🌎</span> Experiencia Internacional
            </h2>
            <p className="text-white text-base">
              Con más de 8 años de experiencia enseñando inglés, he viajado por países como Australia, Singapur, Estados Unidos, Canadá, Nueva Zelanda, Japón, y Alemania, aprendiendo y compartiendo culturas mientras perfecciono mi metodología.
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-6 rounded-lg shadow-lg text-left transform hover:scale-105 transition-transform">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
              <span className="mr-2">🎓</span> Trayectoria Académica
            </h2>
            <p className="text-white text-base">
              He enseñado en prestigiosas universidades y liderado talleres globales, ayudando a cientos de estudiantes a dominar el inglés de manera efectiva y práctica.
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-yellow-500 p-6 rounded-lg shadow-lg text-left transform hover:scale-105 transition-transform">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
              <span className="mr-2">🚀</span> Método Inmersivo
            </h2>
            <p className="text-white text-base">
              Mi método, Eclicza 2.0, es totalmente inmersivo y está diseñado para garantizar resultados 8 veces más rápidos que los métodos tradicionales.
            </p>
          </div>
          <div className="bg-gradient-to-br from-red-500 to-orange-500 p-6 rounded-lg shadow-lg text-left transform hover:scale-105 transition-transform">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
              <span className="mr-2">⭐</span> Impacto Global
            </h2>
            <p className="text-white text-base">
              Más de cientos de estudiantes han transformado sus vidas gracias a mi enfoque único, logrando dominar el inglés y abrir puertas a nuevas oportunidades.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Monica;
