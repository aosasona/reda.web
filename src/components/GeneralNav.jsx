import { FiMenu } from "react-icons/fi/index.js";
import { BsX } from "react-icons/bs/index.js";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function GeneralNav() {
	const [showMobileNav, setShowMobileNav] = useState(false);

	const toggleMobileNav = () => {
		setShowMobileNav(!showMobileNav);
	};

	return (
		<div>
			<nav className="w-screen flex justify-between items-center bg-dark bg-opacity-40 backdrop-blur-lg fixed top-0 border-b border-b-neutral-900 py-6 lg:py-8 px-6 lg:px-8 z-[99999]">
				<a href="/" className="p-0 m-0">
					<img src="/logo_white.svg" className="h-5 lg:h-6" />
				</a>
				{/* <div className="hidden lg:block space-x-6">
					<a href="#" className="opacity-60 cursor-not-allowed">
						Sign in
					</a>
					<a href="#" className="opacity-60 cursor-not-allowed">
						Pricing
					</a>
				</div> */}
				<div className="lg:hidden">
					<button className="bg-transparent text-white px-0 py-1 m-0" onClick={toggleMobileNav}>
						<FiMenu size={20} />
					</button>
				</div>
			</nav>

			<AnimatePresence>
				{showMobileNav && (
					<motion.div initial={{ x: "100%", opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: "-100%", opacity: 0 }} className="w-screen h-screen fixed top-0 left-0 z-[999999] bg-dark bg-opacity-60 backdrop-blur-xl">
						<div className="w-full h-full flex flex-col gap-5 justify-center items-center">
							<a href="/" className="block text-white text-xl">
								Home
							</a>
							{/* <a href="#" className="block text-white text-xl">
								Sign in
							</a>
							<a href="#" className="block text-white text-xl">
								Pricing
							</a> */}
							<button className="border border-dashed border-white bg-transparent text-white rounded-full p-2 mt-16" onClick={() => setShowMobileNav(false)}>
								<BsX size={20} />
							</button>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
