import React from 'react';

interface BalloonProps {
  color: string;
  size: number;
  left: string;
  delay: number;
}

const Balloon: React.FC<BalloonProps> = ({ color, size, left, delay }) => {
  return (
    <div 
      className="absolute bottom-0 animate-float-up pointer-events-none"
      style={{ 
        left, 
        animationDelay: `${delay}s`,
        animationDuration: `${10 + Math.random() * 5}s`
      }}
    >
      <div className="relative">
        {/* Balloon */}
        <div 
          className="rounded-full"
          style={{ 
            backgroundColor: color,
            width: `${size}rem`,
            height: `${size * 1.2}rem`,
            filter: 'brightness(1.1)'
          }}
        ></div>
        
        {/* Balloon knot */}
        <div 
          className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-3 h-3 rounded-full"
          style={{ backgroundColor: color }}
        ></div>
        
        {/* Balloon string */}
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-10 w-0.5 h-8 bg-gray-300"></div>
      </div>
    </div>
  );
};

const BalloonContainer: React.FC = () => {
  const balloonColors = [
    '#FF78C4', // Pink
    '#E64398', // Darker pink
    '#FFD6EC', // Light pink
    '#9C89B8', // Purple
    '#F0A6CA', // Soft pink
    '#FFCBDD', // Blush pink
  ];
  
  const balloons = Array.from({ length: 10 }, (_, i) => {
    const color = balloonColors[Math.floor(Math.random() * balloonColors.length)];
    const size = 3 + Math.random() * 2;
    const left = `${Math.random() * 90 + 5}%`;
    const delay = Math.random() * 8;
    
    return (
      <Balloon 
        key={i}
        color={color}
        size={size}
        left={left}
        delay={delay}
      />
    );
  });
  
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {balloons}
    </div>
  );
};

export default BalloonContainer;