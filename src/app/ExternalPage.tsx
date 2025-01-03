// components/ExternalPage.js
import React from 'react';

const ExternalPage = () => {
  return (
    <div style={{ width: '100%', height: '250vh', overflow: 'hidden' }}>
      <iframe
        src="https://hotm.art/gohRuaB"
        width="100%"
        height="100%"
        style={{ border: 'none' }}
        title="External Content"
        scrolling="no" 
      />
    </div>
  );
};

export default ExternalPage;

