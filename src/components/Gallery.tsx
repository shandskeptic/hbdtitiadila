import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Photo } from '../types';
import MyImage1 from '../image/1.jpg';
import MyImage2 from '../image/2.jpg';
import MyImage3 from '../image/3.jpg';
import MyImage4 from '../image/4.jpg';
import MyImage5 from '../image/5.jpg';
import MyImage6 from '../image/6.jpg';

const photos: Photo[] = [
	{
		id: 1,
		url: MyImage1,
		caption: 'Momen bahagia',
	},
	{
		id: 2,
		url: MyImage2,
		caption: 'Senyummu yang selalu membuatku jatuh cinta',
	},
	{
		id: 3,
		url: MyImage3,
		caption: 'Kenangan indah yang tak terlupakan',
	},
	{
		id: 4,
		url: MyImage4,
		caption: 'Waktu berharga bersama',
	},
	{
		id: 5,
		url: MyImage5,
		caption: 'Perjalanan cinta kita',
	},
	{
		id: 6,
		url: MyImage6,
		caption: 'Kamu adalah hadiah terindah dalam hidupku',
	},
];

const Gallery: React.FC = () => {
	const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

	const openModal = (photo: Photo) => {
		setSelectedPhoto(photo);
	};

	const closeModal = () => {
		setSelectedPhoto(null);
	};

	const navigatePhoto = (direction: 'prev' | 'next') => {
		if (!selectedPhoto) return;

		const currentIndex = photos.findIndex((photo) => photo.id === selectedPhoto.id);
		let newIndex;

		if (direction === 'prev') {
			newIndex = currentIndex > 0 ? currentIndex - 1 : photos.length - 1;
		} else {
			newIndex = currentIndex < photos.length - 1 ? currentIndex + 1 : 0;
		}

		setSelectedPhoto(photos[newIndex]);
	};

	return (
		<section id="galeri" className="bg-gradient-to-r from-purple-50 to-pink-50 py-20">
			<div className="mx-auto px-4 container">
				<div className="mb-12 text-center">
					<h2 className="mb-2 font-bold text-pink-600 text-3xl">Galeri Kenangan</h2>
					<p className="mx-auto max-w-xl text-gray-600">Momen-momen akan selalu terkenang.</p>
				</div>

				<div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
					{photos.map((photo) => (
						<div key={photo.id} className="group relative shadow-lg hover:shadow-xl rounded-xl overflow-hidden transition-all hover:-translate-y-1 duration-300 cursor-pointer transform" onClick={() => openModal(photo)}>
							<div className="relative aspect-[4/3]">
								<img src={photo.url} alt={photo.caption} className="w-full h-full object-cover" />
								<div className="absolute inset-0 flex items-end bg-gradient-to-t from-pink-900/70 to-transparent opacity-0 group-hover:opacity-100 p-4 transition-opacity duration-300">
									<p className="font-medium text-white">{photo.caption}</p>
								</div>
							</div>

							<div className="top-0 left-0 absolute opacity-0 group-hover:opacity-100 border-4 border-pink-300 rounded-xl w-full h-full scale-105 transition-all duration-300 transform"></div>
						</div>
					))}
				</div>
			</div>

			{/* Modal */}
			{selectedPhoto && (
				<div className="z-50 fixed inset-0 flex justify-center items-center bg-black/80 p-4">
					<button className="top-4 right-4 absolute bg-pink-600 hover:bg-pink-700 p-2 rounded-full text-white transition-colors" onClick={closeModal}>
						<X size={24} />
					</button>

					<button className="top-1/2 left-4 absolute bg-pink-600 hover:bg-pink-700 p-2 rounded-full text-white transition-colors -translate-y-1/2" onClick={() => navigatePhoto('prev')}>
						<ChevronLeft size={24} />
					</button>

					<button className="top-1/2 right-4 absolute bg-pink-600 hover:bg-pink-700 p-2 rounded-full text-white transition-colors -translate-y-1/2" onClick={() => navigatePhoto('next')}>
						<ChevronRight size={24} />
					</button>

					<div className="bg-white rounded-xl w-full max-w-4xl overflow-hidden">
						<div className="relative aspect-video">
							<img src={selectedPhoto.url} alt={selectedPhoto.caption} className="w-full h-full object-contain" />
						</div>
						<div className="bg-gradient-to-r from-pink-100 to-purple-100 p-4">
							<p className="text-gray-800 text-lg">{selectedPhoto.caption}</p>
						</div>
					</div>
				</div>
			)}
		</section>
	);
};

export default Gallery;
