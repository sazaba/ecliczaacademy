import React from "react";

const Cta = () => {
  return (
    <div className="cta-buttons mt-3 flex justify-center">
      <a
        href="https://pay.hotmart.com/N93858012D?checkoutMode=10"
        className="bg-green-500 text-white py-3 px-6 rounded-full text-base md:text-lg font-semibold transition-transform duration-500 ease-in-out hover:bg-green-700 w-full sm:w-auto text-center animate-persuade"
      >
        ¡SI QUIERO APRENDER INGLÉS!
      </a>

      {/* Animación personalizada */}
      <style jsx>{`
        @keyframes persuade {
          0%, 100% {
            transform: rotate(-3deg);
          }
          50% {
            transform: rotate(3deg);
          }
        }

        .animate-persuade {
          animation: persuade 1s infinite;
        }
      `}</style>
    </div>
  );
};

export default Cta;
