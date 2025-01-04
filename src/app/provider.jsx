import Header from "@/components/layouts/Header";
import React from "react";

const Provider = ({ children }) => {
	return (
		<div>
			<Header />
			{children}
		</div>
	);
};

export default Provider;
