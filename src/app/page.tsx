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
      }, 120000);

      return () => clearInterval(timer); // Limpiamos el temporizador cuando el componente se desmonta o showCountdown cambia
    }
  }, [showCountdown]);

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-2">


<div className="bg-gradient-to-br from-orange-300 via-yellow-300 to-amber-300 text-gray-900 text-center py-10 px-6 mb-12 rounded-xl shadow-2xl border border-orange-300">
  <h1 className="text-4xl sm:text-4xl md:text-6xl font-bold leading-snug">
    <span className="block text-4xl sm:text-8xl md:text-9xl font-extrabold animate-pulse text-gray-800 drop-shadow-md">
      ¡PIENSA, HABLA Y TRIUNFA EN INGLÉS!
    </span>
    <span className="text-2xl sm:text-xl md:text-2xl font-medium mt-4 block text-gray-800">
      Vive una experiencia <span className="text-yellow-600 font-bold">100% inmersiva</span>, diseñada para los que buscan el éxito real. Habla como un nativo, piensa como un experto y conquista el inglés.
    </span>
  </h1>

  <div className="w-full aspect-video mx-auto rounded-lg shadow-lg overflow-hidden mt-8 bg-yellow-200">
    <VideoPlayer />
  </div>
</div>

<section className="text-center max-w-4xl mx-auto px-2 mb-5">
  <h1 className="text-xl md:text-6xl font-bold text-gray-900 leading-snug mb-4">
    💡 El método elegido por empresarios y líderes globales <br /><br />
    🚀 <span className="text-teal-600 underline">Acelera tu aprendizaje 8 veces más</span> con estrategias diseñadas para el éxito.
  </h1>

  <div className="bg-yellow-500 text-black text-center py-6 px-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
    <h3 className="text-xl md:text-3xl font-bold">
      🎁 Mira el video y obtén acceso a <span className="underline">un beneficio exclusivo</span>.
    </h3>
    <p className="mt-2 text-sm md:text-base">
      Esta es tu oportunidad de transformar tu nivel de inglés y alcanzar metas profesionales únicas.
    </p>
  </div>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-1 mt-16">
    <div className="bg-gradient-to-br from-blue-600 to-teal-600 text-white p-4 shadow-lg flex flex-col items-center justify-center rounded-lg transform animate-slide-up delay-100 duration-500">
      <span className="text-4xl mb-2">🇪🇸</span>
      <p className="text-sm md:text-base font-semibold">Aprende como dominaste el español, de forma intuitiva.</p>
    </div>
    <div className="bg-gradient-to-br from-blue-600 to-teal-600 text-white p-4 shadow-lg flex flex-col items-center justify-center rounded-lg transform animate-slide-up delay-200 duration-500">
      <span className="text-4xl mb-2">🌍</span>
      <p className="text-sm md:text-base font-semibold">Accede a prácticas inmersivas con escenarios reales.</p>
    </div>
    <div className="bg-gradient-to-br from-blue-600 to-teal-600 text-white p-4 shadow-lg flex flex-col items-center justify-center rounded-lg transform animate-slide-up delay-300 duration-500">
      <span className="text-4xl mb-2">🤖</span>
      <p className="text-sm md:text-base font-semibold">Tecnología avanzada para un aprendizaje personalizado.</p>
    </div>
    <div className="bg-gradient-to-br from-blue-600 to-teal-600 text-white p-4 shadow-lg flex flex-col items-center justify-center rounded-lg transform animate-slide-up delay-400 duration-500">
      <span className="text-4xl mb-2">⏱️</span>
      <p className="text-sm md:text-base font-semibold">Resultados visibles en tiempo récord.</p>
    </div>
  </div>
</section>


      {showMessage && (
        <div className="message-container mt-0 bg-white shadow-lg rounded-lg text-center">
          {/* <PromotionBanner/> */}
          <FloatingUrgency/>
          <Cta />
  <UrgencyTag />
  <SalesPsychologyComponent />
  <Monica />  
  <Platform/>
  <Testimonios />
  <Cta />
  <UrgencyTag />
  <Dolores />
  <HowToDoIt />
  <Cta />
  <UrgencyTag />
  <GuaranteeBanner />
  <FAQ />
  <div className="mt-3 mb-3">
    <Image
      src={M1}
      alt="Profesora Mónica - Curso de Inglés"
      className="w-full rounded-xl"
    />
  </div>
  <Bonus />
          

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
