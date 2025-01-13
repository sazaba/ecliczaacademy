import React, { useEffect, useState } from 'react';

const UrgencyTag = () => {
  const [timeLeft, setTimeLeft] = useState('');

  const calculateTimeLeft = () => {
    const now = new Date();
    const targetTime = new Date(now);
    targetTime.setHours(now.getHours() + 2, 0, 0, 0); // Establecer el objetivo a 2 horas de ahora

    const difference = targetTime.getTime() - now.getTime(); // Diferencia en milisegundos

    if (difference <= 0) {
      return '00:00:00'; // Si ya pasaron las 2 horas, mostrar 00:00:00
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
        {' '}el precio vuelve a ser{' '}
        <span className="text-yellow-300 font-bold animate-bounce">
          $4.465.000
        </span>
        {' '} ¡Aprovecha las últimas horas!
      </p>
    </div>
  );
};

export default UrgencyTag;

