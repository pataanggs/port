// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-lime-300 py-4 text-center">
      <p className="text-sm">
        &copy; Pataangg. All Rights Reserved. {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
