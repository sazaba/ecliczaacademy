import React, { useEffect, useState } from 'react';

const FloatingUrgency = () => {
  const [viewers, setViewers] = useState(3);
  const [slots, setSlots] = useState(5);

  useEffect(() => {
    // Cambios dinámicos en el número de espectadores
    const viewersInterval = setInterval(() => {
      setViewers((prev) => Math.max(1, prev + Math.floor(Math.random() * 3 - 1)));
    }, 5000);

    // Reducción dinámica de cupos con mínimo de 1
    const slotsInterval = setInterval(() => {
      setSlots((prev) => (prev > 1 ? prev - 1 : prev)); // Si es 1, no baja más.
    }, 10000);

    return () => {
      clearInterval(viewersInterval);
      clearInterval(slotsInterval);
    };
  }, []);

  return (
    <div className="z-50 fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white text-xs md:text-sm font-bold py-2 px-4 rounded-lg shadow-lg border border-red-700 transition-transform duration-500 hover:scale-105 flex items-center justify-between space-x-4 w-[90%] max-w-xl animate-pulse">
      <span>🔥</span>
      <span className="flex-grow text-center">
        <strong>{viewers}</strong> personas están viendo esto ahora. Quedan <strong>{slots}</strong> cupos disponibles.
      </span>
      <span className="bg-black text-white text-[10px] px-2 py-1 rounded-md">
        ¡APROVECHA!
      </span>
    </div>
  );
};

export default FloatingUrgency;
