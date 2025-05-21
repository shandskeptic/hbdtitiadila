import React, { useEffect, useState } from 'react';

const Confetti: React.FC = () => {
  const [confetti, setConfetti] = useState<JSX.Element[]>([]);
  
  useEffect(() => {
    const colors = ['#FF78C4', '#E64398', '#FFD6EC', '#F0A6CA', '#FFCBDD', '#9C89B8'];
    const shapes = ['circle', 'square', 'triangle', 'heart'];
    const confettiCount = 60;
    const newConfetti: JSX.Element[] = [];
    
    for (let i = 0; i < confettiCount; i++) {
      const left = Math.random() * 100;
      const size = Math.random() * 1 + 0.5;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const shape = shapes[Math.floor(Math.random() * shapes.length)];
      const animationDuration = Math.random() * 5 + 5;
      const delay = Math.random() * 5;
      
      let shapeElement;
      if (shape === 'circle') {
        shapeElement = <div className="rounded-full" style={{ backgroundColor: color, width: `${size}rem`, height: `${size}rem` }}></div>;
      } else if (shape === 'square') {
        shapeElement = <div className="rounded-sm rotate-45" style={{ backgroundColor: color, width: `${size}rem`, height: `${size}rem` }}></div>;
      } else if (shape === 'triangle') {
        shapeElement = <div className="w-0 h-0 border-l-[0.5rem] border-r-[0.5rem] border-b-[1rem] border-transparent border-b-pink-400"></div>;
      } else if (shape === 'heart') {
        shapeElement = (
          <div className="relative" style={{ width: `${size}rem`, height: `${size}rem` }}>
            <div className="absolute bg-pink-500 rotate-45" style={{ width: `${size * 0.7}rem`, height: `${size * 0.7}rem`, top: `${size * 0.3}rem`, left: 0 }}></div>
            <div className="absolute bg-pink-500 rotate-45" style={{ width: `${size * 0.7}rem`, height: `${size * 0.7}rem`, top: `${size * 0.3}rem`, right: 0 }}></div>
            <div className="absolute bg-pink-500" style={{ width: `${size}rem`, height: `${size * 0.7}rem`, bottom: 0 }}></div>
          </div>
        );
      }
      
      newConfetti.push(
        <div
          key={i}
          className="absolute opacity-70 will-change-transform"
          style={{
            left: `${left}%`,
            top: '-5%',
            animation: `fall ${animationDuration}s linear ${delay}s infinite`
          }}
        >
          {shapeElement}
        </div>
      );
    }
    
    setConfetti(newConfetti);
  }, []);
  
  return <div className="absolute inset-0 overflow-hidden pointer-events-none">{confetti}</div>;
};

export default Confetti;