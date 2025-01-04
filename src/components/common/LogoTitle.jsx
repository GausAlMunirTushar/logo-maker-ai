"use client";
import { useState } from "react";
import HeadingInfo from "./HeadingInfo";
import { useSearchParams } from "next/navigation";

const LogoTitle = ({ onHandleInputChange }) => {
	const searchParam = useSearchParams();
	const [title, setTitle] = useState(searchParam.get("title") ?? "");
	return (
		<div>
			<HeadingInfo
				title="Create Logo"
				description="Create your own logo with our easy to use logo maker tool."
			/>
			<div className="w-full mt-6 mb-10">
				<input
					className="w-full border-2 border-gray-200 rounded-md px-4 py-2.5 focus:outline-gray-400"
					type="text"
					placeholder="Enter your business name"
					defaultValue={title}
					onChange={(e) => onHandleInputChange(e)}
				/>
			</div>
		</div>
	);
};

export default LogoTitle;
