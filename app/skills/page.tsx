"use client";
import { Code, CodeIcon, PhoneCall } from "lucide-react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const socials = [
	{
		icon: <Code size={20} />,
		label: "Mobile Developnment",
		description: "Crsoo Platform Developnment With Expo and React Native",
	},
	{
		icon: <CodeIcon size={20} />,
		label: "Web Developnment",
		description: "Next Js , MERN stack , Hosting , SEO , HTML CSS JS",
	},
	{
		icon: <PhoneCall size={20} />,
		label: "Sales",
		description: "Cold Calls Cold outreach ,Customer Feedback ",
	},
];

export default function Example() {

	return (
		<div className=" bg-gradient-to-tl pt-20 from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className="container mt-5 flex items-center justify-center min-h-min px-4 mx-auto">

				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">

					{socials.map((s) => (
						<Card>
							<div

								className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
							>
								<span
									className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
									aria-hidden="true"
								/>
								<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
									{s.icon}
								</span>{" "}
								<div className="z-10 flex flex-col items-center">
									<span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
									{s.label}
									</span>
									<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
									{s.description}
									</span>
								</div>
							</div>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
