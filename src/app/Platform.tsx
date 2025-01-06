import React from "react";
import Image from "next/image";
import Hp from './images/Hp.webp';

const Platform: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white py-12 px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Título */}
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
          Descubre nuestra plataforma y la experiencia única de aprender inglés
        </h2>
        <p className="text-lg md:text-xl font-light mb-8">
          Aprende con herramientas innovadoras, un diseño intuitivo y todo lo
          que necesitas para alcanzar tus metas en inglés.
        </p>

        {/* Video de YouTube Short */}
        <div className="relative max-w-lg mx-auto mb-8">
          <div className="w-full" style={{ paddingBottom: "177.78%" /* Aspecto 9:16 */ }}>
            <iframe
              src="https://www.youtube.com/embed/35tN7vjLwkY"
              title="YouTube Short"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full rounded-3xl"
            ></iframe>
          </div>
        </div>

        {/* Imagen de la plataforma */}
        <div className="relative max-w-4xl mx-auto p-4 bg-white rounded-3xl shadow-2xl">
          <div className="relative overflow-hidden rounded-3xl">
            <Image
              src={Hp}
              alt="Vista previa de nuestra plataforma de aprendizaje"
              layout="responsive"
              width={1920} // Proporción 16:9
              height={1080}
              className="rounded-3xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platform;
