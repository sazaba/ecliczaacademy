import React, { useEffect } from 'react';

const VideoPlayer = () => {
  useEffect(() => {
    // Cargar el script solo una vez cuando el componente se monta
    const script = document.createElement('script');
    script.src = 'https://scripts.converteai.net/fd8b82e3-999d-46ce-8650-2e66bb34b4e4/players/67c67663c37d6e3e2f8bd53a/player.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Limpiar el script al desmontar el componente
      document.head.removeChild(script);
    };
  }, []); // El array vacío significa que este efecto solo se ejecuta una vez

  return (
    <div id="vid_67c67663c37d6e3e2f8bd53a" style={{ position: 'relative', width: '100%', padding: '56.25% 0 0' }}>
      <img
        id="thumb_67c67663c37d6e3e2f8bd53a"
        src="https://images.converteai.net/fd8b82e3-999d-46ce-8650-2e66bb34b4e4/players/67c67663c37d6e3e2f8bd53a/thumbnail.jpg"
        alt="thumbnail"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      />
      <div
        id="backdrop_67c67663c37d6e3e2f8bd53a"
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

