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
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-2">


<div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white text-center py-10 px-6 rounded-xl shadow-black shadow-md  ">
  <h1 className="text-4xl sm:text-4xl md:text-6xl font-bold leading-snug">
    <span className="block text-4xl sm:text-8xl md:text-9xl font-extrabold animate-pulse text-yellow-400 drop-shadow-md">
      ¡PIENSA, HABLA Y GÁNALE AL INGLÉS!
    </span>
    <span className="text-2xl sm:text-xl md:text-2xl font-medium mt-4 block text-white">
      Vive una experiencia <span className="text-yellow-400 font-bold">100% inmersiva</span>, diseñada para los que buscan el éxito real. Habla como un nativo, piensa como un experto y conquista el inglés.
    </span>
  </h1>

  <div className="w-full aspect-video mx-auto rounded-lg shadow-lg overflow-hidden mt-8 bg-gray-700">
    <VideoPlayer />
  </div>

  <h1 className="text-xl md:text-6xl font-bold text-white leading-snug mb-4 mt-4">
    💡 El método elegido por empresarios y líderes globales <br /><br />
    🚀 <span className="text-yellow-400 underline">Acelera tu aprendizaje 8 veces más</span> con estrategias diseñadas para el éxito.
  </h1>
</div>



      {showMessage && (
        <div className="message-container mt-0 bg-white shadow-lg rounded-lg text-center">
          <Cta text="¡Empieza a aprender inglés ahora!" />
          <FloatingUrgency/>
          <Dolores />
          <HowToDoIt />
          <Cta text="¡Comienza hoy mismo!" />
  <UrgencyTag />
          <Testimonios />
          <Cta text="Únete ahora" />
  <UrgencyTag />
          <SalesPsychologyComponent />
          <Bonus />
          <GuaranteeBanner />
          <Cta text= "Prueba sin riesgo"/>
  <UrgencyTag />
          <Monica />  
          <Cta text= "Aprende con Mónica"/>
  <UrgencyTag />
          <Platform/>
          <FAQ />
          <Cta text="¡Última oportunidad!"/>
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
