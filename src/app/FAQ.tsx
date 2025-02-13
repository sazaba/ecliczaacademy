import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const FAQ = () => {
  const faqs = [
    {
      title: "🌎 Conéctate con nativos",
      description:
        "Te conectamos con hablantes nativos para que practiques conversaciones reales.",
      color: "bg-gradient-to-br from-yellow-400 to-orange-500",
    },
    {
      title: "🤖 IA para tu aprendizaje",
      description:
        "Usamos inteligencia artificial para crear escenarios personalizados.",
      color: "bg-gradient-to-br from-purple-500 to-indigo-600",
    },
    {
      title: "🌱 Aprende aplicando",
      description: "Frases útiles desde el inicio, sin teorías complicadas.",
      color: "bg-gradient-to-br from-green-400 to-emerald-500",
    },
    {
      title: "🎯 Domina las 4 habilidades",
      description: "Te enseñamos a leer, escribir, escuchar y hablar con confianza.",
      color: "bg-gradient-to-br from-blue-500 to-cyan-500",
    },
    {
      title: "🎬 Aprende con series",
      description: "Descubre vocabulario mientras ves contenido que te encanta.",
      color: "bg-gradient-to-br from-red-500 to-rose-500",
    },
  ];

  return (
    <div className="faq-wrapper relative isolate overflow-hidden w-full  py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
      <h2 className="block text-4xl sm:text-5xl md:text-6xl font-extrabold text-orange-500 drop-shadow-lg">
  ¿Qué aprenderé en este Curso? 📚
</h2>


      </div>

      {/* Grid para pantallas grandes */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-card ${faq.color} text-white rounded-xl p-5 shadow-lg transform transition-all duration-300 hover:scale-105 text-sm`}
          >
            <p className="text-lg font-semibold mb-2">{faq.title}</p>
            <p className="text-base">{faq.description}</p>
          </div>
        ))}
      </div>

      {/* Carrusel para pantallas pequeñas */}
      <div className="faq-slider md:hidden max-w-xs mx-auto mt-8 overflow-hidden">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={10}
          slidesPerView={1}
          autoplay={{ delay: 2500 }}
          pagination={{ el: ".custom-pagination", clickable: true }}
          className="w-full"
        >
          {faqs.map((faq, index) => (
            <SwiperSlide key={index}>
              <div
                className={`faq-card ${faq.color} text-white rounded-xl p-6 shadow-lg text-sm`}
              >
                <p className="text-lg font-semibold mb-2">{faq.title}</p>
                <p className="text-base">{faq.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Paginación más abajo */}
        <div className="custom-pagination mt-4 flex justify-center"></div>
      </div>
    </div>
  );
};

export default FAQ;
