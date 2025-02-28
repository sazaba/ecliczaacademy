import React from "react";
import Image from "next/image";
import Hot from '@/app/images/Hot.webp';

const Cta = () => {
  return (
    <div className="cta-buttons mt-6 flex flex-col sm:flex-row justify-center gap-4">
      <a
        href="https://pay.hotmart.com/N93858012D?off=qtj68835"
        className="bg-gradient-to-r from-[#000000] to-[#363636] text-white py-4 px-2 rounded-full text-lg md:text-xl font-bold shadow-md transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-3 w-[90%] sm:w-auto m-auto animate-bounce-persuade"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Sí, dame acceso inmediato"
      >
        <Image src={Hot} alt="Hotmart" width={28} height={28} />
        Sí, dame acceso inmediato
      </a>
      
      <style jsx>{`
        @keyframes bounce-persuade {
          0%, 100% {
            transform: translateY(0) rotate(-2deg);
          }
          50% {
            transform: translateY(-5px) rotate(2deg);
          }
        }

        .animate-bounce-persuade {
          animation: bounce-persuade 1.5s infinite;
        }
      `}</style>
    </div>
  );
};

export default Cta;
