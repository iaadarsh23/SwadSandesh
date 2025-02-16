import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { getdata } from "../api/openaiApi";
export default function MyForm() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors, isSubmitting },
	} = useForm();

	//handlesubmit is data dega aur ye object return karvayega
	function OnSubmit(data) {
		// useEffect(() => {
		// 	getdata(data);
		// }, []);
		console.log(data);
	}

	return (
		<div className="p-4">
			<form
				className="flex gap-6 min-w-[150px]"
				onSubmit={handleSubmit(OnSubmit)}
			>
				<input
					type="text"
					aria-label="ingredients"
					name="dish"
					placeholder="eg. Shahi Paneer"
					className="border border-gray-300 p-2 rounded-md w-[50rem]"
					//1. react-hook-form se link kar rhe hai hum
					//2.applying validation to it
					{...register("dishName", {
						required: true,
						maxLength: 15,
						minLength: 3,
					})}
				/>
				{/* button ko disabled kr denge when api is calling in backgroung */}
				<button
					type="submit"
					className="w-[30rem] bg-black text-white p-2 rounded-md hover:bg-green-600"
					disabled={isSubmitting}
					//agr submit ho rha h toh getting recipe dikhega
					value={isSubmitting ? "Getting Recipe" : "Get"}
				>
					Get Recipe
				</button>
			</form>
		</div>
	);
}
