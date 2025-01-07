import React from 'react';

const PromotionBanner = () => {
  const getTomorrow = () => {
    const daysOfWeek = [
      'domingo',
      'lunes',
      'martes',
      'miércoles',
      'jueves',
      'viernes',
      'sábado',
    ];
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const dayName = daysOfWeek[tomorrow.getDay()];
    const day = tomorrow.getDate();
    const month = tomorrow.toLocaleString('es-ES', { month: 'long' });

    return `${dayName}, ${day} de ${month}`;
  };

  return (
    <div className="bg-gradient-to-br from-red-600 to-orange-500 text-white text-center py-10 px-6 rounded-lg shadow-lg relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/sparkles.svg')] bg-cover opacity-20 pointer-events-none"></div>
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight uppercase">
        ¡Oferta limitada!
      </h2>
      <p className="text-lg md:text-2xl mt-4 font-semibold">
        El descuento termina <span className="text-yellow-400 animate-pulse">mañana</span>:
      </p>
      <p className="text-xl md:text-3xl mt-2 font-bold text-yellow-300 bg-black bg-opacity-50 px-4 py-2 inline-block rounded-lg shadow-md">
        {getTomorrow()}
      </p>
    </div>
  );
};

export default PromotionBanner;
