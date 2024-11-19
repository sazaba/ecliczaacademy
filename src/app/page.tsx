"use client"; // Marca este archivo como componente de cliente

import React, { useEffect, useState, useRef } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import VideoPlayer from './VideoPlayer'; 

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

  const handleVideoEnd = () => {
    setShowMessage(true); 
    setShowCountdown(true);
    deadlineRef.current = new Date().getTime() + 24 * 60 * 60 * 1000; // Establece la fecha límite (24 horas)
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
      setShowCountdown(true);
    }, 10000);
  
    return () => clearTimeout(timer);
  }, []);
  // Iniciar el temporizador solo cuando se muestre la cuenta regresiva
  useEffect(() => {
    if (showCountdown) {
      const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
        handleVideoEnd(); // Actualizamos el tiempo restante
      }, 1000);

      return () => clearInterval(timer); // Limpiamos el temporizador cuando el componente se desmonta o showCountdown cambia
    }
  }, [showCountdown]);

  

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-2">
      <div className="w-full bg-red-600 text-white text-center py-4 px-3 mb-6 rounded-md shadow-lg animate-pulse hover:animate-bounce">
        <h2 className="text-xl md:text-3xl font-bold uppercase">
          ¡Descubre la Fórmula Infalible para Aprender Inglés!
        </h2>
        <p className="mt-2 text-base md:text-xl">
          Tan Efectiva que No Alcanzar tus Metas Será Casi Imposible
        </p>
      </div>
      

      <h1 className="text-2xl md:text-5xl font-extrabold text-center text-gray-800 mb-3 leading-6">
        <span className="text-orange-500">Domina</span> el Inglés en poco <span className="text-orange-500">Tiempo</span>, <span className="text-orange-500">Abre Oportunidades</span> para <span className="text-orange-500">Aumentar tu Salario</span>, <span className="text-orange-500">Viajar</span> y <span className="text-orange-500">Entender Todo</span> en Inglés <span className="text-orange-500">¡Sin Barreras!</span>
      </h1>

      <p className="text-xs md:text-lg text-center text-gray-700 mb-4 px-4">
        En los siguientes minutos, descubrirás cómo dominar el inglés rápidamente con una fórmula comprobada que te llevará a resultados sorprendentes, ¡sin estrés ni frustraciones! 👇👇
      </p>

      <div className="w-full max-w-4xl aspect-video">
      <VideoPlayer /> 
      </div>

      {showMessage && (
        <div className="message-container mt-6 bg-white p-6 shadow-lg rounded-lg text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            ¡Has descubierto la fórmula para aprender inglés de forma natural y efectiva!
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Con nuestro método nativo, basado en cómo aprendemos español, lograrás hablar inglés en solo unos meses, sin frustraciones. Además, con el apoyo de inteligencia artificial, acelerarás el proceso y desbloquearás nuevas oportunidades laborales, educativas y personales.
          </p>

          <div className="cta-buttons mb-6">
            <a
              href="/entrenamiento"
              className=" bg-orange-500 text-white py-3 px-2  rounded-full text-lg font-semibold transition transform animate-pulse duration-1000 hover:bg-orange-600"
            >
              QUIERO UNIRME AL ENTRENAMIENTO
            </a>
          </div>

          <p className="text-gray-700 text-lg mb-6">
            Si realmente quieres aumentar tu salario, viajar al extranjero y entender contenido en inglés sin barreras, este curso es para ti.
          </p>

          <div className="offer-details mb-6">
            <p className="font-semibold text-lg text-gray-800">
              Este es el último curso de inglés que necesitarás. Aprende de manera efectiva, rápida y sin complicaciones.
            </p>
            <p className="text-xl text-orange-500 font-bold mt-4">
              Oferta Especial: ¡Accede a este curso VITALICIO por solo 80 USD!
            </p>
            <p className="text-sm text-gray-600 mt-2">
              (Disponible solo por las próximas 24 horas)
            </p>
          </div>

          {showCountdown && (
            <div className="w-full max-w-md mx-auto bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-lg p-6 shadow-lg text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
                ¡Oferta Especial Solo por <span className="text-yellow-300">24 Horas</span>!
              </h2>
              <p className="text-lg mb-6">
                Aprovecha esta oportunidad única antes de que se termine el tiempo:
              </p>
              <div className="flex justify-center space-x-4 mb-4">
                <div className="bg-white text-gray-800 p-4 rounded-lg shadow-md">
                  <span className="text-3xl font-bold">{timeLeft.hours}</span>
                  <p className="text-sm">Horas</p>
                </div>
                <div className="bg-white text-gray-800 p-4 rounded-lg shadow-md">
                  <span className="text-3xl font-bold">{timeLeft.minutes}</span>
                  <p className="text-sm">Minutos</p>
                </div>
                <div className="bg-white text-gray-800 p-4 rounded-lg shadow-md">
                  <span className="text-3xl font-bold">{timeLeft.seconds}</span>
                  <p className="text-sm">Segundos</p>
                </div>
              </div>
              <p className="text-sm text-yellow-200">
                ¡No dejes pasar esta oportunidad de transformar tu inglés y abrir nuevas puertas!
              </p>
            </div>
          )}

<div className="extra-benefits mb-12 flex justify-center">
  <div className="max-w-4xl w-full px-6">
    <p className="font-semibold text-xl text-gray-800 mb-4 text-center">
      <span className="text-orange-500">BENEFICIOS EXCLUSIVOS:</span>
    </p>
    
    <div className="bg-gradient-to-r from-red-500 to-orange-500 p-6 rounded-xl shadow-xl text-white font-bold">
      <ul className="space-y-4 text-lg">
        <li className="flex items-center space-x-3">
          <svg className="w-6 h-6 text-yellow-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm.293-10.707a1 1 0 0 1 1.414 0L14 9.586l3.707-3.707a1 1 0 0 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0L9 12.707l-2.707-2.707a1 1 0 0 1 1.414-1.414L9 9.586l1.293-1.293z" clipRule="evenodd" />
          </svg>
          <span>Acceso vitalicio al curso con un solo pago.</span>
        </li>
        <li className="flex items-center space-x-3">
          <svg className="w-6 h-6 text-yellow-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm.293-10.707a1 1 0 0 1 1.414 0L14 9.586l3.707-3.707a1 1 0 0 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0L9 12.707l-2.707-2.707a1 1 0 0 1 1.414-1.414L9 9.586l1.293-1.293z" clipRule="evenodd" />
          </svg>
          <span>Varios miembros de tu familia pueden estudiar con el mismo acceso.</span>
        </li>
        <li className="flex items-center space-x-3">
          <svg className="w-6 h-6 text-yellow-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm.293-10.707a1 1 0 0 1 1.414 0L14 9.586l3.707-3.707a1 1 0 0 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0L9 12.707l-2.707-2.707a1 1 0 0 1 1.414-1.414L9 9.586l1.293-1.293z" clipRule="evenodd" />
          </svg>
          <span>Pago en 12 cuotas con tu tarjeta de crédito.</span>
        </li>
        <li className="flex items-center space-x-3">
          <svg className="w-6 h-6 text-yellow-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm.293-10.707a1 1 0 0 1 1.414 0L14 9.586l3.707-3.707a1 1 0 0 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0L9 12.707l-2.707-2.707a1 1 0 0 1 1.414-1.414L9 9.586l1.293-1.293z" clipRule="evenodd" />
          </svg>
          <span>Acompañamiento directo vía WhatsApp para resolver cualquier duda.</span>
        </li>
        <li className="flex items-center space-x-3">
          <svg className="w-6 h-6 text-yellow-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm.293-10.707a1 1 0 0 1 1.414 0L14 9.586l3.707-3.707a1 1 0 0 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0L9 12.707l-2.707-2.707a1 1 0 0 1 1.414-1.414L9 9.586l1.293-1.293z" clipRule="evenodd" />
          </svg>
          <span>Prueba el curso durante 7 días sin riesgo. Si no te convence, te devolvemos el dinero.</span>
        </li>
      </ul>
    </div>
  </div>
</div>

<div className="flex justify-center mt-8">
  <a 
    href="https://wa.link/yeyxkr" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="flex items-center px-6 py-3 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition duration-300"
  >
    <i className="fab fa-whatsapp w-8 mr-3"></i>
    <span className="text-lg font-medium">Contacta conmigo en WhatsApp</span>
  </a>
</div>
        </div>
      )}
    </main>
  );
}
