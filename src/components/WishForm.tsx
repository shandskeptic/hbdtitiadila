import React, { useState } from 'react';
import { Check, Send } from 'lucide-react';
import { Wish } from '../types';

interface WishFormProps {
  onAddWish: (wish: Wish) => void;
}

const WishForm: React.FC<WishFormProps> = ({ onAddWish }) => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !message.trim()) return;
    
    const newWish: Wish = {
      id: Date.now(),
      name: name.trim(),
      message: message.trim(),
      timestamp: new Date(),
    };
    
    onAddWish(newWish);
    setIsSubmitted(true);
    
    // Reset form after some time
    setTimeout(() => {
      setName('');
      setMessage('');
      setIsSubmitted(false);
    }, 3000);
  };
  
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Kirim Ucapan Ulang Tahun</h3>
      
      {isSubmitted ? (
        <div className="py-8 flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <Check className="h-8 w-8 text-green-500" />
          </div>
          <h4 className="text-xl font-medium text-gray-800 mb-2">Terima Kasih!</h4>
          <p className="text-gray-600">Ucapan ulang tahunmu telah dikirim.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Nama
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
              placeholder="Masukkan namamu"
              required
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Pesan
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500 min-h-[120px]"
              placeholder="Tulis ucapan ulang tahun untuk Titi..."
              required
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium py-2 px-4 rounded-md hover:from-pink-600 hover:to-purple-600 transition-colors flex items-center justify-center gap-2"
          >
            <span>Kirim Ucapan</span>
            <Send size={18} />
          </button>
        </form>
      )}
    </div>
  );
};

export default WishForm;