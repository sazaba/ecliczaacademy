"use client"; // Marca este archivo como componente de cliente

import React, { useEffect, useState, useRef } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import VideoPlayer from './VideoPlayer'; 
import Dolores from './dolores';
import Testimonios from './testimonio';


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
import FAQSection from './FAQSection';
import HowToDoIt from './HowToDoIt';


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
    }, 2000);
  
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
    <main className="max-w-4xl mx-auto min-h-screen bg-gray-50 flex flex-col items-center justify-center p-2">


<div className="bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white text-center py-12 px-6 rounded-xl shadow-lg shadow-black max-w-4xl mx-auto">
  {/* Título Impactante */}
  <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight">
    <span className="block text-5xl sm:text-7xl md:text-8xl font-extrabold text-yellow-400 animate-pulse drop-shadow-lg">
     Domina el Inglés de Una Vez por Todas <br/>🔥
    </span>
    <span className="text-lg sm:text-xl md:text-2xl font-medium mt-4 block text-gray-300">
      Vive una experiencia <span className="text-yellow-400 font-bold">100% inmersiva</span> para hablar como un nativo y pensar como un experto.
    </span>
  </h1>

  {/* Video Destacado */}
  <div className="w-full max-w-5xl mx-auto aspect-video rounded-lg shadow-lg overflow-hidden mt-10 bg-gray-700 border-2 border-gray-600 hover:scale-105 transition-transform duration-300">
  <VideoPlayer />
</div>


  {/* Subtítulo Destacado */}
  <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-white leading-relaxed mt-8">
    💡 El método que utilizan empresarios y líderes globales  
    <br />
    🚀 <span className="text-yellow-400 underline">Acelera tu aprendizaje 8 veces más</span> con estrategias probadas y resultados garantizados.
  </h2>
</div>

    
    
    
    <section className="text-center max-w-4xl mx-auto px-2 mb-5">
    
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-1 mt-6">
      <div className="bg-gradient-to-br from-blue-600 to-teal-600 text-white p-4 shadow-md shadow-black flex flex-col items-center justify-center rounded-lg transform animate-slide-up delay-100 duration-500">
        <span className="text-4xl mb-2">🇪🇸</span>
        <p className="text-sm md:text-base font-semibold">Aprende como dominaste el español, de forma intuitiva.</p>
      </div>
      <div className="bg-gradient-to-br from-blue-600 to-teal-600 text-white p-4 shadow-md shadow-black flex flex-col items-center justify-center rounded-lg transform animate-slide-up delay-200 duration-500">
        <span className="text-4xl mb-2">🌍</span>
        <p className="text-sm md:text-base font-semibold">Accede a prácticas inmersivas con escenarios reales.</p>
      </div>
      <div className="bg-gradient-to-br from-blue-600 to-teal-600 text-white p-4 shadow-md shadow-black flex flex-col items-center justify-center rounded-lg transform animate-slide-up delay-300 duration-500">
        <span className="text-4xl mb-2">🤖</span>
        <p className="text-sm md:text-base font-semibold">Tecnología avanzada para un aprendizaje personalizado.</p>
      </div>
      <div className="bg-gradient-to-br from-blue-600 to-teal-600 text-white p-4 shadow-md shadow-black flex flex-col items-center justify-center rounded-lg transform animate-slide-up delay-400 duration-500">
        <span className="text-4xl mb-2">⏱️</span>
        <p className="text-sm md:text-base font-semibold">Resultados visibles en tiempo récord.</p>
      </div>
    </div>
    
    </section>


      {showMessage && (
        <div className="message-container mt-0 bg-white shadow-lg rounded-lg text-center">

          <Cta text="¡Quiero Aprender Inglés!" />
          <FloatingUrgency/>

          <Testimonios />
          <Cta text="Quiero ser el próximo" />

          <SalesPsychologyComponent />

          <Dolores />
 

          <HowToDoIt />
          <Cta text="¡Comienza hoy mismo!" />
          <UrgencyTag />

          <Platform/>

          <FAQ />

          <FAQSection/>
          <Cta text="¡Última oportunidad!"/>
          <UrgencyTag />

          <GuaranteeBanner />
          <Cta text= "Prueba sin riesgo"/>
          <UrgencyTag />

          <Bonus />

          <Monica />  
          <Cta text= "Aprende con Mónica"/>
          <UrgencyTag />
          

          
  
  <div className="mt-3 mb-3">
    <Image
      src={M1}
      alt="Profesora Mónica - Curso de Inglés"
      className="w-full rounded-xl"
    />
  </div>
  
          

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
