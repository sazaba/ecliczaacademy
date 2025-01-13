import React, { useEffect, useState } from 'react';

const SalesPsychologyComponent = () => {
  const [timeLeft, setTimeLeft] = useState('');

  const calculateTimeLeft = () => {
    const now = new Date();
    const targetTime = new Date(now);
    targetTime.setHours(now.getHours() + 2, 0, 0, 0); // 2 horas desde ahora

    const difference = targetTime.getTime() - now.getTime(); // Diferencia en milisegundos

    if (difference <= 0) {
      return '00:00:00'; // Si ya pasaron las 2 horas
    }

    const hours = String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0');
    const minutes = String(Math.floor((difference / (1000 * 60)) % 60)).padStart(2, '0');
    const seconds = String(Math.floor((difference / 1000) % 60)).padStart(2, '0');

    return `${hours}:${minutes}:${seconds}`;
  };

  useEffect(() => {
    setTimeLeft(calculateTimeLeft()); // Inicializar al montar el componente

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Limpia el intervalo al desmontar
  }, []);

  return (
    <div className="text-center py-8 px-6 md:px-12 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold mb-4">¡Oferta Limitada!⏳</h2>
      <p className="text-lg mb-4">¡Tu oportunidad para aprender inglés de manera rápida y eficaz está aquí!</p>
      <div className="flex justify-center items-center space-x-4 mb-6">
        <span className="text-2xl line-through text-gray-200 font-semibold">
          <span className="text-xl">Antes: </span>₲ 4.465.000
        </span>
        <span className="text-3xl font-bold text-yellow-300">
          <span className="text-xl">¡Ahora: </span>₲ 152.000
        </span>
      </div>
      <div className="bg-white text-gray-900 p-4 rounded-lg shadow-md mb-8">
        <h3 className="text-2xl font-semibold mb-2">¡Aprovecha esta oferta única!</h3>
        <p className="text-base mb-4">Esta es tu oportunidad para transformar tu vida aprendiendo inglés de forma rápida y con métodos inmersivos.</p>
        <p className="text-lg text-red-600 font-bold">Oferta válida solo por las próximas <span className="text-yellow-400">{timeLeft} horas</span></p>
      </div>
      
    </div>
  );
};

export default SalesPsychologyComponent;
