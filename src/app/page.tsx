"use client"; // Marca este archivo como componente de cliente

import React, { useEffect, useState, useRef } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import VideoPlayer from './VideoPlayer'; 
import Dolores from './dolores';
import Testimonios from './testimonio';
import HowToDoIt from './HowToDoIt';

import Bonus from './Bonus';
import Cta from './Cta';
import Image from 'next/image';
import M1 from "./images/M1.webp"
import Platform from './Platform';
import GuaranteeBanner from './GuaranteeBanner';
import FloatingUrgency from './FloatingUrgency';
import FAQ from './FAQ';
import Monica from './Monica';
import UrgencyTag from './UrgencyTag';
import SalesPsychologyComponent from './SalesPsychologyComponent';


export default function Home() {
  
  const [showMessage, setShowMessage] = useState(false);
  const [showCountdown, setShowCountdown] = useState(false);
  const deadlineRef = useRef<number | null>(null);
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });


  // Calculamos el tiempo restante en base a la fecha límite
  const calculateTimeLeft = () => {
    if (!deadlineRef.current) return { hours: 0, minutes: 0, seconds: 0 };
    const now = new Date().getTime();
    const timeLeft = deadlineRef.current - now;

    if (timeLeft <= 0) {
      return { hours: 0, minutes: 0, seconds: 0 };
    }

    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    return { hours, minutes, seconds };
  };


  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
      setShowCountdown(true);
      deadlineRef.current = new Date().getTime() + 24 * 60 * 60 * 1000; // Establece la fecha límite (24 horas)
    }, 12000);
  
    return () => clearTimeout(timer);
  }, []);

  // Iniciar el temporizador solo cuando se muestre la cuenta regresiva
  useEffect(() => {
    if (showCountdown) {
      const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);

      return () => clearInterval(timer); // Limpiamos el temporizador cuando el componente se desmonta o showCountdown cambia
    }
  }, [showCountdown]);

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-2">


<div className="bg-gradient-to-br from-orange-200 via-yellow-200 to-amber-200 text-gray-900 text-center py-10 px-4 mb-12 rounded-xl shadow-2xl border border-orange-200">
  <h1 className="text-4xl sm:text-4xl md:text-6xl font-bold leading-snug">
    <span className="block text-4xl sm:text-8xl md:text-9xl font-extrabold animate-pulse text-gray-800 drop-shadow-md">
    ¡PIENSA, HABLA Y VIVE EN INGLÉS!
    </span>
    <span className="text-2xl sm:text-xl md:text-2xl font-medium mt-4 block text-gray-800">
      Aprenderás rápido con <span className="text-yellow-500 font-bold">métodos inmersivos</span>.  
      Vivirás el idioma, hablarás con <span className="text-cyan-500 font-bold">nativos</span>, logrando resultados de verdad.
    </span>
  </h1>
  
  <div className="w-full aspect-video mx-auto rounded-lg shadow-lg overflow-hidden mt-8 bg-yellow-100">
    <VideoPlayer />
  </div>
</div>





<section className="text-center max-w-4xl mx-auto px-2 mb-5">    
  <h1 className="text-xl md:text-6xl font-bold text-gray-900 leading-snug mb-4">
    💡Este es el Metodo que las celebridades estan utilizando <br /><br />
    🚀 <span className="text-teal-500 underline"></span> Aprenderas 8 veces más rápido con la metodologia inmersiva.
  </h1>

        <div className="bg-yellow-400 text-black text-center  py-6 px-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl md:text-3xl font-bold">
            🎁 Al final del video, descubre cómo obtener <span className="underline">tu sorpresa exclusiva</span>.
          </h3>
          <p className="mt-2 text-sm md:text-base">
            Aprovecha esta oportunidad única para empezar tu camino hacia el éxito.
          </p>
        </div>

      
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1 px-1 mt-16">
  <div className="bg-gradient-to-br from-blue-500 to-teal-500 text-white p-4 shadow-lg flex flex-col items-center justify-center rounded-lg transform animate-slide-up delay-100 duration-500">
    <span className="text-3xl mb-2">🇪🇸</span>
    <p className="text-sm md:text-base font-semibold">Aprende rápido como con el español.</p>
  </div>
  <div className="bg-gradient-to-br from-blue-500 to-teal-500 text-white p-4 shadow-lg flex flex-col items-center justify-center rounded-lg transform animate-slide-up delay-200 duration-500">
    <span className="text-3xl mb-2">🌍</span>
    <p className="text-sm md:text-base font-semibold">Práctica inmersiva en escenarios reales.</p>
  </div>
  <div className="bg-gradient-to-br from-blue-500 to-teal-500 text-white p-4 shadow-lg flex flex-col items-center justify-center rounded-lg transform animate-slide-up delay-300 duration-500">
    <span className="text-3xl mb-2">🤖</span>
    <p className="text-sm md:text-base font-semibold">IA que acelera tu aprendizaje.</p>
  </div>
  <div className="bg-gradient-to-br from-blue-500 to-teal-500 text-white p-4 shadow-lg flex flex-col items-center justify-center rounded-lg transform animate-slide-up delay-400 duration-500">
    <span className="text-3xl mb-2">⏱️</span>
    <p className="text-sm md:text-base font-semibold">Habla inglés en tiempo récord.</p>
  </div>
</div>


<style>
{`
  @keyframes zoom {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
  }

  @keyframes slide-up {
    0% { transform: translateY(20px); opacity: 0; }
    50% { transform: translateY(-10px); opacity: 1; }
    100% { transform: translateY(0); }
  }

  @keyframes rotate {
    0% { transform: rotate(0deg); }
    50% { transform: rotate(10deg); }
    100% { transform: rotate(0deg); }
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }

  .animate-zoom {
    animation: zoom 2s infinite ease-in-out;
  }

  .animate-slide-up {
    animation: slide-up 2.5s infinite ease-in-out;
  }

  .animate-rotate {
    animation: rotate 2.5s infinite ease-in-out;
  }

  .animate-float {
    animation: float 3s infinite ease-in-out;
  }
`}
</style>


      </section>

      {showMessage && (
        <div className="message-container mt-0 bg-white shadow-lg rounded-lg text-center">
          {/* <PromotionBanner/> */}
          <Cta />
          <FloatingUrgency/>
          <Testimonios/>
          <SalesPsychologyComponent/>
          <Cta />
          <Dolores/>
          <Cta />
          <UrgencyTag/>
          <Monica/>
          <Cta />
          <UrgencyTag/>
          <HowToDoIt/>
          <Cta />
          <UrgencyTag/>
          <div className="mt-3 mb-3">
            <Image
              src={M1} // Cambia esta ruta por la de tu imagen
              alt="Persona que dio un testimonio"
              className="w-full rounded-xl"
            />
          </div>
          <Platform/>
          
          <FAQ/>
          <Cta />
          <UrgencyTag/>
          <GuaranteeBanner/>
          <Bonus/>
          

          {showCountdown && (
            <div className="hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white py-2 px-4 rounded-full shadow-lg text-center text-xs z-50 animate-pulse">
              ⏳ ¡Oferta Especial! Tiempo restante:{" "}
              <span className="font-bold">
                {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
              </span>
            </div>
          )}
        </div>
      )}
    </main>
  );
}
