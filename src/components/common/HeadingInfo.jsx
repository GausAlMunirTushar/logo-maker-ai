import React from "react";

const HeadingInfo = ({ title, description }) => {
	return (
		<div>
			<h1 className="text-4xl font-bold my-4">{title}</h1>
			<p className=" text-lg">{description}</p>
		</div>
	);
};

export default HeadingInfo;
