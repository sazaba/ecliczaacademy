import React, { useEffect } from 'react';

const VideoPlayer = () => {
  useEffect(() => {
    // Cargar el script solo una vez cuando el componente se monta
    const script = document.createElement('script');
    script.src = 'https://scripts.converteai.net/fd8b82e3-999d-46ce-8650-2e66bb34b4e4/players/67cf2efaf35ac4c93bf22954/player.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Limpiar el script al desmontar el componente
      document.head.removeChild(script);
    };
  }, []); // El array vacío significa que este efecto solo se ejecuta una vez

  return (
    <div id="vid_67cf2efaf35ac4c93bf22954" style={{ position: 'relative', width: '100%', padding: '56.25% 0 0' }}>
      <img
        id="thumb_67cf2efaf35ac4c93bf22954"
        src="https://images.converteai.net/fd8b82e3-999d-46ce-8650-2e66bb34b4e4/players/67cf2efaf35ac4c93bf22954/thumbnail.jpg"
        alt="thumbnail"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      />
      <div
        id="backdrop_67cf2efaf35ac4c93bf22954"
        style={{
          WebkitBackdropFilter: 'blur(5px)',
          backdropFilter: 'blur(5px)',
          position: 'absolute',
          top: 0,
          height: '100%',
          width: '100%',
        }}
      />
    </div>
  );
};

export default VideoPlayer;
