import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const Header = () => {
	return (
		<div className="container mx-auto flex justify-between items-center py-4 shadow px-4 rounded-md my-2">
			<Image src="/images/logo.svg" alt="Logo" width={100} height={100} />
			<Button>Get Started</Button>
		</div>
	);
};

export default Header;
