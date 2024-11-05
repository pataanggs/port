import React, { useEffect, useRef } from 'react';

const BackgroundAnimation = () => {
  const canvasRef = useRef(null);
  const stars = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const numberOfStars = 100;
    stars.current = Array.from({ length: numberOfStars }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2,
      alpha: Math.random(),
      speed: Math.random() * 0.5 + 0.5, // Speed for each star
    }));

    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.current.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();
      });
    };

    const animate = () => {
      drawStars();
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animate);
    };
  }, []);

  const handleMouseMove = (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    stars.current.forEach(star => {
      const dx = star.x - mouseX;
      const dy = star.y - mouseY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Scatter stars away from the mouse cursor
      if (distance < 100) {
        star.x += (star.x - mouseX) * 0.1;
        star.y += (star.y - mouseY) * 0.1;
      }
    });
  };

  return (
    <canvas
      id="canvas"
      ref={canvasRef}
      className="fixed inset-0 z-0"
      onMouseMove={handleMouseMove}
    />
  );
};

export default BackgroundAnimation;
