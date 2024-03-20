"use client";
import { Code } from "lucide-react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const socials = [
	{
		icon: <Code size={20} />,
		label: "Twitter",
		handle: "@TarunPahade",
	},
	{
		icon: <Code size={20} />,
		label: "Email",
		handle: "tarunpahade55@gmail.com",
	},
	{
		icon: <Code size={20} />,
		label: "Github",
		handle: "Tarun",
	},
];

export default function Example() {

	return (
		<div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className="relative pt-20 max-w-2xl pb-0 mx-auto lg:mx-0 w-full text-center lg:ml-[20%]  md:ml-[10%] ml-[0%] ">
				<h2 className="text-3xl font-bold pl-5 pb-0 mb-0 tracking-tight text-zinc-100 sm:text-4xl">
					Skills
				</h2>
				<p className="mt-2 text-zinc-400 pl-5 ">
					All My Skills
				</p>
			</div>

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
										{s.handle}
									</span>
									<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
										{s.label}
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
