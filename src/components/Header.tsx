import React from 'react';
import { Heart } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="py-4 px-6 bg-gradient-to-r from-pink-400 via-pink-300 to-purple-300 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Heart className="text-pink-600 fill-pink-600" size={28} />
          <h1 className="text-2xl font-bold text-white drop-shadow-md">Selamat Ulang Tahun Titi!</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#ucapan" className="text-white hover:text-pink-700 transition-colors font-medium">
                Ucapan
              </a>
            </li>
            <li>
              <a href="#galeri" className="text-white hover:text-pink-700 transition-colors font-medium">
                Galeri
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;