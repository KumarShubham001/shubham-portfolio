import { useEffect, useRef } from 'react';

const StarfieldBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let stars: { x: number; y: number; size: number; speed: number; opacity: number }[] = [];
    let digitalRain: { x: number; y: number; speed: number; char: string; opacity: number }[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initializeElements();
    };

    const initializeElements = () => {
      // Initialize stars
      stars = [];
      const starCount = Math.floor((canvas.width * canvas.height) / 8000);
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2,
          speed: Math.random() * 0.5 + 0.1,
          opacity: Math.random() * 0.8 + 0.2,
        });
      }

      // Initialize digital rain
      digitalRain = [];
      const rainColumns = Math.floor(canvas.width / 30);
      for (let i = 0; i < rainColumns; i++) {
        digitalRain.push({
          x: i * 30 + Math.random() * 15,
          y: Math.random() * canvas.height,
          speed: Math.random() * 2 + 1,
          char: String.fromCharCode(0x30A0 + Math.random() * 96),
          opacity: Math.random() * 0.3 + 0.1,
        });
      }
    };

    const drawStar = (star: typeof stars[0]) => {
      const gradient = ctx.createRadialGradient(
        star.x, star.y, 0,
        star.x, star.y, star.size * 2
      );
      gradient.addColorStop(0, `rgba(0, 255, 255, ${star.opacity})`);
      gradient.addColorStop(0.5, `rgba(0, 255, 255, ${star.opacity * 0.5})`);
      gradient.addColorStop(1, 'transparent');

      ctx.beginPath();
      ctx.fillStyle = gradient;
      ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2);
      ctx.fill();
    };

    const drawDigitalRain = (drop: typeof digitalRain[0]) => {
      ctx.font = '14px JetBrains Mono';
      ctx.fillStyle = `rgba(0, 255, 255, ${drop.opacity})`;
      ctx.fillText(drop.char, drop.x, drop.y);
      
      // Trail effect
      ctx.fillStyle = `rgba(255, 0, 255, ${drop.opacity * 0.5})`;
      ctx.fillText(drop.char, drop.x, drop.y - 20);
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(5, 5, 5, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw and update stars
      stars.forEach(star => {
        drawStar(star);
        star.y += star.speed;
        star.opacity = 0.2 + Math.sin(Date.now() * 0.001 + star.x) * 0.3;
        
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });

      // Draw and update digital rain
      digitalRain.forEach(drop => {
        drawDigitalRain(drop);
        drop.y += drop.speed;
        
        if (drop.y > canvas.height) {
          drop.y = 0;
          drop.char = String.fromCharCode(0x30A0 + Math.random() * 96);
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: '#050505' }}
    />
  );
};

export default StarfieldBackground;
