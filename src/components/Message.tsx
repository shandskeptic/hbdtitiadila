import React from 'react';
import { HeartIcon } from 'lucide-react';

const Message: React.FC = () => {
  return (
    <section id="ucapan" className="py-20 bg-gradient-to-r from-pink-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-pink-600 mb-2">Ucapan Spesial</h2>
          <p className="text-gray-600 max-w-xl mx-auto">Sebuah pesan kecil untuk menunjukkan betapa spesialnya kamu.</p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="flex justify-center mb-8">
              <div className="h-16 w-16 bg-pink-100 rounded-full flex items-center justify-center">
                <HeartIcon className="h-8 w-8 text-pink-500 fill-pink-500" />
              </div>
            </div>
            
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Untuk Titi Adila Tersayangg</h3>
              <div className="w-16 h-1 bg-pink-500 mx-auto mb-6"></div>
            </div>
            
            <div className="text-gray-700 space-y-4 text-lg leading-relaxed">
              <p>
                Selamat ulang tahun, sayanggku! Hari ini adalah hari yang sangat spesial karena dunia diberkati dengan kehadiranmu.
              </p>
              <p>
                Tiap hari bersamamu adalah anugerah. Senyummu adalah sinar matahari yang menerangi hari-hariku. Tawamu adalah melodi terindah yang pernah kudengar.
              </p>
              <p>
                Di ulang tahunmu yang istimewa ini, aku berharap semua impianmu menjadi kenyataan. Semoga tahun barumu dipenuhi dengan kebahagiaan, kesehatan, dan keberhasilan.
              </p>
              <p>
                Terima kasih telah menjadi bagian dari hidupku. Terima kasih untuk setiap momen indah yang kita lalui bersama. Aku bersyukur memilikimu.
              </p>
              <p className="font-medium text-pink-600">
                Aku mencintaimu lebih dari yang dapat diungkapkan dengan kata-kata. Selamat ulang tahun, Titi!
              </p>
            </div>
            
            <div className="mt-10 text-center">
              <p className="italic text-gray-500">"Setiap detik bersamamu adalah hadiah terbaik yang pernah aku terima."</p>
              <p className="mt-4 font-bold text-gray-800">Dengan cinta,</p>
              <p className="text-pink-600 font-medium">❤️ Pacarmu ❤️</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Message;