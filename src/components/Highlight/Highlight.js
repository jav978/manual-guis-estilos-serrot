import React from 'react';

export default function Highlight({children, color}) {
  return (
    <span
      style={{
        backgroundColor: color,
        borderRadius: '20px',
        color: '#fff',
        padding: '0.3rem',
        fontSize: '0.8rem',
        fontWeight: 'bold',
      }}>
      {children}
    </span>
  );
}