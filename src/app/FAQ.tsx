import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const FAQ = () => {
  const faqs = [
    {
      title: "🌎 Conéctate con nativos",
      description:
        "Te conectamos con hablantes nativos para que practiques conversaciones reales.",
    },
    {
      title: "🤖 IA para tu aprendizaje",
      description:
        "Usamos inteligencia artificial para crear escenarios personalizados.",
    },
    {
      title: "🌱 Aprende aplicando",
      description: "Frases útiles desde el inicio, sin teorías complicadas.",
    },
    {
      title: "🎯 Domina las 4 habilidades",
      description:
        "Te enseñamos a leer, escribir, escuchar y hablar con confianza.",
    },
    {
      title: "🎬 Aprende con series",
      description: "Descubre vocabulario mientras ves contenido que te encanta.",
    },
  ];

  return (
    <div className="relative w-full flex justify-center px-2 py-16 bg-gradient-to-br from-blue-900 via-gray-900 to-black ">
      <div className="max-w-3xl w-full bg-white/10 backdrop-blur-lg rounded-3xl shadow-xl py-5 md:p-16 border border-white/20">
        {/* Título */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-2xl font-extrabold text-white drop-shadow-md">
            ¿Qué aprenderé en este Curso? 📚
          </h2>
        </div>
        <div className="flex justify-center my-6">
          <iframe
            className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
            width="75%"
            height="450"
            src="https://www.youtube.com/embed/vSBtHOMGmR0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Grid para pantallas grandes */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/10 text-white p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-white/20 backdrop-blur-sm"
            >
              <p className="text-lg font-semibold mb-2">{faq.title}</p>
              <p className="text-base opacity-80">{faq.description}</p>
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
                <div className="bg-white/10 text-white p-6 rounded-xl shadow-lg">
                  <p className="text-lg font-semibold mb-2">{faq.title}</p>
                  <p className="text-base opacity-80">{faq.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="custom-pagination mt-4 flex justify-center"></div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
