"use client";
import LogoTitle from "@/components/common/LogoTitle";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

const CreateLogoPage = () => {
	const [step, setStep] = useState(1);
	const [formData, setFormData] = useState({});
	const onHandleInputChange = (field, value) => {
		setFormData({ ...formData, [field]: value });
	};
	return (
		<div className="container mx-auto px-8 border border-gray-200 rounded-md flex flex-col \ my-10	 py-5 ">
			<div className="w-full">
				{step == 1 ? (
					<LogoTitle
						onHandleInputChange={(value) =>
							onHandleInputChange("title", value)
						}
					/>
				) : null}
			</div>
			<div className="flex justify-between my-4">
				{step !== 1 && (
					<Button onClick={() => setStep(step - 1)} variant="outline">
						<ArrowLeft /> Previous
					</Button>
				)}
				<Button onClick={() => setStep(step + 1)}>
					{" "}
					<ArrowRight /> Continue
				</Button>
			</div>
		</div>
	);
};

export default CreateLogoPage;
