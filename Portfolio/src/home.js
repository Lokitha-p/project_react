import React from 'react';

const Home = () => {
  return (
    <section
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '50px 20px',
        backgroundColor: '#f2f2f2',
        color: '#000',
      }}
    >
      
      <div style={{ flex: 1, animation: 'fadeInLeft 1s ease-in-out' }}>
        <h1>Welcome to My Portfolio</h1>
        <p>
          Hi! I'm Lokitha, a passionate developer who loves to build amazing web
          experiences.
        </p>
        <a
          href="#about"
          style={{
            textDecoration: 'none',
            color: '#000',
            fontWeight: 'bold',
          }}
        >
          Learn More About Me ↓
        </a>
      </div>

      {/* Right Side: Image */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          animation: 'fadeInRight 1s ease-in-out',
        }}
      >
        <img
          src="loki.jpg" 
          alt="Lokiee"
          style={{
            borderRadius: '10px', 
            width: '150px', 
            height: '250px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            animation: 'scaleUp 2s infinite alternate',
          }}
        />
      </div>
    </section>
  );
};

export default Home;
