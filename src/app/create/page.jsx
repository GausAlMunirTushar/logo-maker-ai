import HeadingInfo from "@/components/common/HeadingInfo";
import LogoTitle from "@/components/common/LogoTitle";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";

const CreateLogoPage = () => {
	return (
		<div className="container mx-auto px-8 border border-gray-200 rounded-md flex flex-col \ my-10	 py-5 ">
			<div className="w-full">
				<LogoTitle />
			</div>
			<div className="flex justify-between my-4">
				<Button variant="outline">
					<ArrowLeft /> Previous
				</Button>
				<Button>
					{" "}
					<ArrowRight /> Continue
				</Button>
			</div>
		</div>
	);
};

export default CreateLogoPage;
