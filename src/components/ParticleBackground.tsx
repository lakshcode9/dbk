import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
}

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;
    let mouseX = 0;
    let mouseY = 0;

    const colors = [
      'rgba(59, 130, 246, 0.8)', // blue
      'rgba(139, 92, 246, 0.8)', // purple
      'rgba(236, 72, 153, 0.8)', // pink
    ];

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };

    const createParticle = (): Particle => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 3 + 2,
      speedX: (Math.random() - 0.5) * 1,
      speedY: (Math.random() - 0.5) * 1,
      opacity: Math.random() * 0.5 + 0.5,
      color: colors[Math.floor(Math.random() * colors.length)]
    });

    const initParticles = () => {
      const particleCount = window.innerWidth < 768 ? 50 : 100;
      particles = Array.from({ length: particleCount }, createParticle);
    };

    const drawParticle = (particle: Particle) => {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.fill();

      // Add glow effect
      ctx.shadowBlur = 15;
      ctx.shadowColor = particle.color;
    };

    const connectParticles = () => {
      const maxDistance = window.innerWidth < 768 ? 150 : 200;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.5;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(147, 197, 253, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const updateParticles = () => {
      particles.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Mouse interaction with stronger effect
        const dx = mouseX - particle.x;
        const dy = mouseY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxForce = 150;
        
        if (distance < maxForce) {
          const force = (maxForce - distance) / maxForce;
          particle.speedX -= dx * force * 0.02;
          particle.speedY -= dy * force * 0.02;
        }

        // Bounce off edges with damping
        if (particle.x < 0 || particle.x > window.innerWidth) {
          particle.speedX *= -0.9;
          particle.x = particle.x < 0 ? 0 : window.innerWidth;
        }
        if (particle.y < 0 || particle.y > window.innerHeight) {
          particle.speedY *= -0.9;
          particle.y = particle.y < 0 ? 0 : window.innerHeight;
        }

        // Add some randomness to movement
        particle.speedX += (Math.random() - 0.5) * 0.1;
        particle.speedY += (Math.random() - 0.5) * 0.1;

        // Limit speed
        const maxSpeed = 2;
        const speed = Math.sqrt(particle.speedX * particle.speedX + particle.speedY * particle.speedY);
        if (speed > maxSpeed) {
          particle.speedX = (particle.speedX / speed) * maxSpeed;
          particle.speedY = (particle.speedY / speed) * maxSpeed;
        }
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      ctx.shadowBlur = 0; // Reset shadow before drawing connections
      connectParticles();
      updateParticles();
      particles.forEach(drawParticle);
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length > 0) {
        mouseX = event.touches[0].clientX;
        mouseY = event.touches[0].clientY;
      }
    };

    // Initialize
    resizeCanvas();
    initParticles();
    animate();

    // Event listeners
    window.addEventListener('resize', () => {
      resizeCanvas();
      initParticles();
    });
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
};

export default ParticleBackground;