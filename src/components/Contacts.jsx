
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
        backgroundColor: '#171717',
        color: 'black',
        textAlign: 'center',
        padding: '3px',
        marginTop: '10vh'
      }}
    >
      <p style={{ fontSize: '2rem', marginBottom: '8px', color: 'white' }}> Contactos: </p>

      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <a
          href="https://www.instagram.com/tu_usuario/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="./instagram.logo.png"
            alt="Instagram"
            style={{ width: '60px', height: 'auto', cursor: 'pointer' }}
          />
        </a>
        <a
          href="https://wa.me/549XXXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="./whatsapp.logo.png"
            alt="WhatsApp"
            style={{ width: '50px', height: 'auto', cursor: 'pointer' }}
          />
        </a>
        <a
          href="https://www.instagram.com/tu_usuario/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="./facebook.logo.png"
            alt="Instagram"
            style={{ width: '50px', height: 'auto', cursor: 'pointer' }}
          />
        </a>
        
      </div>
    </div>
  );
};

export default Contacts;
