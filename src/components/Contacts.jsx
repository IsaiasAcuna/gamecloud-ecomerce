
import React from 'react';

const Contacts = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '20vh',
        backgroundColor: 'Azure',
        color: 'black',
        textAlign: 'center',
        padding: '3px',
      }}
    >
      <p style={{ fontSize: '0.9rem', marginBottom: '8px' }}> Contactos: </p>

      <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
        <a
          href="https://www.instagram.com/tu_usuario/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="logo-instagram.jpg"
            alt="Instagram"
            style={{ width: '30px', height: '30px', cursor: 'pointer' }}
          />
        </a>
        <a
          href="https://wa.me/549XXXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="whatsapp.jpg"
            alt="WhatsApp"
            style={{ width: '30px', height: '30px', cursor: 'pointer' }}
          />
        </a>

        
      </div>
    </div>
  );
};

export default Contacts;
