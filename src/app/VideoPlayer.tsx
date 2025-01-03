import React, { useEffect } from 'react';

const VideoPlayer = () => {
  useEffect(() => {
    // Cargar el script solo una vez cuando el componente se monta
    const script = document.createElement('script');
    script.src = 'https://scripts.converteai.net/2ffe5a85-c74f-4a8b-a275-5f727ac3597d/players/676a1e64572299dbc2d8f8cc/player.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Limpiar el script al desmontar el componente
      document.head.removeChild(script);
    };
  }, []); // El array vacío significa que este efecto solo se ejecuta una vez

  return (
    <div id="vid_676a1e64572299dbc2d8f8cc" style={{ position: 'relative', width: '100%', padding: '56.25% 0 0' }}>
      <img 
        id="thumb_676a1e64572299dbc2d8f8cc"
        src="https://images.converteai.net/2ffe5a85-c74f-4a8b-a275-5f727ac3597d/players/676a1e64572299dbc2d8f8cc/thumbnail.jpg"
        alt="thumbnail"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      />
      <div 
        id="backdrop_676a1e64572299dbc2d8f8cc" 
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
