import React, { useEffect, useState } from 'react';

const PromotionBanner = () => {
  const [timeLeft, setTimeLeft] = useState('');

  const calculateTimeLeft = () => {
    const now = new Date();
    const midnight = new Date(now);
    midnight.setHours(24, 0, 0, 0); // Configura la hora para la medianoche

    const difference = midnight.getTime() - now.getTime(); // Diferencia en milisegundos

    if (difference <= 0) {
      return '00:00:00'; // Si ya es medianoche, mostrar 00:00:00
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
    <div className="bg-gradient-to-br from-red-600 to-orange-500 text-white text-center py-10 px-6 rounded-lg shadow-lg relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/sparkles.svg')] bg-cover opacity-20 pointer-events-none"></div>
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight uppercase">
        ¡Oferta limitada!
      </h2>
      <p className="text-lg md:text-2xl mt-4 font-semibold">
        El descuento termina en:
      </p>
      <p className="text-xl md:text-3xl mt-2 font-bold text-yellow-300 bg-black bg-opacity-50 px-4 py-2 inline-block rounded-lg shadow-md animate-pulse">
        {timeLeft}
      </p>
      <p className="text-sm md:text-lg mt-4 font-medium">
        A las 12:00 PM, el precio vuelve a ser{' '}
        <span className="text-red-700 font-bold animate-bounce">$4.465.000</span>.
      </p>
    </div>
  );
};

export default PromotionBanner;
