import React from 'react';

const UrgencyTag = () => {
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
    <p className="text-sm md:text-base font-bold text-white bg-gradient-to-r from-red-700 to-black bg-opacity-80 px-4 py-2 rounded-lg shadow-lg animate-pulse mt-4">
      ¡Oferta expira {getTomorrow()}! ¡No lo dejes pasar!
    </p>
  );
};

export default UrgencyTag;
