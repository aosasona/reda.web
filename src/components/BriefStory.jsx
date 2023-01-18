import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function BriefStory() {
	const [showStory, setShowStory] = useState(false);

	return (
		<>
			<button onClick={() => setShowStory(!showStory)} className="w-max mx-auto bg-transparent text-primary underline underline-offset-4 decoration-dashed hover:opacity-50 mb-4 p-0">
				Interested in a short story?
			</button>

			<AnimatePresence>
				{showStory && (
					<motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="max-h-[85vh] bg-neutral-900 bg-opacity-50 rounded-lg p-6 lg:py-10 lg:px-12 overflow-scroll hidden-scrollbar" x-show="showStory">
						<p className="font-light leading-loose opacity-75">
							It’s 2022, but Tom still opens and reads PDFs like it’s 2010; stored in different folders (docs, school, downloads etc... gosh! how does Tom survive?), looks through his file manager or that other app we won’t mention every-time to find a file “conveniently” named
							“writing_interpreters (1).pdf”. That’s where Reda (pronounced as Reader; easy) comes in, still don’t understand? I don’t either, so let’s go back a bit more. Remember those days when you would download movies from the web or get it from a friend (probably because you
							couldn’t find it on the streaming platform you pay for; or that other reason you know), and you would have to battle with a video player to get it to show up with a terrible thumbnail, you’d play it and then it’d hit you “$hit, I need the subtitle!” and then you try to
							find one that matches your version for minutes and when you think you have, you have to import it into that video player and then you would have to tinker with the settings and slow it down a bit for a manageable experience... and then came along Infuse; download, import
							it into Infuse any of the many ways you can and then you’d open the app to find a streaming app’s library-like experience; the right thumbnail, cast details, movie ‘plot’, subtitles, ratings etc! Now that you get the picture, Reda simply brings a similar experience to
							your digital documents!
						</p>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
