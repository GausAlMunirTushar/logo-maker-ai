import React from "react";
import { Button } from "../ui/button";

const Hero = () => {
	return (
		<div className="container mx-auto flex flex-col items-center justify-center h-screen">
			<h1 className="text-4xl font-bold my-2 text-center">
				Ingo Logo Maker AI
			</h1>
			<h2 className="text-7xl font-bold my-2 text-center">
				Generate a logo for your business in seconds
			</h2>
			<p className="my-3 text-gray-500 text-center">
				AI-powered tool to create stunning logos effortlessly.{" "}
			</p>
			<div className="flex items-center my-4">
				<input
					className="px-4 py-2.5 border border-gray-600 rounded-s-lg focus:outline-none"
					type="text"
					placeholder=""
				/>
				<Button className="px-4 py-[23px] rounded-s-none">
					Get Started
				</Button>
			</div>
		</div>
	);
};

export default Hero;
