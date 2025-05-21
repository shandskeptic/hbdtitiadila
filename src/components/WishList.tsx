import React from 'react';
import { Heart } from 'lucide-react';
import { Wish } from '../types';

interface WishListProps {
  wishes: Wish[];
}

const WishList: React.FC<WishListProps> = ({ wishes }) => {
  // Format date to Indonesian format
  const formatDate = (date: Date): string => {
    return date.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };
  
  return (
    <div className="bg-white rounded-xl shadow-lg">
      <div className="p-6 border-b border-gray-100">
        <h3 className="text-xl font-semibold text-gray-800">Ucapan dari Teman-teman</h3>
      </div>
      
      <div className="divide-y divide-gray-100 max-h-[500px] overflow-y-auto">
        {wishes.length === 0 ? (
          <div className="p-6 text-center text-gray-500">
            <p>Belum ada ucapan. Jadilah yang pertama!</p>
          </div>
        ) : (
          wishes.map((wish) => (
            <div key={wish.id} className="p-6 hover:bg-pink-50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">{wish.name.charAt(0)}</span>
                </div>
                
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium text-gray-800">{wish.name}</h4>
                    <time className="text-xs text-gray-500">{formatDate(wish.timestamp)}</time>
                  </div>
                  
                  <p className="text-gray-700">{wish.message}</p>
                  
                  <div className="mt-2 flex items-center">
                    <button className="flex items-center gap-1 text-pink-500 text-sm hover:text-pink-700 transition-colors">
                      <Heart size={16} className="fill-current" />
                      <span>Suka</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default WishList;