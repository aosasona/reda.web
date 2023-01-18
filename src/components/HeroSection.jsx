import { DiApple, DiAndroid } from "react-icons/di/index.js";
import { useState } from "react";

export default function HeroSection() {
	const [showDownloadOptions, setShowDownloadOptions] = useState(false);

	const toggleDownloadOptions = () => {
		setShowDownloadOptions(!showDownloadOptions);
	};

	return (
		<section className="w-screen max-w-none border-b border-b-neutral-900 px-0 pt-2">
			<div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 2xl:gap-10 px-4 lg:px-8">
				<div className="text-center lg:text-left flex flex-col gap-4 items-center lg:items-start lg:gap-5 self-center px-2">
					<div className="border-2 border-amber-600 flex items-center gap-1 p-1.5 rounded-3xl">
						<p className="text-xs text-amber-600 font-semibold tracking-wide select-none px-2">Public Beta</p>
					</div>
					<h1 className="lg:w-full leading-snug lg:leading-tight text-[2.75rem] md:text-6xl xl:text-7xl font-bold text-transparent bg-gradient-to-t bg-clip-text from-zinc-50/70 to-white">The way to own your library.</h1>
					<p className="text-sm lg:text-base text-neutral-600">Reda allows you to import, organise, share and read your books, articles, and other digital documents anytime, anywhere.</p>
					<div className="w-max relative">
						<button onClick={toggleDownloadOptions}>Try it out now</button>
						{showDownloadOptions && (
							<div className="w-full absolute top-[125%] bg-neutral-900 bg-opacity-50 backdrop-blur-lg rounded-md z-[99]">
								<a href="https://testflight.apple.com/join/ObUyBzN2" className="w-full hover:opacity-50 flex items-center gap-2 px-3.5 py-3" target="_blank" rel="noopener noreferrer">
									<DiApple size={18} />
									<p className="text-sm">iPhone (iOS)</p>
								</a>
								<hr className="opacity-10" />
								<a href="https://play.google.com/store/apps/details?id=com.wytehq.reda" className="w-full hover:opacity-50 flex items-center gap-2 px-3.5 py-3">
									<DiAndroid size={18} />
									<p className="text-sm">Android</p>
								</a>
							</div>
						)}
					</div>
				</div>

				<div className="w-full relative self-end">
					<img src="/mockup_one.png" className="w-full sm:w-4/5 2xl:w-4/6 mt-auto mx-auto object-contain" />
				</div>
			</div>
		</section>
	);
}
