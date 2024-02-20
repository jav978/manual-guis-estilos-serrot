import React from 'react';

export default function Highlight({children, backgroundcolor,textcolor}) {
  return (
    <span
      style={{
        backgroundColor: backgroundcolor,
        borderRadius: '20px',
        fontFamily:'Roboto',
        color: textcolor,
        padding: '.5rem',
        textTransform: 'uppercase',
        fontSize: '0.9rem',
        fontWeight: 'Bold',        
      }}>
      {children}
    </span>
  );
}