// import React, { useEffect } from 'react';

// const VideoPlayer = () => {
//   useEffect(() => {
//     // Cargar el script solo una vez cuando el componente se monta
//     const script = document.createElement('script');
//     script.src = 'https://scripts.converteai.net/61a3f07e-18b1-4742-b769-32c6e9519df2/players/677be7d41beda31ebad14cb9/player.js';
//     script.async = true;
//     document.head.appendChild(script);

//     return () => {
//       // Limpiar el script al desmontar el componente
//       document.head.removeChild(script);
//     };
//   }, []); // El array vacío significa que este efecto solo se ejecuta una vez

//   return (
//     <div id="vid_677be7d41beda31ebad14cb9" style={{ position: 'relative', width: '100%', padding: '56.25% 0 0' }}>
//       <img
//         id="thumb_677be7d41beda31ebad14cb9"
//         src="https://images.converteai.net/61a3f07e-18b1-4742-b769-32c6e9519df2/players/677be7d41beda31ebad14cb9/thumbnail.jpg"
//         alt="thumbnail"
//         style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
//       />
//       <div
//         id="backdrop_677be7d41beda31ebad14cb9"
//         style={{
//           WebkitBackdropFilter: 'blur(5px)',
//           backdropFilter: 'blur(5px)',
//           position: 'absolute',
//           top: 0,
//           height: '100%',
//           width: '100%',
//         }}
//       />
//     </div>
//   );
// };

// export default VideoPlayer;



import React, { useEffect } from 'react';

const VideoPlayer = () => {
  useEffect(() => {
    // Cargar el script solo una vez cuando el componente se monta
    const script = document.createElement('script');
    script.src = 'https://scripts.converteai.net/61a3f07e-18b1-4742-b769-32c6e9519df2/players/67a95c52503078a94b0542d1/player.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Limpiar el script al desmontar el componente
      document.head.removeChild(script);
    };
  }, []); // El array vacío significa que este efecto solo se ejecuta una vez

  return (
    <div id="vid_67a95c52503078a94b0542d1" style={{ position: 'relative', width: '100%', padding: '56.25% 0 0' }}>
      <img 
        id="thumb_67a95c52503078a94b0542d1"
        src="https://images.converteai.net/61a3f07e-18b1-4742-b769-32c6e9519df2/players/67a95c52503078a94b0542d1/thumbnail.jpg"
        alt="thumbnail"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      />
      <div 
        id="backdrop_67a95c52503078a94b0542d1" 
        style={{ 
          WebkitBackdropFilter: 'blur(5px)', 
          backdropFilter: 'blur(5px)', 
          position: 'absolute', 
          top: 0, 
          height: '100%', 
          width: '100%' 
        }} 
      />
    </div>
  );
};

export default VideoPlayer;
