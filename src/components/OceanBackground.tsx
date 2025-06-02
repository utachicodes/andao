
import { useEffect, useState } from 'react';

const OceanBackground = () => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number; speed: number }>>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 30; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 0.5,
          delay: Math.random() * 8,
          speed: Math.random() * 20 + 10
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Advanced Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0E1A] via-[#0D1B2A] to-[#1A365D]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/90 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(13,148,136,0.15)_0%,transparent_50%)]"></div>
      </div>
      
      {/* Sophisticated Wave System */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute bottom-0 left-0 w-[300%] h-40 bg-gradient-to-r from-transparent via-ocean-teal/30 to-transparent" 
             style={{ 
               animation: 'sophisticated-wave 25s ease-in-out infinite',
               transform: 'skewY(-1deg)'
             }}></div>
        <div className="absolute bottom-10 left-0 w-[250%] h-32 bg-gradient-to-r from-transparent via-ocean-cyan/20 to-transparent" 
             style={{ 
               animation: 'sophisticated-wave 30s ease-in-out infinite reverse',
               animationDelay: '-8s',
               transform: 'skewY(0.5deg)'
             }}></div>
        <div className="absolute bottom-20 left-0 w-[200%] h-24 bg-gradient-to-r from-transparent via-ocean-bioluminescent/10 to-transparent" 
             style={{ 
               animation: 'sophisticated-wave 35s ease-in-out infinite',
               animationDelay: '-15s',
               transform: 'skewY(-0.3deg)'
             }}></div>
      </div>

      {/* Premium Floating Elements */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: `radial-gradient(circle, rgba(0, 212, 255, ${0.6 + Math.random() * 0.4}) 0%, transparent 70%)`,
            animation: `sophisticated-float ${particle.speed}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`,
            filter: 'blur(0.5px)'
          }}
        ></div>
      ))}

      {/* Ambient Lighting Effects */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-ocean-bioluminescent/5 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-ocean-teal/8 rounded-full filter blur-3xl" style={{ animation: 'ambient-glow 8s ease-in-out infinite alternate' }}></div>
      
      {/* Sophisticated Light Rays */}
      <div className="absolute inset-0">
        {Array.from({ length: 6 }, (_, i) => (
          <div
            key={`light-ray-${i}`}
            className="absolute top-0 w-px h-full bg-gradient-to-b from-ocean-bioluminescent/20 via-ocean-cyan/10 to-transparent"
            style={{
              left: `${15 + i * 12}%`,
              transform: `skewX(${i % 2 === 0 ? '1deg' : '-1deg'})`,
              animation: `ray-shimmer ${6 + i}s ease-in-out infinite alternate`,
              filter: 'blur(1px)'
            }}
          />
        ))}
      </div>

      {/* Neural Network Pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="neural-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1" fill="rgba(0, 212, 255, 0.3)" />
              <line x1="30" y1="0" x2="30" y2="60" stroke="rgba(0, 212, 255, 0.1)" strokeWidth="0.5" />
              <line x1="0" y1="30" x2="60" y2="30" stroke="rgba(0, 212, 255, 0.1)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neural-grid)" />
        </svg>
      </div>
    </div>
  );
};

export default OceanBackground;
