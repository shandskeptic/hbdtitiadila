import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-10">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center items-center gap-2 mb-6">
          <Heart className="text-white fill-white" size={24} />
          <h2 className="text-2xl font-bold">Titi Adila</h2>
          <Heart className="text-white fill-white" size={24} />
        </div>
        
        <p className="mb-6 max-w-md mx-auto">
          Terima kasih telah merayakan hari spesial ini bersama. Semoga hari ulang tahunnya dipenuhi dengan kebahagiaan dan cinta.
        </p>
        
        <div className="text-pink-200 text-sm">
          <p>Dibuat dengan <Heart className="inline-block h-4 w-4 fill-current" /> untuk seseorang yang spesial</p>
          <p className="mt-1">&copy; {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;