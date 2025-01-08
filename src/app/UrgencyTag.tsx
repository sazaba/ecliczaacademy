import React, { useEffect, useState } from 'react';

const UrgencyTag = () => {
  const [timeLeft, setTimeLeft] = useState('');

  const calculateTimeLeft = () => {
    const now = new Date();
    const midnight = new Date(now);
    midnight.setHours(24, 0, 0, 0); // Configura la hora para las 12:00 AM de mañana

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
    <div className="text-center mt-4">
      <p className="text-xs md:text-sm font-semibold text-white bg-gradient-to-r from-red-700 to-black bg-opacity-80 px-3 py-2 rounded-lg shadow-md">
        ¡Oferta expira en{' '}
        <span className="text-yellow-300 font-bold animate-pulse">
          {timeLeft}
        </span>
        ! A las 12:00 PM, el precio vuelve a ser{' '}
        <span className="text-yellow-300 font-bold animate-bounce">
          $1000 USD
        </span>
        {' '} aprovecha las ultimas horas.
      </p>
    </div>
  );
};

export default UrgencyTag;
