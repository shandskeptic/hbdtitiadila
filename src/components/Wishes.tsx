import React, { useState } from 'react';
import WishForm from './WishForm';
import WishList from './WishList';
import { Wish } from '../types';

// Sample initial wishes
const initialWishes: Wish[] = [
  {
    id: 1,
    name: 'Rina',
    message: 'Selamat ulang tahun Titi! Semoga semua impianmu menjadi kenyataan. Tetap jadi dirimu yang luar biasa!',
    timestamp: new Date(Date.now() - 86400000) // 1 day ago
  },
  {
    id: 2,
    name: 'Ahmad',
    message: 'HBD Titi! Wish you all the best. Semoga panjang umur dan selalu bahagia!',
    timestamp: new Date(Date.now() - 43200000) // 12 hours ago
  },
  {
    id: 3,
    name: 'Dina',
    message: 'Selamat ulang tahun sahabatku tercinta! Terima kasih selalu ada di saat suka dan duka. Love you! ❤️',
    timestamp: new Date(Date.now() - 7200000) // 2 hours ago
  }
];

const Wishes: React.FC = () => {
  const [wishes, setWishes] = useState<Wish[]>(initialWishes);
  
  const addWish = (wish: Wish) => {
    setWishes([wish, ...wishes]);
  };
  
  return (
    <section id="pesan" className="py-20 bg-gradient-to-b from-pink-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-pink-600 mb-2">Ucapan & Harapan</h2>
          <p className="text-gray-600 max-w-xl mx-auto">Bagikan harapan dan doa terbaikmu untuk Titi di hari spesialnya.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <WishForm onAddWish={addWish} />
          <WishList wishes={wishes} />
        </div>
      </div>
    </section>
  );
};

export default Wishes;