import React from "react";

const HowToDoIt = () => {
  return (
    <section className="bg-white text-gray-900 py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Título Principal */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-600 text-center mb-8">
          Aprende inglés con métodos rápidos e inmersivos.
        </h2>
        <p className="text-lg md:text-xl text-gray-700 text-center mb-10">
          Entra en un mundo de aprendizaje sin reglas complicadas ni estrés. ¡Habla inglés como un nativo y en tiempo récord!
        </p>

        {/* Contenido de los pasos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Paso 1 */}
          <div className="bg-blue-50 p-8 rounded-2xl shadow-lg transform transition-all duration-500 ease-in-out opacity-0 animate-fade-in">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Aprende como los nativos</h3>
            <p className="text-gray-800">
              Sin reglas complicadas. Aprende inglés de manera natural, como si estuvieras viviendo en un país de habla inglesa.
            </p>
          </div>

          {/* Paso 2 */}
          <div className="bg-blue-50 p-8 rounded-2xl shadow-lg transform transition-all duration-500 ease-in-out opacity-0 animate-fade-in">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">A tu ritmo, sin estrés</h3>
            <p className="text-gray-800">
              Con lecciones breves que puedes incorporar en tu rutina diaria, aprende inglés mientras haces lo que te gusta.
            </p>
          </div>

          {/* Paso 3 */}
          <div className="bg-blue-50 p-8 rounded-2xl shadow-lg transform transition-all duration-500 ease-in-out opacity-0 animate-fade-in">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Habla desde el primer día</h3>
            <p className="text-gray-800">
              Practica conversaciones reales desde el principio. Sin miedo y con confianza, ¡prepárate para comunicarte!
            </p>
          </div>

          {/* Paso 4 */}
          <div className="bg-blue-50 p-8 rounded-2xl shadow-lg transform transition-all duration-500 ease-in-out opacity-0 animate-fade-in">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Resultados rápidos</h3>
            <p className="text-gray-800">
              En solo 21 días empezarás a ver avances con nuestro "English Booster Challenge". ¡Resultados rápidos y efectivos!
            </p>
          </div>

          {/* Paso 5 */}
          <div className="bg-blue-50 p-8 rounded-2xl shadow-lg transform transition-all duration-500 ease-in-out opacity-0 animate-fade-in">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Tecnología de vanguardia</h3>
            <p className="text-gray-800">
              Utilizamos herramientas innovadoras como inteligencia artificial para personalizar y optimizar tu aprendizaje.
            </p>
          </div>

          {/* Únicos */}
          <div className="bg-blue-50 p-8 rounded-2xl shadow-lg transform transition-all duration-500 ease-in-out opacity-0 animate-fade-in">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">¿Por qué elegirnos?</h3>
            <p className="text-gray-800">
              Somos tu guía completa para hablar inglés. Con un enfoque inmersivo, rápido y práctico, ¡te damos las herramientas para dominar el idioma!
            </p>
          </div>
        </div>
      </div>

      {/* Estilos de animación */}
      <style jsx>{`
        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default HowToDoIt;
