import React from "react";

const Cta = ({ text = "¡Quiero aprender inglés!" }) => {
  return (
    <div className="cta-buttons mt-6 flex justify-center">
      <a
        href="https://pay.hotmart.com/N93858012D?checkoutMode=10"
        className="bg-green-500 shadow-black text-white py-4 px-5 rounded-full text-lg md:text-xl font-bold shadow-sm transform transition-all duration-500 ease-in-out hover:bg-orange-600 hover:scale-105 hover:shadow-2xl w-[90%] sm:w-auto text-center animate-bounce-persuade"
        aria-label="Botón para adquirir el curso de inglés"
      >
        {text}
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
