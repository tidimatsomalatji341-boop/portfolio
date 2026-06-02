"use client";

import { useEffect, useRef } from "react";

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frameId = 0;
    let width = 0;
    let height = 0;
    const pointer = { x: 0, y: 0, active: false };
    const nodes = Array.from({ length: 28 }, () => ({
      x: Math.random(),
      y: Math.random(),
      radius: 1.2 + Math.random() * 1.6,
      vx: (Math.random() - 0.5) * 0.018,
      vy: (Math.random() - 0.5) * 0.018,
    }));

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "rgba(222, 255, 154, 0.26)";
      ctx.strokeStyle = "rgba(222, 255, 154, 0.12)";

      nodes.forEach((node, index) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > 1) node.vx *= -1;
        if (node.y < 0 || node.y > 1) node.vy *= -1;

        const px = node.x * width;
        const py = node.y * height;

        ctx.beginPath();
        ctx.arc(px, py, node.radius, 0, Math.PI * 2);
        ctx.fill();

        nodes.forEach((other, otherIndex) => {
          if (otherIndex <= index) return;
          const dx = (other.x - node.x) * width;
          const dy = (other.y - node.y) * height;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 110) {
            ctx.beginPath();
            ctx.moveTo(px, py);
            ctx.lineTo(other.x * width, other.y * height);
            ctx.strokeStyle = `rgba(222, 255, 154, ${0.06 + (1 - distance / 110) * 0.18})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        });

        if (pointer.active) {
          const mouseDx = pointer.x - px;
          const mouseDy = pointer.y - py;
          const mouseDistance = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);
          if (mouseDistance < 120) {
            ctx.beginPath();
            ctx.moveTo(px, py);
            ctx.lineTo(pointer.x, pointer.y);
            ctx.strokeStyle = `rgba(218, 255, 222, ${0.12 + (1 - mouseDistance / 120) * 0.2})`;
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }
      });

      frameId = requestAnimationFrame(animate);
    };

    resize();
    animate();

    const onMove = (event: MouseEvent) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.active = true;
    };

    const onLeave = () => {
      pointer.active = false;
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />;
}
