import React from 'react';

function Testimonials() {
  return (
    <section className="bg-white py-6 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-black text-gray-900 mb-10 tracking-tight leading-tight">
          Historias que Inspiran: ¡Transforma tu Vida con Inglés!
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-12">
          Descubre cómo estas personas rompieron barreras y alcanzaron el éxito. Tú también puedes ser el próximo testimonio.
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {[{
              video: "https://www.youtube.com/embed/aTTfZ1uTL6c",
              name: "Andrea",
              text: "Nunca pensé que aprender inglés podría ser tan sencillo y emocionante. ¡Este curso lo hizo posible!"
            },
            {
              video: "https://www.youtube.com/embed/ZGvxnPEOWdk",
              name: "Santiago",
              text: "Hoy puedo comunicarme en inglés con confianza, gracias a un método que realmente funciona."
            },
            {
              video: "https://www.youtube.com/embed/cCaLitbF21s",
              name: "Juan",
              text: "Desde que aprendí inglés, mi carrera ha despegado y tengo nuevas oportunidades increíbles."
            },
            {
              video: "https://www.youtube.com/embed/F8pEzoa79sg",
              name: "Christian",
              text: "Finally, I'm able to speak fluently."
            }
          ].map((testimonial, index) => (
            <div
              key={index}
              className="w-full sm:w-80 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform"
            >
              <iframe
                width="100%"
                height="200"
                src={testimonial.video}
                title={`Testimonio ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg mb-4"
              ></iframe>
              <h3 className="text-2xl font-semibold text-white mb-2">{testimonial.name}</h3>
              <p className="text-white text-base">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
