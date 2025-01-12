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
import M5 from "./images/M5.webp"
import M1 from "./images/M1.webp"
import Platform from './Platform';
import GuaranteeBanner from './GuaranteeBanner';
import FloatingUrgency from './FloatingUrgency';
import FAQ from './FAQ';
import PromotionBanner from './PromotionBanner';
import UrgencyTag from './UrgencyTag';


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
    }, 20000);
  
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
      
      <div className="bg-gradient-to-br from-red-600 to-black text-white text-center py-8 px-2 mb-10 rounded-lg shadow-lg">
      <h2 className="text-2xl md:text-5xl font-extrabold uppercase tracking-wide">
    ¿Hasta cuándo <span className="text-yellow-400">seguirás atrapado</span> en métodos que no funcionan?
</h2>

</div>

<section className="text-center max-w-4xl mx-auto px-6 mb-12">
  <h1 className="text-2xl md:text-6xl font-bold text-gray-900 leading-snug mb-6">
    ¡Aprender inglés puede ser rápido, divertido y efectivo! <br />
    <span className="text-white bg-gradient-to-r from-red-600 to-black px-2 rounded-lg shadow-md text-sm">
      Métodos aburridos = Resultados lentos
    </span> <br/>
    Descubre nuestro <span className="text-red-500 underline">método inmersivo</span> con técnicas innovadoras que harán que avances en semanas, no años.
  </h1>





        <div className="w-full aspect-video mx-auto rounded-md shadow-md overflow-hidden mb-3">
          <VideoPlayer />
        </div>

        <div className="bg-yellow-400 text-black text-center  py-6 px-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl md:text-3xl font-bold">
            🎁 Al final del video, descubre cómo obtener <span className="underline">tu sorpresa exclusiva</span>.
          </h3>
          <p className="mt-2 text-sm md:text-base">
            Aprovecha esta oportunidad única para empezar tu camino hacia el éxito.
          </p>
        </div>

      
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1 px-2 mt-16">
          <div className="bg-gradient-to-br from-blue-500 to-teal-500 text-white p-4 shadow-lg flex flex-col items-center justify-center rounded-lg transform animate-bounce delay-100">
            <span className="text-3xl mb-2">🇪🇸</span>
            <p className="text-sm md:text-base font-semibold">Aprende rápido como con el español.</p>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-teal-500 text-white p-4 shadow-lg flex flex-col items-center justify-center rounded-lg transform animate-bounce delay-300">
            <span className="text-3xl mb-2">🌍</span>
            <p className="text-sm md:text-base font-semibold">Práctica inmersiva en escenarios reales.</p>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-teal-500 text-white p-4 shadow-lg flex flex-col items-center justify-center rounded-lg transform animate-bounce delay-500">
            <span className="text-3xl mb-2">🤖</span>
            <p className="text-sm md:text-base font-semibold">IA que acelera tu aprendizaje.</p>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-teal-500 text-white p-4 shadow-lg flex flex-col items-center justify-center rounded-lg transform animate-bounce delay-700">
            <span className="text-3xl mb-2">⏱️</span>
            <p className="text-sm md:text-base font-semibold">Habla inglés en tiempo récord.</p>
          </div>
        </div>

      </section>

      {showMessage && (
        <div className="message-container mt-0 bg-white shadow-lg rounded-lg text-center">
          <PromotionBanner/>
          <Cta />
          <FloatingUrgency/>
          <Testimonios/>
          <Cta />
          <UrgencyTag/>
          <div className="mt-3">
            <Image
              src={M5} // Cambia esta ruta por la de tu imagen
              alt="Persona que dio un testimonio"
              className="w-full rounded-xl"
            />
          </div>
          <Dolores/>
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
