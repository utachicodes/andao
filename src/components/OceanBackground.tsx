
import { useEffect, useState } from 'react';

const OceanBackground = () => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number }>>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 20; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 1,
          delay: Math.random() * 6
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Gradient Background */}
      <div className="absolute inset-0 ocean-gradient"></div>
      
      {/* Animated Wave Layers */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-[200%] h-32 bg-gradient-to-r from-transparent via-ocean-teal/20 to-transparent animate-ocean-wave"></div>
        <div className="absolute bottom-8 left-0 w-[200%] h-24 bg-gradient-to-r from-transparent via-ocean-cyan/15 to-transparent animate-ocean-wave" style={{ animationDelay: '-5s' }}></div>
        <div className="absolute bottom-16 left-0 w-[200%] h-16 bg-gradient-to-r from-transparent via-ocean-surface/10 to-transparent animate-ocean-wave" style={{ animationDelay: '-10s' }}></div>
      </div>

      {/* Floating Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="floating-particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: `${particle.delay}s`
          }}
        ></div>
      ))}

      {/* Bubbles */}
      {Array.from({ length: 8 }, (_, i) => (
        <div
          key={`bubble-${i}`}
          className="bubble"
          style={{
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 20 + 10}px`,
            height: `${Math.random() * 20 + 10}px`,
            animationDelay: `${Math.random() * 15}s`
          }}
        ></div>
      ))}

      {/* Light Rays */}
      <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-ocean-bioluminescent/30 to-transparent transform -skew-x-12"></div>
      <div className="absolute top-0 left-3/4 w-1 h-full bg-gradient-to-b from-ocean-cyan/20 to-transparent transform skew-x-12"></div>
    </div>
  );
};

export default OceanBackground;
