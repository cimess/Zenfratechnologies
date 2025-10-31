import React from 'react';

export default function StaffCard({ name, position, photoURL }) {
  return (
    <article
      tabIndex={0}
      aria-label={`${name}, ${position}`}
      style={{
        width: '220px',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
        overflow: 'hidden',
        textAlign: 'center',
        userSelect: 'none',
        margin: '0.5rem'
      }}
    >
      <img
        src={photoURL}
        alt={`Photo of ${name}`}
        loading="lazy"
        width="220"
        height="220"
        style={{
          objectFit: 'cover',
          width: '100%',
          height: '220px',
          display: 'block',
          borderBottom: '1px solid #ddd'
        }}
      />
      <div style={{ padding: '0.75rem 0.5rem' }}>
        <h3 style={{ margin: '0 0 0.25rem', fontSize: '1.1rem', color: '#222' }}>{name}</h3>
        <p style={{ margin: 0, fontSize: '0.9rem', color: '#666' }}>{position}</p>
      </div>
    </article>
  );
}
