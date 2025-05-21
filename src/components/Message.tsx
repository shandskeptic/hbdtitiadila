import React from 'react';
import { HeartIcon } from 'lucide-react';

const Message: React.FC = () => {
	return (
		<section id="ucapan" className="bg-gradient-to-r from-pink-50 to-purple-50 py-20">
			<div className="mx-auto px-4 container">
				<div className="mb-12 text-center">
					<h2 className="mb-2 font-bold text-pink-600 text-3xl">Ucapan Spesial</h2>
					<p className="mx-auto max-w-xl text-gray-600">Sebuah pesan kecil untuk menunjukkan betapa spesialnya kamu.</p>
				</div>

				<div className="bg-white shadow-xl mx-auto rounded-2xl max-w-3xl overflow-hidden">
					<div className="p-8 md:p-12">
						<div className="flex justify-center mb-8">
							<div className="flex justify-center items-center bg-pink-100 rounded-full w-16 h-16">
								<HeartIcon className="fill-pink-500 w-8 h-8 text-pink-500" />
							</div>
						</div>

						<div className="mb-8 text-center">
							<h3 className="mb-4 font-bold text-gray-800 text-2xl">Untuk Titi Adila Tersayangg</h3>
							<div className="bg-pink-500 mx-auto mb-6 w-16 h-1"></div>
						</div>

						<div className="space-y-4 text-gray-700 text-lg leading-relaxed">
							<p>Selamat ulang tahun, sayanggku! Hari ini adalah hari yang sangat spesial karena dunia diberkati dengan kehadiranmu.</p>
							<p>Tiap hari bersamamu adalah anugerah. Senyummu adalah sinar matahari yang menerangi hari-hariku. Tawamu adalah melodi terindah yang pernah kudengar.</p>
							<p>Di ulang tahunmu yang istimewa ini, aku berharap semua impianmu menjadi kenyataan. Semoga tahun barumu dipenuhi dengan kebahagiaan, kesehatan, dan keberhasilan.</p>
							<p>Terima kasih telah menjadi bagian dari hidupku. Terima kasih untuk setiap momen indah yang kita lalui bersama. Aku bersyukur memilikimu.</p>
							<p className="font-medium text-pink-600">Aku mencintaimu lebih dari yang dapat diungkapkan dengan kata-kata. Selamat ulang tahun, Titi!</p>
						</div>

						<div className="mt-10 text-center">
							<p className="text-gray-500 italic">"Setiap detik bersamamu adalah hadiah terbaik yang pernah aku terima."</p>
							<p className="mt-4 font-bold text-gray-800">Dengan cinta,</p>
							<p className="font-medium text-pink-600">❤️ syandka ❤️</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Message;
