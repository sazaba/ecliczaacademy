import React from "react";
import { FaTelegramPlane } from "react-icons/fa";

const Cta = ({ text = "¡Quiero aprender inglés!" }) => {
  return (
    <div className="cta-buttons mt-6 flex flex-col sm:flex-row justify-center gap-4">
      <a
        href="https://t.me/+ic7bJpbn-hM2ZGFh"
        className="bg-[#0088cc] text-white py-4 px-5 rounded-full text-lg md:text-xl font-bold shadow-sm transform transition-all duration-500 ease-in-out hover:bg-[#007bb5] hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 w-[90%] sm:w-auto m-auto animate-bounce-persuade"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Unirse al canal de Telegram"
      >
        <FaTelegramPlane className="text-white text-2xl" />
        Únete al entrenamiento
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


