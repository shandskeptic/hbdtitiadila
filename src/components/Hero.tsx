import React, { useEffect, useState, useRef } from 'react';
import { Cake, Heart, Music, Music as MusicOff } from 'lucide-react';
import Confetti from './Confetti';
import birthdayMusic from '../audio/hbd.wav';

const Hero: React.FC = () => {
	const [isPlaying, setIsPlaying] = useState(false);
	const [countdown, setCountdown] = useState({
		hours: 0,
		minutes: 0,
		seconds: 0,
	});
	const audioRef = useRef<HTMLAudioElement | null>(null);

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

		// Create audio element
		audioRef.current = new Audio(birthdayMusic);
		audioRef.current.loop = true; // Make the music loop

		// Autoplay when component mounts
		const playPromise = audioRef.current.play();

		if (playPromise !== undefined) {
			playPromise
				.then(() => {
					setIsPlaying(true);
				})
				.catch((error) => {
					// Autoplay was prevented
					console.log('Autoplay prevented:', error);
					setIsPlaying(false);
				});
		}

		// Cleanup on unmount
		return () => {
			clearInterval(interval);
			if (audioRef.current) {
				audioRef.current.pause();
				audioRef.current = null;
			}
		};
	}, []);

	const toggleMusic = () => {
		if (audioRef.current) {
			if (isPlaying) {
				audioRef.current.pause();
			} else {
				audioRef.current.play();
			}
			setIsPlaying(!isPlaying);
		}
	};

	return (
		<div className="relative bg-gradient-to-b from-pink-100 to-purple-100 min-h-[90vh] overflow-hidden">
			<Confetti />

			<div className="top-4 right-4 z-10 absolute">
				<button onClick={toggleMusic} className="bg-white hover:bg-pink-100 shadow-lg p-3 rounded-full transition-colors">
					{isPlaying ? <MusicOff size={24} className="text-pink-500" /> : <Music size={24} className="text-pink-500" />}
				</button>
			</div>

			<div className="z-[5] relative mx-auto px-4 pt-20 pb-16 container">
				<div className="mx-auto max-w-3xl text-center">
					<div className="flex justify-center mb-6">
						<Cake className="w-20 h-20 text-pink-500" />
					</div>

					<h1 className="bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-pink-400 mb-6 font-bold text-transparent text-5xl md:text-7xl">Titi Adila</h1>

					<h2 className="mb-8 font-semibold text-pink-600 text-3xl md:text-4xl">Selamat Ulang Tahun ✨</h2>

					<p className="mb-10 text-gray-700 text-xl leading-relaxed">Hari ini adalah hari spesial untuk orang yang spesial. Semoga hari ulang tahunmu dipenuhi dengan cinta, kebahagiaan, dan keajaiban!</p>

					<div className="flex justify-center gap-4 mb-12">
						<div className="bg-white shadow-lg px-6 py-4 rounded-xl">
							<span className="block font-bold text-pink-600 text-3xl">{countdown.hours}</span>
							<span className="text-gray-500 text-sm">Jam</span>
						</div>
						<div className="bg-white shadow-lg px-6 py-4 rounded-xl">
							<span className="block font-bold text-pink-600 text-3xl">{countdown.minutes}</span>
							<span className="text-gray-500 text-sm">Menit</span>
						</div>
						<div className="bg-white shadow-lg px-6 py-4 rounded-xl">
							<span className="block font-bold text-pink-600 text-3xl">{countdown.seconds}</span>
							<span className="text-gray-500 text-sm">Detik</span>
						</div>
					</div>

					<div className="animate-bounce">
						<a href="#ucapan" className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 shadow-lg hover:shadow-xl px-8 py-3 rounded-full font-medium text-white transition-all">
							<span>Lihat Pesanku</span>
							<Heart className="fill-white w-5 h-5" />
						</a>
					</div>
				</div>
			</div>

			{/* Decorative floating elements */}
			<div className="top-1/4 left-[10%] absolute bg-pink-300 opacity-40 rounded-full w-20 h-20 animate-float"></div>
			<div className="top-1/3 right-[15%] absolute bg-purple-300 opacity-50 rounded-full w-16 h-16 animate-float-delay"></div>
			<div className="bottom-1/4 left-[20%] absolute bg-pink-200 opacity-60 rounded-full w-12 h-12 animate-float-slow"></div>
			<div className="right-[10%] bottom-1/3 absolute bg-pink-400 opacity-30 rounded-full w-24 h-24 animate-float-slower"></div>
		</div>
	);
};

export default Hero;
