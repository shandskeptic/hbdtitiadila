import React, { useEffect, useState } from 'react';
import { Cake, Heart, Music, Music as MusicOff } from 'lucide-react';
import Confetti from './Confetti';

const Hero: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [countdown, setCountdown] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set a timer for the upcoming celebration time
    const interval = setInterval(() => {
      const now = new Date();
      const targetHour = 24; // Midnight celebration
      const hoursLeft = targetHour - now.getHours() - 1;
      const minutesLeft = 59 - now.getMinutes();
      const secondsLeft = 59 - now.getSeconds();

      setCountdown({
        hours: hoursLeft < 0 ? 0 : hoursLeft,
        minutes: minutesLeft < 0 ? 0 : minutesLeft,
        seconds: secondsLeft < 0 ? 0 : secondsLeft,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
    // Implement actual music playing logic here
  };

  return (
    <div className="relative min-h-[90vh] bg-gradient-to-b from-pink-100 to-purple-100 overflow-hidden">
      <Confetti />
      
      <div className="absolute top-4 right-4 z-10">
        <button 
          onClick={toggleMusic} 
          className="p-3 bg-white rounded-full shadow-lg hover:bg-pink-100 transition-colors"
        >
          {isPlaying ? <MusicOff size={24} className="text-pink-500" /> : <Music size={24} className="text-pink-500" />}
        </button>
      </div>
      
      <div className="container mx-auto px-4 pt-20 pb-16 relative z-[5]">
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex justify-center mb-6">
            <Cake className="h-20 w-20 text-pink-500" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-pink-400">
            Titi Adila
          </h1>
          
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-pink-600">
            Selamat Ulang Tahun ✨
          </h2>
          
          <p className="text-xl text-gray-700 mb-10 leading-relaxed">
            Hari ini adalah hari spesial untuk orang yang spesial. Semoga hari ulang tahunmu dipenuhi dengan cinta, kebahagiaan, dan keajaiban!
          </p>
          
          <div className="flex justify-center gap-4 mb-12">
            <div className="bg-white px-6 py-4 rounded-xl shadow-lg">
              <span className="block text-3xl font-bold text-pink-600">{countdown.hours}</span>
              <span className="text-sm text-gray-500">Jam</span>
            </div>
            <div className="bg-white px-6 py-4 rounded-xl shadow-lg">
              <span className="block text-3xl font-bold text-pink-600">{countdown.minutes}</span>
              <span className="text-sm text-gray-500">Menit</span>
            </div>
            <div className="bg-white px-6 py-4 rounded-xl shadow-lg">
              <span className="block text-3xl font-bold text-pink-600">{countdown.seconds}</span>
              <span className="text-sm text-gray-500">Detik</span>
            </div>
          </div>
          
          <div className="animate-bounce">
            <a 
              href="#ucapan" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all"
            >
              <span>Lihat Pesanku</span>
              <Heart className="h-5 w-5 fill-white" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative floating elements */}
      <div className="absolute top-1/4 left-[10%] w-20 h-20 bg-pink-300 rounded-full opacity-40 animate-float"></div>
      <div className="absolute top-1/3 right-[15%] w-16 h-16 bg-purple-300 rounded-full opacity-50 animate-float-delay"></div>
      <div className="absolute bottom-1/4 left-[20%] w-12 h-12 bg-pink-200 rounded-full opacity-60 animate-float-slow"></div>
      <div className="absolute bottom-1/3 right-[10%] w-24 h-24 bg-pink-400 rounded-full opacity-30 animate-float-slower"></div>
    </div>
  );
};

export default Hero;